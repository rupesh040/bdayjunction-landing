"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Mail,
  MessageSquare,
  Phone,
  User,
  List,
  ArrowRight,
  Loader2,
  X,
} from "lucide-react";
import { contact } from "@/data";

export default function ContactForm() {
  const {
    services = [],
    buttonText,
    successTitle,
    successDescription,
    formFields,
  } = contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Allow digits, plus, hyphens, spaces, and parentheses
    const value = event.target.value.replace(/[^\d+ ()-]/g, "");
    setPhone(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Realistic submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setOption("");
      setMessage("");
    }, 700);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-7 space-y-4 sm:space-y-4.5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Your Name */}
          <div className="relative">
            <label htmlFor="contact-name" className="sr-only">
              {formFields.namePlaceholder}
            </label>
            <User
              size={19}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#ec186c]"
            />
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={formFields.namePlaceholder}
              required
              className="h-[52px] sm:h-[54px] w-full rounded-full border border-[#f8a9c7] bg-white pl-12 pr-5 text-[14px] sm:text-[15px] text-slate-800 outline-none transition-all placeholder:text-[#798498] focus:border-[#ec186c] focus:ring-4 focus:ring-[#ec186c]/10"
            />
          </div>

          {/* Your Email */}
          <div className="relative">
            <label htmlFor="contact-email" className="sr-only">
              {formFields.emailPlaceholder}
            </label>
            <Mail
              size={19}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#ec186c]"
            />
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={formFields.emailPlaceholder}
              required
              className="h-[52px] sm:h-[54px] w-full rounded-full border border-[#f8a9c7] bg-white pl-12 pr-5 text-[14px] sm:text-[15px] text-slate-800 outline-none transition-all placeholder:text-[#798498] focus:border-[#ec186c] focus:ring-4 focus:ring-[#ec186c]/10"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label htmlFor="contact-phone" className="sr-only">
              {formFields.phonePlaceholder}
            </label>
            <Phone
              size={19}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#ec186c]"
            />
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={20}
              required
              placeholder={formFields.phonePlaceholder}
              className="h-[52px] sm:h-[54px] w-full rounded-full border border-[#f8a9c7] bg-white pl-12 pr-5 text-[14px] sm:text-[15px] text-slate-800 outline-none transition-all placeholder:text-[#798498] focus:border-[#ec186c] focus:ring-4 focus:ring-[#ec186c]/10"
            />
          </div>

          {/* Choose Option */}
          <div className="relative">
            <label htmlFor="contact-option" className="sr-only">
              {formFields.servicePlaceholder}
            </label>
            <List
              size={19}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#ec186c]"
            />
            <select
              id="contact-option"
              name="option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              required
              className={`h-[52px] sm:h-[54px] w-full appearance-none rounded-full border border-[#f8a9c7] bg-white pl-12 pr-11 text-[14px] sm:text-[15px] outline-none transition-all focus:border-[#ec186c] focus:ring-4 focus:ring-[#ec186c]/10 cursor-pointer ${
                option ? "text-slate-800" : "text-[#798498]"
              }`}
            >
              <option value="" disabled hidden>
                {formFields.servicePlaceholder}
              </option>
              {services.map((item: string) => (
                <option key={item} value={item} className="text-slate-800">
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              strokeWidth={2.4}
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#ec186c]"
            />
          </div>
        </div>

        {/* Your Message */}
        <div className="relative">
          <label htmlFor="contact-message" className="sr-only">
            {formFields.messagePlaceholder}
          </label>
          <MessageSquare
            size={19}
            className="pointer-events-none absolute left-5 top-4 text-[#ec186c]"
          />
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={formFields.messagePlaceholder}
            className="w-full resize-none rounded-2xl border border-[#f8a9c7] bg-white pl-12 pr-5 pt-3.5 pb-4 text-[14px] sm:text-[15px] text-slate-800 outline-none transition-all placeholder:text-[#798498] focus:border-[#ec186c] focus:ring-4 focus:ring-[#ec186c]/10"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-2 sm:pt-3">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="inline-flex h-[50px] sm:h-[52px] items-center justify-center gap-2 rounded-full bg-[#ec186c] px-10 sm:px-14 text-[15px] sm:text-base font-semibold text-white shadow-[0_8px_25px_rgba(236,24,108,0.32)] transition-all duration-200 hover:bg-[#d81362] hover:shadow-[0_10px_30px_rgba(236,24,108,0.45)] active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin text-white" />
                <span>{formFields.submittingText}</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                <ArrowRight size={18} strokeWidth={2.4} />
              </>
            )}
          </motion.button>
        </div>

        {/* Inline Success Notice */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="mt-4 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/60 p-4 sm:p-5 text-emerald-900 shadow-sm"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-emerald-950">
                    {successTitle}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-emerald-800">
                    {successDescription}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowSuccess(false)}
                    className="mt-3 inline-flex items-center text-xs font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-900 cursor-pointer"
                  >
                    {formFields.resetButtonText}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSuccess(false)}
                  aria-label="Dismiss notification"
                  className="shrink-0 p-1 text-emerald-600 hover:text-emerald-900 transition-colors rounded-lg hover:bg-emerald-200/50 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </>
  );
}
