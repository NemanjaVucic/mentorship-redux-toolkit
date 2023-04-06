# Redux Toolkit project (ExpressJS with React + Vite using tRPC)

## **Requirements** ❗❗❗

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
_`Note`_: do not mix rules from [`sort-imports`](https://eslint.org/docs/latest/rules/sort-imports#membersyntaxsortorder) (default eslint import sort rules) with [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md) !!!

---

<br/>

## **Quick Start** 🏃‍♂️

### Install all dependencies(server & client):

```bash
$ pnpm i
```

### Bring up server & client in one go:

```bash
$ pnpm dev
```

---

<br/>

## **Project Management** 📝

**TL;DR**\
`Jira Board(Trello, Asana, etc.)` ➡️ `GitHub Projects`\
`Ticket(Card)` ➡️ `GitHub Issue`

### _GitHub Projects_ 📋

1. [From `Projects tab` you will enter the views(Table & Board)](https://user-images.githubusercontent.com/16420201/230123848-2abc5eef-27fc-4e02-948c-80c0c5927ee7.png)
2. [`Board view` for tracking status of the issue](https://user-images.githubusercontent.com/16420201/230124171-8a7235f5-72e3-40e8-bd44-dccb3965d917.png)
3. [`Table view` for verbose information about a given issue](https://user-images.githubusercontent.com/16420201/230124739-c3a863b5-975e-4d97-8fb9-28fdbe91f635.png)

### _GitHub Issue_ 🟢

1.  [Create a new issue from the `Issues` tab](https://user-images.githubusercontent.com/16420201/229608438-97067ad7-a728-4496-822a-aea987c4dc73.png)
2.  [Create a new issue from the `Project Board` view](https://user-images.githubusercontent.com/16420201/229608963-f95bebc0-e702-44c0-ac80-bf787e917b6a.png)
3.  [Create a new issue from the `Project Table` view](https://user-images.githubusercontent.com/16420201/229609106-ba8051f8-eebf-4ad9-973c-af5418a0ebb2.png)

- During the creation of the issue that you can set `labels`(as always), and `link to Project`, `Milestone`(where logically issue should be placed), and `linked branch` to a given [issue](https://user-images.githubusercontent.com/16420201/229610036-69392269-4332-4d37-83e9-c577b876287f.png).
