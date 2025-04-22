---
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/cavadosi/BettrUI/blob/main/packages/vue/lib/Avatar/Avatar.vue
    target: _blank
---

## Usage

::stack
  ::div{class=" flex items-center justify-center p-4"}
  ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar"}
  ::
  ::
  ```vue
  <template>
    <Avatar src="/user-avatar.png" alt="User avatar" />
  </template>
  ```
::

### Size

::tabs{variant="line"}
  ::stack{label="Xs"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="xs"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" size="xs" />
    </template>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="sm"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" size="sm" />
    </template>
    ```
  ::

  ::stack{label="Md"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="md"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" size="md" />
    </template>
    ```
  ::

  ::stack{label="Lg"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="lg"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" size="lg" />
    </template>
    ```
  ::

  ::stack{label="XL"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" size="xl"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" size="xl" />
    </template>
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
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="none" />
    </template>
    ```
  ::

  ::stack{label="Sm"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="sm"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="sm" />
    </template>
    ```
  ::

  ::stack{label="Md"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="md"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="md" />
    </template>
    ```
  ::

  ::stack{label="Lg"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="lg"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="lg" />
    </template>
    ```
  ::

  ::stack{label="XL"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="xl"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="xl" />
    </template>
    ```
  ::

  ::stack{label="Full"}
    ::div{class="flex items-center justify-center p-4"}
    ::BtrAvatar{src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" rounded="full"}
    ::
    ::
    ```vue
    <template>
      <Avatar src="/user-avatar.png" alt="User avatar" rounded="full" />
    </template>
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
