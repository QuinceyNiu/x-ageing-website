"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export function CTASection() {
  const t = useTranslations("cta");
  const tContact = useTranslations("contact");

  return (
    <section className="relative scroll-snap-section bg-dark px-6 py-20 text-white md:py-28 overflow-hidden">
      {/* Ambient glow: top-left cyan */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.4), transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      {/* Ambient glow: bottom-right purple */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.5), transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-heading text-white">{t("title")}</h2>
          <p className="mt-6 text-body-lg text-white/60">{t("subtitle")}</p>

          {/* Contact info */}
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">联系人</p>
              <p className="mt-2 text-lg font-medium text-white">{tContact("contactPerson")}</p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/10" />
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">邮箱</p>
              <a
                href={`mailto:${tContact("email")}`}
                className="mt-2 block text-lg font-medium text-primary hover:underline"
              >
                {tContact("email")}
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="btn-glow">
                联系我们
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
