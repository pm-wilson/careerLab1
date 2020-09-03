const { getName } = require('./getName.js')

describe('getName function', () => {
  it('returns the name of an object', () => {
    const testName = 'spot';
    const testObject = { name: 'spot', age: 5, weight: '20 lbs' };
 
    expect(getName(testObject)).toEqual(testName);
  });
});
