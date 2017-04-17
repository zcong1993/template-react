# template-react

This branch using vbuild 6, for vbuild 7 please see master branch.

[![NPM version](https://img.shields.io/npm/v/template-react.svg?style=flat)](https://npmjs.com/package/template-react) [![NPM downloads](https://img.shields.io/npm/dm/template-react.svg?style=flat)](https://npmjs.com/package/template-react)

> SAO template for react with vbuild, a bit more flixible than create-react-app

## Usage

Install [SAO](https://github.com/egoist/sao) first.

### From git

```bash
$ sao zcong1993/template-react#6.0
# the first time
$ sao zcong1993/template-react#6.0 --install
```

## Options

### offline
type: bool

default: false

create a react project support offline

`Note:` offline need vbuild as dev devDependency, if set true, vbuild will add into devDependencies automatically

### eslint
type: bool

default: true

lint your code while webpack compiling

### vbuild
type: bool

default: true

add vbuild as devDependency. Make sure you have installed `vbuild` globally when set false.

## License

MIT &copy; [zcong1993](github.com/zcong1993)
