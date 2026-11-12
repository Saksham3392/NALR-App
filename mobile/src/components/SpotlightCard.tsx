import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';
import { useApp } from '../context/AppContext';

interface SpotlightCardProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  statusColor?: string | null;
  borderRadius?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  style,
  statusColor = null,
  borderRadius = 18,
}) => {
  const { isDarkMode, colors } = useApp();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [touchPos, setTouchPos] = useState({ x: -999, y: -999 });

  const glowOpacity = useRef(new Animated.Value(0)).current;

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setDimensions({ width, height });
  };

  const handleTouchStart = (e: GestureResponderEvent) => {
    const { locationX, locationY } = e.nativeEvent;
    setTouchPos({ x: locationX, y: locationY });

    Animated.timing(glowOpacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleTouchMove = (e: GestureResponderEvent) => {
    const { locationX, locationY } = e.nativeEvent;
    setTouchPos({ x: locationX, y: locationY });
  };

  const handleTouchEnd = () => {
    Animated.timing(glowOpacity, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  const cardBorderColor = statusColor || colors.border;
  const cardBorderWidth = statusColor ? 1.5 : 1;

  return (
    <View
      onLayout={onLayout}
      onStartShouldSetResponder={() => false}
      onMoveShouldSetResponder={() => false}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={[
        styles.container,
        {
          backgroundColor: colors.cardBg,
          borderColor: cardBorderColor,
          borderWidth: cardBorderWidth,
          borderRadius,
          shadowColor: colors.shadowColor,
          shadowOpacity: isDarkMode ? 0.3 : 0.04,
        },
        style,
      ]}
    >
      {/* Subtle Apple-style specular touch glow */}
      {dimensions.width > 0 && dimensions.height > 0 ? (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              opacity: glowOpacity,
              borderRadius,
              overflow: 'hidden',
              zIndex: 1,
            },
          ]}
        >
          <Svg width={dimensions.width} height={dimensions.height}>
            <Defs>
              <RadialGradient
                id={`spotlightGrad_${borderRadius}`}
                cx={touchPos.x}
                cy={touchPos.y}
                r="160"
                gradientUnits="userSpaceOnUse"
              >
                <Stop offset="0%" stopColor={colors.brandBlue} stopOpacity={isDarkMode ? '0.14' : '0.07'} />
                <Stop offset="70%" stopColor={colors.brandBlue} stopOpacity={isDarkMode ? '0.04' : '0.02'} />
                <Stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </RadialGradient>
            </Defs>

            <Rect
              x="0"
              y="0"
              width={dimensions.width}
              height={dimensions.height}
              rx={borderRadius}
              ry={borderRadius}
              fill={`url(#spotlightGrad_${borderRadius})`}
            />
          </Svg>
        </Animated.View>
      ) : null}

      {/* Card Content */}
      <View style={{ zIndex: 2 }}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
  },
});
