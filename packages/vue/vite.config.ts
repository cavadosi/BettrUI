import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "lib/main.ts"),
      name: "bettr-ui-vue",
      // the name of the output files when the build is run
      fileName: "bettr-ui-vue",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
