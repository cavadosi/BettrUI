---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Accordion/Accordion.vue
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="Default"}
    ::div{class=" p-4"}
    ::DemoAccordion
    ::
    ::
    ```vue
    <script setup>
    const items = [
      {
        id: 1,
        label: "What's the best thing about Switzerland?",
        description:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 2,
        label: "Why are mountains so great?",
        description:
          "Mountains are majestic and inspire a sense of adventure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
    ]
    </script>
    
    <template>
      <Accordion
        :items="items"
      />
    </template>
    ```
  ::
  ::stack{label="Custom Icons"}
    ::div{class="p-4"}
    ::DemoAccordion{icons}
    ::
    ::
    ```vue
    <script setup>
    const items = [
      {
        id: 1,
        label: "What's the best thing about Switzerland?",
        description:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 2,
        label: "Why are mountains so great?",
        description:
          "Mountains are majestic and inspire a sense of adventure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
    ]
    </script>
    
    <template>
      <Accordion
        :items="items"
        openIcon="ChevronUp"
        closedIcon="ChevronDown"
      />
    </template>
    ```
  ::
::

## Props

::field-group
  :field{
    name="items"
    type="AccordionItem[]"
    required
  }[Array of accordion items. Each item should have `id`, `label`, and `description`.]

  :field{
    name="openIcon"
    type="string"
    default="ChevronUp"
  }[The name of the icon (e.g., from Heroicons) that will be displayed when a panel is open.]

  :field{
    name="closedIcon"
    type="string"
    default="ChevronDown"
  }[The name of the icon that will be displayed when a panel is closed.]

  :field{
    name="class"
    type="string"
  }[Optional CSS class that will be applied to the main accordion container.]
::


