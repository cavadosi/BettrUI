"use client";

import React from "react";
import { Icon } from "../Icon/Icon";
import { Field, Label, Switch } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

interface ToggleProps {
  label?: string;
  description?: string;
  activeIcon?: string;
  inactiveIcon?: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  className: string;
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  description,
  activeIcon,
  inactiveIcon,
  enabled,
  onChange,
  className,
  ...props
}) => {
  return (
    <Field className="flex items-start" {...props}>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={twMerge(
          "group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-secondary-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-hidden data-checked:bg-primary-600",
          "dark:bg-secondary-600 dark:data-checked:bg-primary-500 dark:focus:ring-primary-400 dark:focus:ring-offset-secondary-900",
          className
        )}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={twMerge(
            "pointer-events-none inline-block size-5 transform rounded-full bg-background-light ring-0 shadow-sm transition duration-200 ease-in-out group-data-checked:translate-x-5",
            "dark:bg-background-dark "
          )}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-checked:opacity-0 group-data-checked:duration-100 group-data-checked:ease-out"
          >
            {inactiveIcon && (
              <Icon name={inactiveIcon} variant="solid" className="size-3 text-secondary-400 dark:text-secondary-300" />
            )}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-checked:opacity-100 group-data-checked:duration-200 group-data-checked:ease-in"
          >
            {activeIcon && (
              <Icon name={activeIcon} variant="solid" className="size-3 text-primary-600 dark:text-primary-500" />
            )}
          </span>
        </span>
      </Switch>
      {(label || description) && (
        <Label as="span" className="flex flex-col ml-3 text-sm">
          {label && (
            <span className="font-medium text-secondary-900 dark:text-primary-100">{label}</span>
          )}
          {description && (
            <span className="text-secondary-500 dark:text-secondary-400">{description}</span>
          )}
        </Label>
      )}
    </Field>
  );
};

export { Toggle };
