import { useTranslation } from "react-i18next";
import AnimatedSection from "../ui/AnimatedSection";
import IconCardLink from "../ui/IconCardLink";

export default function Community() {
  const { t } = useTranslation();

  return (
    <section id="community" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">{t("community.title")}</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t("community.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <AnimatedSection delay={0.1}>
            <IconCardLink
              title={t("community.training.title")}
              description={t("community.training.desc")}
              icon="/icons/Training.webp"
              link="/community/training"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <IconCardLink
              title={t("community.books.title")}
              description={t("community.books.desc")}
              icon="/icons/Discussions.webp"
              link="/community/books"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <IconCardLink
              title={t("community.life.title")}
              description={t("community.life.desc")}
              icon="/icons/Conversations.webp"
              link="/community/life"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <IconCardLink
              title={t("community.eventGroups.title")}
              description={t("community.eventGroups.desc")}
              icon="/icons/Event.webp"
              link="/community/events"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <IconCardLink
              title={t("community.supportCircles.title")}
              description={t("community.supportCircles.desc")}
              icon="/icons/Support.webp"
              link="/community/support"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <IconCardLink
              title={t("community.business.title")}
              description={t("community.business.desc")}
              icon="/icons/Networking.webp"
              link="/community/business"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
