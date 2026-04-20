/** fadeUp / stagger のみ使用（portfolio-skill-v3 準拠） */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
} as const;

export const stagger = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
} as const;
