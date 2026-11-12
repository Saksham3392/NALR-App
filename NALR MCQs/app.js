/**
 * =============================================================================
 * 🤖 NALR ST-1 APPLICATION CORE CONTROLLER (Course Code: 25UNI0110)
 * =============================================================================
 * This controller orchestrates the entire single-page revision platform:
 *  - 14 Syllabus Modules Navigation (Sidebar Accordion)
 *  - Problem-solving subtabs per module (Type 1, Type 2, etc.)
 *  - Interactive Practice Mode with instant answer validation & visual solutions
 *  - Multi-Topic Continuous Examination Engine with dynamic module selector
 *  - Performance analytics, detailed review screens, sound effects, and confetti
 * 
 * 💡 AI AGENT INSTRUCTIONS FOR ADDING NEW QUESTION MODULES:
 * -----------------------------------------------------------------------------
 * 1. When adding questions for a pending module (e.g. mod10: Ages, mod12: Allegation, mod13: Odd One Out):
 *    - Define the subtabs ('types' array) in syllabus.js.
 *    - Append the formatted questions to QUIZ_QUESTIONS in quiz_questions.js.
 *    - In this file (app.js), ADD the new module ID to `selectedExamModuleIds` below
 *      so that the new module is checked by default in the exam topic selection modal.
 * 2. Questions are dynamically filtered by:
 *      q.module_id === activeModuleId && q.type_id === activeTypeId
 * 3. All state is automatically persisted in browser localStorage under `STORAGE_KEY`.
 * 4. Run `python verify_dataset.py` in terminal after adding questions to ensure 0 errors.
 * =============================================================================
 */

// =============================================================================
// SECTION 1: GLOBAL STATE, STORAGE CONSTANTS & APPLICATION CONFIG
// =============================================================================

const STORAGE_KEY = "NALR_MULTI_TERM_APTITUDE_V8";
const PLANNER_STORAGE_KEY = "nalr_study_plan_v1";

// Active personalized study planner state
let userStudyPlan = null;

// Active examination term ("st1" | "st2" | "endterm")
let currentTermId = "st1";

// Active navigation pointers within the current term
let activeModuleId = "mod1"; // Active module in sidebar
let activeTypeId = "type_1";  // Active problem type subtab within current module
let isExamMode = false;       // Boolean: false = Practice Mode, true = Continuous Exam Mode

// Remember user's last visited module & type per term so switching terms preserves exact study position
let lastActiveModulePerTerm = {
  st1: "mod1",
  st2: "st2_mod1",
  endterm: "end_mod1"
};
let lastActiveTypePerTerm = {
  st1: "type_1",
  st2: "type_1",
  endterm: "type_1"
};

// User assessment and session data
let userPracticeAnswers = {}; // Map of question ID -> selected option in Practice Mode
let userExamAnswers = {};     // Map of question ID -> selected option in Exam Mode
let userReviewFlags = new Set(); // Set of question IDs bookmarked/flagged for review

// Display and filter preferences
let isDarkMode = false;
let activeDifficultyFilter = "all"; // "all" | "Easy" | "Medium" | "Hard"
let showFlaggedOnly = false;         // Boolean: if true, show only bookmarked questions

/**
 * Default active modules selected for Continuous Exam Mode.
 * ⚠️ NOTE FOR AI AGENTS: When you activate a pending module in ST-1 (mod10, mod12, mod13),
 * ST-2 (st2_mod1..st2_mod11), or End Term (end_mod1..end_mod14),
 * append its ID to this array so it is enabled in exam mode by default!
 */
let selectedExamModuleIds = [
  "mod1",  // Blood Relation (ST-1)
  "mod2",  // Coded Relation (ST-1)
  "mod3",  // Analogy (ST-1)
  "mod4",  // Direction (ST-1)
  "mod5",  // Number System (ST-1)
  "mod6",  // H.C.F. & L.C.M. (ST-1)
  "mod7",  // Average (ST-1)
  "mod8",  // Remainder Theorem (ST-1)
  "mod9",  // Ratio & Proportion (ST-1)
  "mod10", // Ages (ST-1)
  "mod11", // Partnership (ST-1)
  "mod12", // Allegation (ST-1)
  "mod13", // Odd One Out (ST-1)
  "mod14", // Syllogism (ST-1)
  "mod15", // FA1 Questions (ST-1)
  "mod16", // ST1 Questions (ST-1)
  "mod17", // FA2 Questions (ST-1)
  "st2_mod1", // Percentage (ST-2)
  "st2_mod4" // Coding-Decoding (ST-2)
];

// Active pool of questions loaded for the current exam session
let activeExamQuestions = [];

/**
 * Mapping of Module IDs to local presentation PDF files in the "PPTs/pdf" folder.
 * Encoded dynamically so browsers open the presentation viewer cleanly in a new tab.
 */
const MODULE_PPT_MAP = {
  mod1: "PPTs/pdf/blood-relation.pdf",
  mod2: "PPTs/pdf/coded-relation.pdf",
  mod3: "PPTs/pdf/analogy.pdf",
  mod4: "PPTs/pdf/direction.pdf",
  mod5: "PPTs/pdf/number-system.pdf",
  mod6: "PPTs/pdf/hcf-and-lcm.pdf",
  mod7: "PPTs/pdf/average.pdf",
  mod8: "PPTs/pdf/remainder-theorem.pdf",
  mod9: "PPTs/pdf/ratio-and-proportion.pdf",
  mod10: "PPTs/pdf/problem-on-ages.pdf",
  mod11: "PPTs/pdf/partnership.pdf",
  mod12: "PPTs/pdf/alligation.pdf",
  mod13: "PPTs/pdf/odd-one-out.pdf",
  mod14: "PPTs/pdf/syllogism.pdf",
  mod15: "PPTs/pdf/FA1.pdf",
  mod16: "PPTs/pdf/ST1.pdf",
  st2_mod1: "PPTs/pdf/PERCENTAGE.pdf",
  st2_mod4: "PPTs/pdf/CODING DECODING.pdf"
};

const EXTRA_Q_PDF_MAP = {
  mod5: { file: "PPTs/pdf/Extra Q Number System.pdf", title: "Number System — Extra Questions", modKey: "mod5_extra" },
  mod6: { file: "PPTs/pdf/Extra Q LCM and HCF.pdf", title: "LCM and HCF — Extra Questions", modKey: "mod6_extra" },
  mod7: { file: "PPTs/pdf/Extra Q Average.pdf", title: "Average — Extra Questions", modKey: "mod7_extra" }
};

function updateModulePPTButton(moduleId, typeId) {
  const pptBtn = document.getElementById("btnModulePPT");
  if (!pptBtn) return;

  const currentMod = (typeof SYLLABUS_MODULES !== "undefined") ? SYLLABUS_MODULES.find(m => m.id === moduleId) : null;
  const currentTypeObj = currentMod && currentMod.types && typeId ? currentMod.types.find(t => t.id === typeId) : null;
  const isExtraQ = !!(currentTypeObj && (currentTypeObj.name.includes("Extra Q") || (currentTypeObj.desc && currentTypeObj.desc.includes("Extra Q"))));

  if (isExtraQ && EXTRA_Q_PDF_MAP[moduleId]) {
    const extraInfo = EXTRA_Q_PDF_MAP[moduleId];
    pptBtn.href = `presentation_viewer.html?mod=${encodeURIComponent(extraInfo.modKey)}`;
    pptBtn.target = "_blank";
    pptBtn.title = `Open ${extraInfo.title} in Presentation Viewer`;
    const labelSpan = pptBtn.querySelector(".ppt-label-text");
    if (labelSpan) labelSpan.textContent = "Extra Q PPT";
    pptBtn.style.display = "inline-flex";
    return;
  }

  const pptFile = MODULE_PPT_MAP[moduleId];
  if (pptFile) {
    const modTitle = currentMod ? currentMod.title : "Module Presentation";
    pptBtn.href = `presentation_viewer.html?mod=${encodeURIComponent(moduleId)}`;
    pptBtn.target = "_blank";
    pptBtn.title = `Open ${modTitle} Presentation in New Tab`;
    const labelSpan = pptBtn.querySelector(".ppt-label-text");
    if (labelSpan) labelSpan.textContent = "PPT";
    pptBtn.style.display = "inline-flex";
  } else {
    pptBtn.style.display = "none";
  }
}

// =============================================================================
// SECTION 2: FORMATTING & SOLUTION RENDERING UTILITIES
// =============================================================================

// Helper: Escape HTML to prevent XSS in dynamic question text
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Universal Typography Helper: Normalize unicode superscripts and caret notation to uniform HTML <sup> tags
const SUPER_CHAR_MAP = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', 'ⁿ': 'n', 'ˣ': 'x', 'ᵃ': 'a', 'ᵇ': 'b'
};

function normalizeSuperscripts(text) {
  if (!text) return "";
  let res = String(text);

  // 1. Caret Power Tower: base^(exp1^exp2) e.g. 18^(22^42)
  res = res.replace(/([a-zA-Z0-9]+)\^\(([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)\)/g, (match, b, e1, e2) => `${b}<sup>${e1}<sup>${e2}</sup></sup>`);

  // 2. Parenthesized Exponent: base^(exp) e.g. 2^(73-1) or x^(n+1)
  res = res.replace(/([a-zA-Z0-9]+)\^\(([^)]+)\)/g, (match, b, exp) => `${b}<sup>${exp}</sup>`);

  // 3. Simple Caret Exponent: base^digits e.g. 2^63 or x^2
  res = res.replace(/([a-zA-Z0-9]+)\^([0-9a-zA-Z+-]+)/g, (match, b, exp) => `${b}<sup>${exp}</sup>`);

  // 4. Unicode Superscripts: Runs of unicode superscript characters e.g. 37¹²⁰, 80⁶³, 2⁶³, 2⁷⁶, 10¹⁰⁰
  res = res.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿˣᵃᵇ]+/g, (match) => {
    const normal = match.split('').map(ch => SUPER_CHAR_MAP[ch] || ch).join('');
    return `<sup>${normal}</sup>`;
  });

  return res;
}

// Helper: Format Option Text (XSS-safe + Uniform Superscript Placement)
function formatOptionText(opt) {
  if (opt === undefined || opt === null) return "";
  const safe = escapeHtml(String(opt));
  return normalizeSuperscripts(safe);
}

// Helper: Format Markdown
function formatMarkdown(text) {
  if (!text) return "";
  let html = normalizeSuperscripts(text);
  return html
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\n/g, '<br>');
}

