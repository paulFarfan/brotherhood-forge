import { useTranslation } from "react-i18next";
import CardLink from "../ui/CardLink";
import AnimatedSection from "../ui/AnimatedSection";

export default function Experts() {
  const { t } = useTranslation();

  return (
    <section id="support" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">{t("experts.title")}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t("experts.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <AnimatedSection delay={0.1}>
            <CardLink
              title={t("experts.psychology.title")}
              description={t("experts.psychology.desc")}
              image="/images/psychology.webp"
              link="/experts/psychology"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <CardLink
              title={t("experts.coaching.title")}
              description={t("experts.coaching.desc")}
              image="/images/coaching.webp"
              link="/experts/coaching"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <CardLink
              title={t("experts.mentors.title")}
              description={t("experts.mentors.desc")}
              image="/images/mentors.webp"
              link="/experts/mentorship"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
