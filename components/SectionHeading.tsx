interface SectionHeadingProps {
  eyebrow: string;
  titlePart1?: string;
  titlePart2?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  titlePart2ClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  titlePart1,
  titlePart2,
  title,
  subtitle,
  centered = false,
  titlePart2ClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-3 mb-3.5 ${centered ? "justify-center" : ""}`}
      >
        <span className="w-8 h-[2px] bg-[#e11d48] rounded-full" />
        <span className="text-[#e11d48] font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
        <span className="w-8 h-[2px] bg-[#e11d48] rounded-full" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-[1.15] tracking-tight">
        {titlePart1 !== undefined || titlePart2 !== undefined ? (
          <>
            {titlePart1 && <span>{titlePart1} </span>}
            {titlePart2 && (
              <span
                className={
                  titlePart2ClassName ||
                  "text-[#e11d48]"
                }
              >
                {titlePart2}
              </span>
            )}
          </>
        ) : (
          <span>{title}</span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`text-slate-700 font-medium max-w-2xl text-base sm:text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${subtitleClassName || ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
