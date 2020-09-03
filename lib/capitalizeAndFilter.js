function capitalizeAndFilter(array) {
  const capitalizedArray = array.map((word) => word.toUpperCase());
  return capitalizedArray.filter((word) => word[0] !== 'F');
}
  
module.exports = { capitalizeAndFilter };
