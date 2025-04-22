---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Toggle/Toggle.vue
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="Default"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrToggle{v-model="false"}
    ::
    ::
    ```vue
    <script setup>
    import { ref } from 'vue'

    const enabled = ref(false)
    </script>

    <template>
      <Toggle v-model="enabled" />
    </template>
    ```
  ::
  
  ::stack{label="With Icons"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrToggle{v-model="enabled" activeIcon="Sun" inactiveIcon="Moon"}
    ::
    ::
    ```vue
    <script setup>
    import { ref } from 'vue'

    const enabled = ref(false)
    </script>

    <template>
      <Toggle 
        :modelValue="enabled"
        v-model="enabled"
        activeIcon="Sun"
        inactiveIcon="Moon" 
      />
    </template>
    ```
  ::

  ::stack{label="With Label"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrToggle{v-model="enabled" label="Enable notifications" description="Receive updates and alerts"}
    ::
    ::
    ```vue
    <script setup>
    import { ref } from 'vue'

    const enabled = ref(false)
    </script>

    <template>
      <Toggle 
        :modelValue="enabled" 
        v-model="enabled" 
        label="Enable notifications" 
        description="Receive updates and alerts" 
      />
    </template>
    ```
  ::
  
  ::stack{label="Disabled"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrToggle{v-model="enabled" disabled}
    ::
    ::
    ```vue
    <script setup>
    import { ref } from 'vue'

    const enabled = ref(false)
    </script>

    <template>
      <Toggle 
        :modelValue="enabled" 
        v-model="enabled" 
        disabled
      />
    </template>
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
