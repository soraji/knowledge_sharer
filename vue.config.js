const ansiRegex = require('ansi-regex')
module.exports = {
  lintOnSave : false,
  publicPath: '',
  assetsDir: process.env.BASE_URL,
  transpileDependencies: [ansiRegex],
  configureWebpack: {
    entry: ["babel-polyfill", "./src/main.js"]
  },
  outputDir:'./docs'
}