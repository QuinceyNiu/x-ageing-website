import { cn } from "@/lib/cn";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
        {
          "bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-light hover:to-primary":
            variant === "primary",
          "border border-primary/60 text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_16px_rgba(6,182,212,0.2)]":
            variant === "outline",
          "text-primary hover:bg-primary/10": variant === "ghost",
        },
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-2.5 text-sm": size === "md",
          "px-8 py-3 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
