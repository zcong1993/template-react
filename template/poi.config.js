module.exports = {
  entry: 'src/index.js',
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
