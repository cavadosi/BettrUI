import React from "react";
import { Pagination, usePagination } from "../components/Pagination";

export default {
  title: "React/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: { control: { type: "number" } },
    max: { control: { type: "number" } },
  },
};

// Default Story: Uses the default layout of Pagination
const DefaultTemplate = (args: React.ComponentProps<typeof Pagination>) => {
  const [currentPage, setCurrentPage] = React.useState(args.currentPage);
  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
  max: 5,
};

// FullCustomization Story: Replace the entire layout with custom children
const FullCustomTemplate = (args: React.ComponentProps<typeof Pagination>) => {
  const [currentPage, setCurrentPage] = React.useState(args.currentPage);
  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    >
      <div className="custom-pagination flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Custom Prev
        </button>
        <span className="text-lg">
          Page {currentPage} of {args.totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === args.totalPages}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Custom Next
        </button>
      </div>
    </Pagination>
  );
};

export const FullCustomization = FullCustomTemplate.bind({});
FullCustomization.args = {
  totalPages: 10,
  currentPage: 1,
  max: 5,
};

// PartialCustomization Story: Replace only the Prev and Next buttons while keeping default page buttons
const PartialCustomizationTemplate = (
  args: React.ComponentProps<typeof Pagination>,
) => {
  const [currentPage, setCurrentPage] = React.useState(args.currentPage);
  const handlePageChange = (page: number) => setCurrentPage(page);

  const items = usePagination(args.totalPages, currentPage, args.max);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    >
      <Pagination.PrevButton {...args} />
      {items.map((item, i) =>
        item === "ellipsis" ? (
          <Pagination.Elipse key="idx" className="rounded-lg mx-1 border-0" />
        ) : (
          <Pagination.PageButton
            key={i}
            page={item as number}
            className="border-0 mx-1 rounded-lg "
            {...args}
          />
        ),
      )}
      <Pagination.NextButton {...args} />
    </Pagination>
  );
};

export const PartialCustomization = PartialCustomizationTemplate.bind({});
PartialCustomization.args = {
  totalPages: 10,
  currentPage: 1,
  max: 5,
};
