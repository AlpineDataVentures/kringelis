// Inline script that applies dark mode before the first paint (no flash).
// It is a plain string so astro.config.mjs can add its SHA-256 hash to the
// Content Security Policy. The preference is only kept in localStorage.
import config from "../config/config.json" with { type: "json" };

const { default_theme, theme_switcher } = config.settings;

export const THEME_INIT_SCRIPT = `try{var s=${theme_switcher ? 'localStorage.getItem("theme")' : "null"};var d=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var t=s||(${JSON.stringify(default_theme)}==="system"?d:${JSON.stringify(default_theme)});document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}`;
