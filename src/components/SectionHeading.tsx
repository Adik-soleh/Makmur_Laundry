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
  align = "left",
  className = ""
}: SectionHeadingProps) => {
  const alignment =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-6 ${alignment} ${className}`.trim()}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-8 bg-ink/40" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-normal leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-[56px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
