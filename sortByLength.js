function sortByLength (array) {
  let sorted = array.sort(function(a, b) {return a.length - b.length})
  return sorted
};
