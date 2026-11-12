import React, { createContext, useContext, useEffect, useState, useMemo, useRef, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import {
  Difficulty,
  ExamResult,
  Question,
  StudyPlan,
  StudyTask,
  StudyDay,
  SyllabusModule,
  TermId,
} from '../types';
import { QUIZ_QUESTIONS } from '../data/questions';
import { SYLLABUS_DATA } from '../data/syllabus';
import { lightColors, darkColors, ThemeColors } from '../theme/colors';
import {
  GlassCopyToast,
  GlassModalHost,
  GlassConfirmConfig,
  GlassAlertConfig,
} from '../components/GlassUI';

const APP_STATE_KEY = 'NALR_APP_STATE_V1';
const PLANNER_STATE_KEY = 'nalr_study_plan_v1';
const EXAM_HISTORY_KEY = 'nalr_exam_history_v1';

interface AppContextType {
  // Theme
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: ThemeColors;

  // Term & Navigation
  currentTermId: TermId;
  switchTerm: (termId: TermId) => void;
  activeModuleId: string;
  activeTypeId: string;
  selectModuleAndType: (moduleId: string, typeId: string) => void;
  currentModule: SyllabusModule | undefined;
  currentModules: SyllabusModule[];

  // Practice Mode & Filtering
  practiceAnswers: Record<string, string>;
  answerPracticeQuestion: (questionId: string, chosenOption: string) => void;
  clearPracticeAnswer: (questionId: string) => void;
  bookmarkedIds: Set<string>;
  toggleBookmark: (questionId: string) => void;
  difficultyFilter: Difficulty;
  setDifficultyFilter: (diff: Difficulty) => void;
  showFlaggedOnly: boolean;
  setShowFlaggedOnly: (val: boolean) => void;

  // Questions for current view
  currentQuestions: Question[];
  currentModuleQuestions: Question[];
  currentTypeQuestions: Question[];

  // Stats
  totalAnsweredCount: number;
  totalCorrectCount: number;
  bookmarkedCount: number;
  clearAllAnswers: () => Promise<void>;
  resetAllProgress: () => Promise<void>;

  // Planner
  studyPlan: StudyPlan | null;
  generateStudyPlan: (examDateStr: string, selectedModuleIds: string[]) => boolean;
  togglePlannerTask: (taskId: string) => void;
  resetStudyPlan: () => void;

  // Active Exam
  activeExamResult: ExamResult | null;
  setActiveExamResult: (res: ExamResult | null) => void;

  // Glassmorphic UI Feedback
  showGlassToast: () => void;
  showGlassConfirm: (opts: {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    isDestructive?: boolean;
    icon?: 'warning' | 'broom' | 'reset' | 'info';
  }) => Promise<boolean>;
  showGlassAlert: (opts: {
    title: string;
    message: string;
    confirmText?: string;
  }) => Promise<void>;

  isReady: boolean;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTermId, setCurrentTermId] = useState<TermId>('st1');
  const [activeModuleId, setActiveModuleId] = useState<string>('mod1');
  const [activeTypeId, setActiveTypeId] = useState<string>('type_1');

  const [lastActiveModulePerTerm, setLastActiveModulePerTerm] = useState<Record<TermId, string>>({
    st1: 'mod1',
    st2: 'st2_mod1',
    endterm: 'end_mod1',
  });
  const [lastActiveTypePerTerm, setLastActiveTypePerTerm] = useState<Record<TermId, string>>({
    st1: 'type_1',
    st2: 'type_1',
    endterm: 'type_1',
  });

  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty>('all');
  const [showFlaggedOnly, setShowFlaggedOnly] = useState(false);

  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [activeExamResult, setActiveExamResult] = useState<ExamResult | null>(null);

  // Glass Toast & Confirmation Modal State
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [confirmConfig, setConfirmConfig] = useState<GlassConfirmConfig | null>(null);
  const [alertConfig, setAlertConfig] = useState<GlassAlertConfig | null>(null);

  const showGlassToast = useCallback(() => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setToastVisible(true);
    // Stay visible for 500ms then smoothly hide
    toastTimerRef.current = setTimeout(() => {
      setToastVisible(false);
      toastTimerRef.current = null;
    }, 500);
  }, []);

  const showGlassConfirm = useCallback(
    (opts: {
      title: string;
      message: string;
      confirmText?: string;
      cancelText?: string;
      isDestructive?: boolean;
      icon?: 'warning' | 'broom' | 'reset' | 'info';
    }): Promise<boolean> => {
      return new Promise((resolve) => {
        setAlertConfig(null);
        setConfirmConfig({
          ...opts,
          onConfirm: () => {
            setConfirmConfig(null);
            resolve(true);
          },
          onCancel: () => {
            setConfirmConfig(null);
            resolve(false);
          },
        });
      });
    },
    []
  );

  const showGlassAlert = useCallback(
    (opts: { title: string; message: string; confirmText?: string }): Promise<void> => {
      return new Promise((resolve) => {
        setConfirmConfig(null);
        setAlertConfig({
          ...opts,
          onDismiss: () => {
            setAlertConfig(null);
            resolve();
          },
        });
      });
    },
    []
  );

  // Load stored state on mount
  useEffect(() => {
    const loadState = async () => {
      try {
        const stored = await AsyncStorage.getItem(APP_STATE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.isDarkMode !== undefined) setIsDarkMode(parsed.isDarkMode);
          if (parsed.currentTermId && SYLLABUS_DATA[parsed.currentTermId as TermId]) {
            setCurrentTermId(parsed.currentTermId);
          }
          if (parsed.activeModuleId) setActiveModuleId(parsed.activeModuleId);
          if (parsed.activeTypeId) setActiveTypeId(parsed.activeTypeId);
          if (parsed.lastActiveModulePerTerm) setLastActiveModulePerTerm(parsed.lastActiveModulePerTerm);
          if (parsed.lastActiveTypePerTerm) setLastActiveTypePerTerm(parsed.lastActiveTypePerTerm);
          if (parsed.practiceAnswers) setPracticeAnswers(parsed.practiceAnswers);
          if (parsed.bookmarkedIds && Array.isArray(parsed.bookmarkedIds)) {
            setBookmarkedIds(new Set(parsed.bookmarkedIds));
          }
          if (parsed.difficultyFilter) setDifficultyFilter(parsed.difficultyFilter);
          if (parsed.showFlaggedOnly !== undefined) setShowFlaggedOnly(parsed.showFlaggedOnly);
        }

        const storedPlanner = await AsyncStorage.getItem(PLANNER_STATE_KEY);
        if (storedPlanner) {
          setStudyPlan(JSON.parse(storedPlanner));
        }
      } catch (e) {
        console.warn('Failed to load stored state:', e);
      } finally {
        setIsReady(true);
      }
    };
    loadState();
  }, []);

  // Save state on changes
  useEffect(() => {
    if (!isReady) return;
    const saveState = async () => {
      try {
        const payload = {
          isDarkMode,
          currentTermId,
          activeModuleId,
          activeTypeId,
          lastActiveModulePerTerm,
          lastActiveTypePerTerm,
          practiceAnswers,
          bookmarkedIds: Array.from(bookmarkedIds),
          difficultyFilter,
          showFlaggedOnly,
          updatedAt: Date.now(),
        };
        await AsyncStorage.setItem(APP_STATE_KEY, JSON.stringify(payload));
      } catch (e) {
        console.warn('Failed to save state:', e);
      }
    };
    saveState();
  }, [
    isReady,
    isDarkMode,
    currentTermId,
    activeModuleId,
    activeTypeId,
    lastActiveModulePerTerm,
    lastActiveTypePerTerm,
    practiceAnswers,
    bookmarkedIds,
    difficultyFilter,
    showFlaggedOnly,
  ]);

  // Save study plan
  useEffect(() => {
    if (!isReady) return;
    const savePlan = async () => {
      try {
        if (studyPlan) {
          await AsyncStorage.setItem(PLANNER_STATE_KEY, JSON.stringify(studyPlan));
        } else {
          await AsyncStorage.removeItem(PLANNER_STATE_KEY);
        }
      } catch (e) {
        console.warn('Failed to save study plan:', e);
      }
    };
    savePlan();
  }, [isReady, studyPlan]);

  const colors = isDarkMode ? darkColors : lightColors;

  const toggleTheme = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setIsDarkMode(prev => !prev);
  };

  const currentModules = useMemo(() => {
    return SYLLABUS_DATA[currentTermId]?.modules || [];
  }, [currentTermId]);

  const currentModule = useMemo(() => {
    return currentModules.find(m => m.id === activeModuleId) || currentModules[0];
  }, [currentModules, activeModuleId]);

  const switchTerm = (termId: TermId) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setCurrentTermId(termId);
    const prevModId = lastActiveModulePerTerm[termId];
    const prevTypeId = lastActiveTypePerTerm[termId];
    const targetModules = SYLLABUS_DATA[termId]?.modules || [];
    const modExists = targetModules.find(m => m.id === prevModId);

    const newModId = modExists ? prevModId : (targetModules[0]?.id || 'mod1');
    const targetModObj = targetModules.find(m => m.id === newModId);
    const typeExists = targetModObj?.types?.find(t => t.id === prevTypeId);
    const newTypeId = typeExists ? prevTypeId : (targetModObj?.types[0]?.id || 'type_1');

    setActiveModuleId(newModId);
    setActiveTypeId(newTypeId);
  };

  const selectModuleAndType = (moduleId: string, typeId: string) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setActiveModuleId(moduleId);
    setActiveTypeId(typeId);

    setLastActiveModulePerTerm(prev => ({
      ...prev,
      [currentTermId]: moduleId,
    }));
    setLastActiveTypePerTerm(prev => ({
      ...prev,
      [currentTermId]: typeId,
    }));
  };

  const answerPracticeQuestion = (questionId: string, chosenOption: string) => {
    const q = QUIZ_QUESTIONS.find(item => item.id === questionId);
    if (!q) return;

    const isCorrect = chosenOption === q.correct;
    try {
      if (isCorrect) {
        // Refined, smooth success feedback
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else {
        // Refined soft warning pulse (replaces abrasive, violent error buzz)
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      }
    } catch {}

    setPracticeAnswers(prev => ({
      ...prev,
      [questionId]: chosenOption,
    }));
  };

  const clearPracticeAnswer = (questionId: string) => {
    try {
      // Soft tactile tick for clear action
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setPracticeAnswers(prev => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const toggleBookmark = (questionId: string) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setBookmarkedIds(prev => {
      const copy = new Set(prev);
      if (copy.has(questionId)) {
        copy.delete(questionId);
      } else {
        copy.add(questionId);
      }
      return copy;
    });
  };

  const clearAllAnswers = async () => {
    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } catch {}
    setPracticeAnswers({});
  };

  const resetAllProgress = async () => {
    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } catch {}
    setPracticeAnswers({});
    setBookmarkedIds(new Set());
    setStudyPlan(null);
    setActiveExamResult(null);
    await AsyncStorage.removeItem(APP_STATE_KEY);
    await AsyncStorage.removeItem(PLANNER_STATE_KEY);
    await AsyncStorage.removeItem(EXAM_HISTORY_KEY);
  };

  // Questions filtering
  const currentModuleQuestions = useMemo(() => {
    return QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId);
  }, [activeModuleId]);

  const currentTypeQuestions = useMemo(() => {
    return currentModuleQuestions.filter(q => q.type_id === activeTypeId);
  }, [currentModuleQuestions, activeTypeId]);

  const currentQuestions = useMemo(() => {
    let pool = currentTypeQuestions;
    if (difficultyFilter !== 'all') {
      pool = pool.filter(q => q.difficulty.toLowerCase() === difficultyFilter.toLowerCase());
    }
    if (showFlaggedOnly) {
      pool = pool.filter(q => bookmarkedIds.has(q.id));
    }
    return pool;
  }, [currentTypeQuestions, difficultyFilter, showFlaggedOnly, bookmarkedIds]);

  const totalAnsweredCount = useMemo(() => {
    return Object.keys(practiceAnswers).length;
  }, [practiceAnswers]);

  const totalCorrectCount = useMemo(() => {
    return Object.entries(practiceAnswers).reduce((acc, [qId, ans]) => {
      const q = QUIZ_QUESTIONS.find(item => item.id === qId);
      return acc + (q && q.correct === ans ? 1 : 0);
    }, 0);
  }, [practiceAnswers]);

  const bookmarkedCount = useMemo(() => {
    return bookmarkedIds.size;
  }, [bookmarkedIds]);

  // Study Planner Generator
  const generateStudyPlan = (examDateStr: string, selectedModuleIds: string[]): boolean => {
    if (!examDateStr) return false;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

    const [ey, em, ed] = examDateStr.split('-').map(Number);
    const examDate = new Date(ey, em - 1, ed, 0, 0, 0, 0);
    const msPerDay = 1000 * 60 * 60 * 24;
    const totalDays = Math.round((examDate.getTime() - today.getTime()) / msPerDay);

    if (isNaN(totalDays) || totalDays <= 0 || selectedModuleIds.length === 0) {
      return false;
    }

    const allModules: (SyllabusModule & { termId: TermId; termName: string })[] = [
      ...SYLLABUS_DATA.st1.modules.map(m => ({ ...m, termId: 'st1' as TermId, termName: 'ST-1' })),
      ...SYLLABUS_DATA.st2.modules.map(m => ({ ...m, termId: 'st2' as TermId, termName: 'ST-2' })),
      ...SYLLABUS_DATA.endterm.modules.map(m => ({ ...m, termId: 'endterm' as TermId, termName: 'End Term' })),
    ];

    const selectedModules = allModules.filter(m => selectedModuleIds.includes(m.id));
    const taskItems: StudyTask[] = [];

    selectedModules.forEach(mod => {
      const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id);
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
              questionCount: actualCount,
            });
          }
        });
      }
    });

    if (taskItems.length === 0) return false;

    const hasRevisionDay = totalDays >= 3;
    const studyDaysCount = hasRevisionDay ? totalDays - 1 : totalDays;
    const activeDaysCount = Math.min(studyDaysCount, taskItems.length);

    const days: StudyDay[] = [];
    const baseTasksPerDay = Math.floor(taskItems.length / activeDaysCount);
    let extraTasks = taskItems.length % activeDaysCount;
    let taskCursor = 0;

    for (let i = 0; i < studyDaysCount; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      const ymd = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const displayDate = d.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });

      if (i < activeDaysCount) {
        const count = baseTasksPerDay + (extraTasks > 0 ? 1 : 0);
        if (extraTasks > 0) extraTasks--;
        const dayTasks = taskItems.slice(taskCursor, taskCursor + count);
        taskCursor += count;

        days.push({
          dayIndex: i + 1,
          dateString: ymd,
          displayDate,
          isRevisionDay: false,
          isBufferDay: false,
          tasks: dayTasks,
        });
      } else {
        days.push({
          dayIndex: i + 1,
          dateString: ymd,
          displayDate,
          isRevisionDay: false,
          isBufferDay: true,
          tasks: [],
        });
      }
    }

    if (hasRevisionDay) {
      const revDate = new Date(today);
      revDate.setDate(revDate.getDate() + totalDays - 1);
      const ymd = `${revDate.getFullYear()}-${String(revDate.getMonth() + 1).padStart(2, '0')}-${String(revDate.getDate()).padStart(2, '0')}`;
      const displayDate = revDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });

      days.push({
        dayIndex: totalDays,
        dateString: ymd,
        displayDate,
        isRevisionDay: true,
        isBufferDay: false,
        tasks: [
          {
            id: 'rev_final',
            termId: 'st1',
            termName: 'Comprehensive',
            moduleId: 'all',
            moduleNum: 0,
            moduleTitle: 'Final Full Revision & Mock Exam',
            typeId: 'all',
            taskTitle: 'Simulate full timed exam across all selected modules',
            questionCount: taskItems.reduce((acc, t) => acc + t.questionCount, 0),
          },
        ],
      });
    }

    const plan: StudyPlan = {
      examDate: examDateStr,
      createdAt: new Date().toISOString(),
      totalDays,
      studyDaysCount,
      hasRevisionDay,
      totalTasks: taskItems.length,
      selectedModuleIds,
      completedTasks: {},
      days,
    };

    setStudyPlan(plan);
    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {}
    return true;
  };

  const togglePlannerTask = (taskId: string) => {
    if (!studyPlan) return;
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setStudyPlan(prev => {
      if (!prev) return null;
      const isDone = Boolean(prev.completedTasks[taskId]);
      return {
        ...prev,
        completedTasks: {
          ...prev.completedTasks,
          [taskId]: !isDone,
        },
      };
    });
  };

  const resetStudyPlan = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {}
    setStudyPlan(null);
  };

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        colors,
        currentTermId,
        switchTerm,
        activeModuleId,
        activeTypeId,
        selectModuleAndType,
        currentModule,
        currentModules,
        practiceAnswers,
        answerPracticeQuestion,
        clearPracticeAnswer,
        bookmarkedIds,
        toggleBookmark,
        difficultyFilter,
        setDifficultyFilter,
        showFlaggedOnly,
        setShowFlaggedOnly,
        currentQuestions,
        currentModuleQuestions,
        currentTypeQuestions,
        totalAnsweredCount,
        totalCorrectCount,
        bookmarkedCount,
        clearAllAnswers,
        resetAllProgress,
        studyPlan,
        generateStudyPlan,
        togglePlannerTask,
        resetStudyPlan,
        activeExamResult,
        setActiveExamResult,
        showGlassToast,
        showGlassConfirm,
        showGlassAlert,
        isReady,
      }}
    >
      {children}
      <GlassCopyToast visible={toastVisible} isDarkMode={isDarkMode} />
      <GlassModalHost
        confirmConfig={confirmConfig}
        alertConfig={alertConfig}
        isDarkMode={isDarkMode}
      />
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
