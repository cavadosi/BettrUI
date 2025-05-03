---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Textarea/Textarea.vue
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="With Label"}
    ::div{class="flex items-center justify-center p-4 w-full"}
    ::BtrTextarea{v-model="feedback" id="feedback" name="feedback" label="Your feedback" placeholder="Tell us what you think" class="bg-transparent"}
    ::
    ::
    ```vue
    <script setup>
    import { ref } from 'vue'

    const feedback = ref('')
    </script>

    <template>
      <BtrTextarea 
        v-model="feedback" 
        id="feedback" 
        name="feedback" 
        label="Your feedback" 
        placeholder="Tell us what you think" 
      />
    </template>
    ```
  ::

  ::stack{label="Disabled"}
    ::div{class="flex items-center justify-center p-4 w-full"}
    ::BtrTextarea{:modelValue="'Read-only content'" id="readonly" name="readonly" disabled}
    ::
    ::
    ```vue
    <script setup>
    import { ref } from 'vue'

    const readonlyContent = ref('Read-only content')
    </script>

    <template>
      <BtrTextarea 
        v-model="readonlyContent" 
        id="readonly" 
        name="readonly" 
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
    type="string"
    required=true
  }[The content of the textarea.]

  :field{
    name="id"
    type="string"
    required=true
  }[The ID for the textarea element.]

  :field{
    name="name"
    type="string"
    required=true
  }[The name attribute for the textarea element.]

  :field{
    name="label"
    type="string"
  }[Optional label shown above the textarea.]

  :field{
    name="rows"
    type="number"
    default-value="4"
  }[Number of visible text lines for the control.]

  :field{
    name="placeholder"
    type="string"
  }[Placeholder text shown when empty.]

  :field{
    name="disabled"
    type="boolean"
    default-value="false"
  }[Whether the textarea is disabled.]

  :field{
    name="class"
    type="string"
  }[Additional classes to customize the textarea style.]
::
