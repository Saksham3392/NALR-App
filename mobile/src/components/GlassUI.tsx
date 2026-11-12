import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

export interface GlassConfirmConfig {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
  icon?: 'warning' | 'broom' | 'reset' | 'info';
  onConfirm: () => void;
  onCancel?: () => void;
}

export interface GlassAlertConfig {
  title: string;
  message: string;
  confirmText?: string;
  onDismiss: () => void;
}

// ---------------------------------------------------------------------------
// 1. Bottom Toast for Copy Action
// ---------------------------------------------------------------------------
interface GlassCopyToastProps {
  visible: boolean;
  isDarkMode: boolean;
}

export const GlassCopyToast: React.FC<GlassCopyToastProps> = ({ visible, isDarkMode }) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 6,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, opacityAnim, translateYAnim]);

  return (
    <Animated.View
      pointerEvents={visible ? 'auto' : 'none'}
      style={[
        styles.toastContainer,
        {
          opacity: opacityAnim,
          transform: [{ translateY: translateYAnim }],
          backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF',
          borderColor: isDarkMode ? '#38383A' : '#E5E5EA',
          shadowColor: '#000000',
        },
      ]}
    >
      <View style={[styles.toastCheckmarkCircle, { backgroundColor: isDarkMode ? 'rgba(48, 209, 88, 0.2)' : 'rgba(52, 199, 89, 0.15)' }]}>
        <Text style={[styles.toastCheckmark, { color: isDarkMode ? '#30D158' : '#34C759' }]}>✓</Text>
      </View>
      <Text
        style={[
          styles.toastText,
          { color: isDarkMode ? '#F5F5F7' : '#1D1D1F' },
        ]}
      >
        Question and options are copied
      </Text>
    </Animated.View>
  );
};

// ---------------------------------------------------------------------------
// 2. Confirmation & Alert Modal
// ---------------------------------------------------------------------------
interface GlassModalHostProps {
  confirmConfig: GlassConfirmConfig | null;
  alertConfig: GlassAlertConfig | null;
  isDarkMode: boolean;
}

