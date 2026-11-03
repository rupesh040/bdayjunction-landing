"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banner, site } from "@/data";

const defaultBanners = [
  "/images/hero/banner-1.webp",
  "/images/hero/banner-2.webp",
  "/images/hero/banner-3.webp",
];

export default function Hero() {
  const banners = banner.banners && banner.banners.length > 0 ? banner.banners : defaultBanners;

  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevIndex]) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = banners.length - 1;
        if (nextIndex >= banners.length) nextIndex = 0;
        return [nextIndex, newDirection];
      });
    },
    [banners.length]
  );

  const goToSlide = (index: number) => {
    setPage(([prevIndex]) => [index, index > prevIndex ? 1 : -1]);
  };

  useEffect(() => {
    if (isPaused || banners.length <= 1) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, paginate, banners.length]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : "0%",
      opacity: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween" as const, duration: 0.7, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0.8,
      transition: {
        x: { type: "tween" as const, duration: 0.7, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.4 },
      },
    }),
  };

  if (banners.length === 0) return null;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-slate-950 h-[460px] "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={`${site.name} Banner`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={banners[currentIndex]}
              alt={`${site.name} ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              sizes="100vw"
              className="object-cover object-center select-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {banners.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="group absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#ed2671] active:scale-95 shadow-lg border border-white/10 cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="group absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#ed2671] active:scale-95 shadow-lg border border-white/10 cursor-pointer"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-[#ed2671] shadow-md shadow-[#ed2671]/40"
                    : "w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
