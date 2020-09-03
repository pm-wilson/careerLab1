const { copyAndPush } = require('./copyAndPush.js');

describe('getName function', () => {
  it('returns the name of an object', () => {
    const numberArray = [1, 2, 3];
    const numberToPush = 4;
 
    expect(copyAndPush(numberArray, numberToPush)).toEqual([1, 2, 3, 4]);
  });
});
