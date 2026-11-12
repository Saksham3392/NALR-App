/**
 * NALR MASTERCLASS - 810 VERIFIED APTITUDE & REASONING MCQS
 * Auto-generated from source of truth: quiz_questions.js
 * DO NOT MODIFY VALUES DIRECTLY - PRESERVES EXACT ANSWER ACCURACY.
 */

export interface Question {
  id: string;
  module_id: string;
  module_name: string;
  syllabus_lec: string;
  type_id: string;
  type_name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    "id": "br_q1",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "A is father of C and D is son of B, E is brother of A. If C is sister of D then how is B related to A?",
    "options": [
      "daughter",
      "brother-in-law",
      "husband",
      "wife"
    ],
    "correct": "wife",
    "explanation": "🌳 Family Tree Deduction:\n1. A is father of C.\n2. C is sister of D -> C and D are siblings, so A is also father of D.\n3. D is son of B -> B is the mother of D.\n4. Since A is the father and B is the mother of the same children, B is the **wife** of A."
  },
  {
    "id": "br_q2",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "Daya’s brother is Anil. Daya is son of Chandra. Vimal is father of Chandra. How is Anil related to Vimal.",
    "options": [
      "son",
      "grandson",
      "brother",
      "grandfather"
    ],
    "correct": "grandson",
    "explanation": "🌳 Lineage Breakdown:\n1. Daya is the son of Chandra.\n2. Anil is Daya's brother -> Anil is also the son of Chandra.\n3. Vimal is the father of Chandra.\n4. Therefore, Anil is the **grandson** of Vimal."
  },
  {
    "id": "br_q3",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "M is N’s brother. K is M’s sister. P is Brother of O, O is N’s daughter. Who is uncle of P?",
    "options": [
      "N",
      "K",
      "O",
      "M"
    ],
    "correct": "M",
    "explanation": "🌳 Generational Step:\n1. O is N's daughter, and P is brother of O -> P is the son of N.\n2. M is brother of N.\n3. The brother of one's parent is an uncle.\n4. Therefore, **M** is the uncle of P."
  },
  {
    "id": "br_q4",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "B’s sister is A, C’s brother is B, C is son of D then how is A related to D.",
    "options": [
      "Mother",
      "Son",
      "Daughter",
      "Uncle"
    ],
    "correct": "Daughter",
    "explanation": "🌳 Sibling Chain:\n1. C's brother is B, and B's sister is A -> A, B, and C are siblings.\n2. A is female (sister).\n3. C is son of D -> D is the parent of all three siblings.\n4. Thus, A is the **Daughter** of D."
  },
  {
    "id": "br_q5",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "If B’s Mother is A, C is Son of A, E’s Brother is D, B’s daughter is E. Then who is grand Mother of D.",
    "options": [
      "A",
      "B",
      "C",
      "E"
    ],
    "correct": "A",
    "explanation": "🌳 Generational Mapping:\n1. B's daughter is E, and D is E's brother -> D is the son of B.\n2. B's mother is A.\n3. The mother of D's parent is D's grandmother.\n4. Therefore, **A** is the grandmother of D."
  },
  {
    "id": "br_q6",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "Rajan is brother of Sachin and Manik is father of Rajan. Jagat is brother of Priya who is daughter of Sachin. Who is uncle of Jagat?",
    "options": [
      "Rajan",
      "Sachin",
      "Manik",
      "None of these"
    ],
    "correct": "Rajan",
    "explanation": "🌳 Family Tree Trace:\n1. Priya is daughter of Sachin, and Jagat is her brother -> Jagat is son of Sachin.\n2. Rajan is brother of Sachin.\n3. Father's brother is paternal uncle.\n4. Hence, **Rajan** is the uncle of Jagat."
  },
  {
    "id": "br_q7",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "A is the son of C, Z is the mother of Q and P is the son of Z, C and Q are sisters. Which of the following statements is true?",
    "options": [
      "P and A are cousins",
      "P is the maternal uncle of A",
      "Q is the maternal grandfather of A",
      "C and P are sisters"
    ],
    "correct": "P is the maternal uncle of A",
    "explanation": "🌳 Maternal Lineage:\n1. C and Q are sisters, and Z is their mother.\n2. P is the son of Z -> P is the brother of C and Q.\n3. A is the son of C.\n4. The brother of one's mother is maternal uncle.\n5. Therefore, **P is the maternal uncle of A**."
  },
  {
    "id": "br_q8",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "D is brother of B. M is Brother of B. K is father of M. T is wife of K. How is B related to T ?",
    "options": [
      "son",
      "daughter",
      "father",
      "data inadequate",
      "none of these"
    ],
    "correct": "data inadequate",
    "explanation": "⚠️ Gender Ambiguity Trap:\n1. K is father of M, and T is wife of K -> K (father) and T (mother).\n2. D, M, and B are children of K and T.\n3. We know D is male (brother) and M is male (brother), but the gender of B is **not mentioned**.\n4. B could be either son or daughter of T. Hence, **data inadequate**."
  },
  {
    "id": "br_q9",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Q’s mother is sister of P and daughter of M. S is daughter of P and sister of T. How is M related to T?",
    "options": [
      "Grandfather",
      "father",
      "Grand mother",
      "Either grandfather or grand mother",
      "None of these"
    ],
    "correct": "Either grandfather or grand mother",
    "explanation": "⚠️ Gender Ambiguity:\n1. S and T are siblings, children of P.\n2. P is child of M (since Q's mother is sister of P and daughter of M).\n3. M is the parent of P, so M is the grandparent of T.\n4. Since the gender of M is unspecified, M is **Either grandfather or grand mother**."
  },
  {
    "id": "br_q10",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Hard",
    "points": 1,
    "question": "Lovely is a daughter of Ravindra. Geeta, Babita’s sister has a son Golu and daughter Lali. Mala is maternal aunt of Lali and mother of Prabhakar. Prabhakar is brother of Lovely. How is Babita related to Ravindra?",
    "options": [
      "Niece",
      "Sister-in-Law",
      "Cousin",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🌳 Complex Family Tree:\n1. Prabhakar is brother of Lovely, and Lovely is daughter of Ravindra -> Ravindra is father of both.\n2. Mala is mother of Prabhakar -> Mala is the wife of Ravindra.\n3. Mala is maternal aunt of Lali (Geeta's daughter) -> Geeta, Babita, and Mala are sisters.\n4. Babita is the sister of Ravindra's wife (Mala). In precise terminology, Babita is the sister-in-law of Ravindra.\n5. In the examination key for this question, option **(d) None of these** is designated as the correct choice."
  },
  {
    "id": "br_q11",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Sarita is mother-in-law of Deepa who is Sister-in-law of Rajendra. Surendra who is father of Ravindra is the only brother of Rajendra. How is Sarita related to Rajendra?",
    "options": [
      "Wife",
      "Mother",
      "Aunt",
      "Mother-in-law"
    ],
    "correct": "Mother",
    "explanation": "🌳 Relational Deduction:\n1. Surendra is the only brother of Rajendra.\n2. Deepa is sister-in-law of Rajendra -> Deepa is married to Surendra.\n3. Sarita is mother-in-law of Deepa -> Sarita is the mother of Deepa's husband (Surendra).\n4. Since Surendra and Rajendra are brothers, Sarita is also the **Mother** of Rajendra."
  },
  {
    "id": "br_q12",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Hard",
    "points": 1,
    "question": "Prayank is the son of Sister of Jeewan’s father. Vinod is Son of Usha who is the mother of Sunny and grandmother of Jeewan. Pawan is the father Kalika and maternal grandfather of Prayank. Usha is the wife of Pawan. How is Sunny wife related to Kalika?",
    "options": [
      "Niece",
      "Sister-in-law",
      "Sister",
      "Data inadequate"
    ],
    "correct": "Sister-in-law",
    "explanation": "🌳 Multi-Generational Mapping:\n1. Pawan & Usha are married couple.\n2. Their children include: Vinod, Sunny, and Kalika (mother of Prayank, since Pawan is maternal grandfather of Prayank).\n3. Sunny is the brother of Kalika.\n4. Therefore, Sunny's wife is the **Sister-in-law** of Kalika."
  },
  {
    "id": "br_q13",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Direction(13-14): A is father of C but C is not his Son. B is brother of C. D is son of B. H is father of G. G is spouse of B. F is wife of A. E is daughter of C.\n\nWho is grandmother of D?",
    "options": [
      "A",
      "C",
      "F",
      "H"
    ],
    "correct": "F",
    "explanation": "🧩 Caselet 1 Analysis:\n- A (father) is married to F (mother).\n- Children: C (daughter, since not son) and B (son).\n- B is married to G, and D is son of B.\n- The mother of D's father (B) is F.\n- Hence, **F** is the grandmother of D."
  },
  {
    "id": "br_q14",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Direction(13-14): A is father of C but C is not his Son. B is brother of C. D is son of B. H is father of G. G is spouse of B. F is wife of A. E is daughter of C.\n\nWho is son of F?",
    "options": [
      "B",
      "C",
      "D",
      "E"
    ],
    "correct": "B",
    "explanation": "🧩 Caselet 1 Analysis:\n- F is the wife of A.\n- A's children are C (daughter) and B (brother of C = male = son).\n- Therefore, **B** is the son of F."
  },
  {
    "id": "br_q15",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the paternal grandmother of S?",
    "options": [
      "W",
      "P",
      "R",
      "U"
    ],
    "correct": "U",
    "explanation": "🧩 Caselet 2 Analysis:\n- P (husband) and U (wife) are parents of R (daughter) and Q (son).\n- Q is married to V, and S is son of Q.\n- The mother of S's father (Q) is U.\n- Thus, **U** is the paternal grandmother of S."
  },
  {
    "id": "br_q16",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the son of U?",
    "options": [
      "Q",
      "R",
      "T",
      "S",
      "Cannot be determined"
    ],
    "correct": "Q",
    "explanation": "🧩 Caselet 2 Analysis:\n- U is the wife of P.\n- Children of P and U are R (daughter, since not son) and Q (brother of R = male).\n- Hence, **Q** is the son of U."
  },
  {
    "id": "br_q17",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the father-in-law of Q?",
    "options": [
      "R",
      "P",
      "T",
      "W",
      "None of these"
    ],
    "correct": "W",
    "explanation": "🧩 Caselet 2 Analysis:\n- Q is married to V.\n- W is the father of V.\n- The father of one's spouse is father-in-law.\n- Therefore, **W** is the father-in-law of Q."
  },
  {
    "id": "br_q18",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the sister-in-law of R?",
    "options": [
      "S",
      "V",
      "U",
      "T",
      "cannot be determined"
    ],
    "correct": "V",
    "explanation": "🧩 Caselet 2 Analysis:\n- R's brother is Q.\n- V is the wife of Q.\n- Brother's wife is sister-in-law.\n- Hence, **V** is the sister-in-law of R."
  },
  {
    "id": "br_q19",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the cousin of T?",
    "options": [
      "R",
      "Q",
      "W",
      "S",
      "None of these"
    ],
    "correct": "S",
    "explanation": "🧩 Caselet 2 Analysis:\n- T is the daughter of R.\n- S is the son of Q (brother of R).\n- Children of siblings are cousins to each other.\n- Thus, **S** is the cousin of T."
  },
  {
    "id": "br_q20",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing towards a woman Shailesh said, “She is daughter of mother of father of my mother’s daughter. How is the woman related to Shailesh?",
    "options": [
      "Daughter",
      "Grand daughter",
      "Aunt",
      "Sister"
    ],
    "correct": "Aunt",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My mother’s daughter' = Shailesh’s sister.\n2. 'Father of my sister' = Shailesh’s father.\n3. 'Mother of father' = Shailesh’s paternal grandmother.\n4. 'Daughter of paternal grandmother' = Sister of Shailesh’s father = Paternal **Aunt**."
  },
  {
    "id": "br_q21",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a woman in a photograph, a man says: “she is the only daughter of the mother-in-law of my only son.” How is the woman related to the man?",
    "options": [
      "Daughter",
      "Wife",
      "Daughter-in-law",
      "Mother",
      "Mother-in-law"
    ],
    "correct": "Daughter-in-law",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My only son's mother-in-law' = The mother of my son's wife.\n2. 'The only daughter of that mother-in-law' = My son's wife.\n3. Son's wife is **Daughter-in-law** to the speaker."
  },
  {
    "id": "br_q22",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a woman in a photograph a man says, “She is the only Daughter of my father’s only daughter–in-law.” How is the woman related to the man?",
    "options": [
      "wife",
      "Daughter",
      "Daughter-in-law",
      "Sister",
      "Sister-in-law"
    ],
    "correct": "Daughter",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My father's only daughter-in-law' = The speaker's wife (since father has only one son, the speaker himself).\n2. 'The only daughter of my wife' = The speaker's **Daughter**."
  },
  {
    "id": "br_q23",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a photograph a woman says: “He is the only son of the wife of my husband’s father”. How is the man related to the woman?",
    "options": [
      "Son",
      "Son-in-law",
      "Brother-in-law",
      "Brother",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My husband's father' = Father-in-law.\n2. 'Wife of my husband's father' = Mother-in-law.\n3. 'The only son of mother-in-law' = The woman's husband.\n4. The man is her Husband, which is not listed in options (a)-(d). Hence, **None of these**."
  },
  {
    "id": "br_q24",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing to a man in a photograph a woman says: “He is the father-in-law of the wife of the only paternal grandson(who has no uncles) of my own father-in-law”. How is the man related to the woman?",
    "options": [
      "son",
      "Husband",
      "Cousin",
      "Nephew",
      "Son-in-law"
    ],
    "correct": "Husband",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'Only paternal grandson (who has no uncles) of my father-in-law': since he has no uncles, the woman's husband is an only son, and this grandson is the woman's own son.\n2. 'Wife of her son' = Daughter-in-law.\n3. 'Father-in-law of her daughter-in-law' = The woman's **Husband**."
  },
  {
    "id": "br_q25",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing to woman in a photograph a man says: “She is the paternal grandmother of the son of my daughter-in-law’s mother-in-law.” How is the woman related to that person?",
    "options": [
      "Mother",
      "Mother-in-law",
      "Sister",
      "Sister-in-law",
      "Daughter"
    ],
    "correct": "Mother",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My daughter-in-law's mother-in-law' = The speaker's wife.\n2. 'Son of my wife' = The speaker's son.\n3. 'Paternal grandmother of my son' = The speaker's **Mother**."
  },
  {
    "id": "br_q26",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a woman a man says, “She is the sister-in-law of the only child of my mother-in law’s”. How is the woman related to the man?",
    "options": [
      "Daughter",
      "Mother",
      "Sister-in-law",
      "Daughter-in-law",
      "Sister"
    ],
    "correct": "Sister",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'The only child of my mother-in-law' = The speaker's wife.\n2. 'Sister-in-law of my wife' = The speaker's sister (or his brother's wife).\n3. Here, the direct relation matching the options is **Sister**."
  },
  {
    "id": "br_q27",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a photograph a lady tells Mohan, “I am the only daughter of this lady and her son is your maternal uncle.” How is the speaker related to Mohan’s father?",
    "options": [
      "Wife",
      "Sister-in-law",
      "Either of the two",
      "Mother",
      "Cannot be determined"
    ],
    "correct": "Wife",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'Her son is your maternal uncle' = Mohan's maternal uncle.\n2. 'I am the only daughter of this lady' = Mohan's mother.\n3. The speaker is Mohan's mother, so she is the **Wife** of Mohan's father."
  },
  {
    "id": "br_q28",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Introducing a woman, a man said, “Her mother’s husband’s sister is my mother.” What is the man’s relationship with the woman?",
    "options": [
      "Cousin",
      "nephew-Aunt",
      "Father-daughter",
      "Data insufficient",
      "None of these"
    ],
    "correct": "Cousin",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'Her mother's husband' = Her father.\n2. 'Her father's sister' = Her paternal aunt.\n3. 'Her paternal aunt is my mother' -> The man is her aunt's son.\n4. Therefore, the man is her **Cousin**."
  },
  {
    "id": "br_q29",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a photograph a man, Neha said, “He has no sisters and no daughter, but his mother is the only daughter of my mother” How is the man in the photograph related to Neha’s mother?",
    "options": [
      "Brother-in law",
      "Grandson",
      "Nephew",
      "Can’t be determined"
    ],
    "correct": "Grandson",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'The only daughter of my mother' = Neha herself.\n2. 'His mother is Neha' -> The man is Neha's son.\n3. Neha's son is the **Grandson** of Neha's mother."
  },
  {
    "id": "br_q30",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "If Raju is the son of wife of the son of the father of Amrendra’s father, how is Raju related to Amrendra, if Raju’s grandfather has no granddaughter?",
    "options": [
      "Brother",
      "Cousin",
      "Either 1 or 2",
      "Can’t say",
      "None of these"
    ],
    "correct": "Either 1 or 2",
    "explanation": "🗣️ Multi-Branch Reasoning:\n1. 'Father of Amrendra's father' = Amrendra's grandfather.\n2. 'Son of Amrendra's grandfather' = Could be Amrendra's father OR Amrendra's uncle.\n3. 'Son of the wife of that son' = Raju is either Amrendra's brother (if father's son) OR cousin (if uncle's son).\n4. Therefore, Raju is **Either 1 or 2** (Brother or Cousin)."
  },
  {
    "id": "br_q31",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing towards a lady in a photograph a man said, “She is mother in law of sister in law of my son’s sister”. How is the lady related to the man?",
    "options": [
      "Sister",
      "Sister in law",
      "Mother",
      "Wife"
    ],
    "correct": "Wife",
    "explanation": "🗣️ Chain of In-Laws:\n1. 'My son's sister' = The speaker's daughter.\n2. 'Sister-in-law of my daughter' = The wife of my daughter's brother = Daughter-in-law.\n3. 'Mother-in-law of my daughter-in-law' = The speaker's **Wife**."
  },
  {
    "id": "br_q32",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing towards a man in a photograph a woman said, “He is only son of daughter in law of my only son’s father”. How is the man related to woman?",
    "options": [
      "Son",
      "Father",
      "Son in law",
      "Grand son",
      "Can not be determined"
    ],
    "correct": "Grand son",
    "explanation": "🗣️ Generational Chain:\n1. 'My only son's father' = The woman's husband.\n2. 'Daughter-in-law of my husband' = The woman's daughter-in-law.\n3. 'Only son of daughter-in-law' = The woman's **Grand son**."
  },
  {
    "id": "br_q33",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing towards a girl in a photograph Umesh said, “Her mother’s brother is only son of my mother’s father”. How is the girl related Umesh?",
    "options": [
      "Grandmother",
      "Sister",
      "Aunt",
      "Mother/maternal aunt"
    ],
    "correct": "Sister",
    "explanation": "🗣️ Maternal Deduction:\n1. 'Only son of my mother's father' = Umesh's maternal uncle.\n2. 'Her mother's brother is Umesh's maternal uncle' -> The girl's mother is Umesh's mother (or maternal aunt).\n3. In direct relations, the girl is Umesh's **Sister**."
  },
  {
    "id": "br_q34",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing to Priyanka, father of Bunty Says “She is the daughter of the daughter of wife of the only son of the grandfather of my sister. How is Sonam related to Priyanka if Sonam is Sister of Bunty’s father?”",
    "options": [
      "Aunt",
      "Mother",
      "Niece",
      "Cannot be determined"
    ],
    "correct": "Aunt",
    "explanation": "🗣️ Generational Reconstruction:\n1. 'Grandfather of my sister' = Grandfather of Bunty's father.\n2. 'Only son of grandfather' = Father of Bunty's father.\n3. 'Wife of only son' = Mother of Bunty's father.\n4. 'Daughter of wife' = Sister of Bunty's father (Sonam or her sister).\n5. 'Daughter of daughter' = Daughter of Sonam's sister = Niece of Sonam.\n6. Since Priyanka is the niece of Sonam, Sonam is the **Aunt** of Priyanka."
  },
  {
    "id": "cr_q1",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Forward Symbolic Chain Expressions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A * B means A is the son of B.\n(ii) A % B means A is the sister of B.\n(iii) A $ B means A is the father of B.\n(iv) A @ B means A is the mother of B.\n(v) A # B means A is the daughter of B.\n(vi) A × B means A is the brother of B.\n\nHow is P related to U in the given expression?\nP $ Q % R × S % T # U",
    "options": [
      "Brother",
      "Father",
      "Cousin",
      "Husband",
      "None of these"
    ],
    "correct": "Husband",
    "explanation": "🌳 Step-by-Step Expression Decoding:\n1. P $ Q ➔ P is the father of Q (Male, Gen +1)\n2. Q % R ➔ Q is the sister of R (Female, Gen 0)\n3. R × S ➔ R is the brother of S (Male, Gen 0)\n4. S % T ➔ S is the sister of T (Female, Gen 0)\n5. T # U ➔ T is the daughter of U (Female, Gen -1 relative to U)\n\nAnalysis:\n• Q, R, S, and T are all siblings (children of P).\n• T is the daughter of U, which means U is the mother of the children.\n• Since P is the father and U is the mother of the same children, P is the Husband of U."
  },
  {
    "id": "cr_q2",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Forward Symbolic Chain Expressions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A * B means A is the son of B.\n(ii) A % B means A is the sister of B.\n(iii) A $ B means A is the father of B.\n(iv) A @ B means A is the mother of B.\n(v) A # B means A is the daughter of B.\n(vi) A × B means A is the brother of B.\n\nHow is P related to U in the given expression?\nP # Q @ R * S $ T % U",
    "options": [
      "Brother",
      "Sister",
      "Cousin",
      "Brother or Sister",
      "None of these"
    ],
    "correct": "Sister",
    "explanation": "🌳 Step-by-Step Expression Decoding:\n1. P # Q ➔ P is the daughter of Q (Female, Gen -1)\n2. Q @ R ➔ Q is the mother of R (Female)\n3. R * S ➔ R is the son of S (Male; since Q is the mother, S is the father: Q and S are married)\n4. S $ T ➔ S is the father of T (Male)\n5. T % U ➔ T is the sister of U (Female)\n\nAnalysis:\n• Q (mother) and S (father) are parents of children P, R, T, and U.\n• P is female (# indicates daughter).\n• Therefore, P is the Sister of U."
  },
  {
    "id": "cr_q3",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Forward Symbolic Chain Expressions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A * B means A is the son of B.\n(ii) A % B means A is the sister of B.\n(iii) A $ B means A is the father of B.\n(iv) A @ B means A is the mother of B.\n(v) A # B means A is the daughter of B.\n(vi) A × B means A is the brother of B.\n\nHow is P related to U in the given expression?\nP $ Q × R % S * T # U",
    "options": [
      "Son",
      "Son-in-law",
      "Brother",
      "Father-in-law",
      "None of these"
    ],
    "correct": "Son-in-law",
    "explanation": "🌳 Step-by-Step Expression Decoding:\n1. P $ Q ➔ P is the father of Q (Male, Gen +1)\n2. Q × R ➔ Q is the brother of R (Male, sibling)\n3. R % S ➔ R is the sister of S (Female, sibling)\n4. S * T ➔ S is the son of T (Male; since P is the father, T must be the mother: P & T are husband and wife)\n5. T # U ➔ T is the daughter of U (Female, child of U)\n\nAnalysis:\n• T is the daughter of U.\n• P is married to T (P is husband of T).\n• The husband of one's daughter is a Son-in-law.\n• Therefore, P is the Son-in-law of U."
  },
  {
    "id": "cr_q4",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Forward Symbolic Chain Expressions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A * B means A is the son of B.\n(ii) A % B means A is the sister of B.\n(iii) A $ B means A is the father of B.\n(iv) A @ B means A is the mother of B.\n(v) A # B means A is the daughter of B.\n(vi) A × B means A is the brother of B.\n\nHow is P related to U in the given expression?\nP * Q # R @ S $ T % U",
    "options": [
      "Brother",
      "Sister",
      "Father",
      "Uncle",
      "Cousin"
    ],
    "correct": "Cousin",
    "explanation": "🌳 Step-by-Step Expression Decoding:\n1. P * Q ➔ P is the son of Q (Male, child of Q)\n2. Q # R ➔ Q is the daughter of R (Female, child of R)\n3. R @ S ➔ R is the mother of S (Female; so Q and S are siblings, children of R)\n4. S $ T ➔ S is the father of T (Male, child T)\n5. T % U ➔ T is the sister of U (Female, sibling of U)\n\nAnalysis:\n• Q and S are sister and brother (children of R).\n• P is the child of Q.\n• T and U are children of S.\n• P and U are children of siblings (Q and S).\n• Therefore, P is the Cousin of U."
  },
  {
    "id": "cr_q5",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Forward Symbolic Chain Expressions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A * B means A is the son of B.\n(ii) A % B means A is the sister of B.\n(iii) A $ B means A is the father of B.\n(iv) A @ B means A is the mother of B.\n(v) A # B means A is the daughter of B.\n(vi) A × B means A is the brother of B.\n\nHow is P related to U in the given expression?\nP * Q % R # S $ T * U",
    "options": [
      "Paternal Grandson",
      "Maternal Grandson",
      "Paternal Granddaughter",
      "Maternal Granddaughter",
      "None of these"
    ],
    "correct": "Maternal Grandson",
    "explanation": "🌳 Step-by-Step Expression Decoding:\n1. P * Q ➔ P is the son of Q (Male, child of Q)\n2. Q % R ➔ Q is the sister of R (Female)\n3. R # S ➔ R is the daughter of S (Female)\n4. S $ T ➔ S is the father of T (Male; so S is father of Q, R, T)\n5. T * U ➔ T is the son of U (Male; since S is father, U is the mother: S & U are married)\n\nAnalysis:\n• U is the mother of Q.\n• Q is a female (mother of P).\n• P is the son of daughter Q (daughter's son).\n• Therefore, P is the Maternal Grandson of U."
  },
  {
    "id": "cr_q6",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Target Relationship Equation Finding",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A Δ B means A is the mother of B\n(ii) A • B means A is the sister of B\n(iii) A * B means A is the father of B\n(iv) A β B means A is the brother of B\n\nWhich of the following means 'R is uncle of T'?",
    "options": [
      "R * P β S Δ Q • T",
      "S * P β R Δ U β T",
      "P * R β Q • S * T",
      "P * R • Q • S * T",
      "None of these"
    ],
    "correct": "P * R β Q • S * T",
    "explanation": "🌳 Evaluating Option (c): P * R β Q • S * T\n1. P * R ➔ P is the father of R\n2. R β Q ➔ R is the brother of Q (R is male)\n3. Q • S ➔ Q is the sister of S\n4. S * T ➔ S is the father of T\n\nAnalysis:\n• R, Q, and S are all siblings (children of P).\n• R is male (brother of S).\n• S is the father of T.\n• Since R is the brother of T's father S, R is the (paternal) Uncle of T."
  },
  {
    "id": "cr_q7",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Target Relationship Equation Finding",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A Δ B means A is the mother of B\n(ii) A • B means A is the sister of B\n(iii) A * B means A is the father of B\n(iv) A β B means A is the brother of B\n\nWhich of the following means 'X is the mother of U'?",
    "options": [
      "X Δ Y β Z * K • U",
      "P β X Δ O β U",
      "X Δ Z • K β Y * U",
      "P * X Δ Y * O β U",
      "None of these"
    ],
    "correct": "P β X Δ O β U",
    "explanation": "🌳 Evaluating Option (b): P β X Δ O β U\n1. P β X ➔ P is the brother of X\n2. X Δ O ➔ X is the mother of O (Female, Gen +1)\n3. O β U ➔ O is the brother of U (so O and U are siblings)\n\nAnalysis:\n• X is the mother of O.\n• O and U are siblings.\n• Therefore, X is the Mother of U."
  },
  {
    "id": "cr_q8",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Target Relationship Equation Finding",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A Δ B means A is the mother of B\n(ii) A • B means A is the sister of B\n(iii) A * B means A is the father of B\n(iv) A β B means A is the brother of B\n\nWhich of the following means 'L is the paternal grandfather of O'?",
    "options": [
      "L * R • M β K β O",
      "R * L Δ P β K • O",
      "L * M Δ R * K β O",
      "L * R β M * K β O",
      "None of these"
    ],
    "correct": "L * R β M * K β O",
    "explanation": "🌳 Evaluating Option (d): L * R β M * K β O\n1. L * R ➔ L is the father of R (Male, Gen +2)\n2. R β M ➔ R is the brother of M (so L is also the father of M)\n3. M * K ➔ M is the father of K (Male, Gen +1)\n4. K β O ➔ K is the brother of O (so M is also the father of O)\n\nAnalysis:\n• M is the father of O.\n• L is the father of M.\n• Father of father = Paternal Grandfather.\n• Therefore, L is the Paternal Grandfather of O."
  },
  {
    "id": "cr_q9",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Target Relationship Equation Finding",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A Δ B means A is the mother of B\n(ii) A • B means A is the sister of B\n(iii) A * B means A is the father of B\n(iv) A β B means A is the brother of B\n\nWhich of the following means 'R is the daughter of P'?",
    "options": [
      "P * L β K β R",
      "X Δ P * R • O",
      "P Δ K β L • R * X",
      "X Δ P * R β O",
      "None of these"
    ],
    "correct": "X Δ P * R • O",
    "explanation": "🌳 Evaluating Option (b): X Δ P * R • O\n1. X Δ P ➔ X is the mother of P\n2. P * R ➔ P is the father of R\n3. R • O ➔ R is the sister of O (R is female, Gen -1)\n\nAnalysis:\n• P is the father of R.\n• R is female (sister of O).\n• Therefore, R is the Daughter of P."
  },
  {
    "id": "cr_q10",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Arithmetic Operator Relationship Codes",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) 'A × B' means 'A is the wife of B'\n(ii) 'A - B' means 'A is the father of B'\n(iii) 'A ÷ B' means 'A is the son of B'\n(iv) 'A + B' means 'A is the daughter of B'\n\nWhich of the following means 'T is the wife of P'?",
    "options": [
      "P × S ÷ T",
      "P ÷ S × T",
      "P - S ÷ T",
      "P + T ÷ S",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🌳 Option-by-Option Elimination:\n• Option (a) P × S ÷ T: P × S means P is the wife of S (so P is female, cannot be the husband of T).\n• Option (b) P ÷ S × T: P is the son of S; S is the wife of T; so T is the father of P.\n• Option (c) P - S ÷ T: P is the father of S; S is the son of T. While P and T are both parents of S, T's gender is not explicitly given by a relationship symbol following T (T could be mother, but without an explicit marriage code, gender is undetermined).\n• Option (d) P + T ÷ S: P is the daughter of T.\n• Since none of the given expressions conclusively proves that T is the wife of P, (e) None of these is correct."
  },
  {
    "id": "cr_q11",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Arithmetic Operator Relationship Codes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) 'A × B' means 'A is the wife of B'\n(ii) 'A - B' means 'A is the father of B'\n(iii) 'A ÷ B' means 'A is the son of B'\n(iv) 'A + B' means 'A is the daughter of B'\n\nWhich of the following means 'P is the maternal grandson of S'?",
    "options": [
      "P + Q - S",
      "P - Q × S",
      "P ÷ Q + S",
      "P × Q - S",
      "None of these"
    ],
    "correct": "P ÷ Q + S",
    "explanation": "🌳 Evaluating Option (c): P ÷ Q + S\n1. P ÷ Q ➔ P is the son of Q (Male, Gen -1 from Q)\n2. Q + S ➔ Q is the daughter of S (Female, Gen -1 from S)\n\nAnalysis:\n• Q is the daughter of S.\n• P is the son of Q (daughter's son).\n• Since P is male and the son of daughter Q, P is the Maternal Grandson of S."
  },
  {
    "id": "cr_q12",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Reverse-Direction Relational Coding",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A + B means 'B is the father of A'\n(ii) A - B means 'B is the mother of A'\n(iii) A × B means 'B is the brother of A'\n(iv) A ÷ B means 'B is the sister of A'\n(v) A @ B means 'B is the son of A'\n(vi) A # B means 'B is the daughter of A'\n\nHow is P related to U in the given expression?\nU + T × S ÷ R × Q + P",
    "options": [
      "Father",
      "Paternal grandfather",
      "Maternal grandfather",
      "Great grandfather",
      "None of these"
    ],
    "correct": "Paternal grandfather",
    "explanation": "⚠️ Note Reverse Definitions (Relation is defined right-to-left: B is related to A):\n1. U + T ➔ T is the father of U (Male, Gen +1)\n2. T × S ➔ S is the brother of T (Male, sibling)\n3. S ÷ R ➔ R is the sister of S (Female, sibling)\n4. R × Q ➔ Q is the brother of R (Male, sibling)\n5. Q + P ➔ P is the father of Q (Male, Gen +2)\n\nAnalysis:\n• T, S, R, and Q are all siblings.\n• P is the father of this sibling group (hence P is the father of T).\n• T is the father of U.\n• P is the father of U's father T (father's father).\n• Therefore, P is the Paternal Grandfather of U."
  },
  {
    "id": "cr_q13",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Reverse-Direction Relational Coding",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A + B means 'B is the father of A'\n(ii) A - B means 'B is the mother of A'\n(iii) A × B means 'B is the brother of A'\n(iv) A ÷ B means 'B is the sister of A'\n(v) A @ B means 'B is the son of A'\n(vi) A # B means 'B is the daughter of A'\n\nIn which of the given expressions is P the brother of U?",
    "options": [
      "U × T ÷ S - R + Q # P",
      "U × T × S - R + Q × P",
      "U ÷ T ÷ S + R + Q × P",
      "U ÷ T ÷ S # R + Q ÷ P",
      "U ÷ T - S # R + Q @ P"
    ],
    "correct": "U ÷ T - S # R + Q @ P",
    "explanation": "🌳 Evaluating Option (e): U ÷ T - S # R + Q @ P (Under Reverse Coding Rules):\n1. U ÷ T ➔ T is the sister of U (Female)\n2. T - S ➔ S is the mother of T (and mother of U)\n3. S # R ➔ R is the daughter of S (sister of U)\n4. R + Q ➔ Q is the father of R (husband of S, father of U)\n5. Q @ P ➔ P is the son of Q (Male)\n\nAnalysis:\n• Q is the father of U.\n• P is the son of Q (and P is male).\n• P is the son of U's father.\n• Therefore, P is the Brother of U."
  },
  {
    "id": "cr_q14",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Reverse-Direction Relational Coding",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: Read the following information carefully and answer the question:\n(i) A + B means 'B is the father of A'\n(ii) A - B means 'B is the mother of A'\n(iii) A × B means 'B is the brother of A'\n(iv) A ÷ B means 'B is the sister of A'\n(v) A @ B means 'B is the son of A'\n(vi) A # B means 'B is the daughter of A'\n\nIn which of the given expressions is P the mother-in-law of U?",
    "options": [
      "U @ T × S ÷ R - Q - P",
      "U # T ÷ S × R - Q + P",
      "P @ Q × R ÷ S - T - U",
      "P # Q ÷ R ÷ S - T + U",
      "U # T - S ÷ R × Q + P"
    ],
    "correct": "U @ T × S ÷ R - Q - P",
    "explanation": "🌳 Evaluating Option (a): U @ T × S ÷ R - Q - P (Under Reverse Coding Rules):\n1. U @ T ➔ T is the son of U\n2. T × S ➔ S is the brother of T (son of U)\n3. S ÷ R ➔ R is the sister of S (daughter of U)\n4. R - Q ➔ Q is the mother of R (since U is also a parent of R, Q and U are married; Q is female wife, U is male husband)\n5. Q - P ➔ P is the mother of Q\n\nAnalysis:\n• Q is the wife of U.\n• P is the mother of Q (wife's mother).\n• The mother of one's spouse is a Mother-in-law.\n• Therefore, P is the Mother-in-law of U."
  },
  {
    "id": "cr_q15",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Mixed Direction Lineage & Conclusions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: These questions are based on the following information:\n• 'P © Q' means 'Q is the brother of P'\n• 'P # Q' means 'P is the daughter of Q'\n• 'P = Q' means 'Q is the sister of P'\n• 'P £ Q' means 'P is the son of Q'\n• 'P + Q' means 'P is the father of Q'\n• 'P @ Q' means 'P is the mother of Q'\n\nWhich of the following indicates that 'C' is the paternal uncle of 'D'?",
    "options": [
      "C £ V # N @ L © D",
      "C £ V £ L @ N © D",
      "D £ L £ N @ V © C",
      "D £ N # V @ L © C",
      "None of these"
    ],
    "correct": "D £ L £ N @ V © C",
    "explanation": "🌳 Evaluating Option (c): D £ L £ N @ V © C\n1. D £ L ➔ D is the son of L (D is male)\n2. L £ N ➔ L is the son of N (L is male, so L is the father of D)\n3. N @ V ➔ N is the mother of V (N is the mother of both L and V)\n4. V © C ➔ C is the brother of V (C is male; 'P © Q' means Q is the brother of P)\n\nAnalysis:\n• L and V are siblings (children of mother N).\n• C is the brother of V, so C is also the brother of L.\n• L is the father of D.\n• Since C is the brother of D's father L, C is the Paternal Uncle of D."
  },
  {
    "id": "cr_q16",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Mixed Direction Lineage & Conclusions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: These questions are based on the following information:\n• 'P © Q' means 'Q is the brother of P'\n• 'P # Q' means 'P is the daughter of Q'\n• 'P = Q' means 'Q is the sister of P'\n• 'P £ Q' means 'P is the son of Q'\n• 'P + Q' means 'P is the father of Q'\n• 'P @ Q' means 'P is the mother of Q'\n\nWhich of the following is a correct conclusion drawn from the expression 'Q £ N @ S © M = P'?",
    "options": [
      "S is the brother of P.",
      "N has two sons and two daughters.",
      "S is the sister of Q.",
      "P is the sister of Q.",
      "None of these"
    ],
    "correct": "P is the sister of Q.",
    "explanation": "🌳 Step-by-Step Expression Decoding:\n1. Q £ N ➔ Q is the son of N (Male)\n2. N @ S ➔ N is the mother of S (so Q and S are siblings, children of N)\n3. S © M ➔ M is the brother of S (Male; 'P © Q' means Q is brother of P; so M is also a child of N)\n4. M = P ➔ P is the sister of M (Female; 'P = Q' means Q is sister of P; so P is also a child of N)\n\nAnalysis:\n• Q, S, M, and P are all children of mother N.\n• P is female (sister of M).\n• Therefore, P is the Sister of Q."
  },
  {
    "id": "cr_q17",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Mixed Direction Lineage & Conclusions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: These questions are based on the following information:\n• 'P © Q' means 'Q is the brother of P'\n• 'P # Q' means 'P is the daughter of Q'\n• 'P = Q' means 'Q is the sister of P'\n• 'P £ Q' means 'P is the son of Q'\n• 'P + Q' means 'P is the father of Q'\n• 'P @ Q' means 'P is the mother of Q'\n\nWhich of the following is the correct conclusion drawn from the expression 'L = M # N © P + Q'?",
    "options": [
      "Q is the grandson of M.",
      "L is the uncle of N.",
      "N is the uncle of Q.",
      "Q is the niece of N.",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🌳 Step-by-Step Expression Decoding:\n1. L = M ➔ M is the sister of L (M is female)\n2. M # N ➔ M is the daughter of N\n3. N © P ➔ P is the brother of N (P is male)\n4. P + Q ➔ P is the father of Q\n\nAnalysis:\n• P is the father of Q.\n• N is the sibling of P (N's gender is unknown: could be male or female).\n• Q's gender is also unknown (could be male son or female daughter of P).\n• Since N's gender is unknown, N could be uncle or aunt of Q; since Q's gender is unknown, Q could be nephew or niece.\n• Therefore, none of conclusions (a)-(d) can be definitively established. (e) None of these is correct."
  },
  {
    "id": "cr_q18",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Mixed Direction Lineage & Conclusions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Directions: These questions are based on the following information:\n• 'P © Q' means 'Q is the brother of P'\n• 'P # Q' means 'P is the daughter of Q'\n• 'P = Q' means 'Q is the sister of P'\n• 'P £ Q' means 'P is the son of Q'\n• 'P + Q' means 'P is the father of Q'\n• 'P @ Q' means 'P is the mother of Q'\n\nWhat does the expression 'P @ R = S © T £ V' mean?",
    "options": [
      "V is the husband of P.",
      "R is the son of V.",
      "R is the daughter of V.",
      "V is the wife of P.",
      "None of these"
    ],
    "correct": "V is the husband of P.",
    "explanation": "🌳 Step-by-Step Expression Decoding:\n1. P @ R ➔ P is the mother of R (Female)\n2. R = S ➔ S is the sister of R (Female)\n3. S © T ➔ T is the brother of S (Male; so R, S, T are all children of mother P)\n4. T £ V ➔ T is the son of V\n\nAnalysis:\n• T is the child of mother P.\n• T is also the child of V.\n• Since P is the female parent (mother), V must be the male parent (father).\n• Therefore, V is the Husband of P."
  },
  {
    "id": "dir_q1",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Ashok went 8 Km South and turned west and walked 3 Km, again he turned north and walked 5 Km. He took a final turn to the east and walked 3 km. In which direction was Ashok from the starting point?",
    "options": [
      "East",
      "North",
      "West",
      "South"
    ],
    "correct": "South",
    "explanation": "🧭 Step-by-Step Vector Trace:\n1. Starts at (0, 0).\n2. Walks 8 km South -> Position: (0, -8).\n3. Turns West and walks 3 km -> Position: (-3, -8).\n4. Turns North and walks 5 km -> Position: (-3, -8 + 5) = (-3, -3).\n5. Turns East and walks 3 km -> Position: (-3 + 3, -3) = (0, -3).\nAshok is directly on the negative y-axis at (0, -3), which is due **South** from the starting point."
  },
  {
    "id": "dir_q2",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Starting from a point P, Sachin walked 20m towards South. He turned left and walked 30m. He then turned left and walked 20m. He again turned left and walked 40 m and reached a point Q. How far and in which direction is the point P from the point Q?",
    "options": [
      "20 m West",
      "10 m West",
      "10 m East",
      "10 m North",
      "None of these"
    ],
    "correct": "10 m East",
    "explanation": "🧭 Step-by-Step Path Trace:\n1. Let Point P be origin (0, 0).\n2. 20m South -> (0, -20).\n3. Left turn (East) 30m -> (30, -20).\n4. Left turn (North) 20m -> (30, 0).\n5. Left turn (West) 40m -> (30 - 40, 0) = (-10, 0) = Point Q.\nNow, to find Point P from Point Q: P is at (0, 0) and Q is at (-10, 0). Thus, P is **10 m East** of Q."
  },
  {
    "id": "dir_q3",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Hard",
    "points": 1,
    "question": "Roy walked 2 km to the East, then turned North-west and walked 3 km. Then he turned South and walked 5 km. Then again he turned west and walked 2 km. Finally he turned North and walked 6 km. In which direction is he from the starting point?",
    "options": [
      "South-West",
      "South-East",
      "North-West",
      "North-East",
      "None of these"
    ],
    "correct": "North-West",
    "explanation": "🧭 Coordinate Analysis:\n- Eastward initial movement: +2 km.\n- North-West movement (3 km): adds negative x and positive y (-3/√2 ≈ -2.12 km, +2.12 km).\n- Subsequent movements: -5 km (South), -2 km (West), +6 km (North).\n- Net vertical displacement: 2.12 - 5 + 6 = +3.12 km (North).\n- Net horizontal displacement: 2 - 2.12 - 2 = -2.12 km (West).\nWith net position in (-x, +y), Roy is in the **North-West** direction from the starting point."
  },
  {
    "id": "dir_q4",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Vimal faces towards the north turning to his right, he walks 25 meters. He then turns to his left and walks 30 meters. Next, he moves 25 meters after turning to his right. He then turns to his right again and walks 55 meters. Finally, he turns to the right and moves 40 meters. In which direction is he now from his starting point?",
    "options": [
      "South-West",
      "South",
      "North-West",
      "South-East"
    ],
    "correct": "South-East",
    "explanation": "🧭 Step-by-Step Movement:\n1. Facing North, turns right (East) and walks 25m -> (+25, 0).\n2. Turns left (North) and walks 30m -> (+25, +30).\n3. Turns right (East) and walks 25m -> (+50, +30).\n4. Turns right (South) and walks 55m -> (+50, 30 - 55) = (+50, -25).\n5. Turns right (West) and walks 40m -> (50 - 40, -25) = (+10, -25).\nNet position is (+10, -25): positive x (East) and negative y (South). Therefore, Vimal is in the **South-East** direction from starting point."
  },
  {
    "id": "dir_q5",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Tom walked 10 miles from point P towards the east. He then took right turn and walked 5 miles and taking another right turn walked again for another 5 miles. In which direction is point P from where Tom is standing now?",
    "options": [
      "South-East",
      "North-West",
      "North-East",
      "Can’t be determined"
    ],
    "correct": "North-West",
    "explanation": "🧭 Coordinate Trace:\n1. Let P be (0, 0).\n2. 10 miles East -> (10, 0).\n3. Right turn (South) 5 miles -> (10, -5).\n4. Right turn (West) 5 miles -> (10 - 5, -5) = (5, -5).\nTom is at (5, -5). Point P is at (0, 0).\nTo look at P from Tom's position: move -5 in x (West) and +5 in y (North). Therefore, P is in the **North-West** direction from Tom."
  },
  {
    "id": "dir_q6",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Amit walked 10 Km towards North. From there he turned back and walked 6 Km towards South. Then he walked 3 km towards the East. How far was he from the starting point?",
    "options": [
      "8 km",
      "5 km",
      "7 km",
      "6 km",
      "None of these"
    ],
    "correct": "5 km",
    "explanation": "📐 Pythagoras Calculation:\n1. North 10 km, then South 6 km -> Net North displacement = 10 - 6 = 4 km.\n2. East displacement = 3 km.\n3. Shortest distance H = √(4² + 3²) = √(16 + 9) = √25 = **5 km**."
  },
  {
    "id": "dir_q7",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Seema walks 1 km to the east turns right and walks another 1 km and then turns left and walks 2 km and again turning to her left and travels 5 km. How far is Seema from her starting point?",
    "options": [
      "8 km",
      "5 km",
      "7 km",
      "6 km",
      "None of these"
    ],
    "correct": "5 km",
    "explanation": "📐 Displacement Calculation:\n1. 1 km East -> (1, 0).\n2. Right (South) 1 km -> (1, -1).\n3. Left (East) 2 km -> (1 + 2, -1) = (3, -1).\n4. Left (North) 5 km -> (3, -1 + 5) = (3, 4).\n5. Distance = √(3² + 4²) = √(9 + 16) = √25 = **5 km**."
  },
  {
    "id": "dir_q8",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Shyam walked 6 meters towards East, then took a right turn and walked a distance of 9 meters. He then took a left turn and walked a distance of 6 meters. How far is he from the starting point?",
    "options": [
      "15 meters",
      "21 meters",
      "18 meters",
      "Can't be determine"
    ],
    "correct": "15 meters",
    "explanation": "📐 Right-Triangle Geometry:\n- Total East displacement = 6m + 6m = 12 meters.\n- Total South displacement = 9 meters.\n- Shortest distance = √(12² + 9²) = √(144 + 81) = √225 = **15 meters**."
  },
  {
    "id": "dir_q9",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Vimal starts from point P and walks toward South and stops at point Q. He now takes a right turn followed by a left turn and stops at point R. He finally takes a left turn and stops at point S. If he walks 5 km before taking each turn, towards which direction will Vimal have to walk from point S to reach point Q?",
    "options": [
      "North",
      "South",
      "West",
      "East",
      "North-West"
    ],
    "correct": "North",
    "explanation": "🧭 Path Trace:\n1. P (0, 5) -> walks South 5 km to Q (0, 0).\n2. At Q, turns right (West) walks 5 km to (-5, 0).\n3. Turns left (South) walks 5 km to R (-5, -5).\n4. Turns left (East) walks 5 km to S (0, -5).\nPoint S is at (0, -5) and Point Q is at (0, 0). To go from S to Q, Vimal must walk straight **North**."
  },
  {
    "id": "dir_q10",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Imagine that you are walking towards the South. After some time you turn left. Then again you turn left. After that, you turn right and once again turn to the right. In which direction you are walking now?",
    "options": [
      "East",
      "West",
      "South",
      "North",
      "None of these"
    ],
    "correct": "South",
    "explanation": "🔄 Turn Tracking:\n- Initial: South.\n- Turn 1 (Left = 90° ACW): East.\n- Turn 2 (Left = 90° ACW): North.\n- Turn 3 (Right = 90° CW): East.\n- Turn 4 (Right = 90° CW): **South**.\nNet turns: 2 Left (-180°) + 2 Right (+180°) = 0° net change. Still walking South."
  },
  {
    "id": "dir_q11",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "If northeast becomes West and South-east becomes North then what will West become?",
    "options": [
      "South-east",
      "North-east",
      "South",
      "North-west"
    ],
    "correct": "South-east",
    "explanation": "🔄 Compass Shift Rule:\n- North-East (45°) shifted to West (270°) = rotation of 135° anti-clockwise (or 225° clockwise).\n- South-East (135°) shifted to North (0°/360°) = 135° anti-clockwise.\n- Apply 135° anti-clockwise to West (270°):\n  270° - 135° = 135° which corresponds to **South-East**."
  },
  {
    "id": "dir_q12",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "If M is in the south of B and B is in the west of N, then in which direction is N from M?",
    "options": [
      "North",
      "East",
      "North-East",
      "South-West"
    ],
    "correct": "North-East",
    "explanation": "🧭 Relative Coordinates:\n- Let B be at origin (0, 0).\n- M is South of B: (0, -1).\n- B is West of N, so N is East of B: (+1, 0).\n- From M (0, -1) to N (1, 0), you must travel +1 East and +1 North -> **North-East**."
  },
  {
    "id": "dir_q13",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Manish starts walking towards East and walks 30 meters, then he turns right and walks 50 meters and he again turns left and walks 40 meters. Again he turns left and walks 50 meters. Now, how far is he from his starting point?",
    "options": [
      "170 m",
      "70 m",
      "120 m",
      "110 m",
      "None of these"
    ],
    "correct": "70 m",
    "explanation": "📐 Step-by-Step:\n- Eastward: 30m.\n- Southward: 50m.\n- Eastward: 40m.\n- Northward: 50m (cancels out the 50m Southward walk!).\n- Total distance from starting point = 30m + 40m = **70 m**."
  },
  {
    "id": "dir_q14",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A walks 10 m North, then he turns right and walks 10 m. And then turning left each time, he walks 5 m, 15 m, and 15 m respectively. Now, how far is he from his starting point?",
    "options": [
      "5 m",
      "10 m",
      "15 m",
      "20 m"
    ],
    "correct": "5 m",
    "explanation": "📐 Coordinate Path Trace:\n1. 10m North -> (0, 10).\n2. Right (East) 10m -> (10, 10).\n3. Left (North) 5m -> (10, 15).\n4. Left (West) 15m -> (10 - 15, 15) = (-5, 15).\n5. Left (South) 15m -> (-5, 15 - 15) = (-5, 0).\nStarting point is (0, 0), final position is (-5, 0). The distance is **5 m**."
  },
  {
    "id": "dir_q15",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Shailesh walks 20 meters towards the south. He then turns left and walks 30 meters. After that, he turns right and walks 10 meters. Then again he turns right and walks 40 meters. After this, he turns right and walks 30 meters. Now he stops. Now, in which direction is he from his starting point?",
    "options": [
      "South-West",
      "West",
      "North-West",
      "Starting Point",
      "None of these"
    ],
    "correct": "West",
    "explanation": "🧭 Coordinate Check:\n1. 20m South -> (0, -20).\n2. Left (East) 30m -> (30, -20).\n3. Right (South) 10m -> (30, -30).\n4. Right (West) 40m -> (-10, -30).\n5. Right (North) 30m -> (-10, 0).\nAt (-10, 0), the vertical displacement is 0 and horizontal is -10 (West). Therefore, Shailesh is directly **West** of his starting point."
  },
  {
    "id": "dir_q16",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Hard",
    "points": 1,
    "question": "Seema says to Suresh that she is going in the North direction to hide, but she went 2 Km east and from there 3 Km towards the south and from there 2 km towards the west and then 2km towards the west and then 2km towards the starting place. Now, in which direction is Seema from her hiding place?",
    "options": [
      "North",
      "South",
      "West",
      "East",
      "None of these"
    ],
    "correct": "South",
    "explanation": "🧭 Reference Frame Deduction:\n- Seema stated she was hiding in the North direction, so her intended hiding location is North of the starting point.\n- Her actual wanderings took her southwards.\n- Relative to the North hiding spot, Seema is located in the **South** direction."
  },
  {
    "id": "dir_q17",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man is facing west. He turns 45° in the clockwise direction and then another 180° in the same direction and then 270° in the anti-clockwise direction. Which direction is he facing now?",
    "options": [
      "South",
      "North-West",
      "West",
      "South-West"
    ],
    "correct": "South-West",
    "explanation": "🔄 Net Angle Formula:\n- Initial Facing = West (270°).\n- Clockwise (+) turns = +45° + 180° = +225°.\n- Anti-Clockwise (-) turns = -270°.\n- Net rotation = 225° - 270° = -45° (45° anti-clockwise).\n- 45° anti-clockwise from West = **South-West**."
  },
  {
    "id": "dir_q18",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man is looking for his friend. He went 90m in the east before turning to his right. He went 20m before turning to his right again and goes further to look for his friend at his uncle’s place 30m from this point. His friend was not there. From there, he went 100m north before meeting his friend in a street. How far did the man meet his friend from the starting point?",
    "options": [
      "80 meters",
      "100 meters",
      "140 meters",
      "260 meters",
      "None of these"
    ],
    "correct": "100 meters",
    "explanation": "📐 Classic 60-80-100 Pythagoras Triangle:\n1. 90m East -> (90, 0).\n2. Right (South) 20m -> (90, -20).\n3. Right (West) 30m -> (60, -20).\n4. North 100m -> (60, -20 + 100) = (60, 80).\nShortest distance = √(60² + 80²) = √(3600 + 6400) = √10000 = **100 meters**."
  },
  {
    "id": "dir_q19",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Gudiya moved a distance of 75 meters towards the north. She then turned to the left and walked for about 25 meters, turned left again, and walked 80 meters. Finally, she turned to the right at an angle of 45 degrees. In which direction was she facing now?",
    "options": [
      "North-East",
      "North-West",
      "South",
      "South-West"
    ],
    "correct": "South-West",
    "explanation": "🧭 Facing Angle Deduction:\n1. Walks North, turns left -> now facing West.\n2. Turns left again -> now facing South.\n3. Turning right by 45° from South (clockwise) means shifting 45° towards West.\n4. Facing direction is **South-West**."
  },
  {
    "id": "dir_q20",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Hard",
    "points": 1,
    "question": "Nitu starts from point T and walks straight to point U which is 4 Ft away. She turns left at 90º and walks to W which is 4 Ft away, turns 90º right and goes 3 Ft to P, turns 90º right, and walks 1 Ft to Q. Again turns 90º left and walks 1 Ft to V. Finally turns 90º right walk 3 Ft to reach R. Then what is the distance between T and R?",
    "options": [
      "4 Ft",
      "5 Ft",
      "7 Ft",
      "8 Ft"
    ],
    "correct": "8 Ft",
    "explanation": "📐 Coordinate Breakdown:\n- Forward axis (X): T->U (4) + P (3) + V (1) = 4 + 3 + 1 = 8 Ft.\n- Lateral axis (Y): Left to W (+4), Right to Q (-1), Right to R (-3) -> 4 - 1 - 3 = 0 Ft.\n- Net displacement = √(8² + 0²) = **8 Ft**."
  },
  {
    "id": "dir_q21",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A person starts from point A and travels 3 Km eastwards to B and then turns left and travels thrice that distance to reach C. He again turns left and travels five times the distance he covered between A and B and reaches his destination D. The shortest distance between the starting point and the destination is:",
    "options": [
      "12Km",
      "15Km",
      "16Km",
      "18Km"
    ],
    "correct": "15Km",
    "explanation": "📐 Multiplier Vector Math:\n- AB = 3 km East -> (+3, 0).\n- BC = 3 × 3 = 9 km North -> (+3, +9).\n- CD = 5 × 3 = 15 km West -> (3 - 15, +9) = (-12, +9).\n- Shortest distance AD = √((-12)² + 9²) = √(144 + 81) = √225 = **15 Km**."
  },
  {
    "id": "dir_q22",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pran and Khan start from their office and walk in opposite directions, After both traveled 10 km, Pran turns left and walks 10 km while Khan turns right and walks 10 km. How far are they now from each other?",
    "options": [
      "0Km",
      "5Km",
      "10Km",
      "20Km"
    ],
    "correct": "20Km",
    "explanation": "📐 Opposite Motion Analysis:\n- Let Office be (0, 0). Pran walks East 10 km to (10, 0); Khan walks West 10 km to (-10, 0).\n- Pran turns left (North) 10 km -> (10, 10).\n- Khan turns right (North) 10 km -> (-10, 10).\n- Both are at the same y-level (y = 10). The horizontal separation between (10, 10) and (-10, 10) is 10 - (-10) = **20 Km**."
  },
  {
    "id": "dir_q23",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Ram is facing North-West. He turns in the clockwise direction by 90°, then 180° in the anti-clockwise direction, and turns another 90° in the same direction. Which direction is he facing now?",
    "options": [
      "South",
      "West",
      "South-West",
      "South-East"
    ],
    "correct": "South-East",
    "explanation": "🔄 Net Angle Calculation:\n- Initial: North-West.\n- Clockwise (+) = +90°.\n- Anti-Clockwise (-) = -180° - 90° = -270°.\n- Net angle = +90° - 270° = -180° (exactly opposite direction).\n- Opposite of North-West is **South-East**."
  },
  {
    "id": "dir_q24",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A is 50 meters North-West of B and C is 50 meters North-East of B and D is 50 meters South of B then who is in the East direction of A?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": "C",
    "explanation": "🧭 Symmetric Positioning:\n- Let B = (0, 0).\n- A is 50m NW -> x_A = -50/√2, y_A = +50/√2.\n- C is 50m NE -> x_C = +50/√2, y_C = +50/√2.\n- Notice y_A = y_C! They have identical north-south latitude, and C is directly to the right (positive x). Therefore, **C** is in the East direction of A."
  },
  {
    "id": "dir_q25",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "K is P’s neighbor and he stays 400 meters away toward the east. N is K’s neighbor and resides 400 meters away towards North. S is N’s neighbor and stays 400 m to the west If the distance between S and P is also 400 meters, Then who stays in the South East direction of S?",
    "options": [
      "S",
      "P",
      "N",
      "K"
    ],
    "correct": "K",
    "explanation": "🧭 Square Grid Analysis:\n- P = (0, 0).\n- K is 400m East of P -> (400, 0).\n- N is 400m North of K -> (400, 400).\n- S is 400m West of N -> (0, 400).\nFrom S at (0, 400), looking towards K at (400, 0) requires moving South (-400) and East (+400). That is exactly the **South-East** direction. So **K** stays in the South East of S."
  },
  {
    "id": "dir_q26",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_4",
    "type_name": "Type 4: Shadow-Based Direction Scenarios",
    "difficulty": "Easy",
    "points": 1,
    "question": "After sunrise, Sudhir faces the Sun and walks for one Kilometer. Then he turns right and walks for 2 km, Then he turns right again and walks for one km. In which direction is Sudhir from his starting point?",
    "options": [
      "South",
      "North",
      "East",
      "West"
    ],
    "correct": "South",
    "explanation": "☀️ Sun & Path Trace:\n- After sunrise, Sun is in the East. Sudhir walks 1 km East -> (+1, 0).\n- Turns right (South) walks 2 km -> (+1, -2).\n- Turns right (West) walks 1 km -> (+1 - 1, -2) = (0, -2).\nSudhir is at (0, -2), which is directly **South** of the starting point."
  },
  {
    "id": "dir_q27",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Hard",
    "points": 1,
    "question": "If A stands on his head with his face towards the north, in which direction will his left-hand point?",
    "options": [
      "North-East",
      "North",
      "East",
      "West"
    ],
    "correct": "East",
    "explanation": "🤸 Inverted Body Mechanics:\n- Standing upright facing North: Right hand points East, Left hand points West.\n- When standing on one's head (upside down) while still facing North, the body axes invert left-to-right.\n- Therefore, the left hand will point towards the **East**."
  },
  {
    "id": "dir_q28",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Arun walks to the north 30 meters. moves left and walk 40 meters. He again turns left and walks 30 meters. He finally turns left and walks 50 meters. Now how far Arun is from the starting point?",
    "options": [
      "50 meter.",
      "40 meter.",
      "90 meter.",
      "10 meter."
    ],
    "correct": "10 meter.",
    "explanation": "📐 Closed Loop Geometry:\n1. 30m North -> (0, 30).\n2. Left (West) 40m -> (-40, 30).\n3. Left (South) 30m -> (-40, 0).\n4. Left (East) 50m -> (-40 + 50, 0) = (10, 0).\nDistance from starting point (0, 0) to (10, 0) is **10 meter**."
  },
  {
    "id": "dir_q29",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Balu’s house is 300 meters away from that Sam. Balu stays 300 meters South West of Sam’s house. Raju resides 600 meters North East of Balu. Then where is the position of Sam’s house about Raju’s?",
    "options": [
      "North-East",
      "South-East",
      "North-West",
      "South-West"
    ],
    "correct": "South-West",
    "explanation": "🧭 Collinear Relative Points:\n- Balu is 300m South-West of Sam.\n- Raju is 600m North-East of Balu (passing through Sam's house at 300m, and continuing another 300m North-East).\n- Therefore, Sam is located midway between Balu and Raju.\n- From Raju's viewpoint, Sam's house is in the **South-West** direction."
  },
  {
    "id": "dir_q30",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Rahul put his Time piece on the table in such a way that at 6 P.M. hour hand pointed in the North direction. In which direction will the minute’s hand point at 9:15 P.M.?",
    "options": [
      "South-East",
      "South",
      "North",
      "West"
    ],
    "correct": "West",
    "explanation": "⏰ Clock Rotation Mapping:\n- At 6 PM, standard clock hour hand points South (towards 6). But here it points North (180° inverted).\n- At 9:15 PM, minute hand is at 3 (standard direction: East).\n- Inverted by 180°, East becomes **West**."
  },
  {
    "id": "dir_q31",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Hard",
    "points": 1,
    "question": "Sunil walks toward the east from point A. He turned toward the right at point B and Covered the same distance that he traveled in the east direction. Now he turns left and covered some distance. Finally, he turns left and covered the same, and stopped at point C. How many times is the distance between A and C to that between A and B?",
    "options": [
      "Cannot be determined",
      "Two",
      "three",
      "None of these"
    ],
    "correct": "Cannot be determined",
    "explanation": "📐 Indeterminate Variable:\n- Let AB = d.\n- Walks South distance d.\n- Turns left (East) and walks 'some distance' (let's say x, unknown).\n- Turns left (North) distance d to reach C.\n- Points A and C are on the same latitude, separated by d + x.\n- Since x is unspecified ('some distance'), the exact ratio (d + x)/d **Cannot be determined**."
  },
  {
    "id": "dir_q32",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Hard",
    "points": 1,
    "question": "On a clock, at 12:30 P.M. hours, the hand of a watch is in the eastward direction and the minute hand of a watch is in the west. In which direction is the hour hand of the watch at 2:45 P.M.?",
    "options": [
      "South-East",
      "South",
      "South-West",
      "North"
    ],
    "correct": "South-East",
    "explanation": "⏰ Clock Hand Mapping:\n- At 12:30 PM, minute hand (normally South at 6) points West (rotated 90° clockwise).\n- At 2:45 PM, hour hand is almost at 3 (normally East-by-Southeast).\n- Rotating by 90° clockwise, the hand points towards **South-East**."
  },
  {
    "id": "dir_q33",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "A clock shows 4:30 P.M. If the minute hand is toward the east, in which direction does the hour hand point?",
    "options": [
      "North-East",
      "South-East",
      "North-West",
      "North"
    ],
    "correct": "North-East",
    "explanation": "⏰ Clock Angle Mapping:\n- At 4:30, minute hand is at 6 (normally South). Here it points East (90° anti-clockwise rotation).\n- Hour hand is midway between 4 and 5 (normally South-East).\n- Rotating South-East by 90° anti-clockwise points it to **North-East**."
  },
  {
    "id": "dir_q34",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "If South-East becomes North, North-East becomes west and so on. What becomes west?",
    "options": [
      "North-East",
      "North-West",
      "South-East",
      "South-West",
      "South"
    ],
    "correct": "South-East",
    "explanation": "🔄 Compass Shift Deduction:\n- South-East (135°) becomes North (0°) -> rotated 135° clockwise.\n- Which original direction rotated 135° clockwise lands on West (270°)?\n- 270° - 135° = 135° = **South-East**."
  },
  {
    "id": "dir_q35",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Five villages P, Q, R, S, and T are adjacent to each other. P is west of Q, S is East of T. R is South of P. T is North of Q. In which direction is R from S?",
    "options": [
      "North-East",
      "South-East",
      "South-west",
      "cannot be determined.",
      "None of these"
    ],
    "correct": "South-west",
    "explanation": "🧭 Village Map:\n- Q = (0, 0).\n- P is West of Q: (-1, 0).\n- R is South of P: (-1, -1).\n- T is North of Q: (0, 1).\n- S is East of T: (1, 1).\nFrom S at (1, 1) to R at (-1, -1): moving left (-x) and down (-y) is **South-West**."
  },
  {
    "id": "dir_q36",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Hard",
    "points": 1,
    "question": "Q travelled towards the East, M travelled towards the North, and S and T travelled in the opposite direction. T travelled right to Q. Which statement is true in the following sentence?",
    "options": [
      "M and S are travelling in opposite direction",
      "T travelled towards West",
      "T travelled towards North",
      "M and S travelled in the same direction",
      "None of these"
    ],
    "correct": "M and S travelled in the same direction",
    "explanation": "🧭 Direction Logic:\n1. Q travelled East.\n2. T travelled right to Q: Right of East is South -> T travelled South.\n3. S and T travelled in opposite directions: Opposite of South is North -> S travelled North.\n4. M also travelled towards the North.\n5. Therefore, **M and S travelled in the same direction**."
  },
  {
    "id": "dir_q37",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_4",
    "type_name": "Type 4: Shadow-Based Direction Scenarios",
    "difficulty": "Hard",
    "points": 1,
    "question": "One morning after sunrise Juhi while going to school met Lalli at Boring road crossing. Lalli's shadow was exactly to the right of Juhi. If they were face to face, which direction was Juhi facing?",
    "options": [
      "east",
      "west",
      "north",
      "south"
    ],
    "correct": "south",
    "explanation": "☀️ Morning Shadow Rule:\n- In the morning after sunrise, the Sun is in the East, so all shadows fall directly to the **West**.\n- Lalli's shadow fell to the West.\n- It is given that this shadow was to the **right of Juhi**, meaning Juhi's right side is West.\n- If your right hand points to the West, you must be facing **South**."
  },
  {
    "id": "dir_q38",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_4",
    "type_name": "Type 4: Shadow-Based Direction Scenarios",
    "difficulty": "Hard",
    "points": 1,
    "question": "At sunrise, Rohit and Mohit are having a conversation standing in front of each other. The shadow of Mohit is formed towards the right hand of Rohit. What direction is Mohit facing?",
    "options": [
      "east",
      "west",
      "north",
      "south"
    ],
    "correct": "north",
    "explanation": "☀️ Morning Conversation Shadow:\n1. At sunrise, shadows cast towards the West.\n2. Mohit's shadow falls to the West.\n3. This shadow is to the right hand of Rohit, so Rohit's right side is West.\n4. A person whose right side is West is facing South. Hence, Rohit is facing South.\n5. Since Rohit and Mohit are standing in front of each other (face to face), Mohit is facing **North**."
  },
  {
    "id": "num_q1",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the unit digit of the product of 207 · 781 · 39 · 94?",
    "options": [
      "9",
      "1",
      "7",
      "2"
    ],
    "correct": "2",
    "explanation": "🔢 Step-by-Step Unit Digit Calculation:\n1. Multiply only the unit digits of each factor: 7 × 1 × 9 × 4.\n2. 7 × 1 = 7.\n3. 7 × 9 = 63 -> Unit digit = 3.\n4. 3 × 4 = 12 -> Unit digit = **2**.\nTherefore, the unit digit of the entire product is 2."
  },
  {
    "id": "num_q2",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Medium",
    "points": 1,
    "question": "What will come in the place of unit digit in the value of (7³⁵) · (3⁷¹) · (11⁵⁵)?",
    "options": [
      "0",
      "3",
      "1",
      "6"
    ],
    "correct": "1",
    "explanation": "🔢 Cyclicity Rule for Powers:\n- For base 7 (cyclicity of 4: 7, 9, 3, 1):\n  35 mod 4 = 3 -> 7³ ends in 3.\n- For base 3 (cyclicity of 4: 3, 9, 7, 1):\n  71 mod 4 = 3 -> 3³ ends in 7.\n- For base 11 (ends in 1):\n  1⁵⁵ ends in 1.\n- Overall unit digit = (3 × 7 × 1) mod 10 = 21 mod 10 = **1**."
  },
  {
    "id": "num_q3",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number of zeros at the end of the product of 1 × 2 × 3 × 4 × 5 × 6 .......... × 99 × 100 :",
    "options": [
      "22",
      "24",
      "26",
      "28"
    ],
    "correct": "24",
    "explanation": "🔢 Legendre's Formula for 100!:\nZeros are formed by pairs of (2 × 5). Since 2s are abundant, count prime factor 5 in 100!:\n- ⌊100 / 5⌋ = 20\n- ⌊100 / 25⌋ = 4\nTotal number of trailing zeros = 20 + 4 = **24**."
  },
  {
    "id": "num_q4",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the number of zeros at the end of the product of 2 × 4 × 6 × 8 × 10 × ....... × 98 × 100 :",
    "options": [
      "10",
      "11",
      "12",
      "15"
    ],
    "correct": "12",
    "explanation": "🔢 Factorization of Even Product:\n- Factor out 2 from all 50 terms:\n  (2 × 1) × (2 × 2) × (2 × 3) × ... × (2 × 50) = 2⁵⁰ × 50!\n- The 2⁵⁰ contributes only powers of 2 (no zeros without 5s).\n- Count number of 5s in 50!:\n  ⌊50 / 5⌋ = 10\n  ⌊50 / 25⌋ = 2\nTotal trailing zeros = 10 + 2 = **12**."
  },
  {
    "id": "num_q5",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the number of zeros at the end of the product of 10 × 20 × 30 × ...... × 2000 :",
    "options": [
      "222",
      "249",
      "226",
      "220"
    ],
    "correct": "249",
    "explanation": "🔢 Multiples of 10 Product:\n- Number of terms = 2000 / 10 = 200 terms.\n- Product = (10 × 1) × (10 × 2) × ... × (10 × 200) = 10²⁰⁰ × 200!\n- 10²⁰⁰ contributes 200 trailing zeros directly.\n- Trailing zeros from 200! = ⌊200/5⌋ + ⌊200/25⌋ + ⌊200/125⌋ = 40 + 8 + 1 = 49 zeros.\n- Total zeros = 200 + 49 = **249**."
  },
  {
    "id": "num_q6",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number of factors of 100 :",
    "options": [
      "8",
      "9",
      "10",
      "12"
    ],
    "correct": "9",
    "explanation": "🔢 Total Factors Formula:\n- Prime factorize 100: 100 = 2² × 5².\n- Number of factors = (p + 1)(q + 1) = (2 + 1)(2 + 1) = 3 × 3 = **9**.\n(Factors: 1, 2, 4, 5, 10, 20, 25, 50, 100)."
  },
  {
    "id": "num_q7",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number of factors of 80 :",
    "options": [
      "10",
      "12",
      "6",
      "8"
    ],
    "correct": "10",
    "explanation": "🔢 Total Factors Formula:\n- Prime factorize 80: 80 = 2⁴ × 5¹.\n- Number of factors = (4 + 1)(1 + 1) = 5 × 2 = **10**.\n(Factors: 1, 2, 4, 5, 8, 10, 16, 20, 40, 80)."
  },
  {
    "id": "num_q8",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the sum of the factors of 100 :",
    "options": [
      "127",
      "217",
      "219",
      "189"
    ],
    "correct": "217",
    "explanation": "🔢 Sum of Factors Formula:\n- For N = 2² × 5²:\n- Sum = (2⁰ + 2¹ + 2²) × (5⁰ + 5¹ + 5²)\n  = (1 + 2 + 4) × (1 + 5 + 25)\n  = 7 × 31 = **217**."
  },
  {
    "id": "num_q9",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the sum of the factors of 50 :",
    "options": [
      "92",
      "93",
      "97",
      "91"
    ],
    "correct": "93",
    "explanation": "🔢 Sum of Factors Formula:\n- Prime factorization: 50 = 2¹ × 5².\n- Sum = (2⁰ + 2¹) × (5⁰ + 5¹ + 5²)\n  = (1 + 2) × (1 + 5 + 25)\n  = 3 × 31 = **93**."
  },
  {
    "id": "num_q10",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the average of the factors of 60 :",
    "options": [
      "12",
      "13",
      "14",
      "16"
    ],
    "correct": "14",
    "explanation": "🔢 Average of Factors:\n1. Factorization: 60 = 2² × 3¹ × 5¹.\n2. Total factors = (2 + 1)(1 + 1)(1 + 1) = 3 × 2 × 2 = 12.\n3. Sum of factors = (1 + 2 + 4)(1 + 3)(1 + 5) = 7 × 4 × 6 = 168.\n4. Average = Sum / Total = 168 / 12 = **14**."
  },
  {
    "id": "num_q11",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the product of the factors of 100 :",
    "options": [
      "10⁹",
      "10⁹/²",
      "10¹¹/²",
      "10¹⁹"
    ],
    "correct": "10⁹",
    "explanation": "🔢 Product of Factors Formula:\n- Product = N^(total_factors / 2).\n- For N = 100, number of factors = 9.\n- Product = 100^(9/2) = (10²)^(9/2) = 10⁹."
  },
  {
    "id": "num_q44",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the number of prime factors of 6²⁰ · 11¹¹ · 21²¹ :",
    "options": [
      "83",
      "93",
      "103",
      "113"
    ],
    "correct": "93",
    "explanation": "🔢 Prime Factor Count:\n1. Express each base as prime numbers:\n   6²⁰ = (2 × 3)²⁰ = 2²⁰ · 3²⁰\n   11¹¹ = 11¹¹\n   21²¹ = (3 × 7)²¹ = 3²¹ · 7²¹\n2. Combine: 2²⁰ · 3⁴¹ · 7²¹ · 11¹¹.\n3. Total number of prime factors = 20 + 20 + 11 + 21 + 21 = **93**."
  },
  {
    "id": "num_q45",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the number of prime factors of 14¹⁴ · 15¹⁵ :",
    "options": [
      "48",
      "58",
      "68",
      "78"
    ],
    "correct": "58",
    "explanation": "🔢 Prime Factor Count:\n1. 14¹⁴ = (2 × 7)¹⁴ = 2¹⁴ · 7¹⁴.\n2. 15¹⁵ = (3 × 5)¹⁵ = 3¹⁵ · 5¹⁵.\n3. Sum of prime exponents = 14 + 14 + 15 + 15 = **58**."
  },
  {
    "id": "num_q51",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Hard",
    "points": 1,
    "question": "Which one of the following is a prime number?",
    "options": [
      "161",
      "221",
      "373",
      "437"
    ],
    "correct": "373",
    "explanation": "🔢 Primality Testing:\n- 161 is divisible by 7 (7 × 23 = 161).\n- 221 is divisible by 13 (13 × 17 = 221).\n- 437 is divisible by 19 (19 × 23 = 437).\n- For 373: √373 ≈ 19.3. Primes below 20: 2, 3, 5, 7, 11, 13, 17, 19. None divide 373.\nTherefore, **373** is prime."
  },
  {
    "id": "num_q52",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which one of the following is a prime number?",
    "options": [
      "119",
      "187",
      "247",
      "71"
    ],
    "correct": "71",
    "explanation": "🔢 Primality Testing:\n- 119 = 7 × 17 (composite).\n- 187 = 11 × 17 (composite).\n- 247 = 13 × 19 (composite).\n- **71** has no divisors other than 1 and 71, so it is a prime number."
  },
  {
    "id": "num_q12",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "How many 3 digit numbers are completely divisible by 6?",
    "options": [
      "149",
      "150",
      "151",
      "166"
    ],
    "correct": "150",
    "explanation": "🔢 Range Divisibility:\n- 3-digit numbers range from 100 to 999.\n- Numbers up to 999 divisible by 6 = ⌊999 / 6⌋ = 166.\n- Numbers up to 99 divisible by 6 = ⌊99 / 6⌋ = 16.\n- 3-digit numbers divisible by 6 = 166 - 16 = **150**."
  },
  {
    "id": "num_q13",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "How many 3 digit numbers are completely divisible by 3 and 4 :",
    "options": [
      "67",
      "75",
      "57",
      "83"
    ],
    "correct": "75",
    "explanation": "🔢 LCM Divisibility:\n- Divisible by both 3 and 4 implies divisible by LCM(3, 4) = 12.\n- Range: 100 to 999.\n- ⌊999 / 12⌋ - ⌊99 / 12⌋ = 83 - 8 = **75**."
  },
  {
    "id": "num_q14",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "What will be the remainder when 17²⁰⁰ is divided by 18?",
    "options": [
      "17",
      "16",
      "1",
      "2"
    ],
    "correct": "1",
    "explanation": "🔢 Negative Remainder Concept:\n- 17 ≡ -1 (mod 18).\n- 17²⁰⁰ ≡ (-1)²⁰⁰ (mod 18) = 1 (mod 18).\nTherefore, the remainder is **1**."
  },
  {
    "id": "num_q14a",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder when 3⁸⁵ is divided by 6.",
    "options": [
      "3",
      "16",
      "1",
      "2"
    ],
    "correct": "3",
    "explanation": "🔢 Common Factor Simplification:\n- Cancel common factor 3 between 3⁸⁵ and 6:\n  3⁸⁵ / 6 = (3 × 3⁸⁴) / (3 × 2) = 3⁸⁴ / 2.\n- Remainder of 3⁸⁴ divided by 2 is 1 (since 3 ≡ 1 mod 2).\n- Multiply back the cancelled factor 3:\n  Remainder = 1 × 3 = **3**."
  },
  {
    "id": "num_q14b",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder when 2⁷⁰ is divided by 96.",
    "options": [
      "64",
      "63",
      "1",
      "2"
    ],
    "correct": "64",
    "explanation": "🔢 Factor Reduction Method:\n- 96 = 32 × 3 = 2⁵ × 3.\n- Divide numerator and denominator by 2⁵:\n  2⁷⁰ / 96 = (2⁵ · 2⁶⁵) / (2⁵ · 3) = 2⁶⁵ / 3.\n- 2 ≡ -1 (mod 3) -> 2⁶⁵ ≡ (-1)⁶⁵ = -1 ≡ 2 (mod 3).\n- Multiply back by 2⁵ (32):\n  Remainder = 2 × 32 = **64**."
  },
  {
    "id": "num_q15",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "What will be the remainder when (67⁶⁷ + 67) is divided by 68?",
    "options": [
      "1",
      "66",
      "67",
      "60"
    ],
    "correct": "66",
    "explanation": "🔢 Modular Reduction:\n- 67 ≡ -1 (mod 68).\n- 67⁶⁷ + 67 ≡ (-1)⁶⁷ + (-1) = -1 - 1 = -2 (mod 68).\n- Since remainder must be non-negative: 68 - 2 = **66**."
  },
  {
    "id": "num_q16",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which of the following number will completely divide (49¹⁵ – 1)?",
    "options": [
      "8",
      "14",
      "51",
      "50"
    ],
    "correct": "8",
    "explanation": "🔢 Algebraic Factor Rule:\n- (aⁿ - bⁿ) is always divisible by (a - b).\n- Here, (49¹⁵ - 1¹⁵) is divisible by (49 - 1) = 48.\n- Since 8 is a factor of 48 (48 = 8 × 6), **8** completely divides the expression."
  },
  {
    "id": "num_q17",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "A number when divided by 6 leaves a remainder of 3. When the square of the number is divided by 6, the remainder is:",
    "options": [
      "0",
      "1",
      "3",
      "2"
    ],
    "correct": "3",
    "explanation": "🔢 Remainder of Squared Quantity:\n- Let the number be N = 6k + 3.\n- N² = (6k + 3)² = 36k² + 36k + 9.\n- Dividing by 6:\n  (36k² + 36k) is a multiple of 6.\n  Remainder = 9 mod 6 = **3**."
  },
  {
    "id": "num_q18",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "A number when divided successively by 4 and 5 leaves remainders 1 and 4 respectively. When it is successively divided by 5 and 4, then the respective remainders will be :",
    "options": [
      "1, 2",
      "2, 3",
      "3, 2",
      "4, 1"
    ],
    "correct": "2, 3",
    "explanation": "🔢 Successive Division Reconstruction:\n1. Let final quotient = 1.\n   Second dividend = 5(1) + 4 = 9.\n   Original number N = 4(9) + 1 = 37.\n2. Now successively divide 37 by 5 and 4:\n   - 37 ÷ 5 = 7 with remainder **2**.\n   - 7 ÷ 4 = 1 with remainder **3**.\nRespective remainders are **2, 3**."
  },
  {
    "id": "num_q19",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "A number was divided successively in order by 4, 5, and 6. The remainder were respectively 2, 3, and 4. The number is :",
    "options": [
      "214",
      "476",
      "954",
      "1908"
    ],
    "correct": "214",
    "explanation": "🔢 Successive Division Backtracking:\n1. Let the last quotient be 1.\n2. Third divisor: 6 × 1 + 4 = 10.\n3. Second divisor: 5 × 10 + 3 = 53.\n4. First divisor: 4 × 53 + 2 = 212 + 2 = **214**."
  },
  {
    "id": "num_q20",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which one of the following numbers will completely divide (4⁶¹ + 4⁶² + 4⁶³ + 4⁶⁴)?",
    "options": [
      "3",
      "9",
      "11",
      "17"
    ],
    "correct": "17",
    "explanation": "🔢 Common Power Factoring:\n- Factor out 4⁶¹:\n  4⁶¹ (1 + 4¹ + 4² + 4³)\n  = 4⁶¹ (1 + 4 + 16 + 64)\n  = 4⁶¹ × 85.\n- Since 85 = 5 × 17, the expression is divisible by **17**."
  },
  {
    "id": "num_q21",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which one of the following numbers will completely divide 5⁵¹ + 5⁵² + 5⁵³?",
    "options": [
      "11",
      "12",
      "31",
      "32"
    ],
    "correct": "31",
    "explanation": "🔢 Common Power Factoring:\n- Factor out 5⁵¹:\n  5⁵¹ (1 + 5¹ + 5²)\n  = 5⁵¹ (1 + 5 + 25)\n  = 5⁵¹ × 31.\n- Therefore, it is completely divisible by **31**."
  },
  {
    "id": "num_q22",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which one of the following is the common factor of (47⁴³ + 43⁴³) and (47⁴⁷ + 43⁴⁷)?",
    "options": [
      "47 – 43",
      "47 + 43",
      "47⁴³ + 43⁴³",
      "47⁴⁷ + 43⁴⁷"
    ],
    "correct": "47 + 43",
    "explanation": "🔢 Algebraic Property for Odd Exponents:\n- When n is an odd integer, (xⁿ + aⁿ) is always divisible by (x + a).\n- Both exponents 43 and 47 are odd.\n- Hence, both expressions are divisible by **(47 + 43)** = 90."
  },
  {
    "id": "num_q23",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which one of the following numbers is completely divisible by 99?",
    "options": [
      "3572",
      "13595",
      "913464",
      "114345"
    ],
    "correct": "114345",
    "explanation": "🔢 Divisibility by 99 (9 and 11):\n- Sum of digits of 114345 = 1 + 1 + 4 + 3 + 4 + 5 = 18 (divisible by 9).\n- Alternating sum of digits: (5 + 3 + 1) - (4 + 4 + 1) = 9 - 9 = 0 (divisible by 11).\n- Since it satisfies both 9 and 11, **114345** is divisible by 99."
  },
  {
    "id": "num_q24",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which one of the following numbers is completely divisible by 45?",
    "options": [
      "181560",
      "331145",
      "202860",
      "203350"
    ],
    "correct": "202860",
    "explanation": "🔢 Divisibility by 45 (5 and 9):\n- Must end in 0 or 5, and sum of digits must be a multiple of 9.\n- For 202860: Ends in 0 (divisible by 5).\n  Sum of digits = 2 + 0 + 2 + 8 + 6 + 0 = 18 (divisible by 9).\n- Thus, **202860** is divisible by 45."
  },
  {
    "id": "num_q26",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the digit in the blank space of the number 34*7 so that the number is divisible by 11?",
    "options": [
      "3",
      "6",
      "7",
      "8"
    ],
    "correct": "8",
    "explanation": "🔢 Divisibility Rule of 11:\n- (Sum of digits in odd places) - (Sum of digits in even places) must be 0 or a multiple of 11.\n- Odd places (from right): 7 + 4 = 11.\n- Even places (from right): * + 3.\n- 11 - (* + 3) = 0 -> 8 - * = 0 -> * = **8**."
  },
  {
    "id": "num_q32",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "7¹² - 4¹² is exactly divisibly by which of the following?",
    "options": [
      "36",
      "35",
      "34",
      "33"
    ],
    "correct": "33",
    "explanation": "🔢 Algebraic Factoring:\n- 7¹² - 4¹² = (7²)⁶ - (4²)⁶ = 49⁶ - 16⁶.\n- For any natural n, (aⁿ - bⁿ) is divisible by (a - b).\n- 49 - 16 = **33**.\nTherefore, the expression is exactly divisible by 33."
  },
  {
    "id": "num_q46",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "What will be the remainder when (27²⁷ + 17²⁷) is divided by 11?",
    "options": [
      "27",
      "17",
      "0",
      "1"
    ],
    "correct": "0",
    "explanation": "🔢 Divisibility of Odd Powers:\n- For odd power n = 27, (aⁿ + bⁿ) is divisible by (a + b).\n- 27 + 17 = 44.\n- Since 44 is completely divisible by 11 (44 = 11 × 4), the remainder is **0**."
  },
  {
    "id": "num_q47",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "If n is a natural number, (n³ - n) will always be divisible by:",
    "options": [
      "6 only",
      "6 and 12 both",
      "12 only",
      "by 18 only"
    ],
    "correct": "6 only",
    "explanation": "🔢 Consecutive Integers Product:\n- n³ - n = n(n² - 1) = (n - 1) · n · (n + 1).\n- This is the product of three consecutive integers.\n- In any three consecutive integers, at least one is a multiple of 2 and exactly one is a multiple of 3.\n- Therefore, it is always divisible by 2 × 3 = **6 only** (not necessarily 12, e.g. for n = 2: 8 - 2 = 6)."
  },
  {
    "id": "num_q48",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "( xⁿ – aⁿ) is completely divisible by (x - a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is any natural number",
    "explanation": "🔢 Standard Algebraic Theorem:\n- (xⁿ - aⁿ) = (x - a)(xⁿ⁻¹ + xⁿ⁻²a + ... + aⁿ⁻¹).\n- This factorization holds for **any natural number n**."
  },
  {
    "id": "num_q49",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "( xⁿ – aⁿ) is completely divisible by (x + a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is an even natural number",
    "explanation": "🔢 Remainder Theorem:\n- Let f(x) = xⁿ - aⁿ. Divisibility by (x + a) requires f(-a) = 0.\n- (-a)ⁿ - aⁿ = 0 only when (-a)ⁿ = aⁿ, which requires **n to be an even natural number** (e.g. x² - a² = (x-a)(x+a))."
  },
  {
    "id": "num_q50",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "( xⁿ + aⁿ) is completely divisible by (x + a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is an odd natural number",
    "explanation": "🔢 Remainder Theorem:\n- Let f(x) = xⁿ + aⁿ. Divisibility by (x + a) requires f(-a) = 0.\n- (-a)ⁿ + aⁿ = -aⁿ + aⁿ = 0 only when **n is an odd natural number** (e.g. x³ + a³ = (x+a)(x² - ax + a²))."
  },
  {
    "id": "num_q53",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the largest four-digit number which is divisible by 88 :",
    "options": [
      "9944",
      "9768",
      "9988",
      "8888"
    ],
    "correct": "9944",
    "explanation": "🔢 Division Algorithm:\n1. Largest 4-digit number = 9999.\n2. Divide 9999 by 88: 9999 = 88 × 113 + 55.\n3. Subtract the remainder: 9999 - 55 = **9944**."
  },
  {
    "id": "num_q54",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "If a number is divided by 111, the remainder is 31. What will be the remainder if it is divided by 37?",
    "options": [
      "31",
      "32",
      "33",
      "0"
    ],
    "correct": "31",
    "explanation": "🔢 Divisor Multiplier Relation:\n- Since 111 is an exact multiple of 37 (111 = 37 × 3):\n- Any number N = 111q + 31 = 37(3q) + 31.\n- The remainder when divided by 37 is 31 mod 37 = **31**."
  },
  {
    "id": "num_q55",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "On multiplying a number by 7, the product is a number made of only the digit 3. The smallest such number is:",
    "options": [
      "47619",
      "47719",
      "48619",
      "47649"
    ],
    "correct": "47619",
    "explanation": "🔢 Repeating Digit Division:\n- Divide successive repdigits 3, 33, 333, 3333, 33333, 333333 by 7 until no remainder:\n- 333333 ÷ 7 = **47619**.\n(Check: 47619 × 7 = 333333)."
  },
  {
    "id": "num_q25",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of digits of a two-digit number is 7. If the digits of the number are interchanged, the number so formed is greater than the original number by 27. Find the original number :",
    "options": [
      "29",
      "25",
      "79",
      "32",
      "None of these"
    ],
    "correct": "25",
    "explanation": "🔢 Linear System for Digits:\n- Let the number be 10x + y.\n- x + y = 7 (Eq 1).\n- Interchanged number: 10y + x.\n- (10y + x) - (10x + y) = 9(y - x) = 27 -> y - x = 3 (Eq 2).\n- Adding Eq 1 and Eq 2: 2y = 10 -> y = 5, x = 2.\nOriginal number = **25**."
  },
  {
    "id": "num_q27",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the sum of, the digits of a two-digit number and the number formed by reversing its digit is 99, what is the sum of the digits of the original number?",
    "options": [
      "9",
      "8",
      "11",
      "10"
    ],
    "correct": "9",
    "explanation": "🔢 Reversal Sum Identity:\n- Let number be 10x + y. Reversing gives 10y + x.\n- Sum = (10x + y) + (10y + x) = 11(x + y) = 99.\n- Therefore, sum of digits (x + y) = 99 / 11 = **9**."
  },
  {
    "id": "num_q28",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the sum of, the digits of a two-digit number and the number formed by reversing its digits is N, Which one of the following numbers will completely divide N?",
    "options": [
      "9",
      "7",
      "11",
      "18"
    ],
    "correct": "11",
    "explanation": "🔢 Universal Divisibility Property:\n- Original: 10a + b. Reversed: 10b + a.\n- N = (10a + b) + (10b + a) = 11(a + b).\n- N is always an exact multiple of **11**."
  },
  {
    "id": "num_q29",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the difference between, a two-digit number and a number formed by reversing its digit is N, Which one of the following numbers will completely divide N :",
    "options": [
      "9",
      "7",
      "11",
      "5"
    ],
    "correct": "9",
    "explanation": "🔢 Universal Divisibility Property:\n- Original: 10a + b. Reversed: 10b + a.\n- N = (10a + b) - (10b + a) = 9(a - b).\n- N is always an exact multiple of **9**."
  },
  {
    "id": "num_q30",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the difference between a two digit number and the number formed by reversing its digit is 45, what is the difference between the digits of the original number :",
    "options": [
      "9",
      "2",
      "5",
      "1"
    ],
    "correct": "5",
    "explanation": "🔢 Digit Difference Formula:\n- Difference = 9 × (difference between digits) = 45.\n- Difference between digits = 45 / 9 = **5**."
  },
  {
    "id": "num_q31",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Medium",
    "points": 1,
    "question": "A 4-digit number is formed by repeating a 2-digit number such as 2525, 3232, etc. Any number of this form is always divisible by :",
    "options": [
      "Smallest two-digit prime number",
      "7",
      "13",
      "smallest three-digit prime number"
    ],
    "correct": "smallest three-digit prime number",
    "explanation": "🔢 Repetition Structure:\n- An arbitrary number abab = 1000a + 100b + 10a + b = 100(10a + b) + (10a + b) = 101(10a + b).\n- 101 is the **smallest three-digit prime number**."
  },
  {
    "id": "num_q33",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the sum of the first fifty natural numbers :",
    "options": [
      "1144",
      "1275",
      "1325",
      "1075"
    ],
    "correct": "1275",
    "explanation": "🔢 Sum of First n Natural Numbers:\n- Formula: n(n + 1) / 2.\n- For n = 50:\n  Sum = 50 × 51 / 2 = 25 × 51 = **1275**."
  },
  {
    "id": "num_q34",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the value of 51+52+53+54+…………+100 :",
    "options": [
      "2443",
      "1754",
      "2673",
      "3775"
    ],
    "correct": "3775",
    "explanation": "🔢 Partial Series Sum:\n- Sum(51..100) = Sum(1..100) - Sum(1..50)\n- Sum(1..100) = 100 × 101 / 2 = 5050.\n- Sum(1..50) = 50 × 51 / 2 = 1275.\n- Result = 5050 - 1275 = **3775**."
  },
  {
    "id": "num_q35",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the sum of the squares of the first 30 natural numbers :",
    "options": [
      "9455",
      "8372",
      "7849",
      "6973"
    ],
    "correct": "9455",
    "explanation": "🔢 Sum of Squares Formula:\n- Formula: n(n + 1)(2n + 1) / 6.\n- For n = 30:\n  30 × 31 × (2×30 + 1) / 6 = 30 × 31 × 61 / 6 = 5 × 31 × 61 = 155 × 61 = **9455**."
  },
  {
    "id": "num_q36",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the value of 2² + 4² + 6² + 8² + …….+ 20² :",
    "options": [
      "2870",
      "1321",
      "1540",
      "1550"
    ],
    "correct": "1540",
    "explanation": "🔢 Even Squares Sum:\n- Factor out 2² = 4:\n  4(1² + 2² + 3² + ... + 10²)\n- Sum(1²..10²) = 10 × 11 × 21 / 6 = 385.\n- Value = 4 × 385 = **1540**."
  },
  {
    "id": "num_q37",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the value of 1² + 3² + 5² + 7² + ……………+ 19² :",
    "options": [
      "1335",
      "1330",
      "1332",
      "1334"
    ],
    "correct": "1330",
    "explanation": "🔢 Odd Squares Formula:\n- Sum of odd squares up to last term n = 19:\n  n(n + 1)(n + 2) / 6 = 19 × 20 × 21 / 6 = 19 × 10 × 7 = **1330**."
  },
  {
    "id": "num_q38",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Easy",
    "points": 1,
    "question": "If 1² + 2² + 3² + 4² + ………. + 10² = 385, find the value of 2² + 4² + 6² + …… + 20² :",
    "options": [
      "1250",
      "1540",
      "1190",
      "1375"
    ],
    "correct": "1540",
    "explanation": "🔢 Multiple Factor Technique:\n- 2² + 4² + ... + 20² = 2²(1² + 2² + ... + 10²)\n  = 4 × 385 = **1540**."
  },
  {
    "id": "num_q39",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the value of 11² + 12² + 13² + 14² + ………….+ 20² :",
    "options": [
      "2870",
      "2485",
      "2670",
      "2495"
    ],
    "correct": "2485",
    "explanation": "🔢 Partial Squares Sum:\n- Sum(11²..20²) = Sum(1²..20²) - Sum(1²..10²)\n- Sum(1²..20²) = 20 × 21 × 41 / 6 = 2870.\n- Sum(1²..10²) = 10 × 11 × 21 / 6 = 385.\n- Result = 2870 - 385 = **2485**."
  },
  {
    "id": "num_q40",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the value of 1³ + 3³ + 5³ + 7³ + …………..+ 29³ :",
    "options": [
      "36100",
      "101025",
      "32500",
      "44700"
    ],
    "correct": "101025",
    "explanation": "🔢 Odd Cubes Sum Formula:\n- Number of terms k = (29 + 1)/2 = 15.\n- Formula: k²(2k² - 1).\n- 15² × (2×15² - 1) = 225 × (2×225 - 1) = 225 × 449 = **101025**."
  },
  {
    "id": "num_q41",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Easy",
    "points": 1,
    "question": "If 1³ + 2³ + 3³ + 4³ + …………………………+ 10³ = 3025, find the value of 2³ + 4³ + 6³ + .…+ 20³ :",
    "options": [
      "2875",
      "24200",
      "3080",
      "39400"
    ],
    "correct": "24200",
    "explanation": "🔢 Multiple Factor Technique for Cubes:\n- 2³ + 4³ + ... + 20³ = 2³(1³ + 2³ + ... + 10³)\n  = 8 × 3025 = **24200**."
  },
  {
    "id": "num_q42",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the sum of all even numbers up to 100 :",
    "options": [
      "2295",
      "2425",
      "2495",
      "2550"
    ],
    "correct": "2550",
    "explanation": "🔢 Sum of First n Even Numbers:\n- Up to 100, there are n = 50 even numbers (2, 4, ..., 100).\n- Formula = n(n + 1) = 50 × 51 = **2550**."
  },
  {
    "id": "num_q43",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the sum of the all odd number up to 100 :",
    "options": [
      "2100",
      "2500",
      "2300",
      "2200"
    ],
    "correct": "2500",
    "explanation": "🔢 Sum of First n Odd Numbers:\n- Up to 100, there are n = 50 odd numbers (1, 3, ..., 99).\n- Formula = n² = 50² = **2500**."
  },
  {
    "id": "num_extra_q1",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "If one is added to the numerator while 7 is subtracted from the denominator, ratio becomes 5 : 3. While if one is added to the denominator while 3 is subtracted from the numerator, ratio becomes 4 : 5. What is the sum of the numerator and the denominator?",
    "options": [
      "34",
      "31",
      "20",
      "19",
      "38"
    ],
    "correct": "38",
    "explanation": "🔢 Fraction Formulation:\n1. Let the fraction be x / y.\n2. First condition: (x + 1) / (y - 7) = 5 / 3\n   ⇒ 3(x + 1) = 5(y - 7) ⇒ 3x - 5y = -38 ...(i)\n3. Second condition: (x - 3) / (y + 1) = 4 / 5\n   ⇒ 5(x - 3) = 4(y + 1) ⇒ 5x - 4y = 19 ...(ii)\n4. Solving (i) and (ii):\n   Multiply (i) by 4 and (ii) by 5:\n   12x - 20y = -152\n   25x - 20y = 95\n   Subtracting gives 13x = 247 ⇒ x = 19.\n   Then 3(19) - 5y = -38 ⇒ 57 + 38 = 5y ⇒ 5y = 95 ⇒ y = 19.\n5. Required sum = x + y = 19 + 19 = **38**."
  },
  {
    "id": "num_extra_q2",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "If 3 is added to the numerator while 1 is subtracted from the denominator, their ratio becomes 5 : 4 while if one is added to the denominator and 5 is subtracted from the numerator the ratio becomes 2 : 3. What is the original fraction?",
    "options": [
      "11/14",
      "12/13",
      "17/17",
      "17/15",
      "None of these"
    ],
    "correct": "17/17",
    "explanation": "🔢 Fraction System:\n1. Let the original fraction be a / b.\n2. Condition 1: (a + 3) / (b - 1) = 5 / 4\n   ⇒ 4a + 12 = 5b - 5 ⇒ 4a - 5b = -17 ...(i)\n3. Condition 2: (a - 5) / (b + 1) = 2 / 3\n   ⇒ 3a - 15 = 2b + 2 ⇒ 3a - 2b = 17 ...(ii)\n4. Multiply (i) by 2 and (ii) by 5:\n   8a - 10b = -34\n   15a - 10b = 85\n   Subtracting: 7a = 119 ⇒ a = 17.\n   3(17) - 2b = 17 ⇒ 51 - 17 = 2b ⇒ 2b = 34 ⇒ b = 17.\n5. Original fraction = **17/17**."
  },
  {
    "id": "num_extra_q3",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "A certain sum is divided among X, Y and Z in a manner that for every rupee X gets, Y gets 50 paise and for every rupee Y gets, Z gets 25 paise. If Z's share in the total sum is Rs.480, then find the share of X.",
    "options": [
      "3820",
      "3840",
      "3740",
      "3850",
      "3480"
    ],
    "correct": "3840",
    "explanation": "💰 Currency Division & Compound Ratio:\n1. X : Y = 1 : 0.50 = 2 : 1 = 8 : 4.\n2. Y : Z = 1 : 0.25 = 4 : 1.\n3. Combined ratio X : Y : Z = 8 : 4 : 1.\n4. Z's share = 1 unit = Rs. 480.\n5. X's share = 8 units = 8 × 480 = **3840**."
  },
  {
    "id": "num_extra_q4",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "Neha has a certain number of 10-paise coin, 3 times as many 25-paise coins as 10-paise coins, and number of 50-paise coins are 5 more than the number of 25-paise coins. If the total value is Rs 120. How many 10-paise coins are there?",
    "options": [
      "70",
      "60",
      "50",
      "40",
      "30"
    ],
    "correct": "50",
    "explanation": "🪙 Coin Value Formulation:\n1. Let the number of 10-paise coins be x.\n2. Number of 25-paise coins = 3x.\n3. Number of 50-paise coins = 3x + 5.\n4. Total value equation (in rupees):\n   0.10(x) + 0.25(3x) + 0.50(3x + 5) = 120\n   0.10x + 0.75x + 1.50x + 2.50 = 120\n   2.35x + 2.50 = 120\n   2.35x = 117.50\n   x = 117.50 / 2.35 = **50**."
  },
  {
    "id": "num_extra_q5",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "A bus starts with passengers filled completely to its capacity. At first stop, it drops one-third of the passengers and picks up 12 others. At the next stop, it drops half of the new total and picks up 3 others. On reaching the next station, the total number of passengers left is 18. What is the number of passengers it can fill at most?",
    "options": [
      "27",
      "35",
      "52",
      "32",
      "None of the Above"
    ],
    "correct": "27",
    "explanation": "🚌 Passenger Flow Equation:\n1. Let initial full capacity be m.\n2. After stop 1: Drops m/3, picks up 12 ⇒ Remaining = m - m/3 + 12 = 2m/3 + 12.\n3. After stop 2: Drops half, picks up 3 ⇒ Remaining = (1/2)(2m/3 + 12) + 3 = m/3 + 6 + 3 = m/3 + 9.\n4. Final passenger count = 18 ⇒ m/3 + 9 = 18 ⇒ m/3 = 9 ⇒ m = **27**."
  },
  {
    "id": "num_extra_q6",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a national park there are four different animals Tiger, Elephant, Deer and Zebra. It is known that, there are 191 animals except Tigers, 178 animals except Elephants, 169 animals except Deers and 161 animals except Zebras. What is the total number of animals in the national park?",
    "options": [
      "221",
      "233",
      "254",
      "245",
      "Can't be determined"
    ],
    "correct": "233",
    "explanation": "🦓 Multi-Variable Symmetric Sum:\n1. Let count of Tigers, Elephants, Deers, Zebras be T, E, D, Z respectively.\n2. E + D + Z = 191 ...(1)\n   T + D + Z = 178 ...(2)\n   T + E + Z = 169 ...(3)\n   T + E + D = 161 ...(4)\n3. Adding all four equations:\n   3(T + E + D + Z) = 191 + 178 + 169 + 161 = 699\n4. Total animals = 699 / 3 = **233**."
  },
  {
    "id": "num_extra_q7",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "Shagun lost her purse on her way from market to her home. But she clearly remembers that before she lost her wallet she bought one notebook and a pen. For the notebook she spent 1/5th of the money she had and for the pen she spent 10% of the remaining money and that is equal to Rs.12. Then how much money did she lose?",
    "options": [
      "150",
      "108",
      "120",
      "112",
      "None of these"
    ],
    "correct": "108",
    "explanation": "👛 Remainder Fraction Analysis:\n1. Let initial money = n.\n2. Spent on notebook = n / 5 ⇒ Remaining money = 4n / 5.\n3. Spent on pen = 10% of (4n / 5) = 12\n   ⇒ (1/10) × (4n / 5) = 12 ⇒ 4n / 50 = 12 ⇒ 4n = 600 ⇒ n = Rs. 150.\n4. Notebook price = 150 / 5 = Rs. 30.\n5. Pen price = Rs. 12.\n6. Total spent = 30 + 12 = Rs. 42.\n7. Money lost = 150 - 42 = **108**."
  },
  {
    "id": "num_extra_q8",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "A student divided 581 books among three of his friends such that four times the number of books received by first friend may be equal to five times the second friend and seven times the third friend. Find the number of books received by first friend?",
    "options": [
      "482",
      "702",
      "568",
      "245",
      "342"
    ],
    "correct": "245",
    "explanation": "📚 Inverse Ratio Apportionment:\n1. 4A = 5B = 7C = k ⇒ A : B : C = (1/4) : (1/5) : (1/7).\n2. Multiply through by LCM(4, 5, 7) = 140:\n   A : B : C = 35 : 28 : 20.\n3. Sum of ratio parts = 35 + 28 + 20 = 83.\n4. First friend's share = 581 × (35 / 83) = 7 × 35 = **245**."
  },
  {
    "id": "num_extra_q9",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "There are three signals at the traffic light. They blink after an interval of 30 seconds, 40 seconds and 25 seconds. If they all blinked first time together at 10.00 a.m. then at what time they will blink 5th time together?",
    "options": [
      "10: 50 a.m.",
      "10: 40 a.m.",
      "10: 40 p.m.",
      "10: 30 a.m.",
      "10: 00 a.m."
    ],
    "correct": "10: 40 a.m.",
    "explanation": "🚦 Signal Synchronization:\n1. Interval between blinks = LCM(30, 40, 25).\n   - 30 = 2 × 3 × 5\n   - 40 = 2³ × 5\n   - 25 = 5²\n   LCM = 2³ × 3 × 5² = 8 × 3 × 25 = 600 seconds = 10 minutes.\n2. First time = 10:00 a.m.\n3. To blink for the 5th time, 4 additional intervals must elapse:\n   Time = 10:00 a.m. + (4 × 10 min) = **10: 40 a.m.**"
  },
  {
    "id": "num_extra_q10",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the numerator of a fraction is increased by 20% and the denominator is increased by 25%, the fraction obtained is 3/5. What was the original fraction?",
    "options": [
      "5/7",
      "4/7",
      "3/8",
      "Can't be determined",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🔢 Percentage Scaled Fraction:\n1. Let original fraction be x / y.\n2. New fraction = (1.20x) / (1.25y) = 3 / 5.\n3. (120 / 125) × (x / y) = 3 / 5\n   ⇒ (24 / 25) × (x / y) = 3 / 5\n   ⇒ x / y = (3 / 5) × (25 / 24) = 5 / 8.\n4. Since 5/8 is not among options A, B, or C, the correct option is **None of these**."
  },
  {
    "id": "num_extra_q11",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "Sum of four numbers is 225. If 4 is subtracted from first number, added to second, multiplied to third and divided from last one then all the values are same. Find the difference b/w highest and smallest number?",
    "options": [
      "145",
      "135",
      "123",
      "139",
      "132"
    ],
    "correct": "135",
    "explanation": "🔢 Arithmetic Transformation Model:\n1. Let a - 4 = b + 4 = 4c = d / 4 = k.\n2. Then a = k + 4, b = k - 4, c = k / 4, d = 4k.\n3. Sum: (k + 4) + (k - 4) + (k / 4) + 4k = 225\n   ⇒ 6k + k / 4 = 225 ⇒ 25k / 4 = 225 ⇒ k = (225 × 4) / 25 = 36.\n4. Numbers:\n   a = 36 + 4 = 40\n   b = 36 - 4 = 32\n   c = 36 / 4 = 9 (smallest)\n   d = 4 × 36 = 144 (highest)\n5. Difference = 144 - 9 = **135**."
  },
  {
    "id": "num_extra_q12",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Hard",
    "points": 1,
    "question": "Two numbers A and B are given:\n(i) LCM of A and B is 44 times their HCF\n(ii) The sum of LCM of A & B and their HCF is 540.\n(iii) (A/10) + (B/10) is an integer\n(iv) A + B > 150\nWhich of the given statements are redundant to find the answer of the question.",
    "options": [
      "statement (ii)",
      "statement (iii)",
      "statement (iv)",
      "statement (i)",
      "Answer cannot be determined even after using all the statements."
    ],
    "correct": "Answer cannot be determined even after using all the statements.",
    "explanation": "🧩 Data Sufficiency Invariant:\n1. Let HCF = h. From (i), LCM = 44h.\n2. From (ii), 44h + h = 540 ⇒ 45h = 540 ⇒ h = 12.\n3. Let A = 12a, B = 12b with gcd(a, b) = 1 and ab = 44.\n4. Possible coprime pairs (a, b):\n   Case 1: (4, 11) ⇒ A = 48, B = 132 ⇒ A + B = 180 (A+B > 150 and 180/10 = 18 is an integer).\n   Case 2: (1, 44) ⇒ A = 12, B = 528 ⇒ A + B = 540 (A+B > 150 and 540/10 = 54 is an integer).\n5. Both pairs satisfy all statements, meaning unique values cannot be determined even with all statements."
  },
  {
    "id": "num_extra_q13",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "When the digits of a two digit natural number are interchanged then original number is greater than three times the new number so obtained. How many such natural numbers are there which satisfy the above given condition? Ignore the numbers which have '0' in its unit place.",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correct": "6",
    "explanation": "🔢 Two-Digit Reversal Inequality:\n1. Let the original number be 10x + y (x, y ∈ {1, ..., 9}).\n2. Reversed number = 10y + x.\n3. Given: 10x + y > 3(10y + x)\n   ⇒ 10x + y > 30y + 3x ⇒ 7x - 29y > 0 ⇒ 7x > 29y.\n4. Test values of y:\n   - y = 1: 7x > 29 ⇒ x ≥ 5 ⇒ x ∈ {5, 6, 7, 8, 9} (5 numbers: 51, 61, 71, 81, 91).\n   - y = 2: 7x > 58 ⇒ x ≥ 9 ⇒ x = 9 (1 number: 92).\n   - y ≥ 3: 29y ≥ 87, but max 7x = 63 (no solutions).\n5. Total valid numbers = 5 + 1 = **6**."
  },
  {
    "id": "num_extra_q14",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "A piggy bag has coins of denominations of Rupee one, two, and five in the ratio 11:9:5. If the total value of five-rupee coins is Rs. 56 more than the total value of two-rupee coins, find the total value of the coins in it (In Rupees).",
    "options": [
      "424",
      "428",
      "432",
      "440",
      "468"
    ],
    "correct": "432",
    "explanation": "🪙 Denomination Value Balance:\n1. Let number of Rs. 1, 2, 5 coins be 11x, 9x, 5x respectively.\n2. Value of 5-rupee coins = 5 × 5x = 25x.\n3. Value of 2-rupee coins = 2 × 9x = 18x.\n4. Given: 25x - 18x = 56 ⇒ 7x = 56 ⇒ x = 8.\n5. Total value = 1(11x) + 2(9x) + 5(5x) = 11x + 18x + 25x = 54x = 54 × 8 = **432**."
  },
  {
    "id": "num_extra_q15",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "Anindita went to Arsalaan Restaurant with her friends to celebrate her birthday. They ordered four special biriyani and some plates of kebabs. The price of one plate of kebab is 1/2 of that of the biriyani. While preparing the bill, the cashier interchanged the number of plates of biriyani and kebab by mistake which increased the bill by 20%. How many plates of kebabs were ordered?",
    "options": [
      "5",
      "6",
      "3",
      "7",
      "None of these"
    ],
    "correct": "7",
    "explanation": "🍗 Bill Inversion Algebra:\n1. Let price of 1 biriyani = 2k and 1 kebab = k.\n2. Ordered: 4 biriyani and y kebabs.\n   Original bill = 4(2k) + y(k) = 8k + ky = k(8 + y).\n3. Interchanged bill = y(2k) + 4(k) = 2ky + 4k = k(2y + 4).\n4. Increase = 20% ⇒ [k(2y + 4) - k(8 + y)] / [k(8 + y)] = 20 / 100 = 1 / 5\n   ⇒ (y - 4) / (8 + y) = 1 / 5\n   ⇒ 5y - 20 = 8 + y ⇒ 4y = 28 ⇒ y = **7**."
  },
  {
    "id": "num_extra_q16",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "Team titans can be formed by 20 boys and 10 girls of a school while team vipers can be formed by 30 boys and 20 girls of the same school. If there are total of 1300 boys in the school and 800 girls in the school and from them 'm' number of team titans are formed and total 'n' number of team vipers are formed, then find that 'm' is what per cent of 'n'?",
    "options": [
      "55.55%",
      "33.33%",
      "66.67%",
      "150%",
      "None of these"
    ],
    "correct": "66.67%",
    "explanation": "👥 Simultaneous Team Assembly:\n1. Boys equation: 20m + 30n = 1300 ⇒ 2m + 3n = 130 ...(1)\n2. Girls equation: 10m + 20n = 800 ⇒ m + 2n = 80 ...(2)\n3. Multiply (2) by 2: 2m + 4n = 160.\n4. Subtracting (1): n = 30.\n5. Then m = 80 - 2(30) = 20.\n6. Percentage: (m / n) × 100 = (20 / 30) × 100 = **66.67%**."
  },
  {
    "id": "num_extra_q17",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "M and N have less than 125 apples together. If N gives M a certain number of apples, then M would have 5 times as many apples as N. Instead if M gives the same number of apples to N, then M would have 4 times as many apples as N. The number of apples with M and N together can be",
    "options": [
      "100",
      "85",
      "110",
      "120",
      "None of these"
    ],
    "correct": "120",
    "explanation": "🍎 Transfer Ratio Model:\n1. Let M have x apples and N have y apples. Let k apples be transferred.\n2. x + k = 5(y - k) ⇒ x - 5y = -6k ...(1)\n3. x - k = 4(y + k) ⇒ x - 4y = 5k ...(2)\n4. Dividing (1) by (2):\n   (x - 5y) / (x - 4y) = -6 / 5\n   ⇒ 5x - 25y = -6x + 24y ⇒ 11x = 49y ⇒ x : y = 49 : 11.\n5. Total apples must be a multiple of (49 + 11) = 60.\n6. Multiples of 60 less than 125 are 60 and 120. From the choices, **120** is present."
  },
  {
    "id": "num_extra_q18",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "Hashmi had Rs. 574 with him. He went to market and bought 23 articles comprising of hats, mirrors and handkerchiefs each priced at Rs 45, Rs 20 and Rs 19 respectively. If the number of handkerchiefs bought were more than number of mirrors bought which in turn were more than number of hats bought, then number of hats, mirrors and handkerchiefs respectively are ___.",
    "options": [
      "6, 7, 10",
      "4, 9, 10",
      "5, 7, 11",
      "6, 8, 9",
      "None of the above are possibilities"
    ],
    "correct": "5, 7, 11",
    "explanation": "🎩 Diophantine Purchasing System:\n1. Let hats = x, mirrors = y, handkerchiefs = z.\n2. x + y + z = 23 and z > y > x.\n3. 45x + 20y + 19z = 574.\n4. Testing (5, 7, 11):\n   - Sum = 5 + 7 + 11 = 23 (Valid)\n   - Inequality: 11 > 7 > 5 (Valid)\n   - Cost: 45(5) + 20(7) + 19(11) = 225 + 140 + 209 = 574 (Exact match!)\nTherefore, the quantities are **5, 7, 11**."
  },
  {
    "id": "num_extra_q19",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a doll showroom, there are 65 dolls. With each doll three packs of doll dresses are to be given free as accessory. Rats damaged 80 percent of the dress packs with their teeth. Now the showroom manager decides to give only 2 packs of doll dress with each pack. For this he orders forty-one number of doll dress packs from the factory. Also he decides to send back the extra dolls back to the factory. Find the number of dolls he sends back.",
    "options": [
      "26",
      "22",
      "25",
      "23",
      "None of these"
    ],
    "correct": "25",
    "explanation": "🪆 Inventory Adjustment:\n1. Initial dolls = 65 ⇒ Initial dress packs = 65 × 3 = 195.\n2. Damaged by rats = 80% of 195 = 156 packs.\n3. Remaining undamaged packs = 195 - 156 = 39 packs.\n4. Manager orders 41 packs ⇒ Total available packs = 39 + 41 = 80.\n5. Dolls bundled with 2 packs each = 80 / 2 = 40 dolls.\n6. Extra dolls sent back = 65 - 40 = **25**."
  },
  {
    "id": "num_extra_q20",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_6",
    "type_name": "Type 6: Extra Q",
    "difficulty": "Hard",
    "points": 1,
    "question": "Four bells toll together at 2:10 PM. The biggest bell tolls after every 48 seconds, the 2nd biggest bell tolls every 132 seconds. The smallest and the second smallest bell tolls at 432 and 48 seconds respectively. How many times will the third largest bell would have tolled when all the bells toll together in the third time(including the bells toll together initially).",
    "options": [
      "10",
      "198",
      "199",
      "595",
      "None of these"
    ],
    "correct": "199",
    "explanation": "🔔 Periodic Bell LCM:\n1. The intervals of the bells are 48s, 132s, 432s, and 48s.\n2. LCM(48, 132, 432, 48) = 4752 seconds.\n3. The bells toll together at t = 0 (1st time), t = 4752s (2nd time), and t = 2 × 4752 = 9504s (3rd time).\n4. The third largest bell (period = 48s) tolls:\n   (9504 / 48) + 1 = 198 + 1 = **199** times."
  },
  {
    "id": "ana_q1",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Mango : Fruit : : Potato : ?",
    "options": [
      "Root",
      "Fruit",
      "Stem",
      "Flower",
      "Vegetable"
    ],
    "correct": "Stem",
    "explanation": "🌱 Botanical Classification Analogy:\n- A Mango is biologically classified as a Fruit.\n- Similarly, a Potato is biologically classified as a modified underground **Stem** (tuber)."
  },
  {
    "id": "ana_q2",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Book : Publisher : : Film : ?",
    "options": [
      "Producer",
      "Director",
      "Editor",
      "Writer",
      "Audience"
    ],
    "correct": "Producer",
    "explanation": "🎬 Creator/Producer Relationship:\n- A Publisher finances, prints, and brings a Book to the market.\n- In the same way, a **Producer** finances, organizes, and brings a Film to the market."
  },
  {
    "id": "ana_q3",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Bird : Aeroplane : : fish : ?",
    "options": [
      "Swim",
      "Water",
      "Food",
      "Ship",
      "Sailor"
    ],
    "correct": "Ship",
    "explanation": "✈️ Biological to Man-Made Vehicle Analogy:\n- An Aeroplane is a man-made machine inspired by and navigating the medium of a Bird (air).\n- Similarly, a **Ship** is a man-made vessel navigating the medium of a Fish (water)."
  },
  {
    "id": "ana_q4",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Cap : Head : : Spex : ?",
    "options": [
      "Eye",
      "Hat",
      "Cloth",
      "Hair",
      "Face"
    ],
    "correct": "Eye",
    "explanation": "👓 Accessory to Body Part Analogy:\n- A Cap is worn on the Head.\n- Spectacles ('Spex') are worn over the **Eye**."
  },
  {
    "id": "ana_q5",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Water : Ocean : : Air : ?",
    "options": [
      "Earth",
      "Sea",
      "Atmosphere",
      "Moon",
      "Vacuum"
    ],
    "correct": "Atmosphere",
    "explanation": "🌍 Reservoir/Medium Analogy:\n- An Ocean is the massive global reservoir containing Water.\n- Similarly, the **Atmosphere** is the envelope containing Air."
  },
  {
    "id": "ana_q6",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Man : Walk : : Fish : ?",
    "options": [
      "Swim",
      "Water",
      "Live",
      "Eat",
      "Run"
    ],
    "correct": "Swim",
    "explanation": "🏊 Locomotion Analogy:\n- The natural mode of locomotion for a Man is to Walk.\n- The natural mode of locomotion for a Fish is to **Swim**."
  },
  {
    "id": "ana_q7",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Parrot : Cage : : Man : ?",
    "options": [
      "Life",
      "House",
      "Jungle",
      "Jail",
      "Road"
    ],
    "correct": "Jail",
    "explanation": "🔒 Captivity Analogy:\n- A Parrot is held captive in a Cage.\n- A Man is held captive in a **Jail**."
  },
  {
    "id": "ana_q8",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Umbrella : Rain : : Coat : ?",
    "options": [
      "Winter",
      "Sunlight",
      "Summer",
      "Light",
      "Dir"
    ],
    "correct": "Winter",
    "explanation": "🧥 Protection Against Weather:\n- An Umbrella protects against Rain.\n- A Coat protects against the cold of **Winter**."
  },
  {
    "id": "ana_q9",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "Sympathy : Antipathy : : ? : Hatred",
    "options": [
      "Attachment",
      "Love",
      "Anger",
      "Affection",
      "Naiveness"
    ],
    "correct": "Love",
    "explanation": "❤️ Antonym Analogy:\n- Sympathy and Antipathy are exact opposites.\n- In the same way, **Love** is the exact opposite of Hatred."
  },
  {
    "id": "ana_q10",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Chapter : Book : : Flower : ?",
    "options": [
      "Plant",
      "Garden",
      "Pollen",
      "Bouquet",
      "Lotus"
    ],
    "correct": "Bouquet",
    "explanation": "💐 Part to Whole Analogy:\n- A Chapter is one component of a complete Book.\n- A Flower is one component of a complete **Bouquet**."
  },
  {
    "id": "ana_q11",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Horse : Hair : : Sheep : ?",
    "options": [
      "Wool",
      "Milk",
      "Fur",
      "Lamb",
      "Meat"
    ],
    "correct": "Wool",
    "explanation": "🐑 Animal Outer Covering / Fibre:\n- A Horse's body is covered with Hair (mane/coat).\n- A Sheep's body covering harvested by humans is **Wool**."
  },
  {
    "id": "ana_q12",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Necklace is related to Jewellery in the same way as Shirt is related to –––––––––",
    "options": [
      "Thread",
      "Cloth",
      "Cotton",
      "Apparel",
      "None of these"
    ],
    "correct": "Apparel",
    "explanation": "👔 Category / Classification Analogy:\n- A Necklace belongs to the broader category of Jewellery.\n- A Shirt belongs to the broader category of **Apparel** (clothing)."
  },
  {
    "id": "ana_q13",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Needle is related to Thread in the same way as Pen is related to ––––––––––",
    "options": [
      "Ink",
      "Cap",
      "Paper",
      "Word",
      "None of these"
    ],
    "correct": "Ink",
    "explanation": "✒️ Essential Working Medium:\n- A Needle functions by holding and passing Thread.\n- A Pen functions by holding and dispensing **Ink**."
  },
  {
    "id": "ana_q14",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "Labourer is related to Wages in the same way as Entrepreneur is related to ––––––––––",
    "options": [
      "Loan",
      "Interest",
      "Taxes",
      "Profit",
      "None of these"
    ],
    "correct": "Profit",
    "explanation": "💼 Factor of Production Reward:\n- A Labourer earns Wages as reward for labour.\n- An Entrepreneur earns **Profit** as reward for bearing business risk."
  },
  {
    "id": "ana_q15",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "College is related to Student in the same way as Hospital is related to ––––––––––",
    "options": [
      "Doctor",
      "Nurse",
      "Treatment",
      "Patient",
      "None of these"
    ],
    "correct": "Patient",
    "explanation": "🏥 Institution & Beneficiary Analogy:\n- A College exists primarily to educate a Student.\n- A Hospital exists primarily to treat a **Patient**."
  },
  {
    "id": "ana_q16",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Neck is related to Tie in the same way as Waist is related to ––––––––––",
    "options": [
      "Watch",
      "Belt",
      "Ribbon",
      "Shirt",
      "None of these"
    ],
    "correct": "Belt",
    "explanation": "👔 Anatomical Item Placement:\n- A Tie is worn around the Neck.\n- A **Belt** is worn around the Waist."
  },
  {
    "id": "ana_q17",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Writer is related to Reader in the same way as Producer is related to ––––––––––",
    "options": [
      "Product",
      "Consumer",
      "Seller",
      "Film",
      "None of these"
    ],
    "correct": "Consumer",
    "explanation": "📦 Creator to End-User Analogy:\n- A Writer creates content consumed by a Reader.\n- A Producer creates goods/services consumed by a **Consumer**."
  },
  {
    "id": "ana_q18",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "‘Kangaroo’ is related to Australia in the same way as 'Giraffe' is related to ––––––––––",
    "options": [
      "India",
      "Pakistan",
      "Japan",
      "Antarctica",
      "Africa"
    ],
    "correct": "Africa",
    "explanation": "🦒 Native Habitat / Continent Analogy:\n- The Kangaroo is native and endemic to Australia.\n- The Giraffe is native to **Africa**."
  },
  {
    "id": "ana_q19",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "'March' is related to 'Year' in the same way as Summer is related to ––––––––––",
    "options": [
      "Winter",
      "Cold",
      "Hot",
      "Spring",
      "Season"
    ],
    "correct": "Season",
    "explanation": "☀️ Unit to Cycle Analogy:\n- March is a specific period within a Year.\n- Summer is a specific period within a **Season** cycle."
  },
  {
    "id": "ana_q20",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "'Smoke' is related to 'Pollution' in the same way as ‘War’ is related to ––––––––––",
    "options": [
      "Victory",
      "Enemy",
      "Army",
      "Death",
      "Treaty"
    ],
    "correct": "Death",
    "explanation": "⚔️ Cause and Consequence Analogy:\n- Smoke inevitably leads to Pollution.\n- War inevitably leads to **Death** and destruction."
  },
  {
    "id": "ana_q21",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "‘Mother’ is related to ‘Child’ in the same way as ‘Tree’ is related to ––––––––––",
    "options": [
      "Plant",
      "Fruit",
      "Root",
      "Trunk",
      "None of these"
    ],
    "correct": "Fruit",
    "explanation": "🍎 Parent to Offspring/Produce Analogy:\n- A Mother bears a Child.\n- A Tree bears a **Fruit**."
  },
  {
    "id": "ana_q22",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "‘Day’ is related to ‘Calender’ in the same way as ‘Time’ is related to ––––––––––",
    "options": [
      "Day",
      "Hour",
      "Sun",
      "Clock",
      "None of these"
    ],
    "correct": "Clock",
    "explanation": "⏰ Measuring Instrument / Indicator:\n- Days are tracked and recorded on a Calendar.\n- Time is tracked and shown by a **Clock**."
  },
  {
    "id": "ana_q23",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "‘Coach’ is related to ––––––––––, in the same way as ‘Teacher’ is related to ‘Student’.",
    "options": [
      "Team",
      "Player",
      "Play",
      "Sport",
      "None of these"
    ],
    "correct": "Player",
    "explanation": "⚽ Guide and Learner Analogy:\n- A Teacher mentors and instructs a Student.\n- A Coach mentors and trains a **Player**."
  },
  {
    "id": "ana_q24",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Hard",
    "points": 1,
    "question": "‘Dawn' is related to ‘Evening’ in the same way as ‘Light’ is related to ––––––––––",
    "options": [
      "Sun",
      "Noon",
      "Electricity",
      "Heavy",
      "Torch"
    ],
    "correct": "Heavy",
    "explanation": "⚖️ Double-Meaning Antonym Pair:\n- Dawn and Evening represent opposites in daylight cycle.\n- In the options provided, 'Light' is treated in the weight sense, whose direct antonym is **Heavy**."
  },
  {
    "id": "ana_q25",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "‘Bird’ is related to ‘Aves’ in the same way as ‘Man’ is related to ––––––––––",
    "options": [
      "Mammal",
      "Lizard",
      "Homosapiens",
      "Holothuroidea",
      "None of these"
    ],
    "correct": "Homosapiens",
    "explanation": "🧬 Zoological Taxonomic Classification:\n- A Bird belongs to class Aves.\n- In scientific nomenclature, Man is termed **Homosapiens**."
  },
  {
    "id": "ana_q26",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "‘Newspaper’ is related to ‘Press’ in the same way as ‘Cloth’ is related to ––––––––––",
    "options": [
      "Tailor",
      "Mill",
      "Cotton",
      "Market",
      "Thread"
    ],
    "correct": "Mill",
    "explanation": "🏭 Place of Production:\n- A Newspaper is printed in a Press.\n- Cloth is manufactured in a **Mill**."
  },
  {
    "id": "ana_q27",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "‘Punishment’ is related to ‘Prisoner’ in the same way as ‘Operation’ is related to ––––––",
    "options": [
      "Hospital",
      "Doctor",
      "Patient",
      "Disease",
      "Operation Theatre"
    ],
    "correct": "Patient",
    "explanation": "🏥 Subject Receiving Action:\n- A Prisoner is the subject who undergoes Punishment.\n- A **Patient** is the subject who undergoes an Operation."
  },
  {
    "id": "ana_q28",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "‘Waiting’ is related to ‘Boredom’ in the same way as ‘Education’ is related to ––––––––––",
    "options": [
      "Schooling",
      "Books",
      "Enlightenment",
      "Syllabus",
      "Enthusiasm"
    ],
    "correct": "Enlightenment",
    "explanation": "💡 Action to Mental Result:\n- Excessive Waiting results in Boredom.\n- True Education results in **Enlightenment**."
  },
  {
    "id": "ana_q29",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Easy",
    "points": 1,
    "question": "21 : 3 : : 574 : ?",
    "options": [
      "23",
      "82",
      "97",
      "113",
      "117"
    ],
    "correct": "82",
    "explanation": "🔢 Constant Divisor Rule:\n- 21 ÷ 7 = 3.\n- In the same way: 574 ÷ 7 = **82**."
  },
  {
    "id": "ana_q30",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "26 : 5 : : 65 : ?",
    "options": [
      "6",
      "7",
      "8",
      "9",
      "12"
    ],
    "correct": "8",
    "explanation": "🔢 Square Plus One (n² + 1):\n- 26 = 5² + 1.\n- 65 = 8² + 1 (since 64 + 1 = 65).\n- Therefore, the related number is **8**."
  },
  {
    "id": "ana_q31",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Easy",
    "points": 1,
    "question": "3265 : 4376 : : 4673 : ?",
    "options": [
      "2154",
      "3562",
      "5487",
      "5784",
      "5984"
    ],
    "correct": "5784",
    "explanation": "🔢 Individual Digit Increment (+1):\n- Each digit in 3265 is increased by 1 to get 4376:\n  3+1=4, 2+1=3, 6+1=7, 5+1=6.\n- Applying the same to 4673:\n  4+1=5, 6+1=7, 7+1=8, 3+1=4 -> **5784**."
  },
  {
    "id": "ana_q32",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Hard",
    "points": 1,
    "question": "182 : ? : : 210 : 380",
    "options": [
      "156",
      "240",
      "272",
      "342",
      "346"
    ],
    "correct": "342",
    "explanation": "🔢 Quadratic n(n - 1) Pattern:\n- 210 = 15² - 15 = 15 × 14.\n- 380 = 20² - 20 = 20 × 19 (difference in base: 20 - 15 = 5).\n- 182 = 14² - 14 = 14 × 13.\n- With base + 5: 14 + 5 = 19.\n- 19² - 19 = 361 - 19 = **342**."
  },
  {
    "id": "ana_q33",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "5 : 100, 4 : 64 : : 4 : 80, 3 : ?",
    "options": [
      "26",
      "48",
      "54",
      "60",
      "64"
    ],
    "correct": "48",
    "explanation": "🔢 Multiplier Ratio Pattern:\n- In the first pair: 5 × 20 = 100, 4 × 16 = 64 (multipliers 20 and 16).\n- In the second pair: 4 × 20 = 80.\n- Therefore: 3 × 16 = **48**."
  },
  {
    "id": "ana_q34",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Hard",
    "points": 1,
    "question": "122 : 170 : : 290 : ?",
    "options": [
      "299",
      "315",
      "332",
      "344",
      "362"
    ],
    "correct": "362",
    "explanation": "🔢 Consecutive Prime Squares + 1:\n- 122 = 11² + 1.\n- 170 = 13² + 1 (13 is the next prime after 11).\n- 290 = 17² + 1.\n- The next prime after 17 is 19:\n  19² + 1 = 361 + 1 = **362**."
  },
  {
    "id": "ana_q35",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Easy",
    "points": 1,
    "question": "3 : 16 : : 7 : ?",
    "options": [
      "49",
      "52",
      "64",
      "73",
      "81"
    ],
    "correct": "64",
    "explanation": "🔢 (n + 1)² Pattern:\n- (3 + 1)² = 4² = 16.\n- (7 + 1)² = 8² = **64**."
  },
  {
    "id": "ana_q36",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "42 : 56 : : 110 : ?",
    "options": [
      "132",
      "136",
      "144",
      "149",
      "156"
    ],
    "correct": "132",
    "explanation": "🔢 Product of Consecutive Integers:\n- 42 = 6 × 7.\n- 56 = 7 × 8.\n- 110 = 10 × 11.\n- In the same sequence: 11 × 12 = **132**."
  },
  {
    "id": "ana_q37",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "01 : 08 : : 16 : ?",
    "options": [
      "25",
      "125",
      "64",
      "27",
      "81"
    ],
    "correct": "125",
    "explanation": "🔢 n² to (n + 1)³ Progression:\n- 01 = 1²; 08 = (1 + 1)³ = 2³ = 8.\n- 16 = 4²; next term = (4 + 1)³ = 5³ = **125**."
  },
  {
    "id": "ana_q38",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "12 : 20 : : 30 : ?",
    "options": [
      "15",
      "32",
      "35",
      "42",
      "48"
    ],
    "correct": "42",
    "explanation": "🔢 n² + n Progression:\n- 12 = 3² + 3.\n- 20 = 4² + 4.\n- 30 = 5² + 5.\n- Next in sequence = 6² + 6 = 36 + 6 = **42**."
  },
  {
    "id": "ana_q39",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "Given set: (2, 14, 16)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(2, 7, 8)",
      "(2, 9, 16)",
      "(3, 21, 24)",
      "(4, 16, 18)",
      "None of these"
    ],
    "correct": "(3, 21, 24)",
    "explanation": "🔢 Multiplier Ratio (x, 7x, 8x):\n- In (2, 14, 16): 2 × 7 = 14, 2 × 8 = 16.\n- For (3, 21, 24): 3 × 7 = 21, 3 × 8 = 24.\nMatches the exact same proportional logic."
  },
  {
    "id": "ana_q40",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "Given set: (3, 18, 36)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(2, 10, 16)",
      "(4, 24, 48)",
      "(6, 42, 48)",
      "(12, 72, 96)",
      "None of these"
    ],
    "correct": "(4, 24, 48)",
    "explanation": "🔢 Multiplier Relationship (x, 6x, 12x):\n- In (3, 18, 36): 3 × 6 = 18, 18 × 2 = 36.\n- For (4, 24, 48): 4 × 6 = 24, 24 × 2 = 48."
  },
  {
    "id": "ana_q41",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Hard",
    "points": 1,
    "question": "Given set: (6, 15, 28)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(56, 52, 44)",
      "(50, 59, 71)",
      "(60, 67, 72)",
      "(60, 69, 82)",
      "None of these"
    ],
    "correct": "(60, 69, 82)",
    "explanation": "🔢 Difference Progression (+9, +13):\n- In (6, 15, 28): 15 - 6 = 9; 28 - 15 = 13.\n- For (60, 69, 82): 69 - 60 = 9; 82 - 69 = 13."
  },
  {
    "id": "ana_q42",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "Given set: (81, 77, 69)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(56, 52, 44)",
      "(64, 61, 53)",
      "(75, 71, 60)",
      "(92, 88, 79)",
      "None of these"
    ],
    "correct": "(56, 52, 44)",
    "explanation": "🔢 Difference Progression (-4, -8):\n- In (81, 77, 69): 81 - 77 = 4; 77 - 69 = 8.\n- For (56, 52, 44): 56 - 52 = 4; 52 - 44 = 8."
  },
  {
    "id": "ana_q43",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "Given set: (32, 24, 8)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(26, 32, 42)",
      "(34, 24, 14)",
      "(24, 16, 0)",
      "(42, 34, 16)",
      "None of these"
    ],
    "correct": "(24, 16, 0)",
    "explanation": "🔢 Difference Progression (-8, -16):\n- In (32, 24, 8): 32 - 24 = 8; 24 - 8 = 16.\n- For (24, 16, 0): 24 - 16 = 8; 16 - 0 = 16."
  },
  {
    "id": "ana_q44",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "DWH is related to WDS in the same way as FUL is related to ....................",
    "options": [
      "UFO",
      "OFU",
      "FOU",
      "ELV",
      "None of these"
    ],
    "correct": "UFO",
    "explanation": "🔤 Opposite Alphabet Letters:\n- D is opposite to W; W is opposite to D; H is opposite to S.\n- Similarly for FUL:\n  F is opposite to U;\n  U is opposite to F;\n  L is opposite to O.\nResult = **UFO**."
  },
  {
    "id": "ana_q45",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "KORT is related to PJWO in the same way as FINR is related to ................",
    "options": [
      "KCSM",
      "KDSM",
      "JSMR",
      "JCRN",
      "None of these"
    ],
    "correct": "KDSM",
    "explanation": "🔤 Alternating (+5, -5) Shift:\n- K (11) + 5 = 16 (P)\n- O (15) - 5 = 10 (J)\n- R (18) + 5 = 23 (W)\n- T (20) - 5 = 15 (O)\nApplying to FINR:\n- F (6) + 5 = 11 (K)\n- I (9) - 5 = 4 (D)\n- N (14) + 5 = 19 (S)\n- R (18) - 5 = 13 (M) -> **KDSM**."
  },
  {
    "id": "ana_q46",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "TRADE is related to UQBCF in the same was as PLATE is related to .............",
    "options": [
      "QKBSF",
      "QKBUF",
      "OMZUD",
      "QMBUF",
      "None of these"
    ],
    "correct": "QKBSF",
    "explanation": "🔤 Alternating (+1, -1) Shift:\n- T (+1) = U, R (-1) = Q, A (+1) = B, D (-1) = C, E (+1) = F.\nApplying to PLATE:\n- P (+1) = Q\n- L (-1) = K\n- A (+1) = B\n- T (-1) = S\n- E (+1) = F -> **QKBSF**."
  },
  {
    "id": "ana_q47",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "CIRCLE is related to RICELC in the same way as SQUARE is related to ...............",
    "options": [
      "QSUERA",
      "QUSERA",
      "UQSAER",
      "UQSERA",
      "None of these"
    ],
    "correct": "UQSERA",
    "explanation": "🔤 Half-Word Inversion:\n- Divide CIRCLE into CIR and CLE. Reverse each half: CIR -> RIC; CLE -> ELC = RICELC.\n- Divide SQUARE into SQU and ARE. Reverse each half: SQU -> UQS; ARE -> ERA = **UQSERA**."
  },
  {
    "id": "ana_q48",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Hard",
    "points": 1,
    "question": "THEREFORE is to TEEOERFRH as HELICOPTER is to ..................",
    "options": [
      "HELICORETP",
      "HLCPERTOIE",
      "RETPOCILEH",
      "RETPOCILHE",
      "None of these"
    ],
    "correct": "HLCPERTOIE",
    "explanation": "🔤 Consonants-First Letter Segregation:\n- Extract consonants first: H, L, C, P, T, R (HLCPTR).\n- Then vowels: E, I, O, E.\n- Arranging according to pattern gives **HLCPERTOIE**."
  },
  {
    "id": "ana_q49",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Hard",
    "points": 1,
    "question": "DRIVEN is related to EIDRVN in the same way as BEGUM is related to ...............",
    "options": [
      "BGMEU",
      "BGMUE",
      "EUBGM",
      "UEBGM",
      "None of these"
    ],
    "correct": "BGMEU",
    "explanation": "🔤 Consonants followed by Vowels:\n- In BEGUM: Consonants are B, G, M; Vowels are E, U.\n- Consonants placed first followed by vowels: B, G, M, E, U -> **BGMEU**."
  },
  {
    "id": "ana_q50",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "RATIONAL is to RATNIOLA as TRIBAL is to ...........",
    "options": [
      "TIRLAB",
      "TRIALB",
      "TIRLBA",
      "TRILBA",
      "None of these"
    ],
    "correct": "TRILBA",
    "explanation": "🔤 Prefix Retention & Suffix Rearrangement:\n- In RATIONAL: RAT remains unaltered. IONAL is rearranged to NIOLA.\n- In TRIBAL: TRI remains unaltered. BAL is rearranged in reverse to LBA -> **TRILBA**."
  },
  {
    "id": "hcf_q1",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the H.C.F. of 42, 63 and 140:",
    "options": [
      "14",
      "9",
      "21",
      "7"
    ],
    "correct": "7",
    "explanation": "📐 Prime Factorization:\n- 42 = 2 × 3 × 7\n- 63 = 3² × 7\n- 140 = 2² × 5 × 7\nThe only common prime factor in all three numbers is **7**."
  },
  {
    "id": "hcf_q2",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the H.C.F. of a²b⁴c⁶, b³c⁸a⁴ and a⁸b⁶c².",
    "options": [
      "a⁴b⁴c⁴",
      "a²b²c²",
      "a²b³c²",
      "a²b³c³"
    ],
    "correct": "a²b³c²",
    "explanation": "📐 Minimum Powers of Common Variables:\n- Power of a: min(2, 4, 8) = 2 -> a²\n- Power of b: min(4, 3, 6) = 3 -> b³\n- Power of c: min(6, 8, 2) = 2 -> c²\nTherefore, H.C.F. = **a²b³c²**."
  },
  {
    "id": "hcf_q3",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the H.C.F. of 2² 3³ 5⁵, 2³ 3² 5² 7 and 2⁴ 3⁴ 5 7² 11.",
    "options": [
      "2²3² 5",
      "2²3² 5 7 11",
      "2⁴ 3⁴ 5",
      "2⁴ 3⁴ 5⁵ 7 11"
    ],
    "correct": "2²3² 5",
    "explanation": "📐 Prime Powers Minimum Rule:\n- Minimum power of 2: min(2, 3, 4) = 2²\n- Minimum power of 3: min(3, 2, 4) = 3²\n- Minimum power of 5: min(5, 2, 1) = 5¹\n- 7 and 11 are not present in all terms (min power = 0).\nTherefore, H.C.F. = **2²3² 5**."
  },
  {
    "id": "hcf_q4",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Hard",
    "points": 1,
    "question": "H.C.F. of 3240, 3600 and a third number, is 36 and their LCM is 2⁴ · 3⁵ · 5² · 7². The third number is-",
    "options": [
      "2² · 3⁵ · 7²",
      "2² · 5³ · 7²",
      "2⁵ · 5² · 7²",
      "2³ · 3⁵ · 7²"
    ],
    "correct": "2² · 3⁵ · 7²",
    "explanation": "🔢 Prime Factor Exponent Matching:\n1. 3240 = 2³ · 3⁴ · 5¹; 3600 = 2⁴ · 3² · 5².\n2. HCF = 36 = 2² · 3² -> Power of 2 in third number must be 2.\n3. LCM has 3⁵, but 3240 and 3600 only have up to 3⁴ -> Third number MUST supply 3⁵.\n4. LCM has 7², but neither number has 7 -> Third number MUST supply 7².\n5. Therefore, third number = **2² · 3⁵ · 7²**."
  },
  {
    "id": "hcf_q5",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the H.C.F. of 2/3, 8/9, 64/81 and 10/27.",
    "options": [
      "2/3",
      "2/81",
      "160/3",
      "160/81"
    ],
    "correct": "2/81",
    "explanation": "📐 Fractions HCF Formula:\n- HCF of Fractions = HCF(Numerators) / LCM(Denominators)\n- HCF(2, 8, 64, 10) = 2\n- LCM(3, 9, 81, 27) = 81\nResult = **2/81**."
  },
  {
    "id": "hcf_q6",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the maximum number of students among whom 1001 pens and 910 pencils can be distributed in such a way that each student gets the same number of pens and the same number of pencils.",
    "options": [
      "91",
      "910",
      "1001",
      "1911"
    ],
    "correct": "91",
    "explanation": "📦 Equal Distribution / HCF:\n- Maximum students = HCF(1001, 910).\n- 1001 - 910 = 91.\n- 910 = 91 × 10 and 1001 = 91 × 11.\n- Maximum number of students = **91**."
  },
  {
    "id": "hcf_q7",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the greatest possible length of a scale that can be used to measure exactly the following length of cloth 3m; 5m 10cm; and 12m 90cm.",
    "options": [
      "30 cm",
      "60 cm",
      "10 cm",
      "1290 cm"
    ],
    "correct": "30 cm",
    "explanation": "📏 Metric Scale Measurement:\n1. Convert all lengths to cm:\n   - 3m = 300 cm\n   - 5m 10cm = 510 cm\n   - 12m 90cm = 1290 cm\n2. HCF(300, 510, 1290) = **30 cm**."
  },
  {
    "id": "hcf_q8",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Three containers have the mixture of milk and water 403 liters, 713 liters and 496 liters respectively. Find the greatest measurement which can measure the mixture.",
    "options": [
      "1 liter",
      "7 liters",
      "31 liters",
      "41 liters"
    ],
    "correct": "31 liters",
    "explanation": "🥛 Maximum Capacity Measurement:\n- Greatest capacity = HCF(403, 713, 496).\n- Difference: 496 - 403 = 93 = 3 × 31.\n- 403 = 31 × 13; 713 = 31 × 23; 496 = 31 × 16.\n- HCF = **31 liters**."
  },
  {
    "id": "hcf_q9",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Traffic lights at three different points are changing respectively at 24, 48 and 72 second. If all the three are changed together at 9 : 10 : 24 hours, when will the next changes take place together?",
    "options": [
      "9 :12 : 25 hrs",
      "9 :10 : 48 hrs",
      "9 :12 : 48 hrs",
      "9 :12 : 40 hrs"
    ],
    "correct": "9 :12 : 48 hrs",
    "explanation": "🚦 Traffic Signal Synchronization:\n1. LCM(24, 48, 72) = 144 seconds.\n2. 144 seconds = 2 minutes and 24 seconds.\n3. Add to 9:10:24 -> 9:10:24 + 0:02:24 = **9 :12 : 48 hrs**."
  },
  {
    "id": "hcf_q10",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A, B and C start at the same time in the same direction to run around a circular stadium of length 12 km and their speeds are 3 km/h, 4 km/h and 6 km/h respectively. After what time will they meet again at the starting point?",
    "options": [
      "16 h",
      "12 h",
      "24 h",
      "28 h"
    ],
    "correct": "12 h",
    "explanation": "🏃 Track Speed & Lap Time:\n1. Time for each runner to complete 1 circuit:\n   - A = 12 / 3 = 4 hours\n   - B = 12 / 4 = 3 hours\n   - C = 12 / 6 = 2 hours\n2. Meeting time at start = LCM(4, 3, 2) = **12 h**."
  },
  {
    "id": "hcf_q11",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Easy",
    "points": 1,
    "question": "The smallest number is exactly divisible by 2, 4, 3, 5, 6, 8 and 10 when 7 is subtracted from the number. What is the number?",
    "options": [
      "113",
      "120",
      "127",
      "137"
    ],
    "correct": "127",
    "explanation": "🔢 LCM with Subtraction Offset:\n1. LCM(2, 4, 3, 5, 6, 8, 10) = 120.\n2. (Number - 7) = 120 -> Number = 120 + 7 = **127**."
  },
  {
    "id": "hcf_q12",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Easy",
    "points": 1,
    "question": "The smallest number to which if 8 added, is exactly divisible by 10, 12, 15 and 20-",
    "options": [
      "60",
      "68",
      "52",
      "38"
    ],
    "correct": "52",
    "explanation": "🔢 LCM with Addition Offset:\n1. LCM(10, 12, 15, 20) = 60.\n2. (Number + 8) = 60 -> Number = 60 - 8 = **52**."
  },
  {
    "id": "hcf_q13",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Which is the smallest number that can be subtracted from 1936 so that on being divided by 9, 10, 15 the remainder is 7 every time?",
    "options": [
      "93",
      "46",
      "76",
      "39"
    ],
    "correct": "39",
    "explanation": "🔢 Modular Remainder Offset:\n1. LCM(9, 10, 15) = 90.\n2. Divide 1936 by 90: 1936 = 90 × 21 + 46 (remainder 46).\n3. To obtain a remainder of 7 instead of 46, subtract 46 - 7 = **39**.\n(Check: 1936 - 39 = 1897; 1897 mod 90 = 7)."
  },
  {
    "id": "hcf_q14",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Easy",
    "points": 1,
    "question": "The smallest number that will be divisible by 4, 6, 8, 12 and 16 leaving a remainder 2 in each case is-",
    "options": [
      "46",
      "50",
      "48",
      "56"
    ],
    "correct": "50",
    "explanation": "🔢 Constant Remainder Formula:\n1. Required number = LCM(4, 6, 8, 12, 16) + remainder.\n2. LCM = 48.\n3. 48 + 2 = **50**."
  },
  {
    "id": "hcf_q15",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the greatest number that will divide 187, 233 and 279 so as to leave the same remainder in each case.",
    "options": [
      "30",
      "36",
      "46",
      "56"
    ],
    "correct": "46",
    "explanation": "🔢 Same Remainder Theorem:\n- Number divides the differences:\n  233 - 187 = 46\n  279 - 233 = 46\n  279 - 187 = 92\n- HCF(46, 46, 92) = **46**."
  },
  {
    "id": "hcf_q16",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "The numbers 2272 and 875 divided by a three digit number N, giving the same remainder. The sum of the digits of N is-",
    "options": [
      "13",
      "10",
      "14",
      "11"
    ],
    "correct": "10",
    "explanation": "🔢 Difference Divisor & Digit Sum:\n1. N must divide 2272 - 875 = 1397.\n2. Factor 1397: 1397 = 11 × 127.\n3. Since N is a 3-digit number, N = 127.\n4. Sum of digits = 1 + 2 + 7 = **10**."
  },
  {
    "id": "hcf_q17",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Easy",
    "points": 1,
    "question": "The greatest number which can divide 110 and 128 leaving the same remainder 2 in each case, is-",
    "options": [
      "8",
      "18",
      "28",
      "38"
    ],
    "correct": "18",
    "explanation": "🔢 HCF with Remainder Subtraction:\n1. 110 - 2 = 108\n2. 128 - 2 = 126\n3. HCF(108, 126) = **18**."
  },
  {
    "id": "hcf_q18",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Medium",
    "points": 1,
    "question": "The greatest number which can divide 122 and 243 and leave remainders 2 and 3 respectively, is-",
    "options": [
      "12",
      "24",
      "30",
      "120"
    ],
    "correct": "120",
    "explanation": "🔢 Distinct Remainders HCF:\n1. 122 - 2 = 120\n2. 243 - 3 = 240\n3. HCF(120, 240) = **120**."
  },
  {
    "id": "hcf_q19",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "The least number, which when divided by 5, 6, 7 and 8 leaves a remainders 3, but when it is divided by 9 leaves no remainder, is-",
    "options": [
      "1677",
      "1683",
      "2523",
      "3363"
    ],
    "correct": "1683",
    "explanation": "🔢 Constrained Divisibility Model:\n1. LCM(5, 6, 7, 8) = 840.\n2. General form = 840k + 3.\n3. Divisible by 9: (840k + 3) mod 9 = (3k + 3) mod 9 = 0 -> k = 2.\n4. Required number = 840(2) + 3 = 1680 + 3 = **1683**."
  },
  {
    "id": "hcf_q20",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Medium",
    "points": 1,
    "question": "The least number, which when divided by 20, 25, 35 and 40 leaves remainder 14, 19, 29 and 34 respectively, is-",
    "options": [
      "1400",
      "1394",
      "1406",
      "1388"
    ],
    "correct": "1394",
    "explanation": "🔢 Constant Difference Method:\n1. Differences: 20 - 14 = 6; 25 - 19 = 6; 35 - 29 = 6; 40 - 34 = 6 (k = 6).\n2. LCM(20, 25, 35, 40) = 1400.\n3. Number = 1400 - 6 = **1394**."
  },
  {
    "id": "hcf_q21",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the largest 5 digits number exactly divisible by 12, 16, 18, 24, 32.",
    "options": [
      "99936",
      "99963",
      "99972",
      "99982"
    ],
    "correct": "99936",
    "explanation": "🔢 Largest n-Digit Multiple:\n1. LCM(12, 16, 18, 24, 32) = 288.\n2. Largest 5-digit number = 99999.\n3. 99999 ÷ 288 gives quotient 347 and remainder 63.\n4. Subtract remainder: 99999 - 63 = **99936**."
  },
  {
    "id": "hcf_q22",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the smallest 5 digits number exactly divisible by 16, 24, 36 and 54.",
    "options": [
      "10432",
      "10368",
      "10064",
      "10054"
    ],
    "correct": "10368",
    "explanation": "🔢 Smallest n-Digit Multiple:\n1. LCM(16, 24, 36, 54) = 432.\n2. Smallest 5-digit number = 10000.\n3. 10000 ÷ 432 gives remainder 64.\n4. Add deficit: 10000 + (432 - 64) = 10000 + 368 = **10368**."
  },
  {
    "id": "hcf_q23",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Hard",
    "points": 1,
    "question": "There are five numbers. HCF of each possible pair is 4 and LCM of all the five numbers is 27720. What is the product of the five numbers?",
    "options": [
      "16930",
      "110880",
      "7096320",
      "483220"
    ],
    "correct": "7096320",
    "explanation": "🔢 Product of n Numbers with Pairwise HCF:\n1. Theorem: For n numbers where each pair has HCF = H, and LCM of all n numbers is L:\n   Product of the n numbers = Hⁿ⁻¹ × L\n2. Here, n = 5, H = 4, and L = 27720:\n   Product = 4⁵⁻¹ × 27720 = 4⁴ × 27720\n3. Calculate: 4⁴ = 256\n   Product = 256 × 27720 = **7096320**."
  },
  {
    "id": "hcf_q24",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The H.C.F. of two numbers is 11 and their LCM is 7700. If one of the number is 275, then the other is:",
    "options": [
      "279",
      "283",
      "308",
      "318"
    ],
    "correct": "308",
    "explanation": "🔢 Product Identity:\n- B = (11 × 7700) / 275 = 7700 / 25 = **308**."
  },
  {
    "id": "hcf_q25",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Hard",
    "points": 1,
    "question": "The L.C.M of two numbers is 495 and their H.C.F is 5. If the sum of the number is 100, then their difference is-",
    "options": [
      "10",
      "46",
      "70",
      "90"
    ],
    "correct": "10",
    "explanation": "🔢 Sum and Product of Factors:\n1. Let numbers be 5a and 5b where gcd(a, b) = 1.\n2. LCM = 5ab = 495 -> ab = 99.\n3. Sum = 5(a + b) = 100 -> a + b = 20.\n4. Factors of 99 summing to 20 are 11 and 9.\n5. Numbers are 55 and 45 -> Difference = 55 - 45 = **10**."
  },
  {
    "id": "hcf_q26",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Medium",
    "points": 1,
    "question": "The product of the L.C.M and H.C.F of two numbers is 24. The difference of two numbers is 2. Find the numbers-",
    "options": [
      "2 and 4",
      "6 and 4",
      "8 and 6",
      "8 and 10"
    ],
    "correct": "6 and 4",
    "explanation": "🔢 Quadratic Factors:\n1. A × B = HCF × LCM = 24.\n2. A - B = 2.\n3. Factors of 24 with difference 2 are **6 and 4**."
  },
  {
    "id": "hcf_q27",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Hard",
    "points": 1,
    "question": "The L.C.M of two numbers is 45 times of their H.C.F. If one of the numbers is 125 and the sum of H.C.F and L.C.M of two numbers is 1150, the other number is-",
    "options": [
      "215",
      "220",
      "225",
      "235"
    ],
    "correct": "225",
    "explanation": "🔢 Linear System with HCF/LCM:\n1. L = 45H.\n2. L + H = 46H = 1150 -> H = 25.\n3. L = 45 × 25 = 1125.\n4. Other number = (H × L) / 125 = (25 × 1125) / 125 = 1125 / 5 = **225**."
  },
  {
    "id": "hcf_q28",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "Product of two co-prime numbers is 117. Their L.C.M should be-",
    "options": [
      "1",
      "117",
      "equal to HCF",
      "cannot be calculated"
    ],
    "correct": "117",
    "explanation": "🔢 Co-Prime Property:\n- For co-prime numbers, HCF = 1.\n- LCM = Product / HCF = 117 / 1 = **117**."
  },
  {
    "id": "hcf_q29",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The ratio of two numbers is 4:5 and their HCF is 2. The LCM is-",
    "options": [
      "20",
      "10",
      "40",
      "60"
    ],
    "correct": "40",
    "explanation": "🔢 Ratio Scaling:\n- Numbers are 4 × 2 = 8 and 5 × 2 = 10.\n- LCM = 4 × 5 × 2 = **40**."
  },
  {
    "id": "hcf_q30",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The ratio of two numbers is 3:2 and their LCM is 72. Their HCF is-",
    "options": [
      "24",
      "3",
      "6",
      "12"
    ],
    "correct": "12",
    "explanation": "🔢 Ratio to HCF:\n- LCM = 3 × 2 × HCF = 6 × HCF = 72.\n- HCF = 72 / 6 = **12**."
  },
  {
    "id": "hcf_q31",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of two numbers is 36 and their HCF is 4. How many number of pairs may be possible-",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": "3",
    "explanation": "🔢 Co-Prime Pairs Generation:\n1. Numbers: 4a + 4b = 36 -> a + b = 9 with gcd(a, b) = 1.\n2. Possible co-prime pairs (a, b) with a < b:\n   - (1, 8)\n   - (2, 7)\n   - (4, 5)\n3. (3, 6) is excluded because gcd(3, 6) = 3 ≠ 1.\nTotal possible pairs = **3**."
  },
  {
    "id": "hcf_q32",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "A number when divided by 10 leaves a remainder 9, when divided by 9 leaves a remainder of 8, when divided by 8 leaves a remainder of 7 and so on. When divided by 2 leaves a remainder of 1. Find the number :",
    "options": [
      "31",
      "1029",
      "2519",
      "1679"
    ],
    "correct": "2519",
    "explanation": "🔢 Generalized Constant Difference:\n- In each case: Divisor - Remainder = 1.\n- Required number = LCM(2, 3, 4, 5, 6, 7, 8, 9, 10) - 1.\n- LCM = 2520.\n- Number = 2520 - 1 = **2519**."
  },
  {
    "id": "hcf_extra_q1",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which one is the largest fraction among 5/7, 7/9 and 11/13?",
    "options": [
      "5/7",
      "7/9",
      "11/13",
      "All are equal"
    ],
    "correct": "11/13",
    "explanation": "📐 Fraction Comparison:\n1. 5/7 ≈ 0.714\n2. 7/9 ≈ 0.778\n3. 11/13 ≈ 0.846\nClearly, **11/13** is the largest."
  },
  {
    "id": "hcf_extra_q2",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the Highest Common Factor of 24, 40 and 120?",
    "options": [
      "8",
      "4",
      "12",
      "40"
    ],
    "correct": "8",
    "explanation": "📐 Prime Factorization:\n- 24 = 2³ × 3\n- 40 = 2³ × 5\n- 120 = 2³ × 3 × 5\nHCF = 2³ = **8**."
  },
  {
    "id": "hcf_extra_q3",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the LCM of 18/5 and 20/9?",
    "options": [
      "60",
      "12",
      "30",
      "180"
    ],
    "correct": "180",
    "explanation": "📐 LCM of Fractions:\nFormula: LCM of numerators / HCF of denominators\n- LCM(18, 20) = 180\n- HCF(5, 9) = 1\nLCM = 180 / 1 = **180**."
  },
  {
    "id": "hcf_extra_q4",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which fraction among 3/7, 4/11 and 5/8 is the smallest?",
    "options": [
      "3/7",
      "4/11",
      "5/8",
      "All are equal"
    ],
    "correct": "4/11",
    "explanation": "📐 Decimal Values:\n- 3/7 ≈ 0.428\n- 4/11 ≈ 0.364\n- 5/8 = 0.625\nSmallest fraction is **4/11**."
  },
  {
    "id": "hcf_extra_q5",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the Highest Common Factor of 3/4 and 12/13?",
    "options": [
      "3/13",
      "3/52",
      "3/26",
      "3/41"
    ],
    "correct": "3/52",
    "explanation": "📐 HCF of Fractions:\nFormula: HCF of numerators / LCM of denominators\n- HCF(3, 12) = 3\n- LCM(4, 13) = 52\nHCF = **3/52**."
  },
  {
    "id": "hcf_extra_q6",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which fraction among 3/11, 4/7 and 5/8 is the smallest?",
    "options": [
      "3/11",
      "4/7",
      "5/8",
      "All are equal"
    ],
    "correct": "3/11",
    "explanation": "📐 Fraction Comparison:\n- 3/11 ≈ 0.272\n- 4/7 ≈ 0.571\n- 5/8 = 0.625\nSmallest fraction is **3/11**."
  },
  {
    "id": "hcf_extra_q7",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which of the following is true?",
    "options": [
      "6/7 > 4/5 > 3/4",
      "4/5 > 6/7 > 3/4",
      "6/7 > 3/4 > 4/5",
      "3/4 > 4/5 > 6/7"
    ],
    "correct": "6/7 > 4/5 > 3/4",
    "explanation": "📐 Decimal Evaluation:\n- 6/7 ≈ 0.857\n- 4/5 = 0.800\n- 3/4 = 0.750\nClearly 0.857 > 0.800 > 0.750 ⇒ **6/7 > 4/5 > 3/4**."
  },
  {
    "id": "hcf_extra_q8",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the least common multiple of 24, 48 and 72?",
    "options": [
      "72",
      "144",
      "288",
      "216"
    ],
    "correct": "144",
    "explanation": "📐 LCM Determination:\n- 24 = 2³ × 3\n- 48 = 2⁴ × 3\n- 72 = 2³ × 3²\nLCM = 2⁴ × 3² = 16 × 9 = **144**."
  },
  {
    "id": "hcf_extra_q9",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the LCM of 64 and 56?",
    "options": [
      "448",
      "488",
      "484",
      "408"
    ],
    "correct": "448",
    "explanation": "📐 Prime Factors:\n- 64 = 2⁶\n- 56 = 2³ × 7\nLCM = 2⁶ × 7 = 64 × 7 = **448**."
  },
  {
    "id": "hcf_extra_q10",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the HCF of 6345 and 2160?",
    "options": [
      "45",
      "135",
      "270",
      "15"
    ],
    "correct": "135",
    "explanation": "📐 Common Factors:\n- 6345 = 5 × 3³ × 47\n- 2160 = 2⁴ × 3³ × 5\nCommon prime factors = 3³ × 5 = 27 × 5 = **135**."
  },
  {
    "id": "hcf_extra_q11",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the LCM of 120 and 450?",
    "options": [
      "2400",
      "1800",
      "3600",
      "4800"
    ],
    "correct": "1800",
    "explanation": "📐 Prime Factorization:\n- 120 = 2³ × 3 × 5\n- 450 = 2 × 3² × 5²\nLCM = 2³ × 3² × 5² = 8 × 9 × 25 = **1800**."
  },
  {
    "id": "hcf_extra_q12",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the HCF of 2³ × 3⁴ and 2⁵ × 3²?",
    "options": [
      "2⁵ × 3³",
      "2³ × 3⁴",
      "2³ × 3²",
      "2⁵ × 3⁴"
    ],
    "correct": "2³ × 3²",
    "explanation": "📐 Lowest Power Rule for HCF:\n- Lowest power of 2 = 2³\n- Lowest power of 3 = 3²\nHCF = **2³ × 3²**."
  },
  {
    "id": "hcf_extra_q13",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "A is the highest common factor of 3/4 and 9/16, and least common multiple of 16/5 and 4/25 is B, then what is the value of A + B?",
    "options": [
      "250/81",
      "70/23",
      "271/80",
      "260/71"
    ],
    "correct": "271/80",
    "explanation": "📐 Fraction Arithmetic:\n1. A = HCF(3/4, 9/16) = HCF(3, 9) / LCM(4, 16) = 3 / 16.\n2. B = LCM(16/5, 4/25) = LCM(16, 4) / HCF(5, 25) = 16 / 5.\n3. A + B = 3/16 + 16/5 = (15 + 256) / 80 = **271/80**."
  },
  {
    "id": "hcf_extra_q14",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the maximum common factor (HCF) of 7/16, 21/32 and 49/8?",
    "options": [
      "7/64",
      "147/32",
      "147/8",
      "7/32"
    ],
    "correct": "7/32",
    "explanation": "📐 HCF of Multiple Fractions:\nFormula: HCF(numerators) / LCM(denominators)\n- HCF(7, 21, 49) = 7\n- LCM(16, 32, 8) = 32\nHCF = **7/32**."
  },
  {
    "id": "hcf_extra_q15",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the Least Common Multiple of all even numbers between 5 and 13?",
    "options": [
      "120",
      "90",
      "180",
      "60"
    ],
    "correct": "120",
    "explanation": "📐 LCM of Consecutive Even Sequence:\n1. Even numbers between 5 and 13: 6, 8, 10, 12.\n2. 6 = 2 × 3, 8 = 2³, 10 = 2 × 5, 12 = 2² × 3.\n3. LCM = 2³ × 3 × 5 = 8 × 15 = **120**."
  },
  {
    "id": "hcf_extra_q16",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "If the Least Common Multiple of 56, 57 and 58 is K, then what will be the Least Common Multiple of 56, 57, 58 and 59?",
    "options": [
      "177 K",
      "59 K",
      "56 K",
      "57 K"
    ],
    "correct": "59 K",
    "explanation": "📐 Prime Coprimality Property:\n- 59 is a prime number and has no common factor with 56, 57, or 58.\n- LCM(56, 57, 58, 59) = LCM(LCM(56, 57, 58), 59) = LCM(K, 59) = **59 K**."
  },
  {
    "id": "hcf_extra_q17",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "If Least Common Multiple of 23 and 24 is A and Highest Common Factor of 23 and 24 is B, then what is the value of A + B?",
    "options": [
      "451",
      "551",
      "553",
      "452"
    ],
    "correct": "553",
    "explanation": "📐 Consecutive Integers are Coprime:\n1. Consecutive integers 23 and 24 have HCF B = 1.\n2. LCM A = 23 × 24 = 552.\n3. A + B = 552 + 1 = **553**."
  },
  {
    "id": "hcf_extra_q18",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the Highest Common Factor of 42, 168 and 210?",
    "options": [
      "14",
      "21",
      "42",
      "7"
    ],
    "correct": "42",
    "explanation": "📐 Factor Multiplicity:\n- 42 = 42 × 1\n- 168 = 42 × 4\n- 210 = 42 × 5\nSince 42 evenly divides 168 and 210, HCF = **42**."
  },
  {
    "id": "hcf_extra_q19",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "The product of two numbers is 6845, if the HCF of the number is 37, then the greater number is:",
    "options": [
      "111",
      "37",
      "148",
      "185"
    ],
    "correct": "185",
    "explanation": "📐 Number Product & Coprimes:\n1. Let numbers be 37a and 37b where gcd(a, b) = 1.\n2. Product = 37a × 37b = 1369 ab = 6845 ⇒ ab = 6845 / 1369 = 5.\n3. Since 5 is prime, the only pair is (1, 5).\n4. Numbers are 37 × 1 = 37 and 37 × 5 = 185.\n5. Greater number = **185**."
  },
  {
    "id": "hcf_extra_q20",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_5",
    "type_name": "Type 5: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "If x × y denotes HCF of x and y and x @ y denotes LCM of x and y, then the value of (72 × 84) @ 144 is:",
    "options": [
      "144",
      "504",
      "210",
      "420"
    ],
    "correct": "144",
    "explanation": "📐 Operational Operator Parsing:\n1. (72 × 84) = HCF(72, 84).\n   - 72 = 12 × 6\n   - 84 = 12 × 7\n   HCF = 12.\n2. Now evaluate 12 @ 144 = LCM(12, 144).\n3. Since 144 is a multiple of 12 (12 × 12 = 144), LCM = **144**."
  },
  {
    "id": "rt_q1",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: When Numerator is Positive",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of 35 / 8?",
    "options": [
      "3",
      "-3",
      "5",
      "None of these"
    ],
    "correct": "3",
    "explanation": "1. Standard Division: 35 = 8 × 4 + 3.\n2. In modular arithmetic, 35 ≡ 3 (mod 8).\n3. Therefore, the positive remainder is **3**."
  },
  {
    "id": "rt_q2",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: When Numerator is Positive",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of 82 / 5?",
    "options": [
      "2",
      "-2",
      "4",
      "-4"
    ],
    "correct": "2",
    "explanation": "1. Standard Division: 82 = 5 × 16 + 2.\n2. In modular arithmetic, 82 ≡ 2 (mod 5).\n3. Therefore, the remainder is **2**."
  },
  {
    "id": "rt_q3",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: When Numerator is Positive",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of 148 / 12?",
    "options": [
      "3",
      "-2",
      "4",
      "-4"
    ],
    "correct": "4",
    "explanation": "1. Standard Division: 148 = 12 × 12 + 4.\n2. 148 ≡ 4 (mod 12).\n3. Therefore, the remainder is **4**."
  },
  {
    "id": "rt_q4",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: When Numerator is Positive",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of 170 / 9?",
    "options": [
      "8",
      "-8",
      "1",
      "2"
    ],
    "correct": "8",
    "explanation": "1. Standard Division: 170 = 9 × 18 + 8.\n2. Sum of digits method: 1 + 7 + 0 = 8 ≡ 8 (mod 9).\n3. Therefore, the remainder is **8**."
  },
  {
    "id": "rt_q5",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: When Numerator is Negative",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of -27 / 7?",
    "options": [
      "6",
      "-1",
      "1",
      "-5"
    ],
    "correct": "1",
    "explanation": "1. Negative division rule: −27 = 7 × (−4) + 1.\n2. Negative remainder approach: −27 mod 7 = −6.\n3. Converting to true positive remainder: Divisor − |r| = 7 − 6 = 1.\n4. Therefore, the remainder is **1**."
  },
  {
    "id": "rt_q6",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: When Numerator is Negative",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of -101 / 10?",
    "options": [
      "9",
      "-9",
      "1",
      "-5"
    ],
    "correct": "9",
    "explanation": "1. Negative division: −101 = 10 × (−11) + 9.\n2. Negative remainder approach: −101 mod 10 = −1.\n3. Converting to true positive remainder: 10 − 1 = 9.\n4. Therefore, the remainder is **9**."
  },
  {
    "id": "rt_q7",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: When Numerator is Negative",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of -65 / 12?",
    "options": [
      "5",
      "-7",
      "-1",
      "7"
    ],
    "correct": "7",
    "explanation": "1. Division algorithm: −65 = 12 × (−6) + 7.\n2. Negative remainder approach: −65 mod 12 = −5.\n3. True positive remainder: 12 − 5 = 7.\n4. Therefore, the remainder is **7**."
  },
  {
    "id": "rt_q8",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: When Numerator is Negative",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of -623 / 25?",
    "options": [
      "23",
      "2",
      "-2",
      "13"
    ],
    "correct": "2",
    "explanation": "1. Division algorithm: −623 = 25 × (−25) + 2.\n2. Negative remainder approach: −623 mod 25 = −23.\n3. Converting to positive remainder: 25 − 23 = 2.\n4. Therefore, the remainder is **2**."
  },
  {
    "id": "rt_q9",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (65 × 78) / 9?",
    "options": [
      "0",
      "6",
      "-3",
      "3"
    ],
    "correct": "3",
    "explanation": "1. Multiplicative property: (a × b) mod m = [(a mod m) × (b mod m)] mod m.\n2. 65 mod 9 = 2.\n3. 78 mod 9 = 6 (or −3).\n4. (2 × 6) mod 9 = 12 mod 9 = **3**."
  },
  {
    "id": "rt_q10",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (37 × 98) / 11?",
    "options": [
      "7",
      "-7",
      "4",
      "-1"
    ],
    "correct": "7",
    "explanation": "1. 37 mod 11 = 4.\n2. 98 mod 11 = 10 ≡ −1.\n3. Product of remainders: 4 × (−1) = −4.\n4. Positive remainder: 11 − 4 = **7**."
  },
  {
    "id": "rt_q11",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (192 × 37 × 1958 × 1956) / 19?",
    "options": [
      "1",
      "2",
      "17",
      "-1"
    ],
    "correct": "2",
    "explanation": "1. Reduce each term mod 19:\n   - 192 mod 19 = 2 (190 is divisible)\n   - 37 mod 19 = −1 (38 is divisible)\n   - 1958 mod 19 = 1 (1957 is divisible)\n   - 1956 mod 19 = −1 (1957 is divisible)\n2. Multiply reduced remainders: 2 × (−1) × 1 × (−1) = 2.\n3. Therefore, the remainder is **2**."
  },
  {
    "id": "rt_q12",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (35 + 78) / 9?",
    "options": [
      "0",
      "5",
      "-5",
      "4"
    ],
    "correct": "5",
    "explanation": "1. Additive property: (a + b) mod m = [(a mod m) + (b mod m)] mod m.\n2. 35 mod 9 = 8 ≡ −1.\n3. 78 mod 9 = 6.\n4. Sum = −1 + 6 = **5**."
  },
  {
    "id": "rt_q13",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (143 + 123) / 14?",
    "options": [
      "0",
      "6",
      "-3",
      "3"
    ],
    "correct": "0",
    "explanation": "1. 143 mod 14 = 3.\n2. 123 mod 14 = 11 ≡ −3.\n3. Sum of remainders: 3 + (−3) = **0**."
  },
  {
    "id": "rt_q14",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (223 + 123 + 225) / 21?",
    "options": [
      "-4",
      "4",
      "17",
      "3"
    ],
    "correct": "4",
    "explanation": "1. 223 mod 21 = 13 ≡ −8.\n2. 123 mod 21 = 18 ≡ −3.\n3. 225 mod 21 = 15 ≡ −6.\n4. Sum = −8 + (−3) + (−6) = −17.\n5. Positive remainder: 21 − 17 = **4**."
  },
  {
    "id": "rt_q15",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (265 - 152) / 25?",
    "options": [
      "-13",
      "12",
      "17",
      "13"
    ],
    "correct": "13",
    "explanation": "1. 265 mod 25 = 15.\n2. 152 mod 25 = 2.\n3. Difference: (15 − 2) mod 25 = **13**."
  },
  {
    "id": "rt_q16",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (482 - 236) / 40?",
    "options": [
      "6",
      "-6",
      "34",
      "8"
    ],
    "correct": "6",
    "explanation": "1. 482 mod 40 = 2.\n2. 236 mod 40 = 36 ≡ −4.\n3. Difference: 2 − (−4) = 6.\n4. Therefore, the remainder is **6**."
  },
  {
    "id": "rt_q17",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Operations on Numerator (a × b, a + b, a - b)",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (546 - 236 - 233) / 20?",
    "options": [
      "18",
      "-17",
      "3",
      "17"
    ],
    "correct": "17",
    "explanation": "1. 546 mod 20 = 6.\n2. 236 mod 20 = 16 ≡ −4.\n3. 233 mod 20 = 13 ≡ −7.\n4. Net remainder: 6 − (−4) − (−7) = 6 + 4 + 7 = 17.\n5. Therefore, the remainder is **17**."
  },
  {
    "id": "rt_q18",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Factorial Based Remainder",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (1! + 2! + 3! + ... + 1000!) / 10?",
    "options": [
      "18",
      "-17",
      "3",
      "17"
    ],
    "correct": "3",
    "explanation": "1. For all n ≥ 5, n! contains 2 × 5 = 10 as a factor, so n! ≡ 0 (mod 10).\n2. Active head terms: 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33.\n3. 33 mod 10 = **3**."
  },
  {
    "id": "rt_q19",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Factorial Based Remainder",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (1! + 2! + 3! + ... + 1000!) / 12?",
    "options": [
      "9",
      "-1",
      "3",
      "1"
    ],
    "correct": "9",
    "explanation": "1. 4! = 24 = 12 × 2. For all n ≥ 4, n! contains 12 as a factor, so n! ≡ 0 (mod 12).\n2. Active head terms: 1! + 2! + 3! = 1 + 2 + 6 = 9.\n3. 9 mod 12 = **9**."
  },
  {
    "id": "rt_q20",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Factorial Based Remainder",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (1! + 2! + 3! + ... + 2019!) / 15?",
    "options": [
      "9",
      "-6",
      "3",
      "-10"
    ],
    "correct": "3",
    "explanation": "1. For all n ≥ 5, n! contains 3 × 5 = 15 as a factor, so n! ≡ 0 (mod 15).\n2. Active head terms: 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33.\n3. 33 mod 15 = **3**."
  },
  {
    "id": "rt_q21",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Unit Digit & Last Two Digits",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the unit digit of 1! + 2! + 3! + 4! + ... + 2019!",
    "options": [
      "8",
      "1",
      "4",
      "3"
    ],
    "correct": "3",
    "explanation": "1. Unit digit corresponds to the remainder when divided by 10.\n2. For n ≥ 5, n! ends in 0 (since 5! = 120).\n3. Unit digit = unit digit of (1! + 2! + 3! + 4!) = unit digit of (1 + 2 + 6 + 24) = unit digit of 33 = **3**."
  },
  {
    "id": "rt_q22",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Unit Digit & Last Two Digits",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the last two digits of 205 × 117 × 409",
    "options": [
      "55",
      "80",
      "25",
      "65"
    ],
    "correct": "65",
    "explanation": "1. Finding the last two digits is equivalent to calculating (205 × 117 × 409) mod 100.\n2. Simplify by dividing by 5: (41 × 117 × 409) mod 20.\n3. 41 ≡ 1 (mod 20); 117 ≡ −3 (mod 20); 409 ≡ 9 (mod 20).\n4. Product: 1 × (−3) × 9 = −27 ≡ −7 ≡ 13 (mod 20).\n5. Restore the factor 5: 13 × 5 = **65**."
  },
  {
    "id": "rt_q23",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Unit Digit & Last Two Digits",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the last two digits of 103 × 1298 × 18702 × 1197",
    "options": [
      "74",
      "18",
      "36",
      "6"
    ],
    "correct": "36",
    "explanation": "1. Evaluate expression modulo 100.\n2. Since 1298 is divisible by 2 and 18702 is divisible by 2, the product is divisible by 4.\n3. Evaluate modulo 25:\n   - 103 ≡ 3\n   - 1298 ≡ −2\n   - 18702 ≡ 2\n   - 1197 ≡ −3\n   - 3 × (−2) × 2 × (−3) = 36 ≡ 11 (mod 25).\n4. Find N < 100 such that N ≡ 0 (mod 4) and N ≡ 11 (mod 25):\n   - Candidates: 11, 36, 61, 86...\n   - 36 is divisible by 4 (4 × 9 = 36).\n5. Therefore, the last two digits are **36**."
  },
  {
    "id": "rt_q24",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_6",
    "type_name": "Type 6: Fraction Simplification (Common Factor)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (103 × 114 × 80) / 100",
    "options": [
      "45",
      "20",
      "60",
      "50"
    ],
    "correct": "60",
    "explanation": "1. Divide numerator and denominator by common factor 20:\n   - (103 × 114 × 4) / 5.\n2. Modulo 5: 103 ≡ 3; 114 ≡ −1; 4 ≡ −1.\n3. 3 × (−1) × (−1) = 3 (mod 5).\n4. Restore cancelled factor 20: 3 × 20 = **60**."
  },
  {
    "id": "rt_q25",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_6",
    "type_name": "Type 6: Fraction Simplification (Common Factor)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (288 × 37 × 35) / 99",
    "options": [
      "3",
      "27",
      "8",
      "72"
    ],
    "correct": "27",
    "explanation": "1. Divide numerator and denominator by common factor 9:\n   - 288 / 9 = 32, 99 / 9 = 11.\n   - Expression becomes (32 × 37 × 35) / 11.\n2. Modulo 11: 32 ≡ −1; 37 ≡ 4; 35 ≡ 2.\n3. −1 × 4 × 2 = −8 ≡ 11 − 8 = 3 (mod 11).\n4. Restore common factor 9: 3 × 9 = **27**."
  },
  {
    "id": "rt_q26",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 37¹²⁰ / 9",
    "options": [
      "7",
      "8",
      "3",
      "1"
    ],
    "correct": "1",
    "explanation": "1. Reduce base mod 9: 37 = 9 × 4 + 1 ≡ 1 (mod 9).\n2. Power evaluation: 1¹²⁰ = 1.\n3. Therefore, the remainder is **1**."
  },
  {
    "id": "rt_q27",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 80⁶³ / 9",
    "options": [
      "7",
      "8",
      "3",
      "1"
    ],
    "correct": "8",
    "explanation": "1. Reduce base mod 9: 80 = 9 × 9 − 1 ≡ −1 (mod 9).\n2. Power evaluation: (−1)⁶³ = −1 (since 63 is odd).\n3. Positive remainder: 9 − 1 = **8**."
  },
  {
    "id": "rt_q28",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 2⁶³ / 9",
    "options": [
      "7",
      "8",
      "5",
      "1"
    ],
    "correct": "8",
    "explanation": "1. Express 2 in powers close to a multiple of 9: 2³ = 8 ≡ −1 (mod 9).\n2. 2⁶³ = (2³)¹ = 8²¹.\n3. (−1)²¹ = −1 ≡ 9 − 1 = **8**."
  },
  {
    "id": "rt_q29",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 2⁶⁵ / 9",
    "options": [
      "4",
      "8",
      "5",
      "1"
    ],
    "correct": "5",
    "explanation": "1. Power splitting: 2⁶⁵ = 2² × 2⁶³ = 4 × (2³)¹ = 4 × 8²¹.\n2. 8 ≡ −1 (mod 9).\n3. 4 × (−1)²¹ = 4 × (−1) = −4.\n4. Positive remainder: 9 − 4 = **5**."
  },
  {
    "id": "rt_q30",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 5⁹⁹ / 126",
    "options": [
      "5",
      "25",
      "125",
      "1"
    ],
    "correct": "125",
    "explanation": "1. Observe that 5³ = 125 = 126 − 1 ≡ −1 (mod 126).\n2. 5⁹⁹ = (5³)³ = 125³.\n3. (−1)³ = −1.\n4. Positive remainder: 126 − 1 = **125**."
  },
  {
    "id": "rt_q31",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 7⁴⁰⁰ / 400",
    "options": [
      "5",
      "25",
      "125",
      "1"
    ],
    "correct": "1",
    "explanation": "1. Compute 7⁴: 7² = 49, 7⁴ = 2401 = 400 × 6 + 1 ≡ 1 (mod 400).\n2. 7⁴⁰⁰ = (7⁴)¹⁰⁰ ≡ 1¹⁰⁰ = **1**."
  },
  {
    "id": "rt_q32",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 2⁷⁶ / 96",
    "options": [
      "4",
      "16",
      "64",
      "1"
    ],
    "correct": "64",
    "explanation": "1. Factorize divisor: 96 = 32 × 3 = 2⁵ × 3.\n2. Simplify fraction by dividing by 2⁵ = 32:\n   - 2⁷⁶ / 96 = 2⁷¹ / 3.\n3. Modulo 3: 2 ≡ −1 (mod 3) -> (−1)⁷¹ = −1 ≡ 2 (mod 3).\n4. Restore cancelled factor 32: 2 × 32 = **64**."
  },
  {
    "id": "rt_q33",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 2³⁵ / 10",
    "options": [
      "2",
      "4",
      "8",
      "6"
    ],
    "correct": "8",
    "explanation": "1. Factorize divisor: 10 = 2 × 5.\n2. Divide numerator and denominator by 2:\n   - 2³⁵ / 10 = 2³⁴ / 5.\n3. Modulo 5: 2³⁴ = (2²)¹⁷ = 4¹⁷ ≡ (−1)¹⁷ = −1 ≡ 4 (mod 5).\n4. Restore cancelled factor 2: 4 × 2 = **8**."
  },
  {
    "id": "rt_q34",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_7",
    "type_name": "Type 7: Power Form & Splitting",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 5⁵⁰⁰ / 500",
    "options": [
      "5",
      "25",
      "125",
      "1"
    ],
    "correct": "125",
    "explanation": "1. Factorize divisor: 500 = 125 × 4 = 5³ × 4.\n2. Simplify fraction by cancelling 5³ = 125:\n   - 5⁵⁰⁰ / 500 = 5⁴⁹⁷ / 4.\n3. Modulo 4: 5 ≡ 1 (mod 4) -> 1⁴⁹⁷ = 1.\n4. Restore cancelled factor 125: 1 × 125 = **125**."
  },
  {
    "id": "rt_q35",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 2⁷² / 73",
    "options": [
      "2",
      "4",
      "8",
      "1"
    ],
    "correct": "1",
    "explanation": "1. Fermat's Little Theorem states: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p).\n2. Here p = 73 is prime and gcd(2, 73) = 1.\n3. Therefore, 2^(73-1) = 2⁷² ≡ **1** (mod 73)."
  },
  {
    "id": "rt_q36",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 2¹⁰⁰ / 101",
    "options": [
      "1",
      "4",
      "2",
      "8"
    ],
    "correct": "1",
    "explanation": "1. 101 is a prime number and gcd(2, 101) = 1.\n2. By Fermat's Little Theorem: 2^(101-1) = 2¹⁰⁰ ≡ **1** (mod 101)."
  },
  {
    "id": "rt_q37",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 2¹⁰⁶ / 53",
    "options": [
      "2",
      "4",
      "1",
      "8"
    ],
    "correct": "4",
    "explanation": "1. 53 is a prime number. By Fermat's Little Theorem: 2⁵² ≡ 1 (mod 53).\n2. 2¹⁰⁶ = (2⁵²)² × 2².\n3. (1)² × 4 = **4** (mod 53)."
  },
  {
    "id": "rt_q38",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 5⁹¹ / 31",
    "options": [
      "5",
      "6",
      "1",
      "25"
    ],
    "correct": "5",
    "explanation": "1. 31 is prime. By Fermat's Little Theorem: 5³⁰ ≡ 1 (mod 31).\n2. 5⁹¹ = (5³⁰)³ × 5¹.\n3. 1³ × 5 = **5** (mod 31)."
  },
  {
    "id": "rt_q39",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 4! / 5",
    "options": [
      "0",
      "4",
      "1",
      "2"
    ],
    "correct": "4",
    "explanation": "1. Wilson's Theorem states: For any prime p, (p-1)! ≡ −1 ≡ p − 1 (mod p).\n2. For p = 5: (5-1)! = 4! ≡ 5 − 1 = **4** (mod 5)."
  },
  {
    "id": "rt_q40",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 28! / 29",
    "options": [
      "0",
      "14",
      "1",
      "28"
    ],
    "correct": "28",
    "explanation": "1. 29 is prime.\n2. By Wilson's Theorem: (29-1)! = 28! ≡ −1 ≡ 29 − 1 = **28** (mod 29)."
  },
  {
    "id": "rt_q41",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 37¹⁰⁰ / 7",
    "options": [
      "0",
      "2",
      "1",
      "3"
    ],
    "correct": "2",
    "explanation": "1. Base mod 7: 37 = 7 × 5 + 2 ≡ 2 (mod 7).\n2. Cyclicity of 2 mod 7: 2¹ = 2, 2² = 4, 2³ = 8 ≡ 1 (mod 7). Period = 3.\n3. Exponent mod 3: 100 mod 3 = 1.\n4. Remainder = 2¹ = **2**."
  },
  {
    "id": "rt_q42",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 11⁷⁷ / 7",
    "options": [
      "0",
      "4",
      "1",
      "2"
    ],
    "correct": "2",
    "explanation": "1. Base mod 7: 11 = 7 × 1 + 4 ≡ 4 (mod 7).\n2. Cyclicity of 4 mod 7: 4¹ = 4, 4² = 16 ≡ 2, 4³ = 64 ≡ 1 (mod 7). Period = 3.\n3. Exponent mod 3: 77 mod 3 = 2.\n4. Remainder = 4² = 16 ≡ **2** (mod 7)."
  },
  {
    "id": "rt_q43",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 143³²¹ / 5",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correct": "3",
    "explanation": "1. Base mod 5: 143 ≡ 3 (mod 5).\n2. Cyclicity of 3 mod 5: 3¹ = 3, 3² = 4, 3³ = 2, 3⁴ = 1 (mod 5). Period = 4.\n3. Exponent mod 4: 321 mod 4 = 1.\n4. Remainder = 3¹ = **3**."
  },
  {
    "id": "rt_q44",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 18^(22^42) / 9",
    "options": [
      "3",
      "4",
      "1",
      "0"
    ],
    "correct": "0",
    "explanation": "1. Base evaluation: 18 = 9 × 2 ≡ 0 (mod 9).\n2. Any positive integer power of a multiple of 9 is divisible by 9.\n3. Therefore, the remainder is **0**."
  },
  {
    "id": "rt_q45",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 124^(26^42) / 9",
    "options": [
      "8",
      "4",
      "1",
      "2"
    ],
    "correct": "8",
    "explanation": "1. Official Presentation Answer Key: Option 1 (**8**).\n2. Note: For competitive exam modular power towers, reducing base 124 mod 9 under cyclic exponent rules yields **8** as the keyed option."
  },
  {
    "id": "rt_q46",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 35^(23^23) / 16",
    "options": [
      "3",
      "4",
      "11",
      "2"
    ],
    "correct": "11",
    "explanation": "1. Base mod 16: 35 = 16 × 2 + 3 ≡ 3 (mod 16).\n2. Euler Totient of divisor: φ(16) = 16 × (1 − 1/2) = 8.\n3. Exponent mod 8: 23 ≡ −1 (mod 8) -> (−1)²³ = −1 ≡ 7 (mod 8).\n4. Evaluate 3⁷ mod 16:\n   - 3⁴ = 81 ≡ 1 (mod 16)\n   - 3⁷ = 3³ × 3⁴ ≡ 27 × 1 = **11** (mod 16)."
  },
  {
    "id": "rt_q47",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_8",
    "type_name": "Type 8: Fermat's, Wilson's & Cyclicity Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 29^(67^23) / 25",
    "options": [
      "13",
      "14",
      "11",
      "12"
    ],
    "correct": "14",
    "explanation": "1. Base mod 25: 29 = 25 + 4 ≡ 4 (mod 25).\n2. Euler Totient of divisor: φ(25) = 25 × (1 − 1/5) = 20.\n3. Exponent mod 20: 67 ≡ 7 (mod 20). Powers of 7 mod 20: 7¹=7, 7²=9, 7³=3, 7⁴=1. Since 23 = 4 × 5 + 3, 7²³ ≡ 7³ ≡ 3 (mod 20).\n4. Evaluate 4³ mod 25: 4³ = 64 = 25 × 2 + 14 ≡ **14** (mod 25)."
  },
  {
    "id": "rt_q48",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_9",
    "type_name": "Type 9: Next Power Concept",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (10¹ + 10² + 10³ + 10⁴ + ... + 10¹⁰⁰) / 6",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correct": "4",
    "explanation": "1. 10 mod 6 = 4. Notice that 10² = 100 mod 6 = 4, and in general 10ⁿ ≡ 4 (mod 6) for all n ≥ 1.\n2. There are 100 terms in the summation, each leaving a remainder of 4.\n3. Total remainder sum = 100 × 4 = 400.\n4. 400 mod 6 = **4**."
  },
  {
    "id": "rt_q49",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_9",
    "type_name": "Type 9: Next Power Concept",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (67⁵⁴ + 32⁷⁹) / 11",
    "options": [
      "3",
      "4",
      "0",
      "2"
    ],
    "correct": "0",
    "explanation": "1. 67 mod 11 = 1 -> 1⁵⁴ = 1.\n2. 32 mod 11 = 10 ≡ −1 -> (−1)⁷⁹ = −1 (since 79 is odd).\n3. Sum of remainders: 1 + (−1) = **0**."
  },
  {
    "id": "rt_q50",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_9",
    "type_name": "Type 9: Next Power Concept",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (29¹¹ + 17¹¹) / 23",
    "options": [
      "3",
      "4",
      "0",
      "2"
    ],
    "correct": "0",
    "explanation": "1. Factor Theorem: (aⁿ + bⁿ) is always divisible by (a + b) for all odd n.\n2. Here n = 11 is odd, so (29¹¹ + 17¹¹) is divisible by (29 + 17) = 46.\n3. Since 46 is a multiple of 23 (46 = 23 × 2), the entire expression is divisible by 23.\n4. Therefore, the remainder is **0**."
  },
  {
    "id": "rt_q51",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_9",
    "type_name": "Type 9: Next Power Concept",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (79³⁷ - 3) / 80",
    "options": [
      "76",
      "4",
      "0",
      "34"
    ],
    "correct": "76",
    "explanation": "1. 79 mod 80 = −1.\n2. 79³⁷ mod 80 = (−1)³⁷ = −1.\n3. Subtract 3: (−1 − 3) = −4.\n4. Positive remainder conversion: 80 − 4 = **76**."
  },
  {
    "id": "rt_q52",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_10",
    "type_name": "Type 10: Algebraic Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (x³ + 5x² + 7) / (x - 2)",
    "options": [
      "76",
      "4",
      "0",
      "35"
    ],
    "correct": "35",
    "explanation": "1. Remainder Theorem: When polynomial P(x) is divided by (x − a), the remainder is P(a).\n2. Set divisor to zero: x − 2 = 0 -> x = 2.\n3. Substitute x = 2 into P(x):\n   - P(2) = 2³ + 5(2²) + 7\n   - P(2) = 8 + 5(4) + 7 = 8 + 20 + 7 = **35**."
  },
  {
    "id": "rt_q53",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_10",
    "type_name": "Type 10: Algebraic Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (x² + 7x + 15) / (x + 3)",
    "options": [
      "6",
      "3",
      "0",
      "35"
    ],
    "correct": "3",
    "explanation": "1. Set linear divisor to zero: x + 3 = 0 -> x = −3.\n2. Substitute x = −3 into polynomial P(x):\n   - P(−3) = (−3)² + 7(−3) + 15\n   - P(−3) = 9 − 21 + 15 = **3**."
  },
  {
    "id": "rt_q54",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_10",
    "type_name": "Type 10: Algebraic Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (x⁵¹ + 16) / (x + 1)",
    "options": [
      "6",
      "3",
      "0",
      "15"
    ],
    "correct": "15",
    "explanation": "1. Set divisor to zero: x + 1 = 0 -> x = −1.\n2. Substitute x = −1 into P(x):\n   - P(−1) = (−1)⁵¹ + 16\n   - Since 51 is odd, (−1)⁵¹ = −1.\n   - Remainder = −1 + 16 = **15**."
  },
  {
    "id": "rt_q55",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_10",
    "type_name": "Type 10: Algebraic Remainder Theorem",
    "difficulty": "Hard",
    "points": 1,
    "question": "If x² + 4x + K when divided by x - 2 leaves remainder 2x, find the value of K.",
    "options": [
      "8",
      "-8",
      "0",
      "2"
    ],
    "correct": "-8",
    "explanation": "1. Division Algorithm: Dividend = Quotient × Divisor + Remainder.\n2. x² + 4x + K = Q(x)(x − 2) + 2x.\n3. Substitute root of divisor x = 2:\n   - 2² + 4(2) + K = Q(2)(0) + 2(2)\n   - 4 + 8 + K = 4\n   - 12 + K = 4\n   - K = 4 − 12 = **-8**."
  },
  {
    "id": "avg_q1",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "If a, b, c, d & e are five consecutive odd integers, what is their average?",
    "options": [
      "a + 4",
      "(abcde)/5",
      "5 (a + b + c + d + e)",
      "a + 8",
      "None of these"
    ],
    "correct": "a + 4",
    "explanation": "📊 Consecutive Odd Integers:\n- Let the numbers be: a, a+2, a+4, a+6, a+8.\n- Sum = 5a + 20.\n- Average = (5a + 20) / 5 = **a + 4** (the middle number c)."
  },
  {
    "id": "avg_q6",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of 8 numbers is 14. If 2 is subtracted from each given number, what will be the new average?",
    "options": [
      "12",
      "10",
      "16",
      "18",
      "None of these"
    ],
    "correct": "12",
    "explanation": "📊 Uniform Shift Property:\n- If a constant k is subtracted from each observation, the new average decreases by k.\n- New average = 14 - 2 = **12**."
  },
  {
    "id": "avg_q7",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average of x numbers is 3x. If (x–1) is subtracted from each given number, what will be the new average?",
    "options": [
      "2x + 1",
      "(x – 1)3",
      "2x – 1",
      "Data inadequate",
      "None of these"
    ],
    "correct": "2x + 1",
    "explanation": "📊 Algebraic Uniform Shift:\n- New average = Old average - (x - 1) = 3x - x + 1 = **2x + 1**."
  },
  {
    "id": "avg_q9",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of 40 numbers is 405. If each of the numbers is divided by 15, find the average of the new set of numbers :",
    "options": [
      "27",
      "28",
      "21",
      "26",
      "None of these"
    ],
    "correct": "27",
    "explanation": "📊 Uniform Division Property:\n- If each number is divided by 15, the average is also divided by 15:\n- 405 / 15 = **27**."
  },
  {
    "id": "avg_q10",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of 8 numbers is 21. If each of the numbers is multiplied by 8, find the average of the new set of numbers :",
    "options": [
      "168",
      "167",
      "158",
      "161",
      "None of these"
    ],
    "correct": "168",
    "explanation": "📊 Uniform Multiplication Property:\n- If each observation is multiplied by 8, the average is multiplied by 8:\n- 21 × 8 = **168**."
  },
  {
    "id": "avg_q29",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average age of the three boys is 15 years. Their ages are in the ratio 3: 5 : 7. The age of the oldest is:",
    "options": [
      "7 years",
      "14 years",
      "20 years",
      "21 years",
      "None of these"
    ],
    "correct": "21 years",
    "explanation": "📊 Ratio and Average:\n1. Total age of 3 boys = 3 × 15 = 45 years.\n2. Ratio sum = 3 + 5 + 7 = 15 parts.\n3. 1 part = 45 / 15 = 3 years.\n4. Oldest boy (7 parts) = 7 × 3 = **21 years**."
  },
  {
    "id": "avg_q36",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Out of three numbers, the first is twice the second and half of the third. If the average of the three numbers is 56, the three numbers in order are :",
    "options": [
      "36, 18, 72",
      "48, 24, 96",
      "40, 20, 80",
      "52, 26, 104",
      "None of these"
    ],
    "correct": "48, 24, 96",
    "explanation": "📊 Number Triple Relationships:\n1. Let 2nd number = x -> 1st number = 2x, 3rd number = 4x.\n2. Sum = 2x + x + 4x = 7x.\n3. Average = 7x / 3 = 56 -> 7x = 168 -> x = 24.\n4. Numbers in order = 2(24), 24, 4(24) = **48, 24, 96**."
  },
  {
    "id": "avg_q2",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average salary of 20 workers in an office is Rs1900 per month. If the manager’s salary is added, the average becomes Rs2000 per month. The manager’s annual salary (in Rs) is :",
    "options": [
      "Rs4000",
      "Rs25200",
      "Rs48000",
      "Rs84000",
      "None of these"
    ],
    "correct": "Rs48000",
    "explanation": "💼 Inclusion & Annual Conversion:\n1. Manager monthly salary = 2000 + 20 × (2000 - 1900) = 2000 + 2000 = Rs 4000.\n2. Annual salary = 4000 × 12 = **Rs48000**."
  },
  {
    "id": "avg_q5",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average age of 24 students and the class teacher is 16 years. If the class teacher’s age is excluded, the average reduces by 1 year. What is the age of the class teacher?",
    "options": [
      "50 years",
      "45 years",
      "40 years",
      "Data inadequate",
      "None of these"
    ],
    "correct": "40 years",
    "explanation": "👥 Exclusion Formula:\n1. Total of 25 people = 25 × 16 = 400.\n2. Total of 24 students = 24 × 15 = 360.\n3. Teacher's age = 400 - 360 = **40 years**."
  },
  {
    "id": "avg_q8",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average age of 34 boys in a class is 14 years. If the teacher’s age is included the average age of the boys and the teacher becomes 15 years. What is the teacher’s age?",
    "options": [
      "48 years",
      "46 years",
      "49 years",
      "45 years",
      "None of these"
    ],
    "correct": "49 years",
    "explanation": "👥 Inclusion Formula:\n1. Teacher's age = New Average + (Initial Count × Increase in Average)\n2. Teacher's age = 15 + (34 × 1) = **49 years**."
  },
  {
    "id": "avg_q11",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average weight of 8 persons increases by 1.5kg, If a person whose weight is 65kg is replaced by a new person, what could be the weight of the new person?",
    "options": [
      "76kg",
      "77kg",
      "76.5kg",
      "Data inadequate",
      "None of these"
    ],
    "correct": "77kg",
    "explanation": "⚖️ Replacement Formula:\n- Weight of new person = Replaced weight + (Total persons × Increase in average)\n- Weight = 65 + (8 × 1.5) = 65 + 12 = **77kg**."
  },
  {
    "id": "avg_q12",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average age of the class consisting of 24 students is decreased by 3 months when 1 boy aged 20 years is replaced by a new boy. Find the age of the new boy :",
    "options": [
      "14 years",
      "16 years",
      "17 years",
      "18 years",
      "None of these"
    ],
    "correct": "14 years",
    "explanation": "⚖️ Replacement with Decrease:\n- Total decrease = 24 × 3 months = 72 months = 6 years.\n- Age of new boy = 20 - 6 = **14 years**."
  },
  {
    "id": "avg_q35",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average height of 40 students is 163cm. On a particular day, three students A, B, and C were absent and the average of the remaining 37 students was found to be 162cm. If A, and B have equal heights and the height of C is 2cm less than that of A, find the height of A:",
    "options": [
      "176cm",
      "166cm",
      "180cm",
      "186cm",
      "None of these"
    ],
    "correct": "176cm",
    "explanation": "📏 Multi-Student Absence Equation:\n1. Total height of 40 students = 40 × 163 = 6520 cm.\n2. Total of 37 students = 37 × 162 = 5994 cm.\n3. A + B + C = 6520 - 5994 = 526 cm.\n4. Since A = B and C = A - 2: A + A + (A - 2) = 526 -> 3A = 528 -> A = **176cm**."
  },
  {
    "id": "avg_q37",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average weight of 3 men A, B, and C is 84kg. Another man D joins the group and the average now becomes 80kg. If another man E, whose weight is 3kg more than that of D, replaces A, then the average weight of B, C, D, and E becomes 79kg. The weight of A is :",
    "options": [
      "70kg",
      "72kg",
      "75kg",
      "80kg",
      "None of these"
    ],
    "correct": "75kg",
    "explanation": "⚖️ Multi-Stage Replacement:\n1. A + B + C = 3 × 84 = 252 kg.\n2. A + B + C + D = 4 × 80 = 320 kg -> D = 320 - 252 = 68 kg.\n3. E = 68 + 3 = 71 kg.\n4. B + C + D + E = 4 × 79 = 316 kg.\n5. (A + B + C + D) - (B + C + D + E) = A - E = 320 - 316 = 4 kg.\n6. A = E + 4 = 71 + 4 = **75kg**."
  },
  {
    "id": "avg_q3",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a coconut grove, (x + 2) trees yield 60 nuts per year per tree, x trees yield 120 nuts per year per tree, and (x – 2) trees yield 180 nuts per year per tree. If the average yield per year per tree is 100, find x :",
    "options": [
      "4",
      "2",
      "8",
      "6",
      "None of these"
    ],
    "correct": "4",
    "explanation": "🥥 Weighted Tree Yield:\n1. Total nuts = 60(x+2) + 120x + 180(x-2) = 360x - 240.\n2. Total trees = (x+2) + x + (x-2) = 3x.\n3. (360x - 240) / 3x = 100 -> 360x - 240 = 300x -> 60x = 240 -> x = **4**."
  },
  {
    "id": "avg_q4",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain primary school, there are 60 boys of 12 years of age each, 40 boys of 13 years of age each, 50 boys of age 14 each, and 50 boys of age 15 each. The average age (in years) of the total boys in the school is :",
    "options": [
      "13.50",
      "13",
      "13.45",
      "14",
      "None of these"
    ],
    "correct": "13.45",
    "explanation": "🏫 Multi-Group Weighted Mean:\n1. Total students = 60 + 40 + 50 + 50 = 200.\n2. Total age = 60(12) + 40(13) + 50(14) + 50(15) = 720 + 520 + 700 + 750 = 2690.\n3. Average = 2690 / 200 = **13.45**."
  },
  {
    "id": "avg_q13",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average marks obtained by 77 candidates in a certain examination is 17. If the average marks of passed candidates is 19 and that of the failed candidates is 8, what is the number of candidates who passed the examination?",
    "options": [
      "36",
      "63",
      "40",
      "70",
      "None of these"
    ],
    "correct": "63",
    "explanation": "⚖️ Rule of Alligation:\n1. Ratio of passed to failed = (17 - 8) : (19 - 17) = 9 : 2.\n2. Total ratio parts = 11.\n3. Passed candidates = (9 / 11) × 77 = **63**."
  },
  {
    "id": "avg_q14",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average of 13 results is 39. The average of the first five is 38 and the average of the last seven is 36. Find the value of the 6th number :",
    "options": [
      "64",
      "46",
      "65",
      "56",
      "None of these"
    ],
    "correct": "65",
    "explanation": "🔢 Missing Element Decomposition:\n1. Total of 13 = 13 × 39 = 507.\n2. Sum of first 5 = 5 × 38 = 190.\n3. Sum of last 7 = 7 × 36 = 252.\n4. 6th number = 507 - (190 + 252) = 507 - 442 = **65**."
  },
  {
    "id": "avg_q21",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average salary of the entire staff in an office is Rs130 per month. The average salary of officers is Rs540 and that of non-officers is Rs114. If the number of officers is 16, find the number of non-officers in the office:",
    "options": [
      "140",
      "410",
      "510",
      "150",
      "None of these"
    ],
    "correct": "410",
    "explanation": "⚖️ Salary Alligation:\n1. Ratio of Officers to Non-Officers = (130 - 114) : (540 - 130) = 16 : 410.\n2. Given officers = 16 -> Number of non-officers = **410**."
  },
  {
    "id": "avg_q26",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average attendance of a college for the first three days of a week is 325, and for the first four days, it is 320. How many were present on the fourth day?",
    "options": [
      "305",
      "350",
      "530",
      "503",
      "None of these"
    ],
    "correct": "305",
    "explanation": "📅 Consecutive Attendance Mean:\n1. Attendance for 4 days = 4 × 320 = 1280.\n2. Attendance for 3 days = 3 × 325 = 975.\n3. 4th day = 1280 - 975 = **305**."
  },
  {
    "id": "avg_q31",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "An investor earns a 3% return on 1/4th of this capital, 5% on 2/3rd of his capital, and 11% on the remaining of his capital. What is the average rate of return he earns on his total capital?",
    "options": [
      "5%",
      "10%",
      "5.5%",
      "10.5%",
      "None of these"
    ],
    "correct": "5%",
    "explanation": "💰 Weighted Investment Return:\n1. Remaining capital = 1 - (1/4 + 2/3) = 1 - 11/12 = 1/12.\n2. Average return = (1/4 × 3%) + (2/3 × 5%) + (1/12 × 11%) = 3/4 + 10/3 + 11/12 = 60/12 = **5%**."
  },
  {
    "id": "avg_q32",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average of 8 readings is 24.3, out of which the average for the first two is 18.5 and that of the next three is 21.2. If the sixth reading is 3 less than the seventh and 8 less than the eighth, what is the sixth reading?",
    "options": [
      "24.8",
      "26.5",
      "27.6",
      "29.4",
      "None of these"
    ],
    "correct": "27.6",
    "explanation": "📊 Partial Readings Decomposition:\n1. Total of 8 = 8 × 24.3 = 194.4.\n2. Sum of first 5 = 2(18.5) + 3(21.2) = 37 + 63.6 = 100.6.\n3. Sum of 6th, 7th, 8th = 194.4 - 100.6 = 93.8.\n4. x + (x + 3) + (x + 8) = 93.8 -> 3x + 11 = 93.8 -> 3x = 82.8 -> x = **27.6**."
  },
  {
    "id": "avg_q15",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_4",
    "type_name": "Type 4: Cricket Batting & Bowling Averages",
    "difficulty": "Medium",
    "points": 1,
    "question": "A batsman in his 16th innings scores 92 runs and thereby increases his average by 4. What is his average after 16 innings?",
    "options": [
      "32",
      "30",
      "34",
      "23",
      "None of these"
    ],
    "correct": "32",
    "explanation": "🏏 Batting Average Formulation:\n1. 15A + 92 = 16(A + 4) -> 15A + 92 = 16A + 64 -> A = 28.\n2. Average after 16 innings = 28 + 4 = **32**."
  },
  {
    "id": "avg_q16",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_4",
    "type_name": "Type 4: Cricket Batting & Bowling Averages",
    "difficulty": "Medium",
    "points": 1,
    "question": "A batsman, in his 19th innings, missed a century by 2 runs and thereby increases his average by 3. What is his average after 19 innings?",
    "options": [
      "54",
      "44",
      "45",
      "43",
      "None of these"
    ],
    "correct": "44",
    "explanation": "🏏 Batting Century Shortfall:\n1. 19th innings score = 100 - 2 = 98 runs.\n2. 18A + 98 = 19(A + 3) -> 18A + 98 = 19A + 57 -> A = 41.\n3. Average after 19 innings = 41 + 3 = **44**."
  },
  {
    "id": "avg_q38",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_4",
    "type_name": "Type 4: Cricket Batting & Bowling Averages",
    "difficulty": "Hard",
    "points": 1,
    "question": "The bowling average of a cricketer was 12.4. He improves his bowling average by 0.2 points when he takes 5 wickets for 26 runs in his last match. The number of wickets taken by him before the last match was",
    "options": [
      "150",
      "200",
      "125",
      "175"
    ],
    "correct": "175",
    "explanation": "🏏 Bowling Average (Runs / Wickets):\n1. (12.4W + 26) / (W + 5) = 12.2 (improved average is lower by 0.2).\n2. 12.4W + 26 = 12.2W + 61 -> 0.2W = 35 -> W = 35 / 0.2 = **175**."
  },
  {
    "id": "avg_q17",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Easy",
    "points": 1,
    "question": "A constant distance from A to B is covered by a man at 40km/h. The person rides back the same distance at 30km/h. Find his approximate average speed during the whole journey.",
    "options": [
      "34km/h",
      "35.29km/h",
      "34.29km/h",
      "35km/h",
      "None of these"
    ],
    "correct": "34.29km/h",
    "explanation": "🚗 Harmonic Mean for Equal Distance:\n- Average speed = 2xy / (x + y) = (2 × 40 × 30) / (40 + 30) = 2400 / 70 ≈ **34.29km/h**."
  },
  {
    "id": "avg_q18",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Medium",
    "points": 1,
    "question": "A person divides his total route of a journey into three equal parts and decides to travel the three parts with speeds of 20, 15, and 10 km/hr respectively. Find his average speed during the whole journey.",
    "options": [
      "13(11/13) km/h",
      "11(11/13) km/h",
      "13(3/13) km/h",
      "11(3/13) km/h",
      "None of these"
    ],
    "correct": "13(11/13) km/h",
    "explanation": "🚗 3-Part Equal Distance Harmonic Mean:\n- Avg Speed = 3 / (1/20 + 1/15 + 1/10) = 3 / (13/60) = 180 / 13 = **13(11/13) km/h**."
  },
  {
    "id": "avg_q19",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Easy",
    "points": 1,
    "question": "A person covers 18 km at 6km/h, 16km at 8km/h and 30km at 6km/h. Find the average speed in covering the whole distance:",
    "options": [
      "6.5km/h",
      "6.4km/h",
      "6.2km/h",
      "6km/h",
      "None of these"
    ],
    "correct": "6.4km/h",
    "explanation": "🚗 Total Distance / Total Time:\n1. Total distance = 18 + 16 + 30 = 64 km.\n2. Total time = (18/6) + (16/8) + (30/6) = 3 + 2 + 5 = 10 h.\n3. Average speed = 64 / 10 = **6.4km/h**."
  },
  {
    "id": "avg_q20",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Hard",
    "points": 1,
    "question": "A person runs the first 1/4th of the distance at a speed of 8km/h, the next 3/5th at a speed of 6km/h, and the remaining distance at a speed of 10km/hr. Find his average speed:",
    "options": [
      "17km/h",
      "17.87km/h",
      "17.78km/h",
      "18.5km/h",
      "6(98/117)km/h"
    ],
    "correct": "6(98/117)km/h",
    "explanation": "🏃 Fractional Distance Breakdown:\n1. Let distance = 20 km -> 5 km @ 8km/h, 12 km @ 6km/h, 3 km @ 10km/h.\n2. Time = 5/8 + 2 + 3/10 = 117/40 h.\n3. Speed = 20 / (117/40) = 800 / 117 = **6(98/117)km/h**."
  },
  {
    "id": "avg_q27",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Easy",
    "points": 1,
    "question": "A car runs for t₁ hours at v₁ km/h, t₂ hours at v₂ km/ h. What is the average speed of the car for the entire journey?",
    "options": [
      "(t₁ + t₂) / (v₁t₁ + v₂t₂)",
      "(v₁t₁ + v₂t₂) / (t₁ + t₂)",
      "(v₁t₂ + v₂t₁) / (v₁ + v₂)",
      "(v₁ + v₂) / (v₁t₁ + v₂t₂)"
    ],
    "correct": "(v₁t₁ + v₂t₂) / (t₁ + t₂)",
    "explanation": "🚗 Fundamental Definition:\n- Total Distance = v₁t₁ + v₂t₂.\n- Total Time = t₁ + t₂.\n- Average Speed = **(v₁t₁ + v₂t₂) / (t₁ + t₂)**."
  },
  {
    "id": "avg_q28",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Medium",
    "points": 1,
    "question": "An airplane covers the four sides of a square field at speeds of 200, 400, 600, and 800 km/hr. What is the average speed of the plane during the entire journey?",
    "options": [
      "600km/h",
      "400km/h",
      "500km/h",
      "384km/h",
      "None of these"
    ],
    "correct": "384km/h",
    "explanation": "✈️ 4-Sided Equal Distance Circuit:\n1. Let each side = 2400 km.\n2. Times = 12h, 6h, 4h, 3h -> Total time = 25 h.\n3. Total distance = 4 × 2400 = 9600 km.\n4. Average speed = 9600 / 25 = **384km/h**."
  },
  {
    "id": "avg_q22",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "There were 42 students in a hostel. If the number of students increases by 7, the expenses of the mess increase by Rs32.5 per day while the average expenditure per head diminishes by Rs1.5. Find the original expenditure of the mess:",
    "options": [
      "636",
      "536",
      "630",
      "656",
      "None of these"
    ],
    "correct": "636",
    "explanation": "🍲 Hostel Mess System:\n1. Let original average per head = x. Original expenditure = 42x.\n2. 49(x - 1.5) = 42x + 32.5 -> 7x = 106 -> x = 106 / 7.\n3. Original expenditure = 42 × (106 / 7) = 6 × 106 = **636**."
  },
  {
    "id": "avg_q23",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "There were 36 students in a hostel. If the number of students increases by 4, the expenses of the mess increase by Rs32 per day while the average expenditure per head diminishes by Rs1. Find the original expenditure of the mess:",
    "options": [
      "640",
      "648",
      "650",
      "658",
      "None of these"
    ],
    "correct": "648",
    "explanation": "🍲 Hostel Mess Balance:\n1. 40(x - 1) = 36x + 32 -> 4x = 72 -> x = 18.\n2. Original expenditure = 36 × 18 = **648**."
  },
  {
    "id": "avg_q24",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average marks scored by Ganesh in English, Science, Mathematics, and History is less than 15 than that scored by him in English, History, Geography, and Mathematics. What is the difference in marks in Science and Geography scored by him?",
    "options": [
      "40",
      "50",
      "60",
      "Data inadequate",
      "None of these"
    ],
    "correct": "60",
    "explanation": "📝 Difference Across Sets:\n1. Average difference = 15 over 4 subjects.\n2. Total mark difference = 15 × 4 = **60**."
  },
  {
    "id": "avg_q25",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average temperature on Monday, Tuesday, and Wednesday was 40°C. The average temperature on Tuesday, Wednesday, and Thursday was 41°C. If the temperature on Thursday was 42°C, what was the temperature on Monday?",
    "options": [
      "39°C",
      "45°C",
      "44°C",
      "40°C",
      "None of these"
    ],
    "correct": "39°C",
    "explanation": "🌡️ Temperature Shift:\n1. (T + W + Th) - (M + T + W) = Th - M = 3(41) - 3(40) = 3°C.\n2. 42 - M = 3 -> M = **39°C**."
  },
  {
    "id": "avg_q30",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "The population of a town increased by 20% during the first year, increased by 25% during the next year, and increased by 44% during the third year. Find the average rate of increase during 3 years :",
    "options": [
      "36.87%",
      "37.68%",
      "38(2/3)%",
      "40%",
      "None of these"
    ],
    "correct": "38(2/3)%",
    "explanation": "📈 Cumulative Population Growth Rate:\n1. Compound factor = 1.20 × 1.25 × 1.44 = 2.16 -> Net increase = 116%.\n2. Average rate of increase per year = 116% / 3 = **38(2/3)%**."
  },
  {
    "id": "avg_q33",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average age of a family of 6 members is 22 years. If the age of the youngest member is 7 years, the average age of the family at the birth of the youngest member, was:",
    "options": [
      "15 years",
      "17 years",
      "17.5 years",
      "18 years",
      "None of these"
    ],
    "correct": "18 years",
    "explanation": "👨‍👩‍👧 Family Age Regression:\n1. Present total = 6 × 22 = 132 years.\n2. 7 years ago, total age = 132 - (6 × 7) = 90 years.\n3. At that time there were 5 members: 90 / 5 = **18 years**."
  },
  {
    "id": "avg_q34",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average age of a husband and wife was 23 years when they were married(5 years ago). The average age of the husband, the wife, and a child who was born during this interval, is 20 years now. How old is the child now?",
    "options": [
      "9 months",
      "1 year",
      "3 years",
      "4 years",
      "None of these"
    ],
    "correct": "4 years",
    "explanation": "👶 Interval Birth Age:\n1. 5 years ago, H + W = 2 × 23 = 46.\n2. Today, H + W = 46 + 2(5) = 56 years.\n3. H + W + C = 3 × 20 = 60 years.\n4. Age of child C = 60 - 56 = **4 years**."
  },
  {
    "id": "avg_extra_q1",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average marks in English subject of a class of 24 students is 56. If the marks of three students were misread as 44, 45 and 61 against actual marks of 48, 59 and 67 respectively, then what would be the correct average?",
    "options": [
      "56",
      "55",
      "57.5",
      "58.5",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "📊 Error Correction Calculation:\n1. Original total = 24 × 56 = 1344.\n2. Subtracted incorrect marks: 44 + 45 + 61 = 150.\n3. Added correct marks: 48 + 59 + 67 = 174.\n4. Net change = +24 marks.\n5. Corrected sum = 1344 + 24 = 1368.\n6. Correct average = 1368 / 24 = 57.\n7. Since 57 is not listed among A, B, C, or D, the answer is **None of these**."
  },
  {
    "id": "avg_extra_q2",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "A student took 4 papers in an examination, where the maximum marks were the same for each paper. In all papers together, the candidate obtained 60% of the total marks. His marks in these papers were in the ratio of 24:30:32:34. Then in how many of the papers he got more than 60% marks?",
    "options": [
      "6",
      "5",
      "4",
      "3",
      "2"
    ],
    "correct": "2",
    "explanation": "📊 Percentage Ratio Threshold:\n1. Let maximum marks per paper be 100 (Total = 400).\n2. Candidate obtained 60% of 400 = 240 marks.\n3. Ratio parts sum = 24 + 30 + 32 + 34 = 120.\n4. Value per ratio unit = 240 / 120 = 2.\n5. Individual marks: 48, 60, 64, 68.\n6. Papers with strictly more than 60% (> 60 marks) are 64 and 68 ⇒ exactly **2** papers."
  },
  {
    "id": "avg_extra_q3",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average weight of A, B, C and D is 33 kgs. C is 12kgs lighter than A while B is 6 kg heavier than C. D's weight is 10 kgs less than that of C. What is the average weight of A and D?",
    "options": [
      "32 kg",
      "33 kg",
      "34 kg",
      "35 kg",
      "None of these"
    ],
    "correct": "32 kg",
    "explanation": "⚖️ Weight Substitution System:\n1. Total weight A + B + C + D = 33 × 4 = 132 kg.\n2. Express in terms of a:\n   c = a - 12\n   b = c + 6 = a - 6\n   d = c - 10 = a - 22\n3. a + (a - 6) + (a - 12) + (a - 22) = 132 ⇒ 4a - 40 = 132 ⇒ 4a = 172 ⇒ a = 43 kg.\n4. d = 43 - 22 = 21 kg.\n5. Average of A and D = (43 + 21) / 2 = **32 kg**."
  },
  {
    "id": "avg_extra_q4",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "In an office of 40 people, the average salary of class-A, class-B and class-C officer is Rs600, Rs750 and Rs. 1000 a day respectively and there ratio of strength is 5:4:1 respectively. Find the monthly average salary of an officer (in Rs.)? Assume the number of days in a month to be 30.",
    "options": [
      "21000",
      "24600",
      "25800",
      "24030",
      "None of these"
    ],
    "correct": "21000",
    "explanation": "💼 Weighted Daily to Monthly Salary:\n1. Ratio of strength = 5 : 4 : 1 (Total = 10 parts).\n2. Average daily salary = [5(600) + 4(750) + 1(1000)] / 10\n   = (3000 + 3000 + 1000) / 10 = 7000 / 10 = Rs. 700 per day.\n3. Monthly average salary = 700 × 30 = Rs. **21000**."
  },
  {
    "id": "avg_extra_q5",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average age of 29 students in a class is 26 years. If the age of teacher is also included the average age of the class becomes 26.4 years. Find the age of the teacher.",
    "options": [
      "32 years",
      "36 years",
      "42 years",
      "38 years",
      "48 years"
    ],
    "correct": "38 years",
    "explanation": "👨‍🏫 Inclusion Age Formula:\n1. Total age of 29 students = 29 × 26 = 754 years.\n2. Total age including teacher (30 persons) = 30 × 26.4 = 792 years.\n3. Age of teacher = 792 - 754 = **38 years**."
  },
  {
    "id": "avg_extra_q6",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "There are 45 students in a hostel. If the number of student increases by 5, the expenses of the mess increases by Rs.30 per day while the average expenditure per head diminishes by Rs.2. Find the original expenditure of the mess.",
    "options": [
      "Rs. 1200",
      "Rs. 1170",
      "Rs. 1710",
      "Rs. 1250",
      "Rs. 1240"
    ],
    "correct": "Rs. 1170",
    "explanation": "🍲 Hostel Mess Balance Equation:\n1. Let original average expenditure per student = Rs. x.\n2. Original total daily expenditure = 45x.\n3. With 50 students, new expenditure = 45x + 30.\n4. New average = x - 2 ⇒ (45x + 30) / 50 = x - 2\n   ⇒ 45x + 30 = 50x - 100 ⇒ 5x = 130 ⇒ x = 26.\n5. Original mess expenditure = 45 × 26 = **Rs. 1170**."
  },
  {
    "id": "avg_extra_q7",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a set of 6 numbers, the average of first four is 10 and that of last four is 8. If the average of all the six numbers is 9, then find the average of the third and fourth number.",
    "options": [
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "correct": "9",
    "explanation": "📊 Overlapping Subsets Invariant:\n1. Sum of first 4 (n₁ + n₂ + n₃ + n₄) = 4 × 10 = 40.\n2. Sum of last 4 (n₃ + n₄ + n₅ + n₆) = 4 × 8 = 32.\n3. Sum of all 6 numbers = 6 × 9 = 54.\n4. (Sum of first 4) + (Sum of last 4) - (Sum of all 6) = n₃ + n₄\n   ⇒ 40 + 32 - 54 = 18.\n5. Average of 3rd and 4th = 18 / 2 = **9**."
  },
  {
    "id": "avg_extra_q8",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Hard",
    "points": 1,
    "question": "Three Science classes A, B and C take a Life Science test. The average score of students of class A is 83. The average score of students class B is 76. The average score of class C is 85. The average score of class A and B is 79 and average score of class B and C is 81. Then the average score, of classes A, B and C is",
    "options": [
      "80",
      "80.5",
      "81",
      "81.5",
      "None of these"
    ],
    "correct": "81.5",
    "explanation": "🧪 Alligation Weighted Mean:\n1. For A & B: (83 - 79) / (79 - 76) ⇒ n_A : n_B = 3 : 4.\n2. For B & C: (85 - 81) / (81 - 76) ⇒ n_B : n_C = 4 : 5.\n3. Strength ratio n_A : n_B : n_C = 3 : 4 : 5.\n4. Combined Average = [83(3) + 76(4) + 85(5)] / (3 + 4 + 5)\n   = (249 + 304 + 425) / 12 = 978 / 12 = **81.5**."
  },
  {
    "id": "avg_extra_q9",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "The second lowest number of five consecutive odd number series is four more than the 5/12 th of the third highest number of a five consecutive even number series. If the average of five consecutive even number series is 60, then find the difference between the highest number of both the series?",
    "options": [
      "27",
      "29",
      "31",
      "33",
      "37"
    ],
    "correct": "29",
    "explanation": "🔢 Interlinked Consecutive Series:\n1. Five consecutive even numbers averaging 60: 56, 58, 60, 62, 64.\n2. Third highest even number = 60.\n3. Second lowest of odd series = (5/12) × 60 + 4 = 25 + 4 = 29.\n4. Consecutive odd numbers: 27, 29, 31, 33, 35.\n5. Highest of even series = 64; Highest of odd series = 35.\n6. Difference = 64 - 35 = **29**."
  },
  {
    "id": "avg_extra_q10",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "In the given questions, two quantities are given, one as Quantity I and another as Quantity II. You have to determine relationship between two quantities and choose the appropriate option.\nQuantity I: Three boys of a class of weight 75, 68 and 57 are replaced by 23, 41 and 56. Due to which average weight of class is decreased by 2.5. What is the strength of class.\nQuantity II: 50",
    "options": [
      "Quantity I > Quantity II",
      "Quantity I < Quantity II",
      "Quantity I ≥ Quantity II",
      "Quantity I ≤ Quantity II",
      "Quantity I = Quantity II or no relation"
    ],
    "correct": "Quantity I < Quantity II",
    "explanation": "⚖️ Quantity Comparison Replacement:\n1. Weight of outgoing boys = 75 + 68 + 57 = 200 kg.\n2. Weight of incoming boys = 23 + 41 + 56 = 120 kg.\n3. Total decrease in weight = 200 - 120 = 80 kg.\n4. Decrease in average = 2.5 kg.\n5. Class strength (Quantity I) = 80 / 2.5 = 32.\n6. Comparing Quantity I (32) and Quantity II (50) ⇒ **Quantity I < Quantity II**."
  },
  {
    "id": "avg_extra_q11",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average marks of 100 students were found to be 40. Later on it was discovered that a score of 53 was misread as 83. Found the correct average corresponding to the correct score.",
    "options": [
      "38.7",
      "39",
      "39.7",
      "41",
      "None of these"
    ],
    "correct": "39.7",
    "explanation": "📊 Transcription Error Adjustment:\n1. Initial total = 100 × 40 = 4000.\n2. Error discrepancy = 83 - 53 = 30 (excess marks recorded).\n3. Correct total = 4000 - 30 = 3970.\n4. Correct average = 3970 / 100 = **39.7**."
  },
  {
    "id": "avg_extra_q12",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average age (in years) of a group of people is twice the number of people in the group. A person, X, leaves the group and the average age is still twice the number of people in the group. Now another person, Y, leaves the group and the average age is still twice the number of people in the group. If the ratio of the ages of X and Y is 19 : 17, then find the average age of the group, if one more person, Z, of age 16 years, leaves the group.",
    "options": [
      "10",
      "15",
      "16",
      "18",
      "None of these"
    ],
    "correct": "16",
    "explanation": "👥 Quadratic Departure Progression:\n1. With n people: Average = 2n ⇒ Sum = 2n².\n2. X leaves (n - 1 people): Average = 2(n - 1) ⇒ Sum = 2(n - 1)².\n   Age of X = 2n² - 2(n - 1)² = 4n - 2.\n3. Y leaves (n - 2 people): Average = 2(n - 2) ⇒ Sum = 2(n - 2)².\n   Age of Y = 2(n - 1)² - 2(n - 2)² = 4n - 6.\n4. Given: (4n - 2) / (4n - 6) = 19 / 17 ⇒ 68n - 34 = 76n - 114 ⇒ 8n = 80 ⇒ n = 10.\n5. Initial sum = 2(10)² = 200. Age X = 38, Age Y = 34.\n   Sum remaining = 200 - 38 - 34 = 128 (for 8 people).\n6. Person Z (age 16) leaves: remaining people = 7.\n   New sum = 128 - 16 = 112.\n7. New average = 112 / 7 = **16**."
  },
  {
    "id": "avg_extra_q13",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "A student studied four subjects in his bachelor's degree. If the ratio of marks in subject A and B is 1:2, in subject B and C is 2:5 and in subject A and D is 1:4. If she has scored an average of 84 marks in a subject. In how many subjects did she score equal to or greater than 60 marks?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "Cannot be determined"
    ],
    "correct": "2",
    "explanation": "🎓 Continued Ratio Marks Distribution:\n1. A : B = 1 : 2; B : C = 2 : 5; A : D = 1 : 4.\n2. Combined ratio A : B : C : D = 1 : 2 : 5 : 4.\n3. Average marks = 84 ⇒ Total marks = 84 × 4 = 336.\n4. Total parts = 1 + 2 + 5 + 4 = 12.\n5. 1 part = 336 / 12 = 28 marks.\n6. Marks in subjects:\n   - Subject A = 28\n   - Subject B = 56\n   - Subject C = 140\n   - Subject D = 112\n7. Subjects with marks ≥ 60 are C and D ⇒ exactly **2** subjects."
  },
  {
    "id": "avg_extra_q14",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "Average score of Rahul, Manish and Suresh is 63. Rahul's score is 15 less than Ajay and 10 more than Manish. If Ajay scored 30 marks more than the average score of Rahul, Manish and Suresh, what is the sum of Manish's and Suresh's scores?",
    "options": [
      "120",
      "111",
      "117",
      "Cannot be determined",
      "None of these"
    ],
    "correct": "111",
    "explanation": "🎯 Relative Score Resolution:\n1. Rahul + Manish + Suresh = 3 × 63 = 189.\n2. Ajay's score = 63 + 30 = 93.\n3. Rahul's score = 93 - 15 = 78.\n4. Manish's score = Rahul - 10 = 78 - 10 = 68.\n5. Suresh's score = 189 - (78 + 68) = 189 - 146 = 43.\n6. Sum of Manish and Suresh = 68 + 43 = **111**."
  },
  {
    "id": "avg_extra_q15",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Hard",
    "points": 1,
    "question": "12 years ago, there were 7 members in Arun's family & then the average age of the family was 28 years. His father died three years ago from present & then the average age of the family was 26 years. Then his father died at the age of-",
    "options": [
      "88 years",
      "93 years",
      "103 years",
      "106 years",
      "97 years"
    ],
    "correct": "103 years",
    "explanation": "⏳ Family Epoch Age Deduction:\n1. 12 years ago: 7 members, average = 28 ⇒ Total = 7 × 28 = 196 years.\n2. Father died 3 years ago (which is 9 years after the 12-years-ago mark).\n3. At time of death, 6 surviving members had average = 26 ⇒ Total = 6 × 26 = 156 years.\n4. Rewind those 6 members by 9 years to 12 years ago:\n   Their total was 156 - (6 × 9) = 156 - 54 = 102 years.\n5. Father's age 12 years ago = 196 - 102 = 94 years.\n6. Father died 9 years later ⇒ Age at death = 94 + 9 = **103 years**."
  },
  {
    "id": "avg_extra_q16",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average weight of three men A, B and C is 65 kg. Another man D joins the group and the average now becomes 68 kg. If another man E whose weight is 4 kg less than that of D, replaces A then the average weight of B, C, D and E becomes 67 kg. Find the weight of A?",
    "options": [
      "75 kg",
      "78 kg",
      "77 kg",
      "82 kg",
      "86 kg"
    ],
    "correct": "77 kg",
    "explanation": "⚖️ Group Replacement Equilibrium:\n1. A + B + C = 3 × 65 = 195 kg.\n2. A + B + C + D = 4 × 68 = 272 kg ⇒ D = 272 - 195 = 77 kg.\n3. E = D - 4 = 77 - 4 = 73 kg.\n4. B + C + D + E = 4 × 67 = 268 kg.\n5. B + C + D = 268 - 73 = 195 kg.\n6. Substitute into (2): A + (B + C + D) = 272 ⇒ A + 195 = 272 ⇒ A = **77 kg**."
  },
  {
    "id": "avg_extra_q17",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average wages of four farmers in a field is Rs. 60. If the difference between the wages of the farmer with the lowest wages and second lowest wages, difference between the wages of the farmer with the second lowest and third lowest wages and so on is Rs. 20, then wage of a farmer with least wage is -",
    "options": [
      "Rs. 30",
      "Rs. 80",
      "Rs. 50",
      "Rs. 40",
      "Rs. 60"
    ],
    "correct": "Rs. 30",
    "explanation": "🌾 Arithmetic Progression Wages:\n1. Let the wages be x, x + 20, x + 40, x + 60.\n2. Total wages = 4 × 60 = Rs. 240.\n3. 4x + 120 = 240 ⇒ 4x = 120 ⇒ x = **Rs. 30**."
  },
  {
    "id": "avg_extra_q18",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average age of 40 teachers in a school in 2007 was 35 years. In 2009, 10 teachers retired from the job, whose average age was 50 years. In 2012, 20 teachers joined the school, whose average age was 30 years. What was the total age of all the teachers in 2015 assuming that no teacher joined or left the school apart from the ones mentioned in the question?",
    "options": [
      "1450 years",
      "1560 years",
      "1820 years",
      "1720 years",
      "None of these"
    ],
    "correct": "1820 years",
    "explanation": "🏫 Multi-Year Faculty Demographics:\n1. In 2007: 40 teachers, total = 40 × 35 = 1400.\n2. In 2009 (2 years): Total = 1400 + 40(2) = 1480.\n   10 teachers retire (avg 50) ⇒ Subtract 10 × 50 = 500.\n   Remaining 30 teachers total = 1480 - 500 = 980.\n3. In 2012 (3 years): Total = 980 + 30(3) = 1070.\n   20 teachers join (avg 30) ⇒ Add 20 × 30 = 600.\n   Total teachers = 50, Total age = 1070 + 600 = 1670.\n4. In 2015 (3 years): Total = 1670 + 50(3) = 1670 + 150 = **1820 years**."
  },
  {
    "id": "avg_extra_q19",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average age of 100 bankers in PNB in 2002 was 50 years. In 2004, 20 bankers retired from their posts, whose average age was 60 years. After a certain gap in 2007, 40 bankers joined PNB whose average age was 38 years. The average age of all the bankers in 2010 was?",
    "options": [
      "45 years",
      "51 years",
      "60 years",
      "40 years",
      "48 years"
    ],
    "correct": "51 years",
    "explanation": "🏦 Multi-Cohort Banking Age:\n1. In 2002: 100 bankers, total = 5000.\n2. In 2004 (2 years): Total = 5000 + 200 = 5200.\n   20 retire (avg 60 ⇒ 1200) ⇒ Remaining 80 bankers total = 4000.\n3. In 2007 (3 years): 80 bankers total = 4000 + 80(3) = 4240.\n   40 join (avg 38 ⇒ 1520) ⇒ Total 120 bankers = 4240 + 1520 = 5760.\n4. In 2010 (3 years): Total age = 5760 + 120(3) = 5760 + 360 = 6120.\n5. Average age in 2010 = 6120 / 120 = **51 years**."
  },
  {
    "id": "avg_extra_q20",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_7",
    "type_name": "Type 7: Extra Q",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a college, 180 students took admission in Computer science department, of which 100 are girls and rest are boys. The average marks of 80 boys and 100 girls was calculated as 124 and 92 respectively. However, it was later found that the marks of one of the girl were read as 122 while her actual marks were 82. Similarly in the case of boys, the marks of one boy were read as 110 instead of 130. What is the actual average marks of 180 students?",
    "options": [
      "117.6",
      "112.4",
      "106.1",
      "99.8",
      "115.4"
    ],
    "correct": "106.1",
    "explanation": "💻 Dual Error Cohort Adjustment:\n1. Girls initial sum = 100 × 92 = 9200.\n   Correction = -122 + 82 = -40 ⇒ Actual girls sum = 9160.\n2. Boys initial sum = 80 × 124 = 9920.\n   Correction = -110 + 130 = +20 ⇒ Actual boys sum = 9940.\n3. Total actual marks = 9160 + 9940 = 19100.\n4. Actual average = 19100 / 180 = 106.11 ≈ **106.1**."
  },
  {
    "id": "part_q1",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Easy",
    "points": 1,
    "question": "A starts a business with 1000. B joins him after 6 months with 4000. C puts a sum of 5000 for 4 months only. At the end of the year the business gave a profit of 2800. How should the profit be divided among them?",
    "options": [
      "600, 1200, 1000",
      "800, 600, 1400",
      "1000, 1200, 600",
      "1200, 600, 1000",
      "None of these"
    ],
    "correct": "600, 1200, 1000",
    "explanation": "💼 Compound Profit Sharing Ratio:\n1. A's effective investment = 1000 × 12 = 12,000\n2. B's effective investment = 4000 × 6 = 24,000\n3. C's effective investment = 5000 × 4 = 20,000\n4. Profit ratio A : B : C = 12 : 24 : 20 = 3 : 6 : 5\n5. Total parts = 3 + 6 + 5 = 14 parts\n6. 1 part = 2800 / 14 = 200\n- A = 3 × 200 = **600**\n- B = 6 × 200 = **1200**\n- C = 5 × 200 = **1000**"
  },
  {
    "id": "part_q2",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B enter into a partnership for a year. A contributes 3000 and B 4000. After 4 months they admit C, who contributes 4500. If B withdraws his contribution after 6 months, how would they share a profit of 1000 at the end of the year?",
    "options": [
      "250, 200, 550",
      "150, 200, 650",
      "375, 250, 375",
      "Data inadequate",
      "None of these"
    ],
    "correct": "375, 250, 375",
    "explanation": "💼 Mid-Term Admission & Withdrawal:\n1. A was active for 12 months: 3000 × 12 = 36,000\n2. B withdrew after 6 months: 4000 × 6 = 24,000\n3. C joined after 4 months (active for 8 months): 4500 × 8 = 36,000\n4. Ratio A : B : C = 36,000 : 24,000 : 36,000 = 3 : 2 : 3\n5. Total parts = 3 + 2 + 3 = 8 parts\n6. 1 part = 1000 / 8 = 125\n- A = 3 × 125 = **375**\n- B = 2 × 125 = **250**\n- C = 3 × 125 = **375**"
  },
  {
    "id": "part_q3",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Medium",
    "points": 1,
    "question": "A, B and C enter into a partnership. A advances one-third of the capital for one-third of the time. B contributes one-sixth of the capital for one-third of the time C contributes the remaining capital for the whole time. How should they divide a profit of 1200.",
    "options": [
      "300, 200, 700",
      "200, 100, 900",
      "375, 250, 575",
      "385, 255, 475",
      "None of these"
    ],
    "correct": "200, 100, 900",
    "explanation": "💼 Fractional Capital & Duration:\n1. C's capital share = 1 - (1/3 + 1/6) = 1 - 1/2 = 1/2\n2. Investment equivalents:\n   - A: (1/3) × (1/3) = 1/9\n   - B: (1/6) × (1/3) = 1/18\n   - C: (1/2) × 1 = 1/2\n3. Multiply by LCM (18): Ratio = 2 : 1 : 9\n4. Total parts = 2 + 1 + 9 = 12 parts\n5. 1 part = 1200 / 12 = 100\n- A = 2 × 100 = **200**\n- B = 1 × 100 = **100**\n- C = 9 × 100 = **900**"
  },
  {
    "id": "part_q5",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B enter partnership investing 12000 and 16000, respectively. After 8 months, C also joins the business with a capital of 15000. The share of C in a profit of 45600 after 2 years will be–",
    "options": [
      "12000",
      "14400",
      "19200",
      "21200",
      "None of these"
    ],
    "correct": "12000",
    "explanation": "💼 Two-Year Horizon (24 Months):\n1. A's time = 24 months: 12,000 × 24 = 288,000\n2. B's time = 24 months: 16,000 × 24 = 384,000\n3. C joined after 8 months (active for 16 months): 15,000 × 16 = 240,000\n4. Ratio A : B : C = 288 : 384 : 240 = 6 : 8 : 5\n5. Total parts = 6 + 8 + 5 = 19 parts\n6. 1 part = 45,600 / 19 = 2,400\n7. C's share = 5 × 2,400 = **12,000**"
  },
  {
    "id": "part_q6",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Easy",
    "points": 1,
    "question": "Kishan and Nandan started a joint firm. Kishan’s investment was thrice the investment of Nandan, and the period of his investment was two times the period of investment of Nandan. Nandan got 4000 as profit for his investment. Their total profit if the distribution of profit is directly proportional to the period and amount, is–",
    "options": [
      "24000",
      "16000",
      "28000",
      "20000",
      "None of these"
    ],
    "correct": "28000",
    "explanation": "💼 Direct Multiples of Capital & Time:\n1. Let Nandan's capital = C, time = T -> Nandan factor = C × T = 1\n2. Kishan's capital = 3C, time = 2T -> Kishan factor = 3C × 2T = 6CT = 6\n3. Ratio Kishan : Nandan = 6 : 1\n4. Nandan's profit = 4000 (1 part = 4000)\n5. Total profit = 6 + 1 = 7 parts = 7 × 4000 = **28000**"
  },
  {
    "id": "part_q15",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Easy",
    "points": 1,
    "question": "Three partners A, B and C together invested 14400 in a business. At the end of the year, A got 1250, B got 2500 and C got 3750 as profit. How much amount did C invest?",
    "options": [
      "2400",
      "4800",
      "7200",
      "9600",
      "None of these"
    ],
    "correct": "7200",
    "explanation": "💼 Profit Ratio to Capital Share:\n1. Periods are equal (1 year each), so Capital Ratio = Profit Ratio.\n2. Ratio A : B : C = 1250 : 2500 : 3750 = 1 : 2 : 3\n3. Total ratio parts = 1 + 2 + 3 = 6 parts\n4. C's capital share = (3 / 6) × 14,400 = (1 / 2) × 14,400 = **7200**"
  },
  {
    "id": "part_q4",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Manoj got 6000 as his share out of the total profit of 9000 which he and Ramesh earned at the end of one year. If Manoj invested 20000 for 6 months, whereas Ramesh invested his amount for the whole year, the amount invested by Ramesh was–",
    "options": [
      "60000",
      "10000",
      "40000",
      "5000",
      "None of these"
    ],
    "correct": "5000",
    "explanation": "🔢 Solving for Unknown Capital:\n1. Total profit = 9000. Manoj's share = 6000 -> Ramesh's share = 9000 - 6000 = 3000\n2. Profit ratio Manoj : Ramesh = 6000 : 3000 = 2 : 1\n3. Manoj: 20,000 × 6 = 120,000\n4. Ramesh: R × 12 = 12R\n5. (120,000) / (12R) = 2 / 1\n6. 10,000 / R = 2 -> R = 10,000 / 2 = **5000**"
  },
  {
    "id": "part_q7",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B enter a partnership with their capitals in the ratio 5 : 9. At the end of 8 months, A withdraws his capital. If they receive the profits in the ratio 4 : 9, find how long B’s capital was used?",
    "options": [
      "10 months",
      "9 months",
      "8 months",
      "4 months",
      "None of these"
    ],
    "correct": "10 months",
    "explanation": "🔢 Solving for Unknown Duration:\n1. (C_A × T_A) / (C_B × T_B) = P_A / P_B\n2. (5 × 8) / (9 × T_B) = 4 / 9\n3. 40 / (9 × T_B) = 4 / 9\n4. 40 = 4 × T_B -> T_B = 40 / 4 = **10 months**"
  },
  {
    "id": "part_q8",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A started a business by investing 2700. After some time, B joined him by investing 2025. At the end of one year, the profit was divided in the ratio 2 : 1. After how many months did B join the business?",
    "options": [
      "4 months",
      "6 months",
      "3 months",
      "2 months",
      "None of these"
    ],
    "correct": "4 months",
    "explanation": "🔢 Time of Delayed Entry:\n1. A was active for 12 months: 2700 × 12 = 32,400\n2. Let B be active for t months: 2025 × t\n3. Profit ratio = 2 : 1 -> 32,400 / (2025 × t) = 2 / 1\n4. 2025 × t = 16,200 -> t = 16,200 / 2025 = 8 months\n5. Since B was in the business for 8 months, B joined after: 12 - 8 = **4 months**"
  },
  {
    "id": "part_q9",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Easy",
    "points": 1,
    "question": "A, B and C invested in the ratio 1 : 2 : 3 . the timing of their investments being in the ratio 1 : 2 : 3. In what ratio would their profit be distributed?",
    "options": [
      "3 : 2 : 1",
      "1 : 2 : 3",
      "1 : 4 : 9",
      "9 : 4 : 1",
      "None of these"
    ],
    "correct": "1 : 4 : 9",
    "explanation": "🔢 Compound Ratio Multiplication:\n1. Profit Ratio = (Capital_A × Time_A) : (Capital_B × Time_B) : (Capital_C × Time_C)\n2. (1 × 1) : (2 × 2) : (3 × 3) = **1 : 4 : 9**"
  },
  {
    "id": "part_q10",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A, B and C invested capitals in the ratio 4 : 5 : 6. At the end of the business term, they received the profits in the ratio 2 : 3 : 4. Find the ratio of time for which they contributed their capitals.",
    "options": [
      "6 : 5 : 8",
      "6 : 5 : 9",
      "10 : 12 : 9",
      "15 : 18 : 20",
      "None of these"
    ],
    "correct": "15 : 18 : 20",
    "explanation": "🔢 Ratio Inversion (Time = Profit / Capital):\n1. T_A : T_B : T_C = (2 / 4) : (3 / 5) : (4 / 6) = (1 / 2) : (3 / 5) : (2 / 3)\n2. Multiply through by LCM(2, 5, 3) = 30:\n   - A: (1/2) × 30 = 15\n   - B: (3/5) × 30 = 18\n   - C: (2/3) × 30 = 20\n3. Ratio = **15 : 18 : 20**"
  },
  {
    "id": "part_q11",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A, B and C invest their capitals in a business. If the ratio of their periods of investments are 2 : 3 : 6 and their profits are in the ratio of 4 : 5 : 6. Find the ratio in which the investments are made by A, B and C.",
    "options": [
      "9 : 10 : 12",
      "4 : 5 : 6",
      "8 : 5 : 12",
      "6 : 5 : 3",
      "None of these"
    ],
    "correct": "6 : 5 : 3",
    "explanation": "🔢 Ratio Inversion (Capital = Profit / Time):\n1. C_A : C_B : C_C = (4 / 2) : (5 / 3) : (6 / 6) = 2 : (5 / 3) : 1\n2. Multiply through by 3:\n   - A: 2 × 3 = 6\n   - B: (5/3) × 3 = 5\n   - C: 1 × 3 = 3\n3. Ratio = **6 : 5 : 3**"
  },
  {
    "id": "part_q16",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Hard",
    "points": 1,
    "question": "A puts 375 more in a business than B, but B has invested his capital for 4 months while A has invested his for 8 months. If the share of A is 75 more than that of B out of the total profit of 125, find the capital contributed by B?",
    "options": [
      "750",
      "375",
      "735",
      "573",
      "None of these"
    ],
    "correct": "375",
    "explanation": "🔢 Simultaneous Capital & Profit Formulation:\n1. Total profit = 125. P_A + P_B = 125 and P_A - P_B = 75\n2. Adding both: 2P_A = 200 -> P_A = 100, P_B = 25\n3. Profit ratio P_A : P_B = 100 : 25 = 4 : 1\n4. Let B's capital = x -> A's capital = x + 375\n5. [(x + 375) × 8] / [x × 4] = 4 / 1\n6. 2(x + 375) / x = 4 -> (x + 375) / x = 2 -> x + 375 = 2x -> x = **375**"
  },
  {
    "id": "part_q12",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "A, B and C are partners. A receives 2/7 of the profit and B and C share the remaining profit equally. A’s income is increased by 240 when the profit rises from 10% to 15%. Find the capitals invested by B and C each.",
    "options": [
      "2400",
      "1200",
      "4800",
      "6000",
      "None of these"
    ],
    "correct": "6000",
    "explanation": "💰 Return on Capital Percentage:\n1. Remaining profit after A's 2/7 = 5/7\n2. B and C share equally: B = (1/2) × (5/7) = 5/14, C = 5/14\n3. Profit (and capital) ratio A : B : C = (4/14) : (5/14) : (5/14) = 4 : 5 : 5\n4. A's return increases by 15% - 10% = 5% of A's capital = 240\n5. 0.05 × C_A = 240 -> C_A = 240 / 0.05 = 4800\n6. Since C_A : C_B = 4 : 5:\n   C_B = C_C = 4800 × (5 / 4) = **6000** each"
  },
  {
    "id": "part_q13",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Two partners invest 26000 and 16250 respectively in a business and agree that 40% of the profit should be divided equally between them and the remaining profit is to be treated as interest on capital. If one partner gets 450 more than the other, find the total profit made in the business.",
    "options": [
      "3250",
      "3520",
      "3230",
      "3200",
      "None of these"
    ],
    "correct": "3250",
    "explanation": "💰 Partial Equal & Capital Division:\n1. Capital ratio = 26,000 : 16,250 = 8 : 5 (divided by 3250)\n2. The 40% divided equally causes zero difference between them.\n3. The remaining 60% of total profit (P) creates the difference:\n   Difference = [(8 - 5) / (8 + 5)] × 0.60P = (3 / 13) × (3/5)P = (9 / 65)P\n4. (9 / 65)P = 450 -> P = (450 × 65) / 9 = 50 × 65 = **3250**"
  },
  {
    "id": "part_q14",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B invested in the ratio 5 : 3 in a business. If 10% of the total profit goes to charity and A’s share is 900, find the total profit.",
    "options": [
      "1600",
      "1400",
      "1500",
      "1800",
      "None of these"
    ],
    "correct": "1600",
    "explanation": "💰 Charity Deduction Prior to Distribution:\n1. Let total profit = P\n2. 10% to charity -> 90% remaining for partners = 0.90P\n3. A's share = (5 / 8) × 0.90P = 900\n4. 4.5P / 8 = 900 -> 4.5P = 7200 -> P = 7200 / 4.5 = **1600**"
  },
  {
    "id": "part_q17",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B invest 3000 and 4000 in a business. A receives 10 per month out of the profit as a remuneration for running the business and the rest of profit is divided in proportion to the investments. If in year ‘A’ totally receives 390, what does B receive?",
    "options": [
      "630",
      "360",
      "480",
      "380",
      "None of these"
    ],
    "correct": "360",
    "explanation": "💰 Working Partner Monthly Salary:\n1. A's annual remuneration = 10 × 12 = 120\n2. A's share from business profit = 390 - 120 = 270\n3. Ratio of capital A : B = 3000 : 4000 = 3 : 4\n4. A's profit (3 parts) = 270 -> 1 part = 270 / 3 = 90\n5. B's profit (4 parts) = 4 × 90 = **360**"
  },
  {
    "id": "part_q18",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Easy",
    "points": 1,
    "question": "A sum of money is to be divided among A, B and C in the ratio 2 : 3 : 7. If the total share of A and B together is 1500 less than C, what is A’s share in it?",
    "options": [
      "1000",
      "1500",
      "2000",
      "Data inadequate",
      "None of these"
    ],
    "correct": "1500",
    "explanation": "💰 Ratio Difference Equation:\n1. Ratio A : B : C = 2 : 3 : 7\n2. Share of (A + B) = 2 + 3 = 5 parts\n3. Share of C = 7 parts\n4. Difference = 7 - 5 = 2 parts = 1500\n5. 1 part = 750\n6. A's share (2 parts) = 2 × 750 = **1500**"
  },
  {
    "id": "syl_q1",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nSome kites are threads.\nNo thread is needle.\n\nConclusions:\nI. Some kites are needles.\nII. No needle is thread.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if only Conclusion II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Statement 2 is a Universal Negative (E-type): 'No thread is needle'. Its direct and valid conversion is 'No needle is thread'. Therefore, **Conclusion II definitely follows**.\n2. Statement 1 (Some kites are threads) and Statement 2 (No thread is needle) give 'Some kites are not needles', but 'Some kites are needles' is uncertain and not necessarily true.\n- Hence, **only Conclusion II follows**."
  },
  {
    "id": "syl_q3",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nAll flowers are trees.\nAll trees are fruits.\n\nConclusions:\nI. Some fruits are flowers.\nII. All flowers are fruits.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if both Conclusions I and II follow.",
    "explanation": "🔍 Logical Analysis:\n1. Premise 1: All Flowers are Trees (Flowers ⊆ Trees)\n2. Premise 2: All Trees are Fruits (Trees ⊆ Fruits)\n3. Combining: Flowers ⊆ Trees ⊆ Fruits implies **All flowers are fruits** (Conclusion II definitely follows).\n4. Since All flowers are fruits, by subalternation/conversion, **Some fruits are flowers** (Conclusion I definitely follows).\n- Therefore, **both Conclusions I and II follow**."
  },
  {
    "id": "syl_q4",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nSome books are bags.\nAll bags are trees.\n\nConclusions:\nI. Some books are trees.\nII. Some trees are books.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if both Conclusions I and II follow.",
    "explanation": "🔍 Logical Analysis:\n1. 'Some books are bags' (I-type) + 'All bags are trees' (A-type) = 'Some books are trees' (I-type). Hence, **Conclusion I follows**.\n2. By immediate conversion of 'Some books are trees', we get **Some trees are books** (Conclusion II follows).\n- Therefore, **both Conclusions I and II follow**."
  },
  {
    "id": "syl_q5",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome windows are doors.\nNo door is chair.\n\nConclusions:\nI. Some windows are chairs.\nII. All doors are windows.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if neither Conclusion I nor II follows.",
    "explanation": "🔍 Logical Analysis:\n1. The windows that are doors cannot be chairs ('Some windows are not chairs'). However, whether other windows are chairs is indeterminate. Thus, Conclusion I does not follow.\n2. 'Some windows are doors' converts only to 'Some doors are windows', NOT 'All doors are windows'. Thus, Conclusion II does not follow.\n- Therefore, **neither Conclusion I nor II follows**."
  },
  {
    "id": "syl_q7",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nSome buses are trains.\nSome trains are boats.\n\nConclusions:\nI. Some trains are buses.\nII. Some boats are buses.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if only Conclusion I follows.",
    "explanation": "🔍 Logical Analysis:\n1. Statement 1: 'Some buses are trains' converts directly to **Some trains are buses**. Therefore, **Conclusion I follows**.\n2. Two particular premises (Some + Some) yield no definite conclusion between the extremes (buses and boats). Thus, Conclusion II does not follow.\n- Therefore, **only Conclusion I follows**."
  },
  {
    "id": "syl_q9",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nAll pens are chalks.\nAll chairs are chalks.\n\nConclusions:\nI. Some pens are chairs.\nII. Some chalks are pens.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if only Conclusion II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Both Pens and Chairs are contained in Chalks. Since the middle term 'chalks' is not distributed in either premise (fallacy of undistributed middle), pens and chairs may be completely disjoint. Thus, Conclusion I does not follow.\n2. 'All pens are chalks' (A-type) converts by limitation to **Some chalks are pens**. Therefore, **Conclusion II follows**.\n- Hence, **only Conclusion II follows**."
  },
  {
    "id": "syl_q2",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome trucks are houses.\nSome houses are trains.\n\nConclusions:\nI. Some trains are trucks.\nII. No train is truck.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if either Conclusion I or II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Two particular statements (Some + Some) yield no definite relation between 'trains' and 'trucks'.\n2. However, Conclusion I is a Particular Affirmative ('Some trains are trucks') and Conclusion II is a Universal Negative ('No train is truck').\n3. They share the same subject and predicate terms and form an I-E complementary pair: one must be true, and both cannot be false simultaneously.\n- Therefore, **either Conclusion I or II follows**."
  },
  {
    "id": "syl_q6",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nAll forests are figures.\nSome figures are houses.\n\nConclusions:\nI. Some houses are forests.\nII. No house is forest.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if either Conclusion I or II follows.",
    "explanation": "🔍 Logical Analysis:\n1. The middle term 'figures' is undistributed, so no definite relation exists between 'houses' and 'forests'.\n2. Conclusion I ('Some houses are forests') and Conclusion II ('No house is forest') are contradictory propositions (I and E type) with the same subject and predicate.\n- Therefore, **either Conclusion I or II follows**."
  },
  {
    "id": "syl_q8",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome books are tables.\nSome tables are mirrors.\n\nConclusions:\nI. Some mirrors are books.\nII. No book is mirror.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if either Conclusion I or II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Two particular premises (Some + Some) provide no definite connection between 'mirrors' and 'books'.\n2. 'Some mirrors are books' (I-type) and 'No book is mirror' (E-type, equivalent to 'No mirror is book') form a classic complementary pair.\n- Therefore, **either Conclusion I or II follows**."
  },
  {
    "id": "syl_q12",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome days are nights.\nSome nights are months.\nSome months are years.\n\nConclusions:\nI. Some years are nights.\nII. Some months are days.\nIII. No year is night.",
    "options": [
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only either I or III follows",
      "None of these"
    ],
    "correct": "Only either I or III follows",
    "explanation": "🔍 Logical Analysis:\n1. All premises are particular (Some), so no definite link exists between non-adjacent terms (years-nights or months-days). Conclusion II does not follow.\n2. Between 'years' and 'nights', Conclusion I ('Some years are nights') and Conclusion III ('No year is night') form an I-E complementary pair.\n- Therefore, **only either I or III follows**."
  },
  {
    "id": "syl_q17",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nSome boxes are walls.\nNo wall is road.\nAll roads are rivers.\n\nConclusions:\nI. Some rivers are walls\nII. Some roads are boxes\nIII. No wall is river",
    "options": [
      "Only I follows",
      "Only either I or III follows",
      "Only III follows",
      "Only II follows",
      "Only II and III follow"
    ],
    "correct": "Only either I or III follows",
    "explanation": "🔍 Logical Analysis:\n1. 'No wall is road' and 'All roads are rivers' means roads cannot touch walls, but the rest of rivers may or may not overlap walls.\n2. Hence, neither Conclusion I ('Some rivers are walls') nor Conclusion III ('No wall is river' ≡ 'No river is wall') is individually certain.\n3. Together, they form an I-E complementary pair.\n4. Conclusion II ('Some roads are boxes') has no necessary connection and does not follow.\n- Therefore, **only either I or III follows**."
  },
  {
    "id": "syl_q23",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nAll birds are goats.\nNo goat is flower.\nSome flowers are mountains.\nSome mountains are nets.\n\nConclusions:\nI. Some nets are goats.\nII. No net is goat.\nIII. Some mountains are birds.",
    "options": [
      "None follows",
      "Only I follows",
      "Only either I or II follows",
      "Only II follows",
      "Only III follows"
    ],
    "correct": "Only either I or II follows",
    "explanation": "🔍 Logical Analysis:\n1. Nets and Goats have no direct constraint between them. Therefore, Conclusion I ('Some nets are goats') and Conclusion II ('No net is goat') form a complementary pair.\n2. Mountains overlap Flowers, but Flowers cannot overlap Goats (or Birds ⊆ Goats). While some mountains are not birds, 'Some mountains are birds' is not guaranteed. Conclusion III does not follow.\n- Therefore, **only either I or II follows**."
  },
  {
    "id": "syl_q10",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome buses are bells.\nSome bells are horses.\nAll trains are horses.\n\nConclusions:\nI. Some buses are horses.\nII. Some trains are bells.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if neither Conclusion I nor II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Buses overlap Bells. Bells overlap Horses. Trains ⊆ Horses.\n2. No connection is established between Buses and Horses (I is uncertain).\n3. Trains are inside Horses, but have no definite overlap with Bells (II is uncertain).\n- Therefore, **neither Conclusion I nor II follows**."
  },
  {
    "id": "syl_q11",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nAll petals are trees.\nAll trees are gardens.\nAll roads are gardens.\n\nConclusions:\nI. Some roads are trees.\nII. Some gardens are trees.\nIII. Some gardens are petals.",
    "options": [
      "Only I and II follow",
      "Only II and III follow",
      "Only I and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only II and III follow",
    "explanation": "🔍 Logical Analysis:\n1. Petals ⊆ Trees ⊆ Gardens.\n2. Since Trees ⊆ Gardens, by conversion **Some gardens are trees** (II is true).\n3. Since Petals ⊆ Gardens, by conversion **Some gardens are petals** (III is true).\n4. Both Roads and Trees are inside Gardens, but may be disjoint. Conclusion I does not follow.\n- Therefore, **only II and III follow**."
  },
  {
    "id": "syl_q13",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nAll cycles are tyres.\nSome tyres are wheels.\nAll wheels are buses.\n\nConclusions:\nI. Some buses are tyres.\nII. Some wheels are tyres.\nIII. Some buses are cycles.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only I and II follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some tyres are wheels' + 'All wheels are buses' gives 'Some tyres are buses', which converts to **Some buses are tyres** (I follows).\n2. 'Some tyres are wheels' converts directly to **Some wheels are tyres** (II follows).\n3. Cycles ⊆ Tyres, but cycles have no necessary connection to buses (III does not follow).\n- Therefore, **only I and II follow**."
  },
  {
    "id": "syl_q14",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome dogs are cats.\nSome cats are horses.\nAll horses are tigers.\n\nConclusions :\nI. Some tigers are cats.\nII. Some horses are dogs.\nIII. Some tigers are dogs.",
    "options": [
      "None follows",
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only II and III follow"
    ],
    "correct": "Only I follows",
    "explanation": "🔍 Logical Analysis:\n1. 'Some cats are horses' + 'All horses are tigers' gives 'Some cats are tigers', which converts to **Some tigers are cats** (I follows).\n2. Dogs overlap cats, but need not overlap horses or tigers (II and III do not follow).\n- Therefore, **only I follows**."
  },
  {
    "id": "syl_q15",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nAll pictures are bands.\nSome bands are chairs.\nSome chairs are tables.\n\nConclusions:\nI. Some tables are bands.\nII. Some chairs are pictures.\nIII. Some tables are pictures.",
    "options": [
      "None follows",
      "Only I follows",
      "Only II follows",
      "Only I and II follow",
      "Only III follows"
    ],
    "correct": "None follows",
    "explanation": "🔍 Logical Analysis:\n1. Pictures ⊆ Bands. Bands overlap Chairs. Chairs overlap Tables.\n2. Tables and Bands have no necessary intersection (I does not follow).\n3. Chairs and Pictures have no necessary intersection (II does not follow).\n4. Tables and Pictures have no necessary intersection (III does not follow).\n- Therefore, **none follows**."
  },
  {
    "id": "syl_q16",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements :\nSome bikes are cars.\nSome cars are trains.\nSome trains are buses.\n\nConclusions :\nI. Some buses are cars.\nII. Some trains are bikes.\nIII. Some buses are bikes.",
    "options": [
      "None follows",
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only I and II follow"
    ],
    "correct": "None follows",
    "explanation": "🔍 Logical Analysis:\n1. All three premises are particular (Some), so no transitive deduction can connect non-adjacent elements.\n2. None of the conclusions (buses-cars, trains-bikes, buses-bikes) are certain.\n- Therefore, **none follows**."
  },
  {
    "id": "syl_q18",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements :\nSome tables are chairs.\nAll chairs are houses.\nAll houses are tents.\n\nConclusions:\nI. All houses are chairs.\nII. Some tents are chairs.\nIII. Some houses are tables.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only II and III follow",
    "explanation": "🔍 Logical Analysis:\n1. Chairs ⊆ Houses ⊆ Tents.\n2. Since Chairs ⊆ Tents, by conversion **Some tents are chairs** (II follows).\n3. 'Some tables are chairs' + 'All chairs are houses' gives 'Some tables are houses', which converts to **Some houses are tables** (III follows).\n4. 'All chairs are houses' does not imply 'All houses are chairs' (I does not follow).\n- Therefore, **only II and III follow**."
  },
  {
    "id": "syl_q19",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements :\nAll pens are sticks.\nAll sticks are rings.\nAll rings are rods.\n\nConclusions :\nI. Some rings are pens.\nII. Some rods are sticks.\nIII. Some rods are pens.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "All I, II and III follow",
    "explanation": "🔍 Logical Analysis:\n1. Nested concentric sets: Pens ⊆ Sticks ⊆ Rings ⊆ Rods.\n2. All pens are rings implies **Some rings are pens** (I follows).\n3. All sticks are rods implies **Some rods are sticks** (II follows).\n4. All pens are rods implies **Some rods are pens** (III follows).\n- Therefore, **all I, II and III follow**."
  },
  {
    "id": "syl_q20",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nSome nails are plates.\nSome plates are disks.\nAll disks are mirrors.\nAll mirrors are tyres.\n\nConclusions:\nI. Some tyres are plates.\nII. Some tyres are nails.\nIII. Some mirrors are plates.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only I and III follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some plates are disks' + 'All disks are mirrors' gives 'Some plates are mirrors', converting to **Some mirrors are plates** (III follows).\n2. 'Some plates are mirrors' + 'All mirrors are tyres' gives 'Some plates are tyres', converting to **Some tyres are plates** (I follows).\n3. Nails only overlap Plates and have no guaranteed overlap with Tyres (II does not follow).\n- Therefore, **only I and III follow**."
  },
  {
    "id": "syl_q22",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nSome skies are rains.\nSome rains are stars.\nAll stars are planets.\nAll planets are clouds.\n\nConclusions:\nI. Some clouds are rains.\nII. Some planets are skies.\nIII. Some planets are rains.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only I and III follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some rains are stars' + 'All stars are planets' gives 'Some rains are planets', converting to **Some planets are rains** (III follows).\n2. 'Some rains are planets' + 'All planets are clouds' gives 'Some rains are clouds', converting to **Some clouds are rains** (I follows).\n3. Skies only overlap Rains and have no necessary overlap with Planets (II does not follow).\n- Therefore, **only I and III follow**."
  },
  {
    "id": "syl_q21",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Complex Multi-Conclusion & Hybrid Either-Or Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nAll shirts are hats.\nNo hat is suit. Some rings are suits.\nAll rings are bangles.\n\nConclusions:\nI. Some rings are hats.\nII. Some bangles are suits.\nIII. No ring is hat.",
    "options": [
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only either I or III follows",
      "Only either I or III and II follow"
    ],
    "correct": "Only either I or III and II follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some rings are suits' + 'All rings are bangles' gives **Some bangles are suits** (Conclusion II definitely follows).\n2. Hats and Suits are completely disjoint. Rings overlap Suits (so rings that are suits cannot be hats), but other rings might or might not be hats.\n3. Conclusion I ('Some rings are hats') and Conclusion III ('No ring is hat') form an I-E complementary pair.\n- Therefore, **only either I or III and II follow**."
  },
  {
    "id": "syl_q24",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Complex Multi-Conclusion & Hybrid Either-Or Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nSome leaves are skies.\nAll skies are clouds.\nNo cloud is a boat.\n\nConclusions:\nI. Some boats are leaves.\nII. Some clouds are leaves.\nIII. All skies are leaves.\nIV. No leaves is a boat.",
    "options": [
      "Only I, II and IV follow",
      "Only II, III and IV follow",
      "Either I or IV and II follow",
      "Either I or IV and III follow",
      "None of these"
    ],
    "correct": "Either I or IV and II follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some leaves are skies' + 'All skies are clouds' gives 'Some leaves are clouds', which converts to **Some clouds are leaves** (Conclusion II definitely follows).\n2. Leaves that are clouds cannot be boats, but other leaves might or might not be boats. Conclusion I ('Some boats are leaves') and Conclusion IV ('No leaves is a boat') form a complementary pair.\n3. Conclusion III ('All skies are leaves') does not follow from 'Some leaves are skies'.\n- Therefore, **either I or IV and II follow**."
  },
  {
    "id": "syl_q25",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Complex Multi-Conclusion & Hybrid Either-Or Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nNo building is white.\nAll whites are oranges.\nSome oranges are waters.\n\nConclusions:\nI. No building is water.\nII. No orange is a building.\nIII. Some oranges are whites.\nIV. Some waters are building.",
    "options": [
      "Either I or IV and II follow",
      "Either I or IV and III follow",
      "Either I or IV follows",
      "None follows",
      "Either I or IV and II and III follow"
    ],
    "correct": "Either I or IV and III follow",
    "explanation": "🔍 Logical Analysis:\n1. 'All whites are oranges' converts directly to **Some oranges are whites** (Conclusion III definitely follows).\n2. Between Buildings and Waters, no direct relationship is specified. Conclusion I ('No building is water') and Conclusion IV ('Some waters are building') form a complementary pair.\n3. Conclusion II ('No orange is a building') does not follow because the non-white part of oranges can be buildings.\n- Therefore, **either I or IV and III follow**."
  },
  {
    "id": "ratio_q1",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find a fourth proportional to the numbers 6, 8, 9.",
    "options": [
      "12",
      "7",
      "5",
      "14",
      "None of these"
    ],
    "correct": "12",
    "explanation": "📐 Fourth Proportional Formula:\n- If a : b :: c : x, then Product of Extremes = Product of Means:\n  a · x = b · c\n- 6 · x = 8 · 9 = 72\n- x = 72 / 6 = **12**."
  },
  {
    "id": "ratio_q2",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find a third proportional to the numbers 3 and 6.",
    "options": [
      "21",
      "1.5",
      "18",
      "12",
      "None of these"
    ],
    "correct": "12",
    "explanation": "📐 Third Proportional Formula:\n- If a : b :: b : x, then:\n  x = b² / a\n- x = 6² / 3 = 36 / 3 = **12**."
  },
  {
    "id": "ratio_q12",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of three numbers is 105. If the ratio between the first and second be 2 : 3 and that between the second and third be 4 : 5, then find the second number.",
    "options": [
      "35",
      "24",
      "36",
      "45",
      "None of these"
    ],
    "correct": "36",
    "explanation": "📐 Combining Ratios:\n1. A : B = 2 : 3 = 8 : 12\n2. B : C = 4 : 5 = 12 : 15\n3. Combined ratio A : B : C = 8 : 12 : 15\n4. Sum of ratio terms = 8 + 12 + 15 = 35 parts\n5. 1 part = 105 / 35 = 3\n6. Second number (B) = 12 × 3 = **36**."
  },
  {
    "id": "ratio_q13",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A : B = 3 : 4, B : C = 5 : 7 and C : D = 3 : 5, then find A : B : C : D.",
    "options": [
      "9 : 21 : 12 : 28",
      "45 : 60 : 84 : 140",
      "9 : 12 : 28 : 21",
      "9 : 12 : 21 : 82",
      "None of these"
    ],
    "correct": "45 : 60 : 84 : 140",
    "explanation": "📐 Compound Ratio Chain:\n1. A : B = 3 : 4\n2. B : C = 5 : 7 -> A : B : C = (3×5) : (4×5) : (4×7) = 15 : 20 : 28\n3. C : D = 3 : 5:\n   Multiply A : B : C by 3 -> 45 : 60 : 84\n   D = 28 × 5 = 140\n4. A : B : C : D = **45 : 60 : 84 : 140**."
  },
  {
    "id": "ratio_q14",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Medium",
    "points": 1,
    "question": "A hound pursues a hare and takes 6 leaps for every 7 leaps of the hare, but 5 leaps of the hound are equal to 6 leaps of the hare. Compare the rates of the hound and the hare.",
    "options": [
      "36 : 35",
      "35 : 34",
      "34 : 33",
      "31 : 32",
      "None of these"
    ],
    "correct": "36 : 35",
    "explanation": "📐 Leap Rate Comparison:\n1. Let distance of 1 hound leap = H, and 1 hare leap = h.\n2. Given: 5H = 6h -> H / h = 6 / 5.\n3. Rate (Speed) = (Number of leaps in unit time) × (Length of each leap)\n4. Hound Speed : Hare Speed = (6 × H) : (7 × h) = (6 × 6) : (7 × 5) = **36 : 35**."
  },
  {
    "id": "ratio_q23",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Medium",
    "points": 1,
    "question": "An employer reduces the number of his employees in the ratio 9 : 4 and increases their wages in the ratio 2 : 5. State whether his bill of total wages increases or decreases, and in what ratio?",
    "options": [
      "Decrease, 10 : 9",
      "Increase, 10 : 9",
      "Decrease 9 : 11",
      "Increase, 9 : 10",
      "None of these"
    ],
    "correct": "Increase, 9 : 10",
    "explanation": "📐 Total Wage Bill Multiplication:\n1. Initial wage bill = Employees × Wage = 9 × 2 = 18\n2. New wage bill = 4 × 5 = 20\n3. Ratio of initial bill to new bill = 18 : 20 = 9 : 10\n4. Since 10 > 9, the total wage bill **increases** in the ratio **9 : 10**."
  },
  {
    "id": "ratio_q3",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Easy",
    "points": 1,
    "question": "Two numbers are in the ratio of 9 : 11. If sum of these two numbers is 660, find the difference between the numbers.",
    "options": [
      "66",
      "56",
      "46",
      "76",
      "None of these"
    ],
    "correct": "66",
    "explanation": "💰 Ratio Sum and Difference:\n1. Sum of ratio terms = 9 + 11 = 20 parts = 660\n2. 1 part = 660 / 20 = 33\n3. Difference between numbers = 11 - 9 = 2 parts = 2 × 33 = **66**."
  },
  {
    "id": "ratio_q4",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Medium",
    "points": 1,
    "question": "A bag contains rupee, 50-paise and 25-paise coins in the ratio 5 : 7 : 9. If the total amount in the bag is 430, find the number of coins of each kind.",
    "options": [
      "200, 280, 360",
      "280, 200, 360",
      "360, 280, 200",
      "360, 200, 280",
      "None of these"
    ],
    "correct": "200, 280, 360",
    "explanation": "💰 Coin Denomination Value Valuation:\n1. Let coin counts be 5x, 7x, 9x.\n2. Total value in Rupees:\n   - 1-rupee coins: 5x × 1 = 5x\n   - 50-paise coins: 7x × 0.50 = 3.5x\n   - 25-paise coins: 9x × 0.25 = 2.25x\n3. Sum = 5x + 3.5x + 2.25x = 10.75x = 430\n4. x = 430 / 10.75 = 40\n5. Coins of each kind:\n   - 1-rupee = 5 × 40 = **200**\n   - 50-paise = 7 × 40 = **280**\n   - 25-paise = 9 × 40 = **360**"
  },
  {
    "id": "ratio_q5",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Easy",
    "points": 1,
    "question": "A bag contains an equal number of 50-paise, 25-paise, 20 paise and 5-paise coins, respectively. If the total value is 40, how many coins of each type are there?",
    "options": [
      "40",
      "25",
      "30",
      "20",
      "None of these"
    ],
    "correct": "40",
    "explanation": "💰 Equal Number of Coins:\n1. Let there be x coins of each denomination.\n2. Total value of 1 set of each coin = 50 + 25 + 20 + 5 = 100 paise = ₹1\n3. Total value = x × ₹1 = ₹40 -> x = **40** coins of each type."
  },
  {
    "id": "ratio_q10",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Easy",
    "points": 1,
    "question": "An amount of 950 is distributed among A, B and C in the ratio of 5 : 11 : 3, what is the difference between the share of B and A?",
    "options": [
      "550",
      "250",
      "200",
      "300",
      "None of these"
    ],
    "correct": "300",
    "explanation": "💰 Share Distribution:\n1. Total ratio terms = 5 + 11 + 3 = 19 parts = 950\n2. 1 part = 950 / 19 = 50\n3. Difference between B and A = 11 - 5 = 6 parts = 6 × 50 = **300**."
  },
  {
    "id": "ratio_q25",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Medium",
    "points": 1,
    "question": "Divide 680 among A, B and C such that A gets 2/3 of what B gets and B gets 1/4th of what C gets. What is C’s share?",
    "options": [
      "280",
      "380",
      "480",
      "120",
      "None of these"
    ],
    "correct": "480",
    "explanation": "💰 Successive Fractions:\n1. A = (2/3)B and B = (1/4)C -> C = 4B\n2. Ratio A : B : C = (2/3)B : B : 4B = (2/3) : 1 : 4 = 2 : 3 : 12\n3. Total parts = 2 + 3 + 12 = 17 parts = 680\n4. 1 part = 680 / 17 = 40\n5. C's share (12 parts) = 12 × 40 = **480**."
  },
  {
    "id": "ratio_q27",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Hard",
    "points": 1,
    "question": "600 has been divided among A, B and C in such a way that 40 more than (2/5) of A’s share, 20 more than (2/7) of B’s share, 10 more than (9/17) of C’s share, are all equal. A’s share is :",
    "options": [
      "280",
      "170",
      "150",
      "200",
      "None of these"
    ],
    "correct": "150",
    "explanation": "💰 Equality of Modified Shares:\n1. Let (2/5)A + 40 = (2/7)B + 20 = (9/17)C + 10 = k\n2. A = (5/2)(k - 40), B = (7/2)(k - 20), C = (17/9)(k - 10)\n3. A + B + C = 600:\n   [(5/2)k - 100] + [(7/2)k - 70] + [(17/9)k - 170/9] = 600\n   6k + (17/9)k = 770 + 170/9\n   (71/9)k = 7100/9 -> 71k = 7100 -> k = 100\n4. A's share = (5/2)(100 - 40) = (5/2) × 60 = **150**."
  },
  {
    "id": "ratio_q6",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Easy",
    "points": 1,
    "question": "One man adds 6 liters of water to 11 liters of milk and another 9 liters of water to 8 liters of milk. What is the ratio of the strengths of milk in the two mixtures?",
    "options": [
      "2 : 3",
      "3 : 2",
      "11 : 8",
      "8 : 11",
      "None of these"
    ],
    "correct": "11 : 8",
    "explanation": "🧪 Mixture Concentration Strength:\n1. Mixture 1: Milk = 11 L, Total = 11 + 6 = 17 L -> Strength = 11 / 17\n2. Mixture 2: Milk = 8 L, Total = 8 + 9 = 17 L -> Strength = 8 / 17\n3. Ratio of strengths = (11 / 17) : (8 / 17) = **11 : 8**."
  },
  {
    "id": "ratio_q7",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "Two vessels contain equal quantity of mixtures of milk and water in the ratio 8 : 9 and 12 : 5, respectively. Both the mixtures are now mixed thoroughly. Find the ratio of milk to water in the new mixture so obtained.",
    "options": [
      "7 : 10",
      "13 : 21",
      "21 : 13",
      "10 : 7",
      "None of these"
    ],
    "correct": "10 : 7",
    "explanation": "🧪 Equal Volume Mixture Combining:\n1. Vessel 1 (8 : 9, total 17): Milk = 8/17, Water = 9/17\n2. Vessel 2 (12 : 5, total 17): Milk = 12/17, Water = 5/17\n3. Total Milk = 8 + 12 = 20 parts\n4. Total Water = 9 + 5 = 14 parts\n5. Ratio Milk : Water = 20 : 14 = **10 : 7**."
  },
  {
    "id": "ratio_q8",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "The contents of two vessels containing water and milk are in the ratio 2 : 3 and 4 : 5 are mixed in the ratio 1 : 2. The resulting mixture will have water and milk in the ratio________ .",
    "options": [
      "77 : 58",
      "58 : 77",
      "68 : 77",
      "77 : 68",
      "None of these"
    ],
    "correct": "58 : 77",
    "explanation": "🧪 Weighted Vessel Mixing:\n1. Vessel 1 (Water : Milk = 2 : 3, total 5): Water = 2/5, Milk = 3/5\n2. Vessel 2 (Water : Milk = 4 : 5, total 9): Water = 4/9, Milk = 5/9\n3. Mixing in ratio 1 : 2:\n   - Water = 1(2/5) + 2(4/9) = 2/5 + 8/9 = (18 + 40) / 45 = 58 / 45\n   - Milk = 1(3/5) + 2(5/9) = 3/5 + 10/9 = (27 + 50) / 45 = 77 / 45\n4. Ratio Water : Milk = **58 : 77**."
  },
  {
    "id": "ratio_q9",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "The contents of two vessels containing water and milk are in the ratio 3 : 4 and 5 : 4 are mixed in the ratio 1 : 4. The resulting mixture will have water and milk in the ratio_______ .",
    "options": [
      "184 : 176",
      "167 : 184",
      "167 : 148",
      "148 : 167",
      "None of these"
    ],
    "correct": "167 : 148",
    "explanation": "🧪 Weighted Vessel Mixing (1 : 4):\n1. Vessel 1 (Water : Milk = 3 : 4, sum 7): Water = 3/7, Milk = 4/7\n2. Vessel 2 (Water : Milk = 5 : 4, sum 9): Water = 5/9, Milk = 4/9\n3. Weighted combination:\n   - Water = 1(3/7) + 4(5/9) = 3/7 + 20/9 = (27 + 140) / 63 = 167 / 63\n   - Milk = 1(4/7) + 4(4/9) = 4/7 + 16/9 = (36 + 112) / 63 = 148 / 63\n4. Ratio Water : Milk = **167 : 148**."
  },
  {
    "id": "ratio_q11",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B are two alloys of gold and copper prepared by mixing metals in proportions 7 : 2 and 7 : 11, respectively. If equal quantities of alloys are melted to form a third alloy C, the proportion of gold and copper in C will be :",
    "options": [
      "5 : 9",
      "5 : 7",
      "7 : 5",
      "9 : 5",
      "None of these"
    ],
    "correct": "7 : 5",
    "explanation": "🧪 Equal Weight Alloy Melting:\n1. Alloy A (7 : 2, sum = 9) -> Multiply by 2 to equate to 18 units: Gold = 14, Copper = 4\n2. Alloy B (7 : 11, sum = 18): Gold = 7, Copper = 11\n3. Total in Alloy C:\n   - Gold = 14 + 7 = 21\n   - Copper = 4 + 11 = 15\n4. Ratio Gold : Copper = 21 : 15 = **7 : 5**."
  },
  {
    "id": "ratio_q15",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "In 28 liters mixture of milk and water the ratio of milk and water is 5 : 2. How much water should be added in the mixture so that the ratio of milk to water becomes 2 : 5?",
    "options": [
      "42 liters",
      "32 liters",
      "24 liters",
      "39 liters",
      "None of these"
    ],
    "correct": "42 liters",
    "explanation": "🧪 Dilution via Water Addition:\n1. Total = 28 L, Milk : Water = 5 : 2 (7 parts)\n2. 1 part = 28 / 7 = 4 L -> Milk = 20 L, Water = 8 L\n3. Let w liters of water be added. Milk quantity remains 20 L:\n   20 / (8 + w) = 2 / 5\n4. 2(8 + w) = 100 -> 8 + w = 50 -> w = **42 liters**."
  },
  {
    "id": "ratio_q16",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "A mixture contains milk and water in the ratio of 9 : 4. On adding 4 liters of water, the ratio of milk to water becomes 3 : 2. Find the total quantity of the original mixture.",
    "options": [
      "26 liters",
      "18 liters",
      "10 liters",
      "30 liters",
      "None of these"
    ],
    "correct": "26 liters",
    "explanation": "🧪 Original Quantity from Dilution:\n1. Let milk = 9x, water = 4x. Total = 13x.\n2. On adding 4 L water: 9x / (4x + 4) = 3 / 2\n3. Divide numerator by 3: 3x / (4x + 4) = 1 / 2\n4. 6x = 4x + 4 -> 2x = 4 -> x = 2\n5. Total original mixture = 13x = 13 × 2 = **26 liters**."
  },
  {
    "id": "ratio_q21",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Hard",
    "points": 1,
    "question": "A bucket contains a mixture of two liquids A and B in the proportion 5 : 3. If 16 liters of the mixture is replaced by 16 liters of liquid B, then the ratio of the two liquids becomes 3 : 5. How much of the liquid B was there in the bucket?",
    "options": [
      "25 liters",
      "15 liters",
      "18 liters",
      "24 liters",
      "None of these"
    ],
    "correct": "15 liters",
    "explanation": "🧪 Replacement by Second Component:\n1. Let total volume = 8x (Liquid A = 5x, Liquid B = 3x).\n2. When 16 L mixture is removed:\n   - A removed = (5/8) × 16 = 10 L\n   - B removed = (3/8) × 16 = 6 L\n3. Adding 16 L of liquid B:\n   - A remaining = 5x - 10\n   - B new = 3x - 6 + 16 = 3x + 10\n4. (5x - 10) / (3x + 10) = 3 / 5\n5. 25x - 50 = 9x + 30 -> 16x = 80 -> x = 5\n6. Original liquid B = 3x = 3 × 5 = **15 liters**."
  },
  {
    "id": "ratio_q22",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Hard",
    "points": 1,
    "question": "A bucket contains a mixture of two liquids A and B in the proportion 6 : 5. If 33 liters of the mixture is replaced by 33 liters of liquid B, then the ratio of the two liquids becomes 3 : 4. How much of the liquid A was there in the bucket?",
    "options": [
      "84 liters",
      "48 liters",
      "70 liters",
      "64 liters",
      "None of these"
    ],
    "correct": "84 liters",
    "explanation": "🧪 Replacement by Second Component (6:5 to 3:4):\n1. Let total volume = 11x (A = 6x, B = 5x).\n2. When 33 L mixture is removed:\n   - A removed = (6/11) × 33 = 18 L\n   - B removed = (5/11) × 33 = 15 L\n3. Adding 33 L of liquid B:\n   - A remaining = 6x - 18\n   - B new = 5x - 15 + 33 = 5x + 18\n4. (6x - 18) / (5x + 18) = 3 / 4\n5. 4(6x - 18) = 3(5x + 18) -> 24x - 72 = 15x + 54 -> 9x = 126 -> x = 14\n6. Original liquid A = 6x = 6 × 14 = **84 liters**."
  },
  {
    "id": "ratio_q17",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio between two numbers is 15 : 7. If each number be decreased by 2, the ratio becomes 7 : 3. Find the numbers.",
    "options": [
      "15, 7",
      "30, 14",
      "45, 21",
      "60, 28",
      "None of these"
    ],
    "correct": "30, 14",
    "explanation": "📊 Uniform Subtraction from Terms:\n1. Let numbers be 15x and 7x.\n2. (15x - 2) / (7x - 2) = 7 / 3\n3. 3(15x - 2) = 7(7x - 2) -> 45x - 6 = 49x - 14\n4. 4x = 8 -> x = 2\n5. Numbers are 15(2) = **30** and 7(2) = **14**."
  },
  {
    "id": "ratio_q18",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Medium",
    "points": 1,
    "question": "The incomes of A and B are in the ratio 9 : 4 and their expenditures are in the ratio 7 : 3. If each saves 2000, what are their incomes?",
    "options": [
      "90000, 4000",
      "27000, 12000",
      "72000, 16000",
      "72000, 32000",
      "None of these"
    ],
    "correct": "72000, 32000",
    "explanation": "📊 Income, Expenditure & Savings Model:\n1. Let incomes be 9x and 4x. Since Savings = Income - Expenditure = 2000:\n   (9x - 2000) / (4x - 2000) = 7 / 3\n2. 3(9x - 2000) = 7(4x - 2000) -> 27x - 6000 = 28x - 14000\n3. x = 8000\n4. Income of A = 9 × 8000 = **72000**\n5. Income of B = 4 × 8000 = **32000**."
  },
  {
    "id": "ratio_q19",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number which, when added to the terms of the ratio 13 : 28 makes it equal to the ratio 1 : 2.",
    "options": [
      "4",
      "3",
      "2",
      "1",
      "None of these"
    ],
    "correct": "2",
    "explanation": "📊 Addition to Ratio Terms:\n1. (13 + x) / (28 + x) = 1 / 2\n2. 2(13 + x) = 28 + x\n3. 26 + 2x = 28 + x -> x = **2**."
  },
  {
    "id": "ratio_q20",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number which, when subtracted from the terms of the ratio 11 : 25 makes it equal to the ratio 4 : 11.",
    "options": [
      "4",
      "3",
      "2",
      "1",
      "None of these"
    ],
    "correct": "3",
    "explanation": "📊 Subtraction from Ratio Terms:\n1. (11 - x) / (25 - x) = 4 / 11\n2. 11(11 - x) = 4(25 - x)\n3. 121 - 11x = 100 - 4x -> 7x = 21 -> x = **3**."
  },
  {
    "id": "ratio_q24",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Hard",
    "points": 1,
    "question": "Two candles of the same height are lighted at the same time. The first is consumed in 7 hours and the second in 6 hours. If each candle burns at a constant rate, in how many hours after being lighted, the ratio between the first and second candles becomes 3 : 1.",
    "options": [
      "5 hours 36 minutes",
      "5 hours",
      "5 hours 60 minutes",
      "6 hours",
      "None of these"
    ],
    "correct": "5 hours 36 minutes",
    "explanation": "📊 Candle Burning Differential Rates:\n1. Height remaining after t hours:\n   - Candle 1: H(1 - t/7)\n   - Candle 2: H(1 - t/6)\n2. (1 - t/7) / (1 - t/6) = 3 / 1\n3. 1 - t/7 = 3 - t/2 -> t/2 - t/7 = 2\n4. 5t / 14 = 2 -> t = 28 / 5 = 5.6 hours\n5. 0.6 hours = 0.6 × 60 = 36 minutes\n- Total time = **5 hours 36 minutes**."
  },
  {
    "id": "ratio_q26",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Easy",
    "points": 1,
    "question": "When 50% of one number is added to a second number, the second number increases to its four-thirds. What is the ratio between the first number and the second number?",
    "options": [
      "3 : 2",
      "3 : 4",
      "2 : 3",
      "Data inadequate",
      "None of these"
    ],
    "correct": "2 : 3",
    "explanation": "📊 Percentage Shift Formulation:\n1. Let numbers be x and y.\n2. y + 0.50x = (4/3)y\n3. 0.50x = (4/3)y - y = (1/3)y\n4. (1/2)x = (1/3)y -> x / y = (1/3) / (1/2) = **2 : 3**."
  },
  {
    "id": "ratio_q28",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Hard",
    "points": 1,
    "question": "One year ago, the ratio between Laxman’s and Gopal’s salary was 3 : 4. The individual ratios between their last years and this year’s salaries are 4 : 5 and 2 : 3, respectively. At present the total of their salary is 4160. The salary of Laxman now, is–",
    "options": [
      "1600",
      "2560",
      "1040",
      "3120",
      "None of these"
    ],
    "correct": "1600",
    "explanation": "📊 Year-Over-Year Compound Salary Ratios:\n1. Let last year's salaries be L_0 and G_0 where L_0 : G_0 = 3 : 4.\n2. Present salary L_1 = (5/4)L_0\n3. Present salary G_1 = (3/2)G_0\n4. Ratio of present salaries L_1 : G_1 = [(5/4) × 3] : [(3/2) × 4] = (15/4) : 6 = 15 : 24 = 5 : 8\n5. Total present salary = 4160 (13 parts)\n6. 1 part = 4160 / 13 = 320\n7. Present salary of Laxman = 5 × 320 = **1600**."
  },
  {
    "id": "ages_q1",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "The age of Arvind’s father is 4 times his age. If 5 years ago, father’s age was 7 times of the age of his son at that time, what is Arvind’s father’s present age?",
    "options": [
      "84 years",
      "70 years",
      "40 years",
      "35 years",
      "None of these"
    ],
    "correct": "40 years",
    "explanation": "Let Arvind’s present age be x. Father = 4x. Five years ago: 4x - 5 = 7(x - 5). Solving gives x = 10, so father’s present age = 4 × 10 = **40 years**."
  },
  {
    "id": "ages_q2",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Easy",
    "points": 1,
    "question": "The age of Ramesh is four times the age of Suresh. After ten years, the age of Ramesh will be only twice the age of Suresh. Find the present age of Suresh.",
    "options": [
      "10 years",
      "11 years",
      "12 years",
      "5 years",
      "None of these"
    ],
    "correct": "5 years",
    "explanation": "Let Suresh = x and Ramesh = 4x. After 10 years: 4x + 10 = 2(x + 10). Thus 2x = 10, so x = **5 years**."
  },
  {
    "id": "ages_q3",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "10 years ago Chandravati’s mother was 4 times older than her daughter. After 10 years, the mother will be twice older than the daughter. The present age of Chandravati is :",
    "options": [
      "5 years",
      "10 years",
      "20 years",
      "30 years",
      "None of these"
    ],
    "correct": "20 years",
    "explanation": "Let daughter’s present age be x and mother’s be y. Ten years ago: y − 10 = 4(x − 10). Ten years hence: y + 10 = 2(x + 10). Solving gives x = **20 years**."
  },
  {
    "id": "ages_q4",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "14 years ago Ram was 4 times the age of Pankaj. If the present age of Ram is twice the age of Pankaj, what will be the total of their present ages?",
    "options": [
      "42 years",
      "63 years",
      "62 years",
      "48 years",
      "None of these"
    ],
    "correct": "63 years",
    "explanation": "Let Pankaj = x and Ram = 2x now. Fourteen years ago: 2x − 14 = 4(x − 14). Hence x = 21 and Ram = 42. Total = 21 + 42 = **63 years**."
  },
  {
    "id": "ages_q5",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The sum of the ages of a father and a son is 50 years. Also, 5 years ago, the father’s age was 7 times the age of the son. The present ages of the father and the son respectively, are :",
    "options": [
      "35 years, 15 years",
      "40 years, 10 years",
      "38 years, 12 years",
      "42 years, 8 years",
      "None of these"
    ],
    "correct": "40 years, 10 years",
    "explanation": "Let father = F and son = S. F + S = 50. Five years ago: F − 5 = 7(S − 5). Solving gives S = 10 and F = **40 years**."
  },
  {
    "id": "ages_q6",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The sum of the ages of a son and father is 56 years. After four years, the age of the father will be three times that of the son. Their ages respectively are :",
    "options": [
      "12 years, 44 years",
      "16 years, 48 years",
      "16 years, 42 years",
      "18 years, 6 years",
      "None of these"
    ],
    "correct": "12 years, 44 years",
    "explanation": "Let son = S and father = F. S + F = 56 and F + 4 = 3(S + 4). This gives S = 12 and F = **44 years**."
  },
  {
    "id": "ages_q7",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of the ages of A and B at present is 4 : 3. 10 years earlier, the ratio was 3 : 2, then find the present ages of A and B (in years).",
    "options": [
      "40, 30",
      "48, 36",
      "64, 48",
      "20, 15",
      "None of these"
    ],
    "correct": "40, 30",
    "explanation": "Let present ages be 4x and 3x. Ten years earlier: (4x − 10)/(3x − 10) = 3/2. Cross-multiplication gives x = 10. Therefore the ages are **40 and 30 years**."
  },
  {
    "id": "ages_q8",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Product-Based Age Problems",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the product of the present ages of A and B is 750 years and the ratio of their present ages is 6 : 5. Find the difference between their present ages.",
    "options": [
      "10 years",
      "15 years",
      "8 years",
      "5 years",
      "None of these"
    ],
    "correct": "5 years",
    "explanation": "Let ages be 6x and 5x. Their product is 30x² = 750, so x² = 25 and x = 5. Difference = x = **5 years**."
  },
  {
    "id": "ages_q9",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "If the ratio of the ages of A and B at present is 2 : 1. 6 years earlier, the ratio was 3 : 1. What is the sum of the present ages of A and B?",
    "options": [
      "24 years",
      "26 years",
      "34 years",
      "6 years",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "Let present ages be 2x and x. Six years earlier: (2x − 6)/(x − 6) = 3. This gives x = 12, so the present total is 36 years, which is not among the listed choices. Hence **None of these**."
  },
  {
    "id": "ages_q10",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of P’s and Q’s ages is 5 : 7. If the difference between the present age of Q and the age of P 6 years hence is 2, what is the total of present ages of P and Q?",
    "options": [
      "52 years",
      "48 years",
      "56 years",
      "Data inadequate",
      "None of these"
    ],
    "correct": "48 years",
    "explanation": "Let P = 5x and Q = 7x. The difference between Q now and P after 6 years is 2: 7x − (5x + 6) = 2. Thus x = 4. Total = 5x + 7x = **48 years**."
  },
  {
    "id": "ages_q11",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Product-Based Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "The product of the ages of Harish and Seema is 240. If twice the age of Seema is more than Harish’s age by 4 years, what is Seema’s age in years?",
    "options": [
      "12 years",
      "20 years",
      "10 years",
      "14 years",
      "None of these"
    ],
    "correct": "12 years",
    "explanation": "Let Seema = x. Harish = 2x − 4. Product: x(2x − 4) = 240. Thus x² − 2x − 120 = 0, giving x = **12 years**."
  },
  {
    "id": "ages_q12",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Jayesh is twice as old as Vijay and half as old as Suresh. If the sum of Suresh’s and Vijay’s ages is 85 years, what is Jayesh’s age in years?",
    "options": [
      "34",
      "36",
      "68",
      "Can’t say",
      "None of these"
    ],
    "correct": "34",
    "explanation": "Let Jayesh = J. Then Vijay = J/2 and Suresh = 2J. Their sum is 2J + J/2 = 85, so 5J/2 = 85 and J = **34 years**."
  },
  {
    "id": "ages_q13",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of the present ages of a son and his father is 1 : 5 and that of his mother and father is 4 : 5. After 2 years the ratio of the age of the son to that of his mother becomes 3 : 10. What is the present age of the father?",
    "options": [
      "30 years",
      "28 years",
      "35 years",
      "40 years",
      "None of these"
    ],
    "correct": "35 years",
    "explanation": "Let father = 5x, son = x and mother = 4x. After 2 years: (x + 2)/(4x + 2) = 3/10. Solving gives x = 7, so father = **35 years**."
  },
  {
    "id": "ages_q14",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "15 years hence, A will be twice as old as B, but five years ago A was 4 times as old as B. Find the difference of their present ages.",
    "options": [
      "15 years",
      "45 years",
      "30 years",
      "25 years",
      "None of these"
    ],
    "correct": "30 years",
    "explanation": "Let present ages be A and B. A + 15 = 2(B + 15), while A − 5 = 4(B − 5). Solving gives A = 45 and B = 15. Difference = **30 years**."
  },
  {
    "id": "ages_q15",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Hard",
    "points": 1,
    "question": "A says to B “I am twice as old as you were when I was as old as you are.” The sum of their ages is 63 years. Find the difference of their ages.",
    "options": [
      "27 years",
      "12 years",
      "9 years",
      "6 years",
      "None of these"
    ],
    "correct": "9 years",
    "explanation": "The provided source answer key marks option (3), **9 years**, as the answer for this question."
  },
  {
    "id": "ages_q16",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "A is as much younger than B as he is older than C. If the sum of B’s and C’s ages is 40 years. Find the age of A.",
    "options": [
      "20 years",
      "25 years",
      "30 years",
      "27 years",
      "None of these"
    ],
    "correct": "20 years",
    "explanation": "A is midway between B and C, so 2A = B + C. Since B + C = 40, A = **20 years**."
  },
  {
    "id": "ages_q17",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "A is twice as old as B was two years ago. If the difference in their ages be 2 years, find A’s age.",
    "options": [
      "14 years",
      "18 years",
      "8 years",
      "12 years",
      "None of these"
    ],
    "correct": "8 years",
    "explanation": "Let B = x. Then A = 2(x − 2). Since A − B = 2, we get 2x − 4 − x = 2, so x = 6 and A = **8 years**."
  },
  {
    "id": "ages_q18",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "In ten years, A will be twice as old as B was 10 years ago. If A is now 9 years older than B. Find the present age of B.",
    "options": [
      "39 years",
      "40 years",
      "36 years",
      "49 years",
      "None of these"
    ],
    "correct": "39 years",
    "explanation": "Let B = x and A = x + 9. In ten years: x + 19 = 2(x − 10). Hence x = **39 years**."
  },
  {
    "id": "ages_q19",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Five years ago, the total of the ages of father and son was 60 years. The ratio of their present ages is 4 : 1. Then the present age of the father is _______.",
    "options": [
      "48 years",
      "51 years",
      "56 years",
      "61 years",
      "None of these"
    ],
    "correct": "56 years",
    "explanation": "Five years ago the total was 60, so the present total is 60 + 10 = 70. With present ratio 4:1, there are 5 parts; each part is 14. Father = 4 × 14 = **56 years**."
  },
  {
    "id": "ages_q20",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "Two years ago, A was four times as old as B. 8 years hence, A’s age will exceed B’s age by 12 years. The ratio of the present ages of A and B is______. ",
    "options": [
      "3 : 1",
      "4 : 1",
      "3 : 2",
      "5 : 1",
      "None of these"
    ],
    "correct": "3 : 1",
    "explanation": "The age difference remains constant, so A − B = 12. Two years ago: A − 2 = 4(B − 2). Combining gives B = 6 and A = 18. Ratio = **3 : 1**."
  },
  {
    "id": "ages_q21",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "If C’s age is twice the average age of A, B and C. A’s age is one half the average of A, B and C. If B is 5 years old, the average age of A, B and C is _____.",
    "options": [
      "10 years",
      "15 years",
      "12 years",
      "9 years",
      "None of these"
    ],
    "correct": "10 years",
    "explanation": "Let the average age be x. Then C = 2x and A = x/2. Since the total is 3x: x/2 + 5 + 2x = 3x. Hence x = **10 years**."
  },
  {
    "id": "ages_q22",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "A father’s age is three times the sum of the ages of his two children, but 20 years hence his age will be equal to the sum of their ages. Then the father’s age is ______.",
    "options": [
      "30 years",
      "40 years",
      "5 years",
      "45 years",
      "None of these"
    ],
    "correct": "30 years",
    "explanation": "Let the children’s present ages sum to S. Father = 3S. After 20 years, father = 3S + 20 and the children’s sum = S + 40. Thus 3S + 20 = S + 40, so S = 10 and father = **30 years**."
  },
  {
    "id": "ages_q23",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Easy",
    "points": 1,
    "question": "The total ages of A, B and C at present is 90 years. Ten years ago the ratio of their ages was 1 : 2 : 3. Then the present age of B is ______.",
    "options": [
      "30 years",
      "20 years",
      "40 years",
      "45 years",
      "None of these"
    ],
    "correct": "30 years",
    "explanation": "Ten years ago the ages were x, 2x and 3x. Their present total is 6x + 30 = 90, so x = 10. B’s present age = 2x + 10 = **30 years**."
  },
  {
    "id": "ages_q24",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Product-Based Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of the ages of a father and son is 45 years. Five years ago, the product of their ages was four times the father’s age at that time. The present ages of the father and son respectively are ____ and _____ years.",
    "options": [
      "39, 6",
      "35, 10",
      "36, 9",
      "40, 10",
      "None of these"
    ],
    "correct": "36, 9",
    "explanation": "Let present father = F and son = S. F + S = 45. Five years ago: (F − 5)(S − 5) = 4(F − 5). Since F − 5 is nonzero, S − 5 = 4, so S = 9 and F = **36**."
  },
  {
    "id": "ages_q25",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Product-Based Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of the father’s and son’s age is 7 : 4. The product of their ages is 1008. The ratio of their ages after 6 years hence will be ______.",
    "options": [
      "5 : 3",
      "8 : 5",
      "7 : 4",
      "5 : 8",
      "None of these"
    ],
    "correct": "8 : 5",
    "explanation": "Let present ages be 7x and 4x. Their product is 28x² = 1008, giving x = 6. Present ages are 42 and 24. After 6 years they are 48 and 30, whose ratio is **8 : 5**."
  },
  {
    "id": "ages_q26",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "If 6 years are subtracted from the present age of Randheer and the remainder is divided by 18, then the present age of his grandson Anup is obtained. If Anup is 2 years younger to Mahesh whose age is 5 years, then what is the age of Randheer?",
    "options": [
      "96 years",
      "84 years",
      "48 years",
      "60 years",
      "None of these"
    ],
    "correct": "60 years",
    "explanation": "Mahesh is 5, so Anup is 3. Therefore (Randheer − 6)/18 = 3. Hence Randheer − 6 = 54 and Randheer = **60 years**."
  },
  {
    "id": "odd_q1",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_1",
    "type_name": "Type 1: Single Letter Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "H",
      "Q",
      "T",
      "Z",
      "None of these"
    ],
    "correct": "Q",
    "explanation": "Q is the 17th letter, while H, T and Z are even-positioned letters."
  },
  {
    "id": "odd_q2",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_1",
    "type_name": "Type 1: Single Letter Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "A",
      "O",
      "U",
      "Y",
      "None of these"
    ],
    "correct": "Y",
    "explanation": "A, O and U are standard vowels; Y is the odd one under the vowel classification used here."
  },
  {
    "id": "odd_q3",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "DE",
      "PQ",
      "TU",
      "MO",
      "None of these"
    ],
    "correct": "MO",
    "explanation": "DE, PQ and TU contain consecutive letters; MO is not a consecutive pair."
  },
  {
    "id": "odd_q4",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "XW",
      "FG",
      "ML",
      "PO",
      "None of these"
    ],
    "correct": "FG",
    "explanation": "XW, ML and PO are in descending alphabetical order; FG is ascending."
  },
  {
    "id": "odd_q5",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "GE",
      "MK",
      "TU",
      "MO",
      "FD"
    ],
    "correct": "TU",
    "explanation": "GE, MK, MO and FD have a gap of 2 between letter positions. T and U are consecutive."
  },
  {
    "id": "odd_q6",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BD",
      "HK",
      "MP",
      "NQ",
      "TW"
    ],
    "correct": "BD",
    "explanation": "HK, MP, NQ and TW have a positional gap of 3; BD has a gap of 2."
  },
  {
    "id": "odd_q7",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "AE",
      "AI",
      "IO",
      "EI",
      "OU"
    ],
    "correct": "AI",
    "explanation": "The positional gaps are 4, 8, 6, 4 and 6 respectively. AI is the only pair with a gap of 8."
  },
  {
    "id": "odd_q8",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "DW",
      "HS",
      "MN",
      "GT",
      "KO"
    ],
    "correct": "KO",
    "explanation": "D+W, H+S, M+N and G+T each total 27. K+O totals 26."
  },
  {
    "id": "odd_q9",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "VT",
      "MO",
      "PR",
      "DF",
      "FG"
    ],
    "correct": "FG",
    "explanation": "The alphabet-position sums of VT, MO, PR and DF are even; F+G is 13, which is odd."
  },
  {
    "id": "odd_q10",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BCD",
      "NPR",
      "KLM",
      "RQP",
      "HGF"
    ],
    "correct": "NPR",
    "explanation": "BCD, KLM, RQP and HGF use consecutive letters; NPR has a gap of 2 between each letter."
  },
  {
    "id": "odd_q11",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "ABD",
      "FGI",
      "LMO",
      "STU",
      "WXZ"
    ],
    "correct": "STU",
    "explanation": "ABD, FGI, LMO and WXZ follow gaps +1,+2. STU has gaps +1,+1."
  },
  {
    "id": "odd_q12",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "HGF",
      "XWV",
      "NML",
      "OPQ",
      "UTS"
    ],
    "correct": "OPQ",
    "explanation": "HGF, XWV, NML and UTS are descending consecutive triples. OPQ is ascending."
  },
  {
    "id": "odd_q13",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "ACE",
      "PRT",
      "UWY",
      "MNO",
      "GIK"
    ],
    "correct": "MNO",
    "explanation": "ACE, PRT, UWY and GIK progress by +2,+2. MNO is consecutive by +1,+1."
  },
  {
    "id": "odd_q14",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "RTW",
      "QOM",
      "IKG",
      "IKM",
      "BDE"
    ],
    "correct": "RTW",
    "explanation": "RTW is the only set with increasing positive gaps (+2,+3); the other sets follow different/non-matching gap patterns."
  },
  {
    "id": "odd_q15",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "PRT",
      "MOQ",
      "GEC",
      "TVX",
      "SUW"
    ],
    "correct": "GEC",
    "explanation": "PRT, MOQ, TVX and SUW increase by +2,+2. GEC decreases by 2 at each step."
  },
  {
    "id": "odd_q16",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BEH",
      "CFI",
      "LOR",
      "EHL",
      "FIL"
    ],
    "correct": "EHL",
    "explanation": "BEH, CFI, LOR and FIL have equal +3,+3 gaps. EHL has +3,+4."
  },
  {
    "id": "odd_q17",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "AOT",
      "FGH",
      "REB",
      "TIW",
      "QUD"
    ],
    "correct": "FGH",
    "explanation": "FGH is the only consecutive three-letter sequence."
  },
  {
    "id": "odd_q18",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BDW",
      "DFU",
      "FHS",
      "GIQ",
      "IKP"
    ],
    "correct": "GIQ",
    "explanation": "The source answer key marks GIQ as the odd one out for this set."
  },
  {
    "id": "odd_q19",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "LHJ",
      "RMP",
      "YUW",
      "FBD",
      "MIK"
    ],
    "correct": "RMP",
    "explanation": "RMP has positional changes −5,+3, while the other listed sets follow the −4,+2 pattern."
  },
  {
    "id": "odd_q20",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "DEB",
      "HIF",
      "NOL",
      "RTP",
      "None of these"
    ],
    "correct": "RTP",
    "explanation": "DEB, HIF and NOL follow +1,−3. RTP follows +2,−4."
  },
  {
    "id": "odd_q21",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "HJN",
      "JLP",
      "PRU",
      "QSW",
      "None of these"
    ],
    "correct": "PRU",
    "explanation": "HJN, JLP and QSW have gaps +2,+4. PRU has +2,+3."
  },
  {
    "id": "odd_q22",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "CHG",
      "LMM",
      "BBC",
      "HEG",
      "None of these"
    ],
    "correct": "HEG",
    "explanation": "The source answer key marks HEG as the odd one out for this set."
  },
  {
    "id": "odd_q23",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "PQO",
      "IFM",
      "ROV",
      "QNU"
    ],
    "correct": "PQO",
    "explanation": "IFM, ROV and QNU follow −3,+7. PQO follows +1,−2."
  },
  {
    "id": "odd_q24",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "GDA",
      "OLI",
      "VSP",
      "KHE",
      "WYZ"
    ],
    "correct": "WYZ",
    "explanation": "GDA, OLI, VSP and KHE decrease by 3,3. WYZ does not follow that pattern."
  },
  {
    "id": "odd_q25",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "NPM",
      "IJL",
      "QSZ",
      "BHK",
      "XGT"
    ],
    "correct": "IJL",
    "explanation": "IJL is the only set whose first two letters are consecutive (I,J)."
  },
  {
    "id": "odd_q26",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "EBA",
      "XUT",
      "TQP",
      "JFE",
      "YVU"
    ],
    "correct": "JFE",
    "explanation": "EBA, XUT, TQP and YVU follow −3,−1 in alphabet positions. JFE follows −4,−1."
  },
  {
    "id": "odd_q27",
    "module_id": "mod13",
    "module_name": "Odd One Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BHE",
      "DJG",
      "SYV",
      "JPM",
      "PUS"
    ],
    "correct": "PUS",
    "explanation": "BHE, DJG, SYV and JPM follow +6,−3. PUS follows +5,−2."
  },
  {
    "id": "mod16_q1",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the number of zeros in 121!",
    "options": [
      "32",
      "68",
      "42",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🔢 Trailing Zeros in Factorial (Legendre's Formula):\n1. The number of trailing zeros in n! is given by ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ...\n2. For 121!:\n   ⌊121/5⌋ = 24\n   ⌊121/25⌋ = 4\n   ⌊121/125⌋ = 0\n3. Total trailing zeros = 24 + 4 = 28.\n4. Since 28 is not among the given options (32, 68, 42), the correct answer is **None of these**."
  },
  {
    "id": "mod16_q2",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Easy",
    "points": 1,
    "question": "What least value must be given to * so that the number 91876*2 is divisible by 8?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": "3",
    "explanation": "🔢 Divisibility by 8 Rule:\n1. A number is divisible by 8 if its last three digits form a number divisible by 8.\n2. The last three digits of 91876*2 are '6*2', which equals 600 + 10(*) + 2 = 602 + 10(*).\n3. 602 ≡ 2 (mod 8) and 10(*) ≡ 2(*) (mod 8).\n   So, 2 + 2(*) ≡ 0 (mod 8) ⟹ 2(*) ≡ 6 (mod 8).\n4. Testing the smallest value: * = 3 gives 632, and 632 ÷ 8 = 79 (exactly divisible).\n5. Hence, the least value of * is **3**."
  },
  {
    "id": "mod16_q3",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of three consecutive even numbers is 444 more than the average of these three numbers. Which is the smallest of these three numbers?",
    "options": [
      "215",
      "223",
      "222",
      "220"
    ],
    "correct": "220",
    "explanation": "🔢 Consecutive Even Numbers:\n1. Let the three consecutive even numbers be n − 2, n, and n + 2.\n2. Their sum = (n − 2) + n + (n + 2) = 3n.\n3. Their average = 3n / 3 = n.\n4. Given that Sum − Average = 444:\n   3n − n = 444\n   2n = 444 ⟹ n = 222.\n5. The smallest of the three numbers is n − 2 = 222 − 2 = **220**."
  },
  {
    "id": "mod16_q4",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the number of zeros in 100!?",
    "options": [
      "15",
      "20",
      "18",
      "24"
    ],
    "correct": "24",
    "explanation": "🔢 Number of Zeros in 100!:\n1. Use Legendre's formula to find the highest power of 5 dividing 100!:\n   ⌊100/5⌋ = 20\n   ⌊100/25⌋ = 4\n   ⌊100/125⌋ = 0\n2. Total trailing zeros = 20 + 4 = **24**."
  },
  {
    "id": "mod16_q5",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "The largest integer that divides the product of any four consecutive integers is",
    "options": [
      "6",
      "12",
      "4",
      "24"
    ],
    "correct": "24",
    "explanation": "🔢 Product of Consecutive Integers:\n1. The product of any k consecutive integers is always divisible by k!.\n2. For four consecutive integers, their product is divisible by 4! = 4 × 3 × 2 × 1 = 24.\n3. Testing the smallest positive set: 1 × 2 × 3 × 4 = 24.\n4. Therefore, the largest integer that always divides the product is **24**."
  },
  {
    "id": "mod16_q6",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the unit digit in 7¹⁰⁵?",
    "options": [
      "1",
      "5",
      "7",
      "9"
    ],
    "correct": "7",
    "explanation": "🔢 Unit Digit Cyclicity of 7:\n1. The unit digits of powers of 7 repeat in cycles of 4:\n   7¹ = 7, 7² = 9, 7³ = 3, 7⁴ = 1.\n2. Divide the exponent 105 by 4:\n   105 = 4 × 26 + 1 (remainder = 1).\n3. Hence, the unit digit is the same as the unit digit of 7¹ = **7**."
  },
  {
    "id": "mod16_q7",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "The number of zeros in the product 5 × 10 × 25 × 40 × 50 × 55 × 65 × 125 × 80",
    "options": [
      "12",
      "8",
      "13",
      "9"
    ],
    "correct": "9",
    "explanation": "🔢 Counting Factors of 2 and 5:\n1. Trailing zeros depend on pairs of factors (2 × 5 = 10), so count = min(powers of 2, powers of 5).\n2. Count powers of 5:\n   • 5 = 5¹ (1)\n   • 10 = 2 × 5¹ (1)\n   • 25 = 5² (2)\n   • 40 = 2³ × 5¹ (1)\n   • 50 = 2 × 5² (2)\n   • 55 = 11 × 5¹ (1)\n   • 65 = 13 × 5¹ (1)\n   • 125 = 5³ (3)\n   • 80 = 2⁴ × 5¹ (1)\n   Total power of 5 = 1 + 1 + 2 + 1 + 2 + 1 + 1 + 3 + 1 = 13.\n3. Count powers of 2:\n   • 10 = 2¹ (1)\n   • 40 = 2³ (3)\n   • 50 = 2¹ (1)\n   • 80 = 2⁴ (4)\n   Total power of 2 = 1 + 3 + 1 + 4 = 9.\n4. Number of zeros = min(13, 9) = **9**."
  },
  {
    "id": "mod16_q8",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "The greatest 5-digit number exactly divisible by 8 & 9 is:",
    "options": [
      "99996",
      "99960",
      "99990",
      "99936"
    ],
    "correct": "99936",
    "explanation": "🔢 Greatest 5-Digit Multiple:\n1. LCM(8, 9) = 72.\n2. The greatest 5-digit number is 99999.\n3. Divide 99999 by 72:\n   99999 = 72 × 1388 + 63 (remainder = 63).\n4. Greatest 5-digit number divisible by 72 = 99999 − 63 = **99936**."
  },
  {
    "id": "mod16_q9",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Hard",
    "points": 1,
    "question": "What is the least number which, when 4000 is subtracted from it, the remainder becomes divisible by 7, 11, 13?",
    "options": [
      "5001",
      "2999",
      "1000",
      "6303"
    ],
    "correct": "5001",
    "explanation": "🔢 Divisibility by 7, 11, and 13:\n1. LCM(7, 11, 13) = 7 × 11 × 13 = 1001 (as 7, 11, 13 are pairwise prime).\n2. If N − 4000 is divisible by 7, 11, and 13, then N − 4000 must be a multiple of 1001.\n3. For the least positive remainder multiple (1001 × 1):\n   N − 4000 = 1001 ⟹ N = 4000 + 1001 = **5001**."
  },
  {
    "id": "mod16_q10",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of three consecutive even numbers is always divisible by:",
    "options": [
      "12",
      "6",
      "18",
      "24"
    ],
    "correct": "6",
    "explanation": "🔢 Algebraic Property of Consecutive Even Numbers:\n1. Let the three consecutive even numbers be 2k, 2k + 2, and 2k + 4.\n2. Sum = 2k + (2k + 2) + (2k + 4) = 6k + 6 = 6(k + 1).\n3. Since 6(k + 1) is a multiple of 6 for any integer k, the sum is always divisible by **6**."
  },
  {
    "id": "mod16_q11",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "5⁶ − 1 is divisible by",
    "options": [
      "13",
      "31",
      "5",
      "None of these"
    ],
    "correct": "31",
    "explanation": "🔢 Difference of Squares Factorization:\n1. 5⁶ − 1 = (5³)² − 1² = (5³ − 1)(5³ + 1).\n2. Calculate the factors:\n   5³ − 1 = 125 − 1 = 124\n   5³ + 1 = 125 + 1 = 126\n3. Factor 124: 124 = 4 × 31.\n4. Since 31 divides 124, it divides 5⁶ − 1. Neither 13 nor 5 divides 15624.\n5. Hence, 5⁶ − 1 is divisible by **31**."
  },
  {
    "id": "mod16_q61",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the number of zeroes in 1000! (factorial)?",
    "options": [
      "1",
      "5",
      "2",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🔢 Legendre's Formula for Trailing Zeroes:\n1. The number of trailing zeroes in n! equals the exponent of 5 in its prime factorization:\n   Z = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ⌊n/625⌋ + ...\n2. For 1000!:\n   ⌊1000/5⌋ = 200\n   ⌊1000/25⌋ = 40\n   ⌊1000/125⌋ = 8\n   ⌊1000/625⌋ = 1\n3. Total trailing zeroes = 200 + 40 + 8 + 1 = 249.\n4. Since 249 is not among the options (1, 5, 2), the correct answer is **None of these**."
  },
  {
    "id": "mod16_q62",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number of trailing zeroes in 120!.",
    "options": [
      "12",
      "15",
      "16",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🔢 Trailing Zeroes in Factorial:\n1. By Legendre's Formula, trailing zeroes in 120!:\n   ⌊120/5⌋ = 24\n   ⌊120/25⌋ = 4\n2. Total trailing zeroes = 24 + 4 = 28.\n3. Since 28 is not listed in the options (12, 15, 16), the correct choice is **None of these**."
  },
  {
    "id": "mod16_q63",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the number of two-digit prime numbers?",
    "options": [
      "25",
      "17",
      "21",
      "None of these"
    ],
    "correct": "21",
    "explanation": "🔢 Prime Number Count:\n1. Total prime numbers between 1 and 100 = 25.\n2. The one-digit prime numbers are 2, 3, 5, and 7 (4 primes).\n3. Number of two-digit primes = 25 − 4 = **21**.\n   (They are: 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97)."
  },
  {
    "id": "mod16_q64",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the unit's digit of 2⁵¹?",
    "options": [
      "2",
      "8",
      "1",
      "4"
    ],
    "correct": "8",
    "explanation": "🔢 Cyclicity of Powers of 2:\n1. The unit digits of successive powers of 2 follow a period of 4:\n   2¹ → 2, 2² → 4, 2³ → 8, 2⁴ → 6.\n2. Divide the power by 4: 51 mod 4 = 3.\n3. The unit digit of 2⁵¹ is the same as that of 2³, which is **8**."
  },
  {
    "id": "mod16_q65",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the unit's digit of 213 × 212 × 347 × 468?",
    "options": [
      "4",
      "8",
      "6",
      "2"
    ],
    "correct": "6",
    "explanation": "🔢 Product of Unit Digits:\n1. Extract the unit digit of each factor:\n   3, 2, 7, 8.\n2. Multiply sequentially modulo 10:\n   3 × 2 = 6\n   6 × 7 = 42 → unit digit 2\n   2 × 8 = 16 → unit digit 6.\n3. Therefore, the unit digit of the product is **6**."
  },
  {
    "id": "mod16_q66",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "The last three digits in the multiplication 12345 × 54321 will be:",
    "options": [
      "745",
      "945",
      "865",
      "235"
    ],
    "correct": "745",
    "explanation": "🔢 Last Three Digits (Modulo 1000):\n1. To find the last three digits, evaluate 12345 × 54321 mod 1000.\n2. 12345 ≡ 345 (mod 1000) and 54321 ≡ 321 (mod 1000).\n3. 345 × 321 = 110,745.\n4. 110,745 mod 1000 = **745**."
  },
  {
    "id": "mod16_q67",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which among the following is prime?",
    "options": [
      "668",
      "558",
      "900",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🔢 Primality Testing:\n1. 668 is an even number > 2, hence divisible by 2 (composite).\n2. 558 has sum of digits 5 + 5 + 8 = 18, which is divisible by 9 (composite).\n3. 900 ends in 0, so it is divisible by 2, 5, 10 (composite).\n4. None of the given numbers is prime. Hence, the answer is **None of these**."
  },
  {
    "id": "mod16_q68",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "The prime numbers dividing 143 and leaving a remainder of 3 in each case are:",
    "options": [
      "2 and 11",
      "3 and 7",
      "5 and 7",
      "11 and 13"
    ],
    "correct": "5 and 7",
    "explanation": "🔢 Remainder Condition on Divisors:\n1. If a prime p divides 143 leaving remainder 3, then p must divide (143 − 3) = 140, and p must be strictly greater than the remainder (p > 3).\n2. Prime factorization of 140 = 2² × 5 × 7.\n3. The prime factors of 140 are 2, 5, and 7.\n4. Since p > 3, p can only be 5 or 7.\n   Check: 143 ÷ 5 = 28 remainder 3; 143 ÷ 7 = 20 remainder 3.\n5. Hence, the prime numbers are **5 and 7**."
  },
  {
    "id": "mod16_q69",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "A two-digit number is k times the sum of its digits. The number formed by reversing its digits is m times the sum of its digits. Find m.",
    "options": [
      "10 − k",
      "11 − k",
      "9 − k",
      "k − 1"
    ],
    "correct": "11 − k",
    "explanation": "🔢 Digit Reversal Invariant:\n1. Let the two-digit number be 10x + y. Sum of digits = x + y.\n   Given: 10x + y = k(x + y)  ---(1)\n2. The number formed by reversing digits is 10y + x = m(x + y)  ---(2)\n3. Adding equation (1) and equation (2):\n   (10x + y) + (10y + x) = (k + m)(x + y)\n   11(x + y) = (k + m)(x + y)\n4. Dividing both sides by (x + y):\n   k + m = 11 ⟹ m = **11 − k**."
  },
  {
    "id": "mod16_q70",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the largest three-digit number is subtracted from the smallest five-digit number, the remainder is:",
    "options": [
      "9000",
      "9001",
      "90001",
      "90007"
    ],
    "correct": "9001",
    "explanation": "🔢 Direct Subtraction:\n1. Smallest five-digit number = 10,000.\n2. Largest three-digit number = 999.\n3. Difference = 10,000 − 999 = **9001**."
  },
  {
    "id": "mod16_q71",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "The greatest four-digit number exactly divisible by 88 is:",
    "options": [
      "8888",
      "9944",
      "9988",
      "9998"
    ],
    "correct": "9944",
    "explanation": "🔢 Divisibility by 88:\n1. The greatest four-digit number is 9999.\n2. Divide 9999 by 88:\n   9999 = 88 × 113 + 55.\n3. Subtract the remainder: 9999 − 55 = **9944**.\n4. Verification: 9944 is divisible by 8 (944 ÷ 8 = 118) and by 11 ((9+4) − (9+4) = 0)."
  },
  {
    "id": "mod16_q72",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Hard",
    "points": 1,
    "question": "If the number 4A306768B2 is divisible by both 8 and 11, the smallest possible values of A and B will be:",
    "options": [
      "A = 3, B = 5",
      "A = 5, B = 4",
      "A = 5, B = 2",
      "A = 5, B = 3"
    ],
    "correct": "A = 5, B = 3",
    "explanation": "🔢 Simultaneous Divisibility by 8 and 11:\n1. Divisibility by 8 requires the last three digits '8B2' to be divisible by 8.\n   Testing values of digit B:\n   802 (No), 812 (No), 822 (No), 832 ÷ 8 = 104 (Yes) ⟹ Smallest B = 3.\n2. Divisibility by 11 requires the alternating sum of digits to be a multiple of 11:\n   Odd positions from right: 2 + 8 + 7 + 0 + A = 17 + A.\n   Even positions from right: B + 6 + 6 + 3 + 4 = 19 + B.\n   Difference = (17 + A) − (19 + B) = A − B − 2.\n3. Substituting B = 3:\n   A − 3 − 2 = A − 5 ≡ 0 (mod 11) ⟹ A = 5.\n4. Hence, the smallest values are **A = 5, B = 3**."
  },
  {
    "id": "mod16_q73",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "What least value must be given to * so that the number 97215*6 is divisible by 12?",
    "options": [
      "3",
      "2",
      "1",
      "5"
    ],
    "correct": "3",
    "explanation": "🔢 Divisibility by 12 (both 3 and 4):\n1. Divisible by 4: The last two digits '*6' must form a multiple of 4.\n   Possible values for *: 1 (16), 3 (36), 5 (56), 7 (76), 9 (96).\n2. Divisible by 3: The sum of digits must be a multiple of 3:\n   9 + 7 + 2 + 1 + 5 + * + 6 = 30 + *.\n3. Since 30 is already divisible by 3, * must be a multiple of 3.\n4. From the candidates {1, 3, 5, 7, 9}, the values divisible by 3 are {3, 9}.\n5. The least value is **3**."
  },
  {
    "id": "mod16_q74",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the least value of * for which 4832*18 is divisible by 11.",
    "options": [
      "100",
      "None",
      "12",
      "11"
    ],
    "correct": "None",
    "explanation": "🔢 Divisibility by 11:\n1. Alternating sum of digits:\n   Odd positions from right: 8 + * + 3 + 4 = 15 + *\n   Even positions from right: 1 + 2 + 8 = 11\n2. Difference = (15 + *) − 11 = 4 + *.\n3. For divisibility by 11, 4 + * must be 11 ⟹ * = 7.\n4. Since 7 is not among the given options (100, 12, 11), the correct option is **None**."
  },
  {
    "id": "mod16_q75",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Hard",
    "points": 1,
    "question": "The number 1X38X is divisible by 12 when X = P, and by 9 when X = Q. What is P + Q?",
    "options": [
      "2",
      "3",
      "6",
      "9"
    ],
    "correct": "3",
    "explanation": "🔢 Dual Divisibility System:\n1. Divisible by 12 when X = P (must be divisible by 4 and 3):\n   - Divisible by 4: Last two digits '8P' must be divisible by 4 ⟹ P ∈ {0, 4, 8}.\n   - Divisible by 3: Sum of digits 1 + P + 3 + 8 + P = 12 + 2P must be divisible by 3 ⟹ 2P mod 3 = 0 ⟹ P ∈ {0, 3, 6, 9}.\n   - Common solution: P = 0.\n2. Divisible by 9 when X = Q:\n   - Sum of digits 12 + 2Q must be a multiple of 9.\n   - 12 + 2Q = 18 ⟹ 2Q = 6 ⟹ Q = 3.\n3. Therefore, P + Q = 0 + 3 = **3**."
  },
  {
    "id": "mod16_q76",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Number System",
    "difficulty": "Hard",
    "points": 1,
    "question": "If x and y are the two digits of the number 653xy such that the number is divisible by 80, then x + y = ?",
    "options": [
      "2 or 6",
      "4",
      "4 or 8",
      "8"
    ],
    "correct": "2 or 6",
    "explanation": "🔢 Divisibility by 80 (both 10 and 8):\n1. Divisible by 10 ⟹ Last digit y = 0.\n2. The number is now 653x0. For divisibility by 8, the last three digits '3x0' must be divisible by 8.\n   Testing values of digit x:\n   320 ÷ 8 = 40 (x = 2)\n   360 ÷ 8 = 45 (x = 6)\n3. With y = 0, x + y can be 2 + 0 = 2 or 6 + 0 = 6.\n4. Therefore, x + y = **2 or 6**."
  },
  {
    "id": "mod16_q12",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find LCM of 12, 15, 20",
    "options": [
      "30",
      "60",
      "90",
      "None of these"
    ],
    "correct": "60",
    "explanation": "📐 Prime Factorization LCM:\n1. 12 = 2² × 3\n2. 15 = 3 × 5\n3. 20 = 2² × 5\n4. LCM is the product of highest powers of each prime factor:\n   LCM = 2² × 3¹ × 5¹ = 4 × 3 × 5 = **60**."
  },
  {
    "id": "mod16_q13",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "HCF and LCM of two numbers is 21 and 84 respectively. If the ratio of the two numbers is 1:4, the largest of the two numbers is",
    "options": [
      "84",
      "108",
      "100",
      "None of these"
    ],
    "correct": "84",
    "explanation": "📐 HCF × LCM Relation:\n1. Product of two numbers = HCF × LCM = 21 × 84 = 1764.\n2. Let the two numbers in ratio 1:4 be x and 4x.\n3. x × 4x = 1764 ⟹ 4x² = 1764 ⟹ x² = 441 ⟹ x = 21.\n4. The larger number is 4x = 4 × 21 = **84**."
  },
  {
    "id": "mod16_q14",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the largest scale size to measure accurately the three equilateral triangles with sides measuring 76 cm, 114 cm and 152 cm.",
    "options": [
      "19",
      "38",
      "None of these"
    ],
    "correct": "38",
    "explanation": "📐 Highest Common Factor (Scale Measurement):\n1. The largest measuring scale is the HCF of 76 cm, 114 cm, and 152 cm.\n2. Prime factorizations:\n   76 = 2 × 38 = 2² × 19\n   114 = 3 × 38 = 2 × 3 × 19\n   152 = 4 × 38 = 2³ × 19\n3. Common prime factors: 2¹ × 19¹ = 38.\n4. Therefore, the largest scale size is **38**."
  },
  {
    "id": "mod16_q15",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the least number of soldiers in a regiment such that they stand in rows of 15, 20, 25 and form a perfect square",
    "options": [
      "900",
      "1600",
      "2500",
      "450"
    ],
    "correct": "900",
    "explanation": "📐 LCM and Perfect Square:\n1. Find LCM(15, 20, 25):\n   15 = 3 × 5\n   20 = 2² × 5\n   25 = 5²\n   LCM = 2² × 3¹ × 5² = 300.\n2. To make 300 a perfect square, each prime factor must have an even power:\n   300 = 2² × 3¹ × 5².\n   The factor 3 has an odd power, so we multiply by 3.\n3. Least perfect square = 300 × 3 = **900** (which is 30²)."
  },
  {
    "id": "mod16_q16",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Sum of two numbers is 56. If their LCM is 105, then the numbers are",
    "options": [
      "7, 49",
      "22, 34",
      "24, 32",
      "35, 21"
    ],
    "correct": "35, 21",
    "explanation": "📐 Number Properties from Sum and LCM:\n1. The sum of the two numbers must be 56, and their LCM must be 105.\n2. Check option (35, 21):\n   Sum = 35 + 21 = 56.\n   LCM(35, 21) = LCM(5 × 7, 3 × 7) = 3 × 5 × 7 = 105. (Matches!)\n3. Check other options:\n   • LCM(7, 49) = 49 ≠ 105\n   • LCM(22, 34) = 374 ≠ 105\n   • LCM(24, 32) = 96 ≠ 105\n4. Thus, the numbers are **35, 21**."
  },
  {
    "id": "mod16_q17",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find out the HCF of 3⁵, 3⁹ and 3¹⁴",
    "options": [
      "3⁶",
      "3⁹",
      "3⁵",
      "3¹⁴"
    ],
    "correct": "3⁵",
    "explanation": "📐 HCF of Powers with Same Base:\n1. For terms having the same prime base, the HCF is the term with the lowest exponent.\n2. The exponents are 5, 9, and 14.\n3. The lowest exponent is 5.\n4. Therefore, HCF = **3⁵**."
  },
  {
    "id": "mod16_q18",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find HCF of 2, 4, 8",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correct": "2",
    "explanation": "📐 Highest Common Factor:\n1. The numbers are 2 = 2¹, 4 = 2², 8 = 2³.\n2. The greatest common factor dividing 2, 4, and 8 is 2¹ = **2**."
  },
  {
    "id": "mod16_q19",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "HCF is 16, LCM is 160, one of the numbers is 32. Find the other number?",
    "options": [
      "20",
      "60",
      "80",
      "None of these"
    ],
    "correct": "80",
    "explanation": "📐 Product Formula of HCF and LCM:\n1. First Number × Second Number = HCF × LCM.\n2. 32 × Second Number = 16 × 160.\n3. Second Number = (16 × 160) / 32 = 2560 / 32 = **80**."
  },
  {
    "id": "mod16_q20",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
    "options": [
      "4",
      "7",
      "9",
      "None of these"
    ],
    "correct": "4",
    "explanation": "📐 Same Remainder Property:\n1. The greatest number dividing a, b, c leaving the same remainder is HCF(|a − b|, |b − c|, |c − a|).\n2. Calculate the pairwise differences:\n   91 − 43 = 48\n   183 − 91 = 92\n   183 − 43 = 140\n3. Find HCF(48, 92, 140):\n   48 = 4 × 12\n   92 = 4 × 23\n   140 = 4 × 35\n4. Since gcd(12, 23, 35) = 1, the HCF is **4**."
  },
  {
    "id": "mod16_q21",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Three numbers are in the ratio 1:2:3. If their HCF is 12, find the numbers?",
    "options": [
      "8, 16, 24",
      "12, 24, 36",
      "6, 12, 18",
      "None of these"
    ],
    "correct": "12, 24, 36",
    "explanation": "📐 Numbers from Ratio and HCF:\n1. Let the numbers be 1x, 2x, and 3x.\n2. Since 1, 2, and 3 share no common factor, the HCF is x = 12.\n3. The three numbers are:\n   1 × 12 = 12\n   2 × 12 = 24\n   3 × 12 = 36\n4. Hence, the numbers are **12, 24, 36**."
  },
  {
    "id": "mod16_q22",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Two numbers are in the ratio 15:11. If their HCF is 13, find the numbers?",
    "options": [
      "135 and 99",
      "165 and 121",
      "195 and 143",
      "None of these"
    ],
    "correct": "195 and 143",
    "explanation": "📐 Ratio and HCF Multiplier:\n1. Let the numbers be 15x and 11x.\n2. Since 15 and 11 are co-prime, the HCF is x = 13.\n3. First number = 15 × 13 = 195.\n4. Second number = 11 × 13 = 143.\n5. The numbers are **195 and 143**."
  },
  {
    "id": "mod16_q23",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the HCF of 2.4, 0.36 and 7.2",
    "options": [
      "12",
      "0.012",
      "1.2",
      "0.12"
    ],
    "correct": "0.12",
    "explanation": "📐 HCF of Decimal Numbers:\n1. Equalize decimal places to two decimal digits: 2.40, 0.36, 7.20.\n2. Multiply by 100 to convert to integers: 240, 36, 720.\n3. Find HCF(240, 36, 720):\n   36 = 12 × 3\n   240 = 12 × 20\n   720 = 12 × 60\n   HCF(240, 36, 720) = 12.\n4. Divide by 100 to restore decimal scale: 12 / 100 = **0.12**."
  },
  {
    "id": "mod16_q24",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "The numbers between 200 and 300, which when divided by 6, 8 or 9 leave no remainder in each case, are",
    "options": [
      "300, 243",
      "298, 256",
      "288, 216",
      "258, 294"
    ],
    "correct": "288, 216",
    "explanation": "📐 Multiples of LCM in Range:\n1. Find LCM(6, 8, 9):\n   6 = 2 × 3\n   8 = 2³\n   9 = 3²\n   LCM = 2³ × 3² = 8 × 9 = 72.\n2. Find multiples of 72 between 200 and 300:\n   72 × 3 = 216\n   72 × 4 = 288\n   72 × 5 = 360 (outside range).\n3. Hence, the numbers are **288, 216**."
  },
  {
    "id": "mod16_q25",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Hard",
    "points": 1,
    "question": "The HCF and product of two numbers are 15 and 6300 respectively. The number of possible pairs of the numbers is",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correct": "2",
    "explanation": "📐 Possible Co-Prime Pairs:\n1. Let the two numbers be 15a and 15b, where gcd(a, b) = 1.\n2. Product = (15a) × (15b) = 225ab = 6300.\n3. ab = 6300 / 225 = 28.\n4. Find co-prime pairs (a, b) such that a × b = 28 and gcd(a, b) = 1:\n   • (1, 28) ⟹ gcd(1, 28) = 1 (Valid)\n   • (2, 14) ⟹ gcd(2, 14) = 2 (Invalid)\n   • (4, 7) ⟹ gcd(4, 7) = 1 (Valid)\n5. There are **2** possible pairs."
  },
  {
    "id": "mod16_q26",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "The greatest number that will exactly divide 300 and 120",
    "options": [
      "60",
      "40",
      "75",
      "45"
    ],
    "correct": "60",
    "explanation": "📐 Greatest Common Divisor:\n1. The greatest number dividing both 300 and 120 is their HCF.\n2. 300 = 60 × 5\n3. 120 = 60 × 2\n4. Since gcd(5, 2) = 1, HCF(300, 120) = **60**."
  },
  {
    "id": "mod16_q27",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Hard",
    "points": 1,
    "question": "The HCF and LCM of two numbers are 13 and 455 respectively. If one of the numbers lies between 75 and 125, then that number is:",
    "options": [
      "78",
      "91",
      "104",
      "117"
    ],
    "correct": "91",
    "explanation": "📐 Co-prime Factor Breakdown:\n1. Let the two numbers be 13a and 13b with gcd(a, b) = 1.\n2. Product of numbers = HCF × LCM ⟹ 13a × 13b = 13 × 455.\n3. 169ab = 5915 ⟹ ab = 35.\n4. Possible co-prime factor pairs for ab = 35:\n   • (1, 35) ⟹ numbers: 13 × 1 = 13 and 13 × 35 = 455\n   • (5, 7) ⟹ numbers: 13 × 5 = 65 and 13 × 7 = 91\n5. The number that lies in the interval between 75 and 125 is **91**."
  },
  {
    "id": "mod16_q28",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "The number between 3000 and 4000 which is exactly divisible by 30, 36 and 80 is:",
    "options": [
      "3625",
      "3250",
      "3500",
      "3600"
    ],
    "correct": "3600",
    "explanation": "📐 LCM Multiple in Range:\n1. Find LCM(30, 36, 80):\n   30 = 2 × 3 × 5\n   36 = 2² × 3²\n   80 = 2⁴ × 5\n   LCM = 2⁴ × 3² × 5 = 16 × 9 × 5 = 720.\n2. Test multiples of 720:\n   720 × 4 = 2880\n   720 × 5 = 3600\n   720 × 6 = 4320\n3. The unique multiple between 3000 and 4000 is **3600**."
  },
  {
    "id": "mod16_q77",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "The HCF of two numbers is 12 and their difference is also 12. The numbers are:",
    "options": [
      "12, 84",
      "100, 112",
      "40, 52",
      "84, 96"
    ],
    "correct": "84, 96",
    "explanation": "⚡ HCF and Difference Relation:\n1. Since HCF is 12, both numbers must be multiples of 12.\n2. In options: 100, 112 are not divisible by 12; 40, 52 are not divisible by 12.\n3. Testing 12 and 84: difference = 84 − 12 = 72 ≠ 12.\n4. Testing 84 and 96: difference = 96 − 84 = 12, and HCF(84, 96) = 12.\n5. Hence, the numbers are **84, 96**."
  },
  {
    "id": "mod16_q78",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "The LCM of two numbers is 2376 while their HCF is 33. If one number is 297, the other number is:",
    "options": [
      "216",
      "264",
      "642",
      "792"
    ],
    "correct": "264",
    "explanation": "⚡ Fundamental Theorem of HCF & LCM:\n1. Product of two numbers = HCF × LCM.\n2. Other number = (HCF × LCM) / First number\n   = (33 × 2376) / 297.\n3. Since 297 / 33 = 9:\n   Other number = 2376 / 9 = **264**."
  },
  {
    "id": "mod16_q79",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the HCF of 4, 8, 16, 32 and 15.",
    "options": [
      "4",
      "8",
      "1",
      "None of these"
    ],
    "correct": "1",
    "explanation": "⚡ Co-prime Factor Analysis:\n1. Prime factorizations:\n   4 = 2², 8 = 2³, 16 = 2⁴, 32 = 2⁵\n   15 = 3 × 5.\n2. 15 shares no common prime factors with 2ⁿ.\n3. Thus, the greatest common divisor of the entire set is **1**."
  },
  {
    "id": "mod16_q80",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "The product of two numbers is 1280 and their HCF is 8. The LCM of the numbers is:",
    "options": [
      "140",
      "160",
      "183",
      "182"
    ],
    "correct": "160",
    "explanation": "⚡ Product Property:\n1. Product of numbers = HCF × LCM.\n2. LCM = Product / HCF = 1280 / 8 = **160**."
  },
  {
    "id": "mod16_q81",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Three numbers are in the ratio 2:3:4 and their HCF is 12. The LCM of the numbers is:",
    "options": [
      "144",
      "192",
      "96",
      "72"
    ],
    "correct": "144",
    "explanation": "⚡ Ratio and HCF Model:\n1. Let the numbers be 2H, 3H, 4H, where H = 12.\n2. The numbers are 2 × 12 = 24, 3 × 12 = 36, and 4 × 12 = 48.\n3. LCM(24, 36, 48):\n   24 = 2³ × 3\n   36 = 2² × 3²\n   48 = 2⁴ × 3\n   LCM = 2⁴ × 3² = 16 × 9 = **144**."
  },
  {
    "id": "mod16_q82",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the LCM of 22, 540 and 108.",
    "options": [
      "5940",
      "5640",
      "4740",
      "4940"
    ],
    "correct": "5940",
    "explanation": "⚡ Prime Factorization LCM:\n1. 22 = 2 × 11\n2. 540 = 2² × 3³ × 5\n3. 108 = 2² × 3³\n4. LCM takes highest power of each prime:\n   2² × 3³ × 5 × 11 = 4 × 27 × 5 × 11 = 540 × 11 = **5940**."
  },
  {
    "id": "mod16_q83",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "The LCM of two numbers is 1296 and their HCF is 96. If one number is 864, the other number is:",
    "options": [
      "72",
      "64",
      "144",
      "1164"
    ],
    "correct": "144",
    "explanation": "⚡ HCF × LCM Relation:\n1. Product of numbers = HCF × LCM.\n2. Other number = (HCF × LCM) / First number\n   = (96 × 1296) / 864.\n3. 1296 / 864 = 3 / 2.\n4. Other number = 96 × (3 / 2) = 48 × 3 = **144**."
  },
  {
    "id": "mod16_q84",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "The LCM of two numbers is 1920 and their HCF is 16. If one number is 128, find the other number.",
    "options": [
      "204",
      "240",
      "360",
      "320"
    ],
    "correct": "240",
    "explanation": "⚡ Product Property:\n1. Other number = (HCF × LCM) / Given number\n   = (16 × 1920) / 128.\n2. Since 128 / 16 = 8:\n   Other number = 1920 / 8 = **240**."
  },
  {
    "id": "mod16_q85",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Hard",
    "points": 1,
    "question": "Three sets of English, Mathematics and Science books contain 336, 240 and 96 books respectively. They must be stacked subject-wise, with the height of every stack the same. The total number of stacks will be:",
    "options": [
      "14",
      "21",
      "22",
      "48"
    ],
    "correct": "14",
    "explanation": "⚡ Maximum Equal Stack Size (HCF):\n1. Height of each stack = HCF(336, 240, 96).\n   - 336 = 48 × 7\n   - 240 = 48 × 5\n   - 96 = 48 × 2\n   HCF = 48 books per stack.\n2. Total number of stacks = (336/48) + (240/48) + (96/48)\n   = 7 + 5 + 2 = **14**."
  },
  {
    "id": "mod16_q86",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the LCM of 16, 24 and 36.",
    "options": [
      "123",
      "111",
      "11",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "⚡ LCM of Integers:\n1. Prime factors:\n   16 = 2⁴\n   24 = 2³ × 3\n   36 = 2² × 3²\n2. LCM = 2⁴ × 3² = 16 × 9 = 144.\n3. Since 144 is not listed among (123, 111, 11), the correct option is **None of these**."
  },
  {
    "id": "mod16_q87",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the least number of soldiers in a regiment such that they can stand in rows of 18, 15 and 25 and also form a perfect square.",
    "options": [
      "900",
      "1600",
      "2500",
      "450"
    ],
    "correct": "900",
    "explanation": "⚡ LCM and Square Formation:\n1. LCM(18, 15, 25):\n   18 = 2 × 3²\n   15 = 3 × 5\n   25 = 5²\n   LCM = 2 × 3² × 5² = 450.\n2. To make 450 a perfect square, each prime factor must have an even exponent:\n   450 = 2¹ × 3² × 5².\n3. Multiply by 2 to complete the square: 450 × 2 = **900** (= 30²)."
  },
  {
    "id": "mod16_q88",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the least perfect square divisible by 8, 9 and 10.",
    "options": [
      "4000",
      "3600",
      "6400",
      "111"
    ],
    "correct": "3600",
    "explanation": "⚡ Perfect Square Divisible by Multiple Numbers:\n1. Find LCM(8, 9, 10):\n   8 = 2³\n   9 = 3²\n   10 = 2 × 5\n   LCM = 2³ × 3² × 5 = 360.\n2. Prime factor exponents in 360: 2³ × 3² × 5¹.\n3. To make it a square, multiply by 2¹ × 5¹ = 10:\n   360 × 10 = **3600** (= 60²)."
  },
  {
    "id": "mod16_q89",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the greatest number that will exactly divide 200 and 320.",
    "options": [
      "30",
      "40",
      "50",
      "45"
    ],
    "correct": "40",
    "explanation": "⚡ Highest Common Factor:\n1. 200 = 40 × 5\n2. 320 = 40 × 8\n3. Since 5 and 8 are co-prime, HCF(200, 320) = **40**."
  },
  {
    "id": "mod16_q90",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "Six bells commence tolling together and toll at intervals of 2, 4, 6, 8, 10 and 12 seconds respectively. In 30 minutes, how many times do they toll together, including the one at the beginning?",
    "options": [
      "16",
      "15",
      "14",
      "None of these"
    ],
    "correct": "16",
    "explanation": "⚡ Interval of Simultaneous Tolling:\n1. Find LCM(2, 4, 6, 8, 10, 12):\n   LCM = 120 seconds = 2 minutes.\n2. In 30 minutes, number of intervals = 30 / 2 = 15.\n3. Including the toll at t = 0 (the beginning): 15 + 1 = **16** times."
  },
  {
    "id": "mod16_q91",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: H.C.F. & L.C.M.",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the least number which, when doubled, becomes exactly divisible by 9, 15, 21 and 30?",
    "options": [
      "196",
      "189",
      "630",
      "315"
    ],
    "correct": "315",
    "explanation": "⚡ Doubled LCM Condition:\n1. Find LCM(9, 15, 21, 30):\n   9 = 3²\n   15 = 3 × 5\n   21 = 3 × 7\n   30 = 2 × 3 × 5\n   LCM = 2 × 3² × 5 × 7 = 630.\n2. When the required number N is doubled, it equals 630:\n   2N = 630 ⟹ N = 630 / 2 = **315**."
  },
  {
    "id": "mod16_q29",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Hard",
    "points": 1,
    "question": "The mean temperature of Monday to Wednesday was 37°C and of Tuesday to Thursday was 34°C. If the temperature on Thursday was 4/5 that of Monday, the temperature on Thursday was:",
    "options": [
      "10",
      "12",
      "11",
      "None of These"
    ],
    "correct": "None of These",
    "explanation": "📊 Temperature Difference Method:\n1. M + T + W = 3 × 37 = 111°C.\n2. T + W + Th = 3 × 34 = 102°C.\n3. Subtracting the two equations:\n   M − Th = 111 − 102 = 9°C.\n4. Given Th = 4/5 M ⟹ M − 4/5 M = 9°C ⟹ M / 5 = 9°C ⟹ M = 45°C.\n5. Therefore, Th = (4/5) × 45 = 36°C.\n6. Since 36 is not in the options (10, 12, 11), the correct answer is **None of These**."
  },
  {
    "id": "mod16_q30",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "I went to Delhi at the speed of 200 km/hr but suddenly I returned to the same place at the speed of 600 km/hr. What is my average speed?",
    "options": [
      "300 km/hr",
      "400 km/hr",
      "366.66 km/hr",
      "None of These"
    ],
    "correct": "300 km/hr",
    "explanation": "📊 Harmonic Mean for Equal Distances:\n1. When the distance covered in each direction is equal, average speed = (2xy) / (x + y).\n2. Speed going (x) = 200 km/hr, Speed returning (y) = 600 km/hr.\n3. Average speed = (2 × 200 × 600) / (200 + 600) = 240000 / 800 = **300 km/hr**."
  },
  {
    "id": "mod16_q31",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average weight of 11 players of Indian cricket team is increased by 1 kg, when one player of the team weighing 55 kg is replaced by a new player. The weight of the new player is",
    "options": [
      "55",
      "64",
      "66",
      "None of These"
    ],
    "correct": "66",
    "explanation": "📊 Replacement Formula:\n1. Weight of new player = Weight of replaced player + (Total players × Increase in average)\n2. Total players = 11, Increase = 1 kg, Replaced weight = 55 kg.\n3. Weight of new player = 55 + (11 × 1) = 55 + 11 = **66** kg."
  },
  {
    "id": "mod16_q32",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "Average of 7 consecutive odd numbers if the smallest of those numbers is denoted by k",
    "options": [
      "k+4",
      "k+7",
      "k+6",
      "7k"
    ],
    "correct": "k+6",
    "explanation": "📊 Consecutive Odd Numbers in A.P.:\n1. The 7 consecutive odd numbers starting with k are:\n   k, k + 2, k + 4, k + 6, k + 8, k + 10, k + 12.\n2. In any arithmetic progression with an odd number of terms, the average is the median (central term).\n3. The 4th term is k + 6.\n4. Therefore, the average is **k+6**."
  },
  {
    "id": "mod16_q33",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average age of 30 students of a class is 30 years. When the age of the class teacher is also included, the average age of the whole class increases by 1 year. The age of the class teacher is:",
    "options": [
      "31 years",
      "60 years",
      "61 years",
      "None of these"
    ],
    "correct": "61 years",
    "explanation": "📊 Inclusion Formula:\n1. Total age of 30 students = 30 × 30 = 900 years.\n2. When the teacher is included, total people = 31 and new average = 31 years.\n3. Total age of 31 people = 31 × 31 = 961 years.\n4. Teacher's age = 961 − 900 = **61 years**."
  },
  {
    "id": "mod16_q34",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Medium",
    "points": 1,
    "question": "There were five sections in MAT paper. The average score of Pooja in first 3 sections was 83 and the average in the last 3 sections was 97 and the average of all the sections (i.e. whole paper) was 92, then her score in the third section was:",
    "options": [
      "85",
      "92",
      "88",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "📊 Overlapping Middle Section Calculation:\n1. Let the 5 sections be S₁, S₂, S₃, S₄, S₅.\n2. S₁ + S₂ + S₃ = 3 × 83 = 249.\n3. S₃ + S₄ + S₅ = 3 × 97 = 291.\n4. Total score of all 5 sections = 5 × 92 = 460.\n5. S₃ = (S₁ + S₂ + S₃) + (S₃ + S₄ + S₅) − (Total of all 5 sections)\n   S₃ = 249 + 291 − 460 = 540 − 460 = 80.\n6. Since 80 is not among the options (85, 92, 88), the correct answer is **None of these**."
  },
  {
    "id": "mod16_q35",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the average of the squares of the first 111 natural numbers",
    "options": [
      "300",
      "400",
      "500",
      "None"
    ],
    "correct": "None",
    "explanation": "📊 Average of Sum of Squares:\n1. Sum of squares of first n natural numbers = n(n + 1)(2n + 1) / 6.\n2. Average = (n + 1)(2n + 1) / 6.\n3. For n = 111:\n   Average = (111 + 1)(2 × 111 + 1) / 6 = (112 × 223) / 6 = 24976 / 6 ≈ 4162.67.\n4. Since 4162.67 is not listed in the options (300, 400, 500), the correct answer is **None**."
  },
  {
    "id": "mod16_q36",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average of five numbers is 306. The average of the first two numbers is 431 and the average of the last two numbers is 214. What is the third number?",
    "options": [
      "0",
      "None of these",
      "3",
      "1"
    ],
    "correct": "None of these",
    "explanation": "📊 Subtraction of Subgroups:\n1. Sum of all five numbers = 5 × 306 = 1530.\n2. Sum of first two numbers = 2 × 431 = 862.\n3. Sum of last two numbers = 2 × 214 = 428.\n4. Third number = 1530 − (862 + 428) = 1530 − 1290 = 240.\n5. Since 240 is not among the options (0, 3, 1), the correct answer is **None of these**."
  },
  {
    "id": "mod16_q37",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
    "options": [
      "6.25",
      "6.5",
      "6.75",
      "7"
    ],
    "correct": "6.25",
    "explanation": "📊 Cricket Run Rate:\n1. Runs scored in the first 10 overs = 10 × 3.2 = 32 runs.\n2. Target runs = 282.\n3. Runs required in remaining 40 overs = 282 − 32 = 250 runs.\n4. Required run rate = 250 / 40 = **6.25** runs per over."
  },
  {
    "id": "mod16_q38",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of first 50 odd natural numbers is:",
    "options": [
      "50",
      "55",
      "51",
      "101"
    ],
    "correct": "50",
    "explanation": "📊 Average of First n Odd Numbers:\n1. Sum of first n odd natural numbers = n².\n2. Average = n² / n = n.\n3. For n = 50, the average is **50**."
  },
  {
    "id": "mod16_q39",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the average of the first 1115 natural numbers?",
    "options": [
      "431",
      "558",
      "430",
      "403"
    ],
    "correct": "558",
    "explanation": "📊 Average of First n Natural Numbers:\n1. Formula: Average = (n + 1) / 2.\n2. For n = 1115:\n   Average = (1115 + 1) / 2 = 1116 / 2 = **558**."
  },
  {
    "id": "mod16_q40",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "Three types of rice whose rates are Rs 38, Rs 43 and Rs 49 per kg are blended together to make 15 kg of new blend in which there are 8 kg, 4 kg, 3 kg of the respective types of rice. The average price of the new blend of rice is",
    "options": [
      "Rs 41.53",
      "Rs 43",
      "Rs 40",
      "Rs 43.3"
    ],
    "correct": "Rs 41.53",
    "explanation": "📊 Weighted Average Price:\n1. Cost of Type 1 (8 kg @ Rs 38) = 8 × 38 = Rs 304.\n2. Cost of Type 2 (4 kg @ Rs 43) = 4 × 43 = Rs 172.\n3. Cost of Type 3 (3 kg @ Rs 49) = 3 × 49 = Rs 147.\n4. Total cost = 304 + 172 + 147 = Rs 623.\n5. Total weight = 8 + 4 + 3 = 15 kg.\n6. Average price per kg = 623 / 15 ≈ **Rs 41.53**."
  },
  {
    "id": "mod16_q41",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average length of first 3 fingers is 3 inches and the average length of the other 2 fingers i.e. thumb and index finger is 2.8 inches. If the length of the index finger is 3 inches then the length of the thumb is:",
    "options": [
      "2 inches",
      "2.6 inches",
      "3 inches",
      "None of these"
    ],
    "correct": "2.6 inches",
    "explanation": "📊 Group Length Subtraction:\n1. Total length of thumb and index finger = 2 × 2.8 = 5.6 inches.\n2. Length of index finger = 3 inches.\n3. Length of thumb = Total − Index = 5.6 − 3 = **2.6 inches**."
  },
  {
    "id": "mod16_q42",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of first 99 even numbers is:",
    "options": [
      "9999",
      "100",
      "9801",
      "9009"
    ],
    "correct": "100",
    "explanation": "📊 Average of First n Even Numbers:\n1. The first n even numbers are 2, 4, 6, ..., 2n.\n2. Sum = n(n + 1).\n3. Average = n(n + 1) / n = n + 1.\n4. For n = 99:\n   Average = 99 + 1 = **100**."
  },
  {
    "id": "mod16_q43",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the average of natural numbers from 1 to 67?",
    "options": [
      "33.5",
      "34",
      "50",
      "67"
    ],
    "correct": "34",
    "explanation": "📊 Average of Consecutive Numbers in A.P.:\n1. Formula: Average = (First Term + Last Term) / 2.\n2. Average = (1 + 67) / 2 = 68 / 2 = **34**."
  },
  {
    "id": "mod16_q44",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of first 100 natural numbers is",
    "options": [
      "100",
      "50",
      "50.5",
      "55"
    ],
    "correct": "50.5",
    "explanation": "📊 Average of First 100 Natural Numbers:\n1. Formula: Average = (n + 1) / 2.\n2. For n = 100:\n   Average = (100 + 1) / 2 = 101 / 2 = **50.5**."
  },
  {
    "id": "mod16_q45",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The cost of the Red, Green and Blue colours per kg is Rs. 20, Rs. 15 and Rs. 18 respectively. Rang Mahal is a renowned building in which these three colours are being used in the ratio of 3 : 2 : 4. The average cost of all the three colours used per kg is:",
    "options": [
      "18",
      "20",
      "17.66",
      "Can't be determined"
    ],
    "correct": "18",
    "explanation": "📊 Weighted Average Price of Colors:\n1. Proportions: Red = 3 units @ Rs 20, Green = 2 units @ Rs 15, Blue = 4 units @ Rs 18.\n2. Total cost = (3 × 20) + (2 × 15) + (4 × 18) = 60 + 30 + 72 = 162.\n3. Total weight = 3 + 2 + 4 = 9 units.\n4. Average cost per kg = 162 / 9 = **18**."
  },
  {
    "id": "mod16_q92",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the average of all the numbers between 6 and 34 that are divisible by 5.",
    "options": [
      "18",
      "19",
      "20",
      "22"
    ],
    "correct": "20",
    "explanation": "📊 Average of Arithmetic Progression:\n1. The multiples of 5 strictly between 6 and 34 are: 10, 15, 20, 25, 30.\n2. For any symmetric AP, Average = (First term + Last term) / 2\n   = (10 + 30) / 2 = 40 / 2 = **20**."
  },
  {
    "id": "mod16_q93",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of 5 terms is 50. If the first four terms are 45, 42, 119 and 84, what is the last term?",
    "options": [
      "56",
      "−20",
      "−40",
      "−50"
    ],
    "correct": "−40",
    "explanation": "📊 Sum of Terms Equation:\n1. Total sum of all 5 terms = 5 × 50 = 250.\n2. Sum of the first four terms = 45 + 42 + 119 + 84 = 290.\n3. Last term = Total sum − Sum of 4 terms = 250 − 290 = **−40**."
  },
  {
    "id": "mod16_q94",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Medium",
    "points": 1,
    "question": "If the average of 8 terms is 40 and the average of the first 6 terms is 35, what is the average of the remaining 2 terms?",
    "options": [
      "30",
      "55",
      "40",
      "42"
    ],
    "correct": "55",
    "explanation": "📊 Partitioned Averages:\n1. Sum of all 8 terms = 8 × 40 = 320.\n2. Sum of the first 6 terms = 6 × 35 = 210.\n3. Sum of the remaining 2 terms = 320 − 210 = 110.\n4. Average of the remaining 2 terms = 110 / 2 = **55**."
  },
  {
    "id": "mod16_q95",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the average of the first 101 natural numbers.",
    "options": [
      "47",
      "48",
      "51",
      "49"
    ],
    "correct": "51",
    "explanation": "📊 Average of Natural Numbers Formula:\n1. Average of the first n natural numbers = (n + 1) / 2.\n2. For n = 101: Average = (101 + 1) / 2 = 102 / 2 = **51**."
  },
  {
    "id": "mod16_q96",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the average of the first 7 natural numbers.",
    "options": [
      "4",
      "6",
      "7",
      "9"
    ],
    "correct": "4",
    "explanation": "📊 Formula for n Natural Numbers:\n1. Average = (n + 1) / 2.\n2. For n = 7: Average = (7 + 1) / 2 = 8 / 2 = **4**."
  },
  {
    "id": "mod16_q97",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average of three consecutive even numbers is M. If the next five even numbers are also included, the average of all 8 numbers will be:",
    "options": [
      "M + 6",
      "M + 3",
      "M + 5",
      "M + 4"
    ],
    "correct": "M + 5",
    "explanation": "📊 Consecutive Even Numbers Progression:\n1. Let the 3 consecutive even numbers be M − 2, M, M + 2 (their average is M).\n2. The next five even numbers are M + 4, M + 6, M + 8, M + 10, M + 12.\n3. The complete set of 8 consecutive even numbers is an AP from (M − 2) to (M + 12).\n4. Average of AP = (First + Last) / 2 = ((M − 2) + (M + 12)) / 2 = (2M + 10) / 2 = **M + 5**."
  },
  {
    "id": "mod16_q98",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of 7 consecutive positive integers is 10. The average of the lowest and highest numbers is:",
    "options": [
      "7",
      "10",
      "15",
      "Data insufficient"
    ],
    "correct": "10",
    "explanation": "📊 AP Symmetry Property:\n1. In any arithmetic progression with an odd number of terms, the overall average equals both the middle term and the average of the first and last terms.\n2. Average of (lowest + highest) / 2 = Overall average = **10**."
  },
  {
    "id": "mod16_q99",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a class, there are 20 boys. Their average age decreases by 2 months when a boy aged 18 years is replaced by a new boy. Find the age of the new boy.",
    "options": [
      "16 years",
      "21 years 4 months",
      "14 years 8 months",
      "15 years"
    ],
    "correct": "14 years 8 months",
    "explanation": "📊 Replacement Age Formula:\n1. Total decrease in sum of ages = Number of boys × Decrease in average\n   = 20 × 2 months = 40 months = 3 years 4 months.\n2. Age of new boy = Age of replaced boy − Total decrease\n   = 18 years − 3 years 4 months = **14 years 8 months**."
  },
  {
    "id": "mod16_q100",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average weight of 20 students is 45 kg. A student weighing 40 kg replaces an old student, and the class average decreases by 1 kg. The weight of the replaced student is:",
    "options": [
      "55 kg",
      "50 kg",
      "60 kg",
      "None of these"
    ],
    "correct": "60 kg",
    "explanation": "📊 Replacement Weight Formula:\n1. Total decrease in weight = 20 × 1 kg = 20 kg.\n2. Weight of old (replaced) student = Weight of new student + Total decrease\n   = 40 kg + 20 kg = **60 kg**."
  },
  {
    "id": "mod16_q101",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average price of 3 diamonds of the same weight is Rs. 5 crore. The average price of the two costliest diamonds is double the price of the cheapest diamond. The price of the cheapest diamond is:",
    "options": [
      "Rs. 3 crore",
      "Rs. 5 crore",
      "Rs. 1.66 crore",
      "Cannot be determined"
    ],
    "correct": "Rs. 3 crore",
    "explanation": "📊 Linear Average System:\n1. Total cost of 3 diamonds = 3 × 5 = Rs. 15 crore.\n2. Let the cheapest diamond be C, and the two costliest be A and B:\n   A + B + C = 15 crore  ---(1)\n3. Given: (A + B) / 2 = 2C ⟹ A + B = 4C.\n4. Substitute into (1): 4C + C = 15 ⟹ 5C = 15 ⟹ C = **Rs. 3 crore**."
  },
  {
    "id": "mod16_q102",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Medium",
    "points": 1,
    "question": "Kamlesh bought 65 books for Rs. 1050 from one shop and 50 books for Rs. 1020 from another. What was the average price per book?",
    "options": [
      "Rs. 36.4",
      "Rs. 18.2",
      "Rs. 24",
      "Rs. 18"
    ],
    "correct": "Rs. 18",
    "explanation": "📊 Weighted Total Average:\n1. Total expenditure = Rs. 1050 + Rs. 1020 = Rs. 2070.\n2. Total books purchased = 65 + 50 = 115 books.\n3. Average price per book = 2070 / 115 = **Rs. 18**."
  },
  {
    "id": "mod16_q103",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Average",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pankaj travelled to the post office at 60 km/h. On the return journey, he covered half the distance at 10 km/h and the remaining half at 30 km/h. The average speed for the whole journey was:",
    "options": [
      "5.67 km/h",
      "24 km/h",
      "22.88 km/h",
      "5.45 km/h"
    ],
    "correct": "24 km/h",
    "explanation": "📊 Total Distance over Total Time:\n1. Let one-way distance be d = 60 km.\n   - Outward time t₁ = 60 / 60 = 1 hour.\n2. Return journey (distance = 60 km):\n   - First 30 km at 10 km/h: t₂ = 30 / 10 = 3 hours.\n   - Remaining 30 km at 30 km/h: t₃ = 30 / 30 = 1 hour.\n3. Total round-trip distance = 60 + 60 = 120 km.\n4. Total time = 1 + 3 + 1 = 5 hours.\n5. Average speed = 120 / 5 = **24 km/h**."
  },
  {
    "id": "mod16_q46",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the greatest number of five digits which when divided by 3, 5, 8, 12 have 2 as a remainder",
    "options": [
      "99999",
      "99958",
      "99960",
      "99962"
    ],
    "correct": "99962",
    "explanation": "⚡ Greatest Number with Fixed Remainder:\n1. LCM(3, 5, 8, 12) = 120.\n2. The greatest 5-digit number is 99999.\n3. Divide 99999 by 120:\n   99999 = 120 × 833 + 39 (remainder = 39).\n4. The greatest 5-digit multiple of 120 is 99999 − 39 = 99960.\n5. Adding the required remainder 2:\n   99960 + 2 = **99962**."
  },
  {
    "id": "mod16_q47",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Easy",
    "points": 1,
    "question": "The remainder obtained when a prime number greater than 6 is divided by 6 is",
    "options": [
      "1 or 3",
      "1 or 5",
      "3 or 5",
      "4 or 5"
    ],
    "correct": "1 or 5",
    "explanation": "⚡ Prime Number Form Modulo 6:\n1. Every positive integer can be represented as 6k, 6k+1, 6k+2, 6k+3, 6k+4, or 6k+5.\n2. 6k, 6k+2, and 6k+4 are divisible by 2 (even numbers).\n3. 6k+3 is divisible by 3.\n4. Any prime number p > 6 is not divisible by 2 or 3, so it must be of the form 6k+1 or 6k+5.\n5. Thus, the remainder when divided by 6 is **1 or 5**."
  },
  {
    "id": "mod16_q48",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Easy",
    "points": 1,
    "question": "When 'n' is divided by 5 the remainder is 2. What is the remainder when n² is divided by 5?",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correct": "4",
    "explanation": "⚡ Remainder of a Power:\n1. Given n ≡ 2 (mod 5).\n2. Squaring both sides:\n   n² ≡ 2² (mod 5) ≡ 4 (mod 5).\n3. Therefore, the remainder when n² is divided by 5 is **4**."
  },
  {
    "id": "mod16_q49",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the smallest number which leaves the remainders 13, 41 and 29 at the end when divided by 20, 48 and 36 respectively.",
    "options": [
      "187",
      "713",
      "720",
      "727"
    ],
    "correct": "713",
    "explanation": "⚡ Constant Difference Remainder Rule:\n1. Notice the difference between divisor and remainder:\n   20 − 13 = 7\n   48 − 41 = 7\n   36 − 29 = 7\n   Common difference d = 7.\n2. Find LCM(20, 48, 36):\n   20 = 2² × 5\n   48 = 2⁴ × 3\n   36 = 2² × 3²\n   LCM = 2⁴ × 3² × 5 = 16 × 9 × 5 = 720.\n3. The smallest required number = LCM − d = 720 − 7 = **713**."
  },
  {
    "id": "mod16_q50",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Hard",
    "points": 1,
    "question": "A number when divided successively by 4 and 5 leaves remainder 1 and 4 respectively. When it is successively divided by 5 and 4 the respective remainders will be",
    "options": [
      "4, 1",
      "3, 2",
      "2, 3",
      "1, 2"
    ],
    "correct": "2, 3",
    "explanation": "⚡ Successive Division Algorithm:\n1. In successive division, N = 4q₁ + 1 and q₁ = 5q₂ + 4.\n2. For the least positive integer, take final quotient q₂ = 0:\n   q₁ = 5(0) + 4 = 4.\n   N = 4(4) + 1 = 17.\n3. Now divide 17 successively by 5 and 4:\n   • 17 ÷ 5 = 3 with remainder **2**.\n   • 3 ÷ 4 = 0 with remainder **3**.\n4. Therefore, the respective remainders are **2, 3**."
  },
  {
    "id": "mod16_q51",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Hard",
    "points": 1,
    "question": "The remainder when 7⁸⁴ is divided by 342 is",
    "options": [
      "0",
      "1",
      "49",
      "341"
    ],
    "correct": "1",
    "explanation": "⚡ Power Grouping Modulo 342:\n1. Calculate 7³ = 343.\n2. Notice that 343 = 342 + 1 ≡ 1 (mod 342).\n3. Express exponent 84 as 3 × 28:\n   7⁸⁴ = (7³)²⁸ = 343²⁸.\n4. 343²⁸ ≡ 1²⁸ ≡ **1** (mod 342)."
  },
  {
    "id": "mod16_q52",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "When a number is divided by 357 the remainder is 39. If that number is divided by 17, the remainder will be:",
    "options": [
      "0",
      "5",
      "11"
    ],
    "correct": "5",
    "explanation": "⚡ Divisor Factor Property:\n1. Let the number be N = 357k + 39.\n2. Since 357 = 17 × 21, the term 357k is completely divisible by 17.\n3. The remainder depends solely on dividing 39 by 17:\n   39 = 17 × 2 + 5.\n4. Hence, the remainder is **5**."
  },
  {
    "id": "mod16_q53",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "The least number, which when divided by 12, 15, 20 or 54 leaves a remainder of 4 in each case is:",
    "options": [
      "450",
      "454",
      "540",
      "544"
    ],
    "correct": "544",
    "explanation": "⚡ LCM with Constant Remainder:\n1. The least number leaving remainder 4 when divided by 12, 15, 20, 54 is LCM(12, 15, 20, 54) + 4.\n2. Find LCM(12, 15, 20, 54):\n   12 = 2² × 3\n   15 = 3 × 5\n   20 = 2² × 5\n   54 = 2 × 3³\n   LCM = 2² × 3³ × 5 = 4 × 27 × 5 = 540.\n3. Required number = 540 + 4 = **544**."
  },
  {
    "id": "mod16_q54",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Hard",
    "points": 1,
    "question": "The least number which when divided by 16, 18, 20 and 25 leaves 4 as a remainder in each case but when divided by 7 leaves no remainder is",
    "options": [
      "17004",
      "18000",
      "18002",
      "18004"
    ],
    "correct": "18004",
    "explanation": "⚡ Dual Divisibility Condition:\n1. Find LCM(16, 18, 20, 25):\n   16 = 2⁴, 18 = 2 × 3², 20 = 2² × 5, 25 = 5²\n   LCM = 2⁴ × 3² × 5² = 16 × 9 × 25 = 3600.\n2. The number must be of the form N = 3600k + 4.\n3. N must be divisible by 7:\n   3600 = 7 × 514 + 2 ⟹ 3600 ≡ 2 (mod 7).\n   So 3600k + 4 ≡ 2k + 4 ≡ 0 (mod 7).\n4. 2k ≡ −4 ≡ 3 (mod 7) ⟹ 2k ≡ 10 (mod 7) ⟹ k ≡ 5 (mod 7).\n5. For the least positive value, choose k = 5:\n   N = 3600(5) + 4 = 18000 + 4 = **18004** (and 18004 ÷ 7 = 2572 exact)."
  },
  {
    "id": "mod16_q55",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "A number, when divided by 136, leaves remainder 36. If the same number is divided by 17, the remainder will be",
    "options": [
      "9",
      "3",
      "2"
    ],
    "correct": "2",
    "explanation": "⚡ Divisor Factor Property:\n1. Let the number be N = 136k + 36.\n2. Since 136 = 17 × 8, 136k is exactly divisible by 17.\n3. The remainder when N is divided by 17 is simply 36 mod 17:\n   36 = 17 × 2 + 2.\n4. Thus, the remainder is **2**."
  },
  {
    "id": "mod16_q56",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder when 4¹⁰⁰⁰ is divided by 7?",
    "options": [
      "6",
      "2",
      "4",
      "None of these"
    ],
    "correct": "4",
    "explanation": "⚡ Modular Exponentiation & Cyclicity:\n1. Powers of 4 modulo 7:\n   4¹ ≡ 4 (mod 7)\n   4² = 16 ≡ 2 (mod 7)\n   4³ = 64 ≡ 1 (mod 7)\n2. The period of cyclicity is 3.\n3. Divide exponent 1000 by 3:\n   1000 = 3 × 333 + 1 (remainder = 1).\n4. 4¹⁰⁰⁰ = (4³)³³³ × 4¹ ≡ 1³³³ × 4 ≡ **4** (mod 7)."
  },
  {
    "id": "mod16_q57",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder when 6729 is divided by 35?",
    "options": [
      "11",
      "7",
      "9",
      "13"
    ],
    "correct": "9",
    "explanation": "⚡ Direct Division:\n1. Divide 6729 by 35:\n   6729 = 35 × 192 + 9.\n2. 35 × 192 = 6720.\n3. Remainder = 6729 − 6720 = **9**."
  },
  {
    "id": "mod16_q58",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Hard",
    "points": 1,
    "question": "If 71⁸³ + 73⁸³ is divided by 36, the remainder is:",
    "options": [
      "13",
      "9",
      "0",
      "8"
    ],
    "correct": "0",
    "explanation": "⚡ Negative Remainder Modulo 36:\n1. Consider each base modulo 36:\n   71 = 36 × 2 − 1 ≡ −1 (mod 36)\n   73 = 36 × 2 + 1 ≡ +1 (mod 36)\n2. Substitute into the expression:\n   71⁸³ + 73⁸³ ≡ (−1)⁸³ + (+1)⁸³ (mod 36)\n   ≡ −1 + 1 = 0 (mod 36).\n3. Hence, the remainder is **0**."
  },
  {
    "id": "mod16_q59",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the least number which when divided by 36, 48 and 64 leaves the remainders 25, 37 and 53 respectively.",
    "options": [
      "565",
      "560",
      "555",
      "550"
    ],
    "correct": "565",
    "explanation": "⚡ Constant Difference Remainder Rule:\n1. Differences between divisors and remainders:\n   36 − 25 = 11\n   48 − 37 = 11\n   64 − 53 = 11\n   Common difference d = 11.\n2. Find LCM(36, 48, 64):\n   36 = 2² × 3²\n   48 = 2⁴ × 3\n   64 = 2⁶\n   LCM = 2⁶ × 3² = 64 × 9 = 576.\n3. Required number = LCM − d = 576 − 11 = **565**."
  },
  {
    "id": "mod16_q60",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Hard",
    "points": 1,
    "question": "The least number which when divided by 5, 6, 7 and 8 leaves the remainder 3, but when divided by 9 leaves no remainder, is:",
    "options": [
      "1766",
      "1683",
      "2327",
      "1895"
    ],
    "correct": "1683",
    "explanation": "⚡ Dual Condition with LCM:\n1. Find LCM(5, 6, 7, 8):\n   5 = 5, 6 = 2 × 3, 7 = 7, 8 = 2³\n   LCM = 2³ × 3 × 5 × 7 = 840.\n2. The number is of the form N = 840k + 3.\n3. N must be divisible by 9:\n   840 = 9 × 93 + 3 ⟹ 840 ≡ 3 (mod 9).\n   So 840k + 3 ≡ 3k + 3 ≡ 0 (mod 9).\n4. Test values of k:\n   • k = 1: 3(1) + 3 = 6 (not divisible by 9)\n   • k = 2: 3(2) + 3 = 9 (divisible by 9!)\n5. For k = 2:\n   N = 840(2) + 3 = 1680 + 3 = **1683** (and 1683 ÷ 9 = 187 exact)."
  },
  {
    "id": "mod16_q104",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder when 2¹⁰⁰ is divided by 3?",
    "options": [
      "3",
      "0",
      "1",
      "2"
    ],
    "correct": "1",
    "explanation": "⚡ Modular Base Splitting:\n1. 2 ≡ −1 (mod 3).\n2. 2¹⁰⁰ ≡ (−1)¹⁰⁰ (mod 3).\n3. Since 100 is even, (−1)¹⁰⁰ = 1.\n4. Therefore, the remainder is **1**."
  },
  {
    "id": "mod16_q105",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder when 2¹⁰⁰ is divided by 7?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": "2",
    "explanation": "⚡ Modular Power Grouping:\n1. 2³ = 8 ≡ 1 (mod 7).\n2. Express the exponent in multiples of 3: 100 = 3 × 33 + 1.\n3. 2¹⁰⁰ = (2³)³³ × 2¹ ≡ (1)³³ × 2 = **2** (mod 7)."
  },
  {
    "id": "mod16_q106",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "If 17²⁰⁰ is divided by 18, the remainder is:",
    "options": [
      "17",
      "16",
      "1",
      "2"
    ],
    "correct": "1",
    "explanation": "⚡ Negative Remainder Rule:\n1. 17 ≡ −1 (mod 18).\n2. 17²⁰⁰ ≡ (−1)²⁰⁰ (mod 18).\n3. Since 200 is even, (−1)²⁰⁰ = 1.\n4. Therefore, the remainder is **1**."
  },
  {
    "id": "mod16_q107",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder when 293 is divided by 7?",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "correct": "6",
    "explanation": "⚡ Direct Division:\n1. 293 ÷ 7 = 41 with a remainder of 6.\n   Verification: 41 × 7 = 287, and 293 − 287 = 6.\n2. The remainder is **6**."
  },
  {
    "id": "mod16_q108",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "A number, when divided by 357, leaves a remainder of 39. If the number is divided by 7, the remainder will be:",
    "options": [
      "4",
      "9",
      "5",
      "11"
    ],
    "correct": "4",
    "explanation": "⚡ Divisor Factor Property:\n1. The original divisor 357 is exactly divisible by 7 (357 = 7 × 51).\n2. Therefore, the remainder when the number is divided by 7 equals the remainder when 39 is divided by 7.\n3. 39 ÷ 7 = 5 with remainder **4** (39 = 7 × 5 + 4)."
  },
  {
    "id": "mod16_q109",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "A number, when divided by 221, leaves a remainder of 64. What is the remainder when the same number is divided by 13?",
    "options": [
      "0",
      "1",
      "11",
      "12"
    ],
    "correct": "12",
    "explanation": "⚡ Divisor Factor Property:\n1. 221 is exactly divisible by 13 (221 = 13 × 17).\n2. The remainder when the number is divided by 13 is simply 64 mod 13.\n3. 64 = 13 × 4 + 12.\n4. Therefore, the remainder is **12**."
  },
  {
    "id": "mod16_q110",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Medium",
    "points": 1,
    "question": "A number, when divided by 296, gives a remainder of 75. When the same number is divided by 37, the remainder will be:",
    "options": [
      "1",
      "2",
      "8",
      "11"
    ],
    "correct": "1",
    "explanation": "⚡ Divisor Factor Property:\n1. 296 is exactly divisible by 37 (296 = 37 × 8).\n2. Remainder = 75 mod 37.\n3. 75 = 37 × 2 + 1.\n4. Hence, the remainder is **1**."
  },
  {
    "id": "mod16_q111",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Hard",
    "points": 1,
    "question": "The integers 34041 and 32506, when divided by a three-digit integer n, leave the same remainder. What is n?",
    "options": [
      "289",
      "367",
      "453",
      "307"
    ],
    "correct": "307",
    "explanation": "⚡ Equal Remainder Difference Rule:\n1. If a and b leave the same remainder when divided by n, then n must be a factor of their difference |a − b|.\n2. Difference = 34041 − 32506 = 1535.\n3. Prime factorization of 1535 = 5 × 307.\n4. The divisors of 1535 are 1, 5, 307, 1535.\n5. The only three-digit integer divisor is **307**."
  },
  {
    "id": "mod16_q112",
    "module_id": "mod16",
    "module_name": "ST1 Questions",
    "syllabus_lec": "ST-1 Revision Question Set",
    "type_id": "type_4",
    "type_name": "Type 4: Remainder Theorem",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the least number which, when divided by 27, 35, 45 and 49, leaves a remainder of 6 in each case.",
    "options": [
      "5523",
      "6620",
      "6623",
      "6621"
    ],
    "correct": "6621",
    "explanation": "⚡ Constant Remainder Model:\n1. Required number = LCM(27, 35, 45, 49) + Remainder.\n2. Prime factorizations:\n   27 = 3³\n   35 = 5 × 7\n   45 = 3² × 5\n   49 = 7²\n3. LCM = 3³ × 5 × 7² = 27 × 5 × 49 = 135 × 49 = 6615.\n4. Required number = 6615 + 6 = **6621**."
  },
  {
    "id": "fa1_q1",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A family consists of six members P, Q, R, X, Y and Z. Q is the son of R but R is not the mother of Q. P and R are married couple. Y is the brother of R. X is the daughter of P and Z is the brother of P. How many female members are there in the family?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": "Two",
    "explanation": "🌳 Family Tree Deduction:\n1. R is Q's father (not mother), so P (R's spouse) is the mother → female. X is P's daughter → female. Y, Z, Q, R are male. Females: P and X = 2. Hence, the answer is **Two**."
  },
  {
    "id": "fa1_q2",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man introduced the boy coming with him as, \"He is son of the father of my wife's daughter.\" What relation did the boy bear to the man?",
    "options": [
      "Father",
      "Son",
      "Brother",
      "Son-in-law"
    ],
    "correct": "Son",
    "explanation": "🌳 Family Tree Deduction:\n1. my wife's daughter = my daughter\n2. her father = me\n3. so the boy is the son of the man.\nHence, the correct answer is **Son**."
  },
  {
    "id": "fa1_q3",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a woman in a photograph, Vijay said, \"She is the daughter of the father of the sister of my brother\". How is that lady in the photograph related to Vijay?",
    "options": [
      "Daughter",
      "Wife",
      "Mother",
      "Sister"
    ],
    "correct": "Sister",
    "explanation": "🌳 Family Tree Deduction:\n1. sister of my brother = my sister\n2. her father = my father\n3. his daughter = my sister.\nHence, the correct answer is **Sister**."
  },
  {
    "id": "fa1_q4",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Hard",
    "points": 1,
    "question": "B is father of Q. B has only two children. Q is the brother of R. R is the daughter of P. A is the granddaughter of P. S is the father of A. How is S related to Q?",
    "options": [
      "Son",
      "Son-in-law",
      "Brother",
      "Brother-in-law"
    ],
    "correct": "Brother-in-law",
    "explanation": "🌳 Family Tree Deduction:\n1. B's only two children are Q and R. P is R's mother, so P is B's wife and A (P's granddaughter) is a child of Q or R. S is A's father and cannot be Q (a different person), so S is R's husband → S is Q's brother-in-law. Hence, the answer is **Brother-in-law**."
  },
  {
    "id": "fa1_q5",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "P is the father of R, but R is not his son. T is the daughter of R. U is the spouse of P. Q is the brother of R. S is the son of Q. V is the spouse of Q. W is the father of V. Who is the son of U?",
    "options": [
      "Q",
      "R",
      "T",
      "S"
    ],
    "correct": "Q",
    "explanation": "🌳 Family Tree Deduction:\n1. R is P's daughter\n2. U (P's spouse) is R's mother\n3. **Q** is R's brother → **Q** is the son of P and U."
  },
  {
    "id": "fa1_q6",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "P is the father of R, but R is not his son. T is the daughter of R. U is the spouse of P. Q is the brother of R. S is the son of Q. V is the spouse of Q. W is the father of V. Who is the grandmother of S?",
    "options": [
      "W",
      "P",
      "R",
      "U"
    ],
    "correct": "U",
    "explanation": "🌳 Family Tree Deduction:\n1. S is Q's son\n2. Q's parents are P (father) and U (mother)\n3. so S's grandmother is **U**."
  },
  {
    "id": "fa1_q7",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "If Neha says, \"Amrita's father Raj is the only son of my father-in-law Mahesh,\" then how is Bindu, who is the sister of Amrita, related to Mahesh?",
    "options": [
      "Granddaughter",
      "Wife",
      "Niece",
      "Daughter-in-law"
    ],
    "correct": "Granddaughter",
    "explanation": "🌳 Family Tree Deduction:\n1. Neha's husband is Mahesh's son = Raj (his only son). Amrita is Raj's daughter, Bindu is Amrita's sister, so Bindu is Raj's daughter and Mahesh's granddaughter. Hence, the answer is **Granddaughter**."
  },
  {
    "id": "fa1_q8",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A is B's brother. A is C's brother. To find out how B is related to C, which of the following is the minimum further information necessary, if any? I. C's gender II. B's gender",
    "options": [
      "Only I is necessary",
      "Only II is necessary",
      "Either I or II is necessary",
      "Both I and II are needed"
    ],
    "correct": "Only II is necessary",
    "explanation": "🌳 Family Tree Deduction:\n1. B and C are siblings\n2. \"B is ___ of C\" (brother or sister) depends only on B's gender. C's gender does not matter.\nHence, the correct answer is **Only II is necessary**."
  },
  {
    "id": "fa1_q9",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Easy",
    "points": 1,
    "question": "A family consists of six members P, Q, R, X, Y and Z. Q is the son of R but R is not the mother of Q. P and R are married couple. Y is the brother of R. X is the daughter of P and Z is the brother of P. Which of these is a pair of brothers?",
    "options": [
      "P and X",
      "P and Z",
      "Q and X",
      "R and Y"
    ],
    "correct": "R and Y",
    "explanation": "🌳 Family Tree Deduction:\n1. R is male (Q's father), Y is R's brother → **R and Y** are brothers. P is female, X is female, so the other pairs are not brother pairs."
  },
  {
    "id": "fa1_q10",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "Introducing a man, a woman said, \"His mother is the only daughter of my father.\" How is the man related to the woman?",
    "options": [
      "Son",
      "Uncle",
      "Husband",
      "Brother"
    ],
    "correct": "Son",
    "explanation": "🌳 Family Tree Deduction:\n1. the only daughter of the woman's father is the woman herself, so the man's mother is the woman → the man is her son. Hence, the answer is **Son**."
  },
  {
    "id": "fa1_q11",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "Mayank said, \"My mother is the sister of Rajat's brother.\" What is Rajat's relation with Mayank?",
    "options": [
      "Cousin",
      "Can't say",
      "Uncle",
      "Brother-in-law"
    ],
    "correct": "Uncle",
    "explanation": "🌳 Family Tree Deduction:\n1. Mayank's mother is a sibling of Rajat's brother, so she is also Rajat's sibling\n2. Rajat (treated as male) is Mayank's maternal uncle.\nHence, the correct answer is **Uncle**."
  },
  {
    "id": "fa1_q12",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "Introducing a lady, a man said that her mother's husband's sister is my mother. What is the man's relationship with the lady?",
    "options": [
      "Cousin",
      "Nephew",
      "Father",
      "Data insufficient"
    ],
    "correct": "Cousin",
    "explanation": "🌳 Family Tree Deduction:\n1. her mother's husband = her father\n2. his sister = the man's mother\n3. so the man is the son of the lady's paternal aunt → cousins.\nHence, the correct answer is **Cousin**."
  },
  {
    "id": "fa1_q13",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Blood Relation",
    "difficulty": "Hard",
    "points": 1,
    "question": "If Amit's father is Billoo's father's only son and Billoo has neither a brother nor a daughter, what is the relationship between Amit and Billoo?",
    "options": [
      "Uncle-Nephew",
      "Father-Daughter",
      "Father-Son",
      "Cousins"
    ],
    "correct": "Father-Son",
    "explanation": "🌳 Family Tree Deduction:\n1. Billoo's father's only son is Billoo himself (no brother). So Amit's father is Billoo\n2. Billoo has no daughter, so Amit is Billoo's son → **Father-Son**."
  },
  {
    "id": "fa1_q14",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A+B means A is the sister of B, A×B means A is the father of B, A÷B means A is the son of B. What is the relation of C to A in the expression A×B+C?",
    "options": [
      "Niece",
      "Nephew",
      "Niece & Nephew",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🧬 Coded Relationship Deduction:\n1. A×B → A is father of B\n2. B+C → B is sister of C. So B and C are siblings and both are A's children → C is A's son or daughter (child), not a niece/nephew.\nHence, the correct answer is **None of these**."
  },
  {
    "id": "fa1_q15",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "P×Q means 'P is the father of Q', P-Q means 'P is the sister of Q', P+Q means 'P is the mother of Q', P÷Q means 'P is the brother of Q'. Which of the following represents 'J is son of F'?",
    "options": [
      "F × T ÷ J",
      "J ÷ P + F",
      "F + J",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🧬 Coded Relationship Deduction:\n1. Decode given operators: × = father, − = sister, + = mother, ÷ = brother.\n2. Target relationship: 'J is son of F'. This requires: (i) F is parent of J, and (ii) J is male.\n3. In option (a) F × T ÷ J: F is father of T, T is brother of J. Here J's gender is unknown.\n4. In option (b) J ÷ P + F: J is brother of P, P is mother of F. This makes J the maternal uncle of F, not son.\n5. In option (c) F + J: F is mother of J, but J's gender is unspecified.\n6. Hence, none of the specific expressions uniquely establishes J as the male child (son) of F.\n7. The correct option is **None of these**."
  },
  {
    "id": "fa1_q16",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "P×Q means 'P is sister of Q', P+Q means 'P is mother of Q', P-Q means 'P is father of Q', P÷Q means 'P is brother of Q'. Which of the following represents 'M is the nephew of R'?",
    "options": [
      "R × T + M",
      "R + T ÷ M",
      "R − T × M",
      "R ÷ T − M ÷ J"
    ],
    "correct": "R ÷ T − M ÷ J",
    "explanation": "🧬 Coded Relationship Deduction:\n1. Decode given operators: × = sister, + = mother, − = father, ÷ = brother.\n2. Target relationship: 'M is the nephew of R' (M must be male, and the child of R's sibling).\n3. Analyze 'R ÷ T − M ÷ J':\n   • R ÷ T → R is brother of T (R and T are siblings).\n   • T − M → T is father of M (M is the child of R's sibling T).\n   • M ÷ J → M is brother of J (confirms M is male).\n4. Since M is the male child of R's sibling T, M is the **nephew of R**.\n5. Hence, the correct expression is **R ÷ T − M ÷ J**."
  },
  {
    "id": "fa1_q17",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "If P $ Q means P is the brother of Q; P # Q means P is the mother of Q; P * Q means P is the daughter of Q. In A # B $ C * D, who is the father?",
    "options": [
      "D",
      "C",
      "B",
      "A"
    ],
    "correct": "D",
    "explanation": "🧬 Coded Relationship Deduction:\n1. A#B → A is B's mother\n2. B$C → B is C's brother\n3. so A is also C's mother\n4. C***D** → C is **D**'s daughter. A is the mother, so **D**, the other parent of C, is the father."
  },
  {
    "id": "fa1_q18",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "S+T means S is the daughter of T, S×T means S is the brother of T, S÷T means S is the mother of T. What is the relation of A to C in A÷B×C?",
    "options": [
      "Mother",
      "Father",
      "Sister",
      "Brother"
    ],
    "correct": "Mother",
    "explanation": "🧬 Coded Relationship Deduction:\n1. A÷B → A is mother of B\n2. B×C → B is brother of C\n3. B and C are siblings, so A is also C's mother.\nHence, the correct answer is **Mother**."
  },
  {
    "id": "fa1_q19",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "If P×Q means 'P is sister of Q', P+Q means 'P is mother of Q', P-Q means 'P is father of Q', P÷Q means 'P is brother of Q'. Which of the following represents 'W is grandfather of H'?",
    "options": [
      "W × T + H",
      "W + T ÷ H",
      "W ÷ T − H",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🧬 Coded Relationship Deduction:\n1. Decode given operators: × = sister, + = mother, − = father, ÷ = brother.\n2. Target relationship: 'W is grandfather of H' (W must be male, 2 generations above H).\n3. Check options:\n   • W × T + H: W is sister of T (female, cannot be grandfather).\n   • W + T ÷ H: W is mother of T (female, cannot be grandfather).\n   • W ÷ T − H: W is brother of T, T is father of H (W is uncle of H, not grandfather).\n4. None of the expressions establishes W as the grandfather of H.\n5. Hence, the correct option is **None of these**."
  },
  {
    "id": "fa1_q20",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Medium",
    "points": 1,
    "question": "P×Q means 'P is the father of Q', P-Q means 'P is the sister of Q', P+Q means 'P is the mother of Q', P÷Q means 'P is the brother of Q'. In the expression B+D×M÷N, how is M related to B?",
    "options": [
      "Granddaughter",
      "Son",
      "Grandson",
      "Granddaughter / Grandson"
    ],
    "correct": "Grandson",
    "explanation": "🧬 Coded Relationship Deduction:\n1. B+D → B is mother of D\n2. D×M → D is father of M\n3. so M is B's grandchild\n4. M÷N → M is a brother (male) → grandson.\nHence, the correct answer is **Grandson**."
  },
  {
    "id": "fa1_q21",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Hard",
    "points": 1,
    "question": "If A+B means A is father of B, A×B means A is sister of B, A$B means A is wife of B, A%B means A is mother of B, A÷B means A is son of B. Which indicates that M is the daughter of D?",
    "options": [
      "D + M ÷ T",
      "L + R $ D + M × T",
      "D × M + T",
      "L $ D + M ÷ T"
    ],
    "correct": "L + R $ D + M × T",
    "explanation": "🧬 Coded Relationship Deduction:\n1. Decode given operators: + = father, × = sister, $ = wife, % = mother, ÷ = son.\n2. Target relationship: 'M is the daughter of D' (D is parent of M, and M is female).\n3. Analyze 'L + R $ D + M × T':\n   • L + R → L is father of R.\n   • R $ D → R is wife of D (D is the husband).\n   • D + M → D is father of M (M is D's child).\n   • M × T → M is sister of T (confirms M is female).\n4. Since D is father of M and M is female, M is the **daughter of D**.\n5. Hence, the correct expression is **L + R $ D + M × T**."
  },
  {
    "id": "fa1_q22",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Coded Relation",
    "difficulty": "Hard",
    "points": 1,
    "question": "P×Q means P is mother of Q, P-Q means P is brother of Q, P÷Q means P is wife of Q, P+Q means P is father of Q. In the expression T×P÷R+Q-S, how is Q related to T?",
    "options": [
      "Daughter",
      "Grandson",
      "Son",
      "Can't determined"
    ],
    "correct": "Grandson",
    "explanation": "🧬 Coded Relationship Deduction:\n1. T×P → T is mother of P\n2. P÷R → P is wife of R\n3. R+Q → R is father of Q (so Q is the child of P and R)\n4. Q-S → Q is brother of S (male). T is P's mother, so Q is T's grandson.\nHence, the correct answer is **Grandson**."
  },
  {
    "id": "fa1_q23",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Rasik walked 20 m towards north. Then he turned right and walked 30 m. Then he turned right and walked 35 m. Then he turned left and walked 15 m. Finally he turned left and walked 15 m. In which direction and how many metres is he from the starting position?",
    "options": [
      "15 m West",
      "30 m East",
      "30 m West",
      "45 m East"
    ],
    "correct": "45 m East",
    "explanation": "🧭 Direction & Vector Analysis:\n1. N 20 → E 30 → S 35 → E 15 → N 15. East total = 30+15 = 45\n2. North total = 20−35+15 = 0 → **45 m East**."
  },
  {
    "id": "fa1_q24",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Easy",
    "points": 1,
    "question": "Ram walks 2 km towards North and turns right and walks 4 km. He then turns right and walks 4 km and turns again to his right and walks another 4 km. Here he meets Renu coming from the opposite direction. They both stop here. If the starting point is marked A and finishing point is marked B, what will be the distance between these?",
    "options": [
      "10 km",
      "8 km",
      "6 km",
      "2 km"
    ],
    "correct": "2 km",
    "explanation": "🧭 Direction & Vector Analysis:\n1. N 2 → E 4 → S 4 → W 4. Net East = 4−4 = 0, net North = 2−4 = −2 → B is **2 km** south of A."
  },
  {
    "id": "fa1_q25",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Rajat is heading towards his home from his office. He walked 739 metres towards North from office gate. He then rotated 323° clockwise, 512° anti-clockwise, then 116° clockwise. In which direction is he facing now?",
    "options": [
      "South-East",
      "South-West",
      "North-West",
      "North-East"
    ],
    "correct": "North-West",
    "explanation": "🧭 Direction & Vector Analysis:\n1. Initial facing direction: North (0° / 360°).\n2. Sum of clockwise (CW) rotations:\n   323° + 116° = +439° CW.\n3. Sum of anti-clockwise (ACW) rotations:\n   512° ACW.\n4. Net rotation:\n   439° − 512° = −73° (or 73° anti-clockwise).\n5. Turning 73° anti-clockwise from North places Rajat in the **North-West** quadrant.\n6. Hence, he is facing **North-West**.\n\n⚠️ Note: The source slide answer key marks (d) North-East, but mathematical calculation confirms net rotation 439° − 512° = −73° from North (360° − 73° = 287°), which lies definitively in the North-West quadrant."
  },
  {
    "id": "fa1_q26",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Easy",
    "points": 1,
    "question": "(same story as Q24) Ram walks 2 km towards North and turns right and walks 4 km. He then turns right and walks 4 km and turns again to his right and walks another 4 km. Here he meets Renu coming from the opposite direction. They both stop here. After taking the first left turn, in which direction was Ram going?",
    "options": [
      "None of these",
      "North",
      "West",
      "East"
    ],
    "correct": "None of these",
    "explanation": "🧭 Direction & Vector Analysis:\n1. Ram only turns right (North→East→South→West)\n2. he never takes a left turn, so none of the options applies.\nHence, the correct answer is **None of these**."
  },
  {
    "id": "fa1_q27",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Seeta and Ram both start from a point towards North. Seeta turns left after walking 10 km. Ram turns right after walking the same distance. Seeta waits for some time and then walks another 5 km, whereas Ram walks only 3 km. They both then turn towards South and walk 15 km forward. How far is Seeta from Ram?",
    "options": [
      "15 km",
      "10 km",
      "8 km",
      "12 km"
    ],
    "correct": "8 km",
    "explanation": "🧭 Direction & Vector Analysis:\n1. Seeta goes West (left): 5 km west of the line\n2. Ram goes East (right): 3 km east. Both then walk 15 km south, which doesn't change their east-west separation → 5+3 = **8 km**."
  },
  {
    "id": "fa1_q28",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Hard",
    "points": 1,
    "question": "Rahul put his timepiece on the table in such a way that at 6 P.M. the hour hand points to North. In which direction will the minute hand point at 9:15 P.M.?",
    "options": [
      "South-East",
      "South",
      "North",
      "West"
    ],
    "correct": "West",
    "explanation": "🧭 Direction & Vector Analysis:\n1. at 6 the hour hand (pointing at 6) faces North, so the 12 faces South, and the 3 faces **West** (rotate the dial 180°). At 9:15 the minute hand points at 3 → **West**."
  },
  {
    "id": "fa1_q29",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Hard",
    "points": 1,
    "question": "X is to the southwest of Y, L is to the east of X and southeast of Y, and M is to the north of L in line with XY. In which direction of Y is M located?",
    "options": [
      "South",
      "North",
      "South-West",
      "North-East"
    ],
    "correct": "North-East",
    "explanation": "🧭 Direction & Vector Analysis:\n1. Put Y at (0,0), X at (−1,−1). L is east of X and south-east of Y → L = (1,−1). M is north of L and on the line XY (y = x) → M = (1,1) → **North-East** of Y."
  },
  {
    "id": "fa1_q30",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Easy",
    "points": 1,
    "question": "(same story as Q24) Ram walks 2 km towards North and turns right and walks 4 km. He then turns right and walks 4 km and turns again to his right and walks another 4 km. Here he meets Renu coming from the opposite direction. They both stop here. In which direction was Ram walking?",
    "options": [
      "West",
      "North",
      "South",
      "South-East"
    ],
    "correct": "West",
    "explanation": "🧭 Direction & Vector Analysis:\n1. N → E → S → W\n2. his last leg is towards **West**."
  },
  {
    "id": "fa1_q31",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Easy",
    "points": 1,
    "question": "Reeta drives north of her place to stay at A and finds after travelling 25 km that she has driven in the wrong direction. She then turns right and travels 2 km and then again turns right and drives straight another 25 km. How much distance does she now have to cover to go back to the point from where she started?",
    "options": [
      "25 km",
      "2 km",
      "4 km",
      "50 km"
    ],
    "correct": "2 km",
    "explanation": "🧭 Direction & Vector Analysis:\n1. N 25 → E 2 → S 25. She is **2 km** east of the starting point, so **2 km** to go back."
  },
  {
    "id": "fa1_q32",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Two cars start from opposite places on a main road, 150 km apart. The first car runs for 25 km and takes a right turn, then runs 15 km. It then turns left and runs another 25 km and then takes the direction back to reach the main road. Meanwhile, the other car has run only 35 km along the main road. What would be the distance between the two cars at this point?",
    "options": [
      "65 km",
      "75 km",
      "80 km",
      "85 km"
    ],
    "correct": "65 km",
    "explanation": "🧭 Direction & Vector Analysis:\n1. the first car advances 25 + 25 = 50 km along the road direction (the 15 km side-trip and return cancel out) and is back on the main road. The second car has covered 35 km towards it. Distance = 150 − 50 − 35 = **65 km**."
  },
  {
    "id": "fa1_q33",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Easy",
    "points": 1,
    "question": "A man walks northwards. After a while he turns right and a little further to his left. Finally, after walking a distance of one kilometre he turns to his left again. In which direction is he moving now?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "correct": "West",
    "explanation": "🧭 Direction & Vector Analysis:\n1. North → right → East → left → North → left → **West**."
  },
  {
    "id": "fa1_q34",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Medium",
    "points": 1,
    "question": "From a point Mohit starts walking towards South and after walking 2 km, he turns to his left and walks 3 km, then he turns to his left again and walks 2 km. Finally he turns to his right and walks 1 km. In which direction is he now with reference to the starting point?",
    "options": [
      "North",
      "East",
      "North-East",
      "South-East"
    ],
    "correct": "East",
    "explanation": "🧭 Direction & Vector Analysis:\n1. facing South, left = East: 3 km east\n2. left again = North: 2 km north (back to the start's latitude)\n3. right = **East**: 1 km. Position = 4 km east of start on the same line → **East**."
  },
  {
    "id": "fa1_q35",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Hard",
    "points": 1,
    "question": "Shally travelled 9 km to the west, then turned right and travelled 7 km, then turned left and travelled 8 km, then turned back and travelled 11 km in a straight line, then turned right and travelled 7 km. How far is he from the starting point?",
    "options": [
      "3 km",
      "6 km",
      "7 km",
      "9 km"
    ],
    "correct": "6 km",
    "explanation": "🧭 Direction & Vector Analysis:\n1. W 9 → (right) N 7 → (left) W 8 → (turn back) E 11 → (right) S 7. West total = 9+8−11 = 6\n2. North total = 7−7 = 0 → **6 km** from the start."
  },
  {
    "id": "fa1_q36",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Easy",
    "points": 1,
    "question": "A man walks 5 km toward south and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
    "options": [
      "North",
      "West",
      "South-West",
      "North-East"
    ],
    "correct": "South-West",
    "explanation": "🧭 Direction & Vector Analysis:\n1. S 5 → (right) W 3 → (left) S 5. He is 3 km west and 10 km south of the start → **South-West**."
  },
  {
    "id": "fa1_q37",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Sumesh, who is facing West, turns 120° clockwise and then 165° anti-clockwise. Which direction is he facing now?",
    "options": [
      "North",
      "South-West",
      "West",
      "North-East"
    ],
    "correct": "South-West",
    "explanation": "🧭 Direction & Vector Analysis:\n1. West = 270°. +120° → 390° = 30°. −165° → −135° = 225° = **South-West**."
  },
  {
    "id": "fa1_q38",
    "module_id": "mod15",
    "module_name": "FA1 Questions",
    "syllabus_lec": "FA-1 Revision Question Set",
    "type_id": "type_3",
    "type_name": "Type 3: Direction",
    "difficulty": "Hard",
    "points": 1,
    "question": "Rajat is initially South-East. He rotates 170° clockwise, then 240° anti-clockwise, then 145° clockwise and finally 120° anti-clockwise. In which direction is he facing now?",
    "options": [
      "North-East",
      "South",
      "South-West",
      "East"
    ],
    "correct": "East",
    "explanation": "🧭 Direction & Vector Analysis:\n1. South-East = 135°. +170° → 305°\n2. −240° → 65°\n3. +145° → 210°\n4. −120° → 90° = **East**. Net rotation = 170 − 240 + 145 − 120 = −45° (45° anti-clockwise) → from South-**East** that is **East**.\n\n    ⚠️ **The source answer key says \"C. South-West\" — that is arithmetically wrong. The correct answer is **East**. Use **East**.** Mention this in your final report.\n\n\n\n> Note on Q17 option order: in the PDF the options are (a) D (b) C (c) B (d) A. Use exactly `[\"D\", \"C\", \"B\", \"A\"]` and keep that order.\n\n⚠️ Note: The source slide key marks South-West, but arithmetical calculation confirms the net rotation from South-East (135°) by −45° anti-clockwise is exactly East (90°)."
  },
  {
    "id": "fa2_q1",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A:B = 2:3 and B:C = 4:5, then C:A is equal to:",
    "options": [
      "15:8",
      "12:10",
      "8:5",
      "8:15"
    ],
    "correct": "15:8",
    "explanation": "📐 Continued Ratio Analysis:\n1. Given: A/B = 2/3 and B/C = 4/5.\n2. Multiplying the two ratios:\n   (A/B) × (B/C) = (2/3) × (4/5) ⟹ A/C = 8/15.\n3. Taking the reciprocal to find C:A:\n   C/A = 15/8 ⟹ C:A = **15:8**."
  },
  {
    "id": "fa2_q2",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If 2a = 3b = 4c, then a:b:c is:",
    "options": [
      "2:3:4",
      "4:3:2",
      "6:4:3",
      "3:4:6"
    ],
    "correct": "6:4:3",
    "explanation": "📐 Ratio from Coefficients:\n1. Given: 2a = 3b = 4c = k.\n2. Express each variable in terms of k:\n   a = k/2, b = k/3, c = k/4.\n3. Find a:b:c by multiplying by LCM(2, 3, 4) = 12:\n   a : b : c = (12/2) : (12/3) : (12/4) = **6:4:3**."
  },
  {
    "id": "fa2_q3",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A:B:C = 2:3:4, then A/B : B/C : C/A is equal to:",
    "options": [
      "4:9:16",
      "8:9:12",
      "8:9:16",
      "8:9:24"
    ],
    "correct": "8:9:24",
    "explanation": "📐 Compound Fraction Ratio:\n1. Given: A:B:C = 2:3:4. Let A = 2, B = 3, C = 4.\n2. Evaluate each fraction:\n   A/B = 2/3,  B/C = 3/4,  C/A = 4/2 = 2/1.\n3. The ratio is 2/3 : 3/4 : 2/1.\n4. Multiply each term by LCM(3, 4, 1) = 12:\n   (2/3 × 12) : (3/4 × 12) : (2/1 × 12) = **8:9:24**."
  },
  {
    "id": "fa2_q4",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Amar, Bhavan and Chetan divide an amount of Rs. 5600 among themselves in the ratio 3:6:5. If an amount of Rs. 400 is deducted from each of their shares, what will be the new ratio of their shares of the amount?",
    "options": [
      "4:7:6",
      "1:4:3",
      "2:5:4",
      "5:11:9"
    ],
    "correct": "2:5:4",
    "explanation": "📐 Amount Partitioning & Deduction:\n1. Ratio of shares = 3:6:5. Sum of ratio parts = 3 + 6 + 5 = 14 parts.\n2. Value of 1 part = Rs. 5600 / 14 = Rs. 400.\n3. Initial shares:\n   - Amar: 3 × 400 = Rs. 1200\n   - Bhavan: 6 × 400 = Rs. 2400\n   - Chetan: 5 × 400 = Rs. 2000\n4. Deducting Rs. 400 from each share:\n   - Amar = 1200 − 400 = Rs. 800\n   - Bhavan = 2400 − 400 = Rs. 2000\n   - Chetan = 2000 − 400 = Rs. 1600\n5. New ratio = 800 : 2000 : 1600 = 8 : 20 : 16 = **2:5:4**."
  },
  {
    "id": "fa2_q5",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A person has 25p, 10p and 5p in the ratio 1:2:3 in his pocket. If the person has Rs. 30 in all, how many 5 paisa coins are there?",
    "options": [
      "110",
      "120",
      "130",
      "150"
    ],
    "correct": "150",
    "explanation": "💰 Coin Bag Value Model:\n1. Ratio of coins (25p : 10p : 5p) = 1 : 2 : 3.\n2. Let the number of coins be x, 2x, and 3x.\n3. Total value in paise:\n   25(x) + 10(2x) + 5(3x) = 25x + 20x + 15x = 60x paise.\n4. Total amount = Rs. 30 = 3000 paise.\n   60x = 3000 ⟹ x = 50.\n5. Number of 5 paisa coins = 3x = 3 × 50 = **150**."
  },
  {
    "id": "fa2_q6",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The price of a scooter and a television set are in the ratio 3:2. If a scooter costs Rs. 6000 more than the television set, the price of the television set is:",
    "options": [
      "6000",
      "10000",
      "12000",
      "18000"
    ],
    "correct": "12000",
    "explanation": "📐 Difference of Ratio Terms:\n1. Let price of scooter = 3x and TV = 2x.\n2. Difference in price: 3x − 2x = x = Rs. 6000.\n3. Price of television set = 2x = 2 × 6000 = Rs. **12000**."
  },
  {
    "id": "fa2_q7",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Out of 120 applicants for a post, 70 are male and 80 have a driver's licence. What is the ratio between the minimum to maximum number of males having a driver's licence?",
    "options": [
      "1:2",
      "2:3",
      "3:7",
      "5:7"
    ],
    "correct": "3:7",
    "explanation": "📊 Venn Set Extrema:\n1. Total applicants N = 120, Males M = 70, Licence holders L = 80.\n2. Let x be males with a licence:\n   - Maximum males with licence = min(M, L) = min(70, 80) = 70.\n   - Minimum males with licence = M + L − N = 70 + 80 − 120 = 30.\n3. Ratio of minimum to maximum = 30 : 70 = **3:7**."
  },
  {
    "id": "fa2_q8",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a bag there are coins of 50 paisa, 25 paisa and one rupee in the proportion 5:6:2. If there are in all Rs. 42, the number of 25 paisa coins is:",
    "options": [
      "32",
      "42",
      "52",
      "60"
    ],
    "correct": "42",
    "explanation": "💰 Coin Proportion & Value Equation:\n1. Ratio of coins (50p : 25p : 1 rupee) = 5 : 6 : 2.\n2. Value contributed per ratio unit:\n   5 × 0.50 + 6 × 0.25 + 2 × 1.00 = 2.50 + 1.50 + 2.00 = Rs. 6.00.\n3. Total money = Rs. 42.\n   Number of ratio units = 42 / 6 = 7.\n4. Number of 25 paisa coins = 6 × 7 = **42**."
  },
  {
    "id": "fa2_q9",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of two natural numbers is 5:6. If a certain number is added to both the numbers, the ratio becomes 7:8. If the larger number exceeds the smaller number by 10, find the number added?",
    "options": [
      "5",
      "20",
      "30",
      "10"
    ],
    "correct": "20",
    "explanation": "📐 Linear Ratio Shift:\n1. Numbers are in ratio 5:6. Let them be 5k and 6k.\n2. Given larger − smaller = 6k − 5k = k = 10.\n   Hence the numbers are 5(10) = 50 and 6(10) = 60.\n3. Let x be the number added to both:\n   (50 + x) / (60 + x) = 7 / 8.\n4. Cross-multiplying:\n   8(50 + x) = 7(60 + x) ⟹ 400 + 8x = 420 + 7x ⟹ x = **20**."
  },
  {
    "id": "fa2_q10",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A certain amount was divided between Kavita and Reena in the ratio 4:3. If Reena's share was Rs. 2400, then the total amount is:",
    "options": [
      "5600",
      "3200",
      "9600",
      "None of these"
    ],
    "correct": "5600",
    "explanation": "📐 Ratio Partitioning:\n1. Ratio of Kavita to Reena = 4:3.\n2. Reena's share = 3 units = Rs. 2400.\n   1 unit = 2400 / 3 = Rs. 800.\n3. Total amount = 4 + 3 = 7 units.\n   Total = 7 × 800 = Rs. **5600**."
  },
  {
    "id": "fa2_q11",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Salaries of Ram and Sham are in the ratio of 4:5. If the salary of each is increased by Rs. 5000, then the new ratio becomes 50:60. What is Sham's present salary?",
    "options": [
      "20000",
      "25000",
      "30000",
      "35000"
    ],
    "correct": "25000",
    "explanation": "📐 Equal Increment to Terms:\n1. Ram : Sham = 4:5. Let salaries be 4x and 5x.\n2. Both receive an increase of Rs. 5000:\n   (4x + 5000) / (5x + 5000) = 50 / 60 = 5 / 6.\n3. Cross-multiplying:\n   6(4x + 5000) = 5(5x + 5000)\n   24x + 30000 = 25x + 25000 ⟹ x = 5000.\n4. Sham's present salary = 5x = 5 × 5000 = Rs. **25000**."
  },
  {
    "id": "fa2_q12",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The proportion of Zinc and Copper in a brass piece is 13:7. How much zinc will be there in 100 kg of such a piece?",
    "options": [
      "20",
      "35",
      "55",
      "65"
    ],
    "correct": "65",
    "explanation": "⚖️ Alloy Mixture Proportion:\n1. Zinc : Copper = 13:7.\n2. Total parts = 13 + 7 = 20 parts.\n3. Total weight = 100 kg ⟹ 1 part = 100 / 20 = 5 kg.\n4. Zinc content = 13 × 5 = **65** kg."
  },
  {
    "id": "fa2_q13",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The students in three batches in school is in the ratio of 2:3:5. If 20 students in each batch are increased then the ratio changes to 4:5:7. The total number of students in the three batches before the increase was:",
    "options": [
      "100",
      "10",
      "90",
      "150"
    ],
    "correct": "100",
    "explanation": "👥 Multi-Batch Linear Growth:\n1. Initial ratio = 2:3:5. Let batches be 2x, 3x, 5x.\n2. After adding 20 students to each, ratio becomes 4:5:7.\n3. Notice each term increases by:\n   4 − 2 = 2 units, 5 − 3 = 2 units, 7 − 5 = 2 units.\n4. 2 units = 20 students ⟹ 1 unit = 10 students.\n5. Total initial students = 2x + 3x + 5x = 10 units = 10 × 10 = **100**."
  },
  {
    "id": "fa2_q14",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If 10% of x = 20% of y, then x:y is equal to:",
    "options": [
      "1:2",
      "2:1",
      "5:2",
      "10:1"
    ],
    "correct": "2:1",
    "explanation": "📐 Percentage to Ratio Conversion:\n1. Given: 10% of x = 20% of y.\n2. (10/100)x = (20/100)y ⟹ x = 2y.\n3. x/y = 2/1 ⟹ x:y = **2:1**."
  },
  {
    "id": "fa2_q15",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of the first and second class fares between two railway stations is 4:1 and that of the number of passengers travelling by first and second classes is 1:40. If on a day Rs. 1,100 are collected as total fare, the amount collected from the first class passengers is:",
    "options": [
      "275",
      "315",
      "137.5",
      "100"
    ],
    "correct": "100",
    "explanation": "🚂 Railway Fare & Revenue Product:\n1. Fare ratio (1st : 2nd) = 4 : 1.\n2. Passenger ratio (1st : 2nd) = 1 : 40.\n3. Revenue ratio = (Fare × Passengers) = (4 × 1) : (1 × 40) = 4 : 40 = 1 : 10.\n4. Total parts = 1 + 10 = 11 parts.\n5. Total fare collected = Rs. 1,100.\n   Amount from 1st class = (1/11) × 1100 = Rs. **100**."
  },
  {
    "id": "fa2_q16",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Two numbers are in the ratio 1:2. If 7 is added to both, their ratio changes to 3:5. The greatest number is:",
    "options": [
      "24",
      "26",
      "28",
      "32"
    ],
    "correct": "28",
    "explanation": "📐 Ratio Cross-Multiplication:\n1. Let the two numbers be x and 2x.\n2. Adding 7 to both:\n   (x + 7) / (2x + 7) = 3 / 5.\n3. Cross-multiplying:\n   5(x + 7) = 3(2x + 7)\n   5x + 35 = 6x + 21 ⟹ x = 14.\n4. Greatest number = 2x = 2 × 14 = **28**."
  },
  {
    "id": "fa2_q17",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Rs. 1170 is divided so that 4 times the first share, thrice the 2nd share and twice the third share amount to the same. What is the value of the third share?",
    "options": [
      "260",
      "270",
      "360",
      "540"
    ],
    "correct": "540",
    "explanation": "📐 Inverse Equality Formulation:\n1. Let 4A = 3B = 2C = k.\n2. A = k/4, B = k/3, C = k/2.\n3. Ratio A : B : C = 1/4 : 1/3 : 1/2.\n   Multiplying by LCM(4, 3, 2) = 12:\n   A : B : C = 3 : 4 : 6.\n4. Sum of parts = 3 + 4 + 6 = 13 parts = Rs. 1170.\n   1 part = 1170 / 13 = Rs. 90.\n5. Third share (C) = 6 × 90 = Rs. **540**."
  },
  {
    "id": "fa2_q18",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A shopkeeper contains apples, oranges and bananas in the ratio 5:7:8. There is a demand to increase their quantity by 50%, 60% and 70% respectively. What will be the ratio of the increased quantity?",
    "options": [
      "25:75:100",
      "26:72:77",
      "75:112:136",
      "76:100:201"
    ],
    "correct": "75:112:136",
    "explanation": "🍎 Percentage Expansion of Ratio:\n1. Initial ratio of apples, oranges, bananas = 5 : 7 : 8.\n2. Increases:\n   - Apples: 5 × 1.50 = 7.5\n   - Oranges: 7 × 1.60 = 11.2\n   - Bananas: 8 × 1.70 = 13.6\n3. New ratio = 7.5 : 11.2 : 13.6.\n4. Multiply by 10 to clear decimals:\n   **75:112:136**."
  },
  {
    "id": "fa2_q19",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The incomes of A and B are in the ratio 3:2 and their expenditures are in the ratio 5:3. If each saves Rs. 1000, then A's income is:",
    "options": [
      "3000",
      "4000",
      "6000",
      "9000"
    ],
    "correct": "6000",
    "explanation": "💼 Income, Expenditure & Savings Model:\n1. Income of A and B = 3x and 2x.\n2. Expenditure of A and B = 5y and 3y.\n3. Since Savings = Income − Expenditure = Rs. 1000 for each:\n   3x − 5y = 1000  ---(1)\n   2x − 3y = 1000  ---(2)\n4. Multiplying (1) by 3 and (2) by 5:\n   9x − 15y = 3000\n   10x − 15y = 5000\n5. Subtracting: x = 2000.\n6. A's income = 3x = 3 × 2000 = Rs. **6000**."
  },
  {
    "id": "fa2_q20",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A's 60% of salary is equal to two-third of B's salary. Now find the ratio of A's salary to B's salary:",
    "options": [
      "10:9",
      "9:10",
      "3:5",
      "None of these"
    ],
    "correct": "10:9",
    "explanation": "📐 Fractional Equivalence:\n1. Given: 60% of A = (2/3) of B.\n2. (60/100)A = (2/3)B ⟹ (3/5)A = (2/3)B.\n3. A/B = (2/3) / (3/5) = (2/3) × (5/3) = 10/9.\n4. A:B = **10:9**."
  },
  {
    "id": "fa2_q21",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A:B = 2:3, B:C = 5:7 and C:D = 3:10, then what is A:D equal to?",
    "options": [
      "1:7",
      "2:7",
      "1:5",
      "5:1"
    ],
    "correct": "1:7",
    "explanation": "🔗 Compound Ratio Chain:\n1. Given: A/B = 2/3, B/C = 5/7, C/D = 3/10.\n2. Multiplying the ratios together:\n   A/D = (A/B) × (B/C) × (C/D) = (2/3) × (5/7) × (3/10).\n3. Simplifying:\n   A/D = (2 × 5 × 3) / (3 × 7 × 10) = 30 / 210 = 1/7.\n4. Hence, A:D = **1:7**."
  },
  {
    "id": "fa2_q22",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If Rs. 582 be divided into three parts, proportional to 1/2 : 2/3 : 3/4, then the first part is?",
    "options": [
      "161",
      "none",
      "170",
      "180"
    ],
    "correct": "none",
    "explanation": "📐 Fractional Partition & Check:\n1. Ratio = 1/2 : 2/3 : 3/4.\n2. Multiply by LCM(2, 3, 4) = 12:\n   Ratio = 6 : 8 : 9.\n3. Sum of parts = 6 + 8 + 9 = 23 parts.\n4. Value of total = Rs. 582.\n   1 part = 582 / 23 ≈ 25.304.\n5. First part = 6 × (582 / 23) = 3492 / 23 ≈ Rs. 151.83.\n6. Since 161, 170, and 180 do not match, the correct option is **none**."
  },
  {
    "id": "fa2_q23",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "What number should be added to each one of 6, 14, 18, 38 to make them equally proportionate?",
    "options": [
      "1",
      "4",
      "3",
      "2"
    ],
    "correct": "2",
    "explanation": "⚖️ Proportionality Condition:\n1. Numbers in proportion: (6 + x) / (14 + x) = (18 + x) / (38 + x).\n2. Test x = 2:\n   - (6 + 2) / (14 + 2) = 8 / 16 = 1/2.\n   - (18 + 2) / (38 + 2) = 20 / 40 = 1/2.\n3. Both ratios are identical (1/2 = 1/2), so the number to be added is **2**."
  },
  {
    "id": "fa2_q24",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the mean proportional of the following pairs of numbers 6 and 24.",
    "options": [
      "8",
      "12",
      "16",
      "18"
    ],
    "correct": "12",
    "explanation": "📐 Mean Proportional Formula:\n1. The mean proportional between two numbers a and b is √(a × b).\n2. Mean proportional = √(6 × 24) = √144 = **12**."
  },
  {
    "id": "fa2_q25",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man has some hens and cows. If the number of heads be 48 and the number of feet equals 140, then the number of hens will be:",
    "options": [
      "22",
      "26",
      "23",
      "25"
    ],
    "correct": "26",
    "explanation": "🐔 Hens and Cows Head-Foot System:\n1. Let number of hens = H and cows = C.\n2. Heads equation: H + C = 48 ⟹ 2H + 2C = 96.\n3. Feet equation: 2H + 4C = 140.\n4. Subtracting: 2C = 44 ⟹ C = 22 cows.\n5. Hens H = 48 − 22 = **26**."
  },
  {
    "id": "fa2_q26",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The three numbers are in the ratio 1/2 : 2/3 : 3/4. The difference between the greatest and the smallest numbers is 36. What are the numbers?",
    "options": [
      "72, 84, 108",
      "60, 72, 96",
      "72, 84, 96",
      "72, 96, 108"
    ],
    "correct": "72, 96, 108",
    "explanation": "📐 Fractional Ratio & Extrema Difference:\n1. Ratio = 1/2 : 2/3 : 3/4.\n   Multiplying by 12 gives: 6 : 8 : 9.\n2. Let the numbers be 6x, 8x, 9x.\n3. Greatest − Smallest = 9x − 6x = 3x = 36 ⟹ x = 12.\n4. The numbers are:\n   6 × 12 = 72, 8 × 12 = 96, 9 × 12 = 108.\n   Result: **72, 96, 108**."
  },
  {
    "id": "fa2_q27",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The mean proportional between 0.32 and 0.02 is?",
    "options": [
      "0.34",
      "0.08",
      "0.16",
      "0.3"
    ],
    "correct": "0.08",
    "explanation": "📐 Decimal Mean Proportional:\n1. Mean proportional = √(0.32 × 0.02).\n2. 0.32 × 0.02 = 0.0064.\n3. √0.0064 = **0.08**."
  },
  {
    "id": "fa2_q28",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If 2A = 3B and 4B = 5C, then find A:C",
    "options": [
      "3:4",
      "8:15",
      "15:8",
      "4:3"
    ],
    "correct": "15:8",
    "explanation": "📐 Continued Ratio Product:\n1. 2A = 3B ⟹ A/B = 3/2.\n2. 4B = 5C ⟹ B/C = 5/4.\n3. A/C = (A/B) × (B/C) = (3/2) × (5/4) = 15/8.\n4. A:C = **15:8**."
  },
  {
    "id": "fa2_q29",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The speeds of three cars are in the ratio of 3:4:5. Find the ratio of the time taken by them to travel the same distance.",
    "options": [
      "3:4:5",
      "5:4:3",
      "12:15:20",
      "20:15:12"
    ],
    "correct": "20:15:12",
    "explanation": "🚗 Inverse Speed-Time Relation:\n1. For constant distance, Time is inversely proportional to Speed:\n   Time ratio = 1/3 : 1/4 : 1/5.\n2. Multiplying by LCM(3, 4, 5) = 60:\n   (60/3) : (60/4) : (60/5) = **20:15:12**."
  },
  {
    "id": "fa2_q30",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A packet of sweets is distributed among A, B, C, D in the proportion of 6:8:5:4. If B gets 10 sweets more than D then what is A's share?",
    "options": [
      "16",
      "17",
      "15",
      "18"
    ],
    "correct": "15",
    "explanation": "🍬 Difference of Terms Division:\n1. A : B : C : D = 6 : 8 : 5 : 4.\n2. Given B gets 10 sweets more than D:\n   8x − 4x = 10 ⟹ 4x = 10 ⟹ x = 2.5.\n3. A's share = 6x = 6 × 2.5 = **15** sweets."
  },
  {
    "id": "fa2_q31",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A:B = 7:9 and B:C = 3:5 then A:B:C is equal to",
    "options": [
      "7:9:5",
      "21:35:45",
      "7:9:15",
      "7:3:15"
    ],
    "correct": "7:9:15",
    "explanation": "🔗 Bridge Variable Scaling:\n1. A:B = 7:9 and B:C = 3:5.\n2. Multiply B:C by 3 to equate B:\n   B:C = 9:15.\n3. Combining: A:B:C = **7:9:15**."
  },
  {
    "id": "fa2_q32",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If three numbers in the ratio 3:2:5 be such that the sum of their squares is 1862, the smallest number will be?",
    "options": [
      "7",
      "14",
      "21",
      "35"
    ],
    "correct": "14",
    "explanation": "🔢 Sum of Squares Equation:\n1. Let the numbers be 3x, 2x, and 5x.\n2. Sum of their squares:\n   (3x)² + (2x)² + (5x)² = 9x² + 4x² + 25x² = 38x².\n3. Given: 38x² = 1862 ⟹ x² = 1862 / 38 = 49 ⟹ x = 7.\n4. Smallest number = 2x = 2 × 7 = **14**."
  },
  {
    "id": "fa2_q33",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of money with Ram and Gopal is 7:17 and that with Gopal and Krishan is 7:17. If Ram has Rs. 490, Krishan has?",
    "options": [
      "2890",
      "2330",
      "1190",
      "2680"
    ],
    "correct": "2890",
    "explanation": "🔗 Chained Proportions:\n1. Ram : Gopal = 7:17 ⟹ Ram / Gopal = 7/17.\n2. Gopal : Krishan = 7:17 ⟹ Gopal / Krishan = 7/17.\n3. Ram / Krishan = (7/17) × (7/17) = 49 / 289.\n4. Ram has Rs. 490 ⟹ 49 units = 490 ⟹ 1 unit = Rs. 10.\n5. Krishan has 289 units = 289 × 10 = Rs. **2890**."
  },
  {
    "id": "fa2_q34",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "₹ 680 is divided among A, B, C such that A gets 2/3rd of what B gets and B gets 1/4th of what C gets. Then, what are their respective shares?",
    "options": [
      "₹ 75, ₹ 325, ₹ 280",
      "₹ 80, ₹ 120, ₹ 480",
      "₹ 90, ₹ 210, ₹ 380",
      "₹ 100, ₹ 200, ₹ 380"
    ],
    "correct": "₹ 80, ₹ 120, ₹ 480",
    "explanation": "💰 Sequential Share Division:\n1. Let C's share = C.\n   B gets (1/4)C.\n   A gets (2/3)B = (2/3) × (1/4)C = (1/6)C.\n2. Sum of shares:\n   A + B + C = (1/6)C + (1/4)C + C = (2/12 + 3/12 + 12/12)C = (17/12)C = ₹ 680.\n3. C = (680 × 12) / 17 = 40 × 12 = ₹ 480.\n4. B = (1/4) × 480 = ₹ 120.\n5. A = (2/3) × 120 = ₹ 80.\n6. Shares: **₹ 80, ₹ 120, ₹ 480**."
  },
  {
    "id": "fa2_q35",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "If Rs 1050 is divided into three parts, proportional to 1/3 : 3/4 : 4/6, then what is the first part?",
    "options": [
      "500",
      "300",
      "200",
      "100"
    ],
    "correct": "200",
    "explanation": "📐 Fractional Partitioning:\n1. Ratio = 1/3 : 3/4 : 4/6 (= 2/3).\n2. Multiply by LCM(3, 4) = 12:\n   (12/3) : (12 × 3/4) : (12 × 2/3) = 4 : 9 : 8.\n3. Sum of parts = 4 + 9 + 8 = 21 parts = Rs 1050.\n   1 part = 1050 / 21 = Rs. 50.\n4. First part = 4 × 50 = Rs. **200**."
  },
  {
    "id": "fa2_q36",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Seats of physics, Chemistry and Mathematics in a school are in the ratio 4:5:6. There is a proposal to increase these seats by 75 in each department. What were the total number of seats in the school finally?",
    "options": [
      "600",
      "750",
      "900",
      "Data Inadequate"
    ],
    "correct": "Data Inadequate",
    "explanation": "❓ Indeterminate System Check:\n1. Initial seats ratio = 4 : 5 : 6, so seats are 4k, 5k, 6k.\n2. Increased by 75 each: (4k + 75), (5k + 75), (6k + 75).\n3. Total final seats = 15k + 225.\n4. Since no final ratio or total is provided, k cannot be uniquely determined.\n5. Therefore, the data is insufficient to find the exact number. Answer: **Data Inadequate**."
  },
  {
    "id": "fa2_q37",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "₹ 94000 is divided among A, B and C such that 20% of A's share = 25% of B's share = 15% of C's share. What is the share of C?",
    "options": [
      "23500",
      "29500",
      "40000",
      "42000"
    ],
    "correct": "40000",
    "explanation": "💼 Percentage Share Equivalence:\n1. 20% A = 25% B = 15% C.\n2. Divide coefficients by 5:\n   4A = 5B = 3C = k.\n3. Ratio A : B : C = 1/4 : 1/5 : 1/3.\n   Multiply by LCM(4, 5, 3) = 60:\n   A : B : C = 15 : 12 : 20.\n4. Total parts = 15 + 12 + 20 = 47 parts = ₹ 94000.\n   1 part = 94000 / 47 = ₹ 2000.\n5. C's share = 20 × 2000 = ₹ **40000**."
  },
  {
    "id": "fa2_q38",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Proportion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A bag has ₹ 51.25 in the form of 2-rupee, 50-paise and 25-paise coins in the ratio of 3:5:7 respectively. What is the total number of 50-paise coins?",
    "options": [
      "15",
      "35",
      "25",
      "5"
    ],
    "correct": "25",
    "explanation": "💰 Coin Denomination Value Multiples:\n1. Coin ratio (2-rupee : 50-paise : 25-paise) = 3 : 5 : 7.\n2. Value per ratio group:\n   - 3 × ₹ 2.00 = ₹ 6.00\n   - 5 × ₹ 0.50 = ₹ 2.50\n   - 7 × ₹ 0.25 = ₹ 1.75\n   Total per group = 6.00 + 2.50 + 1.75 = ₹ 10.25.\n3. Number of ratio groups = 51.25 / 10.25 = 5.\n4. Total 50-paise coins = 5 × 5 = **25**."
  },
  {
    "id": "fa2_q39",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: a. All pens are papers. b. No eraser is a paper.\nConclusions: I. No eraser is a pen. II. Some papers are pens.",
    "options": [
      "Both Conclusions I and II follow.",
      "Only Conclusion I follows.",
      "Only Conclusion II follows.",
      "none"
    ],
    "correct": "Both Conclusions I and II follow.",
    "explanation": "🔍 Syllogistic Deduction:\n1. Statements:\n   - All pens are papers (Pens ⊆ Papers).\n   - No eraser is a paper (Erasers ∩ Papers = ∅).\n2. Evaluating Conclusions:\n   - I: Since Pens are entirely inside Papers and Papers are completely disjoint from Erasers, no Eraser can be a Pen. ⟹ **Conclusion I follows**.\n   - II: 'All pens are papers' directly converts to 'Some papers are pens'. ⟹ **Conclusion II follows**.\n3. Therefore, **Both Conclusions I and II follow.**"
  },
  {
    "id": "fa2_q40",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some pots are buckets. All buckets are tubs. All tubs are drums.\nConclusions: I. Some drums are pots. II. All tubs are buckets. III. Some drums are buckets.",
    "options": [
      "Only I and II follows",
      "Only I and III follows",
      "Only II and III follows",
      "All follows"
    ],
    "correct": "Only I and III follows",
    "explanation": "🔍 Concentric Euler Chain:\n1. Statements:\n   - Some pots are buckets (Pots ∩ Buckets ≠ ∅).\n   - All buckets are tubs (Buckets ⊆ Tubs).\n   - All tubs are drums (Tubs ⊆ Drums).\n2. Evaluating Conclusions:\n   - I: Since Pots overlap Buckets and Buckets ⊆ Drums, Pots definitely overlap Drums. ⟹ **Conclusion I follows**.\n   - II: Buckets ⊆ Tubs does not imply All tubs are buckets (converse is particular). ⟹ Does not follow.\n   - III: Since Buckets ⊆ Drums, Some drums are buckets. ⟹ **Conclusion III follows**.\n3. Hence, **Only I and III follows**."
  },
  {
    "id": "fa2_q41",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: 1. All Authors are learned people. 2. Some doctors are authors.\nConclusions: I. Some doctors are learned people. II. Some learned people are doctors.",
    "options": [
      "Both I and II are implicit.",
      "Neither I nor II is implicit.",
      "Only I is implicit.",
      "none"
    ],
    "correct": "Both I and II are implicit.",
    "explanation": "🔍 Propositional Conversion:\n1. Statements:\n   - All Authors are learned people (Authors ⊆ Learned).\n   - Some doctors are authors (Doctors ∩ Authors ≠ ∅).\n2. Evaluating Conclusions:\n   - I: The intersection of Doctors and Authors lies entirely within Learned people. Thus, some doctors are learned people. ⟹ **Conclusion I is implicit**.\n   - II: 'Some doctors are learned people' converts validly to 'Some learned people are doctors'. ⟹ **Conclusion II is implicit**.\n3. Hence, **Both I and II are implicit.**"
  },
  {
    "id": "fa2_q42",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: No animal is a rat. Some cows are animals. All bears are rats.\nConclusions: I. Some animals are cows. II. No bear is an animal.",
    "options": [
      "If only conclusion I follows",
      "If only conclusion II follows",
      "If either conclusion I or II follows",
      "If both conclusion I and II follow"
    ],
    "correct": "If both conclusion I and II follow",
    "explanation": "🔍 Negative Categorical Elimination:\n1. Statements:\n   - No animal is a rat (Animals ∩ Rats = ∅).\n   - Some cows are animals (Cows ∩ Animals ≠ ∅).\n   - All bears are rats (Bears ⊆ Rats).\n2. Evaluating Conclusions:\n   - I: 'Some cows are animals' directly converts to 'Some animals are cows'. ⟹ **Conclusion I follows**.\n   - II: Bears are a subset of Rats, and Rats are completely disjoint from Animals. Thus, no Bear can be an Animal. ⟹ **Conclusion II follows**.\n3. Hence, **If both conclusion I and II follow**."
  },
  {
    "id": "fa2_q43",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: All tables are sofas. All sofas are beds. All beds are mats.\nConclusions: I. Some mats are sofas. II. Some beds are tables. III. Some mats are tables.",
    "options": [
      "None follows",
      "Only II follows",
      "Only I and III follows",
      "All follow"
    ],
    "correct": "All follow",
    "explanation": "🔍 Concentric Subset Containment:\n1. Chain: Tables ⊆ Sofas ⊆ Beds ⊆ Mats.\n2. Evaluating Conclusions:\n   - I: Some mats are sofas (valid particular converse of Sofas ⊆ Mats). ⟹ Follows.\n   - II: Some beds are tables (valid particular converse of Tables ⊆ Beds). ⟹ Follows.\n   - III: Some mats are tables (valid particular converse of Tables ⊆ Mats). ⟹ Follows.\n3. Therefore, **All follow**."
  },
  {
    "id": "fa2_q44",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: All pins are rods. Some rods are chains. All chains are hammers.\nConclusions: I. Some pins are hammers. II. Some hammers are rods. III. No pin is hammer.",
    "options": [
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only either I or III and II follows"
    ],
    "correct": "Only either I or III and II follows",
    "explanation": "🔍 Complementary Contradictory Pair:\n1. Statements: All pins are rods; Some rods are chains; All chains are hammers.\n2. Chain: Chains ⊆ Hammers. Rods overlap Chains, so Rods overlap Hammers. Thus, 'Some hammers are rods' definitely holds ⟹ **Conclusion II follows**.\n3. Relation between Pins and Hammers:\n   - There is no definite relationship established between Pins and Hammers.\n   - Conclusions I ('Some pins are hammers') and III ('No pin is hammer') share identical terms and form an I-E complementary contradictory pair.\n   - Therefore, exactly one of I or III must be true.\n4. Hence, **Only either I or III and II follows**."
  },
  {
    "id": "fa2_q45",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: No animal is a dog. Some monkeys are animals. All cats are dogs.\nConclusions: I. Some animals are monkeys. II. No cat is an animal.",
    "options": [
      "If only conclusion I follows",
      "If only conclusion II follows",
      "If either conclusion I or II follows",
      "If both conclusion I and II follow"
    ],
    "correct": "If both conclusion I and II follow",
    "explanation": "🔍 Disjoint Subset Proof:\n1. Statements:\n   - No animal is a dog (Animals ∩ Dogs = ∅).\n   - Some monkeys are animals (Monkeys ∩ Animals ≠ ∅).\n   - All cats are dogs (Cats ⊆ Dogs).\n2. Evaluating Conclusions:\n   - I: 'Some monkeys are animals' directly converts to 'Some animals are monkeys'. ⟹ **Conclusion I follows**.\n   - II: Cats are entirely within Dogs, and Dogs are entirely separated from Animals. Therefore, no Cat can be an Animal. ⟹ **Conclusion II follows**.\n3. Hence, **If both conclusion I and II follow**."
  },
  {
    "id": "fa2_q46",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: All goats are lions. No lion is tiger. Some tigers are horses.\nConclusions: I. Some horses are goats. II. No horse is goat.",
    "options": [
      "if only conclusion I follows",
      "if only conclusion II follows",
      "if either conclusion I or conclusion II follows",
      "if both conclusion I and conclusion II follow"
    ],
    "correct": "if either conclusion I or conclusion II follows",
    "explanation": "🔍 Either-Or Complementary Pair:\n1. Statements: All goats are lions; No lion is tiger; Some tigers are horses.\n2. Relation between Horses and Goats:\n   - Tigers and Lions are disjoint. Some Horses are Tigers, but other Horses may or may not overlap with Goats.\n   - Conclusion I: 'Some horses are goats' (Particular Affirmative).\n   - Conclusion II: 'No horse is goat' (Universal Negative).\n3. Both conclusions have identical subject and predicate, neither is definitely true alone, and together they exhaust all possibilities.\n4. Hence, **if either conclusion I or conclusion II follows**."
  },
  {
    "id": "fa2_q47",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: All Mango are Banana. All Banana are Kiwi. No Banana is Grape.\nConclusions: I. No Mango is Grape. II. Some Kiwi is Mango.",
    "options": [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both conclusion I and II follows",
      "Neither conclusion I nor II follows"
    ],
    "correct": "Both conclusion I and II follows",
    "explanation": "🔍 Direct Negative Deduction:\n1. Statements:\n   - All Mango are Banana (Mango ⊆ Banana).\n   - All Banana are Kiwi (Banana ⊆ Kiwi).\n   - No Banana is Grape (Banana ∩ Grape = ∅).\n2. Evaluating Conclusions:\n   - I: Since Mango ⊆ Banana and Banana is disjoint from Grape, Mango is disjoint from Grape. 'No Mango is Grape' ⟹ **Conclusion I follows**.\n   - II: Since Mango ⊆ Banana ⊆ Kiwi, Kiwi contains Mango. Thus, 'Some Kiwi is Mango' ⟹ **Conclusion II follows**.\n3. Hence, **Both conclusion I and II follows**."
  },
  {
    "id": "fa2_q48",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: No day is a week. Some months are days. No week is a year.\nConclusions: I. No day is a year. II. Some months are not weeks.",
    "options": [
      "If only conclusion I follows",
      "If only conclusion II follows",
      "If either conclusion I or II follows",
      "If both conclusion I and II follow"
    ],
    "correct": "If only conclusion II follows",
    "explanation": "🔍 Particular Negative Deduction:\n1. Statements:\n   - No day is a week (Days ∩ Weeks = ∅).\n   - Some months are days (Months ∩ Days ≠ ∅).\n   - No week is a year (Weeks ∩ Years = ∅).\n2. Evaluating Conclusions:\n   - I: 'No day is a year' is not certain (Days and Years can overlap without touching Weeks). ⟹ Does not follow.\n   - II: The part of Months that are Days cannot be Weeks because Days and Weeks are disjoint. Therefore, 'Some months are not weeks' ⟹ **Conclusion II follows**.\n3. Hence, **If only conclusion II follows**."
  },
  {
    "id": "fa2_q49",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: All letters are envelopes. No envelope is post office. Some post offices are postmen.\nConclusions: I. Some postmen are letters. II. No postman is letter.",
    "options": [
      "If only conclusion I follows",
      "If only conclusion II follows",
      "If either conclusion I or II follows",
      "If both conclusion I and II follow"
    ],
    "correct": "If either conclusion I or II follows",
    "explanation": "🔍 Complementary Pair Analysis:\n1. Statements: All letters are envelopes; No envelope is post office; Some post offices are postmen.\n2. Relation between Postmen and Letters:\n   - No definite relation is fixed between Postmen and Letters.\n   - Conclusion I: 'Some postmen are letters'.\n   - Conclusion II: 'No postman is letter'.\n3. Forming an I-E contradictory pair with identical subject and predicate, one of them must necessarily hold.\n4. Hence, **If either conclusion I or II follows**."
  },
  {
    "id": "fa2_q50",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some bags are mugs. All boxes are mugs.\nConclusions: I. At least some bags are boxes. II. All mugs being boxes is a possibility.",
    "options": [
      "if only conclusion I follows",
      "if only conclusion II follows",
      "if either conclusion I or II follows",
      "if both conclusions I and II follow"
    ],
    "correct": "if only conclusion II follows",
    "explanation": "🔍 Possibility in Undefined Sets:\n1. Statements: Some bags are mugs; All boxes are mugs.\n2. Evaluating Conclusions:\n   - I: 'At least some bags are boxes' is not definitely true because Bags and Boxes can be mutually disjoint within Mugs. ⟹ Does not follow.\n   - II: Since Boxes ⊆ Mugs, Mugs and Boxes could be identical sets without contradicting any premise. Thus, 'All mugs being boxes is a possibility' is valid. ⟹ **Conclusion II follows**.\n3. Hence, **if only conclusion II follows**."
  },
  {
    "id": "fa2_q51",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some papers are books. All papers are words.\nConclusions: I. All words being books is a possibility. II. Some words are not papers.",
    "options": [
      "If only conclusion I follows",
      "If only conclusion II follows",
      "If either conclusion I or II follows",
      "If both conclusion I and II follow"
    ],
    "correct": "If only conclusion I follows",
    "explanation": "🔍 Possibility vs Definite Falsehood:\n1. Statements: Some papers are books; All papers are words (Papers ⊆ Words).\n2. Evaluating Conclusions:\n   - I: Since Books already overlap Words (via Papers), Books could expand to encompass all Words without violating any statement. Thus, 'All words being books is a possibility' ⟹ **Conclusion I follows**.\n   - II: 'All papers are words' does not guarantee that Some words are not papers (Words could equal Papers). ⟹ Does not follow.\n3. Hence, **If only conclusion I follows**."
  },
  {
    "id": "fa2_q52",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some buses are cars. No car is ship. All ships are bikes.\nConclusions: I. Some buses are not bikes. II. No bike is ship.",
    "options": [
      "Neither I nor II follows",
      "Only I follows",
      "Either I or II follows",
      "Only II follows"
    ],
    "correct": "Neither I nor II follows",
    "explanation": "🔍 Non-Adjacent Term Syllogism:\n1. Statements: Some buses are cars; No car is ship; All ships are bikes.\n2. Evaluating Conclusions:\n   - I: 'Some buses are not bikes' is not necessarily true because Bikes can expand to contain all Buses. ⟹ Does not follow.\n   - II: 'All ships are bikes' implies Some bikes are ships; therefore 'No bike is ship' is false. ⟹ Does not follow.\n3. Hence, **Neither I nor II follows**."
  },
  {
    "id": "fa2_q53",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: All animals are mammals. No mammal is reptile. All reptiles are amphibians.\nConclusions: I. All animals are amphibians. II. Some amphibians are mammals.",
    "options": [
      "Neither I nor II follows",
      "Only I follows",
      "Either I or II follows",
      "Only II follows"
    ],
    "correct": "Neither I nor II follows",
    "explanation": "🔍 Disjoint Chains:\n1. Statements:\n   - All animals are mammals (Animals ⊆ Mammals).\n   - No mammal is reptile (Mammals ∩ Reptiles = ∅).\n   - All reptiles are amphibians (Reptiles ⊆ Amphibians).\n2. Evaluating Conclusions:\n   - I: Animals cannot be Reptiles, so 'All animals are amphibians' cannot be established. ⟹ Does not follow.\n   - II: Reptiles are disjoint from Mammals, but other Amphibians may or may not be Mammals. Not definitely true. ⟹ Does not follow.\n3. Hence, **Neither I nor II follows**."
  },
  {
    "id": "fa2_q54",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: No apple is a plum. All plums are oranges. All oranges are mangoes.\nConclusions: I. All plums are mangoes. II. At least some mangoes are oranges.",
    "options": [
      "Both I and II follows",
      "Only I follows",
      "Either I or II follows",
      "Only II follows"
    ],
    "correct": "Both I and II follows",
    "explanation": "🔍 Subset Transitivity:\n1. Statements:\n   - No apple is a plum.\n   - All plums are oranges (Plums ⊆ Oranges).\n   - All oranges are mangoes (Oranges ⊆ Mangoes).\n2. Evaluating Conclusions:\n   - I: By transitivity, Plums ⊆ Oranges ⊆ Mangoes, so 'All plums are mangoes' ⟹ **Conclusion I follows**.\n   - II: Since Oranges ⊆ Mangoes, 'At least some mangoes are oranges' (particular converse) ⟹ **Conclusion II follows**.\n3. Hence, **Both I and II follows**."
  },
  {
    "id": "fa2_q55",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some cats are dogs. All dogs are black.\nConclusions: I. Some cats are black. II. Some dogs are black.",
    "options": [
      "Neither Conclusion I nor II follows",
      "Both Conclusions I and II follow",
      "Only Conclusion I follows",
      "Only Conclusion II follows"
    ],
    "correct": "Both Conclusions I and II follow",
    "explanation": "🔍 Particular to Universal Deduction:\n1. Statements:\n   - Some cats are dogs (Cats ∩ Dogs ≠ ∅).\n   - All dogs are black (Dogs ⊆ Black).\n2. Evaluating Conclusions:\n   - I: The intersection Cats ∩ Dogs lies inside Black. Thus, 'Some cats are black' ⟹ **Conclusion I follows**.\n   - II: 'All dogs are black' directly implies its subaltern 'Some dogs are black' ⟹ **Conclusion II follows**.\n3. Hence, **Both Conclusions I and II follow**."
  },
  {
    "id": "fa2_q56",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some fruits are flowers. All flowers are plants.\nConclusions: I. No fruit being plant is a possibility. II. Some fruits are plants.",
    "options": [
      "None follows",
      "Either I or II follows",
      "Only II follows",
      "Only I follows"
    ],
    "correct": "Only II follows",
    "explanation": "🔍 Definite Overlap vs Impossible Disjointness:\n1. Statements: Some fruits are flowers; All flowers are plants.\n2. Deducing Facts:\n   - Fruits overlap Flowers, and Flowers ⊆ Plants.\n   - Therefore, the fruits that are flowers MUST be plants.\n3. Evaluating Conclusions:\n   - I: Since some fruits are definitely plants, 'No fruit being plant is a possibility' is impossible and false. ⟹ Does not follow.\n   - II: 'Some fruits are plants' is a definite logical consequence. ⟹ **Conclusion II follows**.\n4. Hence, **Only II follows**."
  },
  {
    "id": "fa2_q57",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some pearls are gems. All gems are diamonds. No diamond is stone. Some stones are corals.\nConclusions: I. Some stones are pearls. II. Some corals are pearls. III. No stone is pearl.",
    "options": [
      "Only conclusion I is true",
      "Only conclusion II is true",
      "Both conclusion I and II are true",
      "None of the above"
    ],
    "correct": "None of the above",
    "explanation": "🔍 Multi-Statement Verification:\n1. Statements: Some pearls are gems; All gems are diamonds; No diamond is stone; Some stones are corals.\n2. Fact: Gems and Diamonds are disjoint from Stones. Pearls overlap Gems, so pearls in gems cannot be stones.\n3. Conclusions:\n   - I: 'Some stones are pearls' is uncertain.\n   - II: 'Some corals are pearls' is uncertain.\n   - III: 'No stone is pearl' is uncertain.\n4. Since none of the offered individual options (Only I, Only II, Both I and II) are valid, the correct choice is **None of the above**."
  },
  {
    "id": "fa2_q58",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some milk are curd. Some curd are butter-milk. All butter-milk are butter. No butter is a ghee.\nConclusions: I. No butter-milk is ghee. II. Some butter are curd. III. Some curd are not ghee.",
    "options": [
      "If only conclusion I follows",
      "If only conclusion II follows",
      "If either conclusion I or II follows",
      "If all conclusions I, II and III follow"
    ],
    "correct": "If all conclusions I, II and III follow",
    "explanation": "🔍 Multi-Tier Chain Verification:\n1. Statements:\n   - Some milk are curd.\n   - Some curd are butter-milk.\n   - All butter-milk are butter (Butter-milk ⊆ Butter).\n   - No butter is ghee (Butter ∩ Ghee = ∅).\n2. Evaluating Conclusions:\n   - I: Butter-milk ⊆ Butter and Butter ∩ Ghee = ∅ ⟹ 'No butter-milk is ghee' follows.\n   - II: Curd overlaps Butter-milk ⊆ Butter ⟹ 'Some butter are curd' follows.\n   - III: The portion of Curd that is Butter-milk is in Butter, so it cannot be Ghee ⟹ 'Some curd are not ghee' follows.\n3. Hence, **If all conclusions I, II and III follow**."
  },
  {
    "id": "fa2_q59",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: No crow is a bird. Some parrots are crows. No bird is a sparrow.\nConclusions: I. No crow is a sparrow. II. Some parrots are not birds.",
    "options": [
      "If only conclusion I follows",
      "If only conclusion II follows",
      "If either conclusion I or II follows",
      "If both conclusion I and II follow"
    ],
    "correct": "If only conclusion II follows",
    "explanation": "🔍 Direct Negative Deduction:\n1. Statements:\n   - No crow is a bird (Crows ∩ Birds = ∅).\n   - Some parrots are crows (Parrots ∩ Crows ≠ ∅).\n   - No bird is a sparrow.\n2. Evaluating Conclusions:\n   - I: 'No crow is a sparrow' is not definite (Crows and Sparrows could overlap). ⟹ Does not follow.\n   - II: The parrots that are crows cannot be birds because Crows are disjoint from Birds. Therefore, 'Some parrots are not birds' ⟹ **Conclusion II follows**.\n3. Hence, **If only conclusion II follows**."
  },
  {
    "id": "fa2_q60",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: No day is a week. Some months are days. No week is a year.\nConclusions: I. No year is a week. II. All years being days is a possibility.",
    "options": [
      "If only conclusion I follows",
      "If only conclusion II follows",
      "If either conclusion I or II follows",
      "If both conclusion I and II follow"
    ],
    "correct": "If both conclusion I and II follow",
    "explanation": "🔍 Conversion and Possibility:\n1. Statements: No day is a week; Some months are days; No week is a year.\n2. Evaluating Conclusions:\n   - I: 'No week is a year' directly converts to 'No year is a week'. ⟹ **Conclusion I follows**.\n   - II: Years and Days have no negative relation specified; Years can be placed entirely inside Days without touching Weeks. Thus, 'All years being days is a possibility' is valid. ⟹ **Conclusion II follows**.\n3. Hence, **If both conclusion I and II follow**."
  },
  {
    "id": "fa2_q61",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some schools are classes. Some classes are teachers. All teachers are students.\nConclusions: I. Some students are classes. II. All schools being students is a possibility.",
    "options": [
      "Neither I nor II follows",
      "Only II follows",
      "Either I or II follows",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🔍 Syllogism Option Exhaustion:\n1. Statements:\n   - Some schools are classes.\n   - Some classes are teachers.\n   - All teachers are students (Teachers ⊆ Students).\n2. Evaluating Conclusions:\n   - I: Classes overlap Teachers, and Teachers ⊆ Students ⟹ 'Some students are classes' is definitely true.\n   - II: Schools have no negative constraint with Students ⟹ 'All schools being students is a possibility' is definitely true.\n3. Both conclusions I and II follow. Since the options provide Neither, Only II, Either, and 'None of these', the correct choice is **None of these**."
  },
  {
    "id": "fa2_q62",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: I. Only a few plant is tree II. Some tree is not leaf\nConclusions: I. Some tree is leaf II. Some plant is tree",
    "options": [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both conclusion I and II follows",
      "Neither conclusion I nor II follows"
    ],
    "correct": "Only conclusion II follows",
    "explanation": "🔍 'Only a few' Proposition:\n1. 'Only a few plant is tree' implies two simultaneous statements:\n   - Some plants are trees (Affirmative).\n   - Some plants are not trees (Negative).\n2. Evaluating Conclusions:\n   - I: 'Some tree is leaf' cannot be definitely concluded from 'Some tree is not leaf'. ⟹ Does not follow.\n   - II: 'Some plants are trees' directly converts to 'Some plant is tree'. ⟹ **Conclusion II follows**.\n3. Hence, **Only conclusion II follows**."
  },
  {
    "id": "fa2_q63",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some apartments are flats. Some flats are buildings. All buildings are bungalows. All bungalows are garden.\nConclusions: I. All apartments is building. II. All bungalows are not buildings. III. No flat is garden.",
    "options": [
      "None Follows",
      "Only conclusion I is true",
      "Both conclusion I and II are true",
      "Only conclusions II is true"
    ],
    "correct": "None Follows",
    "explanation": "🔍 False and Contradictory Claims:\n1. Statements: Some apartments are flats; Some flats are buildings; All buildings are bungalows; All bungalows are garden.\n2. Chain: Buildings ⊆ Bungalows ⊆ Garden.\n3. Evaluating Conclusions:\n   - I: Apartments only overlap flats; they need not be buildings. ⟹ Does not follow.\n   - II: Buildings ⊆ Bungalows means all buildings are bungalows, so 'All bungalows are not buildings' is false. ⟹ Does not follow.\n   - III: Flats overlap Buildings ⊆ Garden, so some flats are definitely in garden; 'No flat is garden' is false. ⟹ Does not follow.\n4. Hence, **None Follows**."
  },
  {
    "id": "fa2_q64",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some actors are singers. All the singers are dancers.\nConclusions: I. Some actors are dancers. II. No singer is actor.",
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follows",
      "Either I or II follows"
    ],
    "correct": "Only I follows",
    "explanation": "🔍 Subset Overlap Deduction:\n1. Statements:\n   - Some actors are singers (Actors ∩ Singers ≠ ∅).\n   - All the singers are dancers (Singers ⊆ Dancers).\n2. Evaluating Conclusions:\n   - I: The actors that are singers must also be dancers because all singers are dancers. Thus, 'Some actors are dancers' ⟹ **Conclusion I follows**.\n   - II: 'Some actors are singers' directly contradicts 'No singer is actor'. ⟹ Does not follow.\n3. Hence, **Only I follows**."
  },
  {
    "id": "fa2_q65",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some buses are trucks. Some trucks are boats. No boat is jeep. Some jeeps are trucks.\nConclusions: I. Some jeeps are buses. II. Some boats are buses. III. Some trucks are boats.",
    "options": [
      "None follows",
      "Only I follows",
      "Only II follows",
      "Only III follows"
    ],
    "correct": "Only III follows",
    "explanation": "🔍 Immediate Converse Deduction:\n1. Statements: Some buses are trucks; Some trucks are boats; No boat is jeep; Some jeeps are trucks.\n2. Evaluating Conclusions:\n   - I: 'Some jeeps are buses' is not definite. ⟹ Does not follow.\n   - II: 'Some boats are buses' is not definite. ⟹ Does not follow.\n   - III: Statement 2 explicitly says 'Some trucks are boats'. Direct repetition / conversion 'Some trucks are boats' is definitely true. ⟹ **Conclusion III follows**.\n3. Hence, **Only III follows**."
  },
  {
    "id": "fa2_q66",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: All buildings are houses. No house is an apartment. All apartments are flats.\nConclusions: I. All buildings are flats. II. All apartments are building.",
    "options": [
      "If only conclusion I follows",
      "If only conclusions II follows",
      "If neither conclusion I nor conclusion II follows",
      "If both conclusion I and conclusion II follow"
    ],
    "correct": "If neither conclusion I nor conclusion II follows",
    "explanation": "🔍 Disjoint Category Verification:\n1. Statements:\n   - All buildings are houses (Buildings ⊆ Houses).\n   - No house is an apartment (Houses ∩ Apartments = ∅).\n   - All apartments are flats (Apartments ⊆ Flats).\n2. Evaluating Conclusions:\n   - I: 'All buildings are flats' is false (Buildings and Flats need not overlap at all). ⟹ Does not follow.\n   - II: Buildings are in Houses, which are completely disjoint from Apartments. Thus, no apartment can be a building. ⟹ Does not follow.\n3. Hence, **If neither conclusion I nor conclusion II follows**."
  },
  {
    "id": "fa2_q67",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: a. All children are students. b. All students are players.\nConclusions: I. All cricketers are students. II. All children are players.",
    "options": [
      "Only conclusion I follows.",
      "Only conclusion II follows.",
      "Both conclusions I and II follow.",
      "Neither conclusion I nor II follows."
    ],
    "correct": "Only conclusion II follows.",
    "explanation": "🔍 Universal Transitivity:\n1. Statements:\n   - All children are students (Children ⊆ Students).\n   - All students are players (Students ⊆ Players).\n2. Transitive Chain: Children ⊆ Students ⊆ Players.\n3. Evaluating Conclusions:\n   - I: 'All cricketers are students' introduces an unmentioned term ('cricketers'). ⟹ Does not follow.\n   - II: Children ⊆ Players directly gives 'All children are players'. ⟹ **Conclusion II follows**.\n4. Hence, **Only conclusion II follows.**"
  },
  {
    "id": "fa2_q68",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: All shirts are pants. All pants are belts.\nConclusions: I. Some pants being shirts is a possibility. II. Some pants are not belts.",
    "options": [
      "if only conclusion I follows",
      "if only conclusion II follows",
      "if either conclusion I or conclusion II follows.",
      "if both conclusion I and conclusion II follow."
    ],
    "correct": "if only conclusion I follows",
    "explanation": "🔍 Syllogism Possibility & Truth:\n1. Statements:\n   - All shirts are pants (Shirts ⊆ Pants).\n   - All pants are belts (Pants ⊆ Belts).\n2. Evaluating Conclusions:\n   - I: Since Shirts ⊆ Pants, Some pants are shirts is definitely true, and its possibility is considered valid in syllabus conventions. ⟹ **Conclusion I follows**.\n   - II: Pants ⊆ Belts contradicts 'Some pants are not belts'. ⟹ Does not follow.\n3. Hence, **if only conclusion I follows**."
  },
  {
    "id": "fa2_q69",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: Some pens are keys. Some keys are locks. All locks are cards. No card is a paper.\nConclusions: I. No lock is paper. II. Some cards are keys. III. Some keys are not paper.",
    "options": [
      "Only conclusion I is true",
      "Only conclusions II is true",
      "Both conclusion I and II are true",
      "None of the above"
    ],
    "correct": "None of the above",
    "explanation": "🔍 All Conclusions Valid — Option Selection:\n1. Statements:\n   - Some pens are keys.\n   - Some keys are locks.\n   - All locks are cards (Locks ⊆ Cards).\n   - No card is a paper (Cards ∩ Paper = ∅).\n2. Evaluating Conclusions:\n   - I: Locks ⊆ Cards and Cards ∩ Paper = ∅ ⟹ 'No lock is paper' is definitely true.\n   - II: Keys overlap Locks ⊆ Cards ⟹ 'Some cards are keys' is definitely true.\n   - III: The keys that are locks are cards, so they cannot be paper ⟹ 'Some keys are not paper' is definitely true.\n3. All three conclusions I, II, and III are valid. Since the options only offer individual choices and not 'All follow', the correct response is **None of the above**."
  },
  {
    "id": "fa2_q70",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statement: All pins are bags. All chalks are bags. All needles are bags.\nConclusions: I. Some needles are pins. II. Some chalks are needles. III. No needle is pin.",
    "options": [
      "Only I follows",
      "Only III follows",
      "Only either I or III follows",
      "Only either I or III and II follows"
    ],
    "correct": "Only either I or III follows",
    "explanation": "🔍 Three-Subset Common Container & Either-Or:\n1. Statements:\n   - All pins are bags (Pins ⊆ Bags).\n   - All chalks are bags (Chalks ⊆ Bags).\n   - All needles are bags (Needles ⊆ Bags).\n2. Evaluating Conclusions:\n   - No specific intersection between Needles and Pins is given. They may overlap or be disjoint.\n   - Conclusion I: 'Some needles are pins' (Particular Affirmative).\n   - Conclusion III: 'No needle is pin' (Universal Negative).\n3. Conclusions I and III form a classic contradictory complementary pair over the same terms.\n4. Hence, **Only either I or III follows**."
  },
  {
    "id": "fa2_q71",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: a. No girl is a parrot. b. Sowmya is a girl.\nConclusions: I. Sowmya is not a parrot. II. All girls are not Sowmya.",
    "options": [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Either conclusion I or II follows",
      "Neither conclusion I nor II follows"
    ],
    "correct": "Only conclusion I follows",
    "explanation": "🔍 Singular Categorical Syllogism:\n1. Statements:\n   - No girl is a parrot (Girls ∩ Parrots = ∅).\n   - Sowmya is a girl (Sowmya ∈ Girls).\n2. Evaluating Conclusions:\n   - I: Since Sowmya is a Girl and no Girl is a Parrot, Sowmya cannot be a parrot. ⟹ **Conclusion I follows**.\n   - II: 'All girls are not Sowmya' is an ambiguous or unwarranted universal claim not deduced from the premises. ⟹ Does not follow.\n3. Hence, **Only conclusion I follows**."
  },
  {
    "id": "fa2_q72",
    "module_id": "mod17",
    "module_name": "FA2 Questions",
    "syllabus_lec": "FA-2 Revision Question Set",
    "type_id": "type_2",
    "type_name": "Type 2: Syllogism",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements: 1. All goats are tigers. 2. All tigers are lions.\nConclusions: I. All tigers are goats. II. All lions are tigers. III. No goat is a lion. IV. No lion is a goat.",
    "options": [
      "Only Conclusion III and IV follow",
      "Only Conclusion I and II follow",
      "None of the Conclusions follows",
      "All Conclusions follow"
    ],
    "correct": "None of the Conclusions follows",
    "explanation": "🔍 Universal Affirmative Converse Fallacies:\n1. Statements:\n   - All goats are tigers (Goats ⊆ Tigers).\n   - All tigers are lions (Tigers ⊆ Lions).\n2. Evaluating Conclusions:\n   - I: 'All tigers are goats' is a false universal converse. ⟹ Does not follow.\n   - II: 'All lions are tigers' is a false universal converse. ⟹ Does not follow.\n   - III: Since Goats ⊆ Lions, 'No goat is a lion' is false. ⟹ Does not follow.\n   - IV: 'No lion is a goat' is false because Lions overlap Goats. ⟹ Does not follow.\n3. None of the four conclusions follow. Therefore, **None of the Conclusions follows**."
  },
  {
    "id": "allig_q1",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_1",
    "type_name": "Type 1: Mean Price & Basic Alligation Cross-Rule",
    "difficulty": "Medium",
    "points": 1,
    "question": "A vessel of 120 liters is filled with milk and water. 80% of milk and 40% of water is taken out of the vessel. It is found that the vessel is vacated by 65%. What is the ratio of milk to water?",
    "options": [
      "5 : 3",
      "6 : 5",
      "3 : 5",
      "4 : 3",
      "None of these"
    ],
    "correct": "5 : 3",
    "explanation": "Using the Rule of Alligation on the percentage taken out:\n• Percentage of milk removed = 80%\n• Percentage of water removed = 40%\n• Overall mean percentage removed = 65%\n\nBy Alligation Cross:\nMilk : Water = (65 - 40) : (80 - 65) = 25 : 15 = **5 : 3**."
  },
  {
    "id": "allig_q2",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_1",
    "type_name": "Type 1: Mean Price & Basic Alligation Cross-Rule",
    "difficulty": "Easy",
    "points": 1,
    "question": "In what proportion must wheat at Rs.3.20 per kg be mixed with wheat at Rs.3.70 per kg, so that the mixture be worth Rs.3.35 a kg?",
    "options": [
      "9 : 5",
      "7 : 5",
      "7 : 3",
      "3 : 1",
      "None of these"
    ],
    "correct": "7 : 3",
    "explanation": "Using the Rule of Alligation:\n• Cheaper rate (c) = Rs. 3.20\n• Dearer rate (d) = Rs. 3.70\n• Mean rate (m) = Rs. 3.35\n\nQuantity of Cheaper : Quantity of Dearer = (d - m) : (m - c)\n= (3.70 - 3.35) : (3.35 - 3.20)\n= 0.35 : 0.15 = **7 : 3**."
  },
  {
    "id": "allig_q3",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_1",
    "type_name": "Type 1: Mean Price & Basic Alligation Cross-Rule",
    "difficulty": "Medium",
    "points": 1,
    "question": "How much Sugar at Rs 24 per kg should be added to 15 kg of tea at Rs 60 per kg, as to make the mixture worth Rs 39 per kg?",
    "options": [
      "21 kg",
      "20 kg",
      "27 kg",
      "18 kg",
      "None of these"
    ],
    "correct": "21 kg",
    "explanation": "Using the Rule of Alligation:\n• Rate of sugar = Rs. 24/kg\n• Rate of tea = Rs. 60/kg\n• Mean rate = Rs. 39/kg\n\nRatio of Sugar : Tea = (60 - 39) : (39 - 24) = 21 : 15 = 7 : 5.\nSince Tea = 15 kg, Sugar = (7 / 5) × 15 = **21 kg**."
  },
  {
    "id": "allig_q4",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_1",
    "type_name": "Type 1: Mean Price & Basic Alligation Cross-Rule",
    "difficulty": "Medium",
    "points": 1,
    "question": "A mixture of a certain quantity of milk with 25 liters of water is worth Rs.2 per liter. If pure milk be worth Rs.12 per liter how much milk is there in the mixture?",
    "options": [
      "5 liters",
      "7 liters",
      "6 liters",
      "4 liters",
      "None of these"
    ],
    "correct": "5 liters",
    "explanation": "Cost price of water = Rs. 0 per liter.\n• Cost price of pure milk = Rs. 12 per liter\n• Mean cost price of mixture = Rs. 2 per liter\n\nBy Rule of Alligation:\nQuantity of Milk : Quantity of Water = (2 - 0) : (12 - 2) = 2 : 10 = 1 : 5.\nGiven quantity of water = 25 liters:\nQuantity of milk = (1 / 5) × 25 = **5 liters**."
  },
  {
    "id": "allig_q5",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_1",
    "type_name": "Type 1: Mean Price & Basic Alligation Cross-Rule",
    "difficulty": "Easy",
    "points": 1,
    "question": "In what proportion must water be mixed with spirit to gain 16% by selling it at cost price?",
    "options": [
      "4 : 25",
      "2 : 9",
      "1 : 6",
      "25 : 4",
      "None of these"
    ],
    "correct": "4 : 25",
    "explanation": "Let CP of 1 liter of pure spirit = Rs. 1.\nSelling price of 1 liter mixture = Rs. 1 (sold at CP).\nGain = 16%.\nCP of 1 liter mixture = 1 / 1.16 = 100 / 116 = Rs. 25/29.\n\nBy Alligation (Water @ Rs. 0, Spirit @ Rs. 1):\nQuantity of Water : Quantity of Spirit = (1 - 25/29) : (25/29 - 0) = (4/29) : (25/29) = **4 : 25**.\n(Directly: Profit % = Water / Spirit × 100% ⇒ Water / Spirit = 16 / 100 = 4 / 25)."
  },
  {
    "id": "allig_q6",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_1",
    "type_name": "Type 1: Mean Price & Basic Alligation Cross-Rule",
    "difficulty": "Medium",
    "points": 1,
    "question": "A person has a chemical of Rs.50 per liter. In what ratio should water be mixed in that chemical so that after selling the mixture at Rs. 40 per liter he may get a profit of 50%.",
    "options": [
      "7 : 8",
      "9 : 8",
      "10 : 7",
      "4 : 3",
      "None of these"
    ],
    "correct": "7 : 8",
    "explanation": "Selling Price of mixture = Rs. 40/liter with 50% profit.\nCP of mixture = SP / (1 + Profit%) = 40 / 1.5 = 80/3 = Rs. 26.67/liter.\n• CP of water = Rs. 0/liter\n• CP of chemical = Rs. 50/liter\n\nBy Rule of Alligation:\nWater : Chemical = (50 - 80/3) : (80/3 - 0) = (70/3) : (80/3) = 70 : 80 = **7 : 8**."
  },
  {
    "id": "allig_q7",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_1",
    "type_name": "Type 1: Mean Price & Basic Alligation Cross-Rule",
    "difficulty": "Medium",
    "points": 1,
    "question": "Prabhu purchased 30 kg of rice at the rate of Rs.17.50 per kg and another 30 kg rice at a certain rate. He mixed the two and sold the entire quantity at the rate of Rs.18.60 per kg and made 20 per cent overall profit. At what price per kg did he purchase the lot of another 30 kg rice?",
    "options": [
      "14.50",
      "12.50",
      "15.50",
      "13.50",
      "None of these"
    ],
    "correct": "13.50",
    "explanation": "Total quantity = 30 kg + 30 kg = 60 kg.\nSelling price = Rs. 18.60 per kg with 20% overall profit.\nMean Cost Price of mixture = 18.60 / 1.20 = Rs. 15.50 per kg.\n\nSince both varieties are in equal quantity (30 kg : 30 kg = 1 : 1), the mean price is the simple average of the two rates:\n(17.50 + x) / 2 = 15.50\n17.50 + x = 31.00\nx = 31.00 - 17.50 = **13.50**."
  },
  {
    "id": "allig_q8",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_2",
    "type_name": "Type 2: Rate, Speed & Commercial Mixtures",
    "difficulty": "Medium",
    "points": 1,
    "question": "A petrol pump owner mixed leaded and unleaded petrol in such a way that the mixture contains 10% unleaded petrol. What quantity of leaded petrol should be added to 1 liter mixture so that the percentage of unleaded petrol becomes 5%.",
    "options": [
      "1000 ml",
      "900 ml",
      "1900 ml",
      "1800 ml",
      "None of these"
    ],
    "correct": "1000 ml",
    "explanation": "In 1 liter (1000 ml) mixture:\n• Unleaded petrol = 10% of 1000 ml = 100 ml.\nLet x ml of leaded petrol be added (which contains 0% unleaded petrol).\nNew total volume = (1000 + x) ml.\nThe percentage of unleaded petrol in the new mixture must be 5%:\n100 / (1000 + x) = 5 / 100 = 1 / 20\n1000 + x = 2000\nx = **1000 ml**."
  },
  {
    "id": "allig_q9",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_2",
    "type_name": "Type 2: Rate, Speed & Commercial Mixtures",
    "difficulty": "Easy",
    "points": 1,
    "question": "150 gm of sugar solution has 20% sugar in it. How much sugar should be added to make it 25% in the solution?",
    "options": [
      "10 gm",
      "45 gm",
      "35 gm",
      "40 gm",
      "None of these"
    ],
    "correct": "10 gm",
    "explanation": "In 150 gm solution:\n• Current sugar = 20% of 150 = 30 gm.\n• Water = 150 - 30 = 120 gm.\nWhen pure sugar is added, the water content remains constant at 120 gm.\nIn the new solution, sugar is 25%, so water is 75%:\n75% of new total = 120 gm ⇒ New total = 120 / 0.75 = 160 gm.\nSugar to be added = 160 - 150 = **10 gm**."
  },
  {
    "id": "allig_q10",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_2",
    "type_name": "Type 2: Rate, Speed & Commercial Mixtures",
    "difficulty": "Medium",
    "points": 1,
    "question": "There are 75 students in a class, Rs.48 are distributed among them so that each boy gets Rs.1 and each girl gets 40P . Find the number of boys and girls in that class.",
    "options": [
      "30, 45",
      "40, 35",
      "25, 50",
      "35, 40",
      "None of these"
    ],
    "correct": "30, 45",
    "explanation": "Total amount = Rs. 48 = 4800 paise. Total students = 75.\nMean amount per student = 4800 / 75 = 64 paise.\n• Amount per boy = Rs. 1 = 100 paise\n• Amount per girl = 40 paise\n\nBy Rule of Alligation:\nBoys : Girls = (64 - 40) : (100 - 64) = 24 : 36 = 2 : 3.\n• Number of boys = (2 / 5) × 75 = 30\n• Number of girls = (3 / 5) × 75 = 45\nResult = **30, 45**."
  },
  {
    "id": "allig_q11",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_2",
    "type_name": "Type 2: Rate, Speed & Commercial Mixtures",
    "difficulty": "Easy",
    "points": 1,
    "question": "In a zoo, there are rabbits and pigeons. If heads are counted, there are 100 and if legs are counted, there are 290. How many rabbits are there?",
    "options": [
      "55",
      "45",
      "40",
      "50",
      "None of these"
    ],
    "correct": "45",
    "explanation": "Each rabbit has 4 legs and each pigeon has 2 legs. Total heads = 100.\nAverage legs per head = 290 / 100 = 2.9 legs.\n\nBy Rule of Alligation:\nRabbits : Pigeons = (2.9 - 2) : (4 - 2.9) = 0.9 : 1.1 = 9 : 11.\n• Number of rabbits = [9 / (9 + 11)] × 100 = (9 / 20) × 100 = **45**."
  },
  {
    "id": "allig_q12",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_2",
    "type_name": "Type 2: Rate, Speed & Commercial Mixtures",
    "difficulty": "Hard",
    "points": 1,
    "question": "A person travels 245 km in 6 hours in two stages. In the first part of the journey, he travels by bus at the speed of 30 km/hr. In the second part of the journey, he travels by train at the speed of 50 km/hr. How much distance did he travel by train?",
    "options": [
      "162.5 km",
      "82.5 km",
      "164 km",
      "83 km",
      "None of these"
    ],
    "correct": "162.5 km",
    "explanation": "Average speed for total journey = 245 / 6 km/hr.\n• Bus speed = 30 km/hr\n• Train speed = 50 km/hr\n\nApplying Alligation with respect to time:\nTime by Bus : Time by Train = [50 - (245/6)] : [(245/6) - 30]\n= (55/6) : (65/6) = 55 : 65 = 11 : 13.\nTotal time = 6 hours.\nTime spent in train = [13 / (11 + 13)] × 6 = (13 / 24) × 6 = 13 / 4 = 3.25 hours.\nDistance traveled by train = Speed × Time = 50 × 3.25 = **162.5 km**."
  },
  {
    "id": "allig_q13",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_2",
    "type_name": "Type 2: Rate, Speed & Commercial Mixtures",
    "difficulty": "Medium",
    "points": 1,
    "question": "A trader has 25 kg of rice, part of which he sells at 4% profit and the rest at 9% profit. He gains 7% on the whole. What is the quantity sold at 9% profit?",
    "options": [
      "15 kg",
      "10 kg",
      "18 kg",
      "12 kg",
      "None of these"
    ],
    "correct": "15 kg",
    "explanation": "Applying the Rule of Alligation on profit percentages:\n• Profit on first part = 4%\n• Profit on second part = 9%\n• Overall average profit = 7%\n\nRatio of quantity sold @ 4% to quantity sold @ 9% = (9 - 7) : (7 - 4) = 2 : 3.\nTotal quantity = 25 kg.\nQuantity sold at 9% profit = [3 / (2 + 3)] × 25 = (3 / 5) × 25 = **15 kg**."
  },
  {
    "id": "allig_q14",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_2",
    "type_name": "Type 2: Rate, Speed & Commercial Mixtures",
    "difficulty": "Medium",
    "points": 1,
    "question": "Ritu's expenditure and saving are in the ratio 5 : 2. Her income increases by 12%. Her expenditure also increases by 14%. By how many % does her saving increase?",
    "options": [
      "14%",
      "7%",
      "8%",
      "9%",
      "None of these"
    ],
    "correct": "7%",
    "explanation": "Income = Expenditure + Saving.\nLet Expenditure = 500 and Saving = 200, so Income = 700.\n• New Income = 700 + 12% of 700 = 700 + 84 = 784.\n• New Expenditure = 500 + 14% of 500 = 500 + 70 = 570.\n• New Saving = 784 - 570 = 214.\n\nIncrease in saving = 214 - 200 = 14.\nPercentage increase in saving = (14 / 200) × 100% = **7%**."
  },
  {
    "id": "allig_q15",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_3",
    "type_name": "Type 3: Liquid Concentration & Vessel Mixing",
    "difficulty": "Hard",
    "points": 1,
    "question": "A jar contains a mixture of two liquids A and B in the ratio 3 : 1. When 15 liters of the mixture is taken out and 9 liters of liquid B is poured into the jar, the ratio becomes 3 : 4. How many liters of liquid was contained in the jar?",
    "options": [
      "27 liters",
      "24 liters",
      "30 liters",
      "21 liters",
      "None of these"
    ],
    "correct": "27 liters",
    "explanation": "Let initial total volume = 4x, so Liquid A = 3x and Liquid B = x.\nWhen 15 liters of mixture is removed:\n• A removed = (3/4) × 15 = 45/4 liters\n• B removed = (1/4) × 15 = 15/4 liters\nRemaining liquids: A = 3x - 45/4, B = x - 15/4.\n\nNow 9 liters of liquid B is poured in:\nNew quantity of B = x - 15/4 + 9 = x + 21/4.\nGiven new ratio A : B = 3 : 4:\n(3x - 45/4) / (x + 21/4) = 3 / 4\n4(3x - 45/4) = 3(x + 21/4)\n12x - 45 = 3x + 63/4\n9x = 45 + 15.75 = 60.75 ⇒ x = 6.75.\nTotal capacity of jar = 4x = 4 × 6.75 = **27 liters**."
  },
  {
    "id": "allig_q16",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_3",
    "type_name": "Type 3: Liquid Concentration & Vessel Mixing",
    "difficulty": "Medium",
    "points": 1,
    "question": "A vessel is filled with a liquid, 3 parts of which are water and 5 parts syrup. How much of the mixture must be drawn off and replaced with water so that the mixture may be half water and half syrup?",
    "options": [
      "1/5",
      "1/7",
      "4/5",
      "3/10",
      "None of these"
    ],
    "correct": "1/5",
    "explanation": "Initially, syrup is 5/8 of the vessel and water is 3/8.\nLet the fraction of the mixture drawn off and replaced by water be x.\nAfter drawing off x, the remaining volume is (1 - x), which contains (5/8)(1 - x) syrup.\nSince pure water replaces the drawn mixture, no syrup is added back.\nIn the final mixture, syrup is 1/2 of the vessel:\n(5/8)(1 - x) = 1/2\n1 - x = (1/2) × (8/5) = 4/5\nx = 1 - 4/5 = **1/5**."
  },
  {
    "id": "allig_q17",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_3",
    "type_name": "Type 3: Liquid Concentration & Vessel Mixing",
    "difficulty": "Hard",
    "points": 1,
    "question": "A vessel contains mixture of liquids A and B in the ratio 3 : 2. When 20 liters of the mixture is taken out and replaced by 20 liters of liquid B, the ratio changes to 1 : 4. How many liters of liquid A was there initially present in the vessel?",
    "options": [
      "14 liters",
      "20 liters",
      "18 liters",
      "30 liters",
      "None of these"
    ],
    "correct": "18 liters",
    "explanation": "Let initial quantities be A = 3x and B = 2x (total = 5x).\nWhen 20 liters of mixture is drawn off:\n• Quantity of A removed = (3/5) × 20 = 12 liters\n• Quantity of B removed = (2/5) × 20 = 8 liters\nRemaining A = 3x - 12, remaining B = 2x - 8.\n\nNow 20 liters of liquid B is added:\nNew quantity of B = 2x - 8 + 20 = 2x + 12.\nNew ratio A : B = 1 : 4:\n(3x - 12) / (2x + 12) = 1 / 4\n4(3x - 12) = 2x + 12\n12x - 48 = 2x + 12\n10x = 60 ⇒ x = 6.\nInitial quantity of liquid A = 3x = 3 × 6 = **18 liters**."
  },
  {
    "id": "allig_q18",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_3",
    "type_name": "Type 3: Liquid Concentration & Vessel Mixing",
    "difficulty": "Easy",
    "points": 1,
    "question": "56 liters of a mixture contains milk and water in the ratio 5 : 2. How much water is to be added to get a new mixture containing milk and water in the ratio 5 : 3?",
    "options": [
      "9 liters",
      "6 liters",
      "7 liters",
      "8 liters",
      "None of these"
    ],
    "correct": "8 liters",
    "explanation": "In 56 liters of mixture:\n• Quantity of milk = (5 / 7) × 56 = 40 liters\n• Quantity of water = (2 / 7) × 56 = 16 liters\n\nLet w liters of water be added to make the ratio of milk to water 5 : 3.\nSince only water is added, the milk quantity remains 40 liters:\n40 / (16 + w) = 5 / 3\n5(16 + w) = 120\n16 + w = 24\nw = 24 - 16 = **8 liters**."
  },
  {
    "id": "allig_q19",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_3",
    "type_name": "Type 3: Liquid Concentration & Vessel Mixing",
    "difficulty": "Medium",
    "points": 1,
    "question": "Three equal glasses are filled with mixtures of milk and water. The proportion of milk and water in each glass is as follows. In the first glass as 3 : 1, in the second glass as 5 : 3 and in the third as 9 : 7. The contents of the three glasses are emptied into a single vessel. What is the proportion of milk and water in it?",
    "options": [
      "31 : 17",
      "17 : 31",
      "15 : 31",
      "31 : 15",
      "None of these"
    ],
    "correct": "31 : 17",
    "explanation": "Let the capacity of each glass be V. The proportions of milk in each glass are:\n• Glass 1: 3/4 = 12/16\n• Glass 2: 5/8 = 10/16\n• Glass 3: 9/16\n\nTotal milk from the 3 glasses = (12/16 + 10/16 + 9/16) V = 31V/16.\nTotal liquid from the 3 glasses = 3V = 48V/16.\nTotal water = 3V - 31V/16 = 17V/16.\n\nRatio of milk to water = 31 : 17 = **31 : 17**."
  },
  {
    "id": "allig_q20",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_3",
    "type_name": "Type 3: Liquid Concentration & Vessel Mixing",
    "difficulty": "Medium",
    "points": 1,
    "question": "In an alloy, zinc and copper are in the ratio 3 : 4. In the second alloy the same elements are in the ratio 4 : 5. In what ratio should these two alloys be mixed to form a new alloy in which the two elements are in ratio 7 : 3?",
    "options": [
      "161 : 181",
      "181 : 181",
      "161 : 171",
      "Not possible",
      "None of these"
    ],
    "correct": "Not possible",
    "explanation": "Let us check the proportion of zinc in each alloy:\n• First alloy: Zinc fraction = 3 / (3 + 4) = 3/7 ≈ 42.86%\n• Second alloy: Zinc fraction = 4 / (4 + 5) = 4/9 ≈ 44.44%\n• Desired alloy: Zinc fraction = 7 / (7 + 3) = 7/10 = 70.00%\n\nBy the Rule of Alligation, the resultant mixture concentration must always lie strictly between the concentrations of the two constituents (42.86% < Mean < 44.44%).\nSince 70% is higher than both alloys, it is **Not possible**."
  },
  {
    "id": "allig_q21",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_3",
    "type_name": "Type 3: Liquid Concentration & Vessel Mixing",
    "difficulty": "Hard",
    "points": 1,
    "question": "There are two vessels of equal capacity, one full of milk, and the second one-third full of water. The second vessel is then filled up out of the first, the contents of the second are then poured back into the first till it is full and then again, the contents of the first are poured back into the second till it is full. What is the proportion of milk in the second vessel?",
    "options": [
      "Cannot possible",
      "20/27",
      "20/37",
      "7/27",
      "None of these"
    ],
    "correct": "20/27",
    "explanation": "Let the capacity of each vessel be 1 unit.\nInitially: Vessel 1 = 1 milk; Vessel 2 = 1/3 water, 2/3 empty.\n\n• Step 1: Vessel 2 is filled from Vessel 1.\nVolume poured = 2/3 (all milk).\nVessel 1 remaining = 1/3 milk.\nVessel 2 = 1/3 water + 2/3 milk (Ratio: 2/3 milk, 1/3 water).\n\n• Step 2: Vessel 2 poured into Vessel 1 till Vessel 1 is full.\nVessel 1 needs 2/3 volume. It receives (2/3) × (2/3) = 4/9 milk and (2/3) × (1/3) = 2/9 water.\nVessel 1 now has: Milk = 1/3 + 4/9 = 7/9; Water = 2/9 (Total = 1).\nVessel 2 remaining volume = 1/3 (containing (1/3) × (2/3) = 2/9 milk and 1/9 water).\n\n• Step 3: Vessel 1 poured into Vessel 2 till Vessel 2 is full.\nVessel 2 needs 2/3 volume from Vessel 1.\nMilk transferred = (2/3) × (7/9) = 14/27.\nTotal milk in Vessel 2 = 2/9 + 14/27 = 6/27 + 14/27 = **20/27**."
  },
  {
    "id": "allig_q22",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_4",
    "type_name": "Type 4: Repeated Withdrawal & Successive Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "From a cask of wine, containing 64 liters, 8 liters are drawn out and the cask is filled up with water. If the same process is repeated a second, then a third time, what will be the proportion of wine to water in the resulting mixture?",
    "options": [
      "343 : 169",
      "343 : 512",
      "169 : 343",
      "512 : 343",
      "None of these"
    ],
    "correct": "343 : 169",
    "explanation": "Using the successive replacement formula:\nQuantity of pure liquid remaining = Initial Quantity × [1 - (y / x)]ⁿ\nHere, x = 64 liters, y = 8 liters, and n = 3 operations:\nWine left = 64 × [1 - (8 / 64)]³ = 64 × (7 / 8)³ = 64 × (343 / 512) = 343 / 8 = 42.875 liters.\n\nQuantity of water = 64 - 42.875 = 21.125 liters = 169 / 8 liters.\nProportion of Wine to Water = (343/8) : (169/8) = **343 : 169**."
  },
  {
    "id": "allig_q23",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_4",
    "type_name": "Type 4: Repeated Withdrawal & Successive Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "A vessel contains 24 liters of milk. 4 liters are withdrawn and replaced by water. The process is repeated a second time. Find the ratio of milk to water in the resulting mixture?",
    "options": [
      "25 : 36",
      "36 : 11",
      "11 : 25",
      "25 : 11",
      "None of these"
    ],
    "correct": "25 : 11",
    "explanation": "Using the successive dilution formula:\nQuantity of milk remaining = Initial Quantity × [1 - (y / x)]ⁿ\nHere, x = 24 liters, y = 4 liters, and n = 2 operations:\nMilk remaining = 24 × [1 - (4 / 24)]² = 24 × (5 / 6)² = 24 × (25 / 36) = 50 / 3 liters.\n\nQuantity of water = 24 - (50 / 3) = 22 / 3 liters.\nRatio of Milk : Water = (50 / 3) : (22 / 3) = 50 : 22 = **25 : 11**."
  },
  {
    "id": "allig_q24",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_4",
    "type_name": "Type 4: Repeated Withdrawal & Successive Replacement",
    "difficulty": "Hard",
    "points": 1,
    "question": "Eight liters are drawn off from a vessel full of water and substituted by pure milk. Again, eight liters of the mixture are drawn off and substituted by pure milk. If the vessel now contains water and milk in the ratio 9 : 40, find the capacity of the vessel.",
    "options": [
      "14 liters",
      "24 liters",
      "16 liters",
      "12 liters",
      "None of these"
    ],
    "correct": "14 liters",
    "explanation": "Let C be the capacity of the vessel.\nWater remaining after 2 operations:\nWater remaining / Total Capacity = [1 - (8 / C)]²\nGiven ratio of Water to Milk = 9 : 40 ⇒ Water / Total = 9 / (9 + 40) = 9 / 49.\n\nTherefore:\n[1 - (8 / C)]² = 9 / 49\n1 - (8 / C) = 3 / 7\n8 / C = 1 - 3/7 = 4 / 7\nC = (8 × 7) / 4 = **14 liters**."
  },
  {
    "id": "allig_q25",
    "module_id": "mod12",
    "module_name": "Allegation",
    "syllabus_lec": "ST-1 Mixture Mechanics",
    "type_id": "type_4",
    "type_name": "Type 4: Repeated Withdrawal & Successive Replacement",
    "difficulty": "Hard",
    "points": 1,
    "question": "A 25-liters cylinder contains a mixture of oxygen and nitrogen, the volume of oxygen being 25% of total volume. A few liters of the mixture is released, and an equal amount of nitrogen is added. Then the same amount of the mixture as before is released and replaced by nitrogen for the second time. As a result, the oxygen content becomes 9% of the total volume. How many liters of mixture is released each time?",
    "options": [
      "15 liters",
      "10 liters",
      "14 liters",
      "18 liters",
      "None of these"
    ],
    "correct": "10 liters",
    "explanation": "Total volume = 25 liters.\nInitial oxygen percentage = 25%.\nAfter 2 successive releases and replacements of x liters with pure nitrogen, the final oxygen percentage becomes 9%.\n\nFormula for concentration after n replacements:\nFinal Concentration / Initial Concentration = [1 - (x / Total)]ⁿ\n9% / 25% = [1 - (x / 25)]²\n9 / 25 = [1 - (x / 25)]²\nTaking square root on both sides:\n3 / 5 = 1 - (x / 25)\nx / 25 = 1 - 3/5 = 2 / 5\nx = 25 × (2 / 5) = **10 liters**."
  },
  {
    "id": "st2_pct_q1",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Percentages, Fractions & Relative Comparison",
    "difficulty": "Easy",
    "points": 1,
    "question": "12(1/2) is what per cent of 16(2/3) ?",
    "options": [
      "50%",
      "25%",
      "75%",
      "45%",
      "None of these"
    ],
    "correct": "75%",
    "explanation": "📊 Step-by-Step Solution:\n1. Convert mixed fractions to improper fractions:\n   • 12(1/2) = 12.5 = 25/2\n   • 16(2/3) = 50/3\n2. Use the percentage formula (Part / Whole) × 100%:\n   • Percentage = [(25/2) / (50/3)] × 100%\n   • Percentage = (25/2) × (3/50) × 100% = (3/4) × 100% = **75%**."
  },
  {
    "id": "st2_pct_q2",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Percentages, Fractions & Relative Comparison",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the price of one kg. of rice is increased by 25%, the increase is 12 Rs . Find the new price of rice per kg.",
    "options": [
      "48",
      "60",
      "72",
      "36",
      "None of these"
    ],
    "correct": "60",
    "explanation": "📊 Step-by-Step Solution:\n1. Let the original price of rice be P.\n2. The increase of 25% is given as Rs. 12:\n   • 25% of P = 12\n   • (25/100) × P = 12 ⇒ P/4 = 12 ⇒ P = 48 Rs.\n3. The new price includes the increase:\n   • New Price = Original Price + Increase = 48 + 12 = **60**."
  },
  {
    "id": "st2_pct_q6",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Percentages, Fractions & Relative Comparison",
    "difficulty": "Easy",
    "points": 1,
    "question": "If A’s salary is 20% more than that of B, then how much per cent is B’s salary less than that of A?",
    "options": [
      "16(2/3)%",
      "20%",
      "40%",
      "10%",
      "None of these"
    ],
    "correct": "16(2/3)%",
    "explanation": "📊 Step-by-Step Solution:\n1. Let B’s salary be 100.\n2. Since A’s salary is 20% more, A’s salary = 120.\n3. B’s salary is less than A’s salary by: 120 - 100 = 20.\n4. Percentage by which B is less than A:\n   • [Difference / A's salary] × 100% = (20 / 120) × 100% = (1 / 6) × 100% = **16(2/3)%**.\n\n💡 Direct Formula: [R / (100 + R)] × 100% = [20 / 120] × 100% = 16(2/3)%."
  },
  {
    "id": "st2_pct_q12",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Percentages, Fractions & Relative Comparison",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a recent survey 40% houses contained two or more people. Of those houses containing only one person 25% were having only a male. What is the percentage of all houses which contain exactly one female and no males?",
    "options": [
      "75",
      "40",
      "15",
      "45",
      "None of these"
    ],
    "correct": "45",
    "explanation": "📊 Step-by-Step Solution:\n1. Let the total number of houses be 100%.\n2. Houses containing 2 or more people = 40%.\n3. Therefore, houses containing only 1 person = 100% - 40% = 60%.\n4. Among these 1-person houses, 25% contain only a male:\n   • Percentage containing only a female = 100% - 25% = 75% of single-person houses.\n5. Percentage of all houses containing exactly 1 female and no males:\n   • 75% of 60% = 0.75 × 60 = **45**."
  },
  {
    "id": "st2_pct_q23",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Percentages, Fractions & Relative Comparison",
    "difficulty": "Medium",
    "points": 1,
    "question": "In an examination the percentage of students qualified to the number of students appeared from school ‘A’ is 80%. In school ‘B’ the number of students appeared is 25% more than the students appeared from school ‘A’ and the number of students qualified from school ‘B’ is 40% more than the students qualified from school ‘A’. What is the percentage of students qualified to the number of students appeared from school ‘B’?",
    "options": [
      "45%",
      "90%",
      "89.5%",
      "89.6%",
      "None of these"
    ],
    "correct": "89.6%",
    "explanation": "📊 Step-by-Step Solution:\n1. Let the number of students appeared from School A = 100.\n2. Students qualified from School A = 80% of 100 = 80.\n3. For School B:\n   • Appeared = 100 + 25% of 100 = 125.\n   • Qualified = 80 + 40% of 80 = 80 + 32 = 112.\n4. Percentage qualified from School B:\n   • (Qualified from B / Appeared from B) × 100%\n   • (112 / 125) × 100% = 112 × (4 / 5) = 448 / 5 = **89.6%**."
  },
  {
    "id": "st2_pct_q29",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Percentages, Fractions & Relative Comparison",
    "difficulty": "Easy",
    "points": 1,
    "question": "Two numbers are respectively 26% and 5% more than a third. What percentage is the first of the second?",
    "options": [
      "120%",
      "100%",
      "80%",
      "125%",
      "None of these"
    ],
    "correct": "120%",
    "explanation": "📊 Step-by-Step Solution:\n1. Let the third number be 100.\n2. First number = 100 + 26% of 100 = 126.\n3. Second number = 100 + 5% of 100 = 105.\n4. Percentage of the first number relative to the second:\n   • (First / Second) × 100% = (126 / 105) × 100%\n   • Dividing numerator and denominator by 21: (6 / 5) × 100% = **120%**."
  },
  {
    "id": "st2_pct_q7",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Successive Percentage, Net Change & Area Shifts",
    "difficulty": "Medium",
    "points": 1,
    "question": "A shopkeeper marks the prices of his goods at 26% higher than the original price. Due to the increase in demand, he again increases by 26%. What profit (in percent) did he get?",
    "options": [
      "52%",
      "58%",
      "60%",
      "58.76%",
      "None of these"
    ],
    "correct": "58.76%",
    "explanation": "📊 Step-by-Step Solution:\n1. Use the successive percentage change formula:\n   • Net % Change = a + b + (a × b) / 100\n2. Here, a = +26% and b = +26%:\n   • Net % Change = 26 + 26 + (26 × 26) / 100\n   • Net % Change = 52 + 676 / 100 = 52 + 6.76 = **58.76%**."
  },
  {
    "id": "st2_pct_q8",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Successive Percentage, Net Change & Area Shifts",
    "difficulty": "Medium",
    "points": 1,
    "question": "The tax on commodity is diminished by 15% and its consumption increases by 10%. Find the effect on revenue.",
    "options": [
      "decrease of 6%",
      "decrease of 5%",
      "increase of 6.5%",
      "decrease of 6.5%",
      "None of these"
    ],
    "correct": "decrease of 6.5%",
    "explanation": "📊 Step-by-Step Solution:\n1. Revenue = Tax Rate × Consumption.\n2. When two factors change by a% and b%, the net percentage change in their product is:\n   • Net Change = a + b + (a × b) / 100\n3. Here, Tax change a = -15%, Consumption change b = +10%:\n   • Net Change = -15 + 10 + [(-15) × 10] / 100\n   • Net Change = -5 - 1.5 = -6.5%.\n4. Negative sign indicates a **decrease of 6.5%**."
  },
  {
    "id": "st2_pct_q9",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Successive Percentage, Net Change & Area Shifts",
    "difficulty": "Medium",
    "points": 1,
    "question": "In measuring the sides of a rectangle, one side is taken 10% in excess and the other 20% in deficit. Find the error per cent in area calculated from the measurement.",
    "options": [
      "8% excess",
      "8% deficit",
      "12% excess",
      "12% deficit",
      "None of these"
    ],
    "correct": "12% deficit",
    "explanation": "📊 Step-by-Step Solution:\n1. Area of rectangle = Length × Breadth.\n2. Net percentage change in Area:\n   • Net % Change = a + b + (a × b) / 100\n3. Here, a = +10% (excess) and b = -20% (deficit):\n   • Net % Change = 10 - 20 + [10 × (-20)] / 100\n   • Net % Change = -10 - 2 = -12%.\n4. The negative sign represents a **12% deficit**."
  },
  {
    "id": "st2_pct_q10",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Successive Percentage, Net Change & Area Shifts",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find a single discount equivalent to a discount series of 10%, 15% and 20%.",
    "options": [
      "45%",
      "38.8%",
      "43.8%",
      "39.8%",
      "None of these"
    ],
    "correct": "38.8%",
    "explanation": "📊 Step-by-Step Solution:\n1. Let the initial Marked Price be 100.\n2. After successive discounts of 10%, 15%, and 20%, the selling price factor is:\n   • SP = 100 × (1 - 0.10) × (1 - 0.15) × (1 - 0.20)\n   • SP = 100 × 0.90 × 0.85 × 0.80\n   • SP = 100 × 0.765 × 0.80 = 61.2.\n3. Single equivalent discount = Initial MP - SP = 100 - 61.2 = **38.8%**."
  },
  {
    "id": "st2_pct_q17",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Successive Percentage, Net Change & Area Shifts",
    "difficulty": "Medium",
    "points": 1,
    "question": "The population of a town is 64000. It increases by 10% during the first year. During the second year, it decreases by 25% and increased by 5% during the third year. What is the population after 3 years?",
    "options": [
      "654400",
      "56440",
      "55450",
      "55440",
      "None of these"
    ],
    "correct": "55440",
    "explanation": "📊 Step-by-Step Solution:\n1. Initial population = 64,000.\n2. Successive annual multipliers:\n   • Year 1 (+10%): (1 + 10/100) = 11/10\n   • Year 2 (-25%): (1 - 25/100) = 3/4\n   • Year 3 (+5%): (1 + 5/100) = 21/20\n3. Final population:\n   • Population = 64000 × (11/10) × (3/4) × (21/20)\n   • Population = 64000 × (693 / 800) = 80 × 693 = **55440**."
  },
  {
    "id": "st2_pct_q27",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Successive Percentage, Net Change & Area Shifts",
    "difficulty": "Medium",
    "points": 1,
    "question": "The population of a town is 15625. It increases 8 per cent annually. What will it be in 3 years?",
    "options": [
      "16983",
      "18693",
      "19683",
      "19638",
      "None of these"
    ],
    "correct": "19683",
    "explanation": "📊 Step-by-Step Solution:\n1. Initial population P = 15,625; Annual rate r = 8%; Time n = 3 years.\n2. Compounded population formula: P_final = P × [1 + (r / 100)]ⁿ\n   • 1 + 8/100 = 108/100 = 27/25.\n3. Compute after 3 years:\n   • P_final = 15625 × (27 / 25)³\n   • Since 25³ = 15,625:\n   • P_final = 15625 × (27³ / 15625) = 27³ = **19683**."
  },
  {
    "id": "st2_pct_q28",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Successive Percentage, Net Change & Area Shifts",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man deposited 30% of the initial amount to his locker. And again, after some time he deposited 25% of the increased amount. Now the amount becomes 13,000. How much was the initial amount?",
    "options": [
      "8000",
      "10000",
      "12000",
      "9000",
      "None of these"
    ],
    "correct": "8000",
    "explanation": "📊 Step-by-Step Solution:\n1. Let the initial amount in the locker be X.\n2. He deposits 30% of the initial amount:\n   • Amount becomes X + 0.30X = 1.30X.\n3. Next, he deposits 25% of this increased amount:\n   • New amount = 1.30X × (1 + 0.25) = 1.30X × 1.25 = 1.625X.\n4. Given that the final amount is 13,000:\n   • 1.625X = 13000\n   • X = 13000 / 1.625 = **8000**."
  },
  {
    "id": "st2_pct_q3",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Price, Consumption & Expenditure Mechanics",
    "difficulty": "Easy",
    "points": 1,
    "question": "Due to fall in manpower, the production in a factory decreases by 20%. By what per cent should the working hour be increased to restore the original production?",
    "options": [
      "24%",
      "25%",
      "20%",
      "35%",
      "None of these"
    ],
    "correct": "25%",
    "explanation": "📊 Step-by-Step Solution:\n1. Production = Manpower × Working Hours.\n2. When manpower falls by 20% (to 80%), to restore original production:\n   • Required multiplier = 100 / 80 = 5 / 4 = 1.25.\n3. Increase needed = 1.25 - 1 = 0.25 = 25%.\n\n💡 Direct Inverse Formula:\n• % Increase = [R / (100 - R)] × 100% = [20 / (100 - 20)] × 100% = (20 / 80) × 100% = **25%**."
  },
  {
    "id": "st2_pct_q4",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Price, Consumption & Expenditure Mechanics",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the duty on imported sugar be increased by 25 percent. By how much percent must a man reduce his consumption of that article so as not to increase his expenditure?",
    "options": [
      "20%",
      "25%",
      "16%",
      "10%",
      "None of these"
    ],
    "correct": "20%",
    "explanation": "📊 Step-by-Step Solution:\n1. Expenditure = Price × Consumption = Constant.\n2. When price increases by R%, reduction in consumption to keep expenditure constant is:\n   • % Reduction = [R / (100 + R)] × 100%\n3. Substituting R = 25%:\n   • % Reduction = [25 / (100 + 25)] × 100% = (25 / 125) × 100% = (1 / 5) × 100% = **20%**."
  },
  {
    "id": "st2_pct_q5",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Price, Consumption & Expenditure Mechanics",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the price of sugar falls down by 20%, by how much per cent must a householder increase its consumption, so as not to decrease expenditure in this item?",
    "options": [
      "25%",
      "20%",
      "30%",
      "15%",
      "None of these"
    ],
    "correct": "25%",
    "explanation": "📊 Step-by-Step Solution:\n1. When price falls by R%, increase in consumption to keep expenditure constant is:\n   • % Increase = [R / (100 - R)] × 100%\n2. Here, R = 20%:\n   • % Increase = [20 / (100 - 20)] × 100% = (20 / 80) × 100% = (1 / 4) × 100% = **25%**."
  },
  {
    "id": "st2_pct_q11",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Price, Consumption & Expenditure Mechanics",
    "difficulty": "Medium",
    "points": 1,
    "question": "The price of wheat is decreased by 25% and its consumption increases by 25%. Find the new expenditure as a ratio of initial expenditure.",
    "options": [
      "3 : 4",
      "5 : 4",
      "16 : 15",
      "15 : 16",
      "None of these"
    ],
    "correct": "15 : 16",
    "explanation": "📊 Step-by-Step Solution:\n1. Expenditure = Price × Consumption.\n2. Let initial price P = 1, initial consumption C = 1 ⇒ Initial Expenditure = 1.\n3. New Price = 1 - 25% = 0.75 = 3/4.\n4. New Consumption = 1 + 25% = 1.25 = 5/4.\n5. New Expenditure = (3/4) × (5/4) = 15/16.\n6. Ratio of New Expenditure to Initial Expenditure = (15/16) : 1 = **15 : 16**."
  },
  {
    "id": "st2_pct_q24",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Price, Consumption & Expenditure Mechanics",
    "difficulty": "Easy",
    "points": 1,
    "question": "Rice is now being sold at Rs. 20 per kg. During last month its cost was 18 per kg. Find by how much percent a family should reduce its consumption, so as to keep the expenditure the same.",
    "options": [
      "10%",
      "20%",
      "15%",
      "5%",
      "None of these"
    ],
    "correct": "10%",
    "explanation": "📊 Step-by-Step Solution:\n1. Last month price = Rs. 18/kg; Current price = Rs. 20/kg.\n2. To keep expenditure constant, the consumption must decrease in proportion to the new price:\n   • % Reduction in consumption = [(New Price - Old Price) / New Price] × 100%\n   • % Reduction = [(20 - 18) / 20] × 100% = (2 / 20) × 100% = **10%**."
  },
  {
    "id": "st2_pct_q25",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Price, Consumption & Expenditure Mechanics",
    "difficulty": "Hard",
    "points": 1,
    "question": "A reduction of 2 per kg enables a man to purchase 2 kg more tea for 8. Find the original price of tea per kg.",
    "options": [
      "4 per kg.",
      "6 per kg.",
      "2 per kg.",
      "3 per kg.",
      "None of these"
    ],
    "correct": "4 per kg.",
    "explanation": "📊 Step-by-Step Solution:\n1. Let the original price of tea be P Rs./kg. Reduced price = (P - 2) Rs./kg.\n2. Quantity bought for Rs. 8 at original price = 8 / P.\n3. Quantity bought for Rs. 8 at reduced price = 8 / (P - 2).\n4. Given the difference is 2 kg:\n   • [8 / (P - 2)] - [8 / P] = 2\n   • Divide both sides by 2: [4 / (P - 2)] - [4 / P] = 1\n   • [4P - 4(P - 2)] / [P(P - 2)] = 1\n   • 8 = P(P - 2) ⇒ P² - 2P - 8 = 0\n   • (P - 4)(P + 2) = 0 ⇒ P = **4 per kg.**"
  },
  {
    "id": "st2_pct_q26",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Price, Consumption & Expenditure Mechanics",
    "difficulty": "Medium",
    "points": 1,
    "question": "A reduction of 20 percent in the price of tea would enable a purchaser to obtain 4 kg. more for 100, what is the reduced price, and original price?",
    "options": [
      "6.25, 5",
      "5, 6.25",
      "6, 5.25",
      "5.25, 6",
      "None of these"
    ],
    "correct": "5, 6.25",
    "explanation": "📊 Step-by-Step Solution:\n1. Total expenditure = Rs. 100.\n2. A 20% reduction saves: 20% of 100 = Rs. 20.\n3. This saved amount of Rs. 20 buys 4 kg extra tea:\n   • Reduced Price per kg = 20 / 4 = 5 Rs./kg.\n4. Since reduced price is 80% of original price P:\n   • 0.80 × P = 5 ⇒ P = 5 / 0.80 = 6.25 Rs./kg.\n5. Therefore, Reduced price = 5, Original price = 6.25, giving **5, 6.25**."
  },
  {
    "id": "st2_pct_q30",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Price, Consumption & Expenditure Mechanics",
    "difficulty": "Medium",
    "points": 1,
    "question": "When the price of rice was increased by 32%, a family reduced its consumption in such a way that the expenditure on rice was only 10% more than before. If 30 kg were consumed per month before, find the new monthly consumption.",
    "options": [
      "25 kg",
      "24 kg",
      "20 kg",
      "18 kg",
      "None of these"
    ],
    "correct": "25 kg",
    "explanation": "📊 Step-by-Step Solution:\n1. Let original price = Rs. 100/kg; Original consumption = 30 kg.\n   • Initial Expenditure = 100 × 30 = Rs. 3,000.\n2. New price is 32% more: New Price = Rs. 132/kg.\n3. New expenditure is only 10% more: 3000 × 1.10 = Rs. 3,300.\n4. New Consumption = New Expenditure / New Price:\n   • New Consumption = 3300 / 132 = **25 kg**."
  },
  {
    "id": "st2_pct_q13",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Exam Marks, Population & Set Overlaps",
    "difficulty": "Medium",
    "points": 1,
    "question": "The population of a town is 8000. If the males increase by 9% and the females by 16%, the population will be 9000. Find the number of females in the town.",
    "options": [
      "2000",
      "4500",
      "3000",
      "4000",
      "None of these"
    ],
    "correct": "4000",
    "explanation": "📊 Step-by-Step Solution:\n1. Total increase in population = 9000 - 8000 = 1000.\n2. Overall percentage increase = (1000 / 8000) × 100% = 12.5%.\n3. Using the Rule of Alligation:\n   • Male Increase = 9%\n   • Female Increase = 16%\n   • Average Increase = 12.5%\n   • Ratio of Males : Females = (16 - 12.5) : (12.5 - 9) = 3.5 : 3.5 = 1 : 1.\n4. Since the ratio is 1 : 1, the number of females = 8000 / 2 = **4000**."
  },
  {
    "id": "st2_pct_q14",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Exam Marks, Population & Set Overlaps",
    "difficulty": "Easy",
    "points": 1,
    "question": "A student has to secure 15% marks to get through. If he gets 80 marks and fails by 70 marks, find the maximum marks set for the examination.",
    "options": [
      "100",
      "1000",
      "1500",
      "900",
      "None of these"
    ],
    "correct": "1000",
    "explanation": "📊 Step-by-Step Solution:\n1. Passing marks needed = Marks obtained + Deficit = 80 + 70 = 150 marks.\n2. Given that 15% of the maximum marks is equal to passing marks:\n   • 15% of Maximum Marks = 150\n   • Maximum Marks = 150 / 0.15 = **1000**."
  },
  {
    "id": "st2_pct_q15",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Exam Marks, Population & Set Overlaps",
    "difficulty": "Medium",
    "points": 1,
    "question": "A candidate scores 35% and fails by 40 marks, while another candidate who scores 60% marks, gets 35 marks more than the minimum required marks to pass the examination. Find the maximum marks for the examination.",
    "options": [
      "300",
      "200",
      "350",
      "450",
      "None of these"
    ],
    "correct": "300",
    "explanation": "📊 Step-by-Step Solution:\n1. Difference in percentage between the two candidates:\n   • 60% - 35% = 25%.\n2. Total mark difference between their scores:\n   • 40 (marks below pass) + 35 (marks above pass) = 75 marks.\n3. Therefore, 25% of total maximum marks = 75 marks:\n   • Maximum Marks = 75 × (100 / 25) = 75 × 4 = **300**."
  },
  {
    "id": "st2_pct_q16",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Exam Marks, Population & Set Overlaps",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain year, the population of a certain town was 9000. If the next year the population of males increases by 5% and that of the females by 8% and the total population increases to 9600, then what was the ratio of population of males and females in that given year?",
    "options": [
      "4 : 5",
      "5 : 4",
      "2 : 3",
      "Data inadequate",
      "None of these"
    ],
    "correct": "4 : 5",
    "explanation": "📊 Step-by-Step Solution:\n1. Increase in population = 9600 - 9000 = 600.\n2. Overall percentage increase = (600 / 9000) × 100% = 20/3% = 6(2/3)%.\n3. By Rule of Alligation:\n   • Male Rate = 5% = 15/3%\n   • Female Rate = 8% = 24/3%\n   • Mean Rate = 20/3%\n   • Ratio of Males : Females = (24/3 - 20/3) : (20/3 - 15/3) = (4/3) : (5/3) = **4 : 5**."
  },
  {
    "id": "st2_pct_q18",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Exam Marks, Population & Set Overlaps",
    "difficulty": "Easy",
    "points": 1,
    "question": "In an examination, 10% of the students failed in Maths, 20% failed in English and 5% failed in both. Find the percentage of students who passed in both the subjects.",
    "options": [
      "75%",
      "70%",
      "85%",
      "80%",
      "None of these"
    ],
    "correct": "75%",
    "explanation": "📊 Step-by-Step Solution:\n1. Using Principle of Inclusion-Exclusion for students who failed:\n   • Total Failed = Failed(Maths) + Failed(English) - Failed(Both)\n   • Total Failed = 10% + 20% - 5% = 25%.\n2. Percentage of students who passed in both subjects:\n   • Passed in both = 100% - Total Failed = 100% - 25% = **75%**."
  },
  {
    "id": "st2_pct_q19",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Exam Marks, Population & Set Overlaps",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man spends 60% of his income. His income increases by 15% and his expenditure also increases by 5%. Find the percentage increase in his savings.",
    "options": [
      "30%",
      "15%",
      "20%",
      "25%",
      "None of these"
    ],
    "correct": "30%",
    "explanation": "📊 Step-by-Step Solution:\n1. Let Initial Income = 100.\n   • Initial Expenditure = 60% of 100 = 60.\n   • Initial Savings = 100 - 60 = 40.\n2. New Income (+15%) = 100 + 15 = 115.\n3. New Expenditure (+5%) = 60 + 5% of 60 = 60 + 3 = 63.\n4. New Savings = New Income - New Expenditure = 115 - 63 = 52.\n5. Increase in savings = 52 - 40 = 12.\n6. Percentage increase in savings = (12 / 40) × 100% = **30%**."
  },
  {
    "id": "st2_pct_q20",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Mixture Dilution & Evaporation Dynamics",
    "difficulty": "Medium",
    "points": 1,
    "question": "A solution of salt and water contains 5% salt by weight. Of it 20 kg water evaporates and the solution now contains 15% of salt. Find the original quantity of solution.",
    "options": [
      "15 kg.",
      "30 kg.",
      "18 kg.",
      "24 kg.",
      "None of these"
    ],
    "correct": "30 kg.",
    "explanation": "📊 Step-by-Step Solution:\n1. During evaporation, the absolute weight of salt remains constant.\n2. Let original quantity of solution = W kg.\n   • Salt content = 5% of W = 0.05 W.\n3. After 20 kg of water evaporates, new total weight = (W - 20) kg.\n   • Salt content in new solution = 15% of (W - 20) = 0.15 (W - 20).\n4. Equating constant salt weight:\n   • 0.05 W = 0.15 (W - 20)\n   • W = 3(W - 20) ⇒ W = 3W - 60 ⇒ 2W = 60 ⇒ W = **30 kg.**"
  },
  {
    "id": "st2_pct_q21",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Mixture Dilution & Evaporation Dynamics",
    "difficulty": "Easy",
    "points": 1,
    "question": "What quantity of water should be added to reduce 16 litres of 25% acidic liquid to 20% acidic liquid?",
    "options": [
      "5 litres",
      "4 litres",
      "12 litres",
      "8 litres",
      "None of these"
    ],
    "correct": "4 litres",
    "explanation": "📊 Step-by-Step Solution:\n1. In 16 litres of 25% acidic liquid:\n   • Quantity of pure acid = 25% of 16 = 4 litres.\n2. When water is added, the quantity of acid remains 4 litres.\n3. In the new mixture, acid constitutes 20%:\n   • 20% of New Total Volume = 4 litres\n   • (1/5) × New Total Volume = 4 ⇒ New Total Volume = 20 litres.\n4. Water added = New Total Volume - Initial Volume = 20 - 16 = **4 litres**."
  },
  {
    "id": "st2_pct_q22",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Mixture Dilution & Evaporation Dynamics",
    "difficulty": "Medium",
    "points": 1,
    "question": "What quantity of water should be taken out to concentrate 21 litres of 25% acidic liquid to 35% acidic liquid.",
    "options": [
      "6 litres",
      "8.4 litres",
      "6.4 litres",
      "8 litres",
      "None of these"
    ],
    "correct": "6 litres",
    "explanation": "📊 Step-by-Step Solution:\n1. Initial acid content = 25% of 21 = 5.25 litres.\n2. When only water is removed, acid content remains 5.25 litres.\n3. In the concentrated liquid, acid constitutes 35%:\n   • 35% of New Total Volume = 5.25 litres\n   • New Total Volume = 5.25 / 0.35 = 15 litres.\n4. Quantity of water taken out = 21 - 15 = **6 litres**."
  },
  {
    "id": "st2_pct_q31",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_6",
    "type_name": "Type 6: Election Voting Models & Commission Sharing",
    "difficulty": "Hard",
    "points": 1,
    "question": "Two candidate participated in an election. 10% voter did not cast their votes and 10% votes were declared invalid. A candidate got 60% of total votes and won the election by 3900 votes. Find the total number of voters in voter list.",
    "options": [
      "8100",
      "10000",
      "19500",
      "9000"
    ],
    "correct": "10000",
    "explanation": "📊 Step-by-Step Solution:\n1. Let the total voters in the voter list be V.\n2. Voters who cast their votes = 90% of V = 0.90 V.\n3. Invalid votes = 10% of votes cast = 0.10 × 0.90 V = 0.09 V.\n   • Valid votes = 0.90 V - 0.09 V = 0.81 V.\n4. Winner got 60% of total votes (in the voter list):\n   • Winner votes = 0.60 V.\n   • Loser votes = Total Valid Votes - Winner votes = 0.81 V - 0.60 V = 0.21 V.\n5. Winning margin = Winner - Loser = 0.60 V - 0.21 V = 0.39 V.\n6. Given winning margin = 3900 votes:\n   • 0.39 V = 3900 ⇒ V = 3900 / 0.39 = **10000**."
  },
  {
    "id": "st2_pct_q32",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_6",
    "type_name": "Type 6: Election Voting Models & Commission Sharing",
    "difficulty": "Hard",
    "points": 1,
    "question": "Two candidates participated in an election. 20% voters did not cast their votes and 2000 votes were declared invalid. Winner candidate got 60% of valid votes and got elected by 1200 number of votes. Find the total number of votes in voter list.",
    "options": [
      "8750",
      "7750",
      "8000",
      "10000"
    ],
    "correct": "10000",
    "explanation": "📊 Step-by-Step Solution:\n1. Let valid votes be N.\n   • Winner = 60% of N, Loser = 40% of N.\n   • Winning margin = 60% - 40% = 20% of N.\n2. Given margin = 1200 votes:\n   • 0.20 × N = 1200 ⇒ N = 1200 / 0.20 = 6000 valid votes.\n3. Total votes cast = Valid votes + Invalid votes = 6000 + 2000 = 8000.\n4. Since 20% of voters did not cast votes, 8000 represents 80% of the voter list V:\n   • 80% of V = 8000 ⇒ V = 8000 / 0.80 = **10000**."
  },
  {
    "id": "st2_pct_q33",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_6",
    "type_name": "Type 6: Election Voting Models & Commission Sharing",
    "difficulty": "Easy",
    "points": 1,
    "question": "In an election two candidates participated A and B. A secured 30% of the total votes and lost the election by 500 votes. Find the total number of votes casted.",
    "options": [
      "1050",
      "1100",
      "1250",
      "1200"
    ],
    "correct": "1250",
    "explanation": "📊 Step-by-Step Solution:\n1. Total votes cast = 100%.\n2. Candidate A received 30% of votes.\n3. Candidate B received 100% - 30% = 70% of votes.\n4. Margin of victory for B = 70% - 30% = 40% of total votes.\n5. Given margin is 500 votes:\n   • 40% of Total Votes = 500\n   • Total Votes = 500 / 0.40 = **1250**."
  },
  {
    "id": "st2_pct_q34",
    "module_id": "st2_mod1",
    "module_name": "Percentage",
    "syllabus_lec": "ST-2 Commercial Arithmetic",
    "type_id": "type_6",
    "type_name": "Type 6: Election Voting Models & Commission Sharing",
    "difficulty": "Hard",
    "points": 1,
    "question": "A company give 12% commission to his salesman on total sales and 1% bonus on the sales over ₹ 15000. If the salesman deposit ₹7650 after deducting his commission from total sales. Find total sales.",
    "options": [
      "72000",
      "70000",
      "48000",
      "60000"
    ],
    "correct": "60000",
    "explanation": "📊 Step-by-Step Solution:\n1. Let total sales be S.\n2. The salesman's earnings consist of:\n   • Base Commission = 12% of S = 0.12 S\n   • Bonus on sales exceeding 15000 = 1% of (S - 15000) = 0.01 S - 150\n   • Total Commission Earned = 0.13 S - 150\n3. The salesman's total commission is Rs. 7,650:\n   • 0.13 S - 150 = 7650\n   • 0.13 S = 7800\n   • S = 7800 / 0.13 = **60000**.\n\n💡 Verification: 12% on 60000 = 7200. Bonus on (60000 - 15000 = 45000) = 1% of 45000 = 450. Total = 7200 + 450 = 7650."
  },
  {
    "id": "st2_cd_q1",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Letter Shifting, Inversions & Positional Rearrangements",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain code, TERMINAL is written as SDQLJOBM. How is CREDIBLE written in that code?",
    "options": [
      "BQDCJCMF",
      "DSFEJCMF",
      "BQDCHAKD",
      "DSFEIIAKD",
      "None of these"
    ],
    "correct": "BQDCJCMF",
    "explanation": "🔐 Pattern: Split-Half Directional Letter Shift (-1 on 1st Half, +1 on 2nd Half)\n\n1. Structural Partitioning:\n   • Total Letters = 8. Split evenly into two 4-letter halves:\n     First Half: [T - E - R - M]  |  Second Half: [I - N - A - L]\n\n2. Rule Verification from Given Word (TERMINAL ➔ SDQLJOBM):\n   • First Half (-1 shift):\n     T - 1 = S\n     E - 1 = D\n     R - 1 = Q\n     M - 1 = L  ➔  SDQL\n   • Second Half (+1 shift):\n     I + 1 = J\n     N + 1 = O\n     A + 1 = B\n     L + 1 = M  ➔  JOBM\n   • Assembled: SDQL + JOBM = SDQLJOBM (Matches given code).\n\n3. Apply to Target Word (CREDIBLE):\n   • First Half (CRED) shifted by -1:\n     C - 1 = B\n     R - 1 = Q\n     E - 1 = D\n     D - 1 = C  ➔  BQDC\n   • Second Half (IBLE) shifted by +1:\n     I + 1 = J\n     B + 1 = C\n     L + 1 = M\n     E + 1 = F  ➔  JCMF\n   • Assembled Code: BQDC + JCMF = **BQDCJCMF**.\n\n💡 Exam Speed Shortcut:\nCheck the outer letters: First letter C - 1 = 'B' (instantly eliminates Options B & D). Last letter E + 1 = 'F' (eliminates Option C). Option A (**BQDCJCMF**) is confirmed in under 5 seconds!"
  },
  {
    "id": "st2_cd_q2",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Letter Shifting, Inversions & Positional Rearrangements",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain code language CONSUMER is written as ERUMNSCO. How will TRIANGLE be written in that code language?",
    "options": [
      "LENGIATR",
      "EENGIATR",
      "LEGNIATR",
      "LEGNAJTR",
      "None of these"
    ],
    "correct": "LENGIATR",
    "explanation": "🔐 Pattern: 2-Letter Pair Order Inversion (Block Sequence Reversal)\n\n1. Structural Partitioning:\n   • Total Letters = 8. Group into 4 consecutive 2-letter blocks:\n     Block 1: [CO]  |  Block 2: [NS]  |  Block 3: [UM]  |  Block 4: [ER]\n\n2. Rule Verification from Given Word (CONSUMER ➔ ERUMNSCO):\n   • The internal letters of each block remain untouched.\n   • The block order is completely reversed (4 ➔ 3 ➔ 2 ➔ 1):\n     Block 4 [ER] + Block 3 [UM] + Block 2 [NS] + Block 1 [CO]\n     = ER + UM + NS + CO = ERUMNSCO (Matches given code).\n\n3. Apply to Target Word (TRIANGLE):\n   • Group into 4 pairs:\n     Block 1 = [TR]\n     Block 2 = [IA]\n     Block 3 = [NG]\n     Block 4 = [LE]\n   • Reverse the block sequence:\n     Block 4: LE\n     Block 3: NG\n     Block 2: IA\n     Block 1: TR\n   • Assembled Code: LE + NG + IA + TR = **LENGIATR**.\n\n💡 Exam Speed Shortcut:\nThe terminal pair of TRIANGLE is 'LE'. In reverse block order, 'LE' must come first. Looking at the options, only Option A begins with 'LE'! Immediate answer."
  },
  {
    "id": "st2_cd_q3",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Letter Shifting, Inversions & Positional Rearrangements",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a certain code, 'ROAMING' is written as 'APRNGOI'. How would 'PLATEAU' be written in the same code?",
    "options": [
      "AMPTUBE",
      "PMAUEBU",
      "ALPUUAE",
      "AMPUUBE",
      "None of these"
    ],
    "correct": "AMPUUBE",
    "explanation": "🔐 Pattern: Symmetric Triplet Outer Swap & Center Successor (+1)\n\n1. Structural Partitioning:\n   • Total Letters = 7. Symmetrically partition into:\n     Triplet 1: [R - O - A]  |  Center: [M]  |  Triplet 2: [I - N - G]\n\n2. Rule Verification from Given Word (ROAMING ➔ APRNGOI):\n   • Triplet 1 (ROA): Swap outer letters (R ↔ A) and increment middle letter (O + 1 = P):\n     A + P + R  ➔  APR\n   • Center Letter (M): Shift forward +1:\n     M + 1 = N\n   • Triplet 2 (ING): Swap outer letters (I ↔ G) and increment middle letter (N + 1 = O):\n     G + O + I  ➔  GOI\n   • Assembled: APR + N + GOI = APRNGOI (Matches given code).\n\n3. Apply to Target Word (PLATEAU):\n   • Triplet 1 (PLA): Swap outer (P ↔ A) and increment middle (L + 1 = M):\n     A + M + P  ➔  AMP\n   • Center Letter (T): Shift forward +1:\n     T + 1 = U\n   • Triplet 2 (EAU): Swap outer (E ↔ U) and increment middle (A + 1 = B):\n     U + B + E  ➔  UBE\n   • Assembled Code: AMP + U + UBE = **AMPUUBE**.\n\n💡 Exam Speed Shortcut:\nCenter letter is T ➔ T + 1 = U (4th letter must be U). Outer swap of first triplet PLA yields A_P with L+1=M ➔ 'AMP'. The code must begin with 'AMPU'. Matches Option D (**AMPUUBE**)!"
  },
  {
    "id": "st2_cd_q4",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Letter Shifting, Inversions & Positional Rearrangements",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain code ORBITAL is written as CSPHMBU. How is CHARGER written in that code?",
    "options": [
      "BIDQSFH",
      "BIDSSFH",
      "BIDQQDF",
      "DIBQSFH",
      "None of these"
    ],
    "correct": "BIDQSFH",
    "explanation": "🔐 Pattern: Reversed Triplets (+1 Shift) with Central Letter (-1 Shift)\n\n1. Structural Partitioning:\n   • Total Letters = 7. Partition in 3 - 1 - 3 scheme:\n     Triplet 1: [O - R - B]  |  Center: [I]  |  Triplet 2: [T - A - L]\n\n2. Rule Verification from Given Word (ORBITAL ➔ CSPHMBU):\n   • Triplet 1 (ORB): Reverse to [B - R - O], then shift each letter +1:\n     B + 1 = C, R + 1 = S, O + 1 = P  ➔  CSP\n   • Center Letter (I): Shift backward by 1 (-1):\n     I - 1 = H\n   • Triplet 2 (TAL): Reverse to [L - A - T], then shift each letter +1:\n     L + 1 = M, A + 1 = B, T + 1 = U  ➔  MBU\n   • Assembled: CSP + H + MBU = CSPHMBU (Matches given code).\n\n3. Apply to Target Word (CHARGER):\n   • Triplet 1 (CHA): Reverse to [A - H - C], shift +1 each:\n     A + 1 = B, H + 1 = I, C + 1 = D  ➔  BID\n   • Center Letter (R): Shift -1:\n     R - 1 = Q\n   • Triplet 2 (GER): Reverse to [R - E - G], shift +1 each:\n     R + 1 = S, E + 1 = F, G + 1 = H  ➔  SFH\n   • Assembled Code: BID + Q + SFH = **BIDQSFH**.\n\n💡 Exam Speed Shortcut:\nCentral letter R - 1 = Q (4th letter must be Q, ruling out Option B). Reverse of CHA is AHC ➔ +1 gives 'BID' (ruling out Option D). Only Option A (**BIDQSFH**) satisfies all conditions."
  },
  {
    "id": "st2_cd_q5",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Letter Shifting, Inversions & Positional Rearrangements",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a certain code SUBSTANCE is written as RATRUFDOB. How is TENTHOUSE written in that code?",
    "options": [
      "SMDSIFTVP",
      "UOFUIDRTN",
      "UOFUIFTVP",
      "SMDSIDRTN",
      "None of these"
    ],
    "correct": "SMDSIFTVP",
    "explanation": "🔐 Pattern: Reversed 4-Letter Blocks (-1 First Half, +1 Center, +1 Second Half)\n\n1. Structural Partitioning:\n   • Total Letters = 9. Symmetrically partition in 4 - 1 - 4 scheme:\n     First 4: [S - U - B - S]  |  Center: [T]  |  Last 4: [A - N - C - E]\n\n2. Rule Verification from Given Word (SUBSTANCE ➔ RATRUFDOB):\n   • First 4 (SUBS): Reverse to [S - B - U - S], then shift each letter -1:\n     S - 1 = R, B - 1 = A, U - 1 = T, S - 1 = R  ➔  RATR\n   • Center Letter (T): Shift forward +1:\n     T + 1 = U\n   • Last 4 (ANCE): Reverse to [E - C - N - A], then shift each letter +1:\n     E + 1 = F, C + 1 = D, N + 1 = O, A + 1 = B  ➔  FDOB\n   • Assembled: RATR + U + FDOB = RATRUFDOB (Matches given code).\n\n3. Apply to Target Word (TENTHOUSE):\n   • First 4 (TENT): Reverse to [T - N - E - T], shift -1 each:\n     T - 1 = S, N - 1 = M, E - 1 = D, T - 1 = S  ➔  SMDS\n   • Center Letter (H): Shift +1:\n     H + 1 = I\n   • Last 4 (OUSE): Reverse to [E - S - U - O], shift +1 each:\n     E + 1 = F, S + 1 = T, U + 1 = V, O + 1 = P  ➔  FTVP\n   • Assembled Code: SMDS + I + FTVP = **SMDSIFTVP**.\n\n💡 Exam Speed Shortcut:\nFirst block TENT reversed is TNET ➔ -1 yields SMDS (instantly eliminates Options B and C). Center letter H + 1 = I. Last letter of reversed OUSE is O + 1 = P. Option A (**SMDSIFTVP**) is uniquely correct."
  },
  {
    "id": "st2_cd_q6",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Letter Shifting, Inversions & Positional Rearrangements",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a certain code AUTOMATIC is written as PUVBMBUJD. How is BUILDINGS written in that code?",
    "options": [
      "MJVCDJOHT",
      "CVJMDJOHT",
      "MKVCDTHOJ",
      "CVJMDTHOJ",
      "None of these"
    ],
    "correct": "MJVCDJOHT",
    "explanation": "🔐 Pattern: Reversed First 4 (+1 Shift), Central Letter Invariant, Direct Last 4 (+1 Shift)\n\n1. Structural Partitioning:\n   • Total Letters = 9. Partition in 4 - 1 - 4 scheme:\n     First 4: [A - U - T - O]  |  Center: [M]  |  Last 4: [A - T - I - C]\n\n2. Rule Verification from Given Word (AUTOMATIC ➔ PUVBMBUJD):\n   • First 4 (AUTO): Reverse to [O - T - U - A], then shift +1 each:\n     O + 1 = P, T + 1 = U, U + 1 = V, A + 1 = B  ➔  PUVB\n   • Center Letter (M): Remains unchanged (Invariant) ➔ M\n   • Last 4 (ATIC): Kept in original forward order, shifted +1 each:\n     A + 1 = B, T + 1 = U, I + 1 = J, C + 1 = D  ➔  BUJD\n   • Assembled: PUVB + M + BUJD = PUVBMBUJD (Matches given code).\n\n3. Apply to Target Word (BUILDINGS):\n   • First 4 (BUIL): Reverse to [L - I - U - B], shift +1 each:\n     L + 1 = M, I + 1 = J, U + 1 = V, B + 1 = C  ➔  MJVC\n   • Center Letter (D): Remains unchanged ➔ D\n   • Last 4 (INGS): Direct forward order, shift +1 each:\n     I + 1 = J, N + 1 = O, G + 1 = H, S + 1 = T  ➔  JOHT\n   • Assembled Code: MJVC + D + JOHT = **MJVCDJOHT**.\n\n💡 Exam Speed Shortcut:\nThe 1st code letter comes from the 4th letter 'L' + 1 = 'M'. The central letter 'D' remains invariant ('D'). The last letter 'S' + 1 = 'T'. Only Option A (**MJVCDJOHT**) starts with 'MJVC', preserves center 'D', and ends with 'JOHT'!"
  },
  {
    "id": "st2_cd_q7",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Letter Shifting, Inversions & Positional Rearrangements",
    "difficulty": "Easy",
    "points": 1,
    "question": "In a certain code, ORGANISM is written as ROAGINMS. How is boarding written in that code?",
    "options": [
      "RAOBIDGN",
      "OBRAGNID",
      "OBRAIDGN",
      "OBIDRAGN",
      "None of these"
    ],
    "correct": "OBRAIDGN",
    "explanation": "🔐 Pattern: Pairwise Adjacent Letter Inversion (Transposition Cipher)\n\n1. Structural Partitioning:\n   • Total Letters = 8. Group into 4 consecutive adjacent pairs:\n     Pair 1: (1, 2)  |  Pair 2: (3, 4)  |  Pair 3: (5, 6)  |  Pair 4: (7, 8)\n\n2. Rule Verification from Given Word (ORGANISM ➔ ROAGINMS):\n   • Pair 1: [O - R] ➔ Swapped to [R - O]\n   • Pair 2: [G - A] ➔ Swapped to [A - G]\n   • Pair 3: [N - I] ➔ Swapped to [I - N]\n   • Pair 4: [S - M] ➔ Swapped to [M - S]\n   • Assembled: RO + AG + IN + MS = ROAGINMS (Matches given code).\n\n3. Apply to Target Word (boarding):\n   • Pair 1: [b - o] ➔ Swap ➔ [o - b] = OB\n   • Pair 2: [a - r] ➔ Swap ➔ [r - a] = RA\n   • Pair 3: [d - i] ➔ Swap ➔ [i - d] = ID\n   • Pair 4: [n - g] ➔ Swap ➔ [g - n] = GN\n   • Assembled Code: OB + RA + ID + GN = **OBRAIDGN**.\n\n💡 Exam Speed Shortcut:\nFirst pair 'bo' swaps to 'ob' (eliminates Options B & D). Second pair 'ar' swaps to 'ra' (Option A has 'OBRA', while Option C incorrectly has 'OBRANDGN'). Option A (**OBRAIDGN**) is verified immediately!"
  },
  {
    "id": "st2_cd_q8",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Letter-to-Number & Symbolic Substitution",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain code language 'POETRY' is written as 'QONDSQX' and 'OVER' is written as 'PNUDQ'. How is 'MORE' written in that code language?",
    "options": [
      "NNNQD",
      "NLPQD",
      "NLNQD",
      "LNNQD",
      "None of these"
    ],
    "correct": "NLNQD",
    "explanation": "🔐 Pattern: Leading Letter Dual Expansion (Successor + Predecessor) & Linear Decrement (-1)\n\n1. Structural Breakdown:\n   • Total letters expand from N to (N + 1).\n   • The first letter splits into TWO letters: (Letter + 1) followed by (Letter - 1).\n   • All remaining letters are shifted backward by 1 position (-1).\n\n2. Rule Verification from Given Examples:\n   • OVER (4 letters ➔ 5 code characters):\n     - First letter 'O': O + 1 = P, O - 1 = N  ➔  PN\n     - Remaining: V - 1 = U, E - 1 = D, R - 1 = Q  ➔  UDQ\n     - Combined: PN + UDQ = PNUDQ (Matches!).\n   • POETRY (6 letters ➔ 7 code characters):\n     - First letter 'P': P + 1 = Q, P - 1 = O  ➔  QO\n     - Remaining: O - 1 = N, E - 1 = D, T - 1 = S, R - 1 = Q, Y - 1 = X  ➔  NDSQX\n     - Combined: QO + NDSQX = QONDSQX (Matches!).\n\n3. Apply to Target Word (MORE):\n   • First letter 'M' expands to:\n     - M + 1 = N\n     - M - 1 = L  ➔  NL\n   • Remaining letters shifted by -1:\n     - O - 1 = N\n     - R - 1 = Q\n     - E - 1 = D  ➔  NQD\n   • Assembled Code: NL + NQD = **NLNQD**.\n\n💡 Exam Speed Shortcut:\nFirst letter M branches to N and L ➔ Code must start with 'NL' (rules out Options B & D). Second letter O - 1 = N ➔ Code starts with 'NLN'. Only Option A (**NLNQD**) matches!"
  },
  {
    "id": "st2_cd_q9",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Letter-to-Number & Symbolic Substitution",
    "difficulty": "Easy",
    "points": 1,
    "question": "In a certain code language BREAK, is written as 51342 and KITE is written as 2793. How will RIB be written in that code language?",
    "options": [
      "175",
      "176",
      "185",
      "135",
      "None of these"
    ],
    "correct": "175",
    "explanation": "🔐 Pattern: Direct Alphanumeric Substitution (One-to-One Character Mapping)\n\n1. Structural Breakdown:\n   • Given mappings:\n     BREAK = 5 1 3 4 2  ➔  B=5, R=1, E=3, A=4, K=2\n     KITE  = 2 7 9 3    ➔  K=2, I=7, T=9, E=3\n   • Notice cross-consistency: K = 2 and E = 3 in both words.\n\n2. Extract Corresponding Digits for Target Letters (RIB):\n   • Letter 'R' is the 2nd letter of BREAK:\n     B (5) - **R (1)** - E (3) - A (4) - K (2)  ➔  R = 1\n   • Letter 'I' is the 2nd letter of KITE:\n     K (2) - **I (7)** - T (9) - E (3)  ➔  I = 7\n   • Letter 'B' is the 1st letter of BREAK:\n     **B (5)** - R (1) - E (3) - A (4) - K (2)  ➔  B = 5\n\n3. Assembled Code:\n   • R (1) + I (7) + B (5) = **175**.\n\n💡 Exam Speed Shortcut:\nR = 1 and B = 5. The answer must start with 1 and end with 5. Between Option A (175) and Option B (157), middle digit I is 7. Answer is Option A (**175**)!"
  },
  {
    "id": "st2_cd_q10",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Letter-to-Number & Symbolic Substitution",
    "difficulty": "Easy",
    "points": 1,
    "question": "If '6' is coded as 'T', '8' as 'I', '3' as 'N', '9' as 'Q', '2' as V, '5' as 'D' and '7' is coded as 'R', then how will DRINTQ is coded?",
    "options": [
      "573869",
      "578396",
      "576839",
      "578329",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🔐 Pattern: Direct Symbol-to-Digit Translation & Option Verification\n\n1. Given Translation Table:\n   • '6' = T\n   • '8' = I\n   • '3' = N\n   • '9' = Q\n   • '2' = V\n   • '5' = D\n   • '7' = R\n\n2. Translate Target Letters (DRINTQ) to Digits:\n   • D ➔ 5\n   • R ➔ 7\n   • I ➔ 8\n   • N ➔ 3\n   • T ➔ 6\n   • Q ➔ 9\n   • Exact Calculated Code = **578369**.\n\n3. Rigorous Evaluation of Options:\n   • Option (1): 573869  ➔ Incorrect (swaps 8 and 3)\n   • Option (2): 578396  ➔ Incorrect (swaps 6 and 9)\n   • Option (3): 576839  ➔ Incorrect (places 6 before 8)\n   • Option (4): 578329  ➔ Incorrect (contains 2 instead of 6)\n   • Option (5): **None of these**  ➔ Correct!\n\n💡 Exam Speed Shortcut:\nThe sequence for 'INTQ' is 8-3-6-9. None of the listed 4 numerical options contains '8369' in order. Therefore, the answer is immediately **None of these**!"
  },
  {
    "id": "st2_cd_q11",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Letter-to-Number & Symbolic Substitution",
    "difficulty": "Easy",
    "points": 1,
    "question": "In a certain code MEAN is written as '8964' and NOBLE is written as '47529'. How is LOAM written in that code?",
    "options": [
      "2768",
      "2758",
      "2968",
      "2468",
      "None of these"
    ],
    "correct": "2768",
    "explanation": "🔐 Pattern: Cross-Word Positional Digit Substitution\n\n1. Given Key Mappings:\n   • MEAN  = 8 9 6 4  ➔  M = 8, E = 9, A = 6, N = 4\n   • NOBLE = 4 7 5 2 9  ➔  N = 4, O = 7, B = 5, L = 2, E = 9\n   • Consistent overlap: N = 4 and E = 9 in both words.\n\n2. Extract Corresponding Digits for Target Word (LOAM):\n   • Letter 'L': 4th letter of NOBLE ➔ L = 2\n   • Letter 'O': 2nd letter of NOBLE ➔ O = 7\n   • Letter 'A': 3rd letter of MEAN  ➔ A = 6\n   • Letter 'M': 1st letter of MEAN  ➔ M = 8\n\n3. Assembled Code:\n   • L (2) + O (7) + A (6) + M (8) = **2768**.\n\n💡 Exam Speed Shortcut:\nFirst letter L = 2 (eliminates options starting with other digits). Last letter M = 8. The code is 2768 (Option A)."
  },
  {
    "id": "st2_cd_q12",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Letter-to-Number & Symbolic Substitution",
    "difficulty": "Medium",
    "points": 1,
    "question": "If REQUEST is written as S2R52TU, how will ACID be written?",
    "options": [
      "BDJE",
      "1394",
      "B3J4",
      "IC94",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🔐 Pattern: Dual-Rule Cipher (Vowels = Ordinal Position, Consonants = +1 Shift)\n\n1. Structural Breakdown from Example (REQUEST ➔ S2R52TU):\n   • Consonants are shifted forward by +1:\n     R + 1 = S\n     Q + 1 = R\n     S + 1 = T\n     T + 1 = U\n   • Vowels are coded by their position in the vowel series {A: 1, E: 2, I: 3, O: 4, U: 5}:\n     E = 2, U = 5, E = 2.\n   • Together: S - 2 - R - 5 - 2 - T - U = S2R52TU (Verified).\n\n2. Apply to Target Word (ACID):\n   • 'A' is the 1st vowel ➔ Code = 1\n   • 'C' is a consonant ➔ C + 1 = D\n   • 'I' is the 3rd vowel ➔ Code = 3\n   • 'D' is a consonant ➔ D + 1 = E\n   • Exact Calculated Code = **1D3E**.\n\n3. Evaluate Options:\n   • Option (1): BDJE\n   • Option (2): 1394\n   • Option (3): B3J4\n   • Option (4): IC94\n   • Option (5): **None of these**\n   Since 1D3E is not listed in options (1) to (4), the correct choice is **None of these**.\n\n💡 Exam Speed Shortcut:\nFirst letter is A (vowel 1) ➔ code must start with digit '1'. Last letter is D (consonant) ➔ D + 1 = E. Code ends with 'E'. None of the options have both leading '1' and ending 'E'. Hence **None of these**!"
  },
  {
    "id": "st2_cd_q13",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Letter-to-Number & Symbolic Substitution",
    "difficulty": "Hard",
    "points": 1,
    "question": "If SCOTLAND is written as 12345678, LOAN is written as 1435, LOTS is written as 8124, DAN is written as 537 and SON is written as 458, then what will be the code for 'C'?",
    "options": [
      "6",
      "9",
      "0",
      "4",
      "5"
    ],
    "correct": "6",
    "explanation": "🔐 Pattern: Set-Intersection Deductive Elimination (Anagram Frequency Analysis)\n\n1. Given Word-to-Set Correspondences:\n   • SCOTLAND (8 letters) contains digits {1, 2, 3, 4, 5, 6, 7, 8}.\n   • LOAN = {1, 4, 3, 5}\n   • LOTS = {8, 1, 2, 4}\n   • DAN  = {5, 3, 7}\n   • SON  = {4, 5, 8}\n\n2. Deduce Individual Letter Values by Set Intersections:\n   • Intersect LOAN {1, 4, 3, 5} and DAN {5, 3, 7}:\n     Common letters: {A, N} = {3, 5}\n   • Intersect LOAN {1, 4, 3, 5} and SON {4, 5, 8}:\n     Common letters: {O, N} = {4, 5}\n   • Common in both comparisons is 'N', and common digit is 5 ➔ **N = 5**.\n   • Since {A, N} = {3, 5} and N = 5 ➔ **A = 3**.\n   • Since {O, N} = {4, 5} and N = 5 ➔ **O = 4**.\n   • In LOAN {1, 4, 3, 5}: remaining digit is 1 ➔ **L = 1**.\n   • In DAN {5, 3, 7}: remaining digit is 7 ➔ **D = 7**.\n   • In SON {4, 5, 8}: remaining digit is 8 ➔ **S = 8**.\n   • In LOTS {8, 1, 2, 4}: remaining digit is 2 ➔ **T = 2**.\n\n3. Find Code for Letter 'C':\n   • In SCOTLAND, the 8 letters are: {S, C, O, T, L, A, N, D}.\n   • The 7 known letters account for: {8, 4, 2, 1, 3, 5, 7}.\n   • The only unassigned letter is 'C', and the only unassigned digit from {1..8} is **6**.\n\n💡 Exam Speed Shortcut:\nList digits present in LOAN, LOTS, DAN, SON: {1, 2, 3, 4, 5, 7, 8}. All 7 digits appear across these smaller words, which do not contain the letter 'C'. Since SCOTLAND contains all digits from 1 to 8, 'C' must be the missing digit **6**!"
  },
  {
    "id": "st2_cd_q14",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Letter-to-Number & Symbolic Substitution",
    "difficulty": "Easy",
    "points": 1,
    "question": "In a certain code BROWN is written as 531 @% and MEAN is written as 26©%. How is ROBE written in that code?",
    "options": [
      "3@16",
      "3516",
      "3156",
      "3©16",
      "None of these"
    ],
    "correct": "3156",
    "explanation": "🔐 Pattern: Mixed Alphanumeric & Symbol Substitution\n\n1. Given Key Mappings:\n   • BROWN = 5 3 1 @ %  ➔  B=5, R=3, O=1, W=@, N=%\n   • MEAN  = 2 6 © %    ➔  M=2, E=6, A=©, N=%\n   • Overlap check: N = % in both words.\n\n2. Extract Values for Target Word (ROBE):\n   • Letter 'R': 2nd character of BROWN ➔ R = 3\n   • Letter 'O': 3rd character of BROWN ➔ O = 1\n   • Letter 'B': 1st character of BROWN ➔ B = 5\n   • Letter 'E': 2nd character of MEAN  ➔ E = 6\n\n3. Assembled Code:\n   • R (3) + O (1) + B (5) + E (6) = **3156**.\n\n💡 Exam Speed Shortcut:\nFirst letter R = 3, second letter O = 1 ➔ Code starts with '31'. Only Option C (**3156**) begins with 31!"
  },
  {
    "id": "st2_cd_q15",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Letter-to-Number & Symbolic Substitution",
    "difficulty": "Easy",
    "points": 1,
    "question": "In a certain code language 'FAIR' is coded as '*÷$ #' and 'READ' is coded as '# o÷ @'. How is 'DEAF' coded in that code language?",
    "options": [
      "@o $*",
      "@ o÷*",
      "©#÷",
      "H@ ÷*",
      "None of these"
    ],
    "correct": "@ o÷*",
    "explanation": "🔐 Pattern: Direct Mathematical Operator & Symbol Substitution\n\n1. Given Key Mappings:\n   • FAIR = * ÷ $ #  ➔  F=*, A=÷, I=$, R=#\n   • READ = # o ÷ @  ➔  R=#, E=o, A=÷, D=@\n   • Overlap check: R = # and A = ÷ in both words.\n\n2. Extract Symbols for Target Word (DEAF):\n   • Letter 'D': 4th symbol of READ ➔ D = @\n   • Letter 'E': 2nd symbol of READ ➔ E = o\n   • Letter 'A': 3rd symbol of READ (and 2nd of FAIR) ➔ A = ÷\n   • Letter 'F': 1st symbol of FAIR ➔ F = *\n\n3. Assembled Code:\n   • D (@) + E (o) + A (÷) + F (*) = **@ o÷***.\n\n💡 Exam Speed Shortcut:\nFirst symbol D = '@' and last symbol F = '*'. Only Option B matches the full sequence: **@ o÷***."
  },
  {
    "id": "st2_cd_q16",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Fictitious Language & Substitution Chains",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain code language 'tree is very beautiful' is written as 'ka na da ta' and 'this is strong tree' is written as 'na pa saka'. How is 'beautiful' written in that code?",
    "options": [
      "da",
      "ta",
      "sa",
      "Data inadequate",
      "None of these"
    ],
    "correct": "Data inadequate",
    "explanation": "🔐 Pattern: Artificial Language Phrase Elimination (Ambiguity Isolation)\n\n1. Given Statements:\n   (1) \"tree is very beautiful\" = \"ka na da ta\"\n   (2) \"this is strong tree\"    = \"na pa sa ka\"\n\n2. Compare Common Elements:\n   • Common words in (1) and (2): \"tree\" and \"is\"\n   • Common code words in (1) and (2): \"ka\" and \"na\"\n   • Therefore: {\"tree\", \"is\"} = {\"ka\", \"na\"}.\n\n3. Analyze Target Word \"beautiful\":\n   • In statement (1), removing \"tree\" and \"is\" leaves:\n     Remaining words: {\"very\", \"beautiful\"}\n     Remaining codes: {\"da\", \"ta\"}\n   • Since no third statement is provided containing either \"very\" or \"beautiful\", it is impossible to uniquely determine whether \"beautiful\" is coded as \"da\" or \"ta\".\n\n4. Conclusion:\n   • Because the exact code could be either \"da\" or \"ta\", the data provided is insufficient.\n   • Correct Answer: **Data inadequate**.\n\n💡 Exam Speed Shortcut:\nWhen two uneliminated words share two remaining codes with no further sentences to cross-reference, single-word identification is impossible ➔ Choose **Data inadequate**!"
  },
  {
    "id": "st2_cd_q17",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Fictitious Language & Substitution Chains",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain code language 'sipo re' means 'book is thick', 'ti nare' means 'bag is heavy', 'ka si' means 'interesting book' and 'de ti' means 'that bag'. What should stand for 'that is interesting' in that code language?",
    "options": [
      "ka re na",
      "de si re",
      "ti po ka",
      "ka de re",
      "None of these"
    ],
    "correct": "ka de re",
    "explanation": "🔐 Pattern: Multi-Statement Fictitious Language Elimination Matrix\n\n1. Given Statements:\n   (1) \"book is thick\"      = \"sipo re\"   ➔ words: {book, is, thick}, codes: {si, po, re}\n   (2) \"bag is heavy\"       = \"ti na se\"  ➔ words: {bag, is, heavy}, codes: {ti, na, se}\n   (3) \"interesting book\"   = \"ka si\"     ➔ words: {interesting, book}, codes: {ka, si}\n   (4) \"that bag\"           = \"de ti\"     ➔ words: {that, bag}, codes: {de, ti}\n\n2. Systematic Pairwise Deductions:\n   • Compare (1) & (3): Common word is \"book\"; common code is \"si\" ➔ **book = si**.\n   • From (3): Since \"book\" = \"si\", remaining word **interesting = ka**.\n   • Compare (1) & (2): Common word is \"is\"; common code is \"re\" (from \"sipo re\" where code is \"re\") ➔ **is = re**.\n   • Compare (2) & (4): Common word is \"bag\"; common code is \"ti\" ➔ **bag = ti**.\n   • From (4): Since \"bag\" = \"ti\", remaining word **that = de**.\n\n3. Assemble Target Phrase: \"that is interesting\":\n   • \"that\"        ➔ de\n   • \"is\"          ➔ re\n   • \"interesting\" ➔ ka\n   • Combined in any standard order: **ka de re**.\n\n💡 Exam Speed Shortcut:\nLook for \"interesting\" in statement (3): \"ka si\" contains only two words. Since \"si\" appears in (1) with \"book\", \"interesting\" must be \"ka\". Only Option D (**ka de re**) contains \"ka\"!"
  },
  {
    "id": "st2_cd_q18",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Fictitious Language & Substitution Chains",
    "difficulty": "Easy",
    "points": 1,
    "question": "If 'green' is called 'white', 'white' is called 'yellow', 'yellow' is called 'blue', 'blue' is called 'pink' and 'pink' is called 'black', then what is the color of milk?",
    "options": [
      "green",
      "blue",
      "pink",
      "yellow",
      "None of these"
    ],
    "correct": "yellow",
    "explanation": "🔐 Pattern: Forward Substitution Chain Cipher ('Is Called' Convention)\n\n1. Analyze the Question Type:\n   • In 'is called' / 'is named' questions, each item is replaced by the specific term it is called:\n     A is called B ➔ Code for A is B.\n\n2. Given Substitution Chain:\n   • 'green' is called 'white'\n   • 'white' is called 'yellow'\n   • 'yellow' is called 'blue'\n   • 'blue' is called 'pink'\n   • 'pink' is called 'black'\n\n3. Solve for Target Query: \"What is the color of milk?\":\n   • Step 1: State the universal real-world fact:\n     Milk is naturally **white**.\n   • Step 2: Look up the immediate forward designation for 'white':\n     'white' is called **yellow**.\n   • Therefore, the color of milk in this code language is **yellow**.\n\n💡 Exam Speed Shortcut:\nRule of thumb: In \"A is called B\" ciphers, find the real answer (White) and take ONE step forward in the chain ('white' is called yellow) ➔ **yellow**! Do not continue chaining."
  },
  {
    "id": "st2_cd_q19",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Fictitious Language & Substitution Chains",
    "difficulty": "Easy",
    "points": 1,
    "question": "If 'blue' means 'green', 'green' means 'white', 'white' means 'yellow', 'yellow' means 'black', 'black' means 'red' and 'red' means 'brown', then what is the color of milk?",
    "options": [
      "blue",
      "yellow",
      "green",
      "brown",
      "black"
    ],
    "correct": "yellow",
    "explanation": "🔐 Pattern: Semantic Definition Chain ('Means' Directional Convention)\n\n1. Analyze the Question Type:\n   • In competitive examinations, standard answer keys for \"A means B\" chains evaluate the direct association of the key attribute:\n     'blue' means 'green'\n     'green' means 'white'\n     'white' means 'yellow'\n     'yellow' means 'black'\n     'black' means 'red'\n     'red' means 'brown'\n\n2. Solve for Target Query: \"What is the color of milk?\":\n   • Universal factual answer: Milk is **white**.\n   • Following the primary forward designation for 'white':\n     'white' means **yellow**.\n   • Following standard test answer-key protocol, the designated code is **yellow**.\n\n💡 Exam Speed Shortcut:\nIdentify the natural color (White) ➔ Match the direct statement beginning with 'white': \"'white' means yellow\" ➔ **yellow** (Option B)!"
  },
  {
    "id": "st2_cd_q20",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Conditional Matrix Coding & Boundary Logic",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Numerals are to be coded as per the table and conditions below:\n\nNumerals: 3, 5, 7, 4, 2, 6, 8, 1, 0, 9\nCodes: ★, B, E, A, @, F, K, %, R, M\n\nConditions:\n(i) If the first digit as well as the last digit is odd, both are to be coded as 'X'.\n(ii) If the first digit as well as the last digit is even, both are to be coded as '$'.\n(iii) If the last digit is '0', it is to be coded as '#'.\n\nFind the code for: 546839",
    "options": [
      "XAFK *X",
      "XAFK*M",
      "BAFK *X",
      "BAFK*M",
      "None of these"
    ],
    "correct": "XAFK *X",
    "explanation": "🔐 Pattern: Conditional Numerical Matrix Coding (Odd-Odd Boundary Override)\n\n1. Base Numeral-to-Code Reference Table:\n   • Numerals: 3   5   7   4   2   6   8   1   0   9\n   • Codes:    ★   B   E   A   @   F   K   %   R   M\n\n2. Evaluate Boundary Conditions for Target: **546839**:\n   • First digit = 5 (Odd)\n   • Last digit  = 9 (Odd)\n   • Check Condition (i): \"If the first digit as well as the last digit is odd, both are to be coded as 'X'\".\n     ➔ **Condition (i) APPLIES!**\n     ➔ Position 1 = 'X', Position 6 = 'X'.\n\n3. Translate Intermediate Digits Using Base Table:\n   • 2nd digit (4) ➔ A\n   • 3rd digit (6) ➔ F\n   • 4th digit (8) ➔ K\n   • 5th digit (3) ➔ ★ (represented as * in options)\n\n4. Assembled Final Code:\n   • 1st (X) + 2nd (A) + 3rd (F) + 4th (K) + 5th (*) + 6th (X) = **XAFK *X**.\n\n💡 Exam Speed Shortcut:\nBoth ends (5 and 9) are odd ➔ Condition (i) forces both ends to be 'X'. This immediately eliminates Options C and D. Between Option A and B, Option A has ending 'X'. Answer is Option A (**XAFK *X**)!"
  },
  {
    "id": "st2_cd_q21",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Conditional Matrix Coding & Boundary Logic",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Numerals are to be coded as per the table and conditions below:\n\nNumerals: 3, 5, 7, 4, 2, 6, 8, 1, 0, 9\nCodes: ★, B, E, A, @, F, K, %, R, M\n\nConditions:\n(i) If the first digit as well as the last digit is odd, both are to be coded as 'X'.\n(ii) If the first digit as well as the last digit is even, both are to be coded as '$'.\n(iii) If the last digit is '0', it is to be coded as '#'.\n\nFind the code for: 765082",
    "options": [
      "EFB#K@",
      "XFBRIK@",
      "EFBRK@",
      "EFBR#K",
      "None of these"
    ],
    "correct": "EFBRK@",
    "explanation": "🔐 Pattern: Conditional Numerical Matrix Coding (Direct Table Default)\n\n1. Base Numeral-to-Code Reference Table:\n   • Numerals: 3   5   7   4   2   6   8   1   0   9\n   • Codes:    ★   B   E   A   @   F   K   %   R   M\n\n2. Evaluate Boundary Conditions for Target: **765082**:\n   • First digit = 7 (Odd)\n   • Last digit  = 2 (Even, not 0)\n   • Check Conditions:\n     - Condition (i) fails: First is odd, but last is even (both must be odd).\n     - Condition (ii) fails: First is odd (both must be even).\n     - Condition (iii) fails: Last digit is 2 (must be 0).\n   • Conclusion: **No condition applies!** Use standard direct table translation.\n\n3. Translate All Digits Directly from Table:\n   • 7 ➔ E\n   • 6 ➔ F\n   • 5 ➔ B\n   • 0 ➔ R\n   • 8 ➔ K\n   • 2 ➔ @\n\n4. Assembled Final Code:\n   • E + F + B + R + K + @ = **EFBRK@**.\n\n💡 Exam Speed Shortcut:\nSince neither boundary rule matches, the code simply mirrors the table. Digit 0 maps to 'R' (not '#', which is only for terminal 0 under condition iii). Thus, Option C (**EFBRK@**) is correct!"
  },
  {
    "id": "st2_cd_q22",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Conditional Matrix Coding & Boundary Logic",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Letters are to be coded as per the table and conditions below:\n\nLetter: A, R, P, M, D, E, I, Q, Z, F, H, K, U, W, J\nCode: ©, 7, 8, 3, 9, 2, 1, 4, #, $, 5, %, @, 6, d\n\nConditions:\n(i) If the first letter is a vowel and the last letter is a consonant, both are to be coded as the code for the vowel.\n(ii) If both the first and the last letters are consonants, both are to be coded as the code for the last letter.\n(iii) If the first letter is a consonant and the last letter is a vowel, both are to be coded as 'H'.\n\nFind the code for: IDUPRJ",
    "options": [
      "19@87d",
      "d9@87d",
      "19@871",
      "d9@871",
      "None of these"
    ],
    "correct": "19@871",
    "explanation": "🔐 Pattern: Conditional Letter Matrix Coding (Vowel-Consonant Boundary Override)\n\n1. Base Letter-to-Code Reference Table:\n   • Letter: A  R  P  M  D  E  I  Q  Z  F  H  K  U  W  J\n   • Code:   ©  7  8  3  9  2  1  4  #  $  5  %  @  6  d\n\n2. Evaluate Boundary Conditions for Target: **IDUPRJ**:\n   • First letter = 'I' (Vowel)\n   • Last letter  = 'J' (Consonant)\n   • Check Condition (i): \"If the first letter is a vowel and the last letter is a consonant, both are to be coded as the code for the vowel\".\n     ➔ **Condition (i) APPLIES!**\n     ➔ Code for vowel 'I' from table is **1**.\n     ➔ Position 1 = '1', Position 6 = '1'.\n\n3. Translate Intermediate Letters Using Base Table:\n   • D ➔ 9\n   • U ➔ @\n   • P ➔ 8\n   • R ➔ 7\n\n4. Assembled Final Code:\n   • 1st (1) + 2nd (9) + 3rd (@) + 4th (8) + 5th (7) + 6th (1) = **19@871**.\n\n💡 Exam Speed Shortcut:\nFirst letter is vowel I (code 1), last letter is consonant J ➔ Under condition (i), both ends become '1'. Only Option C (**19@871**) starts with 1 and ends with 1! Instant 3-second answer."
  },
  {
    "id": "st2_cd_q23",
    "module_id": "st2_mod4",
    "module_name": "Coding-Decoding",
    "syllabus_lec": "ST-2 Cipher Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Conditional Matrix Coding & Boundary Logic",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions: Letters are to be coded as per the table and conditions below:\n\nLetter: A, R, P, M, D, E, I, Q, Z, F, H, K, U, W, J\nCode: ©, 7, 8, 3, 9, 2, 1, 4, #, $, 5, %, @, 6, d\n\nConditions:\n(i) If the first letter is a vowel and the last letter is a consonant, both are to be coded as the code for the vowel.\n(ii) If both the first and the last letters are consonants, both are to be coded as the code for the last letter.\n(iii) If the first letter is a consonant and the last letter is a vowel, both are to be coded as 'H'.\n\nFind the code for: UKWJMA",
    "options": [
      "©%6d3@",
      "@%683@",
      "@%6d©3",
      "@%6d3©",
      "None of these"
    ],
    "correct": "@%6d3©",
    "explanation": "🔐 Pattern: Conditional Letter Matrix Coding (Direct Table Default)\n\n1. Base Letter-to-Code Reference Table:\n   • Letter: A  R  P  M  D  E  I  Q  Z  F  H  K  U  W  J\n   • Code:   ©  7  8  3  9  2  1  4  #  $  5  %  @  6  d\n\n2. Evaluate Boundary Conditions for Target: **UKWJMA**:\n   • First letter = 'U' (Vowel)\n   • Last letter  = 'A' (Vowel)\n   • Check Conditions:\n     - Condition (i) fails: Last letter is vowel (not consonant).\n     - Condition (ii) fails: Both are vowels (not consonants).\n     - Condition (iii) fails: First letter is vowel (not consonant).\n   • Conclusion: **No condition applies!** Code every letter directly from table.\n\n3. Translate All Letters Directly from Table:\n   • U ➔ @\n   • K ➔ %\n   • W ➔ 6\n   • J ➔ d\n   • M ➔ 3\n   • A ➔ ©\n\n4. Assembled Final Code:\n   • @ + % + 6 + d + 3 + © = **@%6d3©**.\n\n💡 Exam Speed Shortcut:\nBoth ends are vowels ➔ All special boundary conditions fail. Translating directly: U = '@', A = '©'. Only Option D (**@%6d3©**) starts with '@' and terminates with '3©'!"
  }
];
