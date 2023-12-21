import { useState, useEffect } from "react";

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light",
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "theme-light" ? "dark" : "theme-light";
    setThemeState(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute left-0 top-0 dark:text-white"
    >
      {theme}
    </button>
  );
}
