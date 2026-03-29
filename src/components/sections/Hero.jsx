import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ButtonRed from "../ui/ButtonRed";
import ScrollIndicator from "../ui/ScrollIndicator";

const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/brotherhoodHero.webp')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-10 items-center">
          <div>
            <MotionH1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="hero-title text-6xl md:text-8xl text-left"
            >
              {t("hero.title")}
            </MotionH1>

            <MotionP
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg text-zinc-300 max-w-3xl"
            >
              {t("hero.subtitle")}
            </MotionP>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/icons/forgeicon.webp"
              alt=""
              className="w-56 md:w-72 drop-shadow-[0_0_20px_rgba(255,120,0,0.5)]"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <ButtonRed text={t("hero.joinCta")} />

          <a
            href="#reality"
            className="border border-zinc-500 px-8 py-4 rounded-lg text-lg hover:bg-zinc-800 transition inline-flex items-center justify-center"
          >
            {t("hero.explore")}
          </a>
        </div>
      </div>
      <a href="#problem">
        <ScrollIndicator
          className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center
drop-shadow-[0_0_6px_rgba(255,120,0,0.4)]"
        />
      </a>
    </section>
  );
}
