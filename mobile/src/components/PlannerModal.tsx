import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import DateTimePicker, {
  DateTimePickerChangeEvent,
} from '@react-native-community/datetimepicker';
import { useApp } from '../context/AppContext';
import { SYLLABUS_DATA } from '../data/syllabus';
import { QUIZ_QUESTIONS } from '../data/questions';
import { TermId } from '../types';

interface PlannerModalProps {
  visible: boolean;
  onClose: () => void;
}

const formatLocalYMD = (d: Date): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const parseLocalYMD = (ymd: string): Date => {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0);
};

const getDaysBetween = (start: Date, end: Date): number => {
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((endDay.getTime() - startDay.getTime()) / msPerDay);
};

const formatDisplayDateLong = (ymd: string): string => {
  const d = parseLocalYMD(ymd);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const PlannerModal: React.FC<PlannerModalProps> = ({ visible, onClose }) => {
  const insets = useSafeAreaInsets();
  const {
    studyPlan,
    generateStudyPlan,
    togglePlannerTask,
    resetStudyPlan,
    selectModuleAndType,
    switchTerm,
    colors,
    showGlassAlert,
    showGlassConfirm,
  } = useApp();

  const getDatePlusDays = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return formatLocalYMD(d);
  };

  const [selectedDays, setSelectedDays] = useState<number>(14);
  const [selectedDate, setSelectedDate] = useState<string>(getDatePlusDays(14));
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const [selectedModules, setSelectedModules] = useState<string[]>([
    'mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6', 'mod7', 'mod8',
    'mod9', 'mod10', 'mod11', 'mod12', 'mod13', 'mod14',
  ]);

  const presets = [
    { label: '7 Days', sub: 'Sprint', days: 7 },
    { label: '14 Days', sub: 'Standard', days: 14 },
    { label: '21 Days', sub: 'Deep', days: 21 },
    { label: '30 Days', sub: 'Full', days: 30 },
  ];

  const handleSelectPreset = (days: number) => {
    try {
      Haptics.selectionAsync();
    } catch {}
    setIsCustomMode(false);
    setSelectedDays(days);
    setSelectedDate(getDatePlusDays(days));
  };

  const handleOpenCustomPicker = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setIsCustomMode(true);
    setShowDatePicker(true);
  };

  const handleDateValueChange = (event: DateTimePickerChangeEvent, newDate?: Date) => {
    setShowDatePicker(false);
    if (!newDate) return;

    const today = new Date();
    const daysRemaining = getDaysBetween(today, newDate);

    if (daysRemaining <= 0) {
      showGlassAlert({
        title: 'Invalid Date',
        message: 'Target exam date must be at least 1 day in the future.',
        confirmText: 'OK',
      });
      return;
    }

    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {}
    setIsCustomMode(true);
    setSelectedDays(daysRemaining);
    setSelectedDate(formatLocalYMD(newDate));
  };

  const handleDateDismiss = () => {
    setShowDatePicker(false);
  };

  const handleToggleModule = (modId: string) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    setSelectedModules(prev =>
      prev.includes(modId) ? prev.filter(id => id !== modId) : [...prev, modId]
    );
  };

  const handleSelectTermModules = (termId: TermId) => {
    try {
      Haptics.selectionAsync();
    } catch {}
    const termMods = SYLLABUS_DATA[termId]?.modules || [];
    const activeTermModIds = termMods
      .filter(m => QUIZ_QUESTIONS.some(q => q.module_id === m.id))
      .map(m => m.id);

    setSelectedModules(prev => {
      const allSelected = activeTermModIds.every(id => prev.includes(id));
      if (allSelected) {
        return prev.filter(id => !activeTermModIds.includes(id));
      } else {
        return Array.from(new Set([...prev, ...activeTermModIds]));
      }
    });
  };

  const handleGenerate = async () => {
    if (selectedModules.length === 0) {
      await showGlassAlert({
        title: 'No Topics Selected',
        message: 'Please select at least one syllabus topic.',
        confirmText: 'OK',
      });
      return;
    }
    const success = generateStudyPlan(selectedDate, selectedModules);
    if (!success) {
      await showGlassAlert({
        title: 'Invalid Schedule',
        message: 'Target exam date must be in the future with at least one question available.',
        confirmText: 'OK',
      });
    } else {
      try {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } catch {}
    }
  };

  const handlePromptResetPlan = async () => {
    const confirmed = await showGlassConfirm({
      title: 'Reset Study Plan',
      message: 'Are you sure you want to reset your study plan? All daily checkpoints will be cleared.',
      confirmText: 'Reset Plan',
      cancelText: 'Cancel',
      isDestructive: true,
      icon: 'reset',
    });
    if (confirmed) {
      resetStudyPlan();
    }
  };

  const handleJumpToPractice = (termId: TermId, moduleId: string, typeId: string) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    switchTerm(termId);
    selectModuleAndType(moduleId, typeId);
    onClose();
  };

  const completedCount = studyPlan
    ? Object.values(studyPlan.completedTasks).filter(Boolean).length
    : 0;
  const totalTasks = studyPlan?.totalTasks || 1;
  const progressPct = Math.round((completedCount / totalTasks) * 100);

  const totalSelectedQs = QUIZ_QUESTIONS.filter(q => selectedModules.includes(q.module_id)).length;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Modal visible={visible} animationType="slide" transparent={false} onRequestClose={onClose}>
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
          <Text style={[styles.navTitle, { color: colors.textPrimary }]}>Study Planner</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              try {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              } catch {}
              onClose();
            }}
            style={[styles.closeBtn, { backgroundColor: colors.cardSubBg }]}
          >
            <Text style={[styles.closeText, { color: colors.textPrimary }]}>✕</Text>
          </TouchableOpacity>
        </View>

        {!studyPlan ? (
          /* ==================== SETUP VIEW ==================== */
          <View style={styles.flexOne}>
            <ScrollView
              contentContainerStyle={[styles.scrollContent, { paddingBottom: 110 }]}
              showsVerticalScrollIndicator={false}
            >
              {/* Intro Banner */}
              <View style={[styles.introCard, { backgroundColor: colors.brandBlueLight, borderColor: colors.brandBlueBorder }]}>
                <Text style={[styles.introTag, { color: colors.brandBlue }]}>ALGORITHMIC SCHEDULE</Text>
                <Text style={[styles.introDesc, { color: colors.textPrimary }]}>
                  Evenly distributes syllabus question types across your timeline, reserving the final milestone day for comprehensive mock revision.
                </Text>
              </View>

              {/* Step 1: Target Duration Selector */}
              <Text style={[styles.sectionHeading, { color: colors.textSecondary }]}>
                1. TARGET EXAM HORIZON
              </Text>

              {/* 4 Standard Presets */}
              <View style={[styles.durationGroup, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                {presets.map(p => {
                  const isSelected = !isCustomMode && selectedDays === p.days;
                  return (
                    <TouchableOpacity
                      key={p.days}
                      activeOpacity={0.8}
                      onPress={() => handleSelectPreset(p.days)}
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
                          styles.durationDays,
                          { color: isSelected ? '#FFFFFF' : colors.textPrimary },
                          isSelected && { fontWeight: '700' },
                        ]}
                      >
                        {p.label}
                      </Text>
                      <Text
                        style={[
                          styles.durationSub,
                          { color: isSelected ? 'rgba(255,255,255,0.85)' : colors.textSecondary },
                        ]}
                      >
                        {p.sub}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* 5th Option: Custom Date Button & Active Summary */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleOpenCustomPicker}
                style={[
                  styles.customDateCard,
                  {
                    backgroundColor: isCustomMode ? colors.brandBlueLight : colors.cardBg,
                    borderColor: isCustomMode ? colors.brandBlue : colors.border,
                  },
                ]}
              >
                <View style={styles.customDateLeft}>
                  <Text style={styles.customDateIcon}>📅</Text>
                  <View style={styles.customDateInfo}>
                    <Text
                      style={[
                        styles.customDateTitle,
                        { color: isCustomMode ? colors.brandBlue : colors.textPrimary },
                      ]}
                    >
                      {isCustomMode
                        ? formatDisplayDateLong(selectedDate)
                        : 'Choose Custom Exam Date'}
                    </Text>
                    <Text style={[styles.customDateSub, { color: colors.textSecondary }]}>
                      {isCustomMode
                        ? `${selectedDays} Study Days Remaining • Final Day Reserved for Mock`
                        : 'Pick your university exam date from native calendar'}
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.changeDateBadge,
                    { backgroundColor: isCustomMode ? colors.brandBlue : colors.cardSubBg },
                  ]}
                >
                  <Text
                    style={[
                      styles.changeDateBadgeText,
                      { color: isCustomMode ? '#FFFFFF' : colors.brandBlue },
                    ]}
                  >
                    {isCustomMode ? 'Change 📅' : 'Select 📅'}
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Native Date Picker Dialog */}
              {showDatePicker && (
                <DateTimePicker
                  value={parseLocalYMD(selectedDate)}
                  mode="date"
                  display={Platform.OS === 'android' ? 'default' : 'spinner'}
                  minimumDate={tomorrow}
                  onValueChange={handleDateValueChange}
                  onDismiss={handleDateDismiss}
                  onNeutralButtonPress={handleDateDismiss}
                />
              )}

              {/* Step 2: Topics Selection */}
              <Text style={[styles.sectionHeading, { color: colors.textSecondary }]}>
                2. SELECT SYLLABUS TOPICS
              </Text>

              {/* ST-1 Section */}
              <View style={[styles.termCard, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                <View style={styles.termHeaderRow}>
                  <View style={styles.termTitleCol}>
                    <Text style={[styles.termName, { color: colors.textPrimary }]}>ST-1 Modules</Text>
                    <Text style={[styles.termSub, { color: colors.textSecondary }]}>753 Questions Available</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => handleSelectTermModules('st1')}
                    style={[styles.toggleAllBtn, { backgroundColor: colors.cardSubBg }]}
                  >
                    <Text style={[styles.toggleAllText, { color: colors.brandBlue }]}>Toggle All</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.modulesGrid}>
                  {SYLLABUS_DATA.st1.modules.map(mod => {
                    const isSelected = selectedModules.includes(mod.id);
                    const qCount = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id).length;
                    return (
                      <TouchableOpacity
                        key={mod.id}
                        activeOpacity={0.7}
                        onPress={() => handleToggleModule(mod.id)}
                        style={[
                          styles.topicRow,
                          {
                            backgroundColor: isSelected ? colors.brandBlueLight : colors.cardSubBg,
                            borderColor: isSelected ? colors.brandBlue : colors.borderSubtle,
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
                        <View style={[styles.qCountBadge, { backgroundColor: colors.cardBg }]}>
                          <Text style={[styles.qCountText, { color: colors.textSecondary }]}>
                            {qCount} Qs
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              {/* ST-2 Section */}
              <View style={[styles.termCard, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
                <View style={styles.termHeaderRow}>
                  <View style={styles.termTitleCol}>
                    <Text style={[styles.termName, { color: colors.textPrimary }]}>ST-2 Modules</Text>
                    <Text style={[styles.termSub, { color: colors.textSecondary }]}>57 Questions Available</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => handleSelectTermModules('st2')}
                    style={[styles.toggleAllBtn, { backgroundColor: colors.cardSubBg }]}
                  >
                    <Text style={[styles.toggleAllText, { color: colors.brandBlue }]}>Toggle All</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.modulesGrid}>
                  {SYLLABUS_DATA.st2.modules
                    .filter(m => QUIZ_QUESTIONS.some(q => q.module_id === m.id))
                    .map(mod => {
                      const isSelected = selectedModules.includes(mod.id);
                      const qCount = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id).length;
                      return (
                        <TouchableOpacity
                          key={mod.id}
                          activeOpacity={0.7}
                          onPress={() => handleToggleModule(mod.id)}
                          style={[
                            styles.topicRow,
                            {
                              backgroundColor: isSelected ? colors.brandBlueLight : colors.cardSubBg,
                              borderColor: isSelected ? colors.brandBlue : colors.borderSubtle,
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
                          <Text
                            style={[
                              styles.topicRowTitle,
                              { color: isSelected ? colors.brandBlue : colors.textPrimary },
                              isSelected && { fontWeight: '700' },
                            ]}
                            numberOfLines={1}
                          >
                            {mod.title}
                          </Text>
                          <View style={[styles.qCountBadge, { backgroundColor: colors.cardBg }]}>
                            <Text style={[styles.qCountText, { color: colors.textSecondary }]}>
                              {qCount} Qs
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              </View>
            </ScrollView>

            {/* Sticky Bottom Action Bar */}
            <View
              style={[
                styles.bottomBar,
                { backgroundColor: colors.cardBg, borderTopColor: colors.border },
              ]}
            >
              <View style={styles.summaryInfo}>
                <Text style={[styles.summaryTitle, { color: colors.textPrimary }]}>
                  {selectedModules.length} Topics Selected
                </Text>
                <Text style={[styles.summarySub, { color: colors.textSecondary }]}>
                  {totalSelectedQs} Questions • {selectedDays} Days Timeline
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleGenerate}
                style={[styles.generateBtn, { backgroundColor: colors.brandBlue }]}
              >
                <Text style={styles.generateBtnText}>Generate Schedule</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          /* ==================== SCHEDULE TIMELINE VIEW ==================== */
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Progress Card */}
            <View style={[styles.progressCard, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
              <View style={styles.progressTopRow}>
                <View>
                  <Text style={[styles.planDateText, { color: colors.textPrimary }]}>
                    Target Exam: {formatDisplayDateLong(studyPlan.examDate)}
                  </Text>
                  <Text style={[styles.planSubText, { color: colors.textSecondary }]}>
                    {completedCount} of {studyPlan.totalTasks} study modules completed ({studyPlan.totalDays} Days Schedule)
                  </Text>
                </View>
                <Text style={[styles.planPctText, { color: colors.brandBlue }]}>
                  {progressPct}%
                </Text>
              </View>

              <View style={[styles.planTrack, { backgroundColor: colors.cardSubBg }]}>
                <View
                  style={[
                    styles.planIndicator,
                    { width: `${progressPct}%`, backgroundColor: colors.brandBlue },
                  ]}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handlePromptResetPlan}
                style={styles.resetPlanBtn}
              >
                <Text style={[styles.resetPlanText, { color: colors.crimson }]}>
                  Reset Study Schedule
                </Text>
              </TouchableOpacity>
            </View>

            {/* Day by Day Cards */}
            <View style={styles.daysList}>
              {studyPlan.days.map(day => (
                <View
                  key={day.dayIndex}
                  style={[
                    styles.dayCard,
                    {
                      backgroundColor: colors.cardBg,
                      borderColor: day.isRevisionDay ? colors.brandBlue : colors.border,
                      borderWidth: day.isRevisionDay ? 1.5 : 1,
                    },
                  ]}
                >
                  <View style={styles.dayHeader}>
                    <View style={styles.dayTitleCol}>
                      <Text style={[styles.dayLabel, { color: colors.brandBlue }]}>
                        {day.isRevisionDay ? 'FINAL MILESTONE' : `DAY ${day.dayIndex}`}
                      </Text>
                      <Text style={[styles.dayDate, { color: colors.textPrimary }]}>
                        {day.displayDate}
                      </Text>
                    </View>
                    {day.isRevisionDay ? (
                      <View style={[styles.badgePill, { backgroundColor: colors.brandBlueLight }]}>
                        <Text style={[styles.badgePillText, { color: colors.brandBlue }]}>Mock Exam</Text>
                      </View>
                    ) : day.isBufferDay ? (
                      <View style={[styles.badgePill, { backgroundColor: colors.cardSubBg }]}>
                        <Text style={[styles.badgePillText, { color: colors.textSecondary }]}>Buffer</Text>
                      </View>
                    ) : null}
                  </View>

                  {day.tasks.length > 0 ? (
                    <View style={styles.tasksList}>
                      {day.tasks.map(task => {
                        const isDone = Boolean(studyPlan.completedTasks[task.id]);
                        return (
                          <View
                            key={task.id}
                            style={[
                              styles.taskRow,
                              {
                                backgroundColor: isDone ? colors.emeraldLight : colors.cardSubBg,
                                borderColor: isDone ? colors.emerald : colors.borderSubtle,
                              },
                            ]}
                          >
                            <TouchableOpacity
                              activeOpacity={0.7}
                              onPress={() => {
                                try {
                                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                } catch {}
                                togglePlannerTask(task.id);
                              }}
                              style={[
                                styles.taskCheckbox,
                                {
                                  backgroundColor: isDone ? colors.emerald : 'transparent',
                                  borderColor: isDone ? colors.emerald : colors.border,
                                },
                              ]}
                            >
                              {isDone ? <Text style={styles.checkmarkIcon}>✓</Text> : null}
                            </TouchableOpacity>

                            <View style={styles.taskInfo}>
                              <Text
                                style={[
                                  styles.taskTitle,
                                  { color: colors.textPrimary },
                                  isDone && styles.taskDoneText,
                                ]}
                                numberOfLines={1}
                              >
                                {task.moduleNum > 0 ? `${task.moduleNum}. ` : ''}
                                {task.taskTitle}
                              </Text>
                              <Text style={[styles.taskSub, { color: colors.textSecondary }]}>
                                {task.moduleTitle} • {task.questionCount} Questions
                              </Text>
                            </View>

                            {task.moduleId !== 'all' ? (
                              <TouchableOpacity
                                activeOpacity={0.75}
                                onPress={() =>
                                  handleJumpToPractice(task.termId, task.moduleId, task.typeId)
                                }
                                style={[styles.practiceBtn, { backgroundColor: colors.cardBg }]}
                              >
                                <Text style={[styles.practiceBtnText, { color: colors.brandBlue }]}>
                                  Practice →
                                </Text>
                              </TouchableOpacity>
                            ) : null}
                          </View>
                        );
                      })}
                    </View>
                  ) : null}
                </View>
              ))}
            </View>
          </ScrollView>
        )}
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
  introCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
    gap: 4,
  },
  introTag: {
    fontSize: 10.5,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  introDesc: {
    fontSize: 12.5,
    lineHeight: 18,
    fontWeight: '500',
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginTop: 4,
  },
  durationGroup: {
    flexDirection: 'row',
    borderRadius: 14,
    borderWidth: 1,
    padding: 4,
    gap: 4,
  },
  durationBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  durationBtnSelected: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  durationDays: {
    fontSize: 13,
    fontWeight: '600',
  },
  durationSub: {
    fontSize: 10.5,
    marginTop: 1,
  },
  customDateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    gap: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  customDateLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  customDateIcon: {
    fontSize: 22,
  },
  customDateInfo: {
    flex: 1,
    gap: 2,
  },
  customDateTitle: {
    fontSize: 13.5,
    fontWeight: '700',
  },
  customDateSub: {
    fontSize: 11,
    fontWeight: '500',
  },
  changeDateBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  changeDateBadgeText: {
    fontSize: 11.5,
    fontWeight: '700',
  },
  termCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  termHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  termTitleCol: {
    gap: 1,
  },
  termName: {
    fontSize: 14.5,
    fontWeight: '700',
  },
  termSub: {
    fontSize: 11,
  },
  toggleAllBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  toggleAllText: {
    fontSize: 11.5,
    fontWeight: '700',
  },
  modulesGrid: {
    gap: 6,
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
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
  topicRowTitle: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
  },
  qCountBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2.5,
    borderRadius: 6,
  },
  qCountText: {
    fontSize: 10.5,
    fontWeight: '600',
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
  generateBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  generateBtnText: {
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
  },
  progressCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  progressTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planDateText: {
    fontSize: 14.5,
    fontWeight: '700',
  },
  planSubText: {
    fontSize: 11.5,
    marginTop: 2,
  },
  planPctText: {
    fontSize: 18,
    fontWeight: '800',
  },
  planTrack: {
    height: 6,
    borderRadius: 999,
    overflow: 'hidden',
  },
  planIndicator: {
    height: '100%',
    borderRadius: 999,
  },
  resetPlanBtn: {
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  resetPlanText: {
    fontSize: 12,
    fontWeight: '600',
  },
  daysList: {
    gap: 12,
  },
  dayCard: {
    borderRadius: 16,
    padding: 14,
    gap: 10,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayTitleCol: {
    gap: 2,
  },
  dayLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  dayDate: {
    fontSize: 14,
    fontWeight: '700',
  },
  badgePill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgePillText: {
    fontSize: 11,
    fontWeight: '700',
  },
  tasksList: {
    gap: 8,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    gap: 10,
  },
  taskCheckbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskInfo: {
    flex: 1,
    gap: 2,
  },
  taskTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
  taskDoneText: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  taskSub: {
    fontSize: 10.5,
  },
  practiceBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  practiceBtnText: {
    fontSize: 11,
    fontWeight: '700',
  },
});
