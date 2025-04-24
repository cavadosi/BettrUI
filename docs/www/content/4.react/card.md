---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Card/Card.tsx
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
  ```jsx
  <>
    <Card>
      <Card.Content>
        <-- Your content goes here -->
      </Card.Content>
    </Card>
  </>
  ```
::

### Advanced usage

This **Card** component provides a flexible layout through nested components: header, content, and footer. Each component is optional and only rendered if it's provided, allowing you to customize the structure as needed.

- **Header**: Use this to display a heading or title for the card.
- **Content**: The main body of the card. Ideal for text, inputs, or any primary content.
- **Footer**: Useful for actions like buttons or additional links.

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::DemoCard{custom}
  ::
  ::
  ```jsx
  <>
    <Card>
      <Card.Header>
        Card Header
      </Card.Header>
      <Card.Content>
        <-- Your content goes here -->
      </Card.Content>
      <Card.Footer>
        <Button class="block w-full">
          Click Me
        </Button>
      </Card.Footer>
    </Card>
  </>
  ```
::

### Rounded

::tabs{variant="line"}
  ::stack{label="None"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="none"}
    ::
    ::
    ```jsx
    <>
      <Card rounded="none">
        <Card.Content>
          <-- Your content goes here -->
        </Card.Content>
      </Card>
    </>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="sm"}
    ::
    ::
    ```jsx
    <>
      <Card rounded="sm">
        <Card.Content>
          <-- Your content goes here -->
        </Card.Content>
      </Card>
    </>
    ```
  ::

  ::stack{label="Md"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="md"}
    ::
    ::
    ```jsx
    <>
      <Card rounded="md">
        <Card.Content>
          <-- Your content goes here -->
        </Card.Content>
      </Card>
    </>
    ```
  ::

  ::stack{label="Lg"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="lg"}
    ::
    ::
    ```jsx
    <>
      <Card rounded="lg">
        <Card.Content>
          <-- Your content goes here -->
        </Card.Content>
      </Card>
    </>
    ```
  ::

  ::stack{label="XL"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoCard{rounded="xl"}
    ::
    ::
    ```jsx
    <>
      <Card rounded="xl">
        <Card.Content>
          <-- Your content goes here -->
        </Card.Content>
      </Card>
    </>
    ```
  ::
::

## Props

::field-group
  :field{name="rounded" type="'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'" default-value="'md'"}[Card border radius]
::