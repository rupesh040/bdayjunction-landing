"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { site, header } from "@/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    header.links[0]?.href.replace(/^#/, "") || "hero"
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const sectionIds = header.links
    .map((item) => item.href.replace(/^#/, ""))
    .filter(Boolean);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const scrollPosition = window.scrollY + 140;

        for (const sectionId of sectionIds) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, sectionIds]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveSection(targetId);
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  const isLinkActive = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      return pathname === "/" && activeSection === targetId;
    }
    return pathname === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          window.history.pushState(null, "", href);
          setActiveSection(targetId);
        }
        if (isOpen) {
          setIsOpen(false);
        }
      } else {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    } else {
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  const homeHref = header.links[0]?.href || "#hero";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(225,29,72,0.08)] border-b border-rose-100"
          : "bg-white/85 backdrop-blur-sm border-b border-rose-100/60"
      }`}
    >
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12">
        <div className="flex h-[74px] items-center justify-between lg:h-[84px]">
         
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, homeHref)}
            aria-label={`${site.name} ${header.links[0]?.name || "Home"}`}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="relative flex items-center"
            >
              <Image
                src={site.logo}
                alt={site.name}
                width={120}
                height={50}
                priority
                className="h-14 w-auto object-contain"
              />
            </motion.div>
          </Link>
          <div className="hidden h-full items-center lg:flex">
            <nav className="flex h-full items-center gap-1">
              {header.links.map((item, index) => {
                const active = isLinkActive(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full"
                  >
                    <Link
                      href={resolveHref(item.href)}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`group relative flex h-full items-center px-3.5 xl:px-4 text-[14.5px] font-semibold transition-all duration-200 ${
                        active
                          ? "text-[#e11d48]"
                          : "text-slate-700 hover:text-[#e11d48]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <motion.span
                        initial={false}
                        animate={{
                          width: active ? "70%" : "0%",
                          opacity: active ? 1 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="absolute bottom-[20px] left-1/2 h-[2.5px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#e11d48] to-[#f43f5e]"
                      />

                      <span className="absolute bottom-[20px] left-1/2 h-[2.5px] w-0 -translate-x-1/2 rounded-full bg-[#e11d48] transition-all duration-200 group-hover:w-[70%]" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-rose-50/70 text-slate-800 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} className="text-[#e11d48]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} className="text-slate-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-rose-100 bg-white/95 backdrop-blur-xl lg:hidden shadow-xl"
          >
            <div className="px-5 pb-6 pt-3 space-y-1">
              {header.links.map((item, index) => {
                const active = isLinkActive(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={resolveHref(item.href)}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between rounded-lg px-3.5 py-3 text-[15px] font-semibold transition-colors ${
                        active
                          ? "bg-rose-50 text-[#e11d48]"
                          : "text-slate-700 hover:bg-rose-50/50 hover:text-[#e11d48]"
                      }`}
                    >
                      <span>{item.name}</span>
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-[#e11d48]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
