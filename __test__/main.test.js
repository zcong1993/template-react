const sao = require('sao')

const template = {
  fromPath: process.cwd()
}

const baseMockPrompt = {
  username: 'test',
  email: 'test@test.com',
  pwa: false,
  lint: 'never',
  test: false,
  enzyme: false
}

it('default', () => {
  return sao.mockPrompt(template, baseMockPrompt)
    .then(({ fileList }) => {
      expect(fileList).toEqual(['.babelrc', '.editorconfig', '.gitattributes', '.gitignore', 'LICENSE', 'README.md', 'circle.yml', 'index.ejs', 'package.json', 'poi.config.js', 'src/App.js', 'src/components/Title.js', 'src/index.js', 'static/android-chrome-192x192.png', 'static/android-chrome-512x512.png', 'static/apple-touch-icon.png', 'static/browserconfig.xml', 'static/favicon-16x16.png', 'static/favicon-32x32.png', 'static/favicon.ico', 'static/mstile-150x150.png', 'static/safari-pinned-tab.svg', 'src/App.css', 'src/index.css', 'src/logo.svg'].sort())
  })
})

it('add pwa', () => {
  const opts = Object.assign({}, baseMockPrompt, {
    pwa: true
  })
  return sao.mockPrompt(template, opts)
    .then(({ fileList, files }) => {
      expect(fileList).toContain('src/pwa.js')

      const pkg = JSON.parse(files['package.json'].contents.toString())
      expect(pkg.devDependencies['poi-preset-offline']).toBeDefined()
      expect(files['poi.config.js'].contents.toString()).toMatch('require(\'poi-preset-offline\')')
      expect(files['index.ejs'].contents.toString()).toMatch('<link rel="manifest" href="<%= htmlWebpackPlugin.files.publicPath %>manifest.json">')
    })
})

it('use lint', () => {
  const opts = Object.assign({}, baseMockPrompt, {
    lint: 'all mode'
  })
  return sao.mockPrompt(template, opts)
    .then(({ files }) => {
      const pkg = JSON.parse(files['package.json'].contents.toString())
      expect(pkg.devDependencies['poi-preset-eslint-react']).toBeDefined()
      expect(files['poi.config.js'].contents.toString()).toMatch('require(\'poi-preset-eslint-react\')({ mode: \'*\' })')
    })
})

it('add test', () => {
  const opts = Object.assign({}, baseMockPrompt, {
    test: true,
    enzyme: false
  })
  return sao.mockPrompt(template, opts)
    .then(({ fileList, files }) => {
      expect(fileList).toContain('src/__test__/App.test.js')

      const pkg = JSON.parse(files['package.json'].contents.toString())
      expect(pkg.devDependencies['react-jest']).toBeDefined()
      expect(pkg.scripts['test']).toBe('react-jest --env=jsdom')
    })
})

it('use enzyme', () => {
  const opts = Object.assign({}, baseMockPrompt, {
    test: true,
    enzyme: true
  })
  return sao.mockPrompt(template, opts)
    .then(({ files }) => {
      const pkg = JSON.parse(files['package.json'].contents.toString())
      expect(pkg.devDependencies['enzyme']).toBeDefined()
      expect(files['src/__test__/App.test.js'].contents.toString()).toMatch('import { shallow } from \'enzyme\'')
    })
})
