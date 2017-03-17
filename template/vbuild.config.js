module.exports = {
  entry: 'src/index.js',
  webpack(config) {
    config.entry.client.unshift('react-hot-loader/patch')
    <%_ if (offline) { -%>
    if (!options.dev) {
      config.plugins.push(new OfflinePlugin({
        ServiceWorker: {
          events: true
        }
      }))
    }
    config.resolve.modules.push(path.resolve('src'))
    <%_ } -%>
    return config
  }
}
