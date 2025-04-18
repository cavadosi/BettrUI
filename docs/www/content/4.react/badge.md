---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react/lib/Badge/Badge.tsx
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="Default"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge>
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Border"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{border} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge border>
        Badge
      </Badge>
    </>
    ```
  ::
::

### Variants

::tabs{variant="card"}
  ::stack{label="Primary"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="primary"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="primary">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Secondary"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="secondary"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="secondary">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Gray"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="gray"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="gray">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Red"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrBadge{variant="red"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="red">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Yellow"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="yellow"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="yellow">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Green"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="green"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="green">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Blue"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="blue"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="blue">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Indigo"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="indigo"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="indigo">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Purple"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="purple"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="purple">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Pink"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="pink"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge variant="pink">
        Badge
      </Badge>
    </>
    ```
  ::
::

### Rounded

::tabs{variant="line"}
  ::stack{label="None"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrBadge{rounded="none"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge rounded="none">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{rounded="sm"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge rounded="sm">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{rounded="md"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge rounded="md">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrBadge{rounded="lg"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge rounded="lg">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{rounded="xl"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge rounded="xl">
        Badge
      </Badge>
    </>
    ```
  ::

  ::stack{label="Full"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{rounded="full"} 
      Badge
    ::
    ::
    ```jsx
    <>
      <Badge rounded="full">
        Badge
      </Badge>
    </>
    ```
  ::
::

## Props

::field-group
  :field{
    name="variant"
    type="'primary' | 'secondary' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'"
    default-value="'primary'"
  }[Visual style of the badge.]

  :field{
    name="rounded"
    type="'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'"
    default-value="'md'"
  }[Controls the border radius of the badge.]

  :field{
    name="border"
    type="boolean"
    default-value="false"
  }[Show the border of the badge]
::
