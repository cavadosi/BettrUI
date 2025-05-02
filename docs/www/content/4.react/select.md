---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Select/Select.tsx
    target: _blank
---

## Usage

::stack
    ::div{class=" p-4 overflow-visible h-full"}
    ::DemoSelect
    ::
    ::
    ```jsx
    export default Example = () => {
        const people = [
          { id: 1, value: 'Wade Cooper' },
          { id: 2, value: 'Arlene Mccoy' },
          { id: 3, value: 'Devon Webb' },
          { id: 4, value: 'Tom Cook' },
          { id: 5, value: 'Tanya Fox' },
          { id: 6, value: 'Hellen Schmidt' },
          { id: 7, value: 'Caroline Schultz' },
          { id: 8, value: 'Mason Heaney' },
          { id: 9, value: 'Claudie Smitham' },
          { id: 10, value: 'Emil Schaefer' },
        ];

        const [selected, setSelected] = useState(people[0])
       
        const handleChange = (value: (typeof people)[0]) => {
          setSelected(value);
        };

        return (
          <Select
            selected={selected} 
            items={people}
            onChange={handleChange}
            label="Select a user"
          />
        )
    }
    ```
::

### Custom Icons

::stack
    ::div{class=" p-4 overflow-visible h-full"}
    ::DemoSelect{custom}
    ::
    ::
    ```jsx
    export default Example = () => {
        const people = [
          { id: 1, value: 'Wade Cooper' },
          { id: 2, value: 'Arlene Mccoy' },
          { id: 3, value: 'Devon Webb' },
          { id: 4, value: 'Tom Cook' },
          { id: 5, value: 'Tanya Fox' },
          { id: 6, value: 'Hellen Schmidt' },
          { id: 7, value: 'Caroline Schultz' },
          { id: 8, value: 'Mason Heaney' },
          { id: 9, value: 'Claudie Smitham' },
          { id: 10, value: 'Emil Schaefer' },
        ];

        const [selected, setSelected] = useState(people[0])
       
        const handleChange = (value: (typeof people)[0]) => {
          setSelected(value);
        };

        return (
          <Select
            selected={selected} 
            items={people}
            onChange={handleChange}
            label="Select a user"
            icon="ChevronDown"
            selected-icon="CheckBadge"
          />
        )
    }
    ```
::

## Props

::field-group
  :field{
      name="items"
      type="SelectOption[]"
      required
    }[Array of selectable options to display in the dropdown.]

  :field{
      name="selected"
      type="SelectOption"
      required
    }[The currently selected option.]

  :field{
      name="label"
      type="string"
    }[Optional label displayed above the select component.]

  :field{
      name="icon"
      type="string"
    }[Optional icon displayed in the select input.]

  :field{
      name="selectedIcon"
      type="string"
    }[Optional icon displayed next to the selected item.]

  :field{
      name="onChange"
      type="(option: SelectOption) => void"
      required
    }[Callback function triggered when the selection changes.]
::
