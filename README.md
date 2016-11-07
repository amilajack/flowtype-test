# flowtype-test

This repo is a bare-bones example on using [**flow-bin**](http://npm.im/flow-bin) to add strict typing to JavaScript. It also allows for linting using [**eslint**](http://npm.im/eslint) and the [**eslint-plugin-flowtype**](http://npm.im/eslint-plugin-flowtype) plugin.

## Installation

```sh
$ npm i babel-{cli,eslint,plugin-transform-flow-strip-types} eslint eslint-plugin-flowtype flow-bin -D
```

## Running

To run flow linting, you can run the `flow` command directly (if `flow-bin` is installed globally), or add the `flow` task as a script in package.json.

```js
"scripts": {
  "flow": "flow",
  "lint": "eslint .",
  "prelint": "npm run flow",
  "pretest": "npm run lint",
  "start": "babel-node index",
  "test": "exit 0"
}
```

In the above example, the **flow** task can be triggered directly by running:
- `$ npm run flow`
- `$ npm run lint` (runs as a **prelint** task)
- `$ npm run test` (runs as a **pretest** task, which triggers `npm run lint`)
