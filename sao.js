module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      role: 'folder:name'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my awesome react project`
    },
    username: {
      message: 'What is your GitHub username?',
      role: 'git:name',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      role: 'git:email',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({username}) {
        return `github.com/${username}`
      },
      store: true
    },
    pwa: {
      message: 'PWA support?',
      type: 'confirm',
      default: true
    },
    lint: {
      message: 'Choose the eslint mode:',
      type: 'list',
      choices: [
        'all mode',
        'only prod',
        'only dev',
        'never'
      ]
    },
    test: {
      message: 'Need jest for testing?',
      type: 'confirm',
      default: false
    },
    enzyme: {
      message: 'Need enzyme shallow lib with test?',
      type: 'confirm',
      default: true,
      when: answers => answers.test
    }
  },
  filters: {
    'src/__test__/**': 'test',
    'src/pwa.js': 'pwa'
  },
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  installDependencies: false,
  gitInit: true
}
