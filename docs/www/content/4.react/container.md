---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Container/Container.tsx
    target: _blank
---

## Usage

::stack
    ::div{class=" p-4"}
    ::BtrContainer{class="w-full h-10 border border-dashed"}
    ::
    ::
    ```jsx
    <>
      <Container class="w-full h-10 border border-dashed" />
    </>
    ```
::

## Props

::field-group
  :field{
    name="className"
    type="string"
  }[Optional CSS class that will be applied to the main accordion container.]
::