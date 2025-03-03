import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
          variant === "default" && "bg-white text-black hover:bg-gray-100",
          variant === "secondary" && "bg-gray-900 text-white hover:bg-gray-800",
          variant === "outline" && "border border-gray-700 bg-transparent hover:bg-gray-900",
          variant === "ghost" && "bg-transparent hover:bg-gray-900",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-8 px-3 text-sm",
          size === "lg" && "h-12 px-6",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button"; 