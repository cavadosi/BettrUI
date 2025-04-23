---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue-ui/components/Textarea.vue
    target: _blank
---

## Usage

::tabs{variant="line"}
  ::stack{label="With Label"}
    ::div{class="flex items-center justify-center p-4 w-full"}
    ::BtrTextarea{v-model="feedback" id="feedback" name="feedback" label="Your feedback" placeholder="Tell us what you think" class="bg-transparent"}
    ::
    ::
     ```jsx
    import { useState } from 'react';

    function Example() {
      const [feedback, setFeedback] = useState('');

      const handleChange = (e) => {
        setFeedback(e.target.value);
      };

      return (
        <Textarea
          value={feedback}
          onChange={handleChange}
          id="feedback"
          name="feedback"
          label="Your feedback"
          placeholder="Tell us what you think"
        />
      );
    }
    ```
  ::

  ::stack{label="Disabled"}
    ::div{class="flex items-center justify-center p-4 w-full"}
    ::BtrTextarea{:modelValue="'Read-only content'" id="readonly" name="readonly" disabled}
    ::
    ::
     ```jsx
    import { useState } from 'react';

    function Example() {
      const [readonlyContent, setReadonlyContent] = useState('Read-only content');

      const handleChange = (e) => {
        setReadonlyContent(e.target.value);
      };

      return (
        <Textarea
          value={readonlyContent}
          onChange={handleChange}
          id="readonly"
          name="readonly"
          disabled
        />
      );
    }
    ```
  ::
::
## Props

::field-group
  :field{
    name="value"
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
    name="className"
    type="string"
  }[Additional classes to customize the textarea style.]

  :field{
    name="onChange"
    type="function"
    required=true
  }[Handler function that receives the event when the textarea content changes.]
::