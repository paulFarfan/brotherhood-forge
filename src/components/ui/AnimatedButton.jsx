import { motion } from "framer-motion";

const MotionA = motion.a;
const MotionButton = motion.button;

const transition = { type: "spring", stiffness: 300 };

const baseClass =
  "bg-red-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg shadow-red-600/30 hover:shadow-red-600/60 inline-flex items-center justify-center text-center text-white";

export default function AnimatedButton({
  children,
  href,
  className = "",
  ...rest
}) {
  const cls = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <MotionA
        href={href}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={transition}
        className={cls}
        {...rest}
      >
        {children}
      </MotionA>
    );
  }

  return (
    <MotionButton
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={transition}
      className={cls}
      {...rest}
    >
      {children}
    </MotionButton>
  );
}
