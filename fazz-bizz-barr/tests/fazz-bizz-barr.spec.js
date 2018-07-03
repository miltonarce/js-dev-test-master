const assert = require("assert");

const fbb = require("../lib/fazz-bizz-barr");

describe("fazz-bizz-barr", function() {
  it("It should return Fazz is pased 3", function() {
    assert.deepEqual(fbb(3), "Fazz");
  });
});

describe("fazz-bizz-barr", function() {
  it("It should return Bizz is pased 5", function() {
    assert.deepEqual(fbb(5), "Bizz");
  });
});

describe("fazz-bizz-barr", function() {
  it("It should return Barr is pased 7", function() {
    assert.deepEqual(fbb(7), "Barr");
  });
});

describe("fazz-bizz-barr", function() {
  it("It should return Fazz Barr is pased 21", function() {
    assert.deepEqual(fbb(21), "Fazz Barr");
  });
});
