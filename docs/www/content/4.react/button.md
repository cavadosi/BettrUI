---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Button/Button.tsx
    target: _blank
---

## Usage

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::BtrButton
    Click Me
  ::
  ::
  ```jsx
  <>
    <Button>
      Click Me
    </Button>
  </>
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
    ```jsx
    <>
      <Button variant="solid">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Outline" icon="lucide:square-dashed"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="outline"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button variant="outline">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Link" icon="lucide:link"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="link"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button variant="link">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Soft" icon="lucide:paintbrush"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrButton{variant="soft"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button variant="soft">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="ghost" icon="lucide:ghost"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="ghost"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button variant="ghost">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Secondary" icon="lucide:layers"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{variant="secondary"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button variant="secondary">
        Click Me
      </Button>
    </>
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
    ```jsx
    <>
      <Button rounded="none">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{rounded="sm"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button rounded="sm">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{rounded="md"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button rounded="md">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrButton{rounded="lg"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button rounded="lg">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{rounded="xl"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button rounded="xl">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Full"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{rounded="full"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button rounded="full">
        Click Me
      </Button>
    </>
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
    ```jsx
    <>
      <Button size="xs">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{size="sm"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button size="sm">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{size="md"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button size="md">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrButton{size="lg"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button size="lg">
        Click Me
      </Button>
    </>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrButton{size="xl"}
      Click Me
    ::
    ::
    ```jsx
    <>
      <Button size="xl">
        Click Me
      </Button>
    </>
    ```
  ::
::


## Props

::field-group
  :field{name="variant" type="'solid' | 'outline' | 'link' | 'soft' | 'ghost' | 'secondary'" default-value="'solid'"}
  :field{name="rounded" type="'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'" default-value="'md'"}
  :field{name="size" type="'xs' | 'sm' | 'md' | 'lg' | 'xl'" default-value="'md'"}
::