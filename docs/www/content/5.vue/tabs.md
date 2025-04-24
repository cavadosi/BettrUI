---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Tabs/Tabs.vue
    target: _blank
---

## Usage

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::DemoTabs
  ::
  ::
  ```vue
  <template>
    <Tabs v-bind="args">
      <template #home>
        <-- Home tab content will render here -->
      </template>

      <template #profile>
        <-- Profile tab content will render here -->
      </template>

      <template #settings>
        <-- Settings tab content will render here -->
      </template>
    </Tabs>
  <template/>

  <script setup lang="ts">
    const items = [
      { label: "Home", slot: "home" as const },
      { label: "Profile", slot: "profile" as const },
      { label: "Settings", slot: "settings" as const },
    ]
  </script>
  ```
::

### Icons

::tabs{variant="line"}
  ::stack{label="Outline"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoTabs{iconVariant="outline" icons}
    ::
    ::
    ```vue
    <template>
        <Tabs v-bind="args" iconVariant="outline">
        <template #home>
            <-- Home tab content will render here -->
        </template>

        <template #profile>
            <-- Profile tab content will render here -->
        </template>

        <template #settings>
            <-- Settings tab content will render here -->
        </template>
        </Tabs>
    <template/>

    <script setup lang="ts">
    const items = [
        { label: "Home", slot: "home" as const, icon: "Home" },
        { label: "Profile", slot: "profile" as const, icon: "User" },
        { label: "Settings", slot: "settings" as const, icon: "Cog" },
    ]
    </script>
    ```
  ::

  ::stack{label="Solid"}
    ::div{class="flex items-center justify-center p-4"}
    ::DemoTabs{iconVariant="solid" icons}
    ::
    ::
    ```vue
    <template>
        <Tabs v-bind="args" iconVariant="solid">
        <template #home>
            <-- Home tab content will render here -->
        </template>

        <template #profile>
            <-- Profile tab content will render here -->
        </template>

        <template #settings>
            <-- Settings tab content will render here -->
        </template>
        </Tabs>
    <template/>

    <script setup lang="ts">
    const items = [
        { label: "Home", slot: "home" as const, icon: "Home" },
        { label: "Profile", slot: "profile" as const, icon: "User" },
        { label: "Settings", slot: "settings" as const, icon: "Cog" },
    ]
    </script>
    ```
  ::
::

## Props

::field-group
  :field{name="iconVariant" type="'outline' | 'solid' " default-value="'outline'"}[Icon style for the tabs]
  :field{name="items" type="TabItem[]" required}[An array of TabItem objects, where each item represents a tab with a label, slot name, and an optional icon.]
::