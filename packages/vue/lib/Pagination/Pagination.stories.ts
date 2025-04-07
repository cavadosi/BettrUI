// Pagination.stories.ts
import type { Meta, StoryObj } from "@storybook/vue3";
import Pagination from "./Pagination.vue";
import { ref } from "vue";

const meta: Meta<typeof Pagination> = {
  title: "Vue/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: {
      control: { type: "number" },
      defaultValue: 10,
    },
    max: {
      control: { type: "number" },
      defaultValue: 5,
    },
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
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(args.currentPage);

      const handlePageChange = (page: number) => {
        currentPage.value = page;
      };

      return { args, currentPage, handlePageChange };
    },
    template: `
      <Pagination
        v-bind="args"
        :current-page="currentPage"
        @update:current-page="handlePageChange"
        :onPageChange="handlePageChange"
      />
    `,
  }),
};

export const FullCustomization: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    max: 5,
  },
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(args.currentPage);

      const handlePageChange = (page: number) => {
        currentPage.value = page;
      };

      return { args, currentPage, handlePageChange };
    },
    template: `
      <Pagination
        v-bind="args"
        :current-page="currentPage"
        :onPageChange="handlePageChange"
      >
        <div class="custom-pagination flex items-center space-x-2">
          <button
            @click="handlePageChange(currentPage - 1)"
            :disabled="currentPage === 1"
            class="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Custom Prev
          </button>
          <span class="text-lg">
            Page {{ currentPage }} of {{ args.totalPages }}
          </span>
          <button
            @click="handlePageChange(currentPage + 1)"
            :disabled="currentPage === args.totalPages"
            class="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Custom Next
          </button>
        </div>
      </Pagination>
    `,
  }),
};

export const PartialCustomization: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    max: 5,
  },
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(args.currentPage);

      const handlePageChange = (page: number) => {
        currentPage.value = page;
      };

      return { args, currentPage, handlePageChange };
    },
    template: `
      <Pagination
        v-bind="args"
        :current-page="currentPage"
        :onPageChange="handlePageChange"
      >
        <Pagination.PrevButton :current-page="currentPage" :onPageChange="handlePageChange" />
        <Pagination.PageButton
          v-for="item in 3"
          :key="item"
          :page="item"
          :current-page="currentPage"
          :onPageChange="handlePageChange"
          class="border-0 mx-1 rounded-lg"
        />
        <Pagination.Elipse :key="999" class="rounded-lg mx-1 border-0" />
        <Pagination.NextButton
          :current-page="currentPage"
          :total-pages="args.totalPages"
          :onPageChange="handlePageChange"
        />
      </Pagination>
    `,
  }),
};
