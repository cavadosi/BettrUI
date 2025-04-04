<!-- filepath: /Users/diego/CFGS/ifp/proyecto/BetterUI/packages/vue/src/components/Icon.vue -->
<script setup lang="ts">
import * as OutlineIcons from "@heroicons/vue/24/outline";
import * as SolidIcons from "@heroicons/vue/24/solid";
import { twMerge } from "tailwind-merge";
import { computed } from "vue";

const IconVariants = {
  solid: SolidIcons,
  outline: OutlineIcons,
};

const props = defineProps<{
  name: string;
  variant?: "solid" | "outline";
  class?: string;
}>();

const IconComponent = computed(() => {
  const variant = props.variant || "outline";
  const icons = IconVariants[variant];
  return icons[`${props.name}Icon` as keyof typeof icons] ;
});

if (!IconComponent.value) {
  console.warn(`Icon "${props.name}" not found in Heroicons (${props.variant || "outline"})`);
}
</script>

<template>
  <component
    v-if="IconComponent"
    :is="IconComponent"
    :class="twMerge(props.class)"
    v-bind="$attrs"
  />
</template>