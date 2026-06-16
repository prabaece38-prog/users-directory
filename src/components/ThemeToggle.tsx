import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium
        text-gray-700 hover:bg-gray-100
        dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
