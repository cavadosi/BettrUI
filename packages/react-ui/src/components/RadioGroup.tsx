import React from "react";
import { twMerge } from "tailwind-merge";

type Item = {
  id: string;
  label: string;
  description: string;
  value: string;
};

interface RadioGroupProps {
  items: Item[];
  label: string;
  description: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  label,
  description,
  value,
  onChange,
  className,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <fieldset
      aria-label={label}
      className={twMerge(
        className,
        "dark:text-gray-100", // Text color in dark mode
        "dark:border-secondary-600" // Border color in dark mode
      )}
    >
      <legend className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
        {label}
      </legend>
      <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <div className={twMerge("space-y-5", label || description ? "mt-6" : "")}>
        {items.map((item) => (
          <div key={item.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id={item.id}
                name={label}
                type="radio"
                aria-describedby={`${item.id}-description`}
                value={item.value}
                checked={item.value === value}
                onChange={handleChange}
                className={twMerge(
                  "relative size-4 appearance-none rounded-full border border-secondary-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-secondary-300 disabled:bg-secondary-100 disabled:before:bg-secondary-400 dark:border-secondary-600 dark:bg-secondary-700 dark:checked:border-indigo-700 dark:checked:bg-indigo-700 dark:focus-visible:outline-indigo-400"
                )}
                {...props}
              />
            </div>
            <div className="ml-3 text-sm/6">
              <label
                htmlFor={item.id}
                className="font-medium text-secondary-900 dark:text-gray-100"
              >
                {item.label}
              </label>
              <p
                id={`${item.id}-description`}
                className="text-secondary-500 dark:text-secondary-400"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export { RadioGroup };
