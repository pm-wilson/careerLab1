function capitalizeAndFilter(array) {
    const answer = [];

    for (let i = 0; i < array.length; i++) {
        const currentWord = array[i];
        const currentCapitalizedWord = currentWord.toUpperCase();
        const currentFirstLetter = currentCapitalizedWord[0];

        if (currentFirstLetter !== 'F') {
            answer.push(currentCapitalizedWord);
        }
    }
    return answer
  }
  
  module.exports = { capitalizeAndFilter };
  