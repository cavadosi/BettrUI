const chroma = require('chroma-js');

function generateColorShades(baseColor) {
  const shades = chroma.scale([baseColor, 'white']).mode('lab').colors(9); // Generates 10 shades
  let cssVariables = '';
  
  shades.forEach((shade, index) => {
    cssVariables += `--color-shade-${(index + 1) * 100}: ${shade};\n`;
  });

  return cssVariables;
}

const baseColor = '#3498db';  // Your base color
const colorShades = generateColorShades(baseColor);
console.log(colorShades);  // Output the CSS variables

// You can also save it to a file or integrate it into your build process
