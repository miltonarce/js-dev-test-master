const assert = require("assert");

const { BtoH, HtoB } = require("../lib/hexa-binary-converter");

describe("hexa-binary-converter", function() {
  it("It should return hexa is pased binary", function() {
    assert.deepEqual(BtoH(1011), "B");
  });
});

describe("hexa-binary-converter", function() {
  it("It should return binary is pased hexa", function() {
    assert.deepEqual(HtoB("B"), 1011);
  });
});
