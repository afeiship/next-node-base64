# next-node-base64
> Base64 for nodejs

## install:
```bash
npm install -S afeiship/node-base64 --registry=https://registry.npm.taobao.org
```

## apis:
| api    | params | description   |
|--------|--------|---------------|
| encode | -      | desc balabala |
| decode | -      | desc balabala |


## usage:
```js
import NxNodeBase64 from 'next-node-base64';
var encoded = NxNodeBase64.encode('afei');
var decoded = NxNodeBase64.decode(encoded);

console.log(encoded, decoded);
// YWZlaQ== 
// afei
```
## resources:
+ https://gist.github.com/inadarei/4465153
