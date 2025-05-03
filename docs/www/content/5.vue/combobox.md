---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Combobox/Combobox.vue
    target: _blank
---

## Usage

::stack
    ::div{class=" p-4 overflow-visible h-full"}
    ::DemoCombobox
    ::
    ::
    ```vue
    <template>
      <Combobox
        :selected-item="selectedItem"
        :items="items"
        label="Assign to"
        @update:selected-item="handleUpdate"
      />
    </template>

    <script setup>
    const selectedItem = ref(null);

    function handleUpdate(item) {
      selectedItem.value = item;
    }

    const items = [
      { id: 1, label: 'Leslie Alexander' },
      { id: 2, label: 'Michael Jackson' },
      { id: 3, label: 'Sarah Lee' },
      { id: 4, label: 'David Johnson' },
    ];
    </script>
    ```
::

### Custom Icons

::stack
    ::div{class=" p-4 overflow-visible h-full"}
    ::DemoCombobox{custom}
    ::
    ::
    ```vue
    <template>
      <Combobox
        :selected-item="selectedItem"
        :items="items"
        label="Assign to"
        icon="ChevronDoubleDown"
        selected-icon="CheckBadge"
        @update:selected-item="handleUpdate"
      />
    </template>

    <script setup>
    const selectedItem = ref(null);

    function handleUpdate(item) {
      selectedItem.value = item;
    }

    const items = [
      { id: 1, label: 'Leslie Alexander' },
      { id: 2, label: 'Michael Jackson' },
      { id: 3, label: 'Sarah Lee' },
      { id: 4, label: 'David Johnson' },
    ];
    </script>
    ```
::

## Props

::field-group
  :field{
      name="items"
      type="Item[]"
      required
    }[Array of selectable items to choose from.]

  :field{
      name="label"
      type="string"
      required
    }[Label displayed above the selection component.]

  :field{
      name="icon"
      type="string"
    }[Optional icon displayed in the component.]

  :field{
      name="placeholder"
      type="string"
    }[Placeholder text shown when no item is selected.]

  :field{
      name="selectedIcon"
      type="string"
    }[Optional icon shown next to the selected item.]

  :field{
      name="selectedItem"
      type="Item | null"
      required
    }[Currently selected item, or `null` if none is selected.]
::
