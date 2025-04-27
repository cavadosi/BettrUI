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
        placeholder="#1E293C"
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
  const [L0, C0, H0] = base.oklch();

  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const maxLightness = 0.97; // Para el 50
  const minLightness = 0.22; // Para el 950
  const palette = steps.map((step) => {
    let targetL;
    if (step < 500) {
      // De 50 a 500 → de maxLightness hacia L0
      const t = (step - 50) / (500 - 50);
      targetL = maxLightness + (L0 - maxLightness) * t;
    } else if (step > 500) {
      // De 500 a 950 → de L0 hacia minLightness
      const t = (step - 500) / (950 - 500);
      targetL = L0 + (minLightness - L0) * t;
    } else {
      // Justo en 500
      targetL = L0;
    }

    // Saturación también disminuye en los extremos
    const distanceFrom500 = Math.abs(step - 500) / 450; // Normalizado
    const targetC = C0 * (1 - distanceFrom500 * 0.4); // Hasta -40% de saturación en extremos

    const color = chroma.oklch(targetL, targetC, H0);
    const [finalL, finalC, finalH] = color.oklch();

    return `  --color-${name}-${step}: oklch(${finalL.toFixed(3)} ${finalC.toFixed(3)} ${finalH.toFixed(1)});`;
  });

  return palette.join('\n');
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
    : generateTailwindPaletteFromOklch('#1E293C', 'secondary'),
);

const backgroundColorCss = computed(() => {
  const base = primaryColor.value ? chroma(primaryColor.value) : chroma('#615EFF');
  const [L, C, H] = base.oklch();

  // Light is pure white (oklch(1 0 0))
  // Dark is a darker version of primary, keeping C and H, lowering only L
  const darkBackground = chroma.oklch(Math.max(L * 0.05, 0), C * 0.5, H);
  const [Ldark, Cdark, Hdark] = darkBackground.oklch();

  return `
  --color-background-light: oklch(1 0 0);
  --color-background-dark: oklch(${Ldark.toFixed(3)} ${Cdark.toFixed(3)} ${Hdark.toFixed(1)});
  `;
});

const fullCss = computed(() => `${primaryCss.value}\n\n${secondaryCss.value}\n\n${backgroundColorCss.value}`);
const wrappedCss = computed(() =>
  fullCss.value ? `@theme {\n${fullCss.value}\n}` : '',
);
</script>
