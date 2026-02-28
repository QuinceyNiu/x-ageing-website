"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputBase =
  "w-full rounded-lg border bg-dark-card px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(6,182,212,0.15)]";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tCta = useTranslations("cta");
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
    <>
      <PageHero title={t("title")} />

      <SectionWrapper dark>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-subheading text-white">{t("infoTitle")}</h2>
            <div className="mt-2 section-divider" />

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-semibold text-white">{t("company")}</p>
                <p className="text-sm text-gray-light">{t("companyEn")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-light">联系人</p>
                <p className="font-medium text-white">{t("contactPerson")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-light">邮箱</p>
                <p className="font-medium text-white">{t("email")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-light">地址</p>
                <p className="font-medium text-white">{t("address")}</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-subheading text-white">{t("partnerTitle")}</h2>
            <div className="mt-2 section-divider" />
            <p className="mt-4 text-sm text-gray-light">{t("partnerDesc")}</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
                <p className="text-primary">{tCta("formSuccess")}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("name")}
                    placeholder={tCta("formName")}
                    className={`${inputBase} ${
                      errors.name ? "border-red-500" : "border-dark-border"
                    }`}
                  />
                  <input
                    {...register("company")}
                    placeholder={tCta("formCompany")}
                    className={`${inputBase} ${
                      errors.company ? "border-red-500" : "border-dark-border"
                    }`}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("phone")}
                    placeholder={tCta("formPhone")}
                    className={`${inputBase} ${
                      errors.phone ? "border-red-500" : "border-dark-border"
                    }`}
                  />
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={tCta("formEmail")}
                    className={`${inputBase} ${
                      errors.email ? "border-red-500" : "border-dark-border"
                    }`}
                  />
                </div>
                <textarea
                  {...register("message")}
                  placeholder={tCta("formMessage")}
                  rows={4}
                  className={`${inputBase} border-dark-border`}
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="btn-glow w-full"
                >
                  {tCta("formSubmit")}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Careers */}
      <SectionWrapper dark className="!bg-dark-secondary" id="careers">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-heading text-white">{t("jobsTitle")}</h2>
          <div className="mx-auto mt-2 section-divider" />
          <p className="mt-6 text-body-lg text-gray-light">{t("jobsDesc")}</p>
          <p className="mt-4 text-sm text-gray-light">
            简历请发送至：
            <a
              href={`mailto:${t("email")}`}
              className="font-medium text-primary hover:underline"
            >
              {t("email")}
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
