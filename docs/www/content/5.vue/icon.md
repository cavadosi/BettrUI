---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Icon/Icon.vue
    target: _blank
---

## Usage

This component uses any icon from [Heroicons](https://heroicons.com).

::stack{label="Default"}
  ::div{class=" flex items-center justify-center p-4"}
  ::BtrIcon{class="size-8 text-primary-500" name="Home"} 
  ::
  ::
  ```vue
  <template>
    <Icon name="Home" class="size-8 text-primary-500" />
  </template>
  ```
::

### Variants

::tabs{variant="line"}
  ::stack{label="Outline"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrIcon{class="size-8" name="Home" variant="outline"}
    ::
    ::
    ```vue
    <template>
      <Icon variant="outline" name="Home" class="size-8" />
    </template>
    ```
  ::

  ::stack{label="Solid"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrIcon{class="size-8" name="Home" variant="solid"}
    ::
    ::
    ```vue
    <template>
      <Icon variant="solid" name="Home" class="size-8" />
    </template>
    ```
  ::
::

## Props

::field-group
  :field{
    name="name"
    type="string"
    required=true
  }[The name of the icon to render. Should match the name from the icon set.]

  :field{
    name="variant"
    type="'solid' | 'outline'"
    default-value="'outline'"
  }[Sets the style of the icon, either solid or outline.]

  :field{
    name="class"
    type="string"
  }[Additional Tailwind or custom classes to apply to the icon.]

::

