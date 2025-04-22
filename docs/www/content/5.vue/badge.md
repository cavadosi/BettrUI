---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Badge/Badge.vue
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
    ```vue
    <template>
      <Badge>
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Border"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{border} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge border>
        Badge
      </Badge>
    </template>
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
    ```vue
    <template>
      <Badge variant="primary">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Secondary"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="secondary"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="secondary">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Gray"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="gray"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="gray">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Red"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrBadge{variant="red"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="red">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Yellow"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="yellow"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="yellow">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Green"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="green"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="green">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Blue"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="blue"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="blue">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Indigo"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="indigo"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="indigo">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Purple"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="purple"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="purple">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Pink"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{variant="pink"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge variant="pink">
        Badge
      </Badge>
    </template>
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
    ```vue
    <template>
      <Badge rounded="none">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{rounded="sm"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge rounded="sm">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Md"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{rounded="md"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge rounded="md">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="L"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrBadge{rounded="lg"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge rounded="lg">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="XL"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{rounded="xl"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge rounded="xl">
        Badge
      </Badge>
    </template>
    ```
  ::

  ::stack{label="Full"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrBadge{rounded="full"} 
      Badge
    ::
    ::
    ```vue
    <template>
      <Badge rounded="full">
        Badge
      </Badge>
    </template>
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
