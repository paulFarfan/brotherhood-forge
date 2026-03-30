import { useTranslation } from "react-i18next";
import ButtonRed from "../ui/ButtonRed";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <Section id="join">
      <Container>
        <div className="text-center">
          <h2 className="text-white text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto mb-10">
            {t("cta.subtitle")}
          </p>
          <ButtonRed text={t("cta.button")} />
        </div>
      </Container>
    </Section>
  );
}
