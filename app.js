const questions = window.FDRP_QUESTIONS || [];

const state = {
  section: "guide",
  guidePage: "foundation",
  level: "basic",
  selectedId: "B01",
  query: "",
  progress: loadProgress()
};

const levelNames = {
  basic: "Basic",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

const topicNames = {
  "fractions-decimals-percentages": "FDP conversion",
  percentages: "Percentages",
  "reverse-percentages": "Reverse percentages",
  ratio: "Ratio",
  "multi-step": "Multi-step reasoning"
};

function init() {
  bindMainTabs();
  bindGuideTabs();
  bindQuestionControls();
  renderQuestionList();
  renderQuestion(findQuestion(state.selectedId) || questions[0]);
  updateProgressStats();
}

function bindMainTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.dataset.section;
      state.section = section;

      document.querySelectorAll(".tab-button").forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      document.querySelectorAll(".app-section").forEach((item) => {
        item.classList.toggle("active", item.id === section);
      });
    });
  });
}

function bindGuideTabs() {
  document.querySelectorAll(".guide-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const guidePage = button.dataset.guide;
      state.guidePage = guidePage;

      document.querySelectorAll(".guide-tab").forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      document.querySelectorAll(".guide-page").forEach((item) => {
        item.classList.toggle("active", item.id === `guide-${guidePage}`);
      });
    });
  });
}

function bindQuestionControls() {
  document.querySelectorAll(".level-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.level = button.dataset.level;
      state.selectedId = firstQuestionForLevel(state.level)?.id || state.selectedId;
      document.querySelectorAll(".level-tab").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      renderQuestionList();
      renderQuestion(findQuestion(state.selectedId));
    });
  });

  const search = document.getElementById("question-search");
  search.addEventListener("input", () => {
    state.query = search.value.trim().toLowerCase();
    renderQuestionList();
  });

  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!window.confirm("Reset all saved practice progress?")) return;
    state.progress = {};
    saveProgress();
    renderQuestionList();
    renderQuestion(findQuestion(state.selectedId));
    updateProgressStats();
  });
}

function firstQuestionForLevel(level) {
  return questions.find((question) => question.level === level);
}

function findQuestion(id) {
  return questions.find((question) => question.id === id);
}

function renderQuestionList() {
  const list = document.getElementById("question-list");
  const filtered = questions.filter((question) => {
    if (question.level !== state.level) return false;
    if (!state.query) return true;
    const searchable = [
      question.id,
      question.title,
      question.topic,
      question.prompt,
      ...(question.skills || [])
    ].join(" ").toLowerCase();
    return searchable.includes(state.query);
  });

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-list">No questions match this search.</div>`;
    return;
  }

  list.innerHTML = filtered.map((question) => {
    const status = state.progress[question.id]?.status || "";
    return `
      <button class="question-item ${question.id === state.selectedId ? "active" : ""}" type="button" data-id="${escapeHtml(question.id)}">
        <span class="qid">${escapeHtml(question.id)}</span>
        <span>
          <span class="qtitle">${escapeHtml(question.title)}</span>
          <span class="qtopic">${escapeHtml(topicNames[question.topic] || question.topic)}</span>
        </span>
        <span class="status-dot ${escapeHtml(status)}" aria-label="${status || "not checked"}"></span>
      </button>
    `;
  }).join("");

  list.querySelectorAll(".question-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.id;
      renderQuestionList();
      renderQuestion(findQuestion(state.selectedId));
    });
  });
}

