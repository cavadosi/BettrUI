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
    <Button>
      Click Me
    </Button>
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
      <Button variant="solid">
        Click Me
      </Button>
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
      <Button variant="outline">
        Click Me
      </Button>
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
      <Button variant="link">
        Click Me
      </Button>
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
      <Button variant="soft">
        Click Me
      </Button>
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
      <Button variant="ghost">
        Click Me
      </Button>
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
      <Button variant="secondary">
        Click Me
      </Button>
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
      <Button rounded="none">
        Click Me
      </Button>
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
      <Button rounded="sm">
        Click Me
      </Button>
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
      <Button rounded="md">
        Click Me
      </Button>
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
      <Button rounded="lg">
        Click Me
      </Button>
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
      <Button rounded="xl">
        Click Me
      </Button>
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
      <Button rounded="full">
        Click Me
      </Button>
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
      <Button size="xs">
        Click Me
      </Button>
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
      <Button size="sm">
        Click Me
      </Button>
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
      <Button size="md">
        Click Me
      </Button>
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
      <Button size="lg">
        Click Me
      </Button>
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
      <Button size="xl">
        Click Me
      </Button>
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