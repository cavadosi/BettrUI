import * as React from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  max?: number;
  customPrev?: React.ReactNode;
  customNext?: React.ReactNode;
  children?: React.ReactNode;
}

function usePagination(
  totalPages: number,
  currentPage: number,
  max: number = 5 // Default max to 5 if not provided
): (number | "ellipsis")[] {
  const items: (number | "ellipsis")[] = [];

  // If the total number of pages is less than or equal to max, show all pages
  if (totalPages <= max) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(i);
    }
    return items;
  }

  max = Math.max(5, max % 2 === 0 ? Math.floor(max / 2) * 2 - 1 : max);

  // If the current page is near the beginning, show the first pages dynamically based on max, and ellipses at the end
  if (currentPage <= Math.floor(max / 2)) {
    const firstPages = Array.from(
      { length: Math.min(max - 2, totalPages) },
      (_, index) => index + 1
    );
    items.push(...firstPages, "ellipsis", totalPages);
    return items;
  }

  // If the current page is near the end, show the last pages dynamically based on max, and ellipses at the beginning
  if (currentPage >= totalPages - Math.floor(max / 2)) {
    const lastPages = Array.from(
      { length: Math.min(max - 2, totalPages) },
      (_, index) => totalPages - (max - 3) + index
    );
    items.push(1, "ellipsis", ...lastPages);
    return items;
  }

  // Otherwise, show current page and surrounding pages with ellipses
  const innerPages = Array.from(
    { length: Math.min(max - 4, totalPages) },
    (_, index) =>
      index + (currentPage - Math.floor(Math.min(max - 4, totalPages) / 2))
  );
  items.push(1, "ellipsis", ...innerPages, "ellipsis", totalPages);

  return items;
}

// Default subcomponents
interface PrevNextProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}
const PrevButton: React.FC<PrevNextProps> = ({
  currentPage,
  onPageChange,
  className,
}) => (
  <button
    onClick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className={twMerge(
      "relative inline-flex items-center rounded-l-md px-2 py-2 text-secondary-400 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50  focus:z-20 focus:outline-offset-0 dark:text-secondary-300 dark:ring-secondary-500 dark:hover:bg-secondary-950/50 cursor-pointer",
      className
    )}
  >
    <span className="sr-only">Previous</span>
    <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
  </button>
);

const NextButton: React.FC<PrevNextProps & { totalPages: number }> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => (
  <button
    onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={twMerge(
      "relative inline-flex items-center rounded-r-md px-2 py-2 text-secondary-400 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50 focus:z-20 focus:outline-offset-0 dark:text-secondary-300 dark:ring-secondary-500 dark:hover:bg-secondary-950/50 cursor-pointer",
      className
    )}
  >
    <span className="sr-only">Next</span>
    <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
  </button>
);

interface PageButtonProps {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}
const PageButton: React.FC<PageButtonProps> = ({
  page,
  currentPage,
  onPageChange,
  className,
}) => (
  <button
    onClick={() => onPageChange(page)}
    aria-current={page === currentPage ? "page" : undefined}
    className={twMerge(
      "relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 cursor-pointer",
      page === currentPage
        ? "z-10 bg-primary-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-500"
        : "text-secondary-900 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50 dark:text-secondary-300 dark:ring-secondary-500 dark:hover:bg-secondary-950/50",
      className
    )}
  >
    {page}
  </button>
);

interface ElipseProps {
  key: number;
  label?: string;
  className?: string;
}

const Elipse: React.FC<ElipseProps> = ({ key, label = "...", className }) => (
  <span
    key={`ellipsis-${key}`}
    className={twMerge(
      "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary-700 ring-1 ring-secondary-300 ring-inset focus:outline-offset-0 dark:text-secondary-300 dark:ring-secondary-500 cursor-default",
      className
    )}
  >
    {label}
  </span>
);

const Pagination: React.FC<PaginationProps> & {
  PrevButton: typeof PrevButton;
  NextButton: typeof NextButton;
  PageButton: typeof PageButton;
  Elipse: typeof Elipse;
} = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
  max = 5,
  // children,
  ...props
}) => {
  const items = usePagination(totalPages, currentPage, max);

  const renderDefault = () => (
    <>
      <PrevButton currentPage={currentPage} onPageChange={onPageChange} />
      {items.map((item, idx) =>
        item === "ellipsis" ? (
          <Elipse key={idx} />
        ) : (
          <PageButton
            key={item}
            page={item as number}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        )
      )}
      <NextButton
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );

  return (
    <nav
      aria-label="Pagination"
      className={twMerge(
        "isolate inline-flex -space-x-px rounded-md shadow-xs",
        className
      )}
      {...props}
    >
      {renderDefault()}
      {/* {children
        ? React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<any>, {
                  currentPage,
                  totalPages,
                  onPageChange,
                })
              : child
          )
        : renderDefault()} */}
    </nav>
  );
};

Pagination.displayName = "Pagination";

// Expose the default compound components.
Pagination.PrevButton = PrevButton;
Pagination.NextButton = NextButton;
Pagination.PageButton = PageButton;
Pagination.Elipse = Elipse;

export { Pagination, usePagination };
