1. ObjP & AsP
```js
const { a: { b } = c } = test;
const { a: { b } = {} } = test;
```

2. pipeline
```js
const {a: b = 'xxx' | 'yyy'} = test;
```