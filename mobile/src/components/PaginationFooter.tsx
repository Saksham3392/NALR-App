import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';

export const PaginationFooter: React.FC = () => {
  const { currentModule, activeTypeId, selectModuleAndType, colors } = useApp();

  const types = currentModule?.types || [];
  const currentIndex = types.findIndex(t => t.id === activeTypeId);
  const totalTypes = types.length;

  if (totalTypes <= 1) return null;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < totalTypes - 1;

  const prevType = hasPrev ? types[currentIndex - 1] : null;
  const nextType = hasNext ? types[currentIndex + 1] : null;

  const handlePrev = () => {
    if (prevType && currentModule) {
      try {
        Haptics.selectionAsync();
      } catch {}
      selectModuleAndType(currentModule.id, prevType.id);
    }
  };

  const handleNext = () => {
    if (nextType && currentModule) {
      try {
        Haptics.selectionAsync();
      } catch {}
      selectModuleAndType(currentModule.id, nextType.id);
    }
  };

  return (
    <View style={[styles.container, { borderTopColor: colors.borderSubtle }]}>
      {/* Previous Button */}
      <TouchableOpacity
        activeOpacity={0.75}
        disabled={!hasPrev}
        onPress={handlePrev}
        style={[
          styles.navBtn,
          {
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
            opacity: hasPrev ? 1 : 0.35,
          },
        ]}
      >
        <Text style={[styles.navBtnText, { color: colors.textPrimary }]}>
          ← Previous
        </Text>
      </TouchableOpacity>

      {/* Nav Status */}
      <View style={[styles.statusPill, { backgroundColor: colors.cardSubBg }]}>
        <Text style={[styles.statusText, { color: colors.textSecondary }]}>
          Type {currentIndex + 1} of {totalTypes}
        </Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={!hasNext}
        onPress={handleNext}
        style={[
          styles.nextBtn,
          {
            backgroundColor: colors.brandBlue,
            opacity: hasNext ? 1 : 0.35,
          },
        ]}
      >
        <Text style={styles.nextBtnText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    marginTop: 8,
    marginBottom: 20,
    borderTopWidth: 1,
    gap: 8,
  },
  navBtn: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 12,
    borderWidth: 1,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBtnText: {
    fontSize: 12.5,
    fontWeight: '600',
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  nextBtn: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 12,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextBtnText: {
    color: '#FFFFFF',
    fontSize: 12.5,
    fontWeight: '700',
  },
});
