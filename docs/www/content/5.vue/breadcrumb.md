---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Breadcrumb/Breadcrumb.vue
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="Default"}
    ::div{class="flex items-center justify-center p-4 w-full"}
    ::DemoBreadcrumb
    ::
    ::
    ```vue
    <template>
      <Breadcrumb :pages="pages" />
    </template>

    <script setup>
    const pages = [
      { icon: 'Home', href: '#', current: false },
      { name: 'Projects', href: '#', current: false },
      { name: 'Project Nero', href: '#', current: true },
    ];
    </script>
    ```
  ::

  ::stack{label="Custom Icons"}
    ::div{class="flex items-center justify-center p-4 w-full"}
    ::DemoBreadcrumb{custom}
    ::
    ::
    ```vue
    <template>
      <Breadcrumb  icon="ArrowRight" :pages="pages" />
    </template>

    <script setup>
    const pages = [
      { icon: 'Home', href: '#', current: false },
      { name: 'Projects', href: '#', current: false },
      { name: 'Project Nero', href: '#', current: true },
    ];
    </script>
    ```
  ::
::

## Props

::field-group
  :field{
      name="pages"
      type="Page[]"
      required
    }[Array of pages representing the breadcrumb trail.]

  :field{
      name="size"
      type='"sm" | "md" | "lg"'
      default-value='"md"'
    }[Controls the size of the breadcrumb text.]

  :field{
      name="icon"
      type="string"
    }[Optional icon to display before the breadcrumb.]
::
