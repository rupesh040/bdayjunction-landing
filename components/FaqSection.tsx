"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data";
import SectionHeading from "./SectionHeading";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    bottomBanner,
    items = [],
  } = faq;

  return (
    <section id="faq" className="scroll-mt-24 relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <SectionHeading
          eyebrow={eyebrow}
          titlePart1={headingPart1}
          titlePart2={headingPart2}
          subtitle={description}
          centered
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {items.map((item, index: number) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#e11d48]/50 shadow-[0_10px_30px_rgba(225,29,72,0.08)] bg-white"
                    : "border-rose-100 bg-white hover:border-rose-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className={`flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors cursor-pointer ${
                    isOpen ? "bg-rose-50/50" : "hover:bg-rose-50/20"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-[#e11d48]">
                      {index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {item.question}
                    </span>
                  </div>

                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#e11d48] text-white" : "bg-rose-50 text-[#e11d48]"
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-rose-100/60 p-5 sm:p-6 pt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        {bottomBanner && (
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600">
              {bottomBanner.description}{" "}
              <a
                href={bottomBanner.buttonLink || "#contact"}
                className="font-bold text-[#e11d48] underline underline-offset-4 hover:text-[#be123c]"
              >
                {bottomBanner.buttonText}
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
