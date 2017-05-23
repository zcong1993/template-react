const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: 'src/index.js',
  html: {
    title: pkg.productName,
    description: pkg.descrption,
    template: path.join(__dirname, 'index.ejs')
  },
  presets: [<% if (lint !== 'never') { %>
    require('poi-preset-eslint-react')({ mode: <% if(lint === 'all mode'){ %>'*'<% }else if(lint === 'only prod') { %>'production'<% } else {%>'development'<% } %> })<% } %><% if (lint !== 'never'&&pwa) { %>,<% } %><% if(pwa) { %>
    require('poi-preset-offline')({
      pwa: './src/pwa.js',
      pluginOptions: {
        caches: {
          main: [':rest:']
        },
        ServiceWorker: {
          events: true
        },
        AppCache: {
          events: true
        }
      }
    })<% } %>
  ],
  extendWebpack(config) {
    config.entry('client').prepend('react-hot-loader/patch')
  }
}
