"use client";

import React from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Icon } from "./Icon";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

interface SelectOption {
  id: number;
  value: string;
}
interface SelectProps {
  items: SelectOption[];
  selected: SelectOption;
  label?: string;
  icon?: string;
  selectedIcon?: string;
  onChange: (option: SelectOption) => void;
  className: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  items,
  selected,
  icon,
  selectedIcon,
  onChange,
  className,
  ...props
}) => {
  return (
    <Listbox value={selected} onChange={onChange} {...props}>
      {label && (
        <span className="block text-sm/6 font-medium text-primary-900 dark:text-secondary-50">
          {label}
        </span>
      )}
      <div className="relative mt-2">
        <ListboxButton
          className={twMerge(
            "grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-primary-900 outline-1 -outline-offset-1 outline-secondary-300",
            "focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6",
            "dark:bg-secondary-950 dark:text-secondary-100 dark:outline-secondary-700 dark:ring-1 dark:ring-black/40",
            className,
          )}
        >
          <span className="col-start-1 row-start-1 truncate pr-6">
            {selected.value}
          </span>
          <Icon
            name={icon || "ChevronUpDown"}
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-secondary-500 sm:size-4 dark:text-secondary-300"
          />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm dark:bg-secondary-950 dark:ring-gray-700">
          {items.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              className="group relative cursor-default py-2 pr-9 pl-3 text-secondary-900 select-none data-focus:bg-primary-600 data-focus:text-white data-focus:outline-hidden dark:text-secondary-100 dark:data-focus:bg-primary-500 dark:data-focus:text-white"
            >
              <span className="block truncate font-normal group-data-selected:font-semibold">
                {item.value}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600 group-not-data-selected:hidden group-data-focus:text-white dark:text-secondary-100 dark:group-data-focus:text-white">
                <Icon name={selectedIcon || "Check"} aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export { Select };
