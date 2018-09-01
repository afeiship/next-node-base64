# node-base64
> Base64 for nodejs.

## resouces:
+ https://gist.github.com/inadarei/4465153

## install:
```bash
npm install -S afeiship/node-base64 --registry=https://registry.npm.taobao.org
```

## usage:
```js
var base64 = require('./index');
var encoded = base64.encode('afei');
var decoded = base64.decode(encoded);

console.log(encoded, decoded);
// YWZlaQ== 
// afei
```
