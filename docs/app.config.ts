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
