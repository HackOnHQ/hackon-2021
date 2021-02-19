export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "HackOn 2.0 | Global Diversity Hackathon",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        "http-equiv": "Content-Language",
        content: "en"
      },
      {
        hid: "description",
        name: "description",
        content:
          "HackOn is a global digital hackathon focused on fostering innovation while raising awareness on mental health and encouraging diversity and inclusion."
      },
      {
        property: "apple-mobile-web-app-title",
        content: "HackOn 2.0 | Global Diversity Hackathon"
      },
      {
        property: "og:url",
        content: "https://hackon.tech"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:title",
        content: "HackOn 2.0 | Global Diversity Hackathon"
      },
      {
        property: "og:description",
        content:
          "HackOn is a global digital hackathon focused on fostering innovation while raising awareness on mental health and encouraging diversity and inclusion."
      },
      {
        property: "og:image",
        content:
          "https://hackon.tech/og-image.png"
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: "twitter:site",
        content: "@HackOnHackathon"
      },
      {
        name: "twitter:title",
        content: "HackOn 2.0 | Global Diversity Hackathon"
      },
      {
        name: "twitter:image",
        content:
          "https://hackon.tech/og-image.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-162071861-1",
        async: true
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-YWT7D5FTDY",
        async: true
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["./assets/styles/global.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/style-resources"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: ["Sen", "Roboto Mono", "Inter"] //Loads Lato font with weights 400 and 700
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  styleResources: {
    scss: ["./assets/styles/setup/_mixins.scss"]
  }
};
