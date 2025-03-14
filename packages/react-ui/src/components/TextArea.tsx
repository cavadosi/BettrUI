import React from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextareaProps> = ({
  rows = 4,
  label,
  disabled = false,
  placeholder = "Add your comment...",
  id,
  name,
  value,
  className,
  onChange,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm/6 font-medium text-secondary-900 dark:text-secondary-100"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <textarea
          id={id}
          name={name}
          rows={rows}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={twMerge(
            "block w-full rounded-md bg-white px-3 py-1.5 text-base text-secondary-900 outline-1 outline-secondary-300 disabled:bg-secondary-100 disabled:dark:bg-secondary-950 placeholder:text-secondary-400 dark:text-secondary-100 dark:bg-transparent dark:outline-secondary-600 dark:placeholder:text-secondary-500 focus:outline-2 focus:outline-primary-600 focus:-outline-offset-2 sm:text-sm/6 disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export { TextArea };
