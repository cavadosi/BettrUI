---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Skeleton/Skeleton.tsx
    target: _blank
---

## Usage

::stack{label="Default"}
  ::div{class=" flex items-center justify-center p-4"}
  ::BtrSkeleton{class="size-12"} 
  ::
  ::
  ```jsx
  <>
    <Skeleton className="size-12" />
  </>
  ```
::

### Rounded

::tabs{variant="line"}
  ::stack{label="None"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="none" class="size-12"}
    ::
    ::
    ```jsx
    <>
      <Skeleton rounded="none" className="size-12" />
    </>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="sm" class="size-12"}
    ::
    ::
    ```jsx
    <>
      <Skeleton rounded="sm" className="size-12" />
    </>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="md" class="size-12"}
    ::
    ::
    ```jsx
    <>
      <Skeleton rounded="md" className="size-12" />
    </>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="lg" class="size-12"}
    ::
    ::
    ```jsx
    <>
      <Skeleton rounded="lg" className="size-12" />
    </>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="xl" class="size-12"} 
    ::
    ::
    ```jsx
    <>
      <Skeleton rounded="xl" className="size-12" />
    </>
    ```
  ::

  ::stack{label="Full"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrSkeleton{rounded="full" class="size-12"}
    ::
    ::
    ```jsx
    <>
      <Skeleton rounded="full" className="size-12" />
    </>
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
  
  :field{
      name="className"
      type="string"
    }[Additional Tailwind or custom classes to apply to the skeleton.]
::

