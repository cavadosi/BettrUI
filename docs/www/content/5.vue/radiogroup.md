---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/RadioGroup/RadioGroup.vue
    target: _blank
---

## Usage

::stack
    ::div{class=" p-4"}
    ::DemoRadioGroup
    ::
    ::
    ```vue
    <template>
      <RadioGroup
        v-model="selected"
        label="Plan"
        description="Choose the plan that fits your team."
        :items="items"
      />
    </template>

    <script setup>
    const selected = ref(null);

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
    </script>
    ```
::

## Props

::field-group
  :field{
      name="items"
      type="{ id: string; label: string; description: string; value: string; }[]"
      required
    }[Array of selectable items, each with an ID, label, description, and value.]

  :field{
      name="label"
      type="string"
    }[Optional label displayed above the component.]

  :field{
      name="description"
      type="string"
    }[Optional description displayed below the label.]

  :field{
      name="modelValue"
      type="string"
      required
    }[Currently selected value, used with `v-model`.]
::

