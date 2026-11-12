const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log("=== RUNNING MOBILE DATA AUDIT ===");

const questionsFile = fs.readFileSync(path.join(__dirname, 'src/data/questions.ts'), 'utf8');
const syllabusFile = fs.readFileSync(path.join(__dirname, 'src/data/syllabus.ts'), 'utf8');

// Parse questions JSON from TS
const qMatch = questionsFile.match(/export const QUIZ_QUESTIONS: Question\[\] = (\[[\s\S]*\]);/);
assert(qMatch, "QUIZ_QUESTIONS array could not be extracted!");
const questions = JSON.parse(qMatch[1]);

console.log(`✓ Loaded ${questions.length} questions from mobile/src/data/questions.ts`);
assert.strictEqual(questions.length, 810, "Expected exactly 810 questions in mobile database!");

// Parse syllabus JSON from TS
const sMatch = syllabusFile.match(/export const SYLLABUS_DATA: SyllabusData = ({[\s\S]*});/);
assert(sMatch, "SYLLABUS_DATA object could not be extracted!");
const syllabus = JSON.parse(sMatch[1]);

console.log("✓ Loaded syllabus with terms:", Object.keys(syllabus).join(', '));
assert(syllabus.st1, "st1 missing from syllabus");
assert(syllabus.st2, "st2 missing from syllabus");
assert(syllabus.endterm, "endterm missing from syllabus");

// Audit questions
const ids = new Set();
questions.forEach((q, idx) => {
  assert(q.id, `Question at index ${idx} missing id`);
  assert(!ids.has(q.id), `Duplicate ID found: ${q.id}`);
  ids.add(q.id);

  assert(q.module_id, `Question ${q.id} missing module_id`);
  assert(q.question, `Question ${q.id} missing question statement`);
  assert(Array.isArray(q.options) && q.options.length >= 2, `Question ${q.id} must have at least 2 options`);
  assert(q.correct, `Question ${q.id} missing correct answer`);
  assert(q.options.includes(q.correct), `Question ${q.id} correct answer "${q.correct}" not found in options: ${JSON.stringify(q.options)}`);
});

console.log(`✓ All ${questions.length} questions verified: Unique IDs, non-empty statements, and exact matching keys.`);

// Verify subtab counts
let countMismatches = 0;
['st1', 'st2', 'endterm'].forEach(termId => {
  const term = syllabus[termId];
  term.modules.forEach(mod => {
    (mod.types || []).forEach(type => {
      const actualCount = questions.filter(q => q.module_id === mod.id && q.type_id === type.id).length;
      assert.strictEqual(actualCount, type.count, `Subtab ${mod.id} > ${type.id} count mismatch! Expected ${type.count}, got ${actualCount}`);
    });
  });
});

console.log("✓ All syllabus subtab question counts match actual questions in database.");
console.log("🎉 MOBILE DATASET AUDIT PASSED 100%!");
