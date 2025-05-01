<template>
  <div class="py-24 sm:py-32 -mx-4 md:-mx-8">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-base/7 font-semibold text-primary-500 dark:text-primary-400">
        Extreme Customization
      </h2>
      <p
        class="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty sm:text-5xl"
      >
        Make your UI truly yours
      </p>
      <div
        class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"
      >
        <div class="flex p-px lg:col-span-4 w-full">
          <div
            class="overflow-hidden w-full rounded-lg bg-card ring-1 ring-black/5 dark:ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"
          >
            <img
              class="h-80 w-full object-cover object-left blur-[3px]"
              src="/palette-asset.png"
              alt=""
            />
            <div class="p-10">
              <h3 class="text-sm/4 font-semibold text-secondary-200 dark:text-secondary-200">
                Global Theming
              </h3>
              <p class="mt-2 text-lg font-medium tracking-tight ">
                Style your brand with ease
              </p>
              <p class="mt-2 max-w-lg text-sm/6 text-secondary-300 dark:text-secondary-200">
                Customize your entire UI effortlessly with semantic tokens and
                Tailwind utilities. Define themes globally using tokens like
                <code class="font-bold text-black dark:text-white">--color-primary-500</code>, with
                built-in support for dark mode.
              </p>
            </div>
          </div>
        </div>
        <div class="flex p-px lg:col-span-2 w-full">
          <div
            class="overflow-hidden w-full rounded-lg bg-card ring-1 ring-black/5 dark:ring-white/15 lg:rounded-tr-[2rem]"
          >
            <img
              class="h-80 w-full object-cover object-left"
              src="/nested-component.jpg"
              alt=""
            />
            <div class="p-10">
              <h3 class="text-sm/4 font-semibold text-secondary-200 dark:text-secondary-200">
                Flexible Structure
              </h3>
              <p class="mt-2 text-lg font-medium tracking-tight">
                Build complex UIs with slots and nested components
              </p>
              <p class="mt-2 max-w-lg text-sm/6 text-secondary-300 dark:text-secondary-200">
                Compose and extend components effortlessly using named slots,
                conditional regions, and nested structures.
              </p>
            </div>
          </div>
        </div>
        <div class="flex p-px w-full lg:col-span-2">
          <div
            class="overflow-hidden w-full rounded-lg bg-card ring-1 ring-black/5 dark:ring-white/15 lg:rounded-bl-[2rem]"
          >
            <img
              class="h-80 w-full object-contain object-center"
              src="/tailwind-logo.png"
              alt=""
            />
            <div class="p-10">
              <h3 class="text-sm/4 font-semibold text-secondary-200 dark:text-secondary-200">
                Tailwind v4 Ready
              </h3>
              <p class="mt-2 text-lg font-medium tracking-tight">
                Seamless integration with Tailwind CSS 4.0+
              </p>
              <p class="mt-2 max-w-lg text-sm/6 text-secondary-300 dark:text-secondary-200">
                Fully compatible with Tailwind’s latest release, including
                native CSS variables and @theme() support. Customize your design
                system using utility-based tokens and keep everything
                consistent, scalable, and fast.
              </p>
            </div>
          </div>
        </div>
        <div class="flex p-px w-full lg:col-span-4">
          <div
            class="overflow-hidden w-full rounded-lg bg-card ring-1 ring-black/5 dark:ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"
          >
            <img
              class="h-80 w-full object-cover object-left-top"
              src="/mosaic.png"
              alt=""
            />
            <div class="p-10">
              <h3 class="text-sm/4 font-semibold text-secondary-200 dark:text-secondary-200">
                Customization Through Props
              </h3>
              <p class="mt-2 text-lg font-medium tracking-tight">
                Seamless customizability for every component
              </p>
              <p class="mt-2 max-w-lg text-sm/6 text-secondary-300 dark:text-secondary-200">
                Achieve full control over every aspect of your components with
                simple prop-based customization. Whether it's size, color,
                shape, or layout, everything can be adjusted through intuitive
                props, allowing you to create a UI that perfectly matches your project’s design requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
