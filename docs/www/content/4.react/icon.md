---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Icon/Icon.tsx
    target: _blank
---

## Usage

::stack{label="Default"}
  ::div{class=" flex items-center justify-center p-4"}
  ::BtrIcon{class="size-8 text-primary-500" name="Home"} 
  ::
  ::
  ```jsx
  <>
    <Icon name="Home" class="size-8 text-primary-500" />
  </>
  ```
::

### Variants

::tabs{variant="line"}
  ::stack{label="Outline"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrIcon{class="size-8" name="Home" variant="outline"}
    ::
    ::
    ```jsx
    <>
      <Icon variant="outline" name="Home" class="size-8" />
    </>
    ```
  ::

  ::stack{label="Solid"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrIcon{class="size-8" name="Home" variant="solid"}
    ::
    ::
    ```jsx
    <>
      <Icon variant="solid" name="Home" class="size-8" />
    </>
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

