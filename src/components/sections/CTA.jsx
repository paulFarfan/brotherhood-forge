import { useTranslation } from "react-i18next";
import ButtonRed from "../ui/ButtonRed";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section
      id="join"
      className="py-32 px-6 bg-zinc-950 text-center scroll-mt-24"
    >
      <h2 className="text-white text-5xl font-bold mb-6">{t("cta.title")}</h2>

      <p className="text-zinc-400 max-w-xl mx-auto mb-10">
        {t("cta.subtitle")}
      </p>
      <ButtonRed text={t("cta.button")} />
    </section>
  );
}
