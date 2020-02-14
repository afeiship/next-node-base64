(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxNodeBase64 = require('../src/next-node-base64');

  describe('NxNodeBase64.api encode/decode:', function() {
    test('init', function() {
      var res = NxNodeBase64.encode('afei');
      expect(NxNodeBase64.decode(res)).toBe('afei');
    });
  });
})();
