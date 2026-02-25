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
    <section className="scroll-snap-section bg-dark px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-heading">{t("title")}</h2>
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
                    className={`rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-primary ${
                      errors.name ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  <input
                    {...register("company")}
                    placeholder={t("formCompany")}
                    className={`rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-primary ${
                      errors.company ? "border-red-500" : "border-white/10"
                    }`}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("phone")}
                    placeholder={t("formPhone")}
                    className={`rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-primary ${
                      errors.phone ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={t("formEmail")}
                    className={`rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-primary ${
                      errors.email ? "border-red-500" : "border-white/10"
                    }`}
                  />
                </div>
                <textarea
                  {...register("message")}
                  placeholder={t("formMessage")}
                  rows={4}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-primary"
                />
                <Button type="submit" variant="primary" size="lg" className="w-full">
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
