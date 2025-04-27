<script setup lang="ts">
import { computed, defineProps  } from "vue";
import { twMerge } from "tailwind-merge";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  max?: number;
  className?: string;
}

const props = defineProps<PaginationProps>();

const items = computed(() => usePagination(props.totalPages, props.currentPage, props.max || 5));

function usePagination(totalPages: number, currentPage: number, max: number = 5): (number | "ellipsis")[] {
  const items: (number | "ellipsis")[] = [];

  if (totalPages <= max) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(i);
    }
    return items;
  }

  max = Math.max(5, max % 2 === 0 ? Math.floor(max / 2) * 2 - 1 : max);

  if (currentPage <= Math.floor(max / 2)) {
    const firstPages = Array.from(
      { length: Math.min(max - 2, totalPages) },
      (_, index) => index + 1
    );
    items.push(...firstPages, "ellipsis", totalPages);
    return items;
  }

  if (currentPage >= totalPages - Math.floor(max / 2)) {
    const lastPages = Array.from(
      { length: Math.min(max - 2, totalPages) },
      (_, index) => totalPages - (max - 3) + index
    );
    items.push(1, "ellipsis", ...lastPages);
    return items;
  }

  const innerPages = Array.from(
    { length: Math.min(max - 4, totalPages) },
    (_, index) => index + (currentPage - Math.floor(Math.min(max - 4, totalPages) / 2))
  );
  items.push(1, "ellipsis", ...innerPages, "ellipsis", totalPages);
  return items;
}

const goToPage = (page: number) => {
  if (page !== props.currentPage && page >= 1 && page <= props.totalPages) {
    props.onPageChange(page);
  }
};
</script>

<template>
  <nav
    aria-label="Pagination"
    :class="twMerge('isolate inline-flex -space-x-px rounded-md shadow-xs', props.className)"
  >
    <button
      :disabled="props.currentPage === 1"
      @click="goToPage(props.currentPage - 1)"
      :class="twMerge('relative inline-flex items-center rounded-l-md px-2 py-2 text-secondary-400 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50 focus:z-20 focus:outline-offset-0 dark:text-secondary-300 dark:ring-secondary-500 dark:hover:bg-background-dark/50 cursor-pointer')"
    >
      <span class="sr-only">Previous</span>
      <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
    </button>

    <template v-for="(item, idx) in items" :key="idx">
      <span
        v-if="item === 'ellipsis'"
        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary-700 ring-1 ring-secondary-300 ring-inset focus:outline-offset-0 dark:text-secondary-300 dark:ring-secondary-500 cursor-default"
      >
        ...
      </span>
      <button
        v-else
        @click="goToPage(item)"
        :aria-current="item === props.currentPage ? 'page' : undefined"
        :class="twMerge(
          'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 cursor-pointer',
          item === props.currentPage
            ? 'z-10 bg-primary-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-500'
            : 'text-secondary-900 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50 dark:text-secondary-300 dark:ring-secondary-500 dark:hover:bg-background-dark/50'
        )"
      >
        {{ item }}
      </button>
    </template>

    <button
      :disabled="props.currentPage === props.totalPages"
      @click="goToPage(props.currentPage + 1)"
      :class="twMerge('relative inline-flex items-center rounded-r-md px-2 py-2 text-secondary-400 ring-1 ring-secondary-300 ring-inset hover:bg-secondary-50 focus:z-20 focus:outline-offset-0 dark:text-secondary-300 dark:ring-secondary-500 dark:hover:bg-background-dark/50 cursor-pointer')"
    >
      <span class="sr-only">Next</span>
      <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
    </button>
  </nav>
</template>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
