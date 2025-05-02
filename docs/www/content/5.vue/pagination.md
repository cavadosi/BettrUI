---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Pagination/Pagination.vue
    target: _blank
---

## Usage

::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::DemoPagination
  ::
  ::
  ```vue
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

  ```
::


## Props

::field-group
  :field{
      name="totalPages"
      type="number"
      required
    }[Total number of pages available.]

  :field{
      name="currentPage"
      type="number"
      required
    }[The currently active page.]

  :field{
      name="onPageChange"
      type="(page: number) => void"
      required
    }[Callback triggered when the page is changed.]

  :field{
      name="max"
      type="number"
    }[Maximum number of pagination buttons to show.]

::


