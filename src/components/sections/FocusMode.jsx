import { useTranslation } from "react-i18next";
import ExpandableCard from "../ui/ExpandableCard";
import AnimatedSection from "../ui/AnimatedSection";

export default function FocusMode() {
  const { t } = useTranslation();

  return (
    <section id="focus" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
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
              <p>• {t("focusMode.mindset.b1")}</p>
              <p>• {t("focusMode.mindset.b2")}</p>
              <p>• {t("focusMode.mindset.b3")}</p>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ExpandableCard
              title={t("focusMode.body.title")}
              description={t("focusMode.body.desc")}
              image="/images/focus-body.webp"
            >
              <p>• {t("focusMode.body.b1")}</p>
              <p>• {t("focusMode.body.b2")}</p>
              <p>• {t("focusMode.body.b3")}</p>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <ExpandableCard
              title={t("focusMode.knowledge.title")}
              description={t("focusMode.knowledge.desc")}
              image="/images/focus-knowledge.webp"
            >
              <p>• {t("focusMode.knowledge.b1")}</p>
              <p>• {t("focusMode.knowledge.b2")}</p>
              <p>• {t("focusMode.knowledge.b3")}</p>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <ExpandableCard
              title={t("focusMode.social.title")}
              description={t("focusMode.social.desc")}
              image="/images/focus-social.webp"
            >
              <p>• {t("focusMode.social.b1")}</p>
              <p>• {t("focusMode.social.b2")}</p>
              <p>• {t("focusMode.social.b3")}</p>
            </ExpandableCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
