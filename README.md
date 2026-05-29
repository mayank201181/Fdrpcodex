# FDRP Practice Lab

A static web app for Year 7 IGCSE-style practice on fractions, decimals, ratios and percentages.

## What is included

- A seven-chapter visual guide covering foundations, fractions, decimals, ratios, percentages, reverse percentages and word-problem thinking.
- A 75-question word-problem bank:
  - 25 basic questions
  - 25 intermediate questions
  - 25 advanced questions
- Hidden hints for every question.
- Deterministic answer checking with correct, partially correct and try-again feedback.
- Full model answers after checking.
- Local progress saved in the browser.

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Add more questions

Questions live in `data/questions.js`. Add another object to `window.FDRP_QUESTIONS` using the existing pattern:

```js
{
  id: "A26",
  level: "advanced",
  topic: "reverse-percentages",
  title: "New question title",
  skills: ["reverse percentage"],
  prompt: "Question text goes here.",
  hint: "Hidden hint goes here.",
  checks: [
    { label: "£100", type: "number", value: 100, tolerance: 0.01 }
  ],
  model: [
    "Step 1.",
    "Step 2.",
    "Final answer."
  ]
}
```

Supported check types include `number`, `percent`, `fraction` and `ratio`. Text aliases can also be used for comparison questions.

## GitHub Pages

This project is static, so it can be hosted directly from GitHub Pages. Push these files to the repository, then enable Pages from the repository settings using the `main` branch and root folder.
