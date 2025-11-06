import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = ""
}: SectionHeadingProps) => {
  const alignment =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start ml-0";

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl ${className}`.trim()}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="text-base text-slate-300">{description}</p>}
    </div>
  );
};

export default SectionHeading;