// Helper: Format Detailed Structured Solution with Interactive Visualizer
function formatDetailedSolution(explanation, q) {
  if (!explanation) return "";

  const lines = explanation.split("\n").map(l => l.trim()).filter(Boolean);
  let titleHtml = "";
  const steps = [];
  const conclusions = [];

  lines.forEach((line, i) => {
    if (i === 0 && (line.endsWith(":") || /^[\p{Emoji}\u200d]/u.test(line))) {
      titleHtml = line.replace(/:$/, "");
      return;
    }

    const isConclusion = /^(therefore|thus|hence|so|conclusion|final answer|remainder =|the only common|ashok is|consequently)/i.test(line) ||
      (i === lines.length - 1 && !/^(\d+[\.\)]|[-•*])/.test(line));

    if (isConclusion) {
      conclusions.push(line);
      return;
    }

    const stepMatch = line.match(/^(\d+)[\.\)]\s*(.*)/);
    const bulletMatch = line.match(/^[-•*]\s*(.*)/);

    if (stepMatch) {
      steps.push({ num: stepMatch[1], text: stepMatch[2] });
    } else if (bulletMatch) {
      steps.push({ num: "•", text: bulletMatch[1] });
    } else {
      steps.push({ num: (steps.length + 1).toString(), text: line });
    }
  });

  function formatLineContent(text) {
    let html = formatMarkdown(text);
    html = html.replace(/\s*->\s*/g, ' <span class="sol-flow-arrow">➔</span> ');
    return html;
  }

  let html = `<div class="solution-visual-card">`;

  // 1. Solution Method Header
  if (titleHtml) {
    html += `
      <div class="sol-header-banner">
        <span class="sol-method-tag">METHOD / CONCEPT</span>
        <h4 class="sol-title-text">${formatMarkdown(titleHtml)}</h4>
      </div>
    `;
  }

  // 1.5. Interactive Concept Visualizer & Formulas (Tailored per question topic)
  if (q && typeof SolutionVisualizer !== "undefined" && SolutionVisualizer.generateVisualizer) {
    const visDiagramHtml = SolutionVisualizer.generateVisualizer(q);
    if (visDiagramHtml) {
      html += `
        <div class="sol-section-collapsible is-expanded" id="solVisSection_${q ? q.id : ''}">
          <div class="sol-section-header" onclick="this.parentElement.classList.toggle('is-expanded');const exp=this.parentElement.classList.contains('is-expanded');this.setAttribute('aria-expanded',exp);" role="button" tabindex="0" aria-expanded="true">
            <span class="sol-section-title">📐 Visual Model & Formulas</span>
            <span class="sol-section-chevron">▾</span>
          </div>
          <div class="sol-section-drawer">
            <div class="sol-section-content">
              ${visDiagramHtml}
            </div>
          </div>
        </div>
      `;
    }
  }

  // 2. Stepper Timeline
  if (steps.length > 0) {
    html += `
      <div class="sol-section-collapsible is-expanded">
        <div class="sol-section-header" onclick="this.parentElement.classList.toggle('is-expanded');const exp=this.parentElement.classList.contains('is-expanded');this.setAttribute('aria-expanded',exp);" role="button" tabindex="0" aria-expanded="true">
          <span class="sol-section-title">📝 Step-by-Step Breakdown (${steps.length} Steps)</span>
          <span class="sol-section-chevron">▾</span>
        </div>
        <div class="sol-section-drawer">
          <div class="sol-section-content">
            <div class="sol-steps-container">
    `;
    steps.forEach((s) => {
      html += `
        <div class="sol-step-row">
          <div class="sol-step-pill">${s.num}</div>
          <div class="sol-step-content">${formatLineContent(s.text)}</div>
        </div>
      `;
    });
    html += `</div></div></div></div>`;
  }

  // 3. Conclusion Box
  if (conclusions.length > 0) {
    html += `
      <div class="sol-conclusion-callout">
        <div class="sol-conclusion-header">
          <span class="sol-target-icon">🎯</span>
          <span class="sol-target-label">Key Deduction / Result</span>
        </div>
        <div class="sol-conclusion-body">
          ${conclusions.map(c => formatLineContent(c)).join("<br>")}
        </div>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

// Helper: Generate structured feedback box content with collapsible solution accordion
function generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded = true) {
  const isExp = (isExpanded !== false);
  return `
    <div class="exam-feedback-box-content">
      <div class="feedback-headline" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div style="display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span class="feedback-status-pill ${isCorrect ? 'is-correct' : 'is-wrong'}">${isCorrect ? 'Correct Answer' : 'Incorrect Choice'}</span>
          <span style="color: var(--ink-secondary); font-weight: 600;">—</span>
          <span class="sol-correct-pill">Option ${correctLetter}: ${formatOptionText(q.correct)}</span>
        </div>
        <button type="button" class="btn-toggle-solution" aria-expanded="${isExp ? 'true' : 'false'}" title="Toggle Explanation Visibility" onclick="syncSolutionToggleFromInner(this)">
          <span class="toggle-label">${isExp ? 'Hide Explanation ▴' : 'Show Explanation ▾'}</span>
        </button>
      </div>
      <div class="sol-feedback-body">
        <div class="sol-feedback-inner">
          ${formatDetailedSolution(q.explanation || '', q)}
        </div>
      </div>
    </div>
  `;
}

// =============================================================================
// SECTION 3: LOCALSTORAGE STATE PERSISTENCE & RESTORATION
// =============================================================================

// Migration: One-time idempotent silent migration from mod15 -> mod16 for ST1 Questions
function migrateMod15ToMod16() {
  const MIGRATION_FLAG = "nalr_migr_mod15_to_mod16_v1";
  try {
    if (localStorage.getItem(MIGRATION_FLAG)) {
      return;
    }

    let modifiedState = false;
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (rawState) {
      const state = JSON.parse(rawState);

      // 1. Practice Answers
      if (state.userPracticeAnswers && typeof state.userPracticeAnswers === "object") {
        const newPractice = {};
        for (const [k, v] of Object.entries(state.userPracticeAnswers)) {
          if (k.startsWith("mod15_q")) {
            newPractice["mod16_q" + k.slice(7)] = v;
            modifiedState = true;
          } else {
            newPractice[k] = v;
          }
        }
        state.userPracticeAnswers = newPractice;
      }

      // 2. Exam Answers
      if (state.userExamAnswersMode && typeof state.userExamAnswersMode === "object") {
        const newExam = {};
        for (const [k, v] of Object.entries(state.userExamAnswersMode)) {
          if (k.startsWith("mod15_q")) {
            newExam["mod16_q" + k.slice(7)] = v;
            modifiedState = true;
          } else {
            newExam[k] = v;
          }
        }
        state.userExamAnswersMode = newExam;
      }

      // 3. Review Flags
      if (Array.isArray(state.userReviewFlags)) {
        state.userReviewFlags = state.userReviewFlags.map(id => {
          if (typeof id === "string" && id.startsWith("mod15_q")) {
            modifiedState = true;
            return "mod16_q" + id.slice(7);
          }
          return id;
        });
      }

      // 4. activeModuleId & lastActiveModulePerTerm
      if (state.activeModuleId === "mod15") {
        state.activeModuleId = "mod16";
        modifiedState = true;
      }
      if (state.lastActiveModulePerTerm && typeof state.lastActiveModulePerTerm === "object") {
        for (const term of Object.keys(state.lastActiveModulePerTerm)) {
          if (state.lastActiveModulePerTerm[term] === "mod15") {
            state.lastActiveModulePerTerm[term] = "mod16";
            modifiedState = true;
          }
        }
      }

      // 5. selectedExamModuleIds
      if (Array.isArray(state.selectedExamModuleIds)) {
        const oldSet = new Set(state.selectedExamModuleIds);
        if (oldSet.has("mod15")) {
          oldSet.delete("mod15");
          oldSet.add("mod16");
          modifiedState = true;
        }
        // Always ensure both mod15 (FA1) and mod16 (ST1) are in selectedExamModuleIds
        if (!oldSet.has("mod15")) {
          oldSet.add("mod15");
          modifiedState = true;
        }
        if (!oldSet.has("mod16")) {
          oldSet.add("mod16");
          modifiedState = true;
        }
        state.selectedExamModuleIds = Array.from(oldSet);
      }

      if (modifiedState) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      }
    }

    // 6. Migrate Study Plan (nalr_study_plan_v1)
    let modifiedPlan = false;
    const rawPlan = localStorage.getItem(PLANNER_STORAGE_KEY);
    if (rawPlan) {
      const plan = JSON.parse(rawPlan);

      if (Array.isArray(plan.selectedModuleIds)) {
        plan.selectedModuleIds = plan.selectedModuleIds.map(mId => {
          if (mId === "mod15") {
            modifiedPlan = true;
            return "mod16";
          }
          return mId;
        });
      }

      if (Array.isArray(plan.days)) {
        for (const day of plan.days) {
          if (Array.isArray(day.tasks)) {
            for (const task of day.tasks) {
              if (task.moduleId === "mod15") {
                task.moduleId = "mod16";
                task.moduleNum = 16;
                if (typeof task.id === "string" && task.id.startsWith("mod15_")) {
                  task.id = "mod16_" + task.id.slice(6);
                }
                modifiedPlan = true;
              }
            }
          }
        }
      }

      if (plan.completedTasks && typeof plan.completedTasks === "object") {
        const newCompleted = {};
        for (const [k, v] of Object.entries(plan.completedTasks)) {
          if (k.startsWith("mod15_")) {
            newCompleted["mod16_" + k.slice(6)] = v;
            modifiedPlan = true;
          } else {
            newCompleted[k] = v;
          }
        }
        plan.completedTasks = newCompleted;
      }

      if (modifiedPlan) {
        localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(plan));
      }
    }

    // Set migration completion flag
    localStorage.setItem(MIGRATION_FLAG, "true");
    console.info("[NALR Migration] Completed mod15 -> mod16 migration successfully.");
  } catch (err) {
    console.warn("[NALR Migration] Error during mod15 -> mod16 migration:", err);
  }
}

// Load Stored State from localStorage with automatic legacy migration
function loadStoredState() {
  migrateMod15ToMod16();
  try {
    let raw = localStorage.getItem(STORAGE_KEY);

    // 🔄 Automatic Backward-Compatible Migration:
    // If the new multi-term key does not exist yet, check and migrate previous storage keys!
    if (!raw) {
      const legacyKeys = [
        "NALR_ST1_APTITUDE_V7",
        "NALR_ST1_APTITUDE_V6",
        "NALR_ST1_APTITUDE_V5",
        "NALR_APTITUDE_V4",
        "NALR_ST1_APTITUDE",
        "NALR_CODED_RELATION_V5"
      ];
      for (const oldKey of legacyKeys) {
        const oldData = localStorage.getItem(oldKey);
        if (oldData) {
          raw = oldData;
          console.info(`[NALR Migration] Successfully recovered saved progress from legacy key: ${oldKey}`);
          break;
        }
      }
    }

    if (raw) {
      const data = JSON.parse(raw);

      // Restore active term
      if (data.currentTermId && typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA[data.currentTermId]) {
        currentTermId = data.currentTermId;
      } else {
        currentTermId = "st1";
      }

      if (typeof getSyllabusModules === "function") {
        SYLLABUS_MODULES = getSyllabusModules(currentTermId);
      }

      // Restore position memory per term
      if (data.lastActiveModulePerTerm && typeof data.lastActiveModulePerTerm === "object") {
        lastActiveModulePerTerm = Object.assign(lastActiveModulePerTerm, data.lastActiveModulePerTerm);
      }
      if (data.lastActiveTypePerTerm && typeof data.lastActiveTypePerTerm === "object") {
        lastActiveTypePerTerm = Object.assign(lastActiveTypePerTerm, data.lastActiveTypePerTerm);
      }

      activeModuleId = data.activeModuleId || lastActiveModulePerTerm[currentTermId] || (SYLLABUS_MODULES[0] ? SYLLABUS_MODULES[0].id : "mod1");
      if (!SYLLABUS_MODULES.some(m => m.id === activeModuleId)) {
        activeModuleId = SYLLABUS_MODULES[0] ? SYLLABUS_MODULES[0].id : "mod1";
      }

      activeTypeId = data.activeTypeId || lastActiveTypePerTerm[currentTermId] || "type_1";

      // Restore answered questions & bookmarks
      userPracticeAnswers = (data.userPracticeAnswers && typeof data.userPracticeAnswers === "object") ? data.userPracticeAnswers : {};
      userExamAnswers = (data.userExamAnswersMode && typeof data.userExamAnswersMode === "object") ? data.userExamAnswersMode : {};
      userReviewFlags = new Set(Array.isArray(data.userReviewFlags) ? data.userReviewFlags : []);

      // Also deep merge any answers found in legacy keys that might not be in current state
      const legacyKeys = ["NALR_ST1_APTITUDE_V7", "NALR_ST1_APTITUDE_V6", "NALR_ST1_APTITUDE_V5", "NALR_APTITUDE_V4"];
      for (const oldKey of legacyKeys) {
        try {
          const lRaw = localStorage.getItem(oldKey);
          if (lRaw) {
            const lData = JSON.parse(lRaw);
            if (lData.userPracticeAnswers && typeof lData.userPracticeAnswers === "object") {
              userPracticeAnswers = Object.assign({}, lData.userPracticeAnswers, userPracticeAnswers);
            }
            if (lData.userExamAnswersMode && typeof lData.userExamAnswersMode === "object") {
              userExamAnswers = Object.assign({}, lData.userExamAnswersMode, userExamAnswers);
            }
            if (Array.isArray(lData.userReviewFlags)) {
              lData.userReviewFlags.forEach(f => userReviewFlags.add(f));
            }
          }
        } catch (mErr) {}
      }

      isDarkMode = Boolean(data.isDarkMode);
      activeDifficultyFilter = data.activeDifficultyFilter || "all";
      showFlaggedOnly = Boolean(data.showFlaggedOnly);
      if (data.isExamMode !== undefined) {
        isExamMode = Boolean(data.isExamMode);
      }

      if (Array.isArray(data.selectedExamModuleIds) && data.selectedExamModuleIds.length > 0) {
        selectedExamModuleIds = data.selectedExamModuleIds;
      }

      if (isExamMode) {
        activeExamQuestions = QUIZ_QUESTIONS.filter(q => selectedExamModuleIds.includes(q.module_id));
      }
    } else {
      if (typeof getSyllabusModules === "function") {
        SYLLABUS_MODULES = getSyllabusModules("st1");
      }
    }
  } catch (e) {
    console.warn("Resetting stored state due to error", e);
    currentTermId = "st1";
    if (typeof getSyllabusModules === "function") {
      SYLLABUS_MODULES = getSyllabusModules("st1");
    }
    activeModuleId = "mod1";
    activeTypeId = "type_1";
    userPracticeAnswers = {};
    userExamAnswers = {};
    userReviewFlags = new Set();
    activeDifficultyFilter = "all";
    showFlaggedOnly = false;
  }

  // Load Personalized Study Planner State
  try {
    const rawPlan = localStorage.getItem(PLANNER_STORAGE_KEY);
    if (rawPlan) {
      userStudyPlan = JSON.parse(rawPlan);
    }
  } catch (e) {
    console.warn("Failed to parse stored study plan", e);
    userStudyPlan = null;
  }

  // Synchronize term selector capsule UI buttons
  updateTermSelectorButtonsUI();
}

// Save Current State to localStorage with guaranteed persistence
function saveCurrentState() {
  try {
    // Record current module & type for active term
    if (currentTermId) {
      lastActiveModulePerTerm[currentTermId] = activeModuleId;
      lastActiveTypePerTerm[currentTermId] = activeTypeId;
    }

    const data = {
      currentTermId,
      activeModuleId,
      activeTypeId,
      lastActiveModulePerTerm,
      lastActiveTypePerTerm,
      isExamMode,
      userPracticeAnswers,
      userExamAnswersMode: userExamAnswers,
      userReviewFlags: Array.from(userReviewFlags),
      isDarkMode,
      activeDifficultyFilter,
      showFlaggedOnly,
      selectedExamModuleIds,
      lastSavedTimestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Failed to save state to localStorage", e);
  }
}

// Synchronize Capsule UI Buttons with Liquid Sliding Pill
function updateTermSelectorButtonsUI() {
  const termButtons = document.querySelectorAll(".term-pill-btn");
  const capsule = document.getElementById("termSelectorCapsule");
  let pill = document.getElementById("termSlidingPill");

  if (capsule && !pill) {
    pill = document.createElement("div");
    pill.className = "term-sliding-pill";
    pill.id = "termSlidingPill";
    pill.setAttribute("aria-hidden", "true");
    capsule.insertBefore(pill, capsule.firstChild);
  }

  termButtons.forEach((btn) => {
    const isThisTerm = (btn.dataset.term === currentTermId);
    btn.classList.toggle("active", isThisTerm);
    btn.setAttribute("aria-selected", isThisTerm ? "true" : "false");
  });

  // Calculate exact position and width for liquid sliding animation
  requestAnimationFrame(() => {
    const activeBtn = capsule ? capsule.querySelector(".term-pill-btn.active") : null;
    if (activeBtn && capsule && pill) {
      const capsuleRect = capsule.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offsetLeft = btnRect.left - capsuleRect.left;
      pill.style.transform = `translateX(${offsetLeft}px)`;
      pill.style.width = `${btnRect.width}px`;
      pill.style.opacity = "1";
    }
  });
}

/**
 * Switch Examination Term ("st1" | "st2" | "endterm")
 * Seamlessly transitions sidebar, question view, and exam modes between terms,
 * preserving study progress and exact position across all terms.
 */
function switchTerm(termId) {
  if (typeof SYLLABUS_DATA === "undefined" || !SYLLABUS_DATA[termId]) {
    console.error("Unknown term ID:", termId);
    return;
  }

  // 1. Remember position in previous term
  if (currentTermId) {
    lastActiveModulePerTerm[currentTermId] = activeModuleId;
    lastActiveTypePerTerm[currentTermId] = activeTypeId;
  }

  // 2. Switch to new term
  currentTermId = termId;
  SYLLABUS_MODULES = getSyllabusModules(termId);

  // 3. Update capsule buttons UI
  updateTermSelectorButtonsUI();

  // 4. Restore last visited module for this term, or default to first module
  const rememberedMod = lastActiveModulePerTerm[termId];
  if (rememberedMod && SYLLABUS_MODULES.some(m => m.id === rememberedMod)) {
    activeModuleId = rememberedMod;
  } else if (SYLLABUS_MODULES.length > 0) {
    activeModuleId = SYLLABUS_MODULES[0].id;
  }

  const currentModObj = SYLLABUS_MODULES.find(m => m.id === activeModuleId);
  const rememberedType = lastActiveTypePerTerm[termId];
  if (currentModObj && currentModObj.types && currentModObj.types.some(t => t.id === rememberedType)) {
    activeTypeId = rememberedType;
  } else {
    activeTypeId = (currentModObj && currentModObj.types && currentModObj.types.length > 0)
      ? currentModObj.types[0].id
      : "type_1";
  }

  // 5. Update sidebar total badge
  const sidebarBadge = document.getElementById("sidebarTotalBadge");
  if (sidebarBadge) {
    sidebarBadge.textContent = `${SYLLABUS_MODULES.length} Modules`;
  }

  // 6. Handle Exam Mode when switching terms
  if (isExamMode) {
    const availableExamQs = QUIZ_QUESTIONS.filter(q => SYLLABUS_MODULES.some(m => m.id === q.module_id));
    if (availableExamQs.length === 0) {
      isExamMode = false;
      const res = document.getElementById("quizResultsScreen");
      if (res) res.classList.remove("is-active");
      showToastNotification(`Switched to ${SYLLABUS_DATA[termId].name}. (0 Questions uploaded yet — viewing practice outline)`);
    } else {
      selectedExamModuleIds = SYLLABUS_MODULES.filter(m => QUIZ_QUESTIONS.some(q => q.module_id === m.id)).map(m => m.id);
      activeExamQuestions = availableExamQs;
      const titleElem = document.getElementById("examModeMainTitle");
      if (titleElem) {
        titleElem.textContent = `📝 ${SYLLABUS_DATA[termId].name} Examination Mode (${activeExamQuestions.length} Questions)`;
      }
    }
  }

  saveCurrentState();
  renderApplication();
  window.scrollTo(0, 0);
}

// =============================================================================
// SECTION 4: THEME ENGINE, CLIPBOARD UTILITIES & TOAST NOTIFICATIONS
// =============================================================================

// Theme Toggle (Dark / Light) with Smooth Circular Ripple Wave
let isThemeTransitioning = false;

function applyThemeChange(newDarkState) {
  isDarkMode = newDarkState;
  document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  const btn = document.getElementById("themeToggleBtn");
  if (btn) btn.textContent = isDarkMode ? "☀️ Light" : "🌙 Dark";
  saveCurrentState();
}

function toggleTheme(event) {
  if (isThemeTransitioning) return;
  const targetDarkMode = !isDarkMode;

  // Fallback if View Transitions API is unsupported or user prefers reduced motion
  if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    applyThemeChange(targetDarkMode);
    return;
  }

  isThemeTransitioning = true;
  document.documentElement.classList.add("is-theme-switching");

  const btn = document.getElementById("themeToggleBtn");

  // Determine click / origin coordinates (defaults to button center if keyboard-triggered)
  let x = window.innerWidth - 100;
  let y = 40;
  if (event && typeof event.clientX === "number" && (event.clientX !== 0 || event.clientY !== 0)) {
    x = event.clientX;
    y = event.clientY;
  } else if (btn) {
    const rect = btn.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  }

  // Calculate distance to the farthest viewport corner + cushion to completely clear screen corners
  const endRadius = Math.ceil(Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )) + 25;

  const cleanup = () => {
    isThemeTransitioning = false;
    document.documentElement.classList.remove("is-theme-switching");
  };

  const transition = document.startViewTransition(() => {
    applyThemeChange(targetDarkMode);
  });

  transition.ready.then(() => {
    const animation = document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 650,
        easing: "cubic-bezier(0.25, 1, 0.35, 1)",
        pseudoElement: "::view-transition-new(root)"
      }
    );
    animation.addEventListener("finish", cleanup);
  }).catch(cleanup);

  if (transition.finished) {
    transition.finished.finally(cleanup);
  }
}

// =============================================================================
// SECTION 5: EXAM TOPIC SELECTION MODAL CONTROLLER
// =============================================================================

// Open Topic Selection Modal (Allows user to select which of the 14 topics to test)
function openExamTopicModal() {
  const modal = document.getElementById("examTopicModal");
  if (!modal) return;
  modal.style.display = "flex";
  renderExamTopicList();
}

function closeExamTopicModal() {
  const modal = document.getElementById("examTopicModal");
  if (modal) modal.style.display = "none";
}

function renderExamTopicList() {
  const container = document.getElementById("examTopicListContainer");
  if (!container) return;
  container.innerHTML = "";

  SYLLABUS_MODULES.forEach((mod) => {
    const qCount = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id).length;
    const isAvailable = (qCount > 0);
    const isSelected = selectedExamModuleIds.includes(mod.id) && isAvailable;

    const item = document.createElement("div");
    item.className = `exam-topic-item ${isSelected ? 'is-selected' : ''} ${!isAvailable ? 'is-disabled' : ''}`;

    item.innerHTML = `
      <input type="checkbox" class="exam-topic-checkbox" ${isSelected ? 'checked' : ''} ${!isAvailable ? 'disabled' : ''} />
      <div class="exam-topic-item-info">
        <span class="exam-topic-item-title">${mod.num}. ${escapeHtml(mod.title)}</span>
        <span class="exam-topic-item-sub">${escapeHtml(mod.lectures || 'ST-1')}</span>
      </div>
      <span class="exam-topic-item-badge">${isAvailable ? `${qCount} Qs` : 'Pending'}</span>
    `;

    if (isAvailable) {
      item.addEventListener("click", (e) => {
        if (e.target.tagName !== "INPUT") {
          const input = item.querySelector("input[type='checkbox']");
          if (input) input.checked = !input.checked;
        }
        const currentChecked = item.querySelector("input[type='checkbox']").checked;
        if (currentChecked) {
          item.classList.add("is-selected");
          if (!selectedExamModuleIds.includes(mod.id)) selectedExamModuleIds.push(mod.id);
        } else {
          item.classList.remove("is-selected");
          selectedExamModuleIds = selectedExamModuleIds.filter(id => id !== mod.id);
        }
        updateExamTopicModalSummary();
      });
    }

    container.appendChild(item);
  });

  updateExamTopicModalSummary();
}

function updateExamTopicModalSummary() {
  const totalAvailableQs = QUIZ_QUESTIONS.filter(q => selectedExamModuleIds.includes(q.module_id)).length;
  const countBadge = document.getElementById("btnStartExamCount");
  if (countBadge) countBadge.textContent = totalAvailableQs;

  const summaryText = document.getElementById("examTopicSummaryText");
  if (summaryText) {
    summaryText.textContent = `${selectedExamModuleIds.length} Topics • ${totalAvailableQs} Questions Selected`;
  }
}

async function startExamWithSelectedTopics() {
  if (selectedExamModuleIds.length === 0) {
    await showGlassAlert({
      title: "No Topics Selected",
      message: "Please select at least one topic with available questions.",
      icon: "warning"
    });
    return;
  }
  activeExamQuestions = QUIZ_QUESTIONS.filter(q => selectedExamModuleIds.includes(q.module_id));
  if (activeExamQuestions.length === 0) {
    await showGlassAlert({
      title: "No Questions Available",
      message: "Selected topics do not have questions loaded yet.",
      icon: "warning"
    });
    return;
  }

  isExamMode = true;
  closeExamTopicModal();

  const titleElem = document.getElementById("examModeMainTitle");
  if (titleElem) {
    titleElem.textContent = `📝 Examination Mode (${activeExamQuestions.length} Questions)`;
  }

  const subElem = document.getElementById("examModeSubtitle");
  if (subElem) {
    const topicNames = SYLLABUS_MODULES.filter(m => selectedExamModuleIds.includes(m.id)).map(m => m.title);
    subElem.textContent = `Selected Topics (${topicNames.length}): ${topicNames.join(", ")}`;
  }

  renderApplication();
  window.scrollTo(0, 0);
}

// =============================================================================
// SECTION 5B: PERSONALIZED DAILY STUDY PLANNER CONTROLLER
// =============================================================================
/**
 * 📅 PERSONALIZED DAILY STUDY PLANNER ENGINE
 * -----------------------------------------------------------------------------
 * Architected to empower students preparing for ST1, ST2, or End Term exams.
 * 
 * CORE ALGORITHMIC LOGIC (FOR FUTURE AI AGENTS & DEVELOPERS):
 * 1. Time Horizon Calculation:
 *    - Computes D = ceil((targetExamDate - today) in days).
 *    - Validates that D >= 1 (exam date must strictly be in the future).
 * 
 * 2. Multi-Term Topic & Sub-Type Harvest:
 *    - Traverses selected modules across ST-1, ST-2, and End Term from SYLLABUS_DATA.
 *    - For modules containing granular problem types (e.g. Blood Relation Type 1, 2, 3),
 *      each problem type is converted into a distinct study task item.
 *    - For modules without configured sub-types, wraps them into a comprehensive
 *      "Full Topic Practice & MCQs" task to guarantee consistent schema behavior.
 * 
 * 3. Schedule Partitioning & Revision Buffer:
 *    - If D >= 3 days:
 *        The final day (Day D) is reserved as a dedicated milestone:
 *        "Final Comprehensive Revision & Full Mock Exam".
 *        Remaining (D - 1) days are allocated for active syllabus study.
 *    - If D < 3 days:
 *        All D days are designated as active crash-course study days.
 *    - Active Study Days = min(studyDaysCount, totalTasks).
 *      Tasks are distributed evenly using integer quotient and remainder:
 *      baseCount = floor(totalTasks / activeDaysCount), remainder = totalTasks % activeDaysCount.
 *    - If studyDaysCount > totalTasks:
 *        Surplus days between activeDaysCount and studyDaysCount are rendered as
 *        "Buffer & Deep-Dive Review" days for practicing weak areas.
 * 
 * 4. State Persistence & Interactive Checklists:
 *    - Persisted in browser localStorage under `nalr_study_plan_v1`.
 *    - Students can interactively check off tasks as they complete them.
 *    - Clicking "Practice →" automatically routes the student to that exact module & sub-tab.
 *    - Re-opening the Planner button directly opens the generated schedule.
 *    - "Reset Planner" button resets the plan and returns to the initial setup form.
 */

// Open Study Planner Modal (Routes to Schedule View if plan exists, else Setup Form)
function openPlannerModal() {
  const modal = document.getElementById("plannerModal");
  if (!modal) return;
  modal.style.display = "flex";

  if (userStudyPlan && Array.isArray(userStudyPlan.days) && userStudyPlan.days.length > 0) {
    renderPlannerScheduleView();
  } else {
    renderPlannerSetupView();
  }
}

// Close Study Planner Modal
function closePlannerModal() {
  const modal = document.getElementById("plannerModal");
  if (modal) modal.style.display = "none";
}

// Helper: format Date object as local YYYY-MM-DD (prevents UTC timezone shifts)
function formatDateToYMD(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Render Setup Form (Date Picker & Topic Selection per Term)
function renderPlannerSetupView() {
  const setupView = document.getElementById("plannerSetupView");
  const scheduleView = document.getElementById("plannerScheduleView");
  if (setupView) setupView.style.display = "flex";
  if (scheduleView) scheduleView.style.display = "none";

  // Configure Exam Date Input (Default = 7 days from today; Min = tomorrow)
  const dateInput = document.getElementById("plannerExamDateInput");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = formatDateToYMD(tomorrow);
    dateInput.min = tomorrowStr;

    if (!dateInput.value || dateInput.value < tomorrowStr) {
      const defaultExam = new Date();
      defaultExam.setDate(defaultExam.getDate() + 7);
      dateInput.value = formatDateToYMD(defaultExam);
    }
  }

  // Populate Term Module Checklists
  const terms = ["st1", "st2", "endterm"];
  terms.forEach(termId => {
    const listContainer = document.getElementById(`plannerList_${termId}`);
    if (!listContainer) return;

    const termData = (typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA[termId]) ? SYLLABUS_DATA[termId] : null;
    const modules = termData ? termData.modules : [];

    listContainer.innerHTML = "";
    modules.forEach(mod => {
      const qCount = (typeof QUIZ_QUESTIONS !== "undefined")
        ? QUIZ_QUESTIONS.filter(q => q.module_id === mod.id).length
        : 0;
      const isAvailable = qCount > 0;
      const label = document.createElement("label");
      label.className = `planner-mod-item ${!isAvailable ? "is-disabled" : ""}`;
      const isDefaultChecked = (termId === "st1" && isAvailable); // Active ST-1 modules checked by default

      label.innerHTML = `
        <input type="checkbox" class="planner-mod-cb" data-term="${termId}" data-mod-id="${mod.id}" ${isDefaultChecked ? "checked" : ""} ${!isAvailable ? "disabled" : ""} />
        <span>${mod.num}. ${escapeHtml(mod.title)} ${!isAvailable ? '<span class="planner-pending-badge" style="font-size: 10.5px; opacity: 0.65; margin-left: 4px;">(Pending)</span>' : `<span class="planner-qcount-badge" style="font-size: 10.5px; color: var(--primary-blue); font-weight: 700; margin-left: 4px;">(${qCount} Qs)</span>`}</span>
      `;

      if (isAvailable) {
        label.querySelector("input").addEventListener("change", () => {
          syncTermSelectAllCheckbox(termId);
          updatePlannerSelectedCount();
        });
      }

      listContainer.appendChild(label);
    });

    syncTermSelectAllCheckbox(termId);
  });

  updatePlannerSelectedCount();
}

// Synchronize Term "Select All" checkbox state based on child module checkboxes
function syncTermSelectAllCheckbox(termId) {
  const selectAllCb = document.getElementById(`plannerSelectAll_${termId}`);
  if (!selectAllCb) return;

  const childCheckboxes = Array.from(document.querySelectorAll(`.planner-mod-cb[data-term="${termId}"]:not([disabled])`));
  if (childCheckboxes.length === 0) {
    selectAllCb.checked = false;
    selectAllCb.disabled = true;
    selectAllCb.indeterminate = false;
    return;
  }

  selectAllCb.disabled = false;
  const allChecked = childCheckboxes.every(cb => cb.checked);
  const someChecked = childCheckboxes.some(cb => cb.checked);

  selectAllCb.checked = allChecked;
  selectAllCb.indeterminate = (!allChecked && someChecked);
}

// Update Selected Topics Counter Badge
function updatePlannerSelectedCount() {
  const badge = document.getElementById("plannerSelectedCountBadge");
  if (!badge) return;
  const count = document.querySelectorAll(".planner-mod-cb:checked:not([disabled])").length;
  badge.textContent = `${count} topic${count === 1 ? "" : "s"} selected`;
}

// Generate Personalized Daily Study Plan Algorithm
async function generateDailyStudyPlan() {
  const dateInput = document.getElementById("plannerExamDateInput");
  const validationMsg = document.getElementById("plannerDateValidationMsg");
  const examDateStr = dateInput ? dateInput.value : "";

  if (!examDateStr) {
    if (validationMsg) {
      validationMsg.textContent = "⚠️ Please select a valid target exam date.";
      validationMsg.style.color = "var(--crimson-red)";
    }
    return;
  }

  // Calculate calendar days difference
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const examDate = new Date(examDateStr + "T00:00:00");
  const diffTime = examDate.getTime() - today.getTime();
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (isNaN(totalDays) || totalDays <= 0) {
    if (validationMsg) {
      validationMsg.textContent = "⚠️ Target exam date must be at least tomorrow.";
      validationMsg.style.color = "var(--crimson-red)";
    }
    return;
  }

  // Collect selected module IDs (excluding disabled)
  const checkedBoxes = Array.from(document.querySelectorAll(".planner-mod-cb:checked:not([disabled])"));
  const selectedModuleIds = checkedBoxes.map(cb => cb.dataset.modId);

  if (selectedModuleIds.length === 0) {
    await showGlassAlert({
      title: "No Topics Selected",
      message: "Please select at least one syllabus topic to include in your plan.",
      icon: "warning"
    });
    return;
  }

  // Harvest all module objects across all 3 terms in SYLLABUS_DATA
  const allModules = [
    ...((typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA.st1?.modules) || []).map(m => ({ ...m, termId: "st1", termName: "ST-1" })),
    ...((typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA.st2?.modules) || []).map(m => ({ ...m, termId: "st2", termName: "ST-2" })),
    ...((typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA.endterm?.modules) || []).map(m => ({ ...m, termId: "endterm", termName: "End Term" }))
  ];

  const selectedModules = allModules.filter(m => selectedModuleIds.includes(m.id));

  // Decompose modules into individual task items (by sub-type), filtering out zero-question problem types
  const taskItems = [];
  selectedModules.forEach(mod => {
    const modQuestions = (typeof QUIZ_QUESTIONS !== "undefined")
      ? QUIZ_QUESTIONS.filter(q => q.module_id === mod.id)
      : [];

    if (mod.types && mod.types.length > 0) {
      mod.types.forEach(t => {
        const actualCount = modQuestions.filter(q => q.type_id === t.id).length;
        if (actualCount > 0) {
          taskItems.push({
            id: `${mod.id}_${t.id}`,
            termId: mod.termId,
            termName: mod.termName,
            moduleId: mod.id,
            moduleNum: mod.num,
            moduleTitle: mod.title,
            typeId: t.id,
            taskTitle: t.name,
            questionCount: actualCount
          });
        }
      });
    } else if (modQuestions.length > 0) {
      taskItems.push({
        id: `${mod.id}_all`,
        termId: mod.termId,
        termName: mod.termName,
        moduleId: mod.id,
        moduleNum: mod.num,
        moduleTitle: mod.title,
        typeId: "all",
        taskTitle: "Full Topic Practice & MCQs",
        questionCount: modQuestions.length
      });
    }
  });

  if (taskItems.length === 0) {
    await showGlassAlert({
      title: "No Practice Questions",
      message: "The selected topics currently have 0 practice questions available. Please select active syllabus topics (e.g. from ST-1).",
      icon: "warning"
    });
    return;
  }

  const totalTasks = taskItems.length;

  // Determine study days vs final revision milestone
  const hasRevisionDay = (totalDays >= 3);
  const studyDaysCount = hasRevisionDay ? (totalDays - 1) : totalDays;

  // Distribute tasks across active days
  const activeDaysCount = Math.min(studyDaysCount, totalTasks);
  const baseCount = Math.floor(totalTasks / activeDaysCount);
  const remainder = totalTasks % activeDaysCount;

  const days = [];
  let taskCursor = 0;

  for (let i = 0; i < activeDaysCount; i++) {
    const dayTasksCount = baseCount + (i < remainder ? 1 : 0);
    const dayTasks = taskItems.slice(taskCursor, taskCursor + dayTasksCount);
    taskCursor += dayTasksCount;

    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() + i + 1);

    days.push({
      dayIndex: i + 1,
      dateString: formatDateToYMD(dayDate),
      displayDate: dayDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      isRevisionDay: false,
      isBufferDay: false,
      tasks: dayTasks
    });
  }

  // Handle surplus days when time horizon > total tasks
  for (let i = activeDaysCount; i < studyDaysCount; i++) {
    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() + i + 1);
    days.push({
      dayIndex: i + 1,
      dateString: formatDateToYMD(dayDate),
      displayDate: dayDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      isRevisionDay: false,
      isBufferDay: true,
      tasks: []
    });
  }

  // Append dedicated Final Revision Day when applicable
  if (hasRevisionDay) {
    const revDate = new Date(today);
    revDate.setDate(today.getDate() + totalDays);
    days.push({
      dayIndex: totalDays,
      dateString: formatDateToYMD(revDate),
      displayDate: revDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      isRevisionDay: true,
      isBufferDay: false,
      title: "🎯 Final Comprehensive Revision & Full Mock Exam",
      desc: "Review all flagged/bookmarked questions, key formulas, and take a timed exam simulation to solidify accuracy.",
      tasks: []
    });
  }

  // Construct and store user study plan object
  userStudyPlan = {
    examDate: examDateStr,
    createdAt: new Date().toISOString(),
    totalDays,
    studyDaysCount,
    hasRevisionDay,
    totalTasks,
    selectedModuleIds,
    completedTasks: {},
    days
  };

  try {
    localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(userStudyPlan));
  } catch (e) {
    console.warn("Failed to persist study plan to localStorage", e);
  }

  renderPlannerScheduleView();
  showToastNotification("✨ Personalized daily study plan generated successfully!");
}

// Render Generated Schedule View (Timeline Cards & Progress Metrics)
function renderPlannerScheduleView() {
  const setupView = document.getElementById("plannerSetupView");
  const scheduleView = document.getElementById("plannerScheduleView");
  if (setupView) setupView.style.display = "none";
  if (scheduleView) scheduleView.style.display = "flex";

  if (!userStudyPlan || !Array.isArray(userStudyPlan.days)) return;

  const completedMap = userStudyPlan.completedTasks || {};
  const totalTasks = userStudyPlan.totalTasks || 1;
  const completedCount = Object.keys(completedMap).filter(k => completedMap[k]).length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalTasks) * 100));

  // Update Metric Banner
  const daysVal = document.getElementById("plannerStatDaysLeft");
  if (daysVal) daysVal.textContent = userStudyPlan.totalDays;

  const tasksVal = document.getElementById("plannerStatTasksTotal");
  if (tasksVal) tasksVal.textContent = totalTasks;

  const completedVal = document.getElementById("plannerStatTasksCompleted");
  if (completedVal) completedVal.textContent = completedCount;

  const progressVal = document.getElementById("plannerStatProgressPct");
  if (progressVal) progressVal.textContent = `${progressPercent}%`;

  // Update Target Exam Date Display
  const dateDisplay = document.getElementById("plannerExamDateDisplay");
  if (dateDisplay && userStudyPlan.examDate) {
    const examDate = new Date(userStudyPlan.examDate + "T00:00:00");
    dateDisplay.innerHTML = `🎯 Target Exam: <strong>${examDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}</strong> (${userStudyPlan.totalDays} days)`;
  }

  // Render Daily Cards into Timeline Container
  const timeline = document.getElementById("plannerTimelineContainer");
  if (!timeline) return;
  timeline.innerHTML = "";

  userStudyPlan.days.forEach(day => {
    const card = document.createElement("div");
    card.className = "planner-day-card";

    if (day.isRevisionDay) {
      card.classList.add("is-revision");
      card.innerHTML = `
        <div class="planner-day-card-header">
          <div class="planner-day-title-wrap">
            <span class="planner-day-badge revision-badge">Day ${day.dayIndex}</span>
            <span class="planner-day-date">${escapeHtml(day.displayDate)}</span>
          </div>
          <span class="planner-day-status">Milestone</span>
        </div>
        <div class="planner-revision-box">
          <div class="planner-revision-title">${escapeHtml(day.title || "🎯 Final Comprehensive Revision")}</div>
          <div class="planner-revision-desc">${escapeHtml(day.desc || "")}</div>
          <button type="button" class="btn-planner-start-mock" id="btnLaunchPlannerMockExam">
            🚀 Launch Comprehensive Exam Simulation
          </button>
        </div>
      `;

      card.querySelector("#btnLaunchPlannerMockExam")?.addEventListener("click", () => {
        closePlannerModal();
        openExamTopicModal();
      });

    } else if (day.isBufferDay) {
      card.innerHTML = `
        <div class="planner-day-card-header">
          <div class="planner-day-title-wrap">
            <span class="planner-day-badge">Day ${day.dayIndex}</span>
            <span class="planner-day-date">${escapeHtml(day.displayDate)}</span>
          </div>
          <span class="planner-day-status">Buffer Day</span>
        </div>
        <div style="font-size: 13px; color: var(--ink-secondary); padding: 4px 2px;">
          💡 <strong>Deep-Dive & Buffer Session:</strong> Review previously completed problem types, re-test flagged MCQs, or take a quick practice quiz.
        </div>
      `;
    } else {
      const allTasksDone = (day.tasks.length > 0 && day.tasks.every(t => completedMap[t.id]));
      if (allTasksDone) card.classList.add("is-completed");

      const tasksHtml = day.tasks.map(task => {
        const isDone = Boolean(completedMap[task.id]);
        const hasQuestions = (task.questionCount > 0);
        return `
          <div class="planner-task-item ${isDone ? "is-done" : ""}" data-task-id="${escapeHtml(task.id)}">
            <div class="planner-task-left">
              <input type="checkbox" class="planner-task-cb" data-task-id="${escapeHtml(task.id)}" ${isDone ? "checked" : ""} />
              <div class="planner-task-info">
                <span class="planner-task-title">${escapeHtml(task.taskTitle)}</span>
                <span class="planner-task-sub">${escapeHtml(task.termName)} • Mod ${task.moduleNum}: ${escapeHtml(task.moduleTitle)} ${hasQuestions ? `(${task.questionCount} Qs)` : "(Syllabus Review)"}</span>
              </div>
            </div>
            <button type="button" class="btn-planner-practice" data-term="${task.termId}" data-mod="${task.moduleId}" data-type="${task.typeId}">
              ${hasQuestions ? "Practice →" : "Review Syllabus →"}
            </button>
          </div>
        `;
      }).join("");

      card.innerHTML = `
        <div class="planner-day-card-header">
          <div class="planner-day-title-wrap">
            <span class="planner-day-badge">Day ${day.dayIndex}</span>
            <span class="planner-day-date">${escapeHtml(day.displayDate)}</span>
          </div>
          <span class="planner-day-status ${allTasksDone ? "completed" : ""}">
            ${allTasksDone ? "✓ Day Completed" : `${day.tasks.length} Task${day.tasks.length === 1 ? "" : "s"}`}
          </span>
        </div>
        <div class="planner-tasks-list">
          ${tasksHtml}
        </div>
      `;

      // Checkbox event listeners
      card.querySelectorAll(".planner-task-cb").forEach(cb => {
        cb.addEventListener("change", () => {
          const tId = cb.dataset.taskId;
          togglePlannerTask(tId, cb.checked);
        });
      });

      // Jump to practice buttons
      card.querySelectorAll(".btn-planner-practice").forEach(btn => {
        btn.addEventListener("click", () => {
          const tId = btn.dataset.term;
          const mId = btn.dataset.mod;
          const typeId = btn.dataset.type;
          jumpToPlannerTopic(tId, mId, typeId);
        });
      });
    }

    timeline.appendChild(card);
  });
}

// Toggle individual task completion state
function togglePlannerTask(taskId, isChecked) {
  if (!userStudyPlan) return;
  userStudyPlan.completedTasks = userStudyPlan.completedTasks || {};
  userStudyPlan.completedTasks[taskId] = isChecked;

  try {
    localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(userStudyPlan));
  } catch (e) {
    console.warn("Failed to persist task state", e);
  }

  // Check if 100% completed to trigger celebration
  const totalTasks = userStudyPlan.totalTasks || 1;
  const completedCount = Object.keys(userStudyPlan.completedTasks).filter(k => userStudyPlan.completedTasks[k]).length;
  if (completedCount === totalTasks && typeof ConfettiManager !== "undefined") {
    ConfettiManager.fireBurst();
    showToastNotification("🎉 Incredible! You completed 100% of your study planner!");
  }

  renderPlannerScheduleView();
}

// Jump directly to practice mode for a specific syllabus module and problem type
function jumpToPlannerTopic(termId, moduleId, typeId) {
  closePlannerModal();

  // Exit exam or results mode if active
  if (isExamMode) {
    isExamMode = false;
    const res = document.getElementById("quizResultsScreen");
    if (res) res.classList.remove("is-active");
  }

  // Switch term if necessary
  if (termId && termId !== currentTermId) {
    switchTerm(termId);
  }

  // Check if module has practice questions
  const hasQuestions = (typeof QUIZ_QUESTIONS !== "undefined")
    ? QUIZ_QUESTIONS.some(q => q.module_id === moduleId && (typeId === "all" || q.type_id === typeId))
    : false;

  // Select module
  activeModuleId = moduleId;

  // Select type
  if (typeId && typeId !== "all") {
    activeTypeId = typeId;
  } else {
    const curMod = SYLLABUS_MODULES.find(m => m.id === moduleId);
    if (curMod && curMod.types && curMod.types.length > 0) {
      activeTypeId = curMod.types[0].id;
    }
  }

  showFlaggedOnly = false;
  activeDifficultyFilter = "all";
  saveCurrentState();
  renderApplication();
  window.scrollTo(0, 0);

  if (!hasQuestions) {
    showToastNotification(`ℹ️ Module ${moduleId} questions upload pending. Opened topic syllabus.`);
  }
}

// Reset Planner State and return to initial configuration form
async function resetStudyPlanner() {
  const confirmed = await showGlassConfirm({
    title: "Reset Study Planner",
    message: "Reset your study planner? This will erase your current daily schedule and allow you to configure a new target date.",
    confirmText: "Reset Planner",
    cancelText: "Cancel",
    isDestructive: true,
    icon: "reset"
  });
  if (confirmed) {
    userStudyPlan = null;
    try {
      localStorage.removeItem(PLANNER_STORAGE_KEY);
    } catch (e) {
      console.warn("Failed to clear planner storage", e);
    }
    renderPlannerSetupView();
    showToastNotification("Study planner reset. Configure your new target exam date.");
  }
}

// Exam Mode Toggle
function toggleExamMode() {
  if (isExamMode) {
    isExamMode = false;
    const res = document.getElementById("quizResultsScreen");
    if (res) res.classList.remove("is-active");
    renderApplication();
    window.scrollTo(0, 0);
  } else {
    openExamTopicModal();
  }
}

// Reset Progress
async function resetProgressPrompt() {
  const confirmed = await showGlassConfirm({
    title: "Reset All Progress",
    message: "Are you sure you want to reset all progress, bookmarks, and test scores?",
    confirmText: "Reset All",
    cancelText: "Cancel",
    isDestructive: true,
    icon: "reset"
  });
  if (confirmed) {
    localStorage.removeItem(STORAGE_KEY);
    userPracticeAnswers = {};
    userExamAnswers = {};
    userReviewFlags = new Set();
    currentTermId = "st1";
    if (typeof getSyllabusModules === "function") {
      SYLLABUS_MODULES = getSyllabusModules("st1");
    }
    activeModuleId = "mod1";
    activeTypeId = "type_1";
    isExamMode = false;
    updateTermSelectorButtonsUI();
    const res = document.getElementById("quizResultsScreen");
    if (res) res.classList.remove("is-active");
    renderApplication();
  }
}

// Clear Answers
async function clearAllAnswersPrompt() {
  if (isExamMode) {
    const confirmed = await showGlassConfirm({
      title: "Clear Exam Answers",
      message: "Clear all answers in Exam Mode?",
      confirmText: "Clear All",
      cancelText: "Cancel",
      isDestructive: true,
      icon: "broom"
    });
    if (confirmed) {
      userExamAnswers = {};
      saveCurrentState();
      renderFullExamQuestions();
      renderTopProgressTrack();
    }
  } else {
    const totalQ = QUIZ_QUESTIONS.length;
    const confirmed = await showGlassConfirm({
      title: "Clear All Answers",
      message: "Are you sure you want to clear all your practice answers? Your bookmarks and study plan will be kept.",
      confirmText: "Clear All",
      cancelText: "Cancel",
      isDestructive: true,
      icon: "broom"
    });
    if (confirmed) {
      userPracticeAnswers = {};
      saveCurrentState();
      const res = document.getElementById("quizResultsScreen");
      if (res) res.classList.remove("is-active");
      renderApplication();
    }
  }
}

// Clear Single Choice
function clearQuestionChoice(qId) {
  const qCard = document.getElementById(`q_card_${qId}`);
  const q = QUIZ_QUESTIONS.find(item => item.id === qId);
  if (qCard && q) {
    const optsStack = qCard.querySelector(".tab-q-options-stack");
    if (optsStack && typeof handlePracticeClear === "function") {
      handlePracticeClear(q, qCard, optsStack);
      return;
    }
  }
  if (userPracticeAnswers[qId] !== undefined) {
    delete userPracticeAnswers[qId];
    saveCurrentState();
    renderApplication();
  }
}

// Toggle Review Flag
function toggleQuestionFlag(qId) {
  const qCard = document.getElementById(`q_card_${qId}`);
  const q = QUIZ_QUESTIONS.find(item => item.id === qId);
  if (qCard && q && typeof handlePracticeFlagToggle === "function") {
    handlePracticeFlagToggle(q, qCard);
    return;
  }
  if (userReviewFlags.has(qId)) {
    userReviewFlags.delete(qId);
  } else {
    userReviewFlags.add(qId);
  }
  saveCurrentState();
  renderApplication();
}

// Calculate Total Score
function calcTotalScore(mode = (isExamMode ? "exam" : "practice")) {
  const answers = mode === "exam" ? userExamAnswers : userPracticeAnswers;
  return QUIZ_QUESTIONS.reduce((sum, q) => {
    return sum + (answers[q.id] === q.correct ? (q.points || 1) : 0);
  }, 0);
}

// Get Stats for a Module
function getModuleStats(moduleId) {
  const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === moduleId);
  const total = modQuestions.length;
  const answered = modQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
  const correct = modQuestions.filter(q => userPracticeAnswers[q.id] === q.correct).length;
  const score = modQuestions.filter(q => userPracticeAnswers[q.id] === q.correct).reduce((s, q) => s + (q.points || 1), 0);
  const maxScore = modQuestions.reduce((s, q) => s + (q.points || 1), 0);
  return { total, answered, correct, score, maxScore, pct: total ? Math.round((answered / total) * 100) : 0 };
}

// =============================================================================
// SECTION 6: SIDEBAR NAVIGATION & MODULE SELECTION
// =============================================================================

// Navigate to a specific Module & Type
function selectModuleAndType(moduleId, typeId) {
  activeModuleId = moduleId;
  activeTypeId = typeId || "type_1";
  const sidebarPanel = document.getElementById("sidebarPanel");
  if (sidebarPanel && sidebarPanel.classList.contains("is-mobile-open")) {
    sidebarPanel.classList.remove("is-mobile-open");
    const mobileToggle = document.getElementById("btnToggleMobileSidebar");
    if (mobileToggle) {
      mobileToggle.setAttribute("aria-expanded", "false");
      const label = mobileToggle.querySelector(".mobile-toggle-label");
      if (label) label.textContent = "Browse";
    }
  }
  renderApplication();
  window.scrollTo(0, 120);
}

// Smooth Numerical Score / Percentage Counter Animation
const activeNumberAnimations = new WeakMap();

function animateNumberValue(element, targetVal, duration = 380, formatFn = null) {
  if (!element) return;
  const targetNum = Number(targetVal) || 0;
  
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.textContent = formatFn ? formatFn(targetNum) : String(targetNum);
    return;
  }

  const currentParsed = parseInt(element.textContent.replace(/[^0-9]/g, ""), 10);
  const startNum = isNaN(currentParsed) ? 0 : currentParsed;
  if (startNum === targetNum) {
    element.textContent = formatFn ? formatFn(targetNum) : String(targetNum);
    return;
  }

  const prevAnim = activeNumberAnimations.get(element);
  if (prevAnim) cancelAnimationFrame(prevAnim);

  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    const currentNum = Math.round(startNum + (targetNum - startNum) * ease);
    element.textContent = formatFn ? formatFn(currentNum) : String(currentNum);

    if (progress < 1) {
      const rafId = requestAnimationFrame(step);
      activeNumberAnimations.set(element, rafId);
    } else {
      activeNumberAnimations.delete(element);
      element.textContent = formatFn ? formatFn(targetNum) : String(targetNum);
    }
  }
  const rafId = requestAnimationFrame(step);
  activeNumberAnimations.set(element, rafId);
}

// Lightweight Click Ripple Engine for Interactive Buttons
function initButtonRipples() {
  document.addEventListener("pointerdown", (e) => {
    const btn = e.target.closest(
      ".btn-action-nav, .btn-minimal-primary, .btn-minimal-secondary, " +
      ".btn-flag-single-q, .btn-flag-action, .btn-ppt-banner, .btn-clear-choice, " +
      "#btnStartExamWithSelectedTopics, #btnPrevTypeTab, #btnNextTypeTab, #btnModulePPT"
    );
    if (!btn || btn.disabled) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "btn-ripple-wave";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);
    setTimeout(() => {
      if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
    }, 500);
  }, { passive: true });
}

// Track previous progress percentage to trigger subtle highlight sweep on increase
let lastRenderedProgressPct = 0;
let progressSweepTimeout = null;

function triggerProgressBarSweep(barTrack) {
  if (!barTrack) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  barTrack.classList.remove("progress-sweep");
  void barTrack.offsetWidth; // Force reflow
  barTrack.classList.add("progress-sweep");
  if (progressSweepTimeout) clearTimeout(progressSweepTimeout);
  progressSweepTimeout = setTimeout(() => {
    barTrack.classList.remove("progress-sweep");
  }, 700);
}

// Render Top Progress Bar (Type-Specific in Practice Mode, Exam-Specific in Exam Mode)
function renderTopProgressTrack() {
  const qNumLabel = document.getElementById("labelCurrentQuestionNumber");
  const pctLabel = document.getElementById("labelProgressPercentage");
  const ansCountLabel = document.getElementById("labelAnsweredCount");
  const totalCountLabel = document.getElementById("labelTotalQuestionsCount");
  const scoreLabel = document.getElementById("labelCurrentTotalScore");
  const maxScoreLabel = document.getElementById("labelMaxScore");
  const barTrack = document.getElementById("overallProgressBarTrack");
  const chipEl = document.getElementById("labelTypeProgressChip");

  let currentPct = 0;
  let currentAnsCount = 0;
  let currentTotalQ = 0;

  if (isExamMode) {
    // Continuous Exam Mode Progress
    const examPool = (activeExamQuestions && activeExamQuestions.length > 0)
      ? activeExamQuestions
      : QUIZ_QUESTIONS.filter(q => (selectedExamModuleIds || []).includes(q.module_id));
    const totalExamQuestions = examPool.length;
    const answeredExamCount = examPool.filter(q => userExamAnswers[q.id] !== undefined).length;
    const examScore = examPool.filter(q => userExamAnswers[q.id] === q.correct).reduce((sum, q) => sum + (q.points || 1), 0);
    const maxExamScore = examPool.reduce((sum, q) => sum + (q.points || 1), 0);
    const examPct = totalExamQuestions > 0 ? Math.round((answeredExamCount / totalExamQuestions) * 100) : 0;

    currentPct = examPct;
    currentAnsCount = answeredExamCount;
    currentTotalQ = totalExamQuestions;

    if (qNumLabel) {
      const examTitle = `Exam Mode (${totalExamQuestions} Questions)`;
      if (qNumLabel.dataset.activeTitle !== examTitle) {
        qNumLabel.dataset.activeTitle = examTitle;
        qNumLabel.classList.add("is-updating");
        setTimeout(() => {
          qNumLabel.innerHTML = `<span class="telemetry-mod-name">Exam Mode</span> <span class="telemetry-mod-sub">(${totalExamQuestions} Questions)</span>`;
          qNumLabel.classList.remove("is-updating");
        }, 110);
      }
    }
    if (pctLabel) animateNumberValue(pctLabel, examPct, 380, val => `${val}%`);
    if (ansCountLabel) animateNumberValue(ansCountLabel, answeredExamCount, 380);
    if (totalCountLabel) totalCountLabel.textContent = totalExamQuestions;
    if (scoreLabel) animateNumberValue(scoreLabel, examScore, 380);
    if (maxScoreLabel) maxScoreLabel.textContent = maxExamScore;
  } else {
    // PRACTICE MODE: Separate Progress Bar for Each Type (Type-Specific, Not Module-Wide)
    const curMod = SYLLABUS_MODULES.find(m => m.id === activeModuleId) || SYLLABUS_MODULES[0];
    const curType = (curMod && curMod.types) ? curMod.types.find(t => t.id === activeTypeId) : null;

    const typeQuestions = curType
      ? QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId && q.type_id === activeTypeId)
      : QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId);

    const totalTypeQ = typeQuestions.length;
    const answeredTypeQ = typeQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
    const typeScore = typeQuestions.filter(q => userPracticeAnswers[q.id] === q.correct).reduce((s, q) => s + (q.points || 1), 0);
    const typeMaxScore = typeQuestions.reduce((s, q) => s + (q.points || 1), 0);
    const typePct = totalTypeQ > 0 ? Math.round((answeredTypeQ / totalTypeQ) * 100) : 0;

    currentPct = typePct;
    currentAnsCount = answeredTypeQ;
    currentTotalQ = totalTypeQ;

    if (qNumLabel) {
      const typeIndex = (curMod && curMod.types) ? curMod.types.findIndex(t => t.id === activeTypeId) : 0;
      const typeNum = typeIndex >= 0 ? typeIndex + 1 : 1;
      let targetText = "";
      let targetHtml = "";

      if (curType) {
        // e.g. curType.name = "Type 1: Family Tree & Generation Deduction"
        const colonIdx = curType.name.indexOf(":");
        const subName = colonIdx !== -1 ? curType.name.slice(colonIdx + 1).trim() : "";
        const baseName = `${curMod.title} Type ${typeNum}`;

        if (subName) {
          targetText = `${baseName} • ${subName}`;
          targetHtml = `<span class="telemetry-mod-name">${escapeHtml(baseName)}</span><span class="telemetry-mod-sub"> • ${escapeHtml(subName)}</span>`;
        } else {
          targetText = baseName;
          targetHtml = `<span class="telemetry-mod-name">${escapeHtml(baseName)}</span>`;
        }
      } else {
        const baseName = `${curMod.title}`;
        targetText = `${baseName} (${totalTypeQ} Questions)`;
        targetHtml = `<span class="telemetry-mod-name">${escapeHtml(baseName)}</span> <span class="telemetry-mod-sub">(${totalTypeQ} Questions)</span>`;
      }

      if (qNumLabel.dataset.activeTitle !== targetText) {
        qNumLabel.dataset.activeTitle = targetText;
        qNumLabel.classList.add("is-updating");
        setTimeout(() => {
          qNumLabel.innerHTML = targetHtml;
          qNumLabel.classList.remove("is-updating");
        }, 110);
      }
    }
    if (pctLabel) animateNumberValue(pctLabel, typePct, 380, val => `${val}%`);
    if (ansCountLabel) animateNumberValue(ansCountLabel, answeredTypeQ, 380);
    if (totalCountLabel) totalCountLabel.textContent = totalTypeQ;
    if (scoreLabel) animateNumberValue(scoreLabel, typeScore, 380);
    if (maxScoreLabel) maxScoreLabel.textContent = typeMaxScore;
  }

  // Animate Bar Track & Trigger Highlight Sweep when progress increases
  if (barTrack) {
    if (currentPct > lastRenderedProgressPct) {
      triggerProgressBarSweep(barTrack);
    }
    barTrack.style.width = `${currentPct}%`;
  }

  // Animate Telemetry HUD Chip Percentage smoothly with subtle pulse
  if (chipEl) {
    let chipValEl = chipEl.querySelector(".chip-pct");
    let chipSubEl = chipEl.querySelector(".chip-sub");
    if (!chipValEl || !chipSubEl) {
      chipEl.innerHTML = `<span class="chip-val chip-pct">${currentPct}%</span> <span class="chip-sub">(${currentAnsCount}/${currentTotalQ} Qs)</span>`;
      chipValEl = chipEl.querySelector(".chip-pct");
      chipSubEl = chipEl.querySelector(".chip-sub");
    }
    if (chipValEl) {
      animateNumberValue(chipValEl, currentPct, 380, val => `${val}%`);
    }
    if (chipSubEl) {
      chipSubEl.textContent = `(${currentAnsCount}/${currentTotalQ} Qs)`;
    }
    if (currentPct > lastRenderedProgressPct) {
      chipEl.classList.remove("pulse-update");
      void chipEl.offsetWidth; // Force reflow
      chipEl.classList.add("pulse-update");
      setTimeout(() => chipEl.classList.remove("pulse-update"), 300);
    }
  }
  lastRenderedProgressPct = currentPct;
}


// Synchronize solution accordion toggle from inside the feedback headline
function syncSolutionToggleFromInner(buttonElem) {
  const fb = buttonElem.closest('.exam-feedback-box, .full-exam-feedback-box');
  if (!fb) return;
  fb.classList.toggle('is-collapsed');
  const isCollapsed = fb.classList.contains('is-collapsed');

  const innerLabel = buttonElem.querySelector('.toggle-label');
  if (innerLabel) {
    innerLabel.textContent = isCollapsed ? 'Show Explanation ▾' : 'Hide Explanation ▴';
  }
  buttonElem.setAttribute('aria-expanded', !isCollapsed);

  // Sync header button if present in same card
  const card = fb.closest('.tab-question-item, .full-exam-item-card');
  if (card) {
    const headerSolBtn = card.querySelector('.btn-sol-toggle-q');
    if (headerSolBtn) {
      headerSolBtn.innerHTML = isCollapsed ? '💡 Show Solution' : '💡 Hide Solution';
      headerSolBtn.classList.toggle('is-expanded-state', !isCollapsed);
      headerSolBtn.setAttribute('aria-expanded', !isCollapsed);
    }
  }
}

// Master Toggle for Solution Button in Header Action Group
function toggleQuestionSolution(q, qCard) {
  if (!q || !qCard) return;

  const solBtn = qCard.querySelector(`#btnSol_${q.id}`) || qCard.querySelector(`#btnExamSol_${q.id}`);
  let feedbackBox = qCard.querySelector('.exam-feedback-box, .full-exam-feedback-box');

  // If question is not answered yet and feedback box doesn't exist, create it for study
  if (!feedbackBox) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const correctIdx = (q.options || []).indexOf(q.correct);
    const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
    feedbackBox = document.createElement('div');
    feedbackBox.className = 'exam-feedback-box is-good is-shown';
    feedbackBox.innerHTML = generateFeedbackContentHtml(q, true, correctLetter, true);
    qCard.appendChild(feedbackBox);

    if (solBtn) {
      solBtn.innerHTML = '💡 Hide Solution';
      solBtn.classList.add('is-expanded-state');
      solBtn.setAttribute('aria-expanded', 'true');
    }
    return;
  }

  // Toggle collapsed state
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    try { navigator.vibrate(12); } catch (e) {}
  }
  const isCurrentlyCollapsed = feedbackBox.classList.contains('is-collapsed');
  if (isCurrentlyCollapsed) {
    // Expand solution
    feedbackBox.classList.remove('is-collapsed');
    if (solBtn) {
      solBtn.innerHTML = '💡 Hide Solution';
      solBtn.classList.add('is-expanded-state');
      solBtn.setAttribute('aria-expanded', 'true');
    }
    const innerToggle = feedbackBox.querySelector('.btn-toggle-solution');
    if (innerToggle) {
      const label = innerToggle.querySelector('.toggle-label');
      if (label) label.textContent = 'Hide Explanation ▴';
      innerToggle.setAttribute('aria-expanded', 'true');
    }
  } else {
    // Collapse solution
    feedbackBox.classList.add('is-collapsed');
    if (solBtn) {
      solBtn.innerHTML = '💡 Show Solution';
      solBtn.classList.remove('is-expanded-state');
      solBtn.setAttribute('aria-expanded', 'false');
    }
    const innerToggle = feedbackBox.querySelector('.btn-toggle-solution');
    if (innerToggle) {
      const label = innerToggle.querySelector('.toggle-label');
      if (label) label.textContent = 'Show Explanation ▾';
      innerToggle.setAttribute('aria-expanded', 'false');
    }
  }
}

