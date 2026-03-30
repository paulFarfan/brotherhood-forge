import { useTranslation } from "react-i18next";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Solution() {
  const { t } = useTranslation();

  return (
    <Section id="solution">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="h-[300px] md:h-full">
            <img
              src="/images/solution.webp"
              alt={t("solution.imageAlt")}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="hero-title text-5xl mb-8">{t("solution.title")}</h2>

            <p className="text-zinc-400 text-lg mb-6">{t("solution.p1")}</p>

            <p className="text-zinc-400 text-lg mb-6">{t("solution.p2")}</p>

            <p className="text-zinc-400 text-lg mb-10">{t("solution.p3")}</p>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="#focus"
                className="bg-zinc-900 p-1 rounded-lg hover:bg-zinc-800 transition block"
              >
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    {t("solution.structureTitle")}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {t("solution.structureDesc")}
                  </p>
                </div>
              </a>
              <a
                href="#community"
                className="bg-zinc-900 p-1 rounded-lg hover:bg-zinc-800 transition block"
              >
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    {t("solution.brotherhoodTitle")}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {t("solution.brotherhoodDesc")}
                  </p>
                </div>
              </a>
              <a
                href="#support"
                className="bg-zinc-900 p-1 rounded-lg hover:bg-zinc-800 transition block"
              >
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    {t("solution.guidanceTitle")}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {t("solution.guidanceDesc")}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
