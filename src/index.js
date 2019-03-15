/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports =function getLoveTrianglesCount(preferences = []) {
  let k = 0;

  for(let i = 0; i < preferences.length; i++){
    if(preferences[preferences[preferences[i] - 1]-1] === i + 1 &&(preferences[i] !== preferences[preferences[preferences[i] - 1]-1]) ){
      k++;
    }
  }
  return (k/3);
};

