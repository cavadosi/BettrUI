---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Skeleton/Skeleton.vue
    target: _blank
---

## Usage

::stack{label="Default"}
  ::div{class=" flex items-center justify-center p-4"}
  ::BtrSkeleton{class="size-12"} 
  ::
  ::
  ```vue
  <template>
    <Skeleton class="size-12" />
  </template>
  ```
::

### Rounded

::tabs{variant="line"}
  ::stack{label="None"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="none" class="size-12"}
    ::
    ::
    ```vue
    <template>
      <Skeleton rounded="none" class="size-12" />
    </template>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="sm" class="size-12"}
    ::
    ::
    ```vue
    <template>
      <Skeleton rounded="sm" class="size-12" />
    </template>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="md" class="size-12"}
    ::
    ::
    ```vue
    <template>
      <Skeleton rounded="md" class="size-12" />
    </template>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="lg" class="size-12"}
    ::
    ::
    ```vue
    <template>
      <Skeleton rounded="lg" class="size-12" />
    </template>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="xl" class="size-12"} 
    ::
    ::
    ```vue
    <template>
      <Skeleton rounded="xl" class="size-12" />
    </template>
    ```
  ::

  ::stack{label="Full"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="full" class="size-12"}
    ::
    ::
    ```vue
    <template>
      <Skeleton rounded="full" class="size-12" />
    </template>
    ```
  ::
::

## Props

::field-group
  :field{
      name="rounded"
      type="'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'"
      default-value="'md'"
    }[Controls the border radius of the skeleton.]
::

