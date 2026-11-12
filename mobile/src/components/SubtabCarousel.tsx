import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useApp } from '../context/AppContext';
import { QUIZ_QUESTIONS } from '../data/questions';

export const SubtabCarousel: React.FC = () => {
  const { currentModule, activeTypeId, selectModuleAndType, colors } = useApp();

  const types = currentModule?.types || [];
  if (types.length === 0) return null;

  const handleSelectType = (typeId: string) => {
    if (!currentModule) return;
    if (activeTypeId !== typeId) {
      try {
        Haptics.selectionAsync();
      } catch {}
    }
    selectModuleAndType(currentModule.id, typeId);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {types.map(t => {
        const isActive = activeTypeId === t.id;
        const qCount = QUIZ_QUESTIONS.filter(
          q => q.module_id === currentModule?.id && q.type_id === t.id
        ).length;

        return (
          <TouchableOpacity
            key={t.id}
            activeOpacity={0.75}
            onPress={() => handleSelectType(t.id)}
            style={[
              styles.tabBtn,
              {
                backgroundColor: isActive ? colors.brandBlue : colors.cardBg,
                borderColor: isActive ? colors.brandBlue : colors.border,
              },
            ]}
          >
            <Text
              style={[
                styles.tabTitle,
                { color: isActive ? '#FFFFFF' : colors.textPrimary },
                isActive && styles.activeText,
              ]}
              numberOfLines={1}
            >
              {t.name}
            </Text>

            <View
              style={[
                styles.countBadge,
                {
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : colors.cardSubBg,
                },
              ]}
            >
              <Text
                style={[
                  styles.countText,
                  { color: isActive ? '#FFFFFF' : colors.textSecondary },
                ]}
              >
                {qCount}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    gap: 8,
    paddingVertical: 3,
    marginBottom: 8,
  },
  tabBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    gap: 6,
    minHeight: 36,
  },
  tabTitle: {
    fontSize: 12.5,
    fontWeight: '600',
  },
  activeText: {
    fontWeight: '700',
  },
  countBadge: {
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderRadius: 999,
  },
  countText: {
    fontSize: 10.5,
    fontWeight: '700',
  },
});
