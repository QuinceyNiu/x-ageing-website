"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClass = (hasError: boolean) =>
  `rounded-lg border bg-dark-card px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(6,182,212,0.15)] ${
    hasError ? "border-red-500" : "border-dark-border"
  }`;

export function CTASection() {
  const t = useTranslations("cta");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    setSubmitted(true);
  };

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

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-heading text-white">{t("title")}</h2>
            <p className="mt-6 text-body-lg text-white/60">{t("subtitle")}</p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 p-8">
                <p className="text-center text-lg text-primary-light">
                  {t("formSuccess")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("name")}
                    placeholder={t("formName")}
                    className={inputClass(!!errors.name)}
                  />
                  <input
                    {...register("company")}
                    placeholder={t("formCompany")}
                    className={inputClass(!!errors.company)}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("phone")}
                    placeholder={t("formPhone")}
                    className={inputClass(!!errors.phone)}
                  />
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={t("formEmail")}
                    className={inputClass(!!errors.email)}
                  />
                </div>
                <textarea
                  {...register("message")}
                  placeholder={t("formMessage")}
                  rows={4}
                  className={`w-full ${inputClass(false)}`}
                />
                <Button type="submit" variant="primary" size="lg" className="btn-glow w-full">
                  {t("formSubmit")}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
