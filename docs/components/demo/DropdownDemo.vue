<template>
  <BtrDropdown
    v-if="multisection"
    icon="Cog"
    label="Options"
    header-title="Settings"
    header-description="Manage your preferences"
    button-variant="secondary"
    button-size="sm"
    button-rounded="md"
    :sections="multiSections"
  />
  <BtrDropdown
    v-else
    icon="Cog"
    label="Options"
    button-variant="secondary"
    button-size="sm"
    button-rounded="md"
    :sections="sections"
  />
</template>

<script setup lang="ts">
defineProps({
  multisection: {
    type: Boolean,
    default: false,
  },
});
const sections = [
  {
    items: [
      { id: 1, label: 'Profile' },
      { id: 2, label: 'Settings' },
      { id: 3, label: 'Logout' },
    ],
  },
];

const multiSections = [
  {
    items: [
      {
        id: 1,
        label: 'Account',
        icon: 'User',
      },
      {
        id: 2,
        label: 'Preferences',
        icon: 'Cog',
      },
    ],
  },
  {
    items: [
      {
        id: 3,
        label: 'Logout',
        icon: 'Logout',
      },
    ],
  },
];
</script>
