# template-react

Now `vbuild` is renamed to `poi`

Now using [poi 9](https://github.com/egoist/poi), for 6.0 please see branch [6.0](https://github.com/zcong1993/template-react/tree/6.0)

[![NPM version](https://img.shields.io/npm/v/template-react.svg?style=flat)](https://npmjs.com/package/template-react) [![NPM downloads](https://img.shields.io/npm/dm/template-react.svg?style=flat)](https://npmjs.com/package/template-react)
[![Build Status](https://img.shields.io/circleci/project/zcong1993/template-react/master.svg?style=flat)](https://circleci.com/gh/zcong1993/template-react)

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

`Note:` offline need poi as dev devDependency, if set true, poi will add into devDependencies automatically

### poi
type: bool

default: true

add poi as devDependency. Make sure you have installed `poi` globally when set false.

### xo
type: bool

default: true

use `xo` lint your code, you can use `npm run lint` and `npm run lint:fix` when set true

### test
type: bool

default: false

if using [react-jest](https://github.com/egoist/react-jest) test your react app.

### enzyme
type: bool

default: true

if need `enzyme shallow` lib with test. Only work when `test` options set true. More about `enzyme shallow` please see [document](http://airbnb.io/enzyme/docs/api/shallow.html)

## License

MIT &copy; [zcong1993](github.com/zcong1993)
