const { defineConfig } = require('@vue/cli-service')

function getPublicPath() {
  switch (process.env.NODE_ENV) {
    case 'development': return '/alternativa-takeaway-app/'
    default: return '/'
  }
}
module.exports = defineConfig({
  publicPath: getPublicPath(),
  transpileDependencies: true,
  pwa: {
    name: "L'Alternativa",
    short_name: "Alternativa",
    themeColor: "#393939",
    backgroundColor: "#393939",
    display: "standalone",
    orientation: "portrait",
    start_url: ".",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
          handler: "StaleWhileRevalidate",
          options: { cacheName: "cdn-cache" }
        },
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: "StaleWhileRevalidate",
          options: { cacheName: "google-fonts-stylesheets" }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "google-fonts-webfonts",
            expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 }
          }
        }
      ]
    },
    manifestOptions: {
      icons: [
        { src: "./img/icons/manifest-icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "./img/icons/manifest-icon-512.png", sizes: "512x512", type: "image/png" },
        { src: "./img/icons/manifest-icon-192.maskable.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
        { src: "./img/icons/manifest-icon-512.maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
      ]
    },
    iconPaths: {
      faviconSVG: null,
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "img/icons/apple-icon-180.png",
      maskIcon: null,
      msTileImage: "img/icons/manifest-icon-192.png"
    }
  }
})