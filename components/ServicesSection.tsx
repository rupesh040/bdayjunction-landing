"use client";

import { motion } from "framer-motion";
import { services } from "@/data";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    buttonText,
    items = [],
  } = services;

  return (
    <section id="services" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white py-10">
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-rose-200/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-purple-200/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            eyebrow={eyebrow}
            titlePart1={headingPart1}
            titlePart2={headingPart2}
            subtitle={description}
            centered
          />
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((item, index) => (
            <ServiceCard
              key={item.slug}
              {...item}
              index={index}
              buttonText={buttonText}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
