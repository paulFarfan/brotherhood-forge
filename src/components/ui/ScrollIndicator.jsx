// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-10 border-2 border-zinc-300 rounded-full flex justify-center
  shadow-[0_0_20px_rgba(255,255,255,0.35)]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-2 bg-zinc-200 rounded-full mt-2"
        />
      </motion.div>
    </div>
  );
}
