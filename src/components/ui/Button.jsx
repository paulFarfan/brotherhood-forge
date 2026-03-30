import { motion } from "framer-motion";

// ESLint's `no-unused-vars` can miss Motion's dotted JSX usage (`<motion.button />`).
// Use an explicit Motion component variable instead.
const MotionButton = motion.button;

export default function Button({ children, variant = "primary" }) {
  const base = "px-6 py-3 rounded-lg text-sm font-semibold transition";

  const styles = {
    primary:
      "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30",
    secondary: "border border-zinc-600 text-zinc-300 hover:bg-zinc-800",
  };

  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </MotionButton>
  );
}
