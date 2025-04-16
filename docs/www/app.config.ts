export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "BettrUI",
      description:
        "A modern, framework-agnostic UI component library for React and Vue — built with Tailwind CSS v4+. Customizable. Fast. Open Source.",
    },

    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.5,
    },
    header: {
      title: "BettrUI",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.png",
        dark: "/logo.png",
      },
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/cavadosi/BetterUI",
          target: "_blank",
        },
      ],
      nav: [
        {
          title: "Getting Started",
          links: [
            {
              icon: "solar:info-circle-linear",
              title: "Introduction",
              description:
                "Understand the philosophy behind the library and how it fits into your project.",
              to: "/introduction",
              target: "_self",
              showLinkIcon: true,
            },
            {
              icon: "lucide:rocket",
              title: "Getting Started",
              description:
                "Quickly set up the library and start building with our components.",
              to: "/getting-started",
              target: "_self",
              showLinkIcon: true,
            },
            {
              icon: "solar:palette-line-duotone",
              title: "Theming",
              description:
                "Quickly set up the library and start building with our components.",
              to: "/theming",
              target: "_self",
              showLinkIcon: true,
            },
          ],
        },
        {
          title: "Frameworks",
          links: [
            {
              icon: "devicon:react",
              title: "React",
              description:
                "Install, configure, and use the components in your React application with ease.",
              to: "/react",
              target: "_self",
              showLinkIcon: true,
            },
            {
              icon: "vscode-icons:file-type-vue",
              title: "Vue",
              description:
                "Get up and running with the Vue version of the component library.",
              to: "/vue",
              target: "_self",
              showLinkIcon: true,
            },
          ],
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      codeCopyIcon: 'lucide:clipboard',
      editLink: {
        enable: true,
        pattern: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/edit/main/content/:path',
        text: 'Edit this page',
        icon: 'lucide:square-pen',
        placement: ['docsFooter'],
      },
      backToTop: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'css': 'vscode-icons:file-type-css',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
    },
    footer: {
      credits: "\xA9 Cavadosi 2024",
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/cavadosi/BetterUI",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/cavadosi/BetterUI",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/cavadosi/BetterUI/issues",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
