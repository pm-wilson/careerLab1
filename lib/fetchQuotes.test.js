const { fetchQuotes } = require('./fetchQuotes.js');

describe('fetchQuotes function', () => {
  it('returns a single quote from futurama api', async() => { 
    const quoteObject = await fetchQuotes();
    expect(quoteObject).toMatchObject({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    });
  });
});
