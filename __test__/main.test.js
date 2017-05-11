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
    })
})
