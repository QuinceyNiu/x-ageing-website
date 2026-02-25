"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
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
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("title")}
            as="h1"
            className="text-display text-white"
          />
        </div>
      </section>

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-subheading">{t("infoTitle")}</h2>
            <div className="mt-2 section-divider" />

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-semibold">{t("company")}</p>
                <p className="text-sm text-gray">{t("companyEn")}</p>
              </div>
              <div>
                <p className="text-sm text-gray">联系人</p>
                <p className="font-medium">{t("contactPerson")}</p>
              </div>
              <div>
                <p className="text-sm text-gray">邮箱</p>
                <p className="font-medium">{t("email")}</p>
              </div>
              <div>
                <p className="text-sm text-gray">地址</p>
                <p className="font-medium">{t("address")}</p>
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
            <h2 className="text-subheading">{t("partnerTitle")}</h2>
            <div className="mt-2 section-divider" />
            <p className="mt-4 text-sm text-gray">{t("partnerDesc")}</p>

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
                    className={`rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  <input
                    {...register("company")}
                    placeholder={tCta("formCompany")}
                    className={`rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.company ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    {...register("phone")}
                    placeholder={tCta("formPhone")}
                    className={`rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={tCta("formEmail")}
                    className={`rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-primary ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                <textarea
                  {...register("message")}
                  placeholder={tCta("formMessage")}
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {tCta("formSubmit")}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Careers */}
      <SectionWrapper className="bg-light" id="careers">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-heading">{t("jobsTitle")}</h2>
          <div className="mx-auto mt-2 section-divider" />
          <p className="mt-6 text-body-lg text-gray">{t("jobsDesc")}</p>
          <p className="mt-4 text-sm text-gray">
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
