"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data";
import type { ContactCardItem } from "@/types/content";

export default function ContactCards() {
  const cards: ContactCardItem[] = contact.contactCards || [];

  if (!cards || cards.length === 0) return null;

  return (
    <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((card: ContactCardItem, index: number) => {
        const isPhone = card.icon === "Phone";
        const isMail = card.icon === "Mail";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center gap-5 rounded-[20px] border border-[#f8c6d7]/30 bg-white p-6 shadow-[0_8px_30px_rgba(218,48,112,0.04)] transition-all duration-300 hover:border-[#f8c6d7] hover:shadow-[0_15px_40px_rgba(218,48,112,0.08)] sm:gap-6 sm:p-8"
          >
            <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#ffe0eb] text-[#df1762]">
              {card.icon === "MapPin" && <MapPin size={32} strokeWidth={2} />}
              {card.icon === "Mail" && <Mail size={32} strokeWidth={2} />}
              {card.icon === "Phone" && <Phone size={32} strokeWidth={2} />}
            </div>

            <div className="hidden h-[50px] w-[2px] shrink-0 bg-[#f8c6d7]/50 sm:block" />

            <div>
              <h4 className="mb-2 text-[18px] font-extrabold text-[#01174a] sm:text-[20px]">
                {card.title}
              </h4>
              <div className="text-[14px] leading-relaxed text-[#596274] sm:text-[15px]">
                {card.details.map((detail: string, i: number) => {
                  if (isPhone) {
                    const cleanTel = detail.replace(/[^\d+]/g, "");
                    return (
                      <a
                        key={i}
                        href={`tel:${cleanTel}`}
                        className="block hover:text-[#df1762] hover:underline transition-colors font-medium text-slate-700"
                      >
                        {detail}
                      </a>
                    );
                  }

                  if (isMail) {
                    return (
                      <a
                        key={i}
                        href={`mailto:${detail}`}
                        className="block hover:text-[#df1762] hover:underline transition-colors"
                      >
                        {detail}
                      </a>
                    );
                  }

                  return <p key={i}>{detail}</p>;
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
