import { motion } from "motion/react";
import type { ReactNode, CSSProperties } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export function ScrollFade({ children, className, style, delay = 0 }: ScrollFadeProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

export function ScrollFadeDiv({ children, className, style, delay = 0 }: ScrollFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
