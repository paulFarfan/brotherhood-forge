// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ButtonRed from "../ui/ButtonRed";
import ScrollIndicator from "../ui/ScrollIndicator";
export default function Hero() {
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
        {/* fila principal */}
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-10 items-center">
          {/* columna izquierda */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="hero-title text-6xl md:text-8xl text-left"
            >
              Forge the Strongest Version of Yourself
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg text-zinc-300 max-w-3xl"
            >
              A brotherhood of men committed to discipline, strength, and
              building a meaningful life.
            </motion.p>
          </div>

          {/* logo */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/icons/forgeicon.webp"
              className="w-56 md:w-72 drop-shadow-[0_0_20px_rgba(255,120,0,0.5)]"
            />
          </div>
        </div>

        {/* botones */}
        <div className="flex justify-center gap-6 mt-12">
          <ButtonRed text="Join the Brotherhood" />

          <button className="border border-zinc-500 px-8 py-4 rounded-lg text-lg hover:bg-zinc-800 transition">
            Explore
          </button>
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
