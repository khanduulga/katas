function numberOfVowels(str) {
  let sumOfVowels = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      sumOfVowels += 1;
    }
  }
  return sumOfVowels;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));