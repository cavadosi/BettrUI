---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Pagination/Pagination.tsx
    target: _blank
---

## Usage

::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::DemoPagination
  ::
  ::
  ```jsx
  export default Example = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    function handlePageChange(page: number) {
        setCurrentPage(page)
    }
  
    return (
        <BtrPagination
          :current-page="currentPage"
          :on-page-change="handlePageChange"
          :max="5"
          :total-pages="10"
        />
    )
  }
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

  :field{
      name="className"
      type="string"
    }[Additional CSS classes for styling the pagination container.]
::


