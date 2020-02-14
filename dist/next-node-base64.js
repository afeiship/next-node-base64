/*!
 * name: @feizheng/next-node-base64
 * description: Base64 for nodejs.
 * url: https://github.com/afeiship/next-node-base64
 * version: 1.0.0
 * date: 2020-02-14 13:06:08
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var BASE_64 = 'base64';
  var ASCII = 'ascii';

  var NxNodeBase64 = nx.declare('nx.NodeBase64', {
    statics: {
      encode: function(inString) {
        return Buffer.from(inString).toString(BASE_64);
      },
      decode: function(inString) {
        return Buffer.from(inString, BASE_64).toString(ASCII);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxNodeBase64;
  }
})();

//# sourceMappingURL=next-node-base64.js.map
