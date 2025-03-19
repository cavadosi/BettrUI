import React, { HTMLAttributes } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { Icon } from "./Icon";

interface AccordionItem {
  id: number;
  label: string;
  description: string;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  openIcon?: string;
  closedIcon?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  openIcon = "MinusSmall",
  closedIcon = "PlusSmall",
  className,
  ...props
}: AccordionProps) => {
  return (
    <div className={twMerge("mx-auto max-w-4xl", className)} {...props}>
      <dl className="divide-y divide-secondary-900/10 dark:divide-secondary-50/10">
        {items.map((item) => (
          <Disclosure
            key={item.id}
            as="div"
            className="py-6 first:pt-0 last:pb-0"
          >
            <dt>
              <DisclosureButton className="group flex w-full items-start justify-between text-left text-secondary-900 dark:text-secondary-50">
                <span className="text-base/7 font-semibold">{item.label}</span>
                <span className="ml-6 flex h-7 items-center">
                  <Icon
                    name={closedIcon}
                    aria-hidden="true"
                    className="w-6 h-6 group-data-open:hidden"
                  />
                  <Icon
                    name={openIcon}
                    aria-hidden="true"
                    className="w-6 h-6 group-not-data-open:hidden"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" className="mt-2 pr-12">
              <p className="text-base/7 text-secondary-600 dark:text-secondary-300">
                {item.description}
              </p>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </dl>
    </div>
  );
};

export default Accordion;
