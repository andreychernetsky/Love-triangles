/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let length = preferences.length;

  for (let key = 0; key < length; k++) {
    let item = preferences[key];
    let key2 = item - 1;
    let item2 = preferences[key2];
    let item3 =preferences[item2 - 1];

    if ((item3 - 1) === key && (item !== item3)) {
      count++;
    }
  }
  return count / 3;
};

getLoveTrianglesCount([1,2,4]);