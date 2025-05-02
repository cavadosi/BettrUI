<template>
  <BtrPagination
    :current-page="currentPage"
    :on-page-change="handlePageChange"
    :max="5"
    :total-pages="10"
    @update:current-page="handlePageChange"
  />
</template>

<script setup lang="ts">
const currentPage = ref(1);

function handlePageChange(page: number) {
  currentPage.value = page;
}
</script>
