// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ButtonRed from "../ui/ButtonRed";
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/brotherhoodHero.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title text-6xl md:text-8xl"
        >
          Forge the Strongest Version of Yourself
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg text-zinc-300"
        >
          A brotherhood of men committed to discipline, strength, and building a
          meaningful life.
        </motion.p>

        <div className="flex gap-6 justify-center mt-10">
          <ButtonRed text="Join the Brotherhood" />
          <button className="border border-zinc-500 px-8 py-4 rounded-lg text-lg hover:bg-zinc-800 transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
