import { useTranslation } from "react-i18next";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Problem() {
  const { t } = useTranslation();

  const reasons = t("problem.reasons", { returnObjects: true });
  const consequences = t("problem.consequences", { returnObjects: true });

  return (
    <Section id="problem">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="hero-title text-4xl md:text-5xl mb-8">
              {t("problem.title")}
            </h2>

            <div className="space-y-4 text-lg max-w-xl">
              {/* Intro */}
              <p className="uppercase tracking-wide text-zinc-400">
                {t("problem.intro")}
              </p>

              {/* Highlight */}
              <p className="text-white font-bold text-xl">
                {t("problem.highlight")}
              </p>

              {/* Reasons */}
              <div className="mt-6 space-y-2 text-zinc-300">
                {reasons.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>

              {/* Consequences */}
              <div className="mt-6 space-y-2">
                {consequences.map((item, i) => (
                  <p key={i} className="text-white font-bold">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[300px] md:h-full">
            <img
              src="/images/problem.webp"
              alt={t("problem.imageAlt")}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
