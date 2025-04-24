---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Tabs/Tabs.tsx
    target: _blank
---

## Usage

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::DemoTabs
  ::
  ::
  ```jsx
    <Tabs>
      <Tabs.List>
        <Tabs.Button>Home</Tabs.Button>
        <Tabs.Button>Profile</Tabs.Button>
        <Tabs.Button>Settings</Tabs.Button>
      </Tabs.List>
      <Tabs.Content>
        <-- Home tab content will render here -->
      </Tabs.Content>
      <Tabs.Content>
        <-- Profile tab content will render here -->
      </Tabs.Content>
      <Tabs.Content>
        <-- Settings tab content will render here -->
      </Tabs.Content>
    </Tabs>
  ```
::