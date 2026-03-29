import { useTranslation } from "react-i18next";

export default function Problem() {
  const { t } = useTranslation();

  return (
    <section
      id="problem"
      className="py-28 text-white bg-transparent scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="hero-title text-5xl mb-8">{t("problem.title")}</h2>

          <p className="text-zinc-400 mb-6">{t("problem.p1")}</p>

          <p className="text-zinc-400 mb-6">{t("problem.p2")}</p>

          <p className="text-zinc-400">{t("problem.p3")}</p>
        </div>

        <img
          src="/images/problem.webp"
          alt={t("problem.imageAlt")}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
