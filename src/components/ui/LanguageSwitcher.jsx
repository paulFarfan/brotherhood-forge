import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ className = "" }) {
  const { i18n, t } = useTranslation();
  const isEs = i18n.language?.startsWith("es");

  return (
    <div
      className={`flex items-center rounded-md border border-zinc-600 bg-zinc-900/60 p-0.5 text-sm ${className}`}
      role="group"
      aria-label={t("nav.language")}
    >
      <button
        type="button"
        className={`rounded px-2.5 py-1 font-medium transition ${!isEs ? "bg-red-600 text-white" : "text-zinc-400 hover:text-white"}`}
        aria-pressed={!isEs}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={`rounded px-2.5 py-1 font-medium transition ${isEs ? "bg-red-600 text-white" : "text-zinc-400 hover:text-white"}`}
        aria-pressed={isEs}
        onClick={() => i18n.changeLanguage("es")}
      >
        ES
      </button>
    </div>
  );
}
