# markdown-it-mermaid

> markdown-it plugin for mermaid

## Install

```shell
npm install --save @ispicyfish/markdown-it-mermaid
```

## Usage

```js
  const md = require('markdown-it')()
    .use(require('markdown-it-mermaid'), opts)
```

The `opts` object can contain: [detail](https://mermaid-js.github.io/mermaid/#/Setup)

Name              | Description                                                    | Default
------------------|----------------------------------------------------------------|-----------------------------------
`marker` | marker of mermaid block | ```
`theme` | mermaid theme | 'default'
`ganttAxisFormat` | mermaid gannt Axis Format | '%Y-%m-%d'
...|...|...

## Test
```shell
npm test
```