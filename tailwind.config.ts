
import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";
import { colors } from "tailwindcss/colors";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // All the copper, navy etc. colors used in the theme
        audiolights: {
          copper: "#B87333",
          50: "#F8F9FA",
          100: "#E9EEF2",
          200: "#D4DFE7",
          300: "#B3C5D3",
          400: "#8FA9BC",
          500: "#6B8EAD",
          600: "#4E7190",
          700: "#3A5369",
          800: "#253543",
          900: "#1E293B",
          950: "#0F172A",
        },
        navy: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        amber: colors.amber,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "audio-wave-1": {
          "0%, 100%": { height: "0.75rem" },
          "50%": { height: "2.5rem" },
        },
        "audio-wave-2": {
          "0%, 100%": { height: "1.25rem" },
          "50%": { height: "3rem" },
        },
        "audio-wave-3": {
          "0%, 100%": { height: "1.75rem" },
          "50%": { height: "3.5rem" },
        },
        "audio-wave-4": {
          "0%, 100%": { height: "1.5rem" },
          "50%": { height: "2.75rem" },
        },
        "audio-wave-5": {
          "0%, 100%": { height: "1rem" },
          "50%": { height: "3.25rem" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "audio-wave-1": "audio-wave-1 1.2s ease-in-out infinite",
        "audio-wave-2": "audio-wave-2 1.1s ease-in-out infinite",
        "audio-wave-3": "audio-wave-3 1.3s ease-in-out infinite",
        "audio-wave-4": "audio-wave-4 1.15s ease-in-out infinite",
        "audio-wave-5": "audio-wave-5 1.25s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: theme("colors"), type: "color" }
      );
    }),
  ],
} satisfies Config;
