---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Input/Input.vue
    target: _blank
---

## Usage



::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::BtrInput{label="Email" type="email" placeholder="you@example.com" description="We'll only use this for spam."}
  ::
  ::
  ```vue
  <template>
    <Input 
        label="Email" 
        type="email" 
        placeholder="you@example.com" 
        description="We'll only use this for spam."
    />
  </template>
  ```
::

### Error

::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::BtrInput{label="Password" error="Password is not valid" type="password" placeholder="Enter your password" description="Make sure it's at least 8 characters long."}
  ::
  ::
  ```vue
  <template>
    <Input 
        label="Password" 
        type="password" 
        placeholder="Enter your password" 
        description="Make sure it's at least 8 characters long."
        error="Password is not valid"
    />
  </template>
  ```
::

### Loading

::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::BtrInput{label="Password" loading type="password" placeholder="Enter your password" description="Make sure it's at least 8 characters long."}
  ::
  ::
  ```vue
  <template>
    <Input 
        label="Password" 
        type="password" 
        placeholder="Enter your password" 
        description="Make sure it's at least 8 characters long."
        loading
    />
  </template>
  ```
::



## Props

::field-group
  :field{
      name="modelValue"
      type="string"
      required
    }[The value of the input field, used with `v-model`.]

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

  :field{
      name="class"
      type="string"
    }[Additional CSS classes for custom styling.]
::

