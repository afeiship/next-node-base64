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
