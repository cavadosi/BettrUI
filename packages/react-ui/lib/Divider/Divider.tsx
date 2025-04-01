import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const DividerVariants = cva(
  "border-secondary-100 dark:border-secondary-900 w-full",
  {
    variants: {
      size: {
        xs: "border-[0.5px]",
        sm: "border-[1px]",
        md: "border-[1.5px]",
        lg: "border-[2px]",
        xl: "border-[3px]",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  },
);

interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof DividerVariants> {
  icon?: string;
  label?: string;
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({
  size = "xs",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "flex w-full flex-row items-center align-center text-center",
        className
      )}
      {...props}
    >
      <div aria-hidden="true" className="flex items-center w-full">
        <div
          className={twMerge(
            DividerVariants({ size })
          )}
        />
      </div>
      {children && (
        <>
          <div className="relative flex justify-center">
            <span className="px-2 flex whitespace-nowrap text-sm text-secondary-300 dark:text-secondary-400 ">
              {children}
            </span>
          </div>
          <div aria-hidden="true" className="w-full inset-0 flex items-center">
            <div
              className={twMerge(
                DividerVariants({ size })
              )}
            />
          </div>
        </>
      )}
    </div>
  );
};

Divider.displayName = "Divider";

export { Divider, DividerVariants };
