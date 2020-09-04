const fetch = require('node-fetch');

async function fetchQuotes() {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const [{ character: name, quote: text, image }] = await response.json();

  return { name, text, image };
}
module.exports = { fetchQuotes };
