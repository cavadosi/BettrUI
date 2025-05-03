---
title: Home
navigation: false
---

::hero
---
announcement:
  title: 'Release v1.0.0'
  icon: '🎉'
  to: https://github.com/cavadosi/BettrUI/releases/latest
  target: _blank
actions:
  - name: Documentation
    to: https://better-ui-docs-beta.vercel.app/introduction
  - name: GitHub
    variant: outline
    to: https://github.com/cavadosi/BettrUI
    leftIcon: 'lucide:github'
---

#title
Welcome to BettrUI


#description
A modern UI component library for React and Vue — built with Tailwind CSS v4+. :br  Customizable. Fast. Open Source.
::

::FrameworkSection
::code-group{class="rounded-xl shadow-xl md:-ml-4 lg:-ml-0 bg-card"}
  ```vue [example.vue]
  <script setup>
  import { Button } from '@bettr-ui/vue'
  </script>
  
  <template>
    <div class="flex gap-4">
      <Button variant="primary">
        Click me
      </Button>
      <Button variant="outline">
        ClickMe
      </Button>
    </div>
  </template>
  ```

  ```jsx [example.tsx]
  import { Button } from '@bettr-ui/react'

  export default function App() {
    return (
      <div className="flex gap-4">
        <Button variant="primary">
          Click me
        </Button>
        <Button variant="outline">
          Click me
        </Button>
      </div>
    )
  }
  ```
::
::

::CustomizationSection
::

::FeaturesSection
::

::CommunitySection
::
