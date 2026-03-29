import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

const STORAGE_KEY = "forge_i18n_lang";

function detectLanguage() {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  const nav = navigator.language?.slice(0, 2)?.toLowerCase();
  return nav === "es" ? "es" : "en";
}

function persistLang(lng) {
  try {
    const code = lng?.startsWith("es") ? "es" : "en";
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* ignore */
  }
}

i18n.use(initReactI18next).init(
  {
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: detectLanguage(),
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: { escapeValue: false },
  },
  () => {
    persistLang(i18n.language);
  },
);

i18n.on("languageChanged", persistLang);

export default i18n;
