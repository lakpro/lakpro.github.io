import { useState, useEffect } from "react";

/**
 * Shared dark mode hook — syncs across all components via a custom window event.
 * Any component that calls this hook can toggle the theme and all others update.
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  useEffect(() => {
    const onThemeChange = (e) => setIsDark(e.detail.isDark);
    window.addEventListener("themechange", onThemeChange);
    return () => window.removeEventListener("themechange", onThemeChange);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new CustomEvent("themechange", { detail: { isDark: next } }));
  };

  return { isDark, toggleDark };
}
