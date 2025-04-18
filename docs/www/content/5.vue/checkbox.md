---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Checkbox/Checkbox.vue
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="Default"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrCheckbox 
    ::
    ::
    ```vue
    <template>
      <Checkbox 
        id="comments"
        :modelValue="value"
        v-model="value"
      />
    </template>
    ```
  ::
  ::stack{label="With label"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrCheckbox{label="Comments" description="Get notified when someone posts a comment on a posting." id="comments" } 
    ::
    ::
    ```vue
    <template>
      <Checkbox 
        label="Comments"
        description="Get notified when someone posts a comment on a posting."
        id="comments"
        :modelValue="value"
        v-model="value"
      />
    </template>
    ```
  ::
::


## Props

::field-group
  :field{
    name="label"
    type="string"
  }[The main text label displayed next to the checkbox.]

  :field{
    name="description"
    type="string"
  }[Optional helper text displayed below the label.]

  :field{
    name="id"
    type="string"
  }[Unique identifier for the checkbox input element.]

  :field{
    name="modelValue"
    type="boolean"
  }[The checked state of the checkbox. Use with `v-model` for two-way binding.]
::

