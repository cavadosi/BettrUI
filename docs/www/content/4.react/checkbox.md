---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Checkbox/Checkbox.tsx
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="Default"}
    ::div{class=" flex items-center justify-center p-4"}
    ::BtrCheckbox 
    ::
    ::
    ```jsx
    <>
      <Checkbox 
        id="comments"
      />
    </>
    ```
  ::
  ::stack{label="With label"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrCheckbox{label="Comments" description="Get notified when someone posts a comment on a posting." id="comments" } 
    ::
    ::
    ```jsx
    <>
      <Checkbox 
        label="Comments"
        description="Get notified when someone posts a comment on a posting."
        id="comments"
      />
    </>
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
::

