import { type MouseEventHandler, type ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  to?: string;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-ink text-cream hover:bg-ink-soft border border-ink",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/5",
  ghost:
    "bg-transparent text-ink hover:text-sage-600 border border-transparent"
};

const Button = ({
  children,
  variant = "primary",
  href,
  to,
  className = "",
  target,
  rel,
  type = "button",
  onClick
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-none px-7 py-3.5 text-[13px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
