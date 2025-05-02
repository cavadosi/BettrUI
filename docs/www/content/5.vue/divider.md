---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Divider/Divider.vue
    target: _blank
---

## Usage



::tabs{variant="line"}
::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::BtrDivider{}
  ::
  ::
  ```vue
  <template>
    <Divider/>
  </template>
  ```
::

::stack{label="With Icon"}
  ::div{class="flex items-center p-4"}
  ::BtrDivider
    ::BtrIcon{name="Home" class="size-4" variant="solid"}
    ::
  ::
  ::
  ```vue
  <template>
    <Divider>
        <Icon name="Home" class="size-4" variant="solid"/>
    </Divider>
  </template>
  ```
::

::stack{label="With Label"}
  ::div{class="flex items-center p-4"}
  ::BtrDivider
    Or Continue With
  ::
  ::
  ```vue
  <template>
    <Divider>
        Or Continue With
    </Divider>
  </template>
  ```
::
::

### Size

::tabs{variant="line"}
  ::stack{label="Xs"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrDivider{size="xs"}
    ::
    ::
    ```vue
    <template>
      <Divider size="xs" />
    </template>
    ```
  ::
  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrDivider{size="sm"}
    ::
    ::
    ```vue
    <template>
      <Divider size="sm" />
    </template>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrDivider{size="md"}
    ::
    ::
    ```vue
    <template>
      <Divider size="md" />
    </template>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrDivider{size="lg"}
    ::
    ::
    ```vue
    <template>
      <Divider size="lg" />
    </template>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrDivider{size="xl"} 
    ::
    ::
    ```vue
    <template>
      <Divider size="xl" />
    </template>
    ```
  ::
::

## Props

::field-group
  :field{
      name="size"
      type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"
      default-value="'xs'"
    }[Controls the size of the Divider.]
::

