var assert = require('assert'),
  replace = require('../').replace;

describe('PropReplace', function() {
  describe('Should automagically replace tokens with property values.', function() {
    it('\'${val1}, ${val2}!\' should work.', function() {
      var template = '${val1}, ${val2}!';
      var obj = {
        val1: 'Hello',
        val2: 'World'
      };

      assert.equal(replace(template, obj), 'Hello, World!');
    });
  });

  describe('Should not confuse similar keys', function() {
    it('\'${val1}, ${val11}!\' should work.', function() {
      var template = '${val1}, ${val11}!';
      var obj = {
        val1: 'Hello',
        val11: 'World'
      };

      assert.equal(replace(template, obj), 'Hello, World!');
    });
  });
});