'use strict';
const expect = require('chai').expect;
const Gangsterify = require('../dist/index.js').toSlang;

describe('simple validate test', () => {
  it('should return a string', async () => {
    const result = await Gangsterify('Hello');
    console.log(result);
    expect(result).to.be.a('string');
  });
});