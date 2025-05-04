---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/RadioGroup/RadioGroup.tsx
    target: _blank
---

## Usage

::stack
    ::div{class=" p-4"}
    ::DemoRadioGroup
    ::
    ::
    ```jsx
    export default Example = () => {
        const [selected, setSelected] = useState(null);
        
        const items = [
          {
            id: 'small',
            label: 'Small',
            description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
            value: 'small',
          },
          {
            id: 'medium',
            label: 'Medium',
            description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage',
            value: 'medium',
          },
          {
            id: 'large',
            label: 'Large',
            description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage',
            value: 'large',
          },
        ];

        const handleChange = (newSelected: string) => {
          setSelected(newSelected);
        };

        return (
            <RadioGroup 
              label="Plan"
              description="Choose the plan that fits your team."
              items={items}
              onChange={handleChange}
            />
        )
    }
    ```
::

## Props

::field-group
  :field{
      name="items"
      type="Item[]"
      required
    }[Array of radio options, each with `id`, `label`, `description`, and `value`.]

  :field{
      name="label"
      type="string"
      required
    }[Label displayed above the radio group.]

  :field{
      name="description"
      type="string"
      required
    }[Additional description displayed below the label.]

  :field{
      name="value"
      type="string"
      required
    }[Currently selected radio option value.]

  :field{
      name="onChange"
      type="(value: string) => void"
      required
    }[Callback function triggered when a different radio option is selected.]
::

