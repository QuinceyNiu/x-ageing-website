"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { clipReveal, clipRevealContainer, floatLoop } from "@/lib/animations";

const orbs = [
  { size: 500, x: "10%",  y: "20%", color: "rgba(6,182,212,0.12)",  delay: 0   },
  { size: 350, x: "65%",  y: "5%",  color: "rgba(129,140,248,0.10)", delay: 1.5 },
  { size: 280, x: "80%",  y: "55%", color: "rgba(6,182,212,0.08)",   delay: 0.8 },
  { size: 420, x: "-5%",  y: "60%", color: "rgba(99,102,241,0.09)",  delay: 2.2 },
  { size: 200, x: "45%",  y: "70%", color: "rgba(6,182,212,0.06)",   delay: 1.1 },
];

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden scroll-snap-section">
      {/* Layer 1: Deep navy base + top cyan glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "#050B18",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.18),transparent_70%)]" />

      {/* Layer 2: Bottom-right purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(129,140,248,0.12),transparent_70%)]" />

      {/* Layer 3: Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%2306B6D4' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            animate={floatLoop(orb.delay)}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
              filter: "blur(40px)",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Clip-path line-by-line title reveal */}
        <motion.div
          variants={clipRevealContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={clipReveal}
              className="text-display font-bold text-white"
            >
              {t("sloganLine1")}
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-1">
            <motion.h1
              variants={clipReveal}
              className="text-display font-bold text-gradient"
            >
              {t("sloganLine2")}
            </motion.h1>
          </div>
        </motion.div>

        {/* Gradient divider with scale-from-left */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-8 h-px w-32 origin-left"
          style={{ background: "linear-gradient(90deg, #06B6D4, #818CF8)" }}
        />

        {/* Subtitle with blur-in */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-2xl font-light tracking-widest text-white/70 sm:text-3xl"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/about">
            <Button variant="primary" size="lg" className="btn-glow">
              {t("cta1")}
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              {t("cta2")}
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-white/30 uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px"
          style={{ background: "linear-gradient(to bottom, #06B6D4, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
