import * as React from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  max?: number; // Added max prop to control the maximum pages shown
}

function getPaginationItems(
  totalPages: number,
  currentPage: number,
  max: number = 5, // Default max to 5 if not provided
): (number | "ellipsis")[] {
  const items: (number | "ellipsis")[] = [];

  // If the total number of pages is less than or equal to max, show all pages
  if (totalPages <= max) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(i);
    }
    return items;
  }

  max = Math.max(5, max)
  
  // If the current page is near the beginning, show the first pages dynamically based on max, and ellipses at the end
  if (currentPage <= Math.floor(max / 2)) {
    const firstPages = Array.from(
      { length: Math.min(max - 2, totalPages) },
      (_, index) => index + 1,
    );
    items.push(...firstPages, "ellipsis", totalPages);
    return items;
  }
  
  
  // If the current page is near the end, show the last pages dynamically based on max, and ellipses at the beginning
  if (currentPage >= totalPages - Math.floor(max / 2)) {
    const lastPages = Array.from(
      { length: Math.min(max - 2, totalPages) },
      (_, index) => totalPages - (max - 3) + index,
    );
    items.push(1, "ellipsis", ...lastPages);
    return items;
  }

  // Otherwise, show current page and surrounding pages with ellipses
  const innerPages = Array.from(
    { length: Math.min(max-4, totalPages) },
    (_, index) => index + (currentPage - Math.floor(Math.min(max-4, totalPages)/2)) ,
  );
  items.push(1, "ellipsis", ...innerPages, "ellipsis", totalPages);

  return items;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
  max = 5,
  ...props
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const items = getPaginationItems(totalPages, currentPage, max);

  return (
    <nav
      aria-label="Pagination"
      className={twMerge(
        "isolate inline-flex -space-x-px rounded-md shadow-xs",
        className,
      )}
      {...props}
    >
      {/* Previous Button */}
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-secondary-400 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
      </button>

      {/* Page Items */}
      {items.map((item, idx) =>
        item === "ellipsis" ? (
          <span
            key={`ellipsis-${idx}`}
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary-700 ring-1 ring-secondary-300 ring-inset focus:outline-offset-0"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() => handleClick(item as number)}
            aria-current={item === currentPage ? "page" : undefined}
            className={twMerge(
              "relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0",
              item === currentPage
                ? "z-10 bg-primary-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                : "text-secondary-900 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50",
              item !== 1 &&
                item !== 2 &&
                item !== currentPage &&
                item !== totalPages - 1 &&
                item !== totalPages &&
                "hidden md:inline-flex",
            )}
          >
            {item}
          </button>
        ),
      )}

      {/* Next Button */}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-secondary-400 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
      </button>
    </nav>
  );
};

Pagination.displayName = "Pagination";
