"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface StaggerTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function StaggerText({
  text,
  className,
  as: Tag = "h2",
}: StaggerTextProps) {
  const chars = text.split("");

  return (
    <Tag className={cn("inline-block", className)}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.03 }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
}