// Copy Question & Options to Clipboard
function copyQuestionToClipboard(q, qNum, btnElem) {
  const letters = ["(a)", "(b)", "(c)", "(d)", "(e)"];
  const formattedOpts = (q.options || []).map((opt, i) => `${letters[i] || `(${i + 1})`} ${opt}`).join("\n");
  const fullText = `Q ${qNum}. ${q.question}\n\n${formattedOpts}`;

  const markSuccess = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate(18); } catch (e) {}
    }
    if (btnElem) {
      btnElem.classList.remove("is-selection-highlighted");
      const origHtml = btnElem.innerHTML;
      btnElem.innerHTML = `<span>✓ Copied!</span>`;
      btnElem.classList.add("is-copied");
      setTimeout(() => {
        btnElem.innerHTML = origHtml;
        btnElem.classList.remove("is-copied");
      }, 1600);
    }
    // Trigger floating glass toast at bottom center
    showGlassCopyToast();
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullText).then(markSuccess).catch(() => {
      fallbackCopyText(fullText, markSuccess);
    });
  } else {
    fallbackCopyText(fullText, markSuccess);
  }
}

function fallbackCopyText(text, callback) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  ta.style.top = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
    if (callback) callback();
  } catch (e) {
    console.error("Fallback copy failed:", e);
  }
  document.body.removeChild(ta);
}

