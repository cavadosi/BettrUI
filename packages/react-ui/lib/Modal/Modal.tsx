"use client";

import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { Icon } from "../Icon/Icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
} = ({ isOpen, onClose, className, children, ...props }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={twMerge("relative z-10", className)}
      {...props}
    >
      <DialogBackdrop className="fixed inset-0 bg-secondary-700/75 transition-opacity dark:bg-background-dark/75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel
            className={twMerge(
              "fixed bg-background-light divide-y divide-secondary-200 flex flex-col focus:outline-none sm:my-8 sm:w-full sm:max-w-lg dark:bg-background-dark dark:divide-secondary-700",
              className
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  onClose,
  icon = "XMark",
  className,
  children,
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-1.5 p-4 sm:px-6 min-h-16 min-w-[300px] dark:text-white",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
        {title}
      </h3>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-xl text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300"
      >
        <Icon name={icon} className="size-5"/>
      </button>
      {children}
    </div>
  );
};

interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(
        "flex-1 overflow-y-auto p-4 sm:p-6 min-w-[300px] dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge("flex items-center gap-1.5 p-4 sm:px-6 min-w-[300px] dark:text-white", className)}
      {...props}
    >
      {children}
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
