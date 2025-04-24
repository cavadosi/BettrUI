<template>
  <BtrTabs
    :items="icons ? itemsWithIcons : items"
    :icon-variant="iconVariant ?? null"
    class="w-full"
  >
    <template #home>
      <BtrContainer class="w-full h-20 border border-dashed" />
    </template>

    <template #profile>
      <BtrContainer class="w-full h-20 border border-dashed" />
    </template>

    <template #settings>
      <BtrContainer class="w-full h-20 border border-dashed" />
    </template>
  </BtrTabs>
</template>

<script setup lang="ts">
defineProps({
  iconVariant: {
    type: String,
    default: 'outline',
  },
  icons: {
    type: Boolean,
    default: false,
  },
});

const items = [
  { label: 'Home', slot: 'home' },
  { label: 'Profile', slot: 'profile' },
  { label: 'Settings', slot: 'settings' },
];

const itemsWithIcons = [
  { label: 'Home', slot: 'home' as const, icon: 'Home' },
  { label: 'Profile', slot: 'profile' as const, icon: 'User' },
  { label: 'Settings', slot: 'settings' as const, icon: 'Cog' },
];
</script>
