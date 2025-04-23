---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Container/Container.vue
    target: _blank
---

## Usage

::stack
    ::div{class=" p-4"}
    ::BtrContainer{class="w-full h-10 border border-dashed"}
    ::
    ::
    ```vue
    <template>
      <Container class="w-full h-10 border border-dashed" />
    </template>
    ```
::

## Props

::field-group
  :field{
    name="class"
    type="string"
  }[Optional CSS class that will be applied to the main accordion container.]
::

