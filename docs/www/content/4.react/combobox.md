---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Combobox/Combobox.tsx
    target: _blank
---

## Usage

::stack
    ::div{class=" p-4 overflow-visible h-full"}
    ::DemoCombobox
    ::
    ::
    ```jsx
    export default Example = () => {
        const [selectedItem, setSelectedItem] = useState<Item | null>(null);

        const items = [
          { id: 1, label: 'Leslie Alexander' },
          { id: 2, label: 'Michael Jackson' },
          { id: 3, label: 'Sarah Lee' },
          { id: 4, label: 'David Johnson' },
        ];

        const handleChange = (item: Item | null) => {
          setSelectedItem(item);
        };

        return (
          <Combobox
            selected-item={selectedItem}
            items={items}
            label="Assign to"
            onChange={handleUpdate}
          />
        )
    }
    ```
::

### Custom Icons

::stack
    ::div{class=" p-4 overflow-visible h-full"}
    ::DemoCombobox{custom}
    ::
    ::
    ```vue
    export default Example = () => {
        const [selectedItem, setSelectedItem] = useState<Item | null>(null);

        const items = [
          { id: 1, label: 'Leslie Alexander' },
          { id: 2, label: 'Michael Jackson' },
          { id: 3, label: 'Sarah Lee' },
          { id: 4, label: 'David Johnson' },
        ];

        const handleChange = (item: Item | null) => {
          setSelectedItem(item);
        };

        return (
          <Combobox
            selected-item={selectedItem}
            items={items}
            label="Assign to"
            icon="ChevronDoubleDown"
            selected-icon="CheckBadge"
            onChange={handleUpdate}
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
    }[Array of items to display in the combobox options.]

  :field{
      name="label"
      type="string"
      required
    }[Label displayed above the combobox input.]

  :field{
      name="icon"
      type="string"
    }[Optional icon displayed in the combobox input.]

  :field{
      name="selectedIcon"
      type="string"
    }[Optional icon displayed next to the selected item.]

  :field{
      name="selectedItem"
      type="Item | null"
      required
    }[Currently selected item, or `null` if none is selected.]

  :field{
      name="onChange"
      type="(item: Item | null) => void"
      required
    }[Callback triggered when the selected item changes.]
::
