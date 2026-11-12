import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';
import { QUIZ_QUESTIONS } from '../data/questions';
import { SYLLABUS_DATA } from '../data/syllabus';
import { Question, ExamResult } from '../types';

interface ExamModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ExamModal: React.FC<ExamModalProps> = ({ visible, onClose }) => {
  const insets = useSafeAreaInsets();
  const { colors, currentTermId, showGlassAlert, showGlassConfirm } = useApp();

  const [examStep, setExamStep] = useState<'setup' | 'running' | 'results'>('setup');
  const [selectedModIds, setSelectedModIds] = useState<string[]>([]);
  const [examDurationMins, setExamDurationMins] = useState(20);

  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [examFlagged, setExamFlagged] = useState<Set<string>>(new Set());
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(0);

  const [resultData, setResultData] = useState<ExamResult | null>(null);

  const availableModules = SYLLABUS_DATA[currentTermId]?.modules || [];

  useEffect(() => {
    if (visible && examStep === 'setup') {
      const activeIds = availableModules
        .filter(m => QUIZ_QUESTIONS.some(q => q.module_id === m.id))
        .map(m => m.id);
      setSelectedModIds(activeIds);
    }
  }, [visible, currentTermId]);

  useEffect(() => {
    if (examStep !== 'running') return;

    const timer = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStep]);

