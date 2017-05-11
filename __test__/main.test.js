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
