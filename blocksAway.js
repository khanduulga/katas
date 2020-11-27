//INCOMPLETE
const blocksAway = function(directions) {
  let result = {east: 0, north: 0};
  for (let i = 0; i < directions.length; i+2) {
    for(let j = 1; j < directions.length; i+2) {
      if(directions[i] === 'right') {
        result.east = result.east + directions[j];
      } else if (directions[i] === 'left') {
        result.north = result.north + directions[j];
      }
    }
  } 
  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));