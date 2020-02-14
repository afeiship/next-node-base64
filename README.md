# next-node-base64
> Base64 for nodejs.

## installation
```bash
npm install -S @feizheng/next-node-base64
```

## apis
| api    | params | description   |
| ------ | ------ | ------------- |
| encode | -      | Encode string |
| decode | -      | Decode string |

## usage
```js
import NxNodeBase64 from '@feizheng/next-node-base64';
const encoded = NxNodeBase64.encode('afei');
const decoded = NxNodeBase64.decode(encoded);

console.log(encoded, decoded);
// YWZlaQ== 
// afei
```

## resources
- https://gist.github.com/inadarei/4465153