function renderQuestion(question) {
  if (!question) return;

  const saved = state.progress[question.id];
  const card = document.getElementById("question-card");
  const skills = (question.skills || []).map((skill) => `<span class="pill">${escapeHtml(skill)}</span>`).join("");
  const savedAnswer = saved?.lastAnswer || "";

  card.innerHTML = `
    <div class="question-meta">
      <span class="pill">${escapeHtml(levelNames[question.level])}</span>
      <span class="pill">${escapeHtml(topicNames[question.topic] || question.topic)}</span>
      ${skills}
    </div>
    <h3>${escapeHtml(question.id)}. ${escapeHtml(question.title)}</h3>
    <p class="question-prompt">${escapeHtml(question.prompt)}</p>

    <label class="search-label" for="answer-box">Your answer and working</label>
    <textarea id="answer-box" class="answer-box" placeholder="Write the answer with a short explanation. Example: 80% = £80, so 100% = £100.">${escapeHtml(savedAnswer)}</textarea>

    <div class="button-row">
      <button id="check-answer" class="primary-button" type="button">Check Answer</button>
      <button id="show-hint" class="secondary-button" type="button">Hint</button>
      <button id="show-model" class="ghost-button" type="button">Model Answer</button>
    </div>

    <div id="hint-panel" class="hint-panel">
      <strong>Hint:</strong> ${escapeHtml(question.hint)}
    </div>
    <div id="feedback-panel" class="feedback-panel"></div>
    <div id="model-panel" class="model-panel">
      <h4>Model answer</h4>
      ${renderModel(question.model)}
    </div>
  `;

  const answerBox = document.getElementById("answer-box");
  const hintPanel = document.getElementById("hint-panel");
  const feedbackPanel = document.getElementById("feedback-panel");
  const modelPanel = document.getElementById("model-panel");

  answerBox.addEventListener("input", () => {
    const existing = state.progress[question.id] || {};
    state.progress[question.id] = {
      ...existing,
      lastAnswer: answerBox.value
    };
    saveProgress();
  });

  document.getElementById("show-hint").addEventListener("click", () => {
    hintPanel.classList.toggle("visible");
  });

  document.getElementById("show-model").addEventListener("click", () => {
    modelPanel.classList.toggle("visible");
  });

  document.getElementById("check-answer").addEventListener("click", () => {
    const answer = answerBox.value.trim();

    if (!answer) {
      showFeedback(feedbackPanel, "wrong", "Type an answer first. Include the important number, fraction or ratio.");
      return;
    }

    const result = evaluateAnswer(question, answer);
    state.progress[question.id] = {
      status: result.status,
      lastAnswer: answer,
      checkedAt: new Date().toISOString()
    };
    saveProgress();
    updateProgressStats();
    renderQuestionList();

    showFeedback(feedbackPanel, result.status, result.message);
    modelPanel.classList.add("visible");
  });

  if (saved?.status) {
    const resultLabel = saved.status === "correct" ? "Previously correct." : saved.status === "partial" ? "Previously partly correct." : "Previously incorrect.";
    showFeedback(feedbackPanel, saved.status, `${resultLabel} Check again if you have changed the working.`);
  }
}