// Floating Toast Notification
// Question Text Selection -> Highlight Copy Button Affordance
function initQuestionSelectionCopyAffordance() {
  let selectionRafId = null;

  function clearAllCopyHighlights() {
    const highlightedBtns = document.querySelectorAll(".btn-copy-q.is-selection-highlighted");
    highlightedBtns.forEach(btn => btn.classList.remove("is-selection-highlighted"));
  }

  function handleQuestionSelection() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      clearAllCopyHighlights();
      return;
    }

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) {
      clearAllCopyHighlights();
      return;
    }

    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (!range) {
      clearAllCopyHighlights();
      return;
    }

    const commonNode = range.commonAncestorContainer;
    const parentElem = commonNode.nodeType === Node.ELEMENT_NODE ? commonNode : commonNode.parentElement;
    if (!parentElem) {
      clearAllCopyHighlights();
      return;
    }

    // Check if selection is within a question card (Practice Mode or Exam Mode)
    const card = parentElem.closest(".tab-question-item, .full-exam-item-card");
    if (!card) {
      clearAllCopyHighlights();
      return;
    }

    const copyBtn = card.querySelector(".btn-copy-q");
    if (!copyBtn) {
      clearAllCopyHighlights();
      return;
    }

    // Highlight this copy button if not already highlighted
    if (!copyBtn.classList.contains("is-selection-highlighted")) {
      clearAllCopyHighlights();
      copyBtn.classList.add("is-selection-highlighted");
    }
  }

  document.addEventListener("selectionchange", () => {
    if (selectionRafId) cancelAnimationFrame(selectionRafId);
    selectionRafId = requestAnimationFrame(handleQuestionSelection);
  }, { passive: true });

  // When user attempts to copy (Ctrl+C / Cmd+C / Right-Click Copy) while text is selected inside a question card
  document.addEventListener("copy", () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (!range) return;
    const commonNode = range.commonAncestorContainer;
    const parentElem = commonNode.nodeType === Node.ELEMENT_NODE ? commonNode : commonNode.parentElement;
    const card = parentElem ? parentElem.closest(".tab-question-item, .full-exam-item-card") : null;
    if (card) {
      const copyBtn = card.querySelector(".btn-copy-q");
      if (copyBtn) {
        copyBtn.classList.add("is-selection-highlighted", "is-copy-pulse");
        setTimeout(() => {
          copyBtn.classList.remove("is-copy-pulse");
        }, 1200);
        showToastNotification("📋 Tip: Click the highlighted 'Copy' button to copy full question with all options!", 3500);
      }
    }
  }, { passive: true });
}

