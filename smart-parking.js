function whereCanIPark(spots, type) {
  if (type === 'regular') {
    for(var r = 0; r < spots.length; r++) {
      for(var c = 0; c < spots[r].length; c++) {
        if(spots[r][c] === 'R') {
          return [c, r];
        }
      }
    }
    return false;
  } else if (type === 'small') {
    for(var r = 0; r < spots.length; r++) {
      for(var c = 0; c < spots[r].length; c++) {
        if(spots[r][c] === 'R' || spots[r][c] === 'S') {
          return [c, r];
        }
      }
    }
    return false;
  } else if (type === 'motorcycle') {
    for(var r = 0; r < spots.length; r++) {
      for(var c = 0; c < spots[r].length; c++) {
        if(spots[r][c] === 'R' || spots[r][c] === 'S' || spots[r][c] === 'M') {
          return [c, r];
        }
      }
    }
    return false;

  } else {
    return "Not a valid type of car";
  }
}


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))