function renderModel(model) {
  if (Array.isArray(model)) {
    return `<ol>${model.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
  }

  return `<p>${escapeHtml(model || "")}</p>`;
}

function showFeedback(panel, status, message) {
  panel.className = `feedback-panel visible ${status}`;
  panel.innerHTML = `<strong>${feedbackTitle(status)}</strong><br>${escapeHtml(message)}`;
}

function feedbackTitle(status) {
  if (status === "correct") return "Correct";
  if (status === "partial") return "Partly correct";
  return "Try again";
}

function evaluateAnswer(question, answer) {
  const parsed = parseAnswer(answer);
  const results = question.checks.map((check) => ({
    check,
    matched: matchesCheck(check, parsed)
  }));
  const matched = results.filter((result) => result.matched);
  const missing = results.filter((result) => !result.matched);

  if (matched.length === results.length) {
    return {
      status: "correct",
      message: "You matched all the required parts. Compare your working with the model answer for method."
    };
  }

  if (matched.length > 0) {
    return {
      status: "partial",
      message: `You matched ${matched.map((result) => result.check.label).join(", ")}. Recheck ${missing.map((result) => result.check.label).join(", ")}.`
    };
  }

  return {
    status: "wrong",
    message: `The required answer should include ${results.map((result) => result.check.label).join(", ")}. Use the hint, then compare with the model answer.`
  };
}

function parseAnswer(answer) {
  const text = normalise(answer);
  const numbers = [];
  const percents = [];
  const fractions = [];
  const ratios = [];

  const percentRegex = /(-?\d+(?:\.\d+)?)\s*%/g;
  let match;
  while ((match = percentRegex.exec(text)) !== null) {
    percents.push(Number(match[1]));
  }

  const fractionRegex = /(-?\d+)\s*\/\s*(-?\d+)/g;
  while ((match = fractionRegex.exec(text)) !== null) {
    const numerator = Number(match[1]);
    const denominator = Number(match[2]);
    if (denominator !== 0) {
      fractions.push({ numerator, denominator, value: numerator / denominator });
    }
  }

  const ratioRegex = /(\d+(?:\.\d+)?)\s*(?::| to )\s*(\d+(?:\.\d+)?)(?:\s*(?::| to )\s*(\d+(?:\.\d+)?))?/g;
  while ((match = ratioRegex.exec(text)) !== null) {
    ratios.push([match[1], match[2], match[3]].filter(Boolean).map(Number));
  }

  const numberRegex = /-?\d+(?:\.\d+)?/g;
  while ((match = numberRegex.exec(text)) !== null) {
    numbers.push(Number(match[0]));
  }

  return { text, numbers, percents, fractions, ratios };
}

function matchesCheck(check, parsed) {
  if (check.aliases?.some((alias) => parsed.text.includes(normalise(alias)))) {
    return true;
  }

  if (check.type === "ratio") {
    return parsed.ratios.some((ratio) => sameRatio(ratio, check.value));
  }

  if (check.type === "fraction") {
    const expected = check.numerator / check.denominator;
    if (parsed.fractions.some((fraction) => closeEnough(fraction.value, expected, 0.0001))) return true;
    if (parsed.numbers.some((number) => closeEnough(number, expected, 0.0001))) return true;
    return parsed.percents.some((percent) => closeEnough(percent / 100, expected, 0.0001));
  }

  let expectedValues = [check.value, ...(check.accept || [])].filter((value) => value !== undefined);
  const tolerance = check.tolerance ?? 0.01;
  const candidates = [...parsed.numbers, ...parsed.fractions.map((fraction) => fraction.value)];

  if (check.type === "percent" && check.acceptDecimal) {
    expectedValues = [...expectedValues, ...expectedValues.map((value) => value / 100)];
  }

  return expectedValues.some((expected) => candidates.some((candidate) => closeEnough(candidate, expected, tolerance)));
}

function sameRatio(actual, expected) {
  if (actual.length !== expected.length) return false;
  const actualReduced = reduceRatio(actual);
  const expectedReduced = reduceRatio(expected);
  return actualReduced.every((value, index) => closeEnough(value, expectedReduced[index], 0.0001));
}

function reduceRatio(values) {
  const wholeValues = values.map((value) => Math.round(value * 1000));
  const divisor = wholeValues.reduce((current, value) => gcd(current, value));
  return wholeValues.map((value) => value / divisor);
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const next = b;
    b = a % b;
    a = next;
  }
  return a || 1;
}

function closeEnough(actual, expected, tolerance) {
  return Math.abs(actual - expected) <= tolerance;
}

function normalise(value) {
  return String(value)
    .toLowerCase()
    .replace(/[£$,]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function updateProgressStats() {
  const entries = Object.values(state.progress).filter((entry) => entry.status);
  const correct = entries.filter((entry) => entry.status === "correct").length;
  document.getElementById("answered-count").textContent = entries.length;
  document.getElementById("correct-count").textContent = correct;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem("fdrp-progress") || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem("fdrp-progress", JSON.stringify(state.progress));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

init();