// =============================================================================
// GLASSMORPHISM TOAST & CONFIRMATION MODAL SYSTEM
// =============================================================================

let glassCopyToastTimer = null;
let glassCopyToastHideTimer = null;

function showGlassCopyToast() {
  let toast = document.getElementById("glassCopyToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "glassCopyToast";
    toast.className = "glass-copy-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.innerHTML = `<span class="glass-toast-icon">✓</span><span class="glass-toast-text">Question and options are copied</span>`;
    document.body.appendChild(toast);
  }

  // If already scheduled, clear both active timers to reset cleanly
  if (glassCopyToastTimer) {
    clearTimeout(glassCopyToastTimer);
    glassCopyToastTimer = null;
  }
  if (glassCopyToastHideTimer) {
    clearTimeout(glassCopyToastHideTimer);
    glassCopyToastHideTimer = null;
  }

  toast.classList.remove("is-hiding");
  // Trigger DOM reflow so CSS animation can replay smoothly if clicked repeatedly
  void toast.offsetWidth;
  toast.classList.add("is-visible");

  // Stay visible for 500ms (0.5s), then smoothly fade out (150ms)
  glassCopyToastTimer = setTimeout(() => {
    toast.classList.add("is-hiding");
    toast.classList.remove("is-visible");
    glassCopyToastHideTimer = setTimeout(() => {
      toast.classList.remove("is-hiding");
      glassCopyToastHideTimer = null;
    }, 150);
    glassCopyToastTimer = null;
  }, 500);
}

function showGlassConfirm({
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDestructive = true,
  icon = "warning"
} = {}) {
  return new Promise((resolve) => {
    const existing = document.getElementById("glassConfirmOverlay");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "glassConfirmOverlay";
    overlay.className = "glass-confirm-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    let iconHtml = "⚠️";
    let iconClass = "is-warning";
    if (icon === "broom" || icon === "trash" || isDestructive) {
      iconHtml = (icon === "broom") ? "🧹" : (icon === "reset" ? "🔄" : "⚠️");
      iconClass = "is-destructive";
    } else if (icon === "info") {
      iconHtml = "ℹ️";
      iconClass = "is-info";
    }

    overlay.innerHTML = `
      <div class="glass-confirm-card" role="document">
        <div class="glass-confirm-icon-badge ${iconClass}">
          <span>${iconHtml}</span>
        </div>
        <h3 class="glass-confirm-title">${escapeHtml(title)}</h3>
        <p class="glass-confirm-message">${escapeHtml(message)}</p>
        <div class="glass-confirm-actions">
          <button type="button" class="glass-confirm-btn glass-confirm-btn-cancel" id="btnGlassConfirmCancel">
            ${escapeHtml(cancelText)}
          </button>
          <button type="button" class="glass-confirm-btn ${isDestructive ? 'glass-confirm-btn-confirm' : 'glass-confirm-btn-primary'}" id="btnGlassConfirmOk">
            ${escapeHtml(confirmText)}
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add("is-open");
    });

    let isDone = false;
    const finish = (result) => {
      if (isDone) return;
      isDone = true;
      document.removeEventListener("keydown", handleKeyDown);
      overlay.classList.remove("is-open");
      overlay.classList.add("is-closing");
      setTimeout(() => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        resolve(result);
      }, 150);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        finish(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        finish(false);
      }
    });

    const cancelBtn = overlay.querySelector("#btnGlassConfirmCancel");
    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => finish(false));
      cancelBtn.focus();
    }

    const okBtn = overlay.querySelector("#btnGlassConfirmOk");
    if (okBtn) {
      okBtn.addEventListener("click", () => finish(true));
    }
  });
}

function showGlassAlert({
  title = "Notice",
  message = "",
  confirmText = "OK",
  icon = "info"
} = {}) {
  return new Promise((resolve) => {
    const existing = document.getElementById("glassConfirmOverlay");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "glassConfirmOverlay";
    overlay.className = "glass-confirm-overlay";
    overlay.setAttribute("role", "alertdialog");
    overlay.setAttribute("aria-modal", "true");

    let iconHtml = (icon === "warning") ? "⚠️" : (icon === "success" ? "✓" : "ℹ️");
    let iconClass = (icon === "warning") ? "is-warning" : "is-info";

    overlay.innerHTML = `
      <div class="glass-confirm-card" role="document">
        <div class="glass-confirm-icon-badge ${iconClass}">
          <span>${iconHtml}</span>
        </div>
        <h3 class="glass-confirm-title">${escapeHtml(title)}</h3>
        <p class="glass-confirm-message">${escapeHtml(message)}</p>
        <div class="glass-confirm-actions is-single-action">
          <button type="button" class="glass-confirm-btn glass-confirm-btn-primary" id="btnGlassAlertOk">
            ${escapeHtml(confirmText)}
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add("is-open");
    });

    let isDone = false;
    const finish = () => {
      if (isDone) return;
      isDone = true;
      document.removeEventListener("keydown", handleKeyDown);
      overlay.classList.remove("is-open");
      overlay.classList.add("is-closing");
      setTimeout(() => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        resolve();
      }, 150);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Enter") {
        e.preventDefault();
        finish();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) finish();
    });

    const okBtn = overlay.querySelector("#btnGlassAlertOk");
    if (okBtn) {
      okBtn.addEventListener("click", finish);
      okBtn.focus();
    }
  });
}

// Global safety net: intercept any direct window.alert / window.confirm
if (typeof window !== "undefined") {
  window.alert = function(msg) {
    showGlassAlert({
      title: "Notice",
      message: String(msg),
      icon: "info"
    });
  };
}

function showToastNotification(message, duration = 3500) {
  let toast = document.getElementById("appToastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToastNotification";
    toast.className = "app-toast-popup";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  if (window._toastTimer) clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, duration);
}

// Open Question in ChatGPT & Copy Prompt
function openInChatGPT(q, qNum, btnElem) {
  const letters = ["(a)", "(b)", "(c)", "(d)", "(e)"];
  const formattedOpts = (q.options || []).map((opt, i) => `${letters[i] || `(${i + 1})`} ${opt}`).join("\n");
  const fullPrompt = `Solve this aptitude question step-by-step with clear logical explanation and specify the correct option:\n\nQuestion: ${q.question}\n\nOptions:\n${formattedOpts}`;

  // Use a real anchor navigation rather than window.open(). This is more
  // reliably treated as a user-initiated navigation by Vercel/Chrome/Edge.
  // We pass the prompt via ChatGPT's ?q= parameter so it automatically pre-fills or submits,
  // while simultaneously copying it to the clipboard as an instant fallback.
  const chatLink = document.createElement("a");
  chatLink.href = `https://chatgpt.com/?q=${encodeURIComponent(fullPrompt)}`;
  chatLink.target = "_blank";
  chatLink.rel = "noopener noreferrer";
  chatLink.style.display = "none";
  document.body.appendChild(chatLink);
  chatLink.click();
  chatLink.remove();

  const showCopiedState = () => {
    if (btnElem) {
      const origHtml = btnElem.innerHTML;
      btnElem.innerHTML = `<span>✨ Prompt Sent!</span>`;
      btnElem.classList.add("is-gemini-copied");
      setTimeout(() => {
        btnElem.innerHTML = origHtml;
        btnElem.classList.remove("is-gemini-copied");
      }, 3500);
    }

    showToastNotification("✨ Opening ChatGPT with question loaded! (Also copied to clipboard)");
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullPrompt).then(showCopiedState).catch(() => {
      fallbackCopyText(fullPrompt, showCopiedState);
    });
  } else {
    fallbackCopyText(fullPrompt, showCopiedState);
  }
}

// RENDER SIDEBAR: Module Navigator for Active Term
function renderSidebarAccordion() {
  const container = document.getElementById("sidebarAccordionContainer");
  if (!container) return;
  container.innerHTML = "";

  const sidebarBadge = document.getElementById("sidebarTotalBadge");
  if (sidebarBadge) {
    sidebarBadge.textContent = `${SYLLABUS_MODULES.length} Modules`;
  }

  SYLLABUS_MODULES.forEach((mod) => {
    const stats = getModuleStats(mod.id);
    const isCurrentMod = (activeModuleId === mod.id);

    const itemDiv = document.createElement("div");
    itemDiv.className = `module-acc-item ${isCurrentMod ? 'is-current-module' : ''}`;

    // Module Tab Header Button
    const btn = document.createElement("button");
    btn.className = `module-acc-btn ${isCurrentMod ? 'active' : ''}`;
    const termObj = (typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA[currentTermId]) ? SYLLABUS_DATA[currentTermId] : null;
    const fallbackTag = termObj ? termObj.name : 'Aptitude';
    btn.innerHTML = `
      <div class="module-info-left">
        <strong class="mod-title-text">${mod.num}. ${escapeHtml(mod.title)}</strong>
        <span class="mod-lec-text">${escapeHtml(mod.lectures || fallbackTag)}</span>
      </div>
      <div class="module-info-right" style="display:inline-flex;align-items:center;gap:6px;">
        <span class="module-pill-badge">${stats.total > 0 ? `${stats.answered}/${stats.total}` : '0 Qs'}</span>
        <span class="module-acc-chevron" aria-hidden="true">▾</span>
      </div>
    `;

    // Dropdown / Accordion Body inside the Module Tab (Zero-Jank CSS Grid Drawer)
    const drawer = document.createElement("div");
    drawer.className = `module-acc-drawer ${isCurrentMod ? 'is-expanded' : ''}`;

    const bodyArea = document.createElement("div");
    bodyArea.className = "module-questions-grid";
    drawer.appendChild(bodyArea);

    btn.addEventListener("click", () => {
      const isExpanded = drawer.classList.contains("is-expanded");
      document.querySelectorAll(".module-acc-drawer").forEach(g => g.classList.remove("is-expanded"));
      document.querySelectorAll(".module-acc-btn").forEach(b => b.classList.remove("active"));
      if (!isExpanded) {
        drawer.classList.add("is-expanded");
        btn.classList.add("active");
        activeModuleId = mod.id;
        const firstType = (mod.types && mod.types.length > 0) ? mod.types[0].id : "type_1";
        selectModuleAndType(mod.id, firstType);
      }
    });

    // ONLY render subtabs for modules that have types (i.e. Coded Relation)
    const types = mod.types || [];
    if (types.length > 0) {
      const typeTabsContainer = document.createElement("div");
      typeTabsContainer.className = "sidebar-type-tabs-container";

      types.forEach((t) => {
        const qCountInType = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id && q.type_id === t.id).length;
        const answeredInType = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id && q.type_id === t.id && userPracticeAnswers[q.id] !== undefined).length;
        const isTypeComplete = (qCountInType > 0 && answeredInType === qCountInType);
        const isTypeActive = (isCurrentMod && activeTypeId === t.id);
        const isExtraQ = t.name.includes("Extra Q");

        const typeBtn = document.createElement("button");
        typeBtn.className = `sidebar-type-btn ${isTypeActive ? 'active' : ''} ${isTypeComplete ? 'is-complete' : ''} ${isExtraQ ? 'is-extra-q' : ''}`;
        const badgeLabel = (answeredInType > 0)
          ? (isTypeComplete ? `✓ ${answeredInType}/${qCountInType}` : `${answeredInType}/${qCountInType}`)
          : `${qCountInType} Qs`;

        const typePct = qCountInType > 0 ? Math.round((answeredInType / qCountInType) * 100) : 0;

        typeBtn.innerHTML = `
          <div class="sidebar-type-btn-inner">
            <span class="sidebar-type-title">${escapeHtml(t.name)}</span>
            <span class="sidebar-type-badge ${isTypeComplete ? 'is-complete-badge' : ''}">${badgeLabel}</span>
          </div>
          <div class="sidebar-type-progress-track">
            <div class="sidebar-type-progress-bar" style="width: ${typePct}%;"></div>
          </div>
        `;

        typeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          selectModuleAndType(mod.id, t.id);
        });

        typeTabsContainer.appendChild(typeBtn);
      });

      bodyArea.appendChild(typeTabsContainer);
    } else {
      // Empty module: notice that questions haven't been uploaded yet (NO small subtabs!)
      const emptyNotice = document.createElement("div");
      emptyNotice.style.cssText = "padding: 10px 14px; font-size: 12px; color: var(--ink-muted); text-align: center;";
      emptyNotice.textContent = "0 Questions uploaded yet (Upload pending)";
      bodyArea.appendChild(emptyNotice);
    }

    itemDiv.appendChild(btn);
    itemDiv.appendChild(drawer);
    container.appendChild(itemDiv);
  });
}

