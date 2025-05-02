---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Select/Select.vue
    target: _blank
---

## Usage

::stack
    ::div{class=" p-4 overflow-visible h-full"}
    ::DemoSelect
    ::
    ::
    ```vue
    <template>
      <Select :model-value="selected" label="Select a user" :items="people" />
    </template>

    <script setup lang="ts">
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

    const selected = ref(people[0]);
    </script>
    ```
::

### Custom Icons

::stack
    ::div{class=" p-4 overflow-visible h-full"}
    ::DemoSelect{custom}
    ::
    ::
    ```vue
    <template>
      <Select
        :model-value="selected"
        label="Select a user"
        :items="people"
        icon="ChevronDown"
        selected-icon="CheckBadge"
      />
    </template>

    <script setup lang="ts">
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

    const selected = ref(people[0]);
    </script>
    ```
::

## Props

::field-group
  :field{
      name="modelValue"
      type="SelectOption"
      required
    }[The currently selected option, used with `v-model`.]

  :field{
      name="items"
      type="SelectOption[]"
      required
    }[Array of selectable options to display in the dropdown.]

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
::
