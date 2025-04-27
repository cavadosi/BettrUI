"use client";

import React, { useState } from "react";
import {
  Combobox as HeadlessCombobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import { Icon } from "../Icon/Icon";

interface Item {
  id: number;
  label: string;
}

interface ComboboxProps {
  items: Item[];
  label: string;
  icon?: string;
  selectedIcon?: string;
  selectedItem: Item | null;
  onChange: (item: Item | null) => void;
}

const Combobox: React.FC<ComboboxProps> = ({
  items,
  label,
  icon = "ChevronUpDown",
  selectedIcon = "Check",
  selectedItem,
  onChange,
}) => {
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          item.label.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <HeadlessCombobox
      as="div"
      value={selectedItem}
      onChange={(item) => {
        setQuery("");
        onChange(item); // Use onChange prop to update selected person
      }}
    >
      <Label className="block text-sm font-medium text-secondary-900 dark:text-secondary-50">
        {label}
      </Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-background-light py-1.5 pr-12 pl-3 text-base text-secondary-900 outline-1 -outline-offset-1 outline-secondary-300 placeholder:text-secondary-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 dark:bg-background-dark dark:text-secondary-100 dark:outline-secondary-800 dark:placeholder:text-secondary-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(item: Item | null) => item?.label || ""}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <Icon
            name={icon}
            className="w-5 h-5 text-secondary-400 dark:text-secondary-500"
            aria-hidden="true"
          />
        </ComboboxButton>

        {filteredItems.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-background-light py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm dark:bg-background-dark dark:ring-secondary-800">
            {filteredItems.map((item) => (
              <ComboboxOption
                key={item.id}
                value={item}
                className="group relative cursor-default py-2 pr-9 pl-3 text-secondary-900 select-none hover:bg-primary-500 hover:text-white focus:bg-primary-600 focus:text-white dark:text-secondary-100 dark:hover:bg-primary-500 dark:hover:text-white dark:focus:bg-primary-600 dark:focus:text-white"
              >
                <span className="block truncate group-focus:font-semibold">
                  {item.label}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-primary-500 group-data-focus:text-white group-data-selected:flex dark:text-primary-400 dark:group-data-focus:text-white dark:group-data-selected:flex">
                  <Icon
                    name={selectedIcon}
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </HeadlessCombobox>
  );
};

export { Combobox };
