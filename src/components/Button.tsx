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
    "bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-400",
  secondary:
    "border border-slate-200 bg-slate-100 text-slate-900 hover:bg-slate-200/70 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 backdrop-blur",
  ghost: "text-slate-900 hover:text-brand-500 dark:text-white dark:hover:text-brand-300"
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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";

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
