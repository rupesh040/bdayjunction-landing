"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonial } from "@/data";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    items = [],
  } = testimonial;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerPage);

  const nextPage = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const previousPage = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (items.length <= itemsPerPage || isPaused) return;
    const timer = setInterval(() => {
      nextPage();
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length, itemsPerPage, isPaused, nextPage]);

  const totalSteps = maxIndex + 1;
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section 
      id="testimonials"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-80 w-[650px] z-[-9] -translate-x-1/2 rounded-full bg-rose-100/40 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <SectionHeading
          eyebrow={eyebrow}
          titlePart1={headingPart1}
          titlePart2={headingPart2}
          subtitle={description}
          centered
        />

        <div className="relative mt-8 sm:mt-10">
          <button
            type="button"
            onClick={previousPage}
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-rose-200 bg-white text-slate-800 shadow-md transition-all hover:bg-[#e11d48] hover:text-white hover:border-[#e11d48] sm:-left-3 lg:-left-5 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={nextPage}
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-rose-200 bg-white text-slate-800 shadow-md transition-all hover:bg-[#e11d48] hover:text-white hover:border-[#e11d48] sm:-right-3 lg:-right-5 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          <div className="overflow-hidden px-8 sm:px-12 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${itemsPerPage}`}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {visibleItems.map((item, index) => (
                  <TestimonialCard
                    key={`${item.name}-${currentIndex}-${index}`}
                    {...item}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {totalSteps > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index ? "w-8 bg-[#e11d48]" : "w-2.5 bg-rose-200 hover:bg-[#e11d48]/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
