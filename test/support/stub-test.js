const chai = require('chai');
const assert = chai.assert;
const stub = require('./stub');

describe('stub', function(){
  it('should be an object', function(){
    var newStub = stub();
    assert.isObject(newStub);
  });

  describe('of', function(){
    it('will stub and replace functions', function(){
      var newStub = stub().of('fillRect');
      assert.isFunction(newStub.fillRect);
    });

    it('will stub and replace this function', function(){
      var newStub = stub().of('clearRect');
      assert.isFunction(newStub.clearRect);
    });

    it('will stub and replace a different function', function(){
      var newStub = stub().of('beginPath');
      assert.isFunction(newStub.beginPath);
    });

    it('will stub and replace another function', function(){
      var newStub = stub().of('arc');
      assert.isFunction(newStub.arc);
    });

    it('will stub and replace yet another function', function(){
      var newStub = stub().of('drawImage');
      assert.isFunction(newStub.drawImage);
    });

    it('will stub and replace yet another function', function(){
      var newStub = stub().of('src');
      assert.isFunction(newStub.src);
    });

    it('handles a non-stubbed assignments', function(){
      var newStub = stub();
      newStub.fillStyle = 'red';
      assert.equal(newStub.fillStyle, 'red');
    });

    it.skip('handles a non-stubbed functions being called', function(){
      var newStub = stub();
      newStub.fillStyle('red');
    });

    it('tells you how many times a function was called', function(){
      var newStub = stub().of('fillRect');
      assert.equal(newStub.fillRect.calls.length, 0);
      newStub.fillRect();
      assert.equal(newStub.fillRect.calls.length, 1);
      newStub.fillRect();
      assert.equal(newStub.fillRect.calls.length, 2);
    });

    it('tells you what methods were called with', function(){
      var newStub = stub().of('fillRect');
      newStub.fillRect('cats', 'dogs');
      assert.deepEqual(newStub.fillRect.calls[0], ['cats', 'dogs']);
    });

  });
});
