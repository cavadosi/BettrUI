---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Input/Input.tsx
    target: _blank
---

## Usage



::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::BtrInput{label="Email" type="email" placeholder="you@example.com" description="We'll only use this for spam."}
  ::
  ::
  ```jsx
  <>
    <Input 
        label="Email" 
        type="email" 
        placeholder="you@example.com" 
        description="We'll only use this for spam."
    />
  </>
  ```
::

### Error

::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::BtrInput{label="Password" error="Password is not valid" type="password" placeholder="Enter your password" description="Make sure it's at least 8 characters long."}
  ::
  ::
  ```jsx
  <>
    <Input 
        label="Password" 
        type="password" 
        placeholder="Enter your password" 
        description="Make sure it's at least 8 characters long."
        error="Password is not valid"
    />
  </>
  ```
::

### Loading

::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::BtrInput{label="Password" loading type="password" placeholder="Enter your password" description="Make sure it's at least 8 characters long."}
  ::
  ::
  ```jsx
  <>
    <Input 
        label="Password" 
        type="password" 
        placeholder="Enter your password" 
        description="Make sure it's at least 8 characters long."
        loading
    />
  </>
  ```
::



## Props

::field-group
  :field{
      name="id"
      type="string"
    }[The unique identifier for the input element.]

  :field{
      name="type"
      type="string"
      default-value="'text'"
    }[The type of the input (e.g., text, email, password).]

  :field{
      name="label"
      type="string"
      required
    }[The label displayed above the input field.]

  :field{
      name="description"
      type="string"
    }[Optional description shown below the label.]

  :field{
      name="error"
      type="string"
    }[Displays an error message below the input.]

  :field{
      name="loading"
      type="boolean"
      default-value="false"
    }[Displays a loading spinner or indicator.]

  :field{
      name="leadingIcon"
      type="string"
    }[Optional icon displayed on the left side of the input.]

  :field{
      name="trailingIcon"
      type="string"
    }[Optional icon displayed on the right side of the input.]

  :field{
      name="placeholder"
      type="string"
    }[Placeholder text shown inside the input.]
::