// =============================================================================
// SECTION 7: PRACTICE MODE QUESTION VIEW CONTROLLER & CARD RENDERER
// =============================================================================

// Update Practice Filters Bar (Difficulty & Flagged Filter States)
function updatePracticeFiltersBar(typeQuestions = []) {
  // Update difficulty pills
  const pills = document.querySelectorAll("#diffFilterPills .diff-pill");
  pills.forEach(pill => {
    const diff = pill.dataset.diff;
    if (diff === activeDifficultyFilter) {
      pill.classList.add("is-active");
    } else {
      pill.classList.remove("is-active");
    }
  });

  // Flagged questions count in this type
  const flaggedInType = typeQuestions.filter(q => userReviewFlags.has(q.id)).length;
  const pillFlagCount = document.getElementById("pillFlaggedCount");
  if (pillFlagCount) pillFlagCount.textContent = flaggedInType;

  const flagPillIcon = document.getElementById("flagPillIcon");
  if (flagPillIcon) flagPillIcon.textContent = showFlaggedOnly ? "★" : "☆";

  const btnFlagToggle = document.getElementById("btnToggleFlaggedOnly");
  if (btnFlagToggle) {
    if (showFlaggedOnly) btnFlagToggle.classList.add("is-active");
    else btnFlagToggle.classList.remove("is-active");
  }

  // Header flagged badge
  const headerFlagCount = document.getElementById("headerFlaggedCount");
  if (headerFlagCount) headerFlagCount.textContent = userReviewFlags.size;

  const headerFlagBtn = document.getElementById("btnToggleFlaggedHeader");
  if (headerFlagBtn) {
    if (showFlaggedOnly) headerFlagBtn.classList.add("is-active");
    else headerFlagBtn.classList.remove("is-active");
  }
}

// Live update helper that updates progress bars and badges without touching question DOM
function updateLivePracticeProgress() {
  const currentMod = SYLLABUS_MODULES.find(m => m.id === activeModuleId);
  if (currentMod) {
    const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId);
    const typeQuestions = modQuestions.filter(q => q.type_id === activeTypeId);
    const typeProgress = document.getElementById("badgeTypeProgress");
    if (typeProgress && typeQuestions.length > 0) {
      const answeredInType = typeQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
      typeProgress.textContent = `${answeredInType}/${typeQuestions.length} Answered`;
    }
    const stats = getModuleStats(currentMod.id);
    const currentModPill = document.querySelector(`.module-acc-item.is-current-module .module-pill-badge`);
    if (currentModPill && stats.total > 0) {
      currentModPill.textContent = `${stats.answered}/${stats.total}`;
    }

    // Live update active sidebar type button's badge and progress bar
    const activeTypeBtn = document.querySelector(`.sidebar-type-btn.active`);
    if (activeTypeBtn && typeQuestions.length > 0) {
      const answeredInType = typeQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
      const isTypeComplete = (answeredInType === typeQuestions.length);
      const typePct = Math.round((answeredInType / typeQuestions.length) * 100);

      const typeProgress = document.getElementById("badgeTypeProgress");
      if (typeProgress) {
        typeProgress.textContent = `${answeredInType}/${typeQuestions.length} Answered (${typePct}%)`;
      }

      const badge = activeTypeBtn.querySelector(".sidebar-type-badge");
      if (badge) {
        badge.textContent = isTypeComplete ? `✓ ${answeredInType}/${typeQuestions.length}` : `${answeredInType}/${typeQuestions.length}`;
        if (isTypeComplete) badge.classList.add("is-complete-badge");
        else badge.classList.remove("is-complete-badge");
      }
      const miniBar = activeTypeBtn.querySelector(".sidebar-type-progress-bar");
      if (miniBar) {
        miniBar.style.width = `${typePct}%`;
      }
      if (isTypeComplete) activeTypeBtn.classList.add("is-complete");
      else activeTypeBtn.classList.remove("is-complete");
    }
  }
  renderTopProgressTrack();
}

// In-Place Practice Mode Answer Selection Handler (Instantaneous 0ms Response)
function handlePracticeAnswer(q, chosenOpt, qCard, optsStack, idx) {
  if (userPracticeAnswers[q.id] !== undefined) return;
  userPracticeAnswers[q.id] = chosenOpt;
  const isCorrect = (chosenOpt === q.correct);

  // 1. Instantaneous Visual Response (< 1ms)
  qCard.classList.remove("is-answered-correct", "is-answered-wrong");
  qCard.classList.add(isCorrect ? "is-answered-correct" : "is-answered-wrong");

  const letters = ["A", "B", "C", "D", "E"];
  const optBtns = optsStack.querySelectorAll(".exam-opt-btn");
  (q.options || []).forEach((opt, oIdx) => {
    const btn = optBtns[oIdx];
    if (!btn) return;
    btn.disabled = true;
    btn.classList.remove("correct", "wrong", "guide-pulse", "dimmed", "animate-correct", "animate-wrong");

    if (opt === chosenOpt) {
      if (isCorrect) {
        btn.classList.add("correct", "animate-correct");
      } else {
        btn.classList.add("wrong", "animate-wrong");
      }
    } else if (opt === q.correct) {
      btn.classList.add("correct", "guide-pulse");
    } else {
      btn.classList.add("dimmed");
    }
  });

  // Sound in microtask to prevent audio init from dropping animation frames
  if (typeof sounds !== "undefined") {
    setTimeout(() => {
      if (isCorrect) sounds.playCorrect();
      else sounds.playWrong();
    }, 0);
  }

  // Smooth tactile haptic feedback on supported browsers/devices
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    try {
      if (isCorrect) {
        // Delicate double-tick: 24ms pulse, 36ms pause, 28ms pulse
        navigator.vibrate([24, 36, 28]);
      } else {
        // Refined soft warning vibration: 45ms
        navigator.vibrate(45);
      }
    } catch (e) {}
  }

  // 2. Choreographed Solution Reveal & Persistence (Guarantees silky 120 FPS button animation)
  setTimeout(() => {
    requestAnimationFrame(() => {
      // Ensure "🧹 Clear Choice" button is injected cleanly
      const actionGroup = qCard.querySelector(".q-bar-action-group");
      if (actionGroup && !actionGroup.querySelector(`#btnClear_${q.id}`)) {
        const clearBtn = document.createElement("button");
        clearBtn.className = "btn-clear-choice";
        clearBtn.id = `btnClear_${q.id}`;
        clearBtn.textContent = "🧹 Clear Choice";
        clearBtn.onclick = () => handlePracticeClear(q, qCard, optsStack);
        const flagBtn = actionGroup.querySelector(`#btnFlag_${q.id}`);
        if (flagBtn) {
          actionGroup.insertBefore(clearBtn, flagBtn);
        } else {
          actionGroup.appendChild(clearBtn);
        }
      }

      let feedbackBox = qCard.querySelector(".exam-feedback-box");
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      // If correct: DO NOT show solution automatically (collapse it)!
      // If incorrect: show solution automatically (expand it)!
      const isExpanded = !isCorrect;
      const collapseClass = isCorrect ? 'is-collapsed' : '';

      if (!feedbackBox) {
        feedbackBox = document.createElement("div");
        feedbackBox.className = `exam-feedback-box ${isCorrect ? 'is-good' : 'is-bad'} ${collapseClass}`.trim();
        feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded);
        qCard.appendChild(feedbackBox);
        requestAnimationFrame(() => {
          feedbackBox.classList.add("is-shown");
        });
      } else {
        feedbackBox.className = `exam-feedback-box is-shown ${isCorrect ? 'is-good' : 'is-bad'} ${collapseClass}`.trim();
        feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded);
      }

      // Update Header "Show Solution" / "Hide Solution" button
      const solBtn = qCard.querySelector(`#btnSol_${q.id}`);
      if (solBtn) {
        if (isCorrect) {
          solBtn.innerHTML = "💡 Show Solution";
          solBtn.classList.remove("is-expanded-state");
          solBtn.setAttribute("aria-expanded", "false");
        } else {
          solBtn.innerHTML = "💡 Hide Solution";
          solBtn.classList.add("is-expanded-state");
          solBtn.setAttribute("aria-expanded", "true");
        }
      }

      if (typeof ConfettiManager !== "undefined" && isCorrect) {
        setTimeout(() => ConfettiManager.fireBurst(), 140);
      }

      saveCurrentState();
      updateLivePracticeProgress();
    });
  }, 110);
}

// In-Place Practice Mode Clear Choice Handler
function handlePracticeClear(q, qCard, optsStack) {
  if (userPracticeAnswers[q.id] === undefined) return;
  delete userPracticeAnswers[q.id];

  qCard.classList.remove("is-answered-correct", "is-answered-wrong");

  const optBtns = optsStack.querySelectorAll(".exam-opt-btn");
  optBtns.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong", "guide-pulse", "dimmed", "animate-correct", "animate-wrong");
  });

  const feedbackBox = qCard.querySelector(".exam-feedback-box");
  if (feedbackBox) {
    feedbackBox.classList.remove("is-shown");
    setTimeout(() => {
      if (feedbackBox.parentNode) feedbackBox.parentNode.removeChild(feedbackBox);
    }, 350);
  }

  const clearBtn = qCard.querySelector(`#btnClear_${q.id}`);
  if (clearBtn && clearBtn.parentNode) {
    clearBtn.parentNode.removeChild(clearBtn);
  }

  const solBtn = qCard.querySelector(`#btnSol_${q.id}`);
  if (solBtn) {
    solBtn.innerHTML = "💡 Show Solution";
    solBtn.classList.remove("is-expanded-state");
    solBtn.setAttribute("aria-expanded", "false");
  }

  saveCurrentState();
  updateLivePracticeProgress();
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    try { navigator.vibrate(15); } catch (e) {}
  }
}

// In-Place Practice Mode Flag Toggle Handler
function handlePracticeFlagToggle(q, qCard) {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    try { navigator.vibrate(12); } catch (e) {}
  }
  const isCurrentlyFlagged = userReviewFlags.has(q.id);
  if (isCurrentlyFlagged) {
    userReviewFlags.delete(q.id);
  } else {
    userReviewFlags.add(q.id);
  }
  const isFlagged = userReviewFlags.has(q.id);
  qCard.classList.toggle("is-flagged", isFlagged);
  const flagBtn = qCard.querySelector(`#btnFlag_${q.id}`);
  if (flagBtn) {
    flagBtn.classList.toggle("is-flagged", isFlagged);
    flagBtn.innerHTML = isFlagged ? '<span class="flag-star-icon">★</span> Marked' : '<span class="flag-star-icon">☆</span> Review';
  }
  const headerFlagCount = document.getElementById("headerFlaggedCount");
  if (headerFlagCount) headerFlagCount.textContent = userReviewFlags.size;
  saveCurrentState();
}

// In-Place Exam Mode Answer Handler (Instantaneous 0ms Response)
function handleExamAnswer(q, chosenOpt, card, optsStack, idx) {
  if (userExamAnswers[q.id] !== undefined) return;
  userExamAnswers[q.id] = chosenOpt;
  const isCorrect = (chosenOpt === q.correct);

  // 1. Instantaneous Visual Feedback (< 1ms)
  card.classList.remove("is-answered-correct", "is-answered-wrong");
  card.classList.add(isCorrect ? "is-answered-correct" : "is-answered-wrong");

  const letters = ["A", "B", "C", "D", "E"];
  const optBtns = optsStack.querySelectorAll(".exam-opt-btn");
  (q.options || []).forEach((opt, oIdx) => {
    const btn = optBtns[oIdx];
    if (!btn) return;
    btn.disabled = true;
    btn.classList.remove("correct", "wrong", "guide-pulse", "dimmed", "animate-correct", "animate-wrong");

    if (opt === chosenOpt) {
      if (isCorrect) {
        btn.classList.add("correct", "animate-correct");
      } else {
        btn.classList.add("wrong", "animate-wrong");
      }
    } else if (opt === q.correct) {
      btn.classList.add("correct", "guide-pulse");
    } else {
      btn.classList.add("dimmed");
    }
  });

  if (typeof sounds !== "undefined") {
    setTimeout(() => {
      if (isCorrect) sounds.playCorrect();
      else sounds.playWrong();
    }, 0);
  }

  // 2. Choreographed Solution Reveal & Progress Recalculation
  setTimeout(() => {
    requestAnimationFrame(() => {
      let fb = card.querySelector(".exam-feedback-box");
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      const isExpanded = !isCorrect;
      const collapseClass = isCorrect ? 'is-collapsed' : '';
      if (!fb) {
        fb = document.createElement("div");
        fb.className = `exam-feedback-box ${isCorrect ? 'is-good' : 'is-bad'} ${collapseClass}`.trim();
        fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded);
        card.appendChild(fb);
        requestAnimationFrame(() => {
          fb.classList.add("is-shown");
        });
      } else {
        fb.className = `exam-feedback-box is-shown ${isCorrect ? 'is-good' : 'is-bad'} ${collapseClass}`.trim();
        fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded);
      }

      const examSolBtn = card.querySelector(`#btnExamSol_${q.id}`);
      if (examSolBtn) {
        if (isCorrect) {
          examSolBtn.innerHTML = "💡 Show Solution";
          examSolBtn.classList.remove("is-expanded-state");
          examSolBtn.setAttribute("aria-expanded", "false");
        } else {
          examSolBtn.innerHTML = "💡 Hide Solution";
          examSolBtn.classList.add("is-expanded-state");
          examSolBtn.setAttribute("aria-expanded", "true");
        }
      }

      saveCurrentState();
      renderTopProgressTrack();
    });
  }, 110);
}

