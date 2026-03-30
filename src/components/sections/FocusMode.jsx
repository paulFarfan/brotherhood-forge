import { useTranslation } from "react-i18next";
import ExpandableCard from "../ui/ExpandableCard";
import AnimatedSection from "../ui/AnimatedSection";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function FocusMode() {
  const { t } = useTranslation();

  return (
    <Section id="focus">
      <Container>
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">{t("focusMode.title")}</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t("focusMode.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <AnimatedSection delay={0.1}>
            <ExpandableCard
              title={t("focusMode.mindset.title")}
              description={t("focusMode.mindset.desc")}
              image="/images/focus-mindset.webp"
            >
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>{t("focusMode.mindset.b1")}</li>
                <li>{t("focusMode.mindset.b2")}</li>
                <li>{t("focusMode.mindset.b3")}</li>
              </ul>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ExpandableCard
              title={t("focusMode.body.title")}
              description={t("focusMode.body.desc")}
              image="/images/focus-body.webp"
            >
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>{t("focusMode.body.b1")}</li>
                <li>{t("focusMode.body.b2")}</li>
                <li>{t("focusMode.body.b3")}</li>
              </ul>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <ExpandableCard
              title={t("focusMode.knowledge.title")}
              description={t("focusMode.knowledge.desc")}
              image="/images/focus-knowledge.webp"
            >
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>{t("focusMode.knowledge.b1")}</li>
                <li>{t("focusMode.knowledge.b2")}</li>
                <li>{t("focusMode.knowledge.b3")}</li>
              </ul>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <ExpandableCard
              title={t("focusMode.social.title")}
              description={t("focusMode.social.desc")}
              image="/images/focus-social.webp"
            >
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>{t("focusMode.social.b1")}</li>
                <li>{t("focusMode.social.b2")}</li>
                <li>{t("focusMode.social.b3")}</li>
              </ul>
            </ExpandableCard>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
