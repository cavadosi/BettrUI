<template>
  <div class="overflow-hidden py-24 sm:py-32 -mx-4 md:-mx-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center"
      >
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-primary-500 dark:text-primary-400">
              Develop faster
            </h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
              Multi-Framework Support
            </p>
            <p class="mt-6 text-lg/8 text-secondary-400 dark:text-secondary-200">
              Use a single UI library across multiple frameworks without sacrificing performance, developer experience, or design consistency.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-secondary-300 dark:text-secondary-200 lg:max-w-none">
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-black dark:text-white">
                  <Icon
                    :name="feature.icon"
                    class="absolute top-1 left-1 size-5 text-primary-500 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                <dd class="inline"> {{ feature.description }} </dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <ContentSlot :use="$slots.default" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: 'Universal Components. ',
    description:
      'Build once and reuse everywhere. Our components work natively across React, Vue 3, and Web Components with identical APIs and styling — no rewrites or wrappers needed.',
    icon: 'heroicons:code-bracket',
  },
  {
    name: 'Consistent Design System. ',
    description:
      'Maintain visual and functional consistency across your projects using a shared design system, powered by Tailwind CSS and customizable tokens for theme-wide control.',
    icon: 'ix:consistency-check',
  },
  {
    name: 'Framework-Agnostic Core. ',
    description:
      'Engineered on top of modern web standards. Easily extendable with upcoming support for Svelte and Angular — perfect for teams working across stacks or migrating incrementally.',
    icon: 'heroicons:rocket-launch',
  },
];
</script>
