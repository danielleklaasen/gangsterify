'use strict';
const expect = require('chai').expect;
const Gangsterify = require('../dist/index.js');

describe('simple validate test', () => {
  it('should return a string', () => {
    const result = Gangsterify.toSlang('Some text');
    expect(result).to.be.a('string');
  });
});