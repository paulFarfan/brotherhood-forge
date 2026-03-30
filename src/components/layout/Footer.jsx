import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-800 bg-black text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/icons/forgebanner.webp"
            alt="THE FORGE"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
        </div>

        <p className="text-zinc-500 mb-6">{t("footer.tagline")}</p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-sm">
          <a href="#focus" className="hover:text-white transition">
            {t("nav.focusMode")}
          </a>

          <a href="#community" className="hover:text-white transition">
            {t("nav.community")}
          </a>

          <a href="#events" className="hover:text-white transition">
            {t("nav.events")}
          </a>

          <a href="/privacy.html" className="hover:text-white transition">
            {t("footer.privacy")}
          </a>

          <a href="/terms.html" className="hover:text-white transition">
            {t("footer.terms")}
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
