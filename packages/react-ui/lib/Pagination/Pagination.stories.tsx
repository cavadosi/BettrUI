/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Pagination, usePagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "React/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: { control: { type: "number" } },
    max: { control: { type: "number" } },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    max: 5,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);

    const handlePageChange = (page: number) => setCurrentPage(page);

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
  },
};

export const FullCustomization: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    max: 5,
  },
  render: (args) => {
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
  },
};

export const PartialCustomization: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    max: 5,
  },
  render: (args) => {
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
        {items.map((item, idx) =>
          item === "ellipsis" ? (
            <Pagination.Elipse key={idx} className="rounded-lg mx-1 border-0" />
          ) : (
            <Pagination.PageButton
              key={idx}
              page={item as number}
              className="border-0 mx-1 rounded-lg"
              {...args}
            />
          ),
        )}
        <Pagination.NextButton {...args} />
      </Pagination>
    );
  },
};
