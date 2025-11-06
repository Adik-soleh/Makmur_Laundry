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
    "bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-400 transition-colors",
  secondary:
    "bg-white/10 text-white border border-white/15 hover:bg-white/15 backdrop-blur transition-colors",
  ghost: "text-white hover:text-brand-300 transition-colors"
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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold";

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
