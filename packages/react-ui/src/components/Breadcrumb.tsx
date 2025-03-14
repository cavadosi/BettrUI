import React from "react";
import { Icon } from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const breadcrumbVariants = cva("flex items-center space-x-4", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Page = {
  name?: string;
  icon?: string;
  href: string;
  current: boolean;
};

interface BreadcrumbLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  page: Page;
  className?: string;
}

const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  page,
  className,
  ...props
}) => (
  <a
    href={page.href}
    aria-current={page.current ? "page" : undefined}
    {...props}
    className={twMerge(
      "ml-4 font-medium flex gap-2 items-center justify-center text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-50",
      className,
    )}
  >
    {page.icon && (
      <Icon
        name={page.icon}
        aria-hidden="true"
        variant="solid"
        className="size-5 shrink-0"
      />
    )}
    {page.name}
  </a>
);

interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants> {
  pages: Page[];
  icon?: string;
  className?: string;
  children?: (page: Page) => React.ReactNode;
}

BreadcrumbLink.displayName = "BreadcrumbLink";

const Breadcrumb: React.FC<BreadcrumbProps> & {
  Link: typeof BreadcrumbLink;
} = ({
  pages,
  size = "md",
  icon = "ChevronRight",
  className,
  children,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={twMerge("flex items-center", className)}
      {...props}
    >
      <ol role="list" className={twMerge(breadcrumbVariants({ size }))}>
        {pages.map((page, index) => (
          <li key={page.name || index} className="flex items-center">
            {index > 0 && (
              <Icon
                name={icon}
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-secondary-400"
              />
            )}
            {children ? <>{children(page)}</> : <BreadcrumbLink page={page} />}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.Link = BreadcrumbLink;

export { Breadcrumb, breadcrumbVariants };