// Render Main Question View with Questions for the Active Subtab
function renderMainQuestionView() {
  const currentMod = SYLLABUS_MODULES.find(m => m.id === activeModuleId) || SYLLABUS_MODULES[1];
  const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId);
  const typeQuestions = modQuestions.filter(q => q.type_id === activeTypeId);
  const types = currentMod.types || [];

  // Update Breadcrumbs and Module Header
  const modTitleBadge = document.getElementById("badgeModuleNumTitle");
  if (modTitleBadge) modTitleBadge.textContent = currentMod.title;

  const lecInfo = document.getElementById("badgeLectureInfo");
  if (lecInfo) lecInfo.textContent = currentMod.lectures || 'ST-1';

  const typeProgress = document.getElementById("badgeTypeProgress");
  if (typeProgress) {
    if (types.length > 0) {
      const answeredInType = typeQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
      const typePct = typeQuestions.length > 0 ? Math.round((answeredInType / typeQuestions.length) * 100) : 0;
      typeProgress.textContent = `${answeredInType}/${typeQuestions.length} Answered (${typePct}%)`;
    } else {
      typeProgress.textContent = "0 Questions";
    }
  }

  const termObj = (typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA[currentTermId]) ? SYLLABUS_DATA[currentTermId] : null;
  const termPrefix = termObj ? termObj.prefix : 'Practice';

  const prefix = document.getElementById("topicModulePrefix");
  if (prefix) prefix.textContent = `Module ${currentMod.num} • ${currentMod.lectures || termPrefix}`;

  const heading = document.getElementById("topicMainHeading");
  const currentTypeObj = types.find(t => t.id === activeTypeId);
  if (heading) {
    if (currentTypeObj && typeQuestions.length > 0) {
      heading.textContent = `${currentTypeObj.name} (${typeQuestions.length} Questions)`;
    } else {
      heading.textContent = `${currentMod.num}. ${currentMod.title} (0 Questions)`;
    }
  }



  // Update PPT Link Button dynamically
  updateModulePPTButton(activeModuleId, activeTypeId);

  // Strategy Banner
  const banner = document.getElementById("currentTypeInfoBanner");
  const bannerText = document.getElementById("currentTypeStrategyText");
  if (banner && bannerText) {
    if (currentTypeObj) {
      banner.style.display = "flex";
      let descHtml = `<strong>${escapeHtml(currentTypeObj.name)}:</strong> ${escapeHtml(currentTypeObj.desc || '')}`;
      if (currentTypeObj.name.includes("Extra Q") && EXTRA_Q_PDF_MAP[activeModuleId]) {
        const extraInfo = EXTRA_Q_PDF_MAP[activeModuleId];
        const extraPdfHref = `presentation_viewer.html?mod=${encodeURIComponent(extraInfo.modKey)}`;
        descHtml += ` <a href="${extraPdfHref}" target="_blank" class="btn-extra-q-pdf" style="display:inline-flex;align-items:center;gap:6px;margin-left:8px;padding:3px 10px;background:var(--primary-blue,#2563eb);color:#fff;border-radius:999px;font-size:12px;font-weight:600;text-decoration:none;box-shadow:0 1px 4px rgba(37,99,235,0.25);vertical-align:middle;"><span>📄 Open Extra Q PDF</span></a>`;
      }
      bannerText.innerHTML = descHtml;
    } else {
      banner.style.display = "none";
    }
  }

  // Render Questions into #tabQuestionsStack
  const questionsStack = document.getElementById("tabQuestionsStack");
  if (!questionsStack) return;
  questionsStack.innerHTML = "";

  // If this module has 0 questions uploaded
  if (modQuestions.length === 0 || typeQuestions.length === 0) {
    const emptyCard = document.createElement("div");
    emptyCard.className = "empty-module-card";
    emptyCard.innerHTML = `
      <div class="empty-icon">📂</div>
      <h3>0 Questions Uploaded Yet</h3>
      <p>Questions for <strong>${escapeHtml(currentMod.title)}</strong> have not been uploaded yet. When uploaded, they will appear directly in this tab.</p>
    `;
    questionsStack.appendChild(emptyCard);

    // Hide bottom navigation
    const bottomNav = document.getElementById("typeTabBottomNavControls");
    if (bottomNav) bottomNav.style.display = "none";
    return;
  }

  // Update Filters Bar
  updatePracticeFiltersBar(typeQuestions);

  // Apply Difficulty and Flagged Filters
  let filteredQuestions = [...typeQuestions];
  if (activeDifficultyFilter !== "all") {
    filteredQuestions = filteredQuestions.filter(q => (q.difficulty || "medium").toLowerCase() === activeDifficultyFilter.toLowerCase());
  }
  if (showFlaggedOnly) {
    filteredQuestions = filteredQuestions.filter(q => userReviewFlags.has(q.id));
  }

  if (filteredQuestions.length === 0) {
    const emptyNotice = document.createElement("div");
    emptyNotice.className = "empty-module-card";
    emptyNotice.innerHTML = `
      <div class="empty-icon">🔍</div>
      <h3>No Matching Questions</h3>
      <p style="margin-bottom: 14px; color: var(--ink-secondary);">
        ${showFlaggedOnly ? 'No flagged questions found in this subtab.' : `No questions marked as <strong>${escapeHtml(activeDifficultyFilter)}</strong> in this subtab.`}
      </p>
      <button type="button" class="btn-minimal-primary" id="btnResetPracticeFilters">Reset Filters</button>
    `;
    questionsStack.appendChild(emptyNotice);
    const resetBtn = emptyNotice.querySelector("#btnResetPracticeFilters");
    if (resetBtn) {
      resetBtn.onclick = () => {
        activeDifficultyFilter = "all";
        showFlaggedOnly = false;
        renderMainQuestionView();
      };
    }
    return;
  }

  // Questions Exist! Render each question of this subtab cleanly
  const letters = ["A", "B", "C", "D", "E"];

  filteredQuestions.forEach((q, idx) => {
    const chosenOption = userPracticeAnswers[q.id];
    const isAnswered = (chosenOption !== undefined);
    const isCorrect = (chosenOption === q.correct);
    const isFlagged = userReviewFlags.has(q.id);

    const qCard = document.createElement("div");
    qCard.className = `tab-question-item ${isAnswered ? (isCorrect ? 'is-answered-correct' : 'is-answered-wrong') : ''} ${isFlagged ? 'is-flagged' : ''}`;
    qCard.id = `q_card_${q.id}`;

    // Header Bar: Single-line layout for Q number, Easy, 1 Mark, Clear Choice, and Review
    const qHeader = document.createElement("div");
    qHeader.className = "tab-q-header-bar";
    qHeader.innerHTML = `
      <div class="q-bar-pill-group">
        <span class="q-num-pill">Q${idx + 1}</span>
        <span class="q-badge-pill tag-diff-${(q.difficulty || 'medium').toLowerCase()}">${q.difficulty || 'Medium'}</span>
        <span class="q-badge-pill q-points-pill">${q.points || 1} Mark</span>
      </div>
      <div class="q-bar-action-group">
        <button class="btn-copy-q" id="btnCopy_${q.id}" title="Copy Question and Options">📋 Copy</button>
        <button class="btn-gemini-q" id="btnGemini_${q.id}" title="Open and solve in ChatGPT">✨ ChatGPT</button>
        <button class="btn-sol-toggle-q ${isAnswered && !isCorrect ? 'is-expanded-state' : ''}" id="btnSol_${q.id}" title="Toggle Solution Visibility" aria-expanded="${isAnswered && !isCorrect ? 'true' : 'false'}">
          ${isAnswered && !isCorrect ? '💡 Hide Solution' : '💡 Show Solution'}
        </button>
        ${isAnswered ? `<button class="btn-clear-choice" id="btnClear_${q.id}">🧹 Clear Choice</button>` : ''}
        <button class="btn-flag-single-q ${isFlagged ? 'is-flagged' : ''}" id="btnFlag_${q.id}">
          ${isFlagged ? '<span class="flag-star-icon">★</span> Marked' : '<span class="flag-star-icon">☆</span> Review'}
        </button>
      </div>
    `;
    qCard.appendChild(qHeader);

    // Question Text
    const qText = document.createElement("div");
    qText.className = "tab-q-text";
    qText.innerHTML = formatMarkdown(q.question);
    qCard.appendChild(qText);

    // Options Stack
    const optsStack = document.createElement("div");
    optsStack.className = "tab-q-options-stack";

    (q.options || []).forEach((opt, oIdx) => {
      const optBtn = document.createElement("button");
      optBtn.className = "exam-opt-btn";
      optBtn.disabled = isAnswered;
      optBtn.innerHTML = `
        <span class="opt-badge-letter">${letters[oIdx] || (oIdx + 1)}</span>
        <span>${formatOptionText(opt)}</span>
      `;

      if (isAnswered) {
        if (opt === q.correct) {
          optBtn.classList.add("correct");
          if (chosenOption && chosenOption !== q.correct) {
            optBtn.classList.add("guide-pulse");
          }
        } else if (opt === chosenOption && chosenOption !== q.correct) {
          optBtn.classList.add("wrong");
        } else {
          optBtn.classList.add("dimmed");
        }
      }

      optBtn.addEventListener("pointerdown", () => {
        if (!optBtn.disabled && typeof navigator !== "undefined" && navigator.vibrate) {
          try { navigator.vibrate(10); } catch (e) {}
        }
      });

      optBtn.addEventListener("click", () => {
        handlePracticeAnswer(q, opt, qCard, optsStack, idx);
      });

      optsStack.appendChild(optBtn);
    });
    qCard.appendChild(optsStack);

    // Feedback Box
    if (isAnswered) {
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : "";
      const feedbackBox = document.createElement("div");
      // If correct: collapse by default! If incorrect: expand by default!
      const collapseClass = isCorrect ? 'is-collapsed' : '';
      feedbackBox.className = `exam-feedback-box is-shown ${isCorrect ? 'is-good' : 'is-bad'} ${collapseClass}`.trim();
      feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, !isCorrect);
      qCard.appendChild(feedbackBox);
    }

    questionsStack.appendChild(qCard);

    // Event listeners for Copy, Gemini, Show Solution, Clear Choice & Flag buttons
    setTimeout(() => {
      const copyBtn = document.getElementById(`btnCopy_${q.id}`);
      if (copyBtn) {
        copyBtn.onclick = () => copyQuestionToClipboard(q, idx + 1, copyBtn);
      }
      const geminiBtn = document.getElementById(`btnGemini_${q.id}`);
      if (geminiBtn) {
        geminiBtn.onclick = () => openInChatGPT(q, idx + 1, geminiBtn);
      }
      const solBtn = document.getElementById(`btnSol_${q.id}`);
      if (solBtn) {
        solBtn.onclick = () => toggleQuestionSolution(q, qCard);
      }
      const clearBtn = document.getElementById(`btnClear_${q.id}`);
      if (clearBtn) {
        clearBtn.onclick = () => handlePracticeClear(q, qCard, optsStack);
      }
      const flagBtn = document.getElementById(`btnFlag_${q.id}`);
      if (flagBtn) {
        flagBtn.onclick = () => handlePracticeFlagToggle(q, qCard);
      }
    }, 0);
  });

  // Bottom Navigation between Subtabs
  const bottomNav = document.getElementById("typeTabBottomNavControls");
  if (bottomNav) {
    if (types.length > 0) {
      bottomNav.style.display = "flex";
      const curTypeIdx = types.findIndex(t => t.id === activeTypeId);
      const statusText = document.getElementById("typeTabNavStatus");
      if (statusText) statusText.textContent = `Type ${curTypeIdx + 1} of ${types.length}`;

      const prevTabBtn = document.getElementById("btnPrevTypeTab");
      if (prevTabBtn) {
        prevTabBtn.disabled = (curTypeIdx <= 0);
        prevTabBtn.onclick = () => {
          if (curTypeIdx > 0) {
            selectModuleAndType(activeModuleId, types[curTypeIdx - 1].id);
          }
        };
      }

      const nextTabBtn = document.getElementById("btnNextTypeTab");
      if (nextTabBtn) {
        if (curTypeIdx < types.length - 1) {
          nextTabBtn.innerHTML = `<span>Next: ${escapeHtml(types[curTypeIdx + 1].name.split(':')[0])} →</span>`;
          nextTabBtn.onclick = () => {
            selectModuleAndType(activeModuleId, types[curTypeIdx + 1].id);
          };
        } else {
          nextTabBtn.innerHTML = `<span>Finish & View Assessment 🏁</span>`;
          nextTabBtn.onclick = showResultsScreen;
        }
      }
    } else {
      bottomNav.style.display = "none";
    }
  }
}

// Render Top Horizontal Type Tabs Bar
function renderTopHorizontalTypeTabs(currentMod, modQuestions) {
  const tabsBar = document.getElementById("questionTypeTabsBar");
  const countLabel = document.getElementById("typeTabsActiveCount");
  if (!tabsBar) return;
  tabsBar.innerHTML = "";

  const types = currentMod.types || [];
  if (countLabel) {
    countLabel.textContent = `${types.length} Types • ${modQuestions.length} Questions`;
  }

  types.forEach((type) => {
    const qCountInType = modQuestions.filter(q => q.type_id === type.id).length;
    const answeredCount = modQuestions.filter(q => q.type_id === type.id && userPracticeAnswers[q.id] !== undefined).length;
    const isComplete = (qCountInType > 0 && answeredCount === qCountInType);
    const isActive = (type.id === activeTypeId);

    const tabBtn = document.createElement("button");
    tabBtn.className = `type-tab-btn ${isActive ? 'active' : ''} ${isComplete ? 'is-complete' : ''}`;
    tabBtn.innerHTML = `
      <span>${escapeHtml(type.name)}</span>
      <span class="type-tab-badge">${qCountInType} Qs</span>
    `;

    tabBtn.addEventListener("click", () => {
      selectModuleAndType(activeModuleId, type.id);
    });

    tabsBar.appendChild(tabBtn);
  });
}

// =============================================================================
// SECTION 8: CONTINUOUS EXAMINATION MODE ENGINE
// =============================================================================

