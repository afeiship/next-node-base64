# next-node-base64
> Base64 for nodejs.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-node-base64
```

## apis
| api    | params | description   |
| ------ | ------ | ------------- |
| encode | -      | Encode string |
| decode | -      | Decode string |

## usage
```js
import NxNodeBase64 from '@jswork/next-node-base64';
const encoded = NxNodeBase64.encode('afei');
const decoded = NxNodeBase64.decode(encoded);

console.log(encoded, decoded);
// YWZlaQ== 
// afei
```

## resources
- https://gist.github.com/inadarei/4465153

## license
Code released under [the MIT license](https://github.com/afeiship/next-node-base64/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-node-base64
[version-url]: https://npmjs.org/package/@jswork/next-node-base64

[license-image]: https://img.shields.io/npm/l/@jswork/next-node-base64
[license-url]: https://github.com/afeiship/next-node-base64/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-node-base64
[size-url]: https://github.com/afeiship/next-node-base64/blob/master/dist/next-node-base64.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-node-base64
[download-url]: https://www.npmjs.com/package/@jswork/next-node-base64
