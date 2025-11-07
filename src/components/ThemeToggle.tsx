import { useTheme } from "../context/ThemeContext";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/20 dark:bg-white/5 dark:text-white ${className}`.trim()}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 7.364-1.414-1.414M8.05 8.05 6.636 6.636m12.728 0-1.414 1.414M8.05 15.95l-1.414 1.414"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
