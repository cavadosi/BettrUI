import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const SkeletonVariants = cva(
  "animate-pulse bg-secondary-100 dark:bg-secondary-800",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
  },
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SkeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, rounded }, ref) => {
    return (
      <div
        className={twMerge(SkeletonVariants({ rounded }), className)}
        ref={ref}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

export { Skeleton, SkeletonVariants };
