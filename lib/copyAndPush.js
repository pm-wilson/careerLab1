function copyAndPush(array, toAdd) {
  const answer = array.slice()
  answer.push(toAdd);
  return answer;
}

module.exports = { copyAndPush };