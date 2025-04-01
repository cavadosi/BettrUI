import React from "react";
import { Tab, TabGroup, TabList, TabPanel } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Tabs = ({ className, children }: TabsProps) => {
  return (
    <TabGroup className={className}>
      <div className="space-y-4">{children}</div>
    </TabGroup>
  );
};

const TabsList: React.FC<TabListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <TabList
      className={twMerge(
        "flex p-1.5 rounded-md bg-secondary-100 dark:bg-secondary-950",
        className
      )}
      {...props}
    >
      {children}
    </TabList>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({
  className,
  children,
}: TabsContentProps) => {
  return <TabPanel className={className}>{children}</TabPanel>;
};

interface TabsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const TabsButton: React.FC<TabsButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Tab
      className={twMerge(
        "w-full py-2 text-sm leading-5 font-medium rounded-md text-secondary-700 dark:text-secondary-300 transition-colors duration-100 cursor-pointer data-[selected]:bg-primary-500 data-[selected]:text-white dark:data-[selected]:bg-primary-600 ",
        className
      )}
      {...props}
    >
      {children}
    </Tab>
  );
};

Tabs.List = TabsList;
Tabs.Content = TabsContent;
Tabs.Button = TabsButton;

export { Tabs };
