# template-react

Now using [vbuild 7](https://github.com/egoist/vbuild), for 6.0 please see branch [6.0](https://github.com/zcong1993/template-react/tree/6.0)

[![NPM version](https://img.shields.io/npm/v/template-react.svg?style=flat)](https://npmjs.com/package/template-react) [![NPM downloads](https://img.shields.io/npm/dm/template-react.svg?style=flat)](https://npmjs.com/package/template-react)

> SAO template for react with vbuild, a bit more flixible than create-react-app

## Usage

Install [SAO](https://github.com/egoist/sao) first.

### From git

```bash
$ sao zcong1993/template-react
# the first time
$ sao zcong1993/template-react --install
```

### From npm

```bash
$ sao react
# the first time
$ yarn global add template-react
# or
$ sao react --install
```

## Options

### offline
type: bool

default: false

create a react project support offline

`Note:` offline need vbuild as dev devDependency, if set true, vbuild will add into devDependencies automatically

### vbuild
type: bool

default: true

add vbuild as devDependency. Make sure you have installed `vbuild` globally when set false.

## License

MIT &copy; [zcong1993](github.com/zcong1993)
