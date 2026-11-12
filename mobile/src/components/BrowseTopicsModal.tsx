import React, { useState, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';
import { QUIZ_QUESTIONS } from '../data/questions';

interface BrowseTopicsModalProps {
  visible: boolean;
  onClose: () => void;
}

export const BrowseTopicsModal: React.FC<BrowseTopicsModalProps> = ({ visible, onClose }) => {
  const insets = useSafeAreaInsets();
  const {
    currentTermId,
    switchTerm,
    currentModules,
    activeModuleId,
    activeTypeId,
    selectModuleAndType,
    practiceAnswers,
    colors,
    isDarkMode,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSelect = (moduleId: string, typeId: string) => {
    try {
      Haptics.selectionAsync();
    } catch {}
    selectModuleAndType(moduleId, typeId);
    onClose();
  };

  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return currentModules;
    const q = searchQuery.toLowerCase().trim();
    return currentModules.filter(mod => {
      const titleMatch = mod.title.toLowerCase().includes(q);
      const lecturesMatch = mod.lectures.toLowerCase().includes(q);
      const typesMatch = mod.types.some(t => t.name.toLowerCase().includes(q));
      return titleMatch || lecturesMatch || typesMatch;
    });
  }, [currentModules, searchQuery]);

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
        {/* Navigation Header */}
        <View style={[styles.header, { backgroundColor: colors.cardBg, borderBottomColor: colors.border }]}>
          <View>
            <Text style={[styles.title, { color: colors.textPrimary }]}>Curriculum Browser</Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              {currentModules.length} Modules • {currentTermId.toUpperCase()} Syllabus
            </Text>
          </View>
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

        {/* Apple Style Search Bar */}
        <View style={[styles.searchContainer, { backgroundColor: colors.cardBg }]}>
          <View style={[styles.searchBox, { backgroundColor: colors.cardSubBg }]}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search modules or question types..."
              placeholderTextColor={colors.textMuted}
              style={[styles.searchInput, { color: colors.textPrimary }]}
              clearButtonMode="while-editing"
            />
            {searchQuery.length > 0 ? (
              <TouchableOpacity onPress={() => setSearchQuery('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Text style={[styles.clearSearchIcon, { color: colors.textMuted }]}>✕</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        {/* 3-Term Switcher Segmented Bar */}
        <View style={[styles.termBar, { backgroundColor: colors.cardBg, borderBottomColor: colors.borderSubtle }]}>
          {(['st1', 'st2', 'endterm'] as const).map(term => {
            const isActive = currentTermId === term;
            const label = term === 'st1' ? 'ST-1 Midterm' : term === 'st2' ? 'ST-2 Midterm' : 'End Term';
            return (
              <TouchableOpacity
                key={term}
                activeOpacity={0.8}
                onPress={() => {
                  try {
                    Haptics.selectionAsync();
                  } catch {}
                  switchTerm(term);
                }}
                style={[
                  styles.termTab,
                  isActive && [styles.termTabActive, { borderColor: colors.brandBlue }],
                ]}
              >
                <Text
                  style={[
                    styles.termTabText,
                    { color: isActive ? colors.brandBlue : colors.textSecondary },
                    isActive && styles.termTabTextActive,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Modules List */}
        <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
          {filteredModules.length === 0 ? (
            <View style={[styles.emptyBox, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
              <Text style={styles.emptyIcon}>🔍</Text>
              <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>No Modules Found</Text>
              <Text style={[styles.emptySub, { color: colors.textSecondary }]}>
                No results match "{searchQuery}" in {currentTermId.toUpperCase()}.
              </Text>
            </View>
          ) : (
            filteredModules.map(mod => {
              const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id);
              const answeredInMod = modQuestions.filter(q => practiceAnswers[q.id] !== undefined).length;
              const modPct = modQuestions.length > 0 ? Math.round((answeredInMod / modQuestions.length) * 100) : 0;
              const isModActive = mod.id === activeModuleId;

              return (
                <View
                  key={mod.id}
                  style={[
                    styles.moduleCard,
                    {
                      backgroundColor: colors.cardBg,
                      borderColor: isModActive ? colors.brandBlue : colors.border,
                      borderWidth: isModActive ? 1.5 : 1,
                    },
                  ]}
                >
                  {/* Module Header Bar */}
                  <View style={styles.modHeaderRow}>
                    <View
                      style={[
                        styles.numBadge,
                        {
                          backgroundColor: isModActive ? colors.brandBlue : colors.brandBlueLight,
                          borderColor: colors.brandBlueBorder,
                        },
                      ]}
                    >
                      <Text style={[styles.numText, { color: isModActive ? '#FFFFFF' : colors.brandBlue }]}>
                        {mod.num}
                      </Text>
                    </View>
                    <View style={styles.modInfo}>
                      <Text style={[styles.modTitle, { color: colors.textPrimary }]}>{mod.title}</Text>
                      <Text style={[styles.modLec, { color: colors.textSecondary }]}>
                        {mod.lectures} • {modQuestions.length} Questions
                      </Text>
                    </View>
                    <View style={[styles.progressChip, { backgroundColor: colors.cardSubBg }]}>
                      <Text style={[styles.progressChipText, { color: colors.brandBlue }]}>
                        {modPct}%
                      </Text>
                    </View>
                  </View>

                  {/* Subtypes Chips Cluster */}
                  {mod.types && mod.types.length > 0 ? (
                    <View style={styles.typesCluster}>
                      {mod.types.map(t => {
                        const isTypeActive = isModActive && activeTypeId === t.id;
                        const typeQs = modQuestions.filter(q => q.type_id === t.id);
                        const answeredInType = typeQs.filter(q => practiceAnswers[q.id] !== undefined).length;
                        const isComplete = typeQs.length > 0 && answeredInType === typeQs.length;

                        const countLabel =
                          answeredInType > 0
                            ? isComplete
                              ? `✓ ${answeredInType}/${typeQs.length}`
                              : `${answeredInType}/${typeQs.length}`
                            : `${typeQs.length} Qs`;

                        return (
                          <TouchableOpacity
                            key={t.id}
                            activeOpacity={0.7}
                            onPress={() => handleSelect(mod.id, t.id)}
                            style={[
                              styles.typeItem,
                              {
                                backgroundColor: isTypeActive
                                  ? colors.brandBlueLight
                                  : colors.cardSubBg,
                                borderColor: isTypeActive ? colors.brandBlue : colors.borderSubtle,
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.typeItemTitle,
                                { color: isTypeActive ? colors.brandBlue : colors.textPrimary },
                                isTypeActive && { fontWeight: '700' },
                              ]}
                              numberOfLines={1}
                            >
                              {t.name}
                            </Text>
                            <View
                              style={[
                                styles.countTag,
                                {
                                  backgroundColor: isComplete
                                    ? colors.emeraldLight
                                    : (isTypeActive ? colors.brandBlue : colors.cardBg),
                                },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.countTagText,
                                  {
                                    color: isComplete
                                      ? colors.emerald
                                      : (isTypeActive ? '#FFFFFF' : colors.textSecondary),
                                  },
                                ]}
                              >
                                {countLabel}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  ) : null}
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 8,
  },
  searchIcon: {
    fontSize: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 2,
  },
  clearSearchIcon: {
    fontSize: 14,
    paddingHorizontal: 4,
  },
  termBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    gap: 8,
  },
  termTab: {
    flex: 1,
    paddingVertical: 7,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  termTabActive: {
    borderBottomWidth: 2,
  },
  termTabText: {
    fontSize: 12,
    fontWeight: '600',
  },
  termTabTextActive: {
    fontWeight: '700',
  },
  scrollList: {
    padding: 16,
    gap: 12,
  },
  emptyBox: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  emptyIcon: {
    fontSize: 28,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  emptySub: {
    fontSize: 12,
    textAlign: 'center',
  },
  moduleCard: {
    borderRadius: 16,
    padding: 14,
    gap: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  modHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  numBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    fontSize: 14,
    fontWeight: '800',
  },
  modInfo: {
    flex: 1,
  },
  modTitle: {
    fontSize: 14.5,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  modLec: {
    fontSize: 11.5,
    fontWeight: '500',
    marginTop: 1,
  },
  progressChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  progressChipText: {
    fontSize: 11.5,
    fontWeight: '700',
  },
  typesCluster: {
    gap: 6,
    paddingTop: 4,
  },
  typeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    gap: 8,
  },
  typeItemTitle: {
    flex: 1,
    fontSize: 12.5,
    fontWeight: '500',
  },
  countTag: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
  },
  countTagText: {
    fontSize: 10.5,
    fontWeight: '700',
  },
});
