module.exports = () => ({
  entry: 'src/index.js',
  presets: [<% if (lint !== 'never') { %>
    reauire('poi-preset-eslint-react')({ mode: <%= lint==='all mode' ? '*' : lint==='only prod' ? 'production' : 'development' %>})<% } %>
  ],
  extendWebpack(config) {
    config.entry('client').prepend('react-hot-loader/patch')
  }
})
