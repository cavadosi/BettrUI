import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const ButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "bg-primary-600 text-white shadow hover:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-300",
        link: "text-primary-600 underline-offset-4 hover:underline dark:text-primary-400",
        outline:
          "border border-primary-600 text-primary-600 hover:bg-primary-100 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-300/20",
        soft: "bg-primary-100 text-primary-600 hover:bg-primary-200 dark:bg-primary-800 dark:text-primary-300 dark:hover:bg-primary-700",
        ghost:
          "text-primary-600 hover:bg-primary-100 dark:text-primary-400 dark:hover:bg-primary-800/20",
        secondary:
          "bg-white text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
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
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      rounded: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <button
        className={twMerge(
          ButtonVariants({ variant, size, rounded }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, ButtonVariants };
