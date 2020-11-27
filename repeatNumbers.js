const repeatNumbers = function(data) {
  let result = '';
  for(let set of data) {
    for(let i = 0; i < set[1]; i++) {
      result += set[0];
    }
    result += ', '
  }
  return result.slice(0, result.length - 3);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));