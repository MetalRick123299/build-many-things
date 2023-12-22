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
    <label className="swap swap-rotate absolute left-0 top-0 dark:text-white">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value="light"
        checked={theme === "theme-light"}
        onChange={toggleTheme}
      />

      <span className="i-[ph--sun] swap-on h-8 w-8" />
      <span className="i-[ph--moon] swap-off h-8 w-8" />
    </label>
  );
}
