<template>
  <div class="py-16 sm:py-24 -mx-4 md:-mx-8">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-zinc-100 dark:bg-zinc-900/30 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
      >
        <h2
          class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Build Better <span class="text-primary-500">UI</span>, together
        </h2>
        <p
          class="mx-auto mt-6 max-w-lg text-center text-lg text-secondary-300 dark:text-secondary-200"
        >
          BettrUI is open source and growing fast. Star us on GitHub, meet the
          makers, and help shape the future of multi-framework UI components.
        </p>
        <div
          class="mx-auto mt-10 flex max-w-md gap-x-4 items-center justify-center"
        >
          <NuxtLink to="https://github.com/cavadosi/BettrUI">
            <BtrButton>
              <Icon name="material-symbols:star-outline-rounded" size="20" />
              Star on Github
            </BtrButton>
          </NuxtLink>
          <NuxtLink to="/about">
            <BtrButton variant="ghost" class="dark:hidden">
              Meet the team
              <Icon name="material-symbols:arrow-right-alt-rounded" size="20" />
            </BtrButton>
          </NuxtLink>
          <NuxtLink to="/about">
            <BtrButton variant="secondary" class="not-dark:hidden">
              Meet the team
              <Icon name="material-symbols:arrow-right-alt-rounded" size="20" />
            </BtrButton>
          </NuxtLink>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stop-color="#615EFF" />
              <stop offset="1" stop-color="#615EFF" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
