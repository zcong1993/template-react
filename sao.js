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
    offline: {
      message: 'Add offline support?',
      type: 'confirm',
      default: false
    },
    eslint: {
      message: 'Lint code while webpack compiling?',
      type: 'confirm',
      default: true
    },
    vbuild: {
      message: 'Add vbuild as devDependency?',
      type: 'confirm',
      default: true
    }
  },
  filters: {
    'src/pwa.js': 'offline'
  },
  move: {
    'gitignore': '.gitignore'
  },
  post({log, chalk, isNewFolder, folderName, init}) {
    init()
    log.success('Done!')
    if (isNewFolder) {
      log.info(`cd ${chalk.yellow(folderName)} to get started!`)
    }
  }
}
