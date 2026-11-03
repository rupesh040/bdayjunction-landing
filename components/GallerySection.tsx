"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/data";
import SectionHeading from "./SectionHeading";

export default function GallerySection() {
  const {
    eyebrow,
    headingPart1,
    headingPart2,
    description,
    images = [],
  } = gallery;

  const fullHeading = `${headingPart1} ${headingPart2}`.trim();

  return (
    <section id="gallery" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-white via-rose-50/20 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <SectionHeading
          eyebrow={eyebrow}
          titlePart1={headingPart1}
          titlePart2={headingPart2}
          subtitle={description}
          centered
        />
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {images.map((src, index) => (
            <motion.div
              key={`${src}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative h-[260px] sm:h-[280px] w-full overflow-hidden rounded-2xl border border-rose-100 bg-slate-100 shadow-sm"
            >
              <Image
                src={src}
                alt={`${fullHeading} ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
