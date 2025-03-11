const chroma = require('chroma-js');

function generateTailwindPaletteFromOklch(baseColorOklch, name) {
  // Interpret the base color (here we accept a hex or an Oklch string)
  const base = chroma(baseColorOklch);
  const [baseL, baseC, baseH] = base.oklch();

  // Tweak endpoints to match Tailwind's indigo pattern as closely as possible:
  // Light endpoint for shade 50: L fixed to 0.962, chroma set to 7.7% of base, hue shifted by -5°
  // Dark endpoint for shade 950: L fixed to 0.257, chroma set to 38.8% of base, hue shifted by +4°
  const lightEndpoint = chroma.oklch(0.962, 0.077 * baseC, baseH - 3);
  const darkEndpoint  = chroma.oklch(0.257, 0.388 * baseC, baseH + 3);

  // Create a scale from light endpoint to base to dark endpoint in Oklch mode, generating 11 colors
  const scale = chroma.scale([lightEndpoint, base, darkEndpoint])
    .mode('oklch')
    .colors(11);

  // Tailwind-like keys
  const keys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  let css = '';
  keys.forEach((key, i) => {
    const [L, C, H] = chroma(scale[i]).oklch();
    css += `--color-${name}-${key}: oklch(${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(1)});\n`;
  });
  return css;
}

const primary = "#615EFF";
const secondary = "#62748E";
console.log(generateTailwindPaletteFromOklch(primary, 'primary'));
console.log(generateTailwindPaletteFromOklch(secondary, 'secondary'));
