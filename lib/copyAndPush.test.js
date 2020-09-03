const { copyAndPush } = require('./copyAndPush.js');

describe('dopyAndPush function', () => {
  it('returns array with numberToPush at the end', () => {
    const numberArray = [1, 2, 3];
    const numberToPush = 4;
 
    expect(copyAndPush(numberArray, numberToPush)).toEqual([1, 2, 3, 4]);
    expect(numberArray).toEqual([1, 2, 3]);
  });
});
