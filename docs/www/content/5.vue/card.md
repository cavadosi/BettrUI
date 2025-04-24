---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Card/Card.vue
    target: _blank
---

## Usage

### Default usage

Use the content slot to display the main body of the card. This is ideal for simple use cases where no additional structure like headers or footers is needed.

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::DemoCard
  ::
  ::
  ```vue
  <template>
    <Card>
      <template #content>
        <-- Your content goes here -->
      </template>
    </Card>
  <template/>
  ```
::

### Advanced usage

This **Card** component provides a flexible layout through named slots: header, content, and footer. Each slot is optional and only rendered if it's provided, allowing you to customize the structure as needed.

- **header** slot: Use this to display a heading or title for the card.
- **content** slot: The main body of the card. Ideal for text, inputs, or any primary content.
- **footer** slot: Useful for actions like buttons or additional links.

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::DemoCard{custom}
  ::
  ::
  ```vue
  <template>
    <Card>
      <template #header>
        Card Header
      </template>
      <template #content>
        <-- Your content goes here -->
      </template>
      <template #footer>
        <Button class="block w-full">
          Click Me
        </Button>
      </template>
    </Card>
  <template/>
  ```
::

### Rounded

::tabs{variant="line"}
  ::stack{label="None"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="none"}
    ::
    ::
    ```vue
    <template>
        <Card rounded="none">
          <template #content>
              <-- Your content goes here -->
          </template>
        </Card>
    <template/>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="sm"}
    ::
    ::
    ```vue
    <template>
        <Card rounded="sm">
          <template #content>
              <-- Your content goes here -->
          </template>
        </Card>
    <template/>
    ```
  ::

  ::stack{label="Md"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="md"}
    ::
    ::
    ```vue
    <template>
        <Card rounded="md">
          <template #content>
              <-- Your content goes here -->
          </template>
        </Card>
    <template/>
    ```
  ::

  ::stack{label="Lg"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="lg"}
    ::
    ::
    ```vue
    <template>
        <Card rounded="lg">
          <template #content>
              <-- Your content goes here -->
          </template>
        </Card>
    <template/>
    ```
  ::

  ::stack{label="XL"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="xl"}
    ::
    ::
    ```vue
    <template>
        <Card rounded="xl">
          <template #content>
              <-- Your content goes here -->
          </template>
        </Card>
    <template/>
    ```
  ::
::

## Props

::field-group
  :field{name="rounded" type="'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'" default-value="'md'"}[Card border radius]
::