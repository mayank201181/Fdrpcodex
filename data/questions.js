window.FDRP_QUESTIONS = [
  {
    id: "B01",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Cheese sandwiches",
    skills: ["fraction", "decimal", "percentage"],
    prompt: "At a lunchtime club, 18 out of 30 sandwiches are cheese. Write the cheese sandwiches as a simplified fraction, a decimal and a percentage.",
    hint: "Start with 18/30. Simplify the fraction, then divide to get the decimal and multiply by 100 for the percentage.",
    checks: [
      { label: "fraction 3/5", type: "fraction", numerator: 3, denominator: 5 },
      { label: "decimal 0.6", type: "number", value: 0.6, tolerance: 0.0001 },
      { label: "60%", type: "percent", value: 60, acceptDecimal: true }
    ],
    model: [
      "18 out of 30 is 18/30.",
      "Divide the top and bottom by 6: 18/30 = 3/5.",
      "3 ÷ 5 = 0.6.",
      "0.6 × 100 = 60%, so the answers are 3/5, 0.6 and 60%."
    ]
  },
  {
    id: "B02",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Recipe cup",
    skills: ["fraction", "decimal", "percentage"],
    prompt: "A recipe uses 3/4 of a cup of sugar. Write 3/4 as a decimal and as a percentage.",
    hint: "A fraction bar means divide. Do 3 ÷ 4.",
    checks: [
      { label: "decimal 0.75", type: "number", value: 0.75, tolerance: 0.0001 },
      { label: "75%", type: "percent", value: 75, acceptDecimal: true }
    ],
    model: [
      "3/4 means 3 ÷ 4.",
      "3 ÷ 4 = 0.75.",
      "0.75 × 100 = 75%, so 3/4 = 0.75 = 75%."
    ]
  },
  {
    id: "B03",
    level: "basic",
    topic: "percentages",
    title: "Discounted bus ticket",
    skills: ["percentage decrease"],
    prompt: "A bus ticket costs £7.50. A student gets a 20% discount. How much does the student pay?",
    hint: "A 20% discount means paying 80% of the original price.",
    checks: [
      { label: "£6", type: "number", value: 6, tolerance: 0.01 }
    ],
    model: [
      "The student pays 100% - 20% = 80% of the ticket.",
      "80% of £7.50 = 0.8 × 7.50 = £6.00.",
      "The student pays £6."
    ]
  },
  {
    id: "B04",
    level: "basic",
    topic: "percentages",
    title: "Saving pocket money",
    skills: ["percentage of amount"],
    prompt: "Maya has £80. She saves 15% of it. How much money does she save?",
    hint: "10% is £8 and 5% is half of that.",
    checks: [
      { label: "£12", type: "number", value: 12, tolerance: 0.01 }
    ],
    model: [
      "10% of £80 is £8.",
      "5% of £80 is £4.",
      "15% is £8 + £4 = £12."
    ]
  },
  {
    id: "B05",
    level: "basic",
    topic: "ratio",
    title: "Blue and red counters",
    skills: ["ratio sharing"],
    prompt: "Blue and red counters are in the ratio 3:2. There are 25 counters altogether. How many blue counters and how many red counters are there?",
    hint: "Add the ratio parts first: 3 + 2 = 5 equal parts.",
    checks: [
      { label: "15 blue", type: "number", value: 15, tolerance: 0.01 },
      { label: "10 red", type: "number", value: 10, tolerance: 0.01 }
    ],
    model: [
      "The total number of parts is 3 + 2 = 5.",
      "Each part is 25 ÷ 5 = 5 counters.",
      "Blue is 3 parts: 3 × 5 = 15.",
      "Red is 2 parts: 2 × 5 = 10."
    ]
  },
  {
    id: "B06",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Decimal of a class",
    skills: ["decimal of amount"],
    prompt: "In a class of 40 pupils, 0.35 of the pupils walk to school. How many pupils walk to school?",
    hint: "0.35 means 35 out of 100, so find 35% of 40.",
    checks: [
      { label: "14 pupils", type: "number", value: 14, tolerance: 0.01 }
    ],
    model: [
      "0.35 of 40 means 0.35 × 40.",
      "0.35 × 40 = 14.",
      "14 pupils walk to school."
    ]
  },
  {
    id: "B07",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Homework finished",
    skills: ["simplifying", "percentage"],
    prompt: "A pupil finishes 28 out of 35 questions. Write this as a simplified fraction and as a percentage.",
    hint: "28 and 35 are both divisible by 7.",
    checks: [
      { label: "fraction 4/5", type: "fraction", numerator: 4, denominator: 5 },
      { label: "80%", type: "percent", value: 80, acceptDecimal: true }
    ],
    model: [
      "28 out of 35 is 28/35.",
      "Divide top and bottom by 7: 28/35 = 4/5.",
      "4/5 = 0.8 = 80%."
    ]
  },
  {
    id: "B08",
    level: "basic",
    topic: "reverse-percentages",
    title: "Saving one quarter",
    skills: ["reverse percentage"],
    prompt: "Aisha saves £24, which is 25% of her monthly pocket money. How much monthly pocket money does she get?",
    hint: "25% is one quarter. Four quarters make the whole amount.",
    checks: [
      { label: "£96", type: "number", value: 96, tolerance: 0.01 }
    ],
    model: [
      "25% is one quarter of the pocket money.",
      "If one quarter is £24, the whole amount is 4 × £24.",
      "4 × £24 = £96."
    ]
  },
  {
    id: "B09",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Quiz score",
    skills: ["percentage score"],
    prompt: "Sam gets 5 out of 8 questions correct in a quiz. What percentage did Sam get?",
    hint: "Find 5 ÷ 8, then multiply by 100.",
    checks: [
      { label: "62.5%", type: "percent", value: 62.5, acceptDecimal: true }
    ],
    model: [
      "The score is 5/8.",
      "5 ÷ 8 = 0.625.",
      "0.625 × 100 = 62.5%."
    ]
  },
  {
    id: "B10",
    level: "basic",
    topic: "ratio",
    title: "Sharing £45",
    skills: ["ratio sharing"],
    prompt: "Two friends share £45 in the ratio 2:3. How much does each friend receive?",
    hint: "There are 2 + 3 = 5 equal parts.",
    checks: [
      { label: "£18", type: "number", value: 18, tolerance: 0.01 },
      { label: "£27", type: "number", value: 27, tolerance: 0.01 }
    ],
    model: [
      "Total parts = 2 + 3 = 5.",
      "Each part is £45 ÷ 5 = £9.",
      "The first friend receives 2 × £9 = £18.",
      "The second friend receives 3 × £9 = £27."
    ]
  },
  {
    id: "B11",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Pages read",
    skills: ["fraction of amount"],
    prompt: "Nina reads 3/5 of a 60-page book. How many pages does she read?",
    hint: "Find one fifth first, then multiply by 3.",
    checks: [
      { label: "36 pages", type: "number", value: 36, tolerance: 0.01 }
    ],
    model: [
      "One fifth of 60 is 60 ÷ 5 = 12.",
      "Three fifths is 3 × 12 = 36.",
      "Nina reads 36 pages."
    ]
  },
  {
    id: "B12",
    level: "basic",
    topic: "percentages",
    title: "Sale headphones",
    skills: ["percentage decrease"],
    prompt: "Headphones cost £120. In a sale they are reduced by 10%. What is the sale price?",
    hint: "After a 10% discount, 90% of the price is paid.",
    checks: [
      { label: "£108", type: "number", value: 108, tolerance: 0.01 }
    ],
    model: [
      "A 10% discount means paying 90%.",
      "90% of £120 = 0.9 × 120 = £108.",
      "The sale price is £108."
    ]
  },
  {
    id: "B13",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Tiny decimal",
    skills: ["decimal", "fraction", "percentage"],
    prompt: "Write 0.08 as a simplified fraction and as a percentage.",
    hint: "0.08 means 8 hundredths.",
    checks: [
      { label: "fraction 2/25", type: "fraction", numerator: 2, denominator: 25 },
      { label: "8%", type: "percent", value: 8, acceptDecimal: true }
    ],
    model: [
      "0.08 = 8/100.",
      "Simplify 8/100 by dividing by 4: 8/100 = 2/25.",
      "0.08 × 100 = 8%."
    ]
  },
  {
    id: "B14",
    level: "basic",
    topic: "ratio",
    title: "Juice and water",
    skills: ["ratio sharing", "decimals"],
    prompt: "A drink is made from juice and water in the ratio 1:4. There are 2 litres of drink altogether. How many litres of juice and water are used?",
    hint: "There are 5 equal parts. Divide 2 litres by 5.",
    checks: [
      { label: "0.4 litres of juice", type: "number", value: 0.4, tolerance: 0.01 },
      { label: "1.6 litres of water", type: "number", value: 1.6, tolerance: 0.01 }
    ],
    model: [
      "Total parts = 1 + 4 = 5.",
      "Each part is 2 ÷ 5 = 0.4 litres.",
      "Juice is 1 part = 0.4 litres.",
      "Water is 4 parts = 4 × 0.4 = 1.6 litres."
    ]
  },
  {
    id: "B15",
    level: "basic",
    topic: "percentages",
    title: "Novel progress",
    skills: ["percentage", "remaining amount"],
    prompt: "A novel has 160 pages. Leila has read 64 pages. What percentage has she read, and how many pages are left?",
    hint: "Use 64/160 for the percentage. Then subtract from 160 for pages left.",
    checks: [
      { label: "40%", type: "percent", value: 40, acceptDecimal: true },
      { label: "96 pages left", type: "number", value: 96, tolerance: 0.01 }
    ],
    model: [
      "64/160 = 0.4.",
      "0.4 = 40%, so Leila has read 40%.",
      "Pages left = 160 - 64 = 96."
    ]
  },
  {
    id: "B16",
    level: "basic",
    topic: "percentages",
    title: "Club survey",
    skills: ["percentage of amount"],
    prompt: "In a survey of 250 pupils, 12% choose tennis as their favourite sport. How many pupils choose tennis?",
    hint: "12% means 0.12. Multiply 250 by 0.12.",
    checks: [
      { label: "30 pupils", type: "number", value: 30, tolerance: 0.01 }
    ],
    model: [
      "12% = 0.12.",
      "0.12 × 250 = 30.",
      "30 pupils choose tennis."
    ]
  },
  {
    id: "B17",
    level: "basic",
    topic: "percentages",
    title: "Increasing a score",
    skills: ["percentage increase"],
    prompt: "A practice score of 50 marks increases by 30%. What is the new score?",
    hint: "A 30% increase means the new score is 130% of the original.",
    checks: [
      { label: "65 marks", type: "number", value: 65, tolerance: 0.01 }
    ],
    model: [
      "30% of 50 = 15.",
      "New score = 50 + 15 = 65.",
      "Equivalently, 130% of 50 = 1.3 × 50 = 65."
    ]
  },
  {
    id: "B18",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Nine twentieths",
    skills: ["fraction", "decimal", "percentage"],
    prompt: "Write 9/20 as a decimal and as a percentage.",
    hint: "Make the denominator 100, or divide 9 by 20.",
    checks: [
      { label: "decimal 0.45", type: "number", value: 0.45, tolerance: 0.0001 },
      { label: "45%", type: "percent", value: 45, acceptDecimal: true }
    ],
    model: [
      "9/20 = 45/100.",
      "45/100 = 0.45.",
      "0.45 = 45%."
    ]
  },
  {
    id: "B19",
    level: "basic",
    topic: "ratio",
    title: "Boys and girls",
    skills: ["simplifying ratio", "fraction"],
    prompt: "There are 18 boys and 12 girls in a club. Write the ratio boys:girls in its simplest form, and write the fraction of the club that are boys.",
    hint: "Simplify 18:12 by dividing both parts by 6. For the fraction, use boys over total pupils.",
    checks: [
      { label: "ratio 3:2", type: "ratio", value: [3, 2] },
      { label: "fraction 3/5", type: "fraction", numerator: 3, denominator: 5 }
    ],
    model: [
      "The ratio boys:girls is 18:12.",
      "Divide both sides by 6: 18:12 = 3:2.",
      "There are 18 + 12 = 30 pupils altogether.",
      "The fraction that are boys is 18/30 = 3/5."
    ]
  },
  {
    id: "B20",
    level: "basic",
    topic: "reverse-percentages",
    title: "Spending 30%",
    skills: ["reverse percentage"],
    prompt: "Ravi spends £2.40, which is 30% of his pocket money. How much pocket money did Ravi have?",
    hint: "If 30% is £2.40, then 10% is one third of £2.40.",
    checks: [
      { label: "£8", type: "number", value: 8, tolerance: 0.01 }
    ],
    model: [
      "30% is £2.40.",
      "10% is £2.40 ÷ 3 = £0.80.",
      "100% is 10 × £0.80 = £8."
    ]
  },
  {
    id: "B21",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Marble bag",
    skills: ["fraction", "percentage"],
    prompt: "A bag has 6 red marbles, 4 green marbles and 10 blue marbles. What fraction and percentage of the marbles are blue?",
    hint: "Find the total number of marbles first.",
    checks: [
      { label: "fraction 1/2", type: "fraction", numerator: 1, denominator: 2 },
      { label: "50%", type: "percent", value: 50, acceptDecimal: true }
    ],
    model: [
      "Total marbles = 6 + 4 + 10 = 20.",
      "Blue marbles = 10, so the fraction is 10/20 = 1/2.",
      "1/2 = 0.5 = 50%."
    ]
  },
  {
    id: "B22",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Water bottles",
    skills: ["decimal multiplication"],
    prompt: "Each small bottle holds 0.125 litres of water. How many litres are there in 8 bottles?",
    hint: "Multiply 0.125 by 8.",
    checks: [
      { label: "1 litre", type: "number", value: 1, tolerance: 0.001 }
    ],
    model: [
      "0.125 × 8 = 1.",
      "The 8 bottles hold 1 litre altogether."
    ]
  },
  {
    id: "B23",
    level: "basic",
    topic: "ratio",
    title: "Sweets in a bowl",
    skills: ["ratio sharing"],
    prompt: "72 sweets are shared into two bowls in the ratio 5:4. How many sweets are in each bowl?",
    hint: "There are 9 equal parts altogether.",
    checks: [
      { label: "40 sweets", type: "number", value: 40, tolerance: 0.01 },
      { label: "32 sweets", type: "number", value: 32, tolerance: 0.01 }
    ],
    model: [
      "Total parts = 5 + 4 = 9.",
      "Each part is 72 ÷ 9 = 8 sweets.",
      "First bowl: 5 × 8 = 40 sweets.",
      "Second bowl: 4 × 8 = 32 sweets."
    ]
  },
  {
    id: "B24",
    level: "basic",
    topic: "reverse-percentages",
    title: "Simple sale price",
    skills: ["reverse percentage"],
    prompt: "A school bag is sold for £36 after a 25% discount. What was the original price?",
    hint: "After a 25% discount, the sale price is 75% of the original price.",
    checks: [
      { label: "£48", type: "number", value: 48, tolerance: 0.01 }
    ],
    model: [
      "The sale price is 100% - 25% = 75% of the original.",
      "75% = £36.",
      "25% = £36 ÷ 3 = £12.",
      "100% = 4 × £12 = £48."
    ]
  },
  {
    id: "B25",
    level: "basic",
    topic: "fractions-decimals-percentages",
    title: "Maths test score",
    skills: ["percentage score", "decimal"],
    prompt: "A pupil scores 32 marks out of 40. Write the score as a decimal and as a percentage.",
    hint: "32/40 can be simplified, or divide 32 by 40.",
    checks: [
      { label: "decimal 0.8", type: "number", value: 0.8, tolerance: 0.0001 },
      { label: "80%", type: "percent", value: 80, acceptDecimal: true }
    ],
    model: [
      "32/40 = 0.8.",
      "0.8 × 100 = 80%.",
      "The score is 0.8 or 80%."
    ]
  },
  {
    id: "I01",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Jacket after discount",
    skills: ["reverse percentage", "bar model"],
    prompt: "A jacket is sold for £80 after a 20% discount. What was the original price?",
    hint: "The £80 is 80% of the original price, not 100%.",
    checks: [
      { label: "£100", type: "number", value: 100, tolerance: 0.01 }
    ],
    model: [
      "Original price = 100%.",
      "After a 20% discount, the sale price is 80%.",
      "80% = £80, so 1% = £1.",
      "100% = £100."
    ]
  },
  {
    id: "I02",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Selling with profit",
    skills: ["reverse percentage", "profit"],
    prompt: "A shop sells an item for £120 after making a 20% profit on the cost price. What was the cost price?",
    hint: "With 20% profit, the selling price is 120% of the cost price.",
    checks: [
      { label: "£100", type: "number", value: 100, tolerance: 0.01 }
    ],
    model: [
      "Cost price = 100%.",
      "Selling price after 20% profit = 120%.",
      "120% = £120, so 1% = £1.",
      "100% = £100."
    ]
  },
  {
    id: "I03",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Bike sale",
    skills: ["reverse percentage"],
    prompt: "A bicycle is reduced by 15% in a sale and now costs £255. What was the price before the sale?",
    hint: "After a 15% discount, the bike costs 85% of the original.",
    checks: [
      { label: "£300", type: "number", value: 300, tolerance: 0.01 }
    ],
    model: [
      "Sale price = 100% - 15% = 85% of the original.",
      "85% = £255.",
      "1% = £255 ÷ 85 = £3.",
      "100% = £300."
    ]
  },
  {
    id: "I04",
    level: "intermediate",
    topic: "percentages",
    title: "Selling a coat",
    skills: ["percentage increase", "profit"],
    prompt: "A coat costs a shop £60. The shop sells it for 25% profit. What is the selling price?",
    hint: "25% profit means selling for 125% of the cost.",
    checks: [
      { label: "£75", type: "number", value: 75, tolerance: 0.01 }
    ],
    model: [
      "Cost price = £60.",
      "25% of £60 = 0.25 × 60 = £15.",
      "Selling price = £60 + £15 = £75."
    ]
  },
  {
    id: "I05",
    level: "intermediate",
    topic: "multi-step",
    title: "Girls bringing lunch",
    skills: ["ratio", "fraction of amount"],
    prompt: "In a club, the ratio of girls to boys is 4:5. There are 27 pupils in the club. One third of the girls bring a packed lunch. How many girls bring a packed lunch?",
    hint: "Use the ratio to find the number of girls first.",
    checks: [
      { label: "4 girls", type: "number", value: 4, tolerance: 0.01 }
    ],
    model: [
      "Total ratio parts = 4 + 5 = 9.",
      "Each part is 27 ÷ 9 = 3 pupils.",
      "Girls = 4 × 3 = 12.",
      "One third of 12 is 4."
    ]
  },
  {
    id: "I06",
    level: "intermediate",
    topic: "ratio",
    title: "Flour and sugar",
    skills: ["ratio from one part"],
    prompt: "A cake recipe uses flour and sugar in the ratio 5:2. The recipe uses 140 g of sugar. How much flour is needed, and what is the total mass of flour and sugar?",
    hint: "The 2 sugar parts are worth 140 g altogether.",
    checks: [
      { label: "350 g flour", type: "number", value: 350, tolerance: 0.01 },
      { label: "490 g total", type: "number", value: 490, tolerance: 0.01 }
    ],
    model: [
      "Sugar is 2 parts and equals 140 g.",
      "One part = 140 ÷ 2 = 70 g.",
      "Flour is 5 parts = 5 × 70 = 350 g.",
      "Total mass = 350 g + 140 g = 490 g."
    ]
  },
  {
    id: "I07",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Football season",
    skills: ["reverse percentage", "percentage of amount"],
    prompt: "A football team won 60% of its matches and lost the remaining 6 matches. There were no draws. How many matches did the team play, and how many did it win?",
    hint: "If 60% were wins, the 6 losses are the remaining 40%.",
    checks: [
      { label: "15 matches", type: "number", value: 15, tolerance: 0.01 },
      { label: "9 wins", type: "number", value: 9, tolerance: 0.01 }
    ],
    model: [
      "Wins are 60%, so losses are 40%.",
      "40% = 6 matches.",
      "10% = 1.5 matches, so 100% = 15 matches.",
      "60% of 15 = 9 wins."
    ]
  },
  {
    id: "I08",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Bill including VAT",
    skills: ["reverse percentage", "VAT"],
    prompt: "An electricity bill is £72 including 20% VAT. What was the bill before VAT, and how much VAT was added?",
    hint: "Including 20% VAT means the final bill is 120% of the price before VAT.",
    checks: [
      { label: "£60 before VAT", type: "number", value: 60, tolerance: 0.01 },
      { label: "£12 VAT", type: "number", value: 12, tolerance: 0.01 }
    ],
    model: [
      "Before VAT = 100%. With 20% VAT, the bill is 120%.",
      "120% = £72, so 1% = £72 ÷ 120 = £0.60.",
      "100% = £60.",
      "VAT added = £72 - £60 = £12."
    ]
  },
  {
    id: "I09",
    level: "intermediate",
    topic: "multi-step",
    title: "Travelling to school",
    skills: ["fractions", "reverse fraction"],
    prompt: "In a class, 3/8 of the pupils cycle to school and 1/4 walk. The remaining 15 pupils come by bus. How many pupils are in the class?",
    hint: "Convert 1/4 to 2/8, then find the fraction that comes by bus.",
    checks: [
      { label: "40 pupils", type: "number", value: 40, tolerance: 0.01 }
    ],
    model: [
      "1/4 = 2/8.",
      "Cycle and walk = 3/8 + 2/8 = 5/8.",
      "Bus pupils are the remaining 3/8.",
      "3/8 = 15 pupils, so 1/8 = 5 pupils.",
      "8/8 = 40 pupils."
    ]
  },
  {
    id: "I10",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Pay rise",
    skills: ["reverse percentage", "increase"],
    prompt: "After a 10% pay rise, a monthly salary is £1,980. What was the salary before the rise?",
    hint: "After a 10% rise, the new salary is 110% of the old salary.",
    checks: [
      { label: "£1800", type: "number", value: 1800, tolerance: 0.01 }
    ],
    model: [
      "Old salary = 100%.",
      "After a 10% rise, £1,980 is 110%.",
      "1% = £1,980 ÷ 110 = £18.",
      "100% = £1,800."
    ]
  },
  {
    id: "I11",
    level: "intermediate",
    topic: "multi-step",
    title: "Saving after spending",
    skills: ["percentage remaining", "reverse percentage"],
    prompt: "Tara spends 40% of her money. She then saves half of what is left, which is £18. How much money did Tara have at the start?",
    hint: "After spending 40%, Tara has 60% left. Half of 60% is 30% of the original.",
    checks: [
      { label: "£60", type: "number", value: 60, tolerance: 0.01 }
    ],
    model: [
      "After spending 40%, Tara has 60% left.",
      "She saves half of the 60%, which is 30% of the original money.",
      "30% = £18.",
      "10% = £6, so 100% = £60."
    ]
  },
  {
    id: "I12",
    level: "intermediate",
    topic: "fractions-decimals-percentages",
    title: "Painting a wall",
    skills: ["fraction of whole", "remaining amount"],
    prompt: "18 litres of paint covers 3/5 of a wall. How many litres are needed for the whole wall, and how many more litres are needed?",
    hint: "If 3/5 is 18 litres, find 1/5 first.",
    checks: [
      { label: "30 litres total", type: "number", value: 30, tolerance: 0.01 },
      { label: "12 more litres", type: "number", value: 12, tolerance: 0.01 }
    ],
    model: [
      "3/5 of the wall needs 18 litres.",
      "1/5 needs 18 ÷ 3 = 6 litres.",
      "5/5 needs 5 × 6 = 30 litres.",
      "More paint needed = 30 - 18 = 12 litres."
    ]
  },
  {
    id: "I13",
    level: "intermediate",
    topic: "multi-step",
    title: "Red sweets eaten",
    skills: ["ratio", "percentage decrease"],
    prompt: "Red and yellow sweets are in the ratio 2:3. There are 18 yellow sweets. Then 25% of the red sweets are eaten. How many red sweets were there originally, and how many red sweets are left?",
    hint: "Use the yellow sweets to find one ratio part first.",
    checks: [
      { label: "12 red originally", type: "number", value: 12, tolerance: 0.01 },
      { label: "9 red left", type: "number", value: 9, tolerance: 0.01 }
    ],
    model: [
      "Yellow is 3 parts and equals 18 sweets.",
      "One part = 18 ÷ 3 = 6 sweets.",
      "Red is 2 parts = 2 × 6 = 12 sweets.",
      "25% of 12 is 3, so 12 - 3 = 9 red sweets are left."
    ]
  },
  {
    id: "I14",
    level: "intermediate",
    topic: "multi-step",
    title: "Phone insurance",
    skills: ["percentage increase", "addition"],
    prompt: "A phone costs £240. Insurance costs 15% of the phone price. A case costs £20. What is the total cost of the phone, insurance and case?",
    hint: "Find 15% of £240, then add the phone and case.",
    checks: [
      { label: "£296", type: "number", value: 296, tolerance: 0.01 }
    ],
    model: [
      "15% of £240 = 0.15 × 240 = £36.",
      "Total cost = phone + insurance + case.",
      "Total cost = £240 + £36 + £20 = £296."
    ]
  },
  {
    id: "I15",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Finding the number",
    skills: ["reverse percentage"],
    prompt: "45% of a number is 81. What is the number?",
    hint: "If 45% is 81, divide by 45 to find 1%.",
    checks: [
      { label: "180", type: "number", value: 180, tolerance: 0.01 }
    ],
    model: [
      "45% = 81.",
      "1% = 81 ÷ 45 = 1.8.",
      "100% = 1.8 × 100 = 180."
    ]
  },
  {
    id: "I16",
    level: "intermediate",
    topic: "percentages",
    title: "Town population",
    skills: ["percentage increase"],
    prompt: "A village has 800 people. Its population increases by 12.5%. What is the new population?",
    hint: "12.5% is one eighth. Find one eighth of 800.",
    checks: [
      { label: "900 people", type: "number", value: 900, tolerance: 0.01 }
    ],
    model: [
      "12.5% = 1/8.",
      "1/8 of 800 = 100.",
      "New population = 800 + 100 = 900."
    ]
  },
  {
    id: "I17",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Game discount",
    skills: ["reverse percentage", "discount amount"],
    prompt: "A game costs £56 after a 30% discount. What was the original price, and how much money was discounted?",
    hint: "After a 30% discount, £56 is 70% of the original.",
    checks: [
      { label: "£80 original", type: "number", value: 80, tolerance: 0.01 },
      { label: "£24 discount", type: "number", value: 24, tolerance: 0.01 }
    ],
    model: [
      "Sale price = 70% of the original.",
      "70% = £56, so 10% = £8.",
      "100% = £80.",
      "Discount = £80 - £56 = £24."
    ]
  },
  {
    id: "I18",
    level: "intermediate",
    topic: "ratio",
    title: "Map distance",
    skills: ["scale ratio", "multiplication"],
    prompt: "On a map, 1 cm represents 5 km. Two towns are 7.2 cm apart on the map. How far apart are the towns in real life?",
    hint: "Multiply the map distance by 5.",
    checks: [
      { label: "36 km", type: "number", value: 36, tolerance: 0.01 }
    ],
    model: [
      "1 cm represents 5 km.",
      "7.2 cm represents 7.2 × 5 km.",
      "7.2 × 5 = 36, so the towns are 36 km apart."
    ]
  },
  {
    id: "I19",
    level: "intermediate",
    topic: "multi-step",
    title: "Damaged red beads",
    skills: ["fraction", "reverse fraction"],
    prompt: "In a bag of beads, 2/5 of the beads are red. One quarter of the red beads are damaged. There are 6 damaged red beads. How many red beads are there, and how many beads are in the bag?",
    hint: "The 6 damaged beads are one quarter of the red beads.",
    checks: [
      { label: "24 red beads", type: "number", value: 24, tolerance: 0.01 },
      { label: "60 beads in the bag", type: "number", value: 60, tolerance: 0.01 }
    ],
    model: [
      "One quarter of the red beads is 6.",
      "All red beads = 4 × 6 = 24.",
      "24 red beads are 2/5 of the bag.",
      "1/5 of the bag = 12 beads, so 5/5 = 60 beads."
    ]
  },
  {
    id: "I20",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Restaurant service charge",
    skills: ["reverse percentage"],
    prompt: "A restaurant bill is £63 after a 5% service charge is added. What was the bill before the service charge?",
    hint: "After adding 5%, the final bill is 105% of the original bill.",
    checks: [
      { label: "£60", type: "number", value: 60, tolerance: 0.01 }
    ],
    model: [
      "Before service charge = 100%.",
      "After 5% service charge = 105%.",
      "105% = £63, so 1% = £0.60.",
      "100% = £60."
    ]
  },
  {
    id: "I21",
    level: "intermediate",
    topic: "ratio",
    title: "Scaling a recipe",
    skills: ["proportion", "scaling"],
    prompt: "A recipe serves 6 people and needs 450 g of flour. How much flour is needed for 10 people?",
    hint: "Find the flour for 1 person, then multiply by 10.",
    checks: [
      { label: "750 g", type: "number", value: 750, tolerance: 0.01 }
    ],
    model: [
      "Flour for 1 person = 450 ÷ 6 = 75 g.",
      "Flour for 10 people = 75 × 10 = 750 g."
    ]
  },
  {
    id: "I22",
    level: "intermediate",
    topic: "fractions-decimals-percentages",
    title: "Comparing two tests",
    skills: ["percentage comparison"],
    prompt: "Amir scores 14 out of 20 on one test and 18 out of 24 on another test. Which test has the better percentage score?",
    hint: "Convert both scores to percentages before comparing.",
    checks: [
      { label: "70%", type: "percent", value: 70, acceptDecimal: true },
      { label: "75%", type: "percent", value: 75, acceptDecimal: true },
      { label: "second test", aliases: ["second test", "test 2", "second"] }
    ],
    model: [
      "First test: 14/20 = 0.7 = 70%.",
      "Second test: 18/24 = 0.75 = 75%.",
      "The second test is better because 75% is greater than 70%."
    ]
  },
  {
    id: "I23",
    level: "intermediate",
    topic: "multi-step",
    title: "Sharing and spending",
    skills: ["ratio", "percentage decrease"],
    prompt: "Two cousins share £96 in the ratio 3:5. The cousin with the smaller share spends 25% of their money. How much did the smaller cousin start with, and how much do they have left?",
    hint: "Find the smaller share first, then subtract 25% of it.",
    checks: [
      { label: "£36 smaller share", type: "number", value: 36, tolerance: 0.01 },
      { label: "£27 left", type: "number", value: 27, tolerance: 0.01 }
    ],
    model: [
      "Total parts = 3 + 5 = 8.",
      "Each part is £96 ÷ 8 = £12.",
      "Smaller share = 3 × £12 = £36.",
      "25% of £36 = £9, so £36 - £9 = £27 left."
    ]
  },
  {
    id: "I24",
    level: "intermediate",
    topic: "multi-step",
    title: "Decimal then percentage",
    skills: ["reverse decimal", "percentage of amount"],
    prompt: "0.6 of a number is 42. What is 20% of the original number?",
    hint: "First find the whole number. 0.6 means 60%.",
    checks: [
      { label: "14", type: "number", value: 14, tolerance: 0.01 }
    ],
    model: [
      "0.6 of the number is 42.",
      "The whole number is 42 ÷ 0.6 = 70.",
      "20% of 70 = 0.2 × 70 = 14."
    ]
  },
  {
    id: "I25",
    level: "intermediate",
    topic: "reverse-percentages",
    title: "Train fare rise",
    skills: ["reverse percentage"],
    prompt: "A train fare increases by 8% and is now £27. What was the fare before the increase?",
    hint: "After an 8% increase, the new fare is 108% of the old fare.",
    checks: [
      { label: "£25", type: "number", value: 25, tolerance: 0.01 }
    ],
    model: [
      "Old fare = 100%.",
      "New fare = 108%.",
      "108% = £27, so 1% = £27 ÷ 108 = £0.25.",
      "100% = £25."
    ]
  },
  {
    id: "A01",
    level: "advanced",
    topic: "multi-step",
    title: "Marked up then discounted",
    skills: ["profit", "discount", "reverse percentage"],
    prompt: "A shop marks an item up by 25% from its cost price, then gives a 10% discount on the marked price. A customer pays £225. What was the shop's cost price?",
    hint: "Cost price becomes 125%, then the customer pays 90% of that marked price.",
    checks: [
      { label: "£200", type: "number", value: 200, tolerance: 0.01 }
    ],
    model: [
      "Let the cost price be 100%.",
      "After a 25% mark-up, the marked price is 125% of cost.",
      "After a 10% discount, the customer pays 90% of the marked price.",
      "Final price = 1.25 × 0.90 × cost = 1.125 × cost.",
      "Cost = £225 ÷ 1.125 = £200."
    ]
  },
  {
    id: "A02",
    level: "advanced",
    topic: "multi-step",
    title: "Discount then VAT",
    skills: ["discount", "VAT", "reverse percentage"],
    prompt: "A laptop list price is reduced by 15%, then 20% VAT is added to the reduced price. The final price is £612. What was the list price before the discount and VAT?",
    hint: "The final multiplier is 0.85 × 1.20.",
    checks: [
      { label: "£600", type: "number", value: 600, tolerance: 0.01 }
    ],
    model: [
      "After 15% off, the price is 85% of the list price.",
      "Adding 20% VAT multiplies by 1.20.",
      "Final price = list price × 0.85 × 1.20 = list price × 1.02.",
      "List price = £612 ÷ 1.02 = £600."
    ]
  },
  {
    id: "A03",
    level: "advanced",
    topic: "multi-step",
    title: "Absent from a club",
    skills: ["ratio", "percentage", "reverse reasoning"],
    prompt: "In a club, the ratio of boys to girls is 3:5. On one day, 20% of the boys and 10% of the girls are absent. There are 69 pupils present. How many pupils were originally in the club?",
    hint: "Use 3 parts for boys and 5 parts for girls. Work out how many parts are present after the absences.",
    checks: [
      { label: "80 pupils originally", type: "number", value: 80, tolerance: 0.01 }
    ],
    model: [
      "Let boys = 3 parts and girls = 5 parts.",
      "Present boys = 80% of 3 parts = 2.4 parts.",
      "Present girls = 90% of 5 parts = 4.5 parts.",
      "Total present = 2.4 + 4.5 = 6.9 parts.",
      "6.9 parts = 69 pupils, so 1 part = 10 pupils.",
      "Original total = 8 parts = 80 pupils."
    ]
  },
  {
    id: "A04",
    level: "advanced",
    topic: "multi-step",
    title: "Two spending steps",
    skills: ["successive percentages", "reverse percentage"],
    prompt: "Meera spends 25% of her money. She then spends 40% of what remains. She has £54 left. How much money did she have at the start?",
    hint: "After the first spend she has 75% left. After the second spend she keeps 60% of that 75%.",
    checks: [
      { label: "£120", type: "number", value: 120, tolerance: 0.01 }
    ],
    model: [
      "After spending 25%, Meera has 75% left.",
      "She then spends 40% of the remainder, so she keeps 60% of the 75%.",
      "Amount left = 0.75 × 0.60 = 0.45 of the original.",
      "45% = £54.",
      "100% = £54 ÷ 0.45 = £120."
    ]
  },
  {
    id: "A05",
    level: "advanced",
    topic: "reverse-percentages",
    title: "The £96 trap",
    skills: ["reverse percentage", "error spotting"],
    prompt: "A tablet is sold for £96 after a 20% discount. A pupil says the original price is £96 + 20% of £96 = £115.20. What is the correct original price?",
    hint: "The 20% discount was taken from the original price, not from £96.",
    checks: [
      { label: "£120", type: "number", value: 120, tolerance: 0.01 }
    ],
    model: [
      "After a 20% discount, the sale price is 80% of the original.",
      "80% = £96.",
      "1% = £96 ÷ 80 = £1.20.",
      "100% = £120.",
      "The pupil used 20% of the wrong whole."
    ]
  },
  {
    id: "A06",
    level: "advanced",
    topic: "multi-step",
    title: "Share then transfer",
    skills: ["ratio", "percentage transfer"],
    prompt: "Ali and Ben share £140 in the ratio 3:4. Ben then gives 25% of his share to Ali. How much money do Ali and Ben each have after the transfer?",
    hint: "Find the original shares first. Then take 25% of Ben's original share.",
    checks: [
      { label: "Ali has £80", type: "number", value: 80, tolerance: 0.01 },
      { label: "Ben has £60", type: "number", value: 60, tolerance: 0.01 }
    ],
    model: [
      "Total parts = 3 + 4 = 7.",
      "Each part is £140 ÷ 7 = £20.",
      "Ali starts with 3 × £20 = £60.",
      "Ben starts with 4 × £20 = £80.",
      "25% of Ben's £80 is £20.",
      "After transfer: Ali has £60 + £20 = £80 and Ben has £80 - £20 = £60."
    ]
  },
  {
    id: "A07",
    level: "advanced",
    topic: "ratio",
    title: "Changing a drink ratio",
    skills: ["ratio", "unit change"],
    prompt: "A drink contains syrup and water in the ratio 2:7. There are 450 ml of drink. Then 90 ml of water is added. What is the new ratio of syrup to water in simplest form?",
    hint: "Find the original syrup and water amounts, then add 90 ml to only the water.",
    checks: [
      { label: "ratio 5:22", type: "ratio", value: [5, 22] }
    ],
    model: [
      "Original total parts = 2 + 7 = 9.",
      "Each part is 450 ÷ 9 = 50 ml.",
      "Syrup = 2 × 50 = 100 ml.",
      "Water = 7 × 50 = 350 ml.",
      "After adding 90 ml water, water = 440 ml.",
      "New ratio syrup:water = 100:440 = 5:22."
    ]
  },
  {
    id: "A08",
    level: "advanced",
    topic: "multi-step",
    title: "Two paper percentage",
    skills: ["fractions", "overall percentage"],
    prompt: "A test has Paper A worth 60 marks and Paper B worth 90 marks. Sofia gets 75% on Paper A and 2/3 on Paper B. What is her overall percentage?",
    hint: "Convert each result into marks first, then divide by the total marks.",
    checks: [
      { label: "70%", type: "percent", value: 70, acceptDecimal: true }
    ],
    model: [
      "Paper A marks = 75% of 60 = 45.",
      "Paper B marks = 2/3 of 90 = 60.",
      "Total marks scored = 45 + 60 = 105.",
      "Total marks available = 60 + 90 = 150.",
      "Overall percentage = 105/150 = 0.7 = 70%."
    ]
  },
  {
    id: "A09",
    level: "advanced",
    topic: "multi-step",
    title: "Down then up",
    skills: ["successive percentages", "reverse percentage"],
    prompt: "A price falls by 10% and then rises by 10%. The final price is £99. What was the original price?",
    hint: "A 10% fall gives 90%. A 10% rise after that gives 110% of the reduced price.",
    checks: [
      { label: "£100", type: "number", value: 100, tolerance: 0.01 }
    ],
    model: [
      "After a 10% fall, the price is 0.90 of the original.",
      "After a 10% rise, multiply by 1.10.",
      "Final price = original × 0.90 × 1.10 = original × 0.99.",
      "0.99 of the original is £99.",
      "Original price = £99 ÷ 0.99 = £100."
    ]
  },
  {
    id: "A10",
    level: "advanced",
    topic: "multi-step",
    title: "Painting in stages",
    skills: ["fractions of remainder", "reverse fraction"],
    prompt: "A painter paints 2/5 of a wall in the morning. In the afternoon, she paints 3/4 of the remaining wall. There are 9 square metres left unpainted. What is the area of the whole wall?",
    hint: "Track the fraction left after each stage.",
    checks: [
      { label: "60 square metres", type: "number", value: 60, tolerance: 0.01 }
    ],
    model: [
      "After the morning, 3/5 of the wall remains.",
      "In the afternoon she paints 3/4 of that remainder, so 1/4 of the remainder is left.",
      "Left unpainted = 1/4 of 3/5 = 3/20 of the wall.",
      "3/20 = 9 square metres.",
      "1/20 = 3 square metres, so 20/20 = 60 square metres."
    ]
  },
  {
    id: "A11",
    level: "advanced",
    topic: "multi-step",
    title: "Train, bus and walk",
    skills: ["percentage remaining", "fractions"],
    prompt: "On a journey, 60% of the distance is by train. Then 1/4 of the remaining distance is by bus. The final 12 km is walked. What is the total distance?",
    hint: "After the train, 40% remains. The walk is 3/4 of that remaining distance.",
    checks: [
      { label: "40 km", type: "number", value: 40, tolerance: 0.01 }
    ],
    model: [
      "After the train, 40% of the journey remains.",
      "Bus is 1/4 of that 40%, so walking is 3/4 of 40%.",
      "Walking distance = 30% of the whole journey.",
      "30% = 12 km.",
      "100% = 12 ÷ 0.30 = 40 km."
    ]
  },
  {
    id: "A12",
    level: "advanced",
    topic: "reverse-percentages",
    title: "Toy mark-up",
    skills: ["mark-up", "discount", "reverse percentage"],
    prompt: "A toy is marked up by 50% from its cost price. It is then sold with a 20% discount on the marked price. The final selling price is £72. What was the cost price?",
    hint: "Cost is multiplied by 1.5, then by 0.8.",
    checks: [
      { label: "£60", type: "number", value: 60, tolerance: 0.01 }
    ],
    model: [
      "Marked price = 150% of cost = 1.5 × cost.",
      "After 20% off, final price = 80% of marked price.",
      "Final price = 1.5 × 0.8 × cost = 1.2 × cost.",
      "1.2 × cost = £72.",
      "Cost = £72 ÷ 1.2 = £60."
    ]
  },
  {
    id: "A13",
    level: "advanced",
    topic: "multi-step",
    title: "School trip groups",
    skills: ["ratio", "percentage of amount"],
    prompt: "A school has 600 pupils. The ratio of KS3 pupils to KS4 pupils is 7:5. On a trip, 10% of KS3 pupils and 20% of KS4 pupils go. How many pupils go on the trip?",
    hint: "Find KS3 and KS4 numbers from the ratio before applying the percentages.",
    checks: [
      { label: "85 pupils", type: "number", value: 85, tolerance: 0.01 }
    ],
    model: [
      "Total ratio parts = 7 + 5 = 12.",
      "Each part = 600 ÷ 12 = 50 pupils.",
      "KS3 pupils = 7 × 50 = 350.",
      "KS4 pupils = 5 × 50 = 250.",
      "10% of KS3 = 35 and 20% of KS4 = 50.",
      "Total on trip = 35 + 50 = 85 pupils."
    ]
  },
  {
    id: "A14",
    level: "advanced",
    topic: "ratio",
    title: "Adding red counters",
    skills: ["ratio change", "reverse reasoning"],
    prompt: "A box contains red and blue counters in the ratio 2:3. After 10 red counters are added, the ratio becomes 4:5. How many red and blue counters were in the box originally?",
    hint: "Let the original numbers be 2 parts red and 3 parts blue. Only the red amount changes.",
    checks: [
      { label: "50 red", type: "number", value: 50, tolerance: 0.01 },
      { label: "75 blue", type: "number", value: 75, tolerance: 0.01 }
    ],
    model: [
      "Let the original red counters be 2k and blue counters be 3k.",
      "After adding 10 red counters, red = 2k + 10 and blue = 3k.",
      "The new ratio is (2k + 10):3k = 4:5.",
      "5(2k + 10) = 4(3k).",
      "10k + 50 = 12k, so k = 25.",
      "Original red = 2 × 25 = 50 and original blue = 3 × 25 = 75."
    ]
  },
  {
    id: "A15",
    level: "advanced",
    topic: "reverse-percentages",
    title: "Discount then VAT bill",
    skills: ["successive percentages", "reverse percentage"],
    prompt: "A bill is discounted by 5%, then 20% VAT is added. The final amount paid is £114. What was the original bill before the discount and VAT?",
    hint: "The total multiplier is 0.95 × 1.20.",
    checks: [
      { label: "£100", type: "number", value: 100, tolerance: 0.01 }
    ],
    model: [
      "After a 5% discount, the bill is 95% of the original.",
      "Adding 20% VAT multiplies by 1.20.",
      "Final amount = original × 0.95 × 1.20 = original × 1.14.",
      "Original = £114 ÷ 1.14 = £100."
    ]
  },
  {
    id: "A16",
    level: "advanced",
    topic: "multi-step",
    title: "Best value pack",
    skills: ["percentage increase", "unit price"],
    prompt: "Pack A contains 600 g of rice and costs £2.40. Pack B contains 25% more rice than Pack A and costs £2.85. Which pack is better value, and by how much per kg?",
    hint: "Find the mass of Pack B first, then compare both prices per kg.",
    checks: [
      { label: "Pack B", aliases: ["pack b", "b is better", "b is cheaper", "pack b is better"] },
      { label: "20p per kg", type: "number", value: 0.2, accept: [20], tolerance: 0.01 }
    ],
    model: [
      "Pack B has 25% more than 600 g, so it has 600 × 1.25 = 750 g.",
      "Pack A: £2.40 for 0.6 kg, so £2.40 ÷ 0.6 = £4.00 per kg.",
      "Pack B: £2.85 for 0.75 kg, so £2.85 ÷ 0.75 = £3.80 per kg.",
      "Pack B is better value by £4.00 - £3.80 = £0.20 per kg."
    ]
  },
  {
    id: "A17",
    level: "advanced",
    topic: "multi-step",
    title: "Charity target",
    skills: ["successive percentages", "reverse percentage"],
    prompt: "A charity raises 35% of its target in week 1. In week 2 it raises 40% of the remaining target. It still needs £234. What is the charity's full target?",
    hint: "After week 1, 65% remains. After week 2, 60% of that remainder is still left.",
    checks: [
      { label: "£600", type: "number", value: 600, tolerance: 0.01 }
    ],
    model: [
      "After week 1, 65% of the target remains.",
      "In week 2, 40% of the remaining target is raised, so 60% of the remainder is left.",
      "Amount still needed = 0.65 × 0.60 = 0.39 of the target.",
      "39% = £234.",
      "100% = £234 ÷ 0.39 = £600."
    ]
  },
  {
    id: "A18",
    level: "advanced",
    topic: "fractions-decimals-percentages",
    title: "Decimal plus percentage",
    skills: ["decimal", "percentage", "reverse reasoning"],
    prompt: "0.375 of a number plus 25% of the same number is 50. What is the number?",
    hint: "Convert 25% to 0.25 and add the two parts.",
    checks: [
      { label: "80", type: "number", value: 80, tolerance: 0.01 }
    ],
    model: [
      "25% = 0.25.",
      "0.375 + 0.25 = 0.625.",
      "0.625 of the number is 50.",
      "The number = 50 ÷ 0.625 = 80."
    ]
  },
  {
    id: "A19",
    level: "advanced",
    topic: "multi-step",
    title: "Music club",
    skills: ["ratio", "percentage", "reverse reasoning"],
    prompt: "In a music club, the ratio of boys to girls is 5:7. 30% of the boys and 25% of the girls play an instrument. Altogether 65 pupils play an instrument. How many boys, girls and total pupils are in the club?",
    hint: "Let boys be 5 parts and girls be 7 parts. Work out the instrument players in parts.",
    checks: [
      { label: "100 boys", type: "number", value: 100, tolerance: 0.01 },
      { label: "140 girls", type: "number", value: 140, tolerance: 0.01 },
      { label: "240 pupils total", type: "number", value: 240, tolerance: 0.01 }
    ],
    model: [
      "Let boys = 5 parts and girls = 7 parts.",
      "30% of boys = 0.30 × 5 = 1.5 parts.",
      "25% of girls = 0.25 × 7 = 1.75 parts.",
      "Instrument players = 1.5 + 1.75 = 3.25 parts.",
      "3.25 parts = 65 pupils, so 1 part = 20 pupils.",
      "Boys = 5 × 20 = 100, girls = 7 × 20 = 140, total = 240."
    ]
  },
  {
    id: "A20",
    level: "advanced",
    topic: "reverse-percentages",
    title: "Profit before VAT",
    skills: ["profit", "VAT", "reverse percentage"],
    prompt: "A shop sells an item to a customer for £144. This includes 20% VAT, and before VAT the shop made a 20% profit on the cost price. What was the cost price?",
    hint: "Cost is increased by 20% for profit, then by 20% again for VAT.",
    checks: [
      { label: "£100", type: "number", value: 100, tolerance: 0.01 }
    ],
    model: [
      "Cost price = 100%.",
      "After 20% profit, price before VAT = 120% of cost.",
      "After 20% VAT, customer price = 120% of the before-VAT price.",
      "Final price = cost × 1.20 × 1.20 = cost × 1.44.",
      "Cost = £144 ÷ 1.44 = £100."
    ]
  },
  {
    id: "A21",
    level: "advanced",
    topic: "multi-step",
    title: "Fuel tank",
    skills: ["fractions", "percentage of remainder"],
    prompt: "A car uses 2/5 of a full tank of fuel on one journey. It then uses 30% of the remaining fuel on a second journey. There are 21 litres left. How many litres did the full tank hold?",
    hint: "After the first journey, 3/5 remains. After the second, 70% of that remainder is left.",
    checks: [
      { label: "50 litres", type: "number", value: 50, tolerance: 0.01 }
    ],
    model: [
      "After the first journey, 3/5 of the tank remains.",
      "After using 30% of the remainder, 70% of the remainder is left.",
      "Fuel left = 0.70 × 3/5 = 0.42 of the full tank.",
      "42% of the tank is 21 litres.",
      "Full tank = 21 ÷ 0.42 = 50 litres."
    ]
  },
  {
    id: "A22",
    level: "advanced",
    topic: "reverse-percentages",
    title: "Fruit after peeling",
    skills: ["reverse percentage", "wastage"],
    prompt: "A recipe needs 280 g of usable fruit. When the fruit is peeled, 12.5% of its mass is wasted. How much fruit should be bought before peeling?",
    hint: "Usable fruit is 87.5% of the fruit bought.",
    checks: [
      { label: "320 g", type: "number", value: 320, tolerance: 0.01 }
    ],
    model: [
      "If 12.5% is wasted, 87.5% is usable.",
      "87.5% of the bought fruit is 280 g.",
      "87.5% = 0.875.",
      "Bought fruit = 280 ÷ 0.875 = 320 g."
    ]
  },
  {
    id: "A23",
    level: "advanced",
    topic: "multi-step",
    title: "Theatre audience",
    skills: ["percentage", "remaining amount"],
    prompt: "A theatre has 300 seats. On Friday, 15% of the seats are empty. Of the people present, 40% are adults and the rest are children. How many children are present?",
    hint: "Find the number of people present first, then take 60% of that.",
    checks: [
      { label: "153 children", type: "number", value: 153, tolerance: 0.01 }
    ],
    model: [
      "15% of seats are empty, so 85% are filled.",
      "85% of 300 = 255 people present.",
      "If 40% are adults, then 60% are children.",
      "60% of 255 = 153 children."
    ]
  },
  {
    id: "A24",
    level: "advanced",
    topic: "multi-step",
    title: "Savings account",
    skills: ["successive percentages", "reverse percentage"],
    prompt: "A savings account increases by 8% in a year. Then 25% of the new balance is withdrawn. The account has £810 left. How much was in the account at the start of the year?",
    hint: "The balance is multiplied by 1.08, then by 0.75.",
    checks: [
      { label: "£1000", type: "number", value: 1000, tolerance: 0.01 }
    ],
    model: [
      "After an 8% increase, the balance is 1.08 times the original.",
      "After withdrawing 25%, 75% of the new balance remains.",
      "Final balance = original × 1.08 × 0.75 = original × 0.81.",
      "0.81 of the original is £810.",
      "Original = £810 ÷ 0.81 = £1000."
    ]
  },
  {
    id: "A25",
    level: "advanced",
    topic: "reverse-percentages",
    title: "Two discounts",
    skills: ["successive discounts", "reverse percentage"],
    prompt: "A dress has a 25% sale discount. At the till, a student gets a further 10% discount on the sale price. The student pays £54. What was the original price of the dress?",
    hint: "The customer pays 75% of the original, then 90% of that sale price.",
    checks: [
      { label: "£80", type: "number", value: 80, tolerance: 0.01 }
    ],
    model: [
      "After a 25% sale discount, the price is 75% of the original.",
      "A further 10% discount means paying 90% of the sale price.",
      "Final price = original × 0.75 × 0.90 = original × 0.675.",
      "0.675 of the original is £54.",
      "Original price = £54 ÷ 0.675 = £80."
    ]
  }
];
