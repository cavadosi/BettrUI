---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Button/Button.vue
    target: _blank
---

## Usage

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::BtrButton
    Click Me
  ::
  ::
  ```vue
  <template>
    <BtrButton>
      Click Me
    </BtrButton>
  </template>
  ```
::

### Variants

::tabs{variant="line"}
  ::stack{label="Solid" icon="lucide:square"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="solid"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton variant="solid">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Outline" icon="lucide:square-dashed"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="outline"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton variant="outline">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Link" icon="lucide:link"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="link"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton variant="link">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Soft" icon="lucide:paintbrush"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrButton{variant="soft"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton variant="soft">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="ghost" icon="lucide:ghost"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="ghost"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton variant="ghost">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Secondary" icon="lucide:layers"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="secondary"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton variant="secondary">
        Click Me
      </BtrButton>
    </template>
    ```
  ::
::

### Rounded

::tabs{variant="line"}
  ::stack{label="None"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrButton{rounded="none"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton rounded="none">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{rounded="sm"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton rounded="sm">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{rounded="md"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton rounded="md">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrButton{rounded="lg"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton rounded="lg">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{rounded="xl"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton rounded="xl">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Full"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{rounded="full"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton rounded="full">
        Click Me
      </BtrButton>
    </template>
    ```
  ::
::

### Size

::tabs{variant="line"}
  ::stack{label="Xs"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrButton{size="xs"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton size="xs">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{size="sm"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton size="sm">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{size="md"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton size="md">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrButton{size="lg"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton size="lg">
        Click Me
      </BtrButton>
    </template>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{size="xl"}
      Click Me
    ::
    ::
    ```vue
    <template>
      <BtrButton size="xl">
        Click Me
      </BtrButton>
    </template>
    ```
  ::
::


## Props

::field-group
  :field{name="variant" type="'solid' | 'outline' | 'link' | 'soft' | 'ghost' | 'secondary'" default-value="'solid'"}
  :field{name="rounded" type="'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'" default-value="'md'"}
  :field{name="size" type="'xs' | 'sm' | 'md' | 'lg' | 'xl'" default-value="'md'"}
::