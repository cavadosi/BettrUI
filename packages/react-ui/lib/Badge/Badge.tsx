import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const BadgeVariants = cva(
  "inline-flex items-center px-2 py-1 text-xs font-medium ring-inset",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-100/80 text-primary-600 ring-primary-500/10 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-primary-400/20",
        secondary:
          "bg-secondary-100/80 text-secondary-600 ring-secondary-500/10 dark:bg-secondary-400/10 dark:text-secondary-400 dark:ring-secondary-400/20",
        gray: "bg-gray-100/80 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20",
        red: "bg-red-100/80 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20",
        yellow:
          "bg-yellow-100/80 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20",
        green:
          "bg-green-100/80 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20",
        blue: "bg-blue-100/80 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30",
        indigo:
          "bg-indigo-100/80 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30",
        purple:
          "bg-purple-100/80 text-purple-700 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30",
        pink: "bg-pink-100/80 text-pink-700 ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      border: {
        true: "ring-1",
        false: "ring-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      rounded: "md",
      border: true,
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof BadgeVariants> {
  border?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, rounded, border = true, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={twMerge(
          BadgeVariants({
            variant,
            rounded,
            border: border ? true : false,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export { Badge, BadgeVariants };
