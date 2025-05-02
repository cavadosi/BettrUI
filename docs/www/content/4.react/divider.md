---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Divider/Divider.tsx
    target: _blank
---

## Usage



::tabs{variant="line"}
::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::BtrDivider{}
  ::
  ::
  ```jsx
  <>
    <Divider/>
  </>
  ```
::

::stack{label="With Icon"}
  ::div{class="flex items-center p-4"}
  ::BtrDivider
    ::BtrIcon{name="Home" class="size-4" variant="solid"}
    ::
  ::
  ::
  ```jsx
  <>
    <Divider>
        <Icon name="Home" class="size-4" variant="solid"/>
    </Divider>
  </>
  ```
::

::stack{label="With Label"}
  ::div{class="flex items-center p-4"}
  ::BtrDivider
    Or Continue With
  ::
  ::
  ```jsx
  <>
    <Divider>
        Or Continue With
    </Divider>
  </>
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
    ```jsx
    <>
      <Divider size="xs" />
    </>
    ```
  ::
  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrDivider{size="sm"}
    ::
    ::
    ```jsx
    <>
      <Divider size="sm" />
    </>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrDivider{size="md"}
    ::
    ::
    ```jsx
    <>
      <Divider size="md" />
    </>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrDivider{size="lg"}
    ::
    ::
    ```jsx
    <>
      <Divider size="lg" />
    </>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrDivider{size="xl"} 
    ::
    ::
    ```jsx
    <>
      <Divider size="xl" />
    </>
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

