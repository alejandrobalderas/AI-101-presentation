export const theme = {
  colors: {
    // Single accent color - warm terracotta
    primary: '#B85C38',        // Warm terracotta
    primaryLight: '#D4856A',   // Soft terracotta
    primaryDark: '#8B4429',    // Deep terracotta
    secondary: '#B85C38',      // Same as primary for consistency
    secondaryLight: '#D4856A',
    accent: '#B85C38',         // Single accent throughout
    accentLight: '#D4856A',

    // Semantic colors - muted, sophisticated
    success: '#5B8A72',        // Sage green
    successLight: '#7BA695',
    warning: '#C9A227',        // Muted gold
    warningLight: '#D9B84A',
    error: '#B54D4D',          // Muted red
    errorLight: '#CC7373',

    // Light, warm palette
    background: '#FAF8F5',     // Warm off-white
    backgroundAlt: '#F5F2EE',  // Slightly darker cream
    surface: '#FFFFFF',        // Pure white for cards
    surfaceLight: '#F0EDE8',   // Light warm gray
    surfaceHover: '#E8E4DD',   // Hover state

    // Text hierarchy - warm grays
    text: '#2C2825',           // Warm charcoal (not pure black)
    textMuted: '#6B6560',      // Warm medium gray
    textDim: '#8F8983',        // Warm light gray
    textSubtle: '#B5AFA8',     // Very light

    // Refined card styles (no glass effects)
    glass: '#FFFFFF',
    glassBorder: '#E8E4DD',
    glassHover: '#F5F2EE',
  },

  fonts: {
    // Editorial typography
    heading: '"Plus Jakarta Sans", "DM Sans", -apple-system, sans-serif',
    body: '"Plus Jakarta Sans", "DM Sans", -apple-system, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", monospace',
    accent: '"Plus Jakarta Sans", "DM Sans", sans-serif',
  },

  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },

  radii: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px rgba(44, 40, 37, 0.04)',
    md: '0 2px 8px rgba(44, 40, 37, 0.06), 0 1px 2px rgba(44, 40, 37, 0.04)',
    lg: '0 4px 16px rgba(44, 40, 37, 0.08), 0 2px 4px rgba(44, 40, 37, 0.04)',
    xl: '0 8px 32px rgba(44, 40, 37, 0.1), 0 4px 8px rgba(44, 40, 37, 0.04)',
    glow: (color: string) => `0 4px 20px ${color}20`,
    inner: 'inset 0 1px 2px rgba(44, 40, 37, 0.04)',
    card: '0 1px 3px rgba(44, 40, 37, 0.04), 0 4px 12px rgba(44, 40, 37, 0.03)',
  },

  gradients: {
    // Minimal, subtle gradients
    primary: 'linear-gradient(135deg, #B85C38 0%, #D4856A 100%)',
    primarySubtle: 'linear-gradient(135deg, rgba(184, 92, 56, 0.08) 0%, rgba(212, 133, 106, 0.04) 100%)',
    accent: 'linear-gradient(135deg, #B85C38 0%, #C9A227 100%)',
    accentSubtle: 'linear-gradient(135deg, rgba(184, 92, 56, 0.05) 0%, rgba(201, 162, 39, 0.03) 100%)',
    dark: 'linear-gradient(180deg, #F5F2EE 0%, #FAF8F5 100%)',
    radial: 'radial-gradient(ellipse at center, rgba(184, 92, 56, 0.03) 0%, transparent 70%)',
    mesh: `
      radial-gradient(at 0% 0%, rgba(184, 92, 56, 0.04) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(91, 138, 114, 0.03) 0px, transparent 50%)
    `,
  },

  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
}

export type Theme = typeof theme
