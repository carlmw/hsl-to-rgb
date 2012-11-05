var subject = require('../');

describe('HSLToRGB(r, g, b)', function () {
  it('should return the an array of values', function () {
    subject(35, -1.007, 127.5).should.eql([254.88549999999998, 148.73091666666667, 0.11450000000002092]);
  });
});
