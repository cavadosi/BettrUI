import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const AvatarVariants = cva("inline-block object-cover", {
  variants: {
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-14 h-14",
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
    size: "md",
    rounded: "md",
  },
});

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof AvatarVariants> {
  alt: string;
  src: string;
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size, rounded, src, alt, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={twMerge(AvatarVariants({ size, rounded }), className)}
        {...props}
      />
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, AvatarVariants };
