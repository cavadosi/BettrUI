import React from "react";
import { Pagination, PaginationProps } from "../components/Pagination";

export default {
  title: "React/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: { control: { type: "number" } },
    max: { control: { type: "number" } },
  },
};

const DefaultTemplate = (args: React.ComponentProps<typeof Pagination>) => {
  const [currentPage, setCurrentPage] = React.useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
