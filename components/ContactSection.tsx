"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contact } from "@/data";
import ContactForm from "./ContactForm";
import ContactCards from "./ContactCards";

export default function ContactSection() {
  const {
    eyebrow,
    headingPart1,
    headingPart2,
    description,
    image,
    formEyebrow,
    formTitlePart1,
    formTitlePart2,
    formDescription,
  } = contact;

  const fullHeading = `${headingPart1} ${headingPart2}`.trim();

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-[#fff7fa] py-10"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#f5a5d0]/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#b85bd2]/20 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[900px] text-center"
        >
          {eyebrow && (
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#e82a76] sm:text-[13px]">
                {eyebrow}
              </span>
              <span className="h-[2px] w-14 bg-[#e82a76]" />
            </div>
          )}

          <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-1px] text-[#10213e]">
            {headingPart1}{" "}
            <span className="text-[#ed2671]">
              {headingPart2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-6 text-slate-700 font-medium sm:text-[16px] sm:leading-7">
            {description}
          </p>
        </motion.div>

        <div className="mt-9 grid grid-cols-1 gap-7 lg:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7 xl:grid-cols-[0.88fr_1.12fr] xl:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[300px] overflow-hidden rounded-[24px] sm:rounded-[28px]  shadow-[0_12px_40px_rgba(218,48,112,0.06)]"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {image && (
                <Image
                  src={image}
                  alt={fullHeading}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              )}
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#fce4ec] bg-white px-6 py-8 shadow-[0_15px_45px_rgba(218,48,112,0.06)] sm:px-9 sm:py-10 md:px-11 lg:px-9 xl:px-11"
          >
            <div className="relative z-10">
              {formEyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="mb-3 flex items-center gap-3.5"
                >
                  <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#ec186c]">
                    {formEyebrow}
                  </span>
                  <span className="h-[2px] w-14 bg-[#ec186c]" />
                </motion.div>
              )}

              {(formTitlePart1 || formTitlePart2) && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.08 }}
                  className="text-[32px] font-extrabold leading-[1.08] tracking-[-1px] text-[#10213e] sm:text-[38px] md:text-[44px]"
                >
                  {formTitlePart1}{" "}
                  {formTitlePart2 && (
                    <span className="text-[#ed2671]">
                      {formTitlePart2}
                    </span>
                  )}
                </motion.h2>
              )}

              {formDescription && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-3 max-w-[620px] text-[14px] leading-relaxed text-slate-700 font-medium sm:text-[15px] sm:leading-7"
                >
                  {formDescription}
                </motion.p>
              )}

              <ContactForm />
            </div>
          </motion.div>
        </div>
        <ContactCards />
      </div>
    </section>
  );
}
