var chain = require('./../chain_fns.js')
var expect = require('chai').expect

test_module = {
  add: function(a, b) {
    return a + b;
  },
  square: function(x) {
    return x * x;
  }
}

describe("chain", function() {
  it("works as a wrapper", function() {
    var fn = chain(test_module)
    var result = fn(1).add(1).square()()
    expect(result).to.equal(4)
  })

  it("works as a module", function() {
    var fn = chain(test_module)
    var result = fn.add(1,1)
    expect(result).to.equal(2)
  })
})
