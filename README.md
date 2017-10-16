<h1 align="center">📎 clipd</h1>
<div align="center">
  <strong>Puny < 0.5kb copy to clipboard library</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/clipd">
    <img src="https://img.shields.io/npm/v/clipd.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/clipd">
  <img src="https://img.shields.io/npm/dm/clipd.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/clipd">
    <img src="https://img.shields.io/travis/tiaanduplessis/clipd.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/tiaanduplessis/clipd/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/clipd.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/clipd/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/clipd.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/clipd/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/clipd.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20clipd!%20https://github.com/tiaanduplessis/clipd%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/clipd.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaanduplessis.co.za">Tiaan</a> and <a href="https://github.com/tiaanduplessis/clipd/graphs/contributors">contributors</a>
</div>


<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
	<li><a href="#About">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
	<li><a href="#example">example</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/clipd.svg)](https://greenkeeper.io/)

A puny < 0.5kb (gzipped & minified) copy to clipboard library. For [modern browsers](https://www.microsoft.com/en-za/download/internet-explorer.aspx).

## Install

With cdn:

```html
<script src="https://unpkg.com/clipd/dist/clipd.min.js"></script>
<!-- Or -->
<script src="https://rawgit.com/tiaanduplessis/clipd/master/dist/clipd.min.js"></script>
```

With Bower:

```sh
$ bower install clipd
```

With npm:

```sh
$ npm install --save clipd
```

With yarn:

```sh
$ yarn add clipd
```

## Usage

```js

// Works with a string selector or element node

clipd('.selector')

// OR

const elem = document.getElementById('elem')
clipd(elem)

```

## API

The module exports a single function with signature:

```js
clipd(selector|elementNode, options)
```

Current available options:

```js
{
	event: 'click', // Event to trigger copy on. Default 'click
	callback: (result) => {} // callback with the result of copy(boolean)
}
```

## Example

Check out the [demo](https://tiaanduplessis.github.io/clipd/).

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

## License

Licensed under the MIT License.