  const toggleModuleSelection = (modId: string) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setSelectedModIds(prev =>
      prev.includes(modId) ? prev.filter(id => id !== modId) : [...prev, modId]
    );
  };

  const selectAllTopics = () => {
    try {
      Haptics.selectionAsync();
    } catch {}
    const all = availableModules
      .filter(m => QUIZ_QUESTIONS.some(q => q.module_id === m.id))
      .map(m => m.id);
    setSelectedModIds(all);
  };

  const deselectAllTopics = () => {
    try {
      Haptics.selectionAsync();
    } catch {}
    setSelectedModIds([]);
  };

  const startExam = async () => {
    if (selectedModIds.length === 0) {
      await showGlassAlert({
        title: 'No Topics Selected',
        message: 'Please select at least one syllabus topic with questions.',
        confirmText: 'OK',
      });
      return;
    }

    const pool = QUIZ_QUESTIONS.filter(q => selectedModIds.includes(q.module_id));
    if (pool.length === 0) {
      await showGlassAlert({
        title: 'No Questions Available',
        message: 'The selected topics have 0 questions loaded.',
        confirmText: 'OK',
      });
      return;
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled);
    setCurrentIndex(0);
    setExamAnswers({});
    setExamFlagged(new Set());
    setTimeLeftSeconds(examDurationMins * 60);
    setExamStep('running');

    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {}
  };

  const handleSelectAnswer = (qId: string, opt: string) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setExamAnswers(prev => ({
      ...prev,
      [qId]: opt,
    }));
  };

  const toggleExamFlag = (qId: string) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setExamFlagged(prev => {
      const copy = new Set(prev);
      if (copy.has(qId)) copy.delete(qId);
      else copy.add(qId);
      return copy;
    });
  };

  const finishExam = () => {
    const totalQuestions = examQuestions.length;
    const answeredCount = Object.keys(examAnswers).length;
    let correctCount = 0;
    let marksScored = 0;
    const maxMarks = examQuestions.reduce((sum, q) => sum + (q.points || 1), 0);

    examQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correct) {
        correctCount++;
        marksScored += q.points || 1;
      }
    });

    const wrongCount = answeredCount - correctCount;
    const unansweredCount = totalQuestions - answeredCount;
    const percentage = maxMarks > 0 ? Math.round((marksScored / maxMarks) * 100) : 0;
    const timeSpentSeconds = examDurationMins * 60 - timeLeftSeconds;

    const res: ExamResult = {
      totalQuestions,
      answeredCount,
      correctCount,
      wrongCount,
      unansweredCount,
      marksScored,
      maxMarks,
      percentage,
      timeSpentSeconds,
      questionPool: examQuestions,
      userAnswers: examAnswers,
      completedAt: new Date().toISOString(),
    };

    setResultData(res);
    setExamStep('results');

    try {
      if (percentage >= 60) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      }
    } catch {}
  };

  const handleConfirmSubmit = async () => {
    const unanswered = examQuestions.length - Object.keys(examAnswers).length;
    const confirmed = await showGlassConfirm({
      title: 'Submit Examination',
      message:
        unanswered > 0
          ? `You have ${unanswered} unanswered question(s). Are you sure you want to finish the exam now?`
          : 'Are you sure you want to submit your examination?',
      confirmText: 'Submit Exam',
      cancelText: 'Keep Answering',
      isDestructive: false,
      icon: 'info',
    });
    if (confirmed) {
      finishExam();
    }
  };

  const handleExitExam = async () => {
    if (examStep === 'running') {
      const confirmed = await showGlassConfirm({
        title: 'Exit Examination?',
        message: 'Your current exam progress will be lost if you leave without submitting.',
        confirmText: 'Exit',
        cancelText: 'Resume Exam',
        isDestructive: true,
        icon: 'warning',
      });
      if (confirmed) {
        setExamStep('setup');
        onClose();
      }
    } else {
      setExamStep('setup');
      onClose();
    }
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = examQuestions[currentIndex];
  const selectedCount = QUIZ_QUESTIONS.filter(q => selectedModIds.includes(q.module_id)).length;

  return (
    <Modal visible={visible} animationType="slide" transparent={false} onRequestClose={handleExitExam}>
      <View
        style={[
          styles.safeArea,
          {
            backgroundColor: colors.appBg,
            paddingTop: Math.max(insets.top, 24),
            paddingBottom: Math.max(insets.bottom, 16),
          },
        ]}
      >
        {/* Navigation Bar */}
        <View style={[styles.navBar, { backgroundColor: colors.cardBg, borderBottomColor: colors.border }]}>
          <Text style={[styles.navTitle, { color: colors.textPrimary }]}>
            {examStep === 'setup'
              ? 'Exam Setup'
              : examStep === 'running'
              ? 'Examination'
              : 'Results & Analytics'}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleExitExam}
            style={[styles.closeBtn, { backgroundColor: colors.cardSubBg }]}
          >
            <Text style={[styles.closeText, { color: colors.textPrimary }]}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* ==================== STEP 1: SETUP SCREEN ==================== */}
        {examStep === 'setup' ? (
          <View style={styles.flexOne}>
            <ScrollView
              contentContainerStyle={[styles.scrollContent, { paddingBottom: 110 }]}
              showsVerticalScrollIndicator={false}
            >
              {/* Banner */}
              <View style={[styles.bannerCard, { backgroundColor: colors.brandBlueLight, borderColor: colors.brandBlueBorder }]}>
                <Text style={[styles.bannerTitle, { color: colors.brandBlue }]}>
                  TIMED SIMULATION BUILDER
                </Text>
                <Text style={[styles.bannerDesc, { color: colors.textPrimary }]}>
                  Configure duration and syllabus topics to simulate real university examination conditions.
                </Text>
                <Text style={[styles.bannerCount, { color: colors.brandBlue }]}>
                  {selectedModIds.length} Topics Selected • {selectedCount} Question Pool
                </Text>
              </View>

              {/* Duration Selector */}
              <Text style={[styles.sectionHeading, { color: colors.textSecondary }]}>
                EXAM DURATION
              </Text>
              <View style={[styles.durationGroup, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                {[10, 20, 30, 45, 60].map(mins => {
                  const isSelected = examDurationMins === mins;
                  return (
                    <TouchableOpacity
                      key={mins}
                      activeOpacity={0.8}
                      onPress={() => {
                        try {
                          Haptics.selectionAsync();
                        } catch {}
                        setExamDurationMins(mins);
                      }}
                      style={[
                        styles.durationBtn,
                        isSelected && [
                          styles.durationBtnSelected,
                          { backgroundColor: colors.brandBlue },
                        ],
                      ]}
                    >
                      <Text
                        style={[
                          styles.durationText,
                          { color: isSelected ? '#FFFFFF' : colors.textPrimary },
                          isSelected && { fontWeight: '700' },
                        ]}
                      >
                        {mins}m
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Topic Selection Header */}
              <View style={styles.topicActionRow}>
                <Text style={[styles.sectionHeading, { color: colors.textSecondary }]}>
                  SELECT TOPICS ({currentTermId.toUpperCase()})
                </Text>
                <View style={styles.toggleGroup}>
                  <TouchableOpacity activeOpacity={0.7} onPress={selectAllTopics}>
                    <Text style={[styles.toggleBtnText, { color: colors.brandBlue }]}>Select All</Text>
                  </TouchableOpacity>
                  <Text style={{ color: colors.borderSubtle }}>•</Text>
                  <TouchableOpacity activeOpacity={0.7} onPress={deselectAllTopics}>
                    <Text style={[styles.toggleBtnText, { color: colors.crimson }]}>Clear All</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Topics List */}
              <View style={[styles.topicsContainer, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                {availableModules.map(mod => {
                  const count = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id).length;
                  const isSelected = selectedModIds.includes(mod.id);
                  const hasQs = count > 0;

                  return (
                    <TouchableOpacity
                      key={mod.id}
                      disabled={!hasQs}
                      activeOpacity={0.7}
                      onPress={() => toggleModuleSelection(mod.id)}
                      style={[
                        styles.topicRow,
                        {
                          backgroundColor: isSelected ? colors.brandBlueLight : 'transparent',
                          borderBottomColor: colors.borderSubtle,
                          opacity: hasQs ? 1 : 0.45,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.checkboxCircle,
                          {
                            backgroundColor: isSelected ? colors.brandBlue : 'transparent',
                            borderColor: isSelected ? colors.brandBlue : colors.border,
                          },
                        ]}
                      >
                        {isSelected ? <Text style={styles.checkmarkIcon}>✓</Text> : null}
                      </View>

                      <View style={styles.topicRowInfo}>
                        <Text
                          style={[
                            styles.topicRowTitle,
                            { color: isSelected ? colors.brandBlue : colors.textPrimary },
                            isSelected && { fontWeight: '700' },
                          ]}
                          numberOfLines={1}
                        >
                          {mod.num}. {mod.title}
                        </Text>
                        <Text style={[styles.topicRowSub, { color: colors.textSecondary }]}>
                          {count > 0 ? `${count} Questions` : 'No questions loaded'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>

            {/* Fixed Bottom Action Bar */}
            <View style={[styles.bottomBar, { backgroundColor: colors.cardBg, borderTopColor: colors.border }]}>
              <View style={styles.summaryInfo}>
                <Text style={[styles.summaryTitle, { color: colors.textPrimary }]}>
                  {selectedCount} Questions Pool
                </Text>
                <Text style={[styles.summarySub, { color: colors.textSecondary }]}>
                  Duration: {examDurationMins} Minutes
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={startExam}
                style={[styles.primaryActionBtn, { backgroundColor: colors.brandBlue }]}
              >
                <Text style={styles.primaryActionBtnText}>Start Exam →</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {/* ==================== STEP 2: ACTIVE EXAM RUNNER ==================== */}
        {examStep === 'running' && currentQ ? (
          <View style={styles.runnerContainer}>
            {/* Top Telemetry Row with Progress and Timer */}
            <View style={[styles.runnerHeader, { backgroundColor: colors.cardBg, borderBottomColor: colors.border }]}>
              <View style={styles.progressCluster}>
                <Text style={[styles.qCounterText, { color: colors.textPrimary }]}>
                  Question {currentIndex + 1} of {examQuestions.length}
                </Text>
                <Text style={[styles.pointsSub, { color: colors.textSecondary }]}>
                  {currentQ.points || 1} Pt • {currentQ.module_name}
                </Text>
              </View>

              {/* Countdown Timer Pill */}
              <View
                style={[
                  styles.timerPill,
                  {
                    backgroundColor: timeLeftSeconds < 180 ? colors.crimsonLight : colors.cardSubBg,
                    borderColor: timeLeftSeconds < 180 ? colors.crimsonBorder : colors.borderSubtle,
                  },
                ]}
              >
                <Text style={styles.timerIcon}>⏱</Text>
                <Text
                  style={[
                    styles.timerText,
                    { color: timeLeftSeconds < 180 ? colors.crimson : colors.textPrimary },
                  ]}
                >
                  {formatTimer(timeLeftSeconds)}
                </Text>
              </View>
            </View>

            {/* Question Scroll */}
            <ScrollView contentContainerStyle={styles.runnerScroll} showsVerticalScrollIndicator={false}>
              <View style={[styles.examQCard, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                {/* Difficulty & Flag Action */}
                <View style={styles.examQTopRow}>
                  <View style={[styles.diffBadge, { backgroundColor: colors.cardSubBg }]}>
                    <Text style={[styles.diffBadgeText, { color: colors.textSecondary }]}>
                      {currentQ.difficulty}
                    </Text>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => toggleExamFlag(currentQ.id)}
                    style={[
                      styles.flagBtn,
                      {
                        backgroundColor: examFlagged.has(currentQ.id) ? colors.amberLight : colors.cardSubBg,
                        borderColor: examFlagged.has(currentQ.id) ? colors.amber : colors.borderSubtle,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.flagBtnText,
                        { color: examFlagged.has(currentQ.id) ? colors.amber : colors.textSecondary },
                      ]}
                    >
                      {examFlagged.has(currentQ.id) ? '★ Flagged' : '☆ Flag for Review'}
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Statement */}
                <Text style={[styles.examQStatement, { color: colors.textPrimary }]}>
                  {currentQ.question}
                </Text>

                {/* Options List */}
                <View style={styles.optionsList}>
                  {currentQ.options.map((opt, oIdx) => {
                    const letters = ['A', 'B', 'C', 'D', 'E'];
                    const isSelected = examAnswers[currentQ.id] === opt;
                    return (
                      <TouchableOpacity
                        key={oIdx}
                        activeOpacity={0.7}
                        onPress={() => handleSelectAnswer(currentQ.id, opt)}
                        style={[
                          styles.examOptBtn,
                          {
                            backgroundColor: isSelected ? colors.brandBlueLight : colors.cardSubBg,
                            borderColor: isSelected ? colors.brandBlue : colors.borderSubtle,
                          },
                        ]}
                      >
                        <View
                          style={[
                            styles.examOptBadge,
                            {
                              backgroundColor: isSelected ? colors.brandBlue : colors.cardBg,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.examOptBadgeText,
                              { color: isSelected ? '#FFFFFF' : colors.textSecondary },
                            ]}
                          >
                            {letters[oIdx] || `${oIdx + 1}`}
                          </Text>
                        </View>
                        <Text
                          style={[
                            styles.examOptText,
                            { color: isSelected ? colors.brandBlue : colors.textPrimary },
                            isSelected && { fontWeight: '700' },
                          ]}
                        >
                          {opt}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={[styles.runnerFooter, { backgroundColor: colors.cardBg, borderTopColor: colors.border }]}>
              <TouchableOpacity
                disabled={currentIndex === 0}
                activeOpacity={0.8}
                onPress={() => {
                  try {
                    Haptics.selectionAsync();
                  } catch {}
                  setCurrentIndex(prev => Math.max(0, prev - 1));
                }}
                style={[
                  styles.navBtn,
                  {
                    backgroundColor: colors.cardSubBg,
                    opacity: currentIndex === 0 ? 0.35 : 1,
                  },
                ]}
              >
                <Text style={[styles.navBtnText, { color: colors.textPrimary }]}>← Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleConfirmSubmit}
                style={[styles.submitBtn, { backgroundColor: colors.emerald }]}
              >
                <Text style={styles.submitBtnText}>Submit Exam</Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={currentIndex === examQuestions.length - 1}
                activeOpacity={0.8}
                onPress={() => {
                  try {
                    Haptics.selectionAsync();
                  } catch {}
                  setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1));
                }}
                style={[
                  styles.navBtn,
                  {
                    backgroundColor: colors.cardSubBg,
                    opacity: currentIndex === examQuestions.length - 1 ? 0.35 : 1,
                  },
                ]}
              >
                <Text style={[styles.navBtnText, { color: colors.textPrimary }]}>Next →</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {/* ==================== STEP 3: RESULTS SCREEN ==================== */}
        {examStep === 'results' && resultData ? (
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Score Hero Card */}
            <View style={[styles.resultCard, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
              <Text style={[styles.resultVerdictTag, { color: colors.brandBlue }]}>EXAMINATION RESULT</Text>
              <Text
                style={[
                  styles.resultPct,
                  {
                    color:
                      resultData.percentage >= 80
                        ? colors.emerald
                        : resultData.percentage >= 60
                        ? colors.brandBlue
                        : colors.crimson,
                  },
                ]}
              >
                {resultData.percentage}%
              </Text>
              <Text style={[styles.resultMarks, { color: colors.textPrimary }]}>
                {resultData.marksScored} / {resultData.maxMarks} Points Scored
              </Text>
              <Text style={[styles.resultMsg, { color: colors.textSecondary }]}>
                {resultData.percentage >= 85
                  ? 'Outstanding Performance! You have thoroughly mastered these topics.'
                  : resultData.percentage >= 60
                  ? 'Good Progress! Review missed questions to reinforce your preparation.'
                  : 'Keep Practicing! Retake this topic set to sharpen accuracy.'}
              </Text>
            </View>

            {/* Metrics Breakdown */}
            <View style={styles.metricsGrid}>
              <View style={[styles.metricTile, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                <Text style={[styles.metricVal, { color: colors.emerald }]}>{resultData.correctCount}</Text>
                <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>Correct</Text>
              </View>
              <View style={[styles.metricTile, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                <Text style={[styles.metricVal, { color: colors.crimson }]}>{resultData.wrongCount}</Text>
                <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>Wrong</Text>
              </View>
              <View style={[styles.metricTile, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                <Text style={[styles.metricVal, { color: colors.textMuted }]}>{resultData.unansweredCount}</Text>
                <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>Unanswered</Text>
              </View>
              <View style={[styles.metricTile, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                <Text style={[styles.metricVal, { color: colors.brandBlue }]}>{formatTimer(resultData.timeSpentSeconds)}</Text>
                <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>Time Taken</Text>
              </View>
            </View>

            {/* Actions */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setExamStep('setup');
                onClose();
              }}
              style={[styles.doneExamBtn, { backgroundColor: colors.brandBlue }]}
            >
              <Text style={styles.doneExamBtnText}>Return to Dashboard</Text>
            </TouchableOpacity>
          </ScrollView>
        ) : null}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flexOne: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  navTitle: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 14,
    fontWeight: '700',
  },
  scrollContent: {
    padding: 16,
    gap: 12,
  },
  bannerCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
    gap: 4,
  },
  bannerTitle: {
    fontSize: 10.5,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  bannerDesc: {
    fontSize: 12.5,
    lineHeight: 18,
    fontWeight: '500',
  },
  bannerCount: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginTop: 4,
  },
  durationGroup: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    padding: 3,
    gap: 4,
  },
  durationBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 9,
  },
  durationBtnSelected: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  durationText: {
    fontSize: 12.5,
    fontWeight: '600',
  },
  topicActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  toggleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  toggleBtnText: {
    fontSize: 11.5,
    fontWeight: '700',
  },
  topicsContainer: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    gap: 10,
  },
  checkboxCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkIcon: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  topicRowInfo: {
    flex: 1,
    gap: 2,
  },
  topicRowTitle: {
    fontSize: 13,
    fontWeight: '500',
  },
  topicRowSub: {
    fontSize: 10.5,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    elevation: 8,
  },
  summaryInfo: {
    gap: 2,
  },
  summaryTitle: {
    fontSize: 13.5,
    fontWeight: '700',
  },
  summarySub: {
    fontSize: 11,
  },
  primaryActionBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  primaryActionBtnText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
  },
  runnerContainer: {
    flex: 1,
  },
  runnerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  progressCluster: {
    gap: 2,
  },
  qCounterText: {
    fontSize: 14.5,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  pointsSub: {
    fontSize: 11,
  },
  timerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
    gap: 5,
  },
  timerIcon: {
    fontSize: 12,
  },
  timerText: {
    fontSize: 13,
    fontWeight: '700',
  },
  runnerScroll: {
    padding: 16,
    paddingBottom: 24,
  },
  examQCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    gap: 14,
  },
  examQTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  diffBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  diffBadgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  flagBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  flagBtnText: {
    fontSize: 11.5,
    fontWeight: '600',
  },
  examQStatement: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
  },
  optionsList: {
    gap: 8,
  },
  examOptBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    minHeight: 48,
    gap: 10,
  },
  examOptBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  examOptBadgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  examOptText: {
    flex: 1,
    fontSize: 13.5,
    lineHeight: 18,
  },
  runnerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    gap: 8,
  },
  navBtn: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  navBtnText: {
    fontSize: 12.5,
    fontWeight: '600',
  },
  submitBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
  },
  resultCard: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    gap: 8,
  },
  resultVerdictTag: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  resultPct: {
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: -1,
  },
  resultMarks: {
    fontSize: 15,
    fontWeight: '700',
  },
  resultMsg: {
    fontSize: 12.5,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 4,
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  metricTile: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 2,
  },
  metricVal: {
    fontSize: 18,
    fontWeight: '800',
  },
  metricLabel: {
    fontSize: 10.5,
    fontWeight: '600',
  },
  doneExamBtn: {
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  doneExamBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
