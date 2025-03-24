export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'BetterUI',
      description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'BetterUI',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.png",
        dark: "/logo.png"
      },
      links: [{
        icon: "lucide:github",
        to: "https://github.com/cavadosi/BetterUI",
        target: "_blank"
      }],
      nav: [
        {
          title: "Docs",
          links: [
            {
              icon: "solar:info-circle-linear",
              title: "Introduction",
              description: "Install and configure the component library",
              to: "/introduction",
              target: "_self",
              showLinkIcon: true
            },
            {
              icon: "ic:outline-file-download",
              title: "Instalation",
              description: "Install and configure the component library",
              to: "/instalation",
              target: "_self",
              showLinkIcon: true
            },
            {
              icon: "mdi:cube-outline",
              title: "Components",
              description: "Install and configure the component library",
              to: "/components/button",
              target: "_self",
              showLinkIcon: true
            }
          ]
        }
      ],
    },
    aside: {
      useLevel: false,
      collapse: false
    },
    footer: {
      credits: "\xA9 Cavadosi 2024",
      links: [{
        icon: "lucide:github",
        to: "https://github.com/cavadosi/BetterUI",
        target: "_blank"
      }],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [{
        title: "Star on GitHub",
        icon: "lucide:star",
        to: "https://github.com/cavadosi/BetterUI",
        target: "_blank"
      }, {
        title: "Create Issues",
        icon: "lucide:circle-dot",
        to: "https://github.com/cavadosi/BetterUI/issues",
        target: "_blank"
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});