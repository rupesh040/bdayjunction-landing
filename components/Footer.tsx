"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Heart } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { site, footer } from "@/data";

export default function Footer() {
  const quickLinks = footer.quickLinks || [];
  const serviceLinks = footer.services || [];
  const contactAddress = footer.contact?.address;
  const contactPhone = Array.isArray(footer.contact?.phone)
    ? footer.contact.phone[0]
    : footer.contact?.phone;
  const contactEmail = footer.contact?.email;

  const homeHref = quickLinks[0]?.href || "#hero";

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300 border-t border-slate-800/80">
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 pt-16 pb-10 sm:px-8 sm:pt-20 sm:pb-12 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          <div className="flex flex-col space-y-5">
            <div>
              <Link
                href={homeHref}
                aria-label={`${site.name} ${quickLinks[0]?.name || "Home"}`}
                className="inline-block transition-transform hover:opacity-95"
              >
                <Image
                  src={site.logo}
                  alt={site.name}
                  width={140}
                  height={55}
                  className="h-12 sm:h-14 w-auto object-contain brightness-110"
                />
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {footer.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {(footer.social || []).map((link, index: number) => (
                <a
                  key={`${link.name}-${index}`}
                  href={link.href}
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#e11d48] hover:text-white hover:border-[#e11d48] hover:-translate-y-0.5 transition-all duration-200"
                >
                  {link.svg ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: link.svg }}
                      className="w-4 h-4 [&>svg]:w-full [&>svg]:h-full flex items-center justify-center"
                    />
                  ) : (
                    (() => {
                      const Icon = link.icon
                        ? (LucideIcons as any)[
                            link.icon
                              .split("-")
                              .map(
                                (w: string) =>
                                   w.charAt(0).toUpperCase() +
                                   w.slice(1).toLowerCase(),
                              )
                              .join("")
                          ] || LucideIcons.Link
                        : LucideIcons.Link;
                      return <Icon size={16} />;
                    })()
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-white tracking-wide mb-5 flex items-center gap-2">
              <span>{footer.quickLinksTitle}</span>
            </h3>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-white tracking-wide mb-5 flex items-center gap-2">
              <span>{footer.servicesTitle}</span>
            </h3>

            <ul className="space-y-3 text-sm">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-white tracking-wide mb-5 flex items-center gap-2">
              <span>{footer.contactTitle}</span>
            </h3>

            <div className="space-y-4 text-sm">
              {contactAddress && (
                <div className="flex items-start gap-3.5 group">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#e11d48] group-hover:bg-[#e11d48]/10 group-hover:border-[#e11d48]/30 transition-colors">
                    <MapPin size={16} />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed pt-1">
                    {contactAddress}
                  </span>
                </div>
              )}

              {contactPhone && (
                <div className="flex items-center gap-3.5 group">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#e11d48] group-hover:bg-[#e11d48]/10 group-hover:border-[#e11d48]/30 transition-colors">
                    <Phone size={16} />
                  </div>
                  <a
                    href={`tel:${contactPhone.replace(/[^\d+]/g, "")}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {contactPhone}
                  </a>
                </div>
              )}

              {contactEmail && (
                <div className="flex items-center gap-3.5 group">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#e11d48] group-hover:bg-[#e11d48]/10 group-hover:border-[#e11d48]/30 transition-colors">
                    <Mail size={16} />
                  </div>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors truncate"
                  >
                    {contactEmail}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>{footer.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
