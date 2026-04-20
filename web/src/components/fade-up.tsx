"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type FadeUpProps = {
  children: ReactNode;
  className?: string;
};

export function FadeUp({ children, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
