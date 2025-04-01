import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Variants for the Card component
const CardVariants = cva(
  "divide-y divide-secondary-200 overflow-hidden rounded-lg bg-secondary-50 shadow-sm",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
        rounded: "md"
    }
  },
);

export interface CardSectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const CardHeader: React.FC<CardSectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={twMerge("px-4 py-5 sm:px-6", className)} {...props}>
      {children}
    </div>
  );
};

CardHeader.displayName = "CardHeader"

// Card Content Component
const CardContent: React.FC<CardSectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={twMerge("px-4 py-5 sm:p-6", className)} {...props}>
      {children}
    </div>
  );
};

CardContent.displayName = "CardContent"

// Card Footer Component
const CardFooter: React.FC<CardSectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={twMerge("px-4 py-4 sm:px-6", className)} {...props}>
      {children}
    </div>
  );
};

CardFooter.displayName = "CardFooter"



// Main Card Component
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> & {
    Header: typeof CardHeader
    Content: typeof CardContent
    Footer: typeof CardFooter
} = ({
  rounded = "md",
  className,
  children,
  ...props
}) => {
    
  return (
    <div className={twMerge(CardVariants({ rounded }), className)} {...props}>
      {children}
    </div>
  );
};

Card.displayName = "Card"

Card.Header = CardHeader
Card.Footer = CardFooter
Card.Content = CardContent

export { Card, CardVariants };
