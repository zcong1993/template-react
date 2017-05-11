const sao = require('sao')

const template = {
  fromPath: process.cwd()
}

const baseMockPrompt = {
  username: 'test',
  email: 'test@test.com',
  xo: true,
  test: false,
  enzyme: false,
  offline: false,
  poi: true
}

it('default', () => {
  return sao.mockPrompt(template, baseMockPrompt)
    .then(({ fileList }) => {
      expect(fileList).toEqual([
        '.editorconfig',
        '.gitattributes',
        'LICENSE',
        'README.md',
        'circle.yml',
        'package.json',
        '.gitignore',
        '.babelrc',
        'poi.config.js',
        'src/App.js',
        'src/components/Title.js',
        'src/index.js'
      ].sort())
  })
})

it('add xo', () => {
  const opts = Object.assign({}, baseMockPrompt, {
    xo: true
  })
  return sao.mockPrompt(template, opts)
    .then(({ files }) => {
      const pkg = JSON.parse(files['package.json'].contents.toString())
      expect(pkg.devDependencies['eslint-config-vue-app']).toBeDefined()
      expect(pkg.devDependencies['babel-eslint']).toBeDefined()
      expect(pkg.devDependencies['xo']).toBeDefined()
      expect(pkg.xo).toEqual({
        parser: 'babel-eslint',
        extends: 'vue-app',
        rules: {
          'unicorn/filename-case': 0
        }
      })
      expect(pkg.scripts['lint']).toBe('xo')
      expect(pkg.scripts['lint:fix']).toBe('xo --fix')
      expect(pkg.scripts['test']).toBe('xo')
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
      expect(pkg.scripts['test']).toBe('xo && react-jest --env=jsdom')
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

it('add offline', () => {
  const opts = Object.assign({}, baseMockPrompt, {
    offline: true
  })
  return sao.mockPrompt(template, opts)
    .then(({ fileList, files }) => {
      expect(fileList).toContain('src/pwa.js')

      const pkg = JSON.parse(files['package.json'].contents.toString())
      expect(pkg.devDependencies['offline-plugin']).toBeDefined()
      expect(files['poi.config.js'].contents.toString()).toMatch('const OfflinePlugin = require(\'offline-plugin\')')
    })
})
