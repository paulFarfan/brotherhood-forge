// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AnimatedIcon() {
  return (
    <motion.a
      href="#top"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-3 hover:drop-shadow-[0_0_12px_rgba(255,120,0,0.7)] transition"
    >
      <img alt="The Forge" className="w-30" src="/icons/forgebanner.webp" />
    </motion.a>
  );
}