// Continuous Full Exam Mode Layout (Renders active pool of selected topics)
function renderFullExamQuestions() {
  const container = document.getElementById("fullExamQuestionsStack");
  if (!container) return;
  container.innerHTML = "";

  if (!activeExamQuestions || activeExamQuestions.length === 0) {
    activeExamQuestions = QUIZ_QUESTIONS.filter(q => (selectedExamModuleIds || []).includes(q.module_id));
    if (activeExamQuestions.length === 0) activeExamQuestions = [...QUIZ_QUESTIONS];
  }

  if (activeExamQuestions.length === 0) {
    container.innerHTML = "<p style='text-align:center; padding: 40px;'>No questions selected for exam mode. Click <strong>⚙️ Choose Topics</strong> to select topics.</p>";
    return;
  }

  activeExamQuestions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "full-exam-item-card";

    const chosen = userExamAnswers[q.id];
    if (chosen !== undefined) {
      card.classList.add(chosen === q.correct ? "is-answered-correct" : "is-answered-wrong");
    }

    const header = document.createElement("div");
    header.className = "full-exam-item-header";
    header.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="full-exam-q-num">Q${idx + 1}</span>
        <span class="tag-badge tag-module">${escapeHtml(q.module_name || 'Coded Relation')}</span>
        <span class="tag-badge tag-lecture">${escapeHtml(q.type_name || '')}</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button class="btn-copy-q" id="btnExamCopy_${q.id}" title="Copy Question & Options">📋 Copy</button>
        <button class="btn-gemini-q" id="btnExamGemini_${q.id}" title="Open and solve in ChatGPT">✨ ChatGPT</button>
        <button class="btn-sol-toggle-q ${isAnswered && !isCorrect ? 'is-expanded-state' : ''}" id="btnExamSol_${q.id}" title="Toggle Solution Visibility" aria-expanded="${isAnswered && !isCorrect ? 'true' : 'false'}">
          ${isAnswered && !isCorrect ? '💡 Hide Solution' : '💡 Show Solution'}
        </button>
        <span class="tag-badge tag-diff-${(q.difficulty || 'medium').toLowerCase()}">${q.difficulty || 'Medium'}</span>
        <span class="tag-badge tag-points">${q.points || 1} Mark</span>
      </div>
    `;
    card.appendChild(header);

    const text = document.createElement("h3");
    text.className = "full-exam-q-text";
    text.innerHTML = formatMarkdown(q.question);
    card.appendChild(text);

    const optsStack = document.createElement("div");
    optsStack.className = "exam-options-stack";
    const letters = ["A", "B", "C", "D", "E"];

    (q.options || []).forEach((opt, oIdx) => {
      const optBtn = document.createElement("button");
      optBtn.className = "exam-opt-btn";
      optBtn.disabled = (chosen !== undefined);
      optBtn.innerHTML = `
        <span class="opt-badge-letter">${letters[oIdx] || (oIdx + 1)}</span>
        <span>${formatOptionText(opt)}</span>
      `;

      if (chosen !== undefined) {
        if (opt === q.correct) {
          optBtn.classList.add("correct");
          if (chosen && chosen !== q.correct) {
            optBtn.classList.add("guide-pulse");
          }
        } else if (opt === chosen && chosen !== q.correct) {
          optBtn.classList.add("wrong");
        } else {
          optBtn.classList.add("dimmed");
        }
      }

      optBtn.addEventListener("click", () => {
        handleExamAnswer(q, opt, card, optsStack, idx);
      });

      optsStack.appendChild(optBtn);
    });
    card.appendChild(optsStack);

    // Feedback
    if (chosen !== undefined) {
      const fb = document.createElement("div");
      const isCorrect = (chosen === q.correct);
      const collapseClass = isCorrect ? 'is-collapsed' : '';
      fb.className = `exam-feedback-box is-shown ${isCorrect ? "is-good" : "is-bad"} ${collapseClass}`.trim();
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, !isCorrect);
      card.appendChild(fb);
    }

    container.appendChild(card);

    setTimeout(() => {
      const examCopyBtn = document.getElementById(`btnExamCopy_${q.id}`);
      if (examCopyBtn) {
        examCopyBtn.onclick = () => copyQuestionToClipboard(q, idx + 1, examCopyBtn);
      }
      const examGeminiBtn = document.getElementById(`btnExamGemini_${q.id}`);
      if (examGeminiBtn) {
        examGeminiBtn.onclick = () => openInChatGPT(q, idx + 1, examGeminiBtn);
      }
      const examSolBtn = document.getElementById(`btnExamSol_${q.id}`);
      if (examSolBtn) {
        examSolBtn.onclick = () => toggleQuestionSolution(q, card);
      }
    }, 0);
  });
}

// =============================================================================
// SECTION 9: ASSESSMENT RESULTS & SCORE ANALYTICS
// =============================================================================

// Show Results Assessment Screen
function showResultsScreen() {
  const pracArea = document.getElementById("quizPracticeArea");
  const examArea = document.getElementById("fullExamModeArea");
  const resScreen = document.getElementById("quizResultsScreen");

  if (pracArea) pracArea.style.display = "none";
  if (examArea) examArea.style.display = "none";
  if (resScreen) resScreen.classList.add("is-active");

  // Determine the current question pool being evaluated (Exam pool or active practice module)
  const currentPool = isExamMode
    ? ((activeExamQuestions && activeExamQuestions.length > 0)
        ? activeExamQuestions
        : QUIZ_QUESTIONS.filter(q => (selectedExamModuleIds || []).includes(q.module_id)))
    : QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId);

  const poolQuestions = currentPool.length > 0 ? currentPool : QUIZ_QUESTIONS;
  const totalQuestions = poolQuestions.length;
  const answers = isExamMode ? userExamAnswers : userPracticeAnswers;
  const correctCount = poolQuestions.filter(q => answers[q.id] === q.correct).length;
  const answeredCount = poolQuestions.filter(q => answers[q.id] !== undefined).length;
  const wrongCount = answeredCount - correctCount;
  const unansweredCount = totalQuestions - answeredCount;
  const marksScored = poolQuestions.filter(q => answers[q.id] === q.correct).reduce((sum, q) => sum + (q.points || 1), 0);
  const maxMarks = poolQuestions.reduce((sum, q) => sum + (q.points || 1), 0);
  const pct = maxMarks > 0 ? Math.round((marksScored / maxMarks) * 100) : 0;

  const pctElem = document.getElementById("resTotalPercent");
  if (pctElem) animateNumberValue(pctElem, pct, 500, val => `${val}%`);

  const curModObj = SYLLABUS_MODULES.find(m => m.id === activeModuleId);
  const topicLabel = isExamMode ? "the Examination Topics" : (curModObj ? curModObj.title : "this Module");

  const msgElem = document.getElementById("resEvaluationMessage");
  if (msgElem) {
    if (pct >= 85) msgElem.textContent = `🌟 Outstanding Performance! You have thoroughly mastered ${topicLabel}.`;
    else if (pct >= 60) msgElem.textContent = `👍 Good Progress! Review the questions you missed using the detailed analysis below.`;
    else msgElem.textContent = `📚 Keep Practicing! Re-attempt the questions to improve your accuracy in ${topicLabel}.`;
  }

  const marksElem = document.getElementById("resMarksTotal");
  if (marksElem) animateNumberValue(marksElem, marksScored, 450, val => `${val} / ${maxMarks}`);

  const corElem = document.getElementById("resCorrectTotal");
  if (corElem) animateNumberValue(corElem, correctCount, 400);

  const wrgElem = document.getElementById("resWrongTotal");
  if (wrgElem) animateNumberValue(wrgElem, wrongCount, 400);

  const unElem = document.getElementById("resUnansweredTotal");
  if (unElem) animateNumberValue(unElem, unansweredCount, 400);

  // Render Detailed Analysis List
  const listElem = document.getElementById("resultsDetailedList");
  if (listElem) {
    listElem.innerHTML = "";
    poolQuestions.forEach((q, idx) => {
      const userChoice = answers[q.id];
      const isCor = (userChoice === q.correct);
      const row = document.createElement("div");
      row.className = "results-detail-row";
      row.style.cssText = "padding:12px; margin-bottom:8px; border-radius:8px; background:var(--card-sub-bg); border-left:4px solid " +
        (userChoice === undefined ? "var(--ink-muted)" : (isCor ? "var(--emerald-green)" : "var(--crimson-red)"));
      row.innerHTML = `
        <div style="font-weight:750; font-size:13.5px; color:var(--ink-primary); margin-bottom:4px;">
          Q${idx + 1}: ${escapeHtml(q.question)}
        </div>
        <div style="font-size:12.5px; color:var(--ink-secondary);">
          Your Choice: <strong>${escapeHtml(userChoice || 'Unanswered')}</strong> | Correct: <strong style="color:var(--emerald-green);">${escapeHtml(q.correct)}</strong>
        </div>
      `;
      listElem.appendChild(row);
    });
  }

  if (typeof ConfettiManager !== "undefined" && pct >= 70) {
    ConfettiManager.fireBurst();
  }

  window.scrollTo(0, 0);
}

// Master Render Application Controller
function renderApplication() {
  const pracArea = document.getElementById("quizPracticeArea");
  const examArea = document.getElementById("fullExamModeArea");
  const resScreen = document.getElementById("quizResultsScreen");
  const examToggleBtn = document.getElementById("toggleExamModeBtn");

  if (isExamMode) {
    if (pracArea) pracArea.style.display = "none";
    if (examArea) examArea.style.display = "block";
    if (resScreen) resScreen.classList.remove("is-active");
    if (examToggleBtn) examToggleBtn.textContent = "📖 Practice Mode";
    renderFullExamQuestions();
  } else {
    if (pracArea) pracArea.style.display = "grid";
    if (examArea) examArea.style.display = "none";
    if (examToggleBtn) examToggleBtn.textContent = "📝 Exam";
    renderMainQuestionView();
  }

  renderSidebarAccordion();
  renderTopProgressTrack();
  saveCurrentState();
}

// =============================================================================
// SECTION 10: EVENT LISTENERS & APPLICATION BOOTSTRAP
// =============================================================================

// Setup Event Listeners

// =============================================================================
// SECTION: PROGRESSIVE WEB APP (PWA) SERVICE WORKER & INSTALL PROMPT
// [NALR PWA] Robust Browser-Aware PWA Controller (Single Source of Truth)
// =============================================================================
let isPwaServiceInitialized = false;

function isAppInStandaloneMode() {
  if (typeof window === "undefined") return false;
  return Boolean(
    (window.NALR_PWA && window.NALR_PWA.isStandalone) ||
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    window.matchMedia("(display-mode: minimal-ui)").matches ||
    window.navigator.standalone === true ||
    (typeof document !== "undefined" && document.referrer && document.referrer.includes("android-app://"))
  );
}

function initPwaService() {
  if (isPwaServiceInitialized) return;
  isPwaServiceInitialized = true;

  // Detect environment with accurate browser profiling
  const ua = navigator.userAgent;
  const isEdge = /Edg\//i.test(ua);
  const isBrave = typeof navigator.brave !== "undefined" || /Brave/i.test(ua);
  const isChrome = /Chrome\//i.test(ua) && !isEdge && !isBrave;
  const isFirefox = /Firefox\//i.test(ua);
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isSafariDesktop = /Safari/i.test(ua) && !isChrome && !isEdge && !isBrave && !isIOS;

  const browserName = isEdge ? "Microsoft Edge" : (isBrave ? "Brave" : (isChrome ? "Google Chrome" : (isFirefox ? "Mozilla Firefox" : (isIOS ? "iOS Safari" : (isSafariDesktop ? "macOS Safari" : "Browser")))));
  const isStandalone = isAppInStandaloneMode();

  console.log(`[NALR PWA] Controller initialized | Browser: ${browserName} | Secure Context: ${window.isSecureContext} | Standalone: ${isStandalone}`);

  // 1. Service Worker Lifecycle Management
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((reg) => {
        console.log(`[NALR PWA] Service Worker registered | Scope: ${reg.scope} | Active: ${Boolean(reg.active)} | Controller: ${Boolean(navigator.serviceWorker.controller)}`);

        reg.update().catch(() => {});

        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (!installingWorker) return;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
              console.log("[NALR PWA] New update available from server.");
              showToastNotification("✨ New questions & updates available! Tap here to refresh.", 8000);
              const toast = document.getElementById("appToastNotification");
              if (toast) {
                toast.style.cursor = "pointer";
                toast.onclick = () => window.location.reload();
              }
            }
          };
        };
      }).catch((err) => {
        console.error("[NALR PWA] Service Worker registration failed:", err);
      });
    });

    window.addEventListener("focus", () => {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg) reg.update().catch(() => {});
      });
    });
  } else {
    console.warn("[NALR PWA] Service Worker API not supported in this environment.");
  }

  // 2. Install Button UI Management
  const installBtn = document.getElementById("btnInstallPwa");

  // Hide install button immediately if app is already running standalone
  if (installBtn && isStandalone) {
    console.log("[NALR PWA] App running in standalone window. Hiding install button.");
    installBtn.style.display = "none";
  }

  // Monitor dynamic display-mode transitions
  try {
    const standaloneMedia = window.matchMedia("(display-mode: standalone)");
    if (standaloneMedia && standaloneMedia.addEventListener) {
      standaloneMedia.addEventListener("change", (e) => {
        if (e.matches && installBtn) {
          console.log("[NALR PWA] Display mode changed to standalone. Hiding install button.");
          installBtn.style.display = "none";
        }
      });
    }
  } catch (_) {}

  // React when Central Manager (index.html) receives beforeinstallprompt
  if (window.NALR_PWA) {
    window.NALR_PWA.onPromptReady((promptEvent) => {
      console.log(`[NALR PWA] Native install prompt confirmed ready in ${browserName}.`);
      if (installBtn && !isAppInStandaloneMode()) {
        installBtn.style.display = "inline-flex";
      }
    });
  }

  // React to appinstalled event
  window.addEventListener("nalr-pwa-appinstalled", () => {
    console.log("[NALR PWA] appinstalled event caught by app controller.");
    if (installBtn) installBtn.style.display = "none";
    showToastNotification("🚀 NALR Masterclass installed! Ready for 100% offline practice.");
  });

  // 3. Native Install Button Click Handler (Zero async delay before prompt())
  if (installBtn) {
    installBtn.onclick = async () => {
      // Access saved BeforeInstallPromptEvent synchronously from Central Manager
      const promptEvent = (window.NALR_PWA && window.NALR_PWA.deferredPrompt) ? window.NALR_PWA.deferredPrompt : null;

      // PATH A: Native install prompt is available (Edge, Chrome, Brave)
      if (promptEvent) {
        console.log(`[NALR PWA] Calling native prompt() immediately with active user gesture in ${browserName}...`);

        // Consume and clear event reference immediately so it cannot be called twice
        if (window.NALR_PWA) {
          window.NALR_PWA.clearPrompt();
        }

        try {
          // Native Chromium prompt invocation — executed immediately on click
          await promptEvent.prompt();
          const choiceResult = await promptEvent.userChoice;
          console.log("[NALR PWA] Native prompt outcome:", choiceResult ? choiceResult.outcome : "unknown");

          if (choiceResult && choiceResult.outcome === "accepted") {
            console.log("[NALR PWA] User accepted installation.");
            installBtn.style.display = "none";
            showToastNotification("🎉 NALR Masterclass installed! Launch anytime from your apps.");
          } else {
            console.log("[NALR PWA] User dismissed installation prompt.");
          }
        } catch (promptErr) {
          console.error("[NALR PWA] Exception during prompt() execution:", promptErr);
        }
        return;
      }

      // PATH B: Native prompt is not available at click time
      console.warn(`[NALR PWA] Native prompt unavailable in ${browserName} at click time.`);

      if (isFirefox) {
        showToastNotification("🦊 Firefox desktop does not support PWA installation. Please open in Microsoft Edge, Chrome, or Brave to install.", 7000);
        return;
      }

      if (isIOS) {
        showToastNotification("📲 On iPhone/iPad: Tap the Share button (⎋) in Safari, then select 'Add to Home Screen' (+).", 7000);
        return;
      }

      if (isSafariDesktop) {
        showToastNotification("🧭 On Safari for Mac (macOS Sonoma+): Click File > 'Add to Dock' to install this app.", 7000);
        return;
      }

      // Edge or Chrome without beforeinstallprompt
      showToastNotification("ℹ️ Installation prompt not available. The app may already be installed (check edge://apps), or running in InPrivate mode.", 7000);
    };
  }
}

function setupEventListeners() {
  // Term Selector Capsule Buttons (ST1, ST2, End Term)
  const termButtons = document.querySelectorAll(".term-pill-btn");
  termButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTerm = btn.dataset.term;
      if (targetTerm && targetTerm !== currentTermId) {
        switchTerm(targetTerm);
      }
    });
  });

  initButtonRipples();
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // Dynamic Cursor Spotlight for Cards (Iridescent Specular Glow - Cached Geometry RAF)
  let spotlightRaf = null;
  let lastPointerEvt = null;
  let activeSpotlightCard = null;
  let cachedSpotlightRect = null;

  document.addEventListener("pointermove", (e) => {
    lastPointerEvt = e;
    if (!spotlightRaf) {
      spotlightRaf = requestAnimationFrame(() => {
        spotlightRaf = null;
        if (!lastPointerEvt) return;
        const target = lastPointerEvt.target;
        if (!target) return;
        const card = target.closest(".study-card-main, .exam-question-card, .tab-question-item");
        if (card) {
          if (activeSpotlightCard !== card) {
            activeSpotlightCard = card;
            cachedSpotlightRect = card.getBoundingClientRect();
          }
          if (cachedSpotlightRect) {
            card.style.setProperty("--mouse-x", `${lastPointerEvt.clientX - cachedSpotlightRect.left}px`);
            card.style.setProperty("--mouse-y", `${lastPointerEvt.clientY - cachedSpotlightRect.top}px`);
          }
        } else {
          activeSpotlightCard = null;
          cachedSpotlightRect = null;
        }
      });
    }
  }, { passive: true });

  const examBtn = document.getElementById("toggleExamModeBtn");
  if (examBtn) examBtn.addEventListener("click", toggleExamMode);

  const exitExamBtn = document.getElementById("btnExitExamMode");
  if (exitExamBtn) exitExamBtn.addEventListener("click", () => {
    isExamMode = false;
    renderApplication();
  });

  const changeTopicsBtn = document.getElementById("btnChangeExamTopics");
  if (changeTopicsBtn) changeTopicsBtn.addEventListener("click", openExamTopicModal);

  const modalCloseBtn = document.getElementById("btnExamModalClose");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeExamTopicModal);

  const modalBackdrop = document.getElementById("examTopicBackdrop");
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeExamTopicModal);

  const modalCancelBtn = document.getElementById("btnCancelExamTopicModal");
  if (modalCancelBtn) modalCancelBtn.addEventListener("click", closeExamTopicModal);

  const selectAllBtn = document.getElementById("btnSelectAllActiveTopics");
  if (selectAllBtn) {
    selectAllBtn.addEventListener("click", () => {
      selectedExamModuleIds = SYLLABUS_MODULES.filter(m => QUIZ_QUESTIONS.some(q => q.module_id === m.id)).map(m => m.id);
      renderExamTopicList();
    });
  }

  const deselectAllBtn = document.getElementById("btnClearTopicSelection");
  if (deselectAllBtn) {
    deselectAllBtn.addEventListener("click", () => {
      selectedExamModuleIds = [];
      renderExamTopicList();
    });
  }

  const startExamBtn = document.getElementById("btnStartExamWithSelectedTopics");
  if (startExamBtn) startExamBtn.addEventListener("click", startExamWithSelectedTopics);

  const resetExamBtn = document.getElementById("btnResetExamMode");
  if (resetExamBtn) {
    resetExamBtn.addEventListener("click", async () => {
      const confirmed = await showGlassConfirm({
        title: "Reset Exam Answers",
        message: "Reset all answers in Exam Mode?",
        confirmText: "Reset",
        cancelText: "Cancel",
        isDestructive: true,
        icon: "reset"
      });
      if (confirmed) {
        userExamAnswers = {};
        saveCurrentState();
        renderFullExamQuestions();
        renderTopProgressTrack();
      }
    });
  }

  const clearAllBtn = document.getElementById("clearAllAnswersBtn");
  if (clearAllBtn) clearAllBtn.addEventListener("click", clearAllAnswersPrompt);

  const resetBtn = document.getElementById("resetUserProgressBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetProgressPrompt);

  const returnPracBtn = document.getElementById("btnReturnToPractice");
  if (returnPracBtn) {
    returnPracBtn.addEventListener("click", () => {
      const res = document.getElementById("quizResultsScreen");
      if (res) res.classList.remove("is-active");
      isExamMode = false;
      renderApplication();
    });
  }

  const revAllBtn = document.getElementById("btnReviewAllAnswers");
  if (revAllBtn) {
    revAllBtn.addEventListener("click", () => {
      const revArea = document.getElementById("resultsDetailedReviewArea");
      if (revArea) revArea.scrollIntoView();
    });
  }

  // Difficulty Filter Pills
  const diffPills = document.querySelectorAll("#diffFilterPills .diff-pill");
  diffPills.forEach(pill => {
    pill.addEventListener("click", () => {
      activeDifficultyFilter = pill.dataset.diff || "all";
      renderMainQuestionView();
    });
  });

  // Flagged Filter Toggle (Practice Bar)
  const pillFlagToggle = document.getElementById("btnToggleFlaggedOnly");
  if (pillFlagToggle) {
    pillFlagToggle.addEventListener("click", () => {
      showFlaggedOnly = !showFlaggedOnly;
      renderMainQuestionView();
    });
  }

  // Flagged Filter Toggle (Header Action)
  const headerFlagToggle = document.getElementById("btnToggleFlaggedHeader");
  if (headerFlagToggle) {
    headerFlagToggle.addEventListener("click", () => {
      showFlaggedOnly = !showFlaggedOnly;
      if (isExamMode) {
        isExamMode = false;
        const res = document.getElementById("quizResultsScreen");
        if (res) res.classList.remove("is-active");
      }
      renderApplication();
    });
  }

  // Mobile Sidebar Collapsible Drawer Trigger
  const mobileToggle = document.getElementById("btnToggleMobileSidebar");
  const sidebarPanel = document.getElementById("sidebarPanel");
  const sidebarHeader = document.getElementById("sidebarPanelHeader");

  function toggleMobileSidebar() {
    if (!sidebarPanel) return;
    const isOpen = sidebarPanel.classList.toggle("is-mobile-open");
    if (mobileToggle) {
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      const label = mobileToggle.querySelector(".mobile-toggle-label");
      if (label) label.textContent = isOpen ? "Close" : "Browse";
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMobileSidebar();
    });
  }
  if (sidebarHeader) {
    sidebarHeader.addEventListener("click", (e) => {
      if (window.innerWidth <= 900) {
        if (!e.target.closest(".sidebar-mobile-toggle-btn")) {
          toggleMobileSidebar();
        }
      }
    });
  }

  // Study Planner Modal Triggers & Controls
  const openPlannerBtn = document.getElementById("btnOpenPlannerModal");
  if (openPlannerBtn) openPlannerBtn.addEventListener("click", openPlannerModal);

  const closePlannerBtn = document.getElementById("btnClosePlannerModal");
  if (closePlannerBtn) closePlannerBtn.addEventListener("click", closePlannerModal);

  const cancelPlannerBtn = document.getElementById("btnCancelPlannerSetup");
  if (cancelPlannerBtn) cancelPlannerBtn.addEventListener("click", closePlannerModal);

  const generatePlanBtn = document.getElementById("btnGeneratePlan");
  if (generatePlanBtn) generatePlanBtn.addEventListener("click", generateDailyStudyPlan);

  const resetPlannerBtn = document.getElementById("btnResetPlanner");
  if (resetPlannerBtn) resetPlannerBtn.addEventListener("click", resetStudyPlanner);

  const plannerBackdrop = document.getElementById("plannerTopicBackdrop");
  if (plannerBackdrop) plannerBackdrop.addEventListener("click", closePlannerModal);

  const plannerModalOverlay = document.getElementById("plannerModal");
  if (plannerModalOverlay) {
    plannerModalOverlay.addEventListener("click", (e) => {
      if (e.target === plannerModalOverlay) {
        closePlannerModal();
      }
    });
  }

  // Planner Accordion Expand / Collapse Buttons (Zero-Jank CSS Grid Drawer)
  const plannerAccordionToggles = document.querySelectorAll(".btn-term-accordion-toggle");
  plannerAccordionToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;
      if (targetEl.classList.contains("planner-term-drawer")) {
        const isExpanded = targetEl.classList.toggle("is-expanded");
        btn.textContent = isExpanded ? "▾ Collapse" : "▸ Expand";
        btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      } else {
        const isHidden = (targetEl.style.display === "none");
        targetEl.style.display = isHidden ? "grid" : "none";
        btn.textContent = isHidden ? "▾ Collapse" : "▸ Expand";
      }
    });
  });

  // Planner "Select All" Checkboxes per Term
  const plannerSelectAllBoxes = document.querySelectorAll(".planner-select-all-cb");
  plannerSelectAllBoxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const term = cb.dataset.term;
      const isChecked = cb.checked;
      const childCbs = document.querySelectorAll(`.planner-mod-cb[data-term="${term}"]:not([disabled])`);
      childCbs.forEach(child => {
        child.checked = isChecked;
      });
      updatePlannerSelectedCount();
    });
  });

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeExamTopicModal();
      closePlannerModal();
    }
  });

  // Compact Sticky Progress Bar on Scroll (Hardware-Accelerated RAF Debounce)
  let scrollRaf = null;
  let isCompactState = false;
  const progressCardEl = document.querySelector(".progress-card");

  window.addEventListener("scroll", () => {
    activeSpotlightCard = null;
    cachedSpotlightRect = null;
    if (!scrollRaf) {
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = null;
        if (!progressCardEl) return;
        const shouldBeCompact = window.scrollY > 40;
        if (shouldBeCompact !== isCompactState) {
          isCompactState = shouldBeCompact;
          progressCardEl.classList.toggle("is-compact", shouldBeCompact);
        }
      });
    }
  }, { passive: true });

  // Window resize & font load sync for Liquid Sliding Pill (Term Selector)
    // Initialize PWA Service Worker & Install Affordance
  initPwaService();

  window.addEventListener("resize", () => {
    updateTermSelectorButtonsUI();
  }, { passive: true });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      updateTermSelectorButtonsUI();
    });
  }

  // Question Text Selection -> Highlight Copy Button Affordance
  initQuestionSelectionCopyAffordance();
}

// Global Initialization with Guard (Guarantees single execution and prevents duplicate event listeners)
let isAppInitialized = false;

function initApp() {
  if (isAppInitialized) return;
  isAppInitialized = true;

  try {
    loadStoredState();
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      const btn = document.getElementById("themeToggleBtn");
      if (btn) btn.textContent = "☀️ Light";
    }
    setupEventListeners();
    renderApplication();
    console.log(`%c[NALR Platform] Initialized successfully. Term: ${currentTermId.toUpperCase()}, Answered: ${Object.keys(userPracticeAnswers).length} Qs`, "color: #2563eb; font-weight: bold;");
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

document.addEventListener("DOMContentLoaded", initApp);
if (document.readyState === "complete" || document.readyState === "interactive") {
  initApp();
}

// Global window bindings for interactive HTML triggers
if (typeof window !== "undefined") {
  window.openPlannerModal = openPlannerModal;
  window.closePlannerModal = closePlannerModal;
  window.generateDailyStudyPlan = generateDailyStudyPlan;
  window.resetStudyPlanner = resetStudyPlanner;
  window.jumpToPlannerTopic = jumpToPlannerTopic;
}
