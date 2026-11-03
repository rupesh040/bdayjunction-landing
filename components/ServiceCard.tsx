"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceItem } from "@/data";

interface ServiceCardProps extends ServiceItem {
  index?: number;
  buttonText?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  href,
  features,
  index = 0,
  buttonText,
}: ServiceCardProps) {
  const targetHref = href || "#contact";

  const handleBookService = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (targetHref.startsWith("#")) {
      e.preventDefault();
      const targetId = targetHref.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navHeight = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", targetHref);
      } else {
        window.location.hash = targetHref;
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.07, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-[0_8px_30px_rgba(225,29,72,0.06)] transition-all duration-300 hover:border-rose-200 hover:shadow-[0_16px_40px_rgba(225,29,72,0.12)]"
    >
      <div className="relative h-[220px] w-full overflow-hidden bg-slate-100 sm:h-[230px]">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="mb-2 text-xl font-extrabold text-slate-900 transition-colors group-hover:text-[#e11d48]">
          {title}
        </h3>

        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="mb-6 space-y-2 border-t border-rose-50 pt-4 text-xs sm:text-sm text-slate-600">
            {features.slice(0, 3).map((feat: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#e11d48]" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        )}
        {buttonText && (
          <div className="mt-auto pt-2">
            <Link
              href={targetHref}
              onClick={handleBookService}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-50 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#e11d48] transition-all hover:bg-[#e11d48] hover:text-white group/btn shadow-sm"
            >
              <span>{buttonText}</span>
              <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
