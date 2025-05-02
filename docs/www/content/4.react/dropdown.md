---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/react-ui/lib/Dropdown/Dropdown.tsx
    target: _blank
---

## Usage

::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::DemoDropdown
  ::
  ::
  ```jsx
  export default Example = () => {

    const sections = [
      {
        items: [
          { id: 1, label: 'Profile' },
          { id: 2, label: 'Settings' },
          { id: 3, label: 'Logout' },
        ],
      },
    ];

    return (
      <Dropdown
        icon="Cog"
        label="Options"
        header-title="Settings"
        header-description="Manage your preferences"
        button-variant="secondary"
        button-size="sm"
        button-rounded="md"
        sections="sections"
      />
    )
  }
  ```
::

### Multiple Sections

::stack{label="Default"}
  ::div{class="flex items-center p-4"}
  ::DemoDropdown{multisection}
  ::
  ::
  ```jsx
  export default Example = () => {

    const sections = [
      {
          items: [
          {
            id: 1,
            label: 'Account',
            icon: 'User',
          },
          {
            id: 2,
            label: 'Preferences',
            icon: 'Cog',
          },
          ],
      },
      {
          items: [
          {
            id: 3,
            label: 'Logout',
            icon: 'Logout',
          },
          ],
      },
    ];

    return (
      <Dropdown
        icon="Cog"
        label="Options"
        header-title="Settings"
        header-description="Manage your preferences"
        button-variant="secondary"
        button-size="sm"
        button-rounded="md"
        sections="sections"
      />
    )
  }
  ```
::

## Props

::field-group
  :field{
      name="label"
      type="string"
      required
    }[The label displayed on the dropdown button.]

  :field{
      name="sections"
      type="DropdownSection[]"
      required
    }[Array of dropdown sections, each containing a list of items.]

  :field{
      name="icon"
      type="string"
    }[Optional icon to display on the dropdown button.]

  :field{
      name="headerTitle"
      type="string"
    }[Optional title shown at the top of the dropdown menu.]

  :field{
      name="headerDescription"
      type="string"
    }[Optional description shown under the header title.]

  :field{
      name="placement"
      type="Placement"
      default-value='"bottom-start"'
    }[Position of the dropdown relative to the trigger element.]

  :field{
      name="offset"
      type="number"
      default-value="8"
    }[Distance in pixels between the dropdown and the trigger.]

  :field{
      name="buttonVariant"
      type='"solid" | "link" | "outline" | "soft" | "ghost" | "secondary"'
      default-value='"solid"'
    }[Style variant of the dropdown trigger button.]

  :field{
      name="buttonSize"
      type='"xs" | "sm" | "md" | "lg" | "xl"'
      default-value='"md"'
    }[Size of the dropdown button.]

  :field{
      name="buttonRounded"
      type='"none" | "sm" | "md" | "lg" | "xl" | "full"'
      default-value='"md"'
    }[Border radius of the dropdown button.]
::

