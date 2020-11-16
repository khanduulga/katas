function conditionalSum(nums, condition) {
  let matches = [];
  let sum = 0;
  if(condition === 'even'){
    for(let numE of nums){
      if(numE%2 === 0){
        matches.push(numE)
      }
    }
    for(let matchE of matches){
      sum += matchE;
    }
    return sum;
  } else if (condition === 'odd') {
    for(let numO of nums) {
      if(numO%2 === 1) {
        matches.push(numO);
      }
    }
    for(let matchO of matches){
      sum += matchO;
    }
    return sum;
  } else {
    return 'Not given a valid condition.'
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));