---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Toggle/Toggle.tsx
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="Default"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrToggle{:modelValue="false" v-model="enabled"}
    ::
    ::
    ```jsx
    export default function Example() {
      const [enabled, setEnabled] = useState(false)

      const handleChange = (value: boolean) => {
        setEnabled(value);
      };

      return (
        <Toggle enabled={enabled} onChange={handleChange} />
      )
    }
    ```
  ::
  
  ::stack{label="With Icons"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrToggle{:modelValue="false" v-model="enabled" activeIcon="Sun" inactiveIcon="Moon"}
    ::
    ::
    ```jsx
    export default function Example() {
      const [enabled, setEnabled] = useState(false)

      const handleChange = (value: boolean) => {
        setEnabled(value);
      };

      return (
        <Toggle 
          enabled={enabled} 
          onChange={handleChange} 
          activeIcon="Sun"
          inactiveIcon="Moon"
        />
      )
    }
    ```
  ::

  ::stack{label="With Label"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrToggle{:modelValue="false" v-model="enabled" label="Enable notifications" description="Receive updates and alerts"}
    ::
    ::
    ```jsx
    export default function Example() {
      const [enabled, setEnabled] = useState(false)

      const handleChange = (value: boolean) => {
        setEnabled(value);
      };

      return (
        <Toggle
          enabled={enabled}
          onChange={handleChange} 
          label="Enable notifications" 
          description="Receive updates and alerts"
        />
      )
    }
    ```
  ::
::


## Props

::field-group
  :field{
    name="modelValue"
    type="boolean"
    required=true
  }[Controls whether the toggle is active or not.]

  :field{
    name="label"
    type="string"
  }[Label text displayed next to the toggle.]

  :field{
    name="description"
    type="string"
  }[Optional description shown below the label.]

  :field{
    name="disabled"
    type="boolean"
    default-value="false"
  }[Disables the toggle when set to true.]

  :field{
    name="activeIcon"
    type="string"
  }[Name of the icon displayed when toggle is active.]

  :field{
    name="inactiveIcon"
    type="string"
  }[Name of the icon displayed when toggle is inactive.]

  :field{
    name="class"
    type="string"
  }[Additional classes to customize the appearance of the toggle.]
::
