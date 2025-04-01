import React from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  id,
  className,
  ...props
}) => {
  return (
    <div className="flex gap-3">
      <div className="flex h-6 shrink-0 items-center">
        <div className="group grid size-4 grid-cols-1">
          <input
            id={id}
            name={id}
            type="checkbox"
            aria-describedby={`${id}-description`}
            className={twMerge(
              "col-start-1 row-start-1 appearance-none rounded-sm border border-secondary-300 bg-white checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-secondary-300 disabled:bg-secondary-100 disabled:checked:bg-secondary-100 forced-colors:appearance-auto",
              "dark:border-secondary-600 dark:bg-secondary-700 dark:checked:border-primary-500 dark:checked:bg-primary-500 dark:focus-visible:outline-primary-500 dark:disabled:border-secondary-600 dark:disabled:bg-secondary-600 dark:disabled:checked:bg-secondary-600",
              className
            )}
            {...props}
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-checked:opacity-100"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-indeterminate:opacity-100"
            />
          </svg>
        </div>
      </div>
      <div className="text-sm/6">
        <label htmlFor={id} className="font-medium text-secondary-900 dark:text-secondary-100">
          {label}
        </label>
        <p id={`${id}-description`} className="text-secondary-500 dark:text-secondary-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export { Checkbox };
