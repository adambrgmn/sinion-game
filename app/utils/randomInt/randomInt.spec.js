import { expect } from 'chai';

import randomInt from '../randomInt';

describe('Util: randomInt()', () => {
  let random;
  before(() => {
    random = randomInt(1, 4);
  });

  it('should return a random integer between declared numbers', () => {
    expect(random).to.be.within(1, 4);
  });

  it('should only return an integer, not floating', () => {
    const isInt = !isNaN(random) &&
      parseInt(Number(random), 10) === random &&
      !isNaN(parseInt(random, 10));

    expect(isInt).to.equal(true);
  });

  it('should not accept anything else than two integers as arguments', () => {
    const newRandom = randomInt(2.1, 1);
    expect(newRandom).to.equal(undefined);
  });
});
