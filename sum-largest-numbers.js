//sums the two largest numbers in a given array
function sumLargestNumbers(nums) {
  let first = 0
  let second = 0
  let sum = 0;
  let indexOfFirst;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] > first){
      first = nums[i];
      indexOfFirst = i;
    }
  }

  nums.splice(indexOfFirst,1);

  for(let i = 0; i < nums.length; i++){
    if(nums[i] > second){
      second = nums[i];
    }
  }

  sum = first + second;
  return sum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


