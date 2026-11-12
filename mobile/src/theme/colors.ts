export interface ThemeColors {
  appBg: string;
  cardBg: string;
  cardSubBg: string;
  cardHover: string;
  cardGlass: string;
  border: string;
  borderSubtle: string;
  borderGlow: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  brandBlue: string;
  brandBlueHover: string;
  brandBlueLight: string;
  brandBlueBorder: string;
  emerald: string;
  emeraldLight: string;
  emeraldBorder: string;
  emeraldText: string;
  crimson: string;
  crimsonLight: string;
  crimsonBorder: string;
  crimsonText: string;
  amber: string;
  amberLight: string;
  amberBorder: string;
  amberText: string;
  purple: string;
  purpleLight: string;
  purpleBorder: string;
  orange: string;
  orangeLight: string;
  orangeBorder: string;
  keycapBg: string;
  keycapBorder: string;
  shadowColor: string;
}

export const lightColors: ThemeColors = {
  appBg: '#F7F4ED',              // Exact background from nalr.vercel.app
  cardBg: '#FFFFFF',             // Apple crisp white card surface
  cardSubBg: '#F2EDE4',          // Warm neutral secondary surface
  cardHover: '#EBE3D7',
  cardGlass: 'rgba(255, 255, 255, 0.92)',
  border: '#DCD1BE',             // Clean neutral border
  borderSubtle: '#EAE0CF',       // Subtle inner divider
  borderGlow: 'rgba(10, 132, 255, 0.20)',
  textPrimary: '#1F1B18',        // High readability dark primary
  textSecondary: '#5C554E',      // Refined muted secondary
  textMuted: '#8A8278',          // Tertiary caption text
  brandBlue: '#0071E3',          // Apple primary accent blue
  brandBlueHover: '#0077ED',
  brandBlueLight: 'rgba(0, 113, 227, 0.08)',
  brandBlueBorder: 'rgba(0, 113, 227, 0.22)',
  emerald: '#34C759',            // Apple system green
  emeraldLight: 'rgba(52, 199, 89, 0.10)',
  emeraldBorder: 'rgba(52, 199, 89, 0.28)',
  emeraldText: '#15803D',
  crimson: '#FF3B30',            // Apple system red
  crimsonLight: 'rgba(255, 59, 48, 0.10)',
  crimsonBorder: 'rgba(255, 59, 48, 0.28)',
  crimsonText: '#B91C1C',
  amber: '#FF9500',              // Apple system amber / orange
  amberLight: 'rgba(255, 149, 0, 0.10)',
  amberBorder: 'rgba(255, 149, 0, 0.28)',
  amberText: '#B45309',
  purple: '#AF52DE',             // Apple system purple
  purpleLight: 'rgba(175, 82, 222, 0.10)',
  purpleBorder: 'rgba(175, 82, 222, 0.28)',
  orange: '#FF9500',
  orangeLight: 'rgba(255, 149, 0, 0.10)',
  orangeBorder: 'rgba(255, 149, 0, 0.28)',
  keycapBg: '#FFFFFF',
  keycapBorder: 'rgba(0, 0, 0, 0.10)',
  shadowColor: '#000000',
};

export const darkColors: ThemeColors = {
  appBg: '#000000',              // Apple true black
  cardBg: '#1C1C1E',             // Apple dark secondary surface
  cardSubBg: '#2C2C2E',          // Apple dark tertiary elevated surface
  cardHover: '#3A3A3C',          // Apple dark hover
  cardGlass: 'rgba(28, 28, 30, 0.92)',
  border: '#38383A',             // Apple dark separator
  borderSubtle: '#2C2C2E',       // Apple dark subtle divider
  borderGlow: 'rgba(10, 132, 255, 0.30)',
  textPrimary: '#F5F5F7',        // Apple dark primary text
  textSecondary: '#98989D',      // Apple dark secondary text
  textMuted: '#636366',          // Apple dark tertiary text
  brandBlue: '#0A84FF',          // Apple dark system blue
  brandBlueHover: '#409CFF',
  brandBlueLight: 'rgba(10, 132, 255, 0.16)',
  brandBlueBorder: 'rgba(10, 132, 255, 0.32)',
  emerald: '#30D158',            // Apple dark system green
  emeraldLight: 'rgba(48, 209, 88, 0.14)',
  emeraldBorder: 'rgba(48, 209, 88, 0.32)',
  emeraldText: '#30D158',
  crimson: '#FF453A',            // Apple dark system red
  crimsonLight: 'rgba(255, 69, 58, 0.14)',
  crimsonBorder: 'rgba(255, 69, 58, 0.32)',
  crimsonText: '#FF453A',
  amber: '#FF9F0A',              // Apple dark system amber
  amberLight: 'rgba(255, 159, 10, 0.14)',
  amberBorder: 'rgba(255, 159, 10, 0.32)',
  amberText: '#FF9F0A',
  purple: '#BF5AF2',             // Apple dark system purple
  purpleLight: 'rgba(191, 90, 242, 0.14)',
  purpleBorder: 'rgba(191, 90, 242, 0.32)',
  orange: '#FF9F0A',
  orangeLight: 'rgba(255, 159, 10, 0.14)',
  orangeBorder: 'rgba(255, 159, 10, 0.32)',
  keycapBg: '#2C2C2E',
  keycapBorder: 'rgba(255, 255, 255, 0.12)',
  shadowColor: '#000000',
};
