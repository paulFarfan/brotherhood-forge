// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AnimatedButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-red-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg shadow-red-600/30 hover:shadow-red-600/60"
    >
      {children}
    </motion.button>
  );
}
