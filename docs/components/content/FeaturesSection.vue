<template>
  <div class="py-24 sm:py-32 -mx-4 md:-mx-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <div class="col-span-2 space-y-2">
          <h2 class="text-base/7 font-semibold text-primary-500 dark:text-primary-400">
            Robust by Design
          </h2>
          <h2
            class="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl"
          >
            All the right defaults
          </h2>
          <p class="mt-8 text-lg/8 tracking-light text-pretty text-secondary-400 dark:text-secondary-200">
            Built with best practices from the start — accessible, responsive, theme-aware, and fully typed.
          </p>
        </div>
        <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          <div v-for="feature in features" :key="feature.name">
            <dt class="text-base/7 font-semibold ">
              <div
                :class="[feature.name === 'TypeScript Out-of-the-Box' ? '' : 'bg-primary-500 dark:bg-primary-400']"
                class="mb-6 flex size-10 items-center justify-center rounded-lg "
              >
                <Icon
                  :name="feature.icon"
                  class="text-white"
                  aria-hidden="true"
                  :size="feature.name === 'TypeScript Out-of-the-Box' ? '40' : '25'"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 text-base/7 text-secondary-300 dark:text-secondary-200">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: 'Accessible for Everyone',
    description:
      'All components follow WAI-ARIA guidelines, with keyboard support and semantic markup out of the box — no extra setup required.',
    icon: 'solar:accessibility-broken',
  },
  {
    name: 'Responsive by Default',
    description:
      'Every component is built to look and feel great across all screen sizes. Mobile, tablet, or desktop — no custom breakpoints needed.',
    icon: 'mdi:responsive',
  },
  {
    name: 'Dark Mode Ready',
    description:
      'Toggle between light and dark themes effortlessly. Theming is powered by Tailwind utilities and custom CSS variables',
    icon: 'line-md:light-dark-loop',
  },
  {
    name: 'TypeScript Out-of-the-Box',
    description:
      'Every component is fully typed with TypeScript. Get autocompletion, safe props, and full IntelliSense — no manual typings needed.',
    icon: 'vscode-icons:file-type-typescript-official',
  },
];
</script>
