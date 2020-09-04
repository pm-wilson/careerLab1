async function fetchQuotes() {
  const fetch = require('node-fetch');
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
    const quoteJSON = await response.json();
    const quoteObject = quoteJSON[0];

  return { name: quoteObject.character, text: quoteObject.quote, image: quoteObject.image }
}
    
module.exports = { fetchQuotes };
