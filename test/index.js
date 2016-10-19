const chai = require('chai');
const assert = chai.assert;
require('./health-food-test');
require('./junk-food-test');
require('./overlord-test');
require('./tray-test');
require('./world-test');
require('./index-test');

describe('our test bundle', function() {
  it('should work', function() {
    assert(true);
  });
});