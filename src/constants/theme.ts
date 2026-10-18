// src/constants/theme.ts

export const theme = {
  colors: {
    /**
     * Cores institucionais da marca
     */
    brand: {
      darkGreen: "#14532D",
      green: "#84CC16",
      yellow: "#F4B400",
      orange: "#F59E0B",
      red: "#EF4444",
    },

    /**
     * Escala principal utilizada na interface
     */
    primary: {
      darkGreen: "#14532D",

      900: "#14532D",
      800: "#166534",
      700: "#15803D",
      600: "#16A34A",
      500: "#22C55E",
    },

    /**
     * Cores de destaque
     */
    accent: {
      orange: {
        700: "#C2410C",
        600: "#D97706",
        500: "#F59E0B",
      },
    },

    /**
     * Escala neutra
     */
    slate: {
      950: "#020617",
      900: "#0F172A",
      700: "#334155",
      500: "#64748B",
      300: "#CBD5E1",
      100: "#F1F5F9",
    },

    white: "#FFFFFF",
  },

  /**
   * Estados semânticos
   */
  semantic: {
    success: {
      bg: "#DCFCE7",
      text: "#166534",
      border: "#86EFAC",
    },

    warning: {
      bg: "#FEF3C7",
      text: "#92400E",
      border: "#FCD34D",
    },

    error: {
      bg: "#FEE2E2",
      text: "#B91C1C",
      border: "#FCA5A5",
    },

    info: {
      bg: "#DBEAFE",
      text: "#1D4ED8",
      border: "#93C5FD",
    },
  },

  /**
   * Tipografia
   */
  text: {
    primary: "#0F172A",
    secondary: "#64748B",
    inverse: "#FFFFFF",
  },

  /**
   * Fundos
   */
  background: {
    primary: "#FFFFFF",
    secondary: "#F1F5F9",
  },

  /**
   * Bordas
   */
  border: {
    default: "#CBD5E1",
  },

  /**
   * Raios
   */
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  /**
   * Layout
   */
  container: {
    maxWidth: "1280px",
  },
} as const;