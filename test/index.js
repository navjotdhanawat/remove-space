var should = require('chai').should(),
    scapegoat = require('../index'),
    escapeSpace = scapegoat.escapeSpace;

describe('#escapeSpace', function() {
  it('Remove Space', function() {
    escapeSpace(' str').should.equal('str');
    escapeSpace('').should.equal('');
  });
});