export const GlassModalHost: React.FC<GlassModalHostProps> = ({ confirmConfig, alertConfig, isDarkMode }) => {
  const isOpen = Boolean(confirmConfig || alertConfig);

  const backdropAnim = useRef(new Animated.Value(0)).current;
  const cardScaleAnim = useRef(new Animated.Value(0.94)).current;
  const cardOpacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(backdropAnim, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.timing(cardScaleAnim, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.timing(cardOpacityAnim, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(backdropAnim, {
          toValue: 0,
          duration: 140,
          useNativeDriver: true,
        }),
        Animated.timing(cardScaleAnim, {
          toValue: 0.94,
          duration: 140,
          useNativeDriver: true,
        }),
        Animated.timing(cardOpacityAnim, {
          toValue: 0,
          duration: 140,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen, backdropAnim, cardScaleAnim, cardOpacityAnim]);

  if (!confirmConfig && !alertConfig) return null;

  const isAlert = Boolean(alertConfig);
  const title = confirmConfig ? confirmConfig.title : alertConfig?.title || 'Notice';
  const message = confirmConfig ? confirmConfig.message : alertConfig?.message || '';
  const confirmText = confirmConfig ? (confirmConfig.confirmText || 'Confirm') : (alertConfig?.confirmText || 'OK');
  const cancelText = confirmConfig?.cancelText || 'Cancel';
  const isDestructive = confirmConfig ? (confirmConfig.isDestructive !== false) : false;
  const icon = confirmConfig?.icon || (isAlert ? 'info' : 'warning');

  const getIconSymbol = () => {
    if (icon === 'broom') return '🧹';
    if (icon === 'reset') return '🔄';
    if (icon === 'info') return 'ℹ️';
    return '⚠️';
  };

  const getIconBadgeStyle = () => {
    if (isDestructive || icon === 'broom') {
      return {
        bg: isDarkMode ? 'rgba(255, 69, 58, 0.16)' : 'rgba(255, 59, 48, 0.12)',
        border: isDarkMode ? 'rgba(255, 69, 58, 0.32)' : 'rgba(255, 59, 48, 0.25)',
      };
    }
    if (icon === 'info') {
      return {
        bg: isDarkMode ? 'rgba(10, 132, 255, 0.16)' : 'rgba(0, 113, 227, 0.12)',
        border: isDarkMode ? 'rgba(10, 132, 255, 0.32)' : 'rgba(0, 113, 227, 0.25)',
      };
    }
    return {
      bg: isDarkMode ? 'rgba(255, 159, 10, 0.16)' : 'rgba(255, 149, 0, 0.12)',
      border: isDarkMode ? 'rgba(255, 159, 10, 0.32)' : 'rgba(255, 149, 0, 0.25)',
    };
  };

  const badgeStyle = getIconBadgeStyle();

  const handleDismiss = () => {
    if (confirmConfig) {
      confirmConfig.onCancel ? confirmConfig.onCancel() : confirmConfig.onConfirm();
    } else if (alertConfig) {
      alertConfig.onDismiss();
    }
  };

  return (
    <Modal transparent visible={isOpen} animationType="none" onRequestClose={handleDismiss}>
      <TouchableWithoutFeedback onPress={handleDismiss}>
        <Animated.View style={[styles.modalOverlay, { opacity: backdropAnim }]}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <Animated.View
              style={[
                styles.cardContainer,
                {
                  opacity: cardOpacityAnim,
                  transform: [{ scale: cardScaleAnim }],
                  backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                  borderColor: isDarkMode ? '#38383A' : '#E5E5EA',
                  shadowColor: '#000000',
                },
              ]}
            >
              {/* Icon Badge */}
              <View
                style={[
                  styles.iconBadge,
                  {
                    backgroundColor: badgeStyle.bg,
                    borderColor: badgeStyle.border,
                  },
                ]}
              >
                <Text style={styles.iconText}>{getIconSymbol()}</Text>
              </View>

              {/* Title */}
              <Text
                style={[
                  styles.cardTitle,
                  { color: isDarkMode ? '#F5F5F7' : '#1D1D1F' },
                ]}
              >
                {title}
              </Text>

              {/* Message */}
              <Text
                style={[
                  styles.cardMessage,
                  { color: isDarkMode ? '#98989D' : '#6E6E73' },
                ]}
              >
                {message}
              </Text>

              {/* Action Buttons */}
              <View style={styles.buttonRow}>
                {!isAlert && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      if (confirmConfig?.onCancel) {
                        confirmConfig.onCancel();
                      } else {
                        handleDismiss();
                      }
                    }}
                    style={[
                      styles.actionButton,
                      styles.cancelButton,
                      {
                        backgroundColor: isDarkMode ? '#2C2C2E' : '#F2F2F7',
                        borderColor: isDarkMode ? '#38383A' : '#E5E5EA',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.cancelButtonText,
                        { color: isDarkMode ? '#F5F5F7' : '#1D1D1F' },
                      ]}
                    >
                      {cancelText}
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    if (confirmConfig) {
                      confirmConfig.onConfirm();
                    } else if (alertConfig) {
                      alertConfig.onDismiss();
                    }
                  }}
                  style={[
                    styles.actionButton,
                    styles.confirmButton,
                    {
                      backgroundColor: isDestructive ? '#FF3B30' : '#0A84FF',
                    },
                    isAlert && { flex: 1 },
                  ]}
                >
                  <Text style={styles.confirmButtonText}>{confirmText}</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    gap: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 99999,
  },
  toastCheckmarkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastCheckmark: {
    fontSize: 12,
    fontWeight: '900',
  },
  toastText: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: -0.1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  cardContainer: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 20,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  cardMessage: {
    fontSize: 13.5,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  actionButton: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    borderWidth: 1,
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  confirmButton: {},
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
