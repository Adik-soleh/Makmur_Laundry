/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F2F4EE",
          100: "#E1E7D7",
          200: "#C3CFB0",
          300: "#9BAF81",
          400: "#7A9060",
          500: "#5E7548",
          600: "#4A5D39",
          700: "#3A4A2D",
          800: "#2A3621",
          900: "#1C2416"
        },
        ink: {
          DEFAULT: "#1C1814",
          soft: "#3A332B",
          muted: "#6B6057"
        },
        cream: {
          DEFAULT: "#F7F1E5",
          light: "#FBF7EC",
          deep: "#F0E7D3"
        },
        paper: "#FFFDF7",
        stone: {
          100: "#EFE7D6",
          200: "#E2D5B8",
          300: "#C9B88F",
          400: "#A89470"
        },
        sage: {
          50: "#F2F4EE",
          100: "#E1E7D7",
          200: "#C3CFB0",
          300: "#9BAF81",
          400: "#7A9060",
          500: "#5E7548",
          600: "#4A5D39",
          700: "#3A4A2D",
          800: "#2A3621",
          900: "#1C2416"
        },
        copper: {
          400: "#C78A5A",
          500: "#B5704A",
          600: "#98583A"
        }
      },
      fontFamily: {
        display: ["'Fraunces'", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        eyebrow: "0.32em"
      },
      boxShadow: {
        card: "0 1px 2px rgba(28,24,20,0.04), 0 8px 24px -12px rgba(28,24,20,0.12)",
        quiet: "0 1px 0 rgba(28,24,20,0.04)"
      }
    }
  },
  plugins: []
};
