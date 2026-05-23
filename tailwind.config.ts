import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: [
          "var(--font-space-grotesk)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "gradient-shift": "gradientShift 8s ease infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.06)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.3)",
        "glow-sm": "0 0 15px rgba(16, 185, 129, 0.15)",
        "glow-md": "0 0 30px rgba(16, 185, 129, 0.2)",
        "glow-lg": "0 0 60px rgba(16, 185, 129, 0.25)",
        "glow-brand":
          "0 0 20px rgba(16, 185, 129, 0.15), 0 0 60px rgba(16, 185, 129, 0.05)",
        "card-hover":
          "0 20px 40px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.1)",
        "card-hover-dark":
          "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(160, 50%, 60%, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 50%, 60%, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(260, 50%, 60%, 0.06) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340, 50%, 60%, 0.04) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22, 50%, 60%, 0.06) 0px, transparent 50%)",
        "mesh-gradient-dark":
          "radial-gradient(at 40% 20%, hsla(160, 50%, 40%, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 50%, 40%, 0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(260, 50%, 40%, 0.08) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340, 50%, 40%, 0.06) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22, 50%, 40%, 0.08) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
