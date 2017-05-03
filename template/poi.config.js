<%_ if (offline) { -%>
const path = require('path')
const OfflinePlugin = require('offline-plugin')

<%_ } -%>
module.exports = options => ({
  entry: 'src/index.js',
  extendWebpack(config) {
    config.entry('client').prepend('react-hot-loader/patch')
    <%_ if (offline) { -%>
    if (options.mode === 'production') {
      config.plugin('offline')
        .use(OfflinePlugin, [{
          caches: {
            main: [':rest:']
          },
          ServiceWorker: {
            events: true
          },
          AppCache: {
            events: true
          }
        }])
    }
    config.resolve.modules.add(path.resolve('src'))
    <%_ } -%>
  }
})
