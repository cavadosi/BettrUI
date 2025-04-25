<template>
  <div class="flex max-sm:flex-wrap max-sm:space-y-4 sm:space-x-4 items-center my-4">
    <div class="flex flex-col w-full">
      <BtrInput
        id="primary"
        v-model="primaryColor"
        label="Primary Color"
        type="text"
        placeholder="#615EFF"
        class="dark:bg-transparent"
      />
    </div>
    <div class="flex flex-col w-full">
      <BtrInput
        id="secondary"
        v-model="secondaryColor"
        label="Secondary Color"
        placeholder="#62748E"
        class="dark:bg-transparent"
      />
    </div>
  </div>

  <!-- Only show when there's generated CSS -->
  <ProsePre
    :code="wrappedCss"
    language="css"
    filename="tailwind.css"
  >
    <pre class="px-3"><code>{{ wrappedCss }}</code></pre>
  </ProsePre>
</template>

<script setup>
import chroma from 'chroma-js';
import { computed, ref } from 'vue';
import ProsePre from './content/ProsePre.vue';

// Start with empty inputs
const primaryColor = ref('');
const secondaryColor = ref('');

// Generate a Tailwind-like Oklch palette
function generateTailwindPaletteFromOklch(baseColor, name) {
  const base = chroma(baseColor);
  const [C0, H0] = base.oklch();
  const light = chroma.oklch(0.962, 0.077 * C0, H0 - 3);
  const dark = chroma.oklch(0.257, 0.388 * C0, H0 + 3);
  const colors = chroma.scale([light, base, dark]).mode('oklch').colors(11);
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return steps.map((step, i) => {
    const [L, C, H] = chroma(colors[i]).oklch();
    return `  --color-${name}-${step}: oklch(${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(1)});`;
  }).join('\n');
}

// Computed CSS strings, guard empty inputs
const primaryCss = computed(() =>
  primaryColor.value
    ? generateTailwindPaletteFromOklch(primaryColor.value, 'primary')
    : generateTailwindPaletteFromOklch('#615EFF', 'primary'),
);
const secondaryCss = computed(() =>
  secondaryColor.value
    ? generateTailwindPaletteFromOklch(secondaryColor.value, 'secondary')
    : generateTailwindPaletteFromOklch('#62748E', 'secondary'),
);
const fullCss = computed(() => `${primaryCss.value}\n\n${secondaryCss.value}`);
const wrappedCss = computed(() =>
  fullCss.value ? `@theme {\n${fullCss.value}\n}` : '',
);
</script>
