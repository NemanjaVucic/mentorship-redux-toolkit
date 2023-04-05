# Redux Toolkit project (ExpressJS with React + Vite using tRPC)

## Requirements ❗❗❗

- `NodeJS` version `16.4+`
- `pnpm` installed globally on local machine:

```bash
 $ npm install -g pnpm
```

### _Eslint & Prettier setup_ 👀

In your `VSCode settings.json(cmd + ,)` paste these commands:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
```

Config file where you can improve our eslint rules is `.eslintrc`.\
We use recommended `plugins`.\
The most of our `rules` are from the docs, but there is some from well known plugins e.g. for sorting the imports (`eslint-plugin-import` & `eslint-plugin-sort-imports-es6-autofix`) where you can see/learn the rules on this [link](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md).
_Note_: do not mix rules from [`sort-imports`](https://eslint.org/docs/latest/rules/sort-imports#membersyntaxsortorder) (default eslint import sort rules) with [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md) !!!
<br/>

## Quick Start 🏃‍♂️

### Install all dependencies(server & client):

```bash
$ pnpm i
```

### Bring up server & client in one go:

```bash
$ pnpm dev
```
