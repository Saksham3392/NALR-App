export type Difficulty = "all" | "Easy" | "Medium" | "Hard";
export type TermId = "st1" | "st2" | "endterm";

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

export interface PPTItem {
  pdfUrl: string;
  title: string;
  slideCount: number;
  fileName: string;
}

export interface StudyTask {
  id: string;
  termId: TermId;
  termName: string;
  moduleId: string;
  moduleNum: number;
  moduleTitle: string;
  typeId: string;
  taskTitle: string;
  questionCount: number;
}

export interface StudyDay {
  dayIndex: number;
  dateString: string;
  displayDate: string;
  isRevisionDay: boolean;
  isBufferDay: boolean;
  tasks: StudyTask[];
}

export interface StudyPlan {
  examDate: string;
  createdAt: string;
  totalDays: number;
  studyDaysCount: number;
  hasRevisionDay: boolean;
  totalTasks: number;
  selectedModuleIds: string[];
  completedTasks: Record<string, boolean>;
  days: StudyDay[];
}

export interface ExamSettings {
  selectedModuleIds: string[];
  durationMinutes: number; // e.g., 20 or custom
}

export interface ExamResult {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  marksScored: number;
  maxMarks: number;
  percentage: number;
  timeSpentSeconds: number;
  questionPool: Question[];
  userAnswers: Record<string, string>;
  completedAt: string;
}
