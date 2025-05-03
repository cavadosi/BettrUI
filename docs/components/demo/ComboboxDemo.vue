<template>
  <BtrCombobox
    v-if="custom"
    :selected-item="selectedItem"
    :items="items"
    label="Assign to"
    icon="ChevronDoubleDown"
    selected-icon="CheckBadge"
    @update:selected-item="handleUpdate"
  />
  <BtrCombobox
    v-else
    :selected-item="selectedItem"
    :items="items"
    label="Assign to"
    @update:selected-item="handleUpdate"
  />
</template>

<script setup>
defineProps({
  custom: {
    type: Boolean,
    default: false,
  },
});
const selectedItem = ref(null);

function handleUpdate(item) {
  selectedItem.value = item;
}

const items = [
  { id: 1, label: 'Leslie Alexander' },
  { id: 2, label: 'Michael Jackson' },
  { id: 3, label: 'Sarah Lee' },
  { id: 4, label: 'David Johnson' },
];
</script>
