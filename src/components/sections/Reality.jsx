import { useTranslation } from "react-i18next";
import StatsCard from "../ui/StatsCard";

export default function Reality() {
  const { t } = useTranslation();

  return (
    <section id="reality" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">{t("reality.title")}</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t("reality.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <StatsCard
            number={80}
            suffix="%"
            title={t("reality.stat1Title")}
            description={t("reality.stat1Desc")}
          />

          <StatsCard
            number={50}
            suffix="%"
            title={t("reality.stat2Title")}
            description={t("reality.stat2Desc")}
          />

          <StatsCard
            number={33}
            suffix="%"
            title={t("reality.stat3Title")}
            description={t("reality.stat3Desc")}
          />
        </div>

        <p className="text-center text-zinc-500 mt-12 text-sm">
          {t("reality.footnote")}
        </p>
      </div>
    </section>
  );
}
