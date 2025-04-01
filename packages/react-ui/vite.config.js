import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        dts({ rollupTypes: true }),
        visualizer({ open: true }),
    ],
    build: {
        // library entry and output settings
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "bettr-ui-react",
            fileName: "bettr-ui-react",
        },
        // bundler options
        rollupOptions: {
            external: function (id) {
                var externals = [
                    "react",
                    "react-dom",
                    "react/jsx-runtime",
                    "@headlessui/react",
                    "@popperjs/core",
                    "react-popper",
                    "tailwind-merge",
                    "class-variance-authority",
                    "@heroicons/react",
                ];
                return externals.some(function (pkg) { return id === pkg || id.startsWith(pkg + "/"); });
            },
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "React",
                    "@headlessui/react": "HeadlessUIReact",
                    "@popperjs/core": "Popper",
                    "react-popper": "ReactPopper",
                    "tailwind-merge": "tailwindMerge",
                    "class-variance-authority": "classVarianceAuthority",
                    "@heroicons/react": "HeroiconsReact"
                },
            },
        },
    },
});
