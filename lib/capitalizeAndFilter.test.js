const { capitalizeAndFilter } = require('./capitalizeAndFilter.js');

describe('capitalizeAndFilter function', () => {
  it('takes an array of strings, capitalizes all strings and filters out any strings with letter f', () => {
    const arrayOfStrings = ['hello', 'my', 'favorite', 'world'];
 
    expect(capitalizeAndFilter(arrayOfStrings)).toEqual(['HELLO', 'MY', 'WORLD']);
  });
});
