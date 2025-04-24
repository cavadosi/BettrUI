<script setup lang="ts">
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Icon from "../Icon/Icon.vue";
import { computed } from "vue";

interface Page {
  name?: string;
  icon?: string;
  href: string;
  current: boolean;
}

const props = defineProps<{
  pages: Page[];
  size?: "sm" | "md" | "lg";
  icon?: string;
  class?: string;
}>();

const breadcrumbVariants = cva("flex items-center space-x-4", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const breadcrumbClass = computed(() =>
  twMerge("flex items-center", props.class)
);
const listClass = computed(() => breadcrumbVariants({ size: props.size }));
</script>

<template>
  <nav :class="breadcrumbClass" aria-label="Breadcrumb">
    <ol role="list" :class="listClass">
      <li
        v-for="(page, index) in pages"
        :key="page.name || index"
        class="flex items-center"
      >
        <Icon
          v-if="index > 0"
          :name="icon || 'ChevronRight'"
          aria-hidden="true"
          class="h-5 w-5 shrink-0 text-secondary-400"
        />

        <slot name="link" :page="page">
          <a
            :href="page.href"
            :aria-current="page.current ? 'page' : undefined"
            class="ml-4 font-medium flex gap-2 items-center justify-center text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-50"
          >
            <Icon
              v-if="page.icon"
              :name="page.icon"
              aria-hidden="true"
              variant="solid"
              class="size-5 shrink-0"
            />
            {{ page.name }}
          </a>
        </slot>
      </li>
    </ol>
  </nav>
</template>
