import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define button variants and sizes using cva
const ButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-indigo-600 text-white shadow hover:bg-indigo-500",
        link: "text-indigo-600 underline-offset-4 hover:underline",
        outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-100",
        soft: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
        ghost: "text-indigo-600 hover:bg-indigo-100",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-2 py-1 text-sm",
        md: "px-2.5 py-1.5 text-sm",
        lg: "px-3 py-2 text-sm",
        xl: "px-3.5 py-2.5 text-sm",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <button
        className={ButtonVariants({ variant, size, rounded, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, ButtonVariants };
