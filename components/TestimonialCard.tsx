"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { TestimonialItem } from "@/data";

export default function TestimonialCard({
  name,
  title,
  rating,
  quote,
  image,
  index = 0,
}: TestimonialItem & { index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-rose-100 bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(225,29,72,0.06)] hover:border-rose-200 hover:shadow-[0_16px_40px_rgba(225,29,72,0.12)] transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3.5">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-rose-200 shadow-sm">
              <Image
                src={image || "/images/testimonials/avatar-1.jpg"}
                alt={name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {name}
              </h3>
              <p className="text-xs font-semibold text-[#e11d48]">
                {title}
              </p>
            </div>
          </div>

          <div className="flex gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < (rating || 5) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}
              />
            ))}
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <Quote size={32} className="text-[#e11d48]/25 rotate-180" />
      </div>
    </motion.article>
  );
}
