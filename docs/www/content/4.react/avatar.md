---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/jsx/lib/Avatar/Avatar.tsx
    target: _blank
---

## Usage

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar"}
  ::
  ::
  ```jsx
  <>
    <Avatar src="/user-avatar.png" alt="User avatar" />
  </>
  ```
::

### Size

::tabs{variant="line"}
  ::stack{label="Xs"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="xs"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" size="xs" />
    </>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="sm"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" size="sm" />
    </>
    ```
  ::

  ::stack{label="Md"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" size="md" />
    </>
    ```
  ::

  ::stack{label="Lg"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="lg"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" size="lg" />
    </>
    ```
  ::

  ::stack{label="XL"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="xl"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" size="xl" />
    </>
    ```
  ::
::
### Rounded

::tabs{variant="line"}
  ::stack{label="None"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="none"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="none" />
    </>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="sm"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="sm" />
    </>
    ```
  ::

  ::stack{label="Md"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="md"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="md" />
    </>
    ```
  ::

  ::stack{label="Lg"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="lg"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="lg" />
    </>
    ```
  ::

  ::stack{label="XL"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="xl"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="xl" />
    </>
    ```
  ::

  ::stack{label="Full"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="full"}
    ::
    ::
    ```jsx
    <>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="full" />
    </>
    ```
  ::
::

## Props

::field-group
  :field{name="src" type="string"}[Image source URL]
  :field{name="alt" type="string"}[Alternative text for the image]
  :field{name="rounded" type="'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'" default-value="'md'"}[Avatar border radius]
  :field{name="size" type="'xs' | 'sm' | 'md' | 'lg' | 'xl'" default-value="'md'"}[Avatar size]
::
