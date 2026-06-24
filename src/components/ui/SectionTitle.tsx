import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "start";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-start"}`}
    >
      {eyebrow && (
        <div className={`section-label ${align === "center" ? "justify-center" : ""} ${light ? "text-gold" : ""}`}>
          <span className="h-px w-8 bg-gold/60" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
