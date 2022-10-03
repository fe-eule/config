# config

<a href="https://www.npmjs.com/package/eslint-config-fe-eule">![eslint-config-fe-eule](https://img.shields.io/npm/v/eslint-config-fe-eule?label=eslint-config-fe-eule)</a><a href="https://www.npmjs.com/package/@fe-eule/prettier-config">![prettier-config](https://img.shields.io/npm/v/@fe-eule/prettier-config?label=prettier-config)</a><a href="https://www.npmjs.com/package/@fe-eule/editorconfig">![editorconfig](https://img.shields.io/npm/v/@fe-eule/editorconfig?label=editorconfig)</a>

## Installation

```bash
npm i -D @fe-eule/editorconfig @fe-eule/prettier-config eslint-config-fe-eule
```

## Setup

### eslint

```js
//.eslintrc.js
module.exports = {
  extends: ["fe-eule"],
};
```

### prettier

> [Prettier Sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations)

`package.json`

```json
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "@fe-eule/prettier-config"
}
```

or

`.prettierrc.js`

```js
module.exports = {
  ...require("@fe-eule/prettier-config"),
  semi: false,
};
```

### editorconfig

When installed, it will be created automatically. There is nothing to do. This is the end.
