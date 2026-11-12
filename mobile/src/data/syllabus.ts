/**
 * NALR MULTI-TERM SYLLABUS DEFINITION
 * Auto-generated from source of truth: syllabus.js
 */

export interface QuestionType {
  id: string;
  name: string;
  desc: string;
  count: number;
}

export interface SyllabusModule {
  id: string;
  num: number;
  title: string;
  lectures: string;
  desc: string;
  types: QuestionType[];
}

export interface SyllabusTerm {
  id: string;
  name: string;
  title: string;
  badge: string;
  prefix: string;
  modules: SyllabusModule[];
}

export interface SyllabusData {
  st1: SyllabusTerm;
  st2: SyllabusTerm;
  endterm: SyllabusTerm;
}

export const SYLLABUS_DATA: SyllabusData = {
  "st1": {
    "id": "st1",
    "name": "ST1",
    "title": "ST-1 Sessional Test",
    "badge": "17 Modules",
    "prefix": "ST-1 Practice",
    "modules": [
      {
        "id": "mod1",
        "num": 1,
        "title": "Blood Relation",
        "lectures": "ST-1 Relational Logic",
        "desc": "Family tree mapping, generational lineages, group puzzle caselets, and pointing/dialogue deciphering.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Family Tree & Generation Deduction",
            "desc": "Direct parent-child, sibling, and grandparent relationships across multi-generational family trees.",
            "count": 12
          },
          {
            "id": "type_2",
            "name": "Type 2: Group Caselet & Complex Puzzles",
            "desc": "Multi-person relational caselets with interrelated family puzzle sets.",
            "count": 7
          },
          {
            "id": "type_3",
            "name": "Type 3: Pointing & Dialogue-Based Relations",
            "desc": "Deciphering intricate speaker statements, portrait descriptions, and indirect relational chains.",
            "count": 15
          }
        ]
      },
      {
        "id": "mod2",
        "num": 2,
        "title": "Coded Relation",
        "lectures": "ST-1 Symbolic Logic",
        "desc": "Decoding family relationships expressed through mathematical and punctuation symbols.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Forward Symbolic Chain Expressions",
            "desc": "Decoding multi-variable relational expressions with direct forward symbol definitions.",
            "count": 5
          },
          {
            "id": "type_2",
            "name": "Type 2: Target Relationship Equation Finding",
            "desc": "Testing multiple coded expressions using gender elimination and generational gap analysis.",
            "count": 4
          },
          {
            "id": "type_3",
            "name": "Type 3: Arithmetic Operator Relationship Codes",
            "desc": "Problems using basic arithmetic operators (+, -, ×, ÷) to represent family relationships.",
            "count": 2
          },
          {
            "id": "type_4",
            "name": "Type 4: Reverse-Direction Relational Coding",
            "desc": "Decoding relationships where operators define right-to-left kinship (e.g. A + B means B is the father of A).",
            "count": 3
          },
          {
            "id": "type_5",
            "name": "Type 5: Mixed Direction Lineage & Conclusions",
            "desc": "Hybrid bidirectional definitions combining forward and reverse clauses to deduce generational conclusions.",
            "count": 4
          }
        ]
      },
      {
        "id": "mod3",
        "num": 3,
        "title": "Analogy",
        "lectures": "ST-1 Verbal & Numerical Analogy",
        "desc": "Semantic pairs, general knowledge associations, number patterns/sets, and letter coding analogies.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Word & General Knowledge Analogy",
            "desc": "Biological classifications, tool-worker, object-function, cause-effect, and antonym/synonym pairings.",
            "count": 28
          },
          {
            "id": "type_2",
            "name": "Type 2: Number Analogy & Numerical Sets",
            "desc": "Arithmetic multipliers, square/cube relations, prime sequences, and triple number set patterns.",
            "count": 15
          },
          {
            "id": "type_3",
            "name": "Type 3: Letter & Alphabet Coding Analogy",
            "desc": "Opposite letter pairs, constant shift alphabetic patterns (+5/-5, +1/-1), and word anagram reshuffling.",
            "count": 7
          }
        ]
      },
      {
        "id": "mod4",
        "num": 4,
        "title": "Direction",
        "lectures": "ST-1 Spatial Orientation",
        "desc": "Tracking cardinal compass orientations, displacement vectors, angular rotations, and shadow phenomena.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Turns, Rotations & Clock Angles",
            "desc": "Clockwise/anticlockwise angular turns, degree shifts, and clock hand orientation puzzles.",
            "count": 10
          },
          {
            "id": "type_2",
            "name": "Type 2: Distance & Displacement (Pythagoras)",
            "desc": "Shortest direct distance between starting and end points using the Pythagorean theorem.",
            "count": 11
          },
          {
            "id": "type_3",
            "name": "Type 3: Cardinal & Relative Position Puzzles",
            "desc": "Determining position and facing direction relative to starting points, landmarks, or villages.",
            "count": 14
          },
          {
            "id": "type_4",
            "name": "Type 4: Shadow-Based Direction Scenarios",
            "desc": "Morning/evening sun positions, shadow orientations, and face-to-face dialogues.",
            "count": 3
          }
        ]
      },
      {
        "id": "mod5",
        "num": 5,
        "title": "Number System",
        "lectures": "ST-1 Number Theory",
        "desc": "Unit digits, trailing zeros, factor counts, algebraic divisibility, digit reversals, and series summation.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Unit Digits & Trailing Zeros",
            "desc": "Cyclicity of powers, product unit digits, and counting trailing zeros in factorials and products.",
            "count": 5
          },
          {
            "id": "type_2",
            "name": "Type 2: Factors, Multiples & Primes",
            "desc": "Total factors, sum/average of factors, product of factors, prime factors, and primality testing.",
            "count": 10
          },
          {
            "id": "type_3",
            "name": "Type 3: Divisibility Rules & Remainder Theorems",
            "desc": "Modular arithmetic, successive division remainders, composite divisibility (11, 45, 88, 99), and algebraic forms (xⁿ ± aⁿ).",
            "count": 25
          },
          {
            "id": "type_4",
            "name": "Type 4: Two-Digit Numbers & Digit Reversal",
            "desc": "Algebraic properties of two-digit numbers, digit reversals (11|sum, 9|diff), and 4-digit repetition patterns.",
            "count": 6
          },
          {
            "id": "type_5",
            "name": "Type 5: Series Summation (Squares & Cubes)",
            "desc": "Sum of natural numbers, squares of even/odd integers, cubes summation, and arithmetic progressions.",
            "count": 11
          },
          {
            "id": "type_6",
            "name": "Type 6: Extra Q",
            "desc": "Advanced number theory, algebraic word formulations, coin distributions, and arithmetic models.",
            "count": 20
          }
        ]
      },
      {
        "id": "mod6",
        "num": 6,
        "title": "H.C.F. & L.C.M.",
        "lectures": "ST-1 Divisibility & Multiples",
        "desc": "Prime factorization, fraction/decimal rules, circular track races, traffic light cycles, remainder models, and ratio properties.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Fundamental HCF & LCM Calculations",
            "desc": "Prime powers, algebraic variables, decimals, fractions, and prime factor representations.",
            "count": 5
          },
          {
            "id": "type_2",
            "name": "Type 2: Real-World Applications (Measurement & Tracks)",
            "desc": "Greatest common measuring scales, container capacities, traffic light synchronization, and circular track running laps.",
            "count": 5
          },
          {
            "id": "type_3",
            "name": "Type 3: Remainder Theorems & Divisibility Models",
            "desc": "Same remainder, distinct remainders with constant difference (LCM - k), difference HCF methods, and boundary bounds.",
            "count": 13
          },
          {
            "id": "type_4",
            "name": "Type 4: Product, Ratio & Factor Properties",
            "desc": "HCF × LCM = Product identities, co-prime pairs, ratio scaling (ax : bx), and HCF dividing LCM conditions.",
            "count": 9
          },
          {
            "id": "type_5",
            "name": "Type 5: Extra Q",
            "desc": "Fraction HCF/LCM, prime factor powers, coprimes, signal bells, and algebraic LCM equations.",
            "count": 20
          }
        ]
      },
      {
        "id": "mod7",
        "num": 7,
        "title": "Average",
        "lectures": "ST-1 Central Tendency",
        "desc": "Arithmetic mean properties, inclusion/exclusion, replacement formulas, alligation, cricket averages, harmonic average speed, and hostel mess balance.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Arithmetic Mean & Uniform Operations",
            "desc": "Consecutive integers, constant shifts (+k, -k, ×k, ÷k), and algebraic ratio number triples.",
            "count": 7
          },
          {
            "id": "type_2",
            "name": "Type 2: Inclusion, Exclusion & Replacement",
            "desc": "Joining and leaving group averages, replacement weight formulas, and teacher/student age adjustments.",
            "count": 7
          },
          {
            "id": "type_3",
            "name": "Type 3: Weighted Averages, Groups & Alligation",
            "desc": "Multi-group demographic means, pass/fail alligation, investment capital return, and missing observation totals.",
            "count": 8
          },
          {
            "id": "type_4",
            "name": "Type 4: Cricket Batting & Bowling Averages",
            "desc": "Innings run rate increases, batsman career averages, and bowler wickets-per-run improvement.",
            "count": 3
          },
          {
            "id": "type_5",
            "name": "Type 5: Average Speed & Distance Travel",
            "desc": "Harmonic speed for equal distances (2xy/(x+y)), 3-segment journeys, fractional distances, and square track circuits.",
            "count": 6
          },
          {
            "id": "type_6",
            "name": "Type 6: Hostel Mess, Temperature & Family Demographics",
            "desc": "Hostel expenditure systems, overlapping weekly temperatures, multi-year population growth, and historical family age births.",
            "count": 7
          },
          {
            "id": "type_7",
            "name": "Type 7: Extra Q",
            "desc": "Hostel mess accounts, misread corrections, multi-tier age progressions, and algebraic average word problems.",
            "count": 20
          }
        ]
      },
      {
        "id": "mod8",
        "num": 8,
        "title": "Remainder Theorem",
        "lectures": "ST-1 Modular Arithmetic",
        "desc": "Positive & negative remainders, arithmetic operations (a × b, a ± b), factorial series, unit & last two digits, fraction simplification, power splitting, Fermat's/Wilson's/Cyclicity theorems, successive powers, and algebraic polynomials.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: When Numerator is Positive",
            "desc": "Basic modular arithmetic and direct integer division with positive numerators.",
            "count": 4
          },
          {
            "id": "type_2",
            "name": "Type 2: When Numerator is Negative",
            "desc": "Negative dividend remainder shift rule (Divisor - |remainder| positive conversion).",
            "count": 4
          },
          {
            "id": "type_3",
            "name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
            "desc": "Remainders of products (a × b), sums (a + b), and differences (a - b) under modulo arithmetic.",
            "count": 9
          },
          {
            "id": "type_4",
            "name": "Type 4: Factorial Based Remainder",
            "desc": "Factorial series cutoff properties and zero-remainder absorption for n! mod k.",
            "count": 3
          },
          {
            "id": "type_5",
            "name": "Type 5: Unit Digit & Last Two Digits",
            "desc": "Finding unit digits of factorial sums and last two digits of large products via mod 100.",
            "count": 3
          },
          {
            "id": "type_6",
            "name": "Type 6: Fraction Simplification (Common Factor)",
            "desc": "Simplifying fractions by cancelling common factors and restoring the multiplier to final remainder.",
            "count": 2
          },
          {
            "id": "type_7",
            "name": "Type 7: Power Form & Splitting",
            "desc": "Power forms (aⁿ mod m), base grouping to ±1 mod m, and power management splitting.",
            "count": 9
          },
          {
            "id": "type_8",
            "name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
            "desc": "Fermat's Little Theorem (aᵖ⁻¹ ≡ 1), Wilson's Theorem ((p-1)! ≡ -1), and Euler totient period cyclicity.",
            "count": 13
          },
          {
            "id": "type_9",
            "name": "Type 9: Next Power Concept",
            "desc": "Successive power series (10¹+10²+...+10¹⁰⁰ mod 6), power towers, and symmetric binomial sums.",
            "count": 4
          },
          {
            "id": "type_10",
            "name": "Type 10: Algebraic Remainder Theorem",
            "desc": "Polynomial remainder theorem P(a) evaluated by substituting root of linear divisor (x - a = 0).",
            "count": 4
          }
        ]
      },
      {
        "id": "mod9",
        "num": 9,
        "title": "Ratio & Proportion",
        "lectures": "ST-1 Quantitative Relations",
        "desc": "Third/fourth proportionals, coin denomination bags, multi-vessel liquid replacements, alloy melting, candle burning rates, and income-expenditure ratios.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Proportionals & Compound Ratio Formulations",
            "desc": "Third and fourth proportionals, continuous ratio chains (A:B:C:D), speed/leap rates, and wage bill multiples.",
            "count": 6
          },
          {
            "id": "type_2",
            "name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
            "desc": "Sum and difference partitioning, multi-denomination coin bags (rupees, 50p, 25p, 20p, 5p), and linear equality partitions.",
            "count": 6
          },
          {
            "id": "type_3",
            "name": "Type 3: Mixture Replacements, Dilution & Alloys",
            "desc": "Equal and unequal vessel combination, liquid additions, alloy melting proportions, and multi-step replacement equations.",
            "count": 9
          },
          {
            "id": "type_4",
            "name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
            "desc": "Uniform addition/subtraction to ratio terms, income-savings-expenditure models, candle consumption rates, and relative salary growth.",
            "count": 7
          }
        ]
      },
      {
        "id": "mod10",
        "num": 10,
        "title": "Ages",
        "lectures": "ST-1 Linear Relations",
        "desc": "Simultaneous linear equations applied to past, present, and future age problems.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Ratio & Past/Future Age",
            "desc": "Age-ratio questions where ages are compared across present, past, and future time points.",
            "count": 10
          },
          {
            "id": "type_2",
            "name": "Type 2: Sum/Difference & Age Relations",
            "desc": "Problems using total or difference of ages together with direct age relationships.",
            "count": 7
          },
          {
            "id": "type_3",
            "name": "Type 3: Product-Based Age Problems",
            "desc": "Problems involving the product of ages, usually combined with ratios or another age relation.",
            "count": 4
          },
          {
            "id": "type_4",
            "name": "Type 4: Multiple-Person & Advanced Age Problems",
            "desc": "Problems involving three or more people, indirect age statements, averages, or combined age conditions.",
            "count": 5
          }
        ]
      },
      {
        "id": "mod11",
        "num": 11,
        "title": "Partnership",
        "lectures": "ST-1 Commercial Arithmetic",
        "desc": "Simple and compound investment ratios, variable durations, working partner remuneration, charity deductions, and capital-profit inversions.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Simple & Compound Investment Sharing",
            "desc": "Equal and unequal investment durations, mid-term admissions, fractional capital & multi-year horizons.",
            "count": 6
          },
          {
            "id": "type_2",
            "name": "Type 2: Variable Time, Capital & Ratio Inversion",
            "desc": "Solving for unknown capital, investment durations (T = P/C), capital ratios (C = P/T), and algebraic setups.",
            "count": 7
          },
          {
            "id": "type_3",
            "name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
            "desc": "Manager remuneration, percentage returns, charity pre-deductions, partial equal distributions, and ratio equations.",
            "count": 5
          }
        ]
      },
      {
        "id": "mod12",
        "num": 12,
        "title": "Allegation",
        "lectures": "ST-1 Mixture Mechanics",
        "desc": "Cross-rule of alligation for calculating mean prices and liquid concentration replacements.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Mean Price & Basic Alligation Cross-Rule",
            "desc": "Direct cross-rule of alligation applied to commodity prices, mean costs, and water mixing.",
            "count": 7
          },
          {
            "id": "type_2",
            "name": "Type 2: Rate, Speed & Commercial Mixtures",
            "desc": "Alligation applied to percentage rates, average speeds, profit/loss mixtures, and group distributions.",
            "count": 7
          },
          {
            "id": "type_3",
            "name": "Type 3: Liquid Concentration & Vessel Mixing",
            "desc": "Ratios of components in vessels, adding water/sugar to change concentrations, and alloy blending.",
            "count": 7
          },
          {
            "id": "type_4",
            "name": "Type 4: Repeated Withdrawal & Successive Replacement",
            "desc": "Repeated withdrawal and dilution formula Q = Q0(1 - y/Q0)^n, and reverse solving for capacity.",
            "count": 4
          }
        ]
      },
      {
        "id": "mod13",
        "num": 13,
        "title": "Odd One Out",
        "lectures": "ST-1 Anomaly Detection",
        "desc": "Spotting the unique divergent element in letters, pairs, and letter sets.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Single Letter Classification",
            "desc": "Find the one letter that does not share the common classification with the others.",
            "count": 2
          },
          {
            "id": "type_2",
            "name": "Type 2: Pair-Based Classification",
            "desc": "Identify the odd pair using alphabet positions, gaps, order, or combined properties.",
            "count": 7
          },
          {
            "id": "type_3",
            "name": "Type 3: Set/Triple-Based Classification",
            "desc": "Find the odd three-letter set by detecting the common positional pattern followed by the other sets.",
            "count": 18
          }
        ]
      },
      {
        "id": "mod14",
        "num": 14,
        "title": "Syllogism",
        "lectures": "ST-1 Deductive Logic",
        "desc": "Categorical syllogisms, Venn diagram intersections, immediate conversions, complementary either-or pairs, and multi-premise deductive logic.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Two-Statement Direct Deductions & Conversions",
            "desc": "Universal and particular premise combinations, immediate proposition conversion, and direct containment.",
            "count": 6
          },
          {
            "id": "type_2",
            "name": "Type 2: Complementary Pairs & Either-Or Conditions",
            "desc": "Contradictory propositions (Some + No) across identical subject-predicate terms yielding either-or conclusions.",
            "count": 6
          },
          {
            "id": "type_3",
            "name": "Type 3: Multi-Statement Chain Arguments",
            "desc": "Three and four-premise deductive chains, concentric set containment, and non-adjacent set fallacies.",
            "count": 10
          },
          {
            "id": "type_4",
            "name": "Type 4: Complex Multi-Conclusion & Hybrid Either-Or Models",
            "desc": "Four-statement syllogisms evaluating simultaneous definite conclusions alongside complementary either-or pairs.",
            "count": 3
          }
        ]
      },
      {
        "id": "mod15",
        "num": 15,
        "title": "FA1 Questions",
        "lectures": "FA-1 Revision Question Set",
        "desc": "Formative Assessment 1 practice set covering Blood Relation, Coded Relation and Direction.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Blood Relation",
            "desc": "Family-group puzzles, pointing statements, introductions and dialogue-based relations.",
            "count": 13
          },
          {
            "id": "type_2",
            "name": "Type 2: Coded Relation",
            "desc": "Symbol-coded relation expressions (+, −, ×, ÷, $, #, *, %) decoded into family relationships.",
            "count": 9
          },
          {
            "id": "type_3",
            "name": "Type 3: Direction",
            "desc": "Distance and displacement walks, turns and rotations, clock directions and relative-position problems.",
            "count": 16
          }
        ]
      },
      {
        "id": "mod16",
        "num": 16,
        "title": "ST1 Questions",
        "lectures": "ST-1 Revision Question Set",
        "desc": "Mixed ST-1 practice set covering Number System, H.C.F. & L.C.M., Average and Remainder Theorem.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Number System",
            "desc": "Trailing zeros in factorials, divisibility by 8/9/7·11·13, consecutive numbers, unit digits, digit reversals, two-digit primes and simultaneous divisibility.",
            "count": 27
          },
          {
            "id": "type_2",
            "name": "Type 2: H.C.F. & L.C.M.",
            "desc": "LCM/HCF of numbers, powers, decimals and ratios, HCF×LCM relation, same-remainder problems, scale and soldier-square applications, tolling bells and perfect square multiples.",
            "count": 32
          },
          {
            "id": "type_3",
            "name": "Type 3: Average",
            "desc": "Averages of natural/odd/even numbers, replacement and inclusion, harmonic average speed, weighted blends, run rates, consecutive progressions and diamond valuation systems.",
            "count": 29
          },
          {
            "id": "type_4",
            "name": "Type 4: Remainder Theorem",
            "desc": "Successive division, LCM-based remainders, remainder of large powers, algebraic forms, greatest/least number conditions, modulo powers and equal remainder differences.",
            "count": 24
          }
        ]
      },
      {
        "id": "mod17",
        "num": 17,
        "title": "FA2 Questions",
        "lectures": "FA-2 Revision Question Set",
        "desc": "Formative Assessment 2 practice set covering Ratio & Proportion and Syllogism.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Ratio & Proportion",
            "desc": "Ratio combinations, coin bags, proportionality, partnerships, and sharing divisions.",
            "count": 38
          },
          {
            "id": "type_2",
            "name": "Type 2: Syllogism",
            "desc": "Two and three-statement categorical deductions, possibility conclusions, and Venn logic.",
            "count": 34
          }
        ]
      }
    ]
  },
  "st2": {
    "id": "st2",
    "name": "ST2",
    "title": "ST-2 Sessional Test",
    "badge": "11 Modules",
    "prefix": "ST-2 Practice",
    "modules": [
      {
        "id": "st2_mod1",
        "num": 1,
        "title": "Percentage",
        "lectures": "ST-2 Commercial Arithmetic",
        "desc": "Percentage fundamentals, fractions to percentages, successive percentage shifts, price-consumption-expenditure relations, and election models.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Basic Percentages, Fractions & Relative Comparison",
            "desc": "Fraction-to-percentage conversion, relative comparisons (more than/less than), and unit value evaluation.",
            "count": 6
          },
          {
            "id": "type_2",
            "name": "Type 2: Successive Percentage, Net Change & Area Shifts",
            "desc": "Successive percentage changes (a + b + ab/100), equivalent discounts, geometry area shifts, and compounded population growth.",
            "count": 7
          },
          {
            "id": "type_3",
            "name": "Type 3: Price, Consumption & Expenditure Mechanics",
            "desc": "Inverse price-consumption relations, constant expenditure reduction formulas, and price reductions with quantity adjustments.",
            "count": 8
          },
          {
            "id": "type_4",
            "name": "Type 4: Exam Marks, Population & Set Overlaps",
            "desc": "Passing marks thresholds, two-set Venn overlaps, demographic population splits, and income-savings allocations.",
            "count": 6
          },
          {
            "id": "type_5",
            "name": "Type 5: Mixture Dilution & Evaporation Dynamics",
            "desc": "Acidic liquid dilution, water evaporation with invariant solute weight, and concentration adjustments.",
            "count": 3
          },
          {
            "id": "type_6",
            "name": "Type 6: Election Voting Models & Commission Sharing",
            "desc": "Two-candidate voting shares, valid vs invalid ballots, voter turnout percentages, and tiered sales commission.",
            "count": 4
          }
        ]
      },
      {
        "id": "st2_mod2",
        "num": 2,
        "title": "Alphabet Test",
        "lectures": "ST-2 Verbal Reasoning",
        "desc": "Alphabetical ranking, word formation, backward-forward letter pair intervals, dictionary arrangement, and position shifts.",
        "types": []
      },
      {
        "id": "st2_mod3",
        "num": 3,
        "title": "Mathematical Operation",
        "lectures": "ST-2 Symbolic Logic",
        "desc": "Symbol substitution, operator interchange (+, -, *, /), balancing LHS and RHS equations, and BODMAS precedence evaluation.",
        "types": []
      },
      {
        "id": "st2_mod4",
        "num": 4,
        "title": "Coding-Decoding",
        "lectures": "ST-2 Cipher Logic",
        "desc": "Letter-to-letter shifts, opposite letter pairings, number-symbol matrix coding, and deciphering fictitious language codes.",
        "types": [
          {
            "id": "type_1",
            "name": "Type 1: Letter Shifting, Inversions & Positional Rearrangements",
            "desc": "Half-split letter offsets, pair reversals, outer swaps, and directional shift ciphers.",
            "count": 7
          },
          {
            "id": "type_2",
            "name": "Type 2: Letter-to-Number & Symbolic Substitution",
            "desc": "Direct letter-digit mapping, vowel-consonant ordinal rules, and set-based deduction.",
            "count": 8
          },
          {
            "id": "type_3",
            "name": "Type 3: Deciphering Fictitious Language & Substitution Chains",
            "desc": "Common-phrase elimination matrices, 'is called' rules, and artificial language codes.",
            "count": 4
          },
          {
            "id": "type_4",
            "name": "Type 4: Conditional Matrix Coding & Boundary Logic",
            "desc": "Numeral-symbol and letter matrices governed by vowel/consonant and odd/even boundary constraints.",
            "count": 4
          }
        ]
      },
      {
        "id": "st2_mod5",
        "num": 5,
        "title": "Simple Interest",
        "lectures": "ST-2 Financial Mathematics",
        "desc": "Principal, rate of interest, elapsed time relations (SI = PRT/100), money doubling/trebling periods, and varying interest slabs.",
        "types": []
      },
      {
        "id": "st2_mod6",
        "num": 6,
        "title": "Compound Interest",
        "lectures": "ST-2 Financial Mathematics",
        "desc": "Annual and semi-annual compounding, difference between CI and SI for 2 & 3 years, depreciation rates, and population dynamics.",
        "types": []
      },
      {
        "id": "st2_mod7",
        "num": 7,
        "title": "Profit & Loss",
        "lectures": "ST-2 Commercial Mathematics",
        "desc": "Cost price, selling price, profit/loss percentage, dishonest dealer false weights, and successive buy-sell transaction chains.",
        "types": []
      },
      {
        "id": "st2_mod8",
        "num": 8,
        "title": "Discount",
        "lectures": "ST-2 Commercial Mathematics",
        "desc": "Marked price, single equivalent discount of successive discount percentages, buy-x-get-y-free promotions, and net profit margins.",
        "types": []
      },
      {
        "id": "st2_mod9",
        "num": 9,
        "title": "Number Sequence",
        "lectures": "ST-2 Sequence & Logic",
        "desc": "Numerical position tests, identifying numbers immediately preceded or succeeded by specific conditions, and digit swapping.",
        "types": []
      },
      {
        "id": "st2_mod10",
        "num": 10,
        "title": "Series",
        "lectures": "ST-2 Pattern Recognition",
        "desc": "Missing number series, wrong term detection in series, mixed arithmetic-geometric series, and two-tier difference patterns.",
        "types": []
      },
      {
        "id": "st2_mod11",
        "num": 11,
        "title": "Arithmetic Progression (A.P) & Geometric Progression (G.P)",
        "lectures": "ST-2 Progressions & Series",
        "desc": "Common difference, common ratio, n-th term formulas (Tn = a + (n-1)d, Tn = ar^(n-1)), sum of n terms (Sn), and infinite G.P. sums.",
        "types": []
      }
    ]
  },
  "endterm": {
    "id": "endterm",
    "name": "End Term",
    "title": "End Term Examination",
    "badge": "14 Modules",
    "prefix": "End Term Practice",
    "modules": [
      {
        "id": "end_mod1",
        "num": 1,
        "title": "Time & Work",
        "lectures": "End Term Work Mechanics",
        "desc": "Unit work method, worker efficiency ratios, alternate day work, workers leaving before completion, and group efficiency.",
        "types": []
      },
      {
        "id": "end_mod2",
        "num": 2,
        "title": "Pipe & Cistern",
        "lectures": "End Term Flow Mechanics",
        "desc": "Inlet and outlet filling/emptying rates, net tank capacity, reservoir leakages, and alternating pipe schedules.",
        "types": []
      },
      {
        "id": "end_mod3",
        "num": 3,
        "title": "Mixed Proportion",
        "lectures": "End Term Proportional Logic",
        "desc": "Chain rule formulations (M1*D1*H1/W1 = M2*D2*H2/W2), garrison food provisions, and man-woman-boy equivalence.",
        "types": []
      },
      {
        "id": "end_mod4",
        "num": 4,
        "title": "Work & Wages",
        "lectures": "End Term Commercial Allocation",
        "desc": "Distributing total wages strictly in proportion to the fractional work done or individual worker efficiency.",
        "types": []
      },
      {
        "id": "end_mod5",
        "num": 5,
        "title": "Ranking",
        "lectures": "End Term Positional Logic",
        "desc": "Linear rankings from left/right and top/bottom, position interchanges, overlapping ranks, and minimum total row occupants.",
        "types": []
      },
      {
        "id": "end_mod6",
        "num": 6,
        "title": "Cube & Cuboid",
        "lectures": "End Term Spatial Reasoning",
        "desc": "Painted cube cuts (n^3), corner/middle/central/inner cubes with 3, 2, 1, or 0 painted faces, and cuboid dissection counts.",
        "types": []
      },
      {
        "id": "end_mod7",
        "num": 7,
        "title": "Calendar",
        "lectures": "End Term Chronological Reasoning",
        "desc": "Odd day calculations, century leap years, finding the weekday for historical dates, and calendar year repetition periods.",
        "types": []
      },
      {
        "id": "end_mod8",
        "num": 8,
        "title": "Clock",
        "lectures": "End Term Angular Dynamics",
        "desc": "Hand angle formulas (theta = |30H - 5.5M|), hand overlap and right angle frequency, and clock gain/loss error correction.",
        "types": []
      },
      {
        "id": "end_mod9",
        "num": 9,
        "title": "Time Sequence",
        "lectures": "End Term Temporal Deduction",
        "desc": "Elapsed time calculations, schedule appointments, bus intervals, and sequence deductions.",
        "types": []
      },
      {
        "id": "end_mod10",
        "num": 10,
        "title": "Reading Comprehension",
        "lectures": "End Term Verbal Aptitude",
        "desc": "Paragraph analysis, central idea extraction, author tone identification, contextual inference, and passage-based MCQs.",
        "types": []
      },
      {
        "id": "end_mod11",
        "num": 11,
        "title": "Rearrangement/ Jumbled Sentences",
        "lectures": "End Term Verbal Logic",
        "desc": "Sentence ordering (PQRS / ABCDE), introductory sentence spotting, logical connective flow, and cohesive paragraphs.",
        "types": []
      },
      {
        "id": "end_mod12",
        "num": 12,
        "title": "Cloze Test",
        "lectures": "End Term Contextual English",
        "desc": "Contextual vocabulary, grammatical fillers, appropriate prepositions, and blank filling in continuous passages.",
        "types": []
      },
      {
        "id": "end_mod13",
        "num": 13,
        "title": "Vocabulary",
        "lectures": "End Term Lexical Aptitude",
        "desc": "Lexical mastery covering antonyms, synonyms, idiomatic expressions, and concise one-word substitutions.",
        "types": [
          {
            "id": "type_1",
            "name": "a. Synonyms & Antonyms",
            "desc": "Direct meaning matches, opposite pairs, and context nuances.",
            "count": 0
          },
          {
            "id": "type_2",
            "name": "b. Idioms & Phrases",
            "desc": "Figurative phrases, proverbs, and metaphorical expressions.",
            "count": 0
          },
          {
            "id": "type_3",
            "name": "c. One-word Substitution",
            "desc": "Concise single-word replacements for lengthy phrases and descriptions.",
            "count": 0
          }
        ]
      },
      {
        "id": "end_mod14",
        "num": 14,
        "title": "Error Detection & Sentence Improvement",
        "lectures": "End Term Applied Grammar",
        "desc": "Spotting grammatical fallacies, syntax errors, and sentence corrections in formal English.",
        "types": [
          {
            "id": "type_1",
            "name": "a. Noun/Article/Verb/Subject-Verb Agreement",
            "desc": "Core syntax rules, singular/plural concordance, tense consistency, and article usages.",
            "count": 0
          }
        ]
      }
    ]
  }
};
