const { defineConfig } = require('@vue/cli-service')

function getPublicPath() {
  switch (process.env.NODE_ENV) {
    case 'development': return '/alternativa-takeaway-app/'
    default: return '/'
  }
}
module.exports = defineConfig({
  publicPath: getPublicPath(),
  transpileDependencies: true
})