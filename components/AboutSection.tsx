"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { about } from "@/data";

export default function AboutSection() {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    buttonText,
    buttonHref,
    mainImage,
    smallImage,
    thirdImage,
  } = about;

  const images = [mainImage, smallImage, thirdImage].filter(Boolean);

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const fullHeading = `${headingPart1} ${headingPart2}`.trim();

  return (
    <section id="about" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-white via-rose-50/25 to-white py-10">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-20"
        >
          {/* Left Text Content */}
          <motion.div variants={itemVariants} className="relative z-10 max-w-[620px]">
            {eyebrow && (
              <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200/60 px-3.5 py-1 text-xs sm:text-sm font-bold text-[#e11d48]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{eyebrow}</span>
              </motion.div>
            )}

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.12] tracking-tight"
            >
              <span>{headingPart1} </span>
              <span className="text-[#e11d48]">
                {headingPart2}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg leading-relaxed text-slate-700 font-medium"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            {buttonText && (
              <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={buttonHref || "#services"}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#e11d48] to-[#be123c] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-[0_8px_25px_rgba(225,29,72,0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(225,29,72,0.45)]"
                >
                  <span>{buttonText}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Right Image Collage */}
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as any }}
              className="relative mx-auto h-[460px] w-full max-w-[680px] sm:h-[520px] lg:h-[540px]"
            >
              {/* Main Primary Image */}
              {images[0] && (
                <div className="absolute left-0 top-0 h-full w-[62%] overflow-hidden rounded-3xl border-4 border-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
                  <Image
                    src={images[0]}
                    alt={`${fullHeading} 1`}
                    fill
                    sizes="(max-width: 768px) 60vw, 35vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              )}

              {/* Top Right Image */}
              {images[1] && (
                <div className="absolute right-0 top-0 h-[47%] w-[35%] overflow-hidden rounded-3xl border-4 border-white shadow-[0_12px_30px_rgba(15,23,42,0.1)]">
                  <Image
                    src={images[1]}
                    alt={`${fullHeading} 2`}
                    fill
                    sizes="(max-width: 768px) 35vw, 20vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              )}

              {/* Bottom Right Image */}
              {images[2] && (
                <div className="absolute bottom-0 right-0 h-[48%] w-[35%] overflow-hidden rounded-3xl border-4 border-white shadow-[0_12px_30px_rgba(15,23,42,0.1)]">
                  <Image
                    src={images[2]}
                    alt={`${fullHeading} 3`}
                    fill
                    sizes="(max-width: 768px) 35vw, 20vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
