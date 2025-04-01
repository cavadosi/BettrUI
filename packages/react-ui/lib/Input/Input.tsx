import React from "react";
import { Icon } from "../Icon/Icon";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description: string;
  error?: string;
  loading?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  description,
  error,
  loading,
  type = "text",
  id,
  className,
  leadingIcon,
  trailingIcon,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-secondary-900 dark:text-secondary-100"
      >
        {label}
      </label>
      <div className="mt-2 relative grid grid-cols-1">
        <div className="flex items-center">
          <input
            id={id}
            name={id}
            type={type}
            aria-describedby={`${id}-description`}
            aria-invalid={error ? "true" : "false"}
            className={twMerge(
              "col-start-1 row-start-1 block w-full rounded-md bg-white px-3 py-1.5 text-base text-secondary-900 outline-1 -outline-offset-1 dark:bg-transparent dark:text-secondary-200 dark:outline-secondary-700",
              error
                ? "outline-red-300 placeholder:text-red-300 focus:outline-red-600 dark:outline-red-600 dark:placeholder:text-red-400"
                : "outline-secondary-300 placeholder:text-secondary-400 focus:outline-primary-600 dark:outline-secondary-500 dark:placeholder:text-secondary-500 dark:focus:outline-primary-400",
              " focus:outline-2 focus:-outline-offset-2 disabled:cursor-not-allowed disabled:bg-secondary-50 disabled:text-secondary-500 disabled:outline-secondary-200 dark:disabled:bg-secondary-950 dark:disabled:text-secondary-400 sm:text-sm",
              leadingIcon ? "pl-10" : "",
              className
            )}
            disabled={loading}
            {...props}
          />
          {leadingIcon && (
            <Icon
              name={leadingIcon}
              aria-hidden="true"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400 dark:text-secondary-500"
            />
          )}
          {trailingIcon && !loading && (
            <Icon
              name={trailingIcon}
              aria-hidden="true"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400 dark:text-secondary-500"
            />
          )}
          {loading && (
            <Icon
              name="ArrowPath"
              aria-hidden="true"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400 dark:text-secondary-500 animate-spin"
            />
          )}
        </div>
        {error && (
          <Icon
            name="ExclamationCircle"
            aria-hidden="true"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 dark:text-red-400"
          />
        )}
      </div>
      {description && (
        <p id={`${id}-description`} className="mt-2 text-sm text-secondary-500 dark:text-secondary-400">
          {description}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export { Input };
