"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Icon } from "./Icon";
import { twMerge } from "tailwind-merge";
import { usePopper } from "react-popper";
import { Button } from "./Button"; // Import the Button component
import type { Placement } from "@popperjs/core";

interface DropdownItem {
  id: number;
  label: string;
  onClick: () => void;
  icon?: string;
}

interface DropdownSection {
  items: DropdownItem[];
}

interface DropdownProps {
  label: string;
  sections: DropdownSection[];
  icon?: string;
  headerTitle?: string;
  headerDescription?: string;
  className?: string;

  placement?: Placement;
  offset?: number;

  // Button variants
  buttonVariant?: "solid" | "link" | "outline" | "soft" | "ghost" | "secondary";
  buttonSize?: "xs" | "sm" | "md" | "lg" | "xl";
  buttonRounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  sections,
  icon = "ChevronDown",
  headerTitle,
  headerDescription,
  className,
  placement,
  offset,
  buttonVariant = "secondary",
  buttonSize = "sm",
  buttonRounded = "md",
}) => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null,
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement || "bottom-end",
    modifiers: [
      {
        name: "preventOverflow",
        options: { boundary: "clippingParents", padding: 8 },
      },
      {
        name: "flip",
        options: { fallbackPlacements: ["top-end", "bottom-end"] },
      },
      { name: "offset", options: { offset: [0, offset || 0] } },
    ],
  });

  return (
    <Menu
      as="div"
      className={twMerge("relative inline-block text-left", className)}
    >
      <div ref={setReferenceElement}>
        <MenuButton>
          <Button
            variant={buttonVariant} 
            size={buttonSize} 
            rounded={buttonRounded}
            className="w-full justify-center gap-x-1.5"
          >
            {label}
            <Icon
              name={icon}
              aria-hidden="true"
              className="-mr-1 size-5 text-secondary-400 dark:text-secondary-50/40"
            />
          </Button>
        </MenuButton>
      </div>

      <MenuItems
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        transition
        className="z-10 mt-2 w-56 origin-top-right divide-y divide-secondary-100 dark:divide-secondary-700 rounded-md bg-white dark:bg-secondary-950 ring-1 shadow-lg ring-secondary-950/5 dark:ring-secondary-50/20 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {headerTitle && (
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
              {headerTitle}
            </p>
            {headerDescription && (
              <p className="truncate text-sm text-secondary-700 dark:text-secondary-300">
                {headerDescription}
              </p>
            )}
          </div>
        )}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="py-1">
            {section.items.map((item) => (
              <MenuItem key={item.id}>
                {({ active }) => (
                  <button
                    onClick={item.onClick}
                    className={twMerge(
                      "group flex items-center w-full px-4 py-2 text-left text-sm",
                      active
                        ? "bg-secondary-100 text-secondary-900 dark:bg-secondary-700 dark:text-secondary-100"
                        : "text-secondary-700 dark:text-secondary-300",
                    )}
                  >
                    {item.icon && (
                      <Icon
                        name={item.icon}
                        aria-hidden="true"
                        className="mr-3 size-5 text-secondary-400 group-data-focus:text-secondary-500 dark:text-secondary-300 dark:group-data-focus:text-secondary-300"
                      />
                    )}
                    {item.label}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
};

export { Dropdown };
