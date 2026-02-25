"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/animations";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  snap?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  dark,
  snap,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={cn(
        "px-6 py-20 md:py-28",
        dark ? "bg-dark text-white" : "bg-white text-dark-secondary",
        snap && "scroll-snap-section",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}
