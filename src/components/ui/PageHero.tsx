"use client";

import type { ReactNode } from "react";
import { StaggerText } from "@/components/ui/StaggerText";

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  size?: "sm" | "md";
  align?: "center" | "left";
  children?: ReactNode;
}

export function PageHero({
  title,
  subtitle,
  size = "md",
  align = "center",
  children,
}: PageHeroProps) {
  const minHeight = size === "sm" ? "min-h-[30vh]" : "min-h-[45vh]";
  const textAlign = align === "left" ? "text-left" : "text-center";

  return (
    <section className={`relative flex ${minHeight} items-center bg-dark overflow-hidden`}>
      {/* Radial cyan glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(6,182,212,0.12), transparent 70%)",
        }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2306B6D4' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, rgba(5,11,24,0.8) 100%)",
        }}
      />

      <div className={`relative z-10 mx-auto max-w-7xl px-6 py-32 w-full ${textAlign}`}>
        {children}
        {title && (
          <StaggerText
            text={title}
            as="h1"
            className="text-display text-white"
          />
        )}
        {subtitle && (
          <p className="mt-4 text-body-lg text-white/60">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
