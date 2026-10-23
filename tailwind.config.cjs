/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Biru logo Makmur Laundry
        brand: {
          50: "#EAF2FB",
          100: "#D5E5F6",
          200: "#A9C9EC",
          300: "#6FA3DC",
          500: "#1A6FC4",
          600: "#0E5AA7",
          700: "#0B4886",
          800: "#0A3A6B"
        },
        navy: {
          DEFAULT: "#0B2545",
          soft: "#3B4F6B",
          muted: "#5B6B80"
        },
        line: "#D8E4F0",
        sun: "#FFD43B",
        wa: "#15803D"
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans Variable'", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};
