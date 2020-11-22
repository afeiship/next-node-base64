(function () {
  const NxNodeBase64 = require('../src');

  describe('NxNodeBase64.methods', function () {
    test('init', function () {
      var res = NxNodeBase64.encode('afei');
      expect(NxNodeBase64.decode(res)).toBe('afei');
    });
  });
})();
