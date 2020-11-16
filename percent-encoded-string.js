function urlEncode(text) {
  let trimmed = text.trim();
  let split = trimmed.split(' ');
  var length = split.length + (split.length - 1);
  for (var i = 1; i < length; i++){
    split.splice(i, 0, '%20');
    i++;
  } 
  return split.join('');
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));