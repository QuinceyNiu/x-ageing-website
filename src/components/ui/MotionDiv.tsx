"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MotionDivProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function MotionDiv({
  children,
  variants,
  className,
  delay = 0,
}: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
