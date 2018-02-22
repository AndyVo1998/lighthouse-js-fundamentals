function loopylighthouse (range, multiples, words) {
  for (var num = range[0]; num < range[1] + 1; num++) {
   if (num % multiples[0] === 0 && num % multiples[1] === 0) {
     console.log(words[0] + words[1]);
   } else if (num % multiples[1] === 0) {
     console.log(words[1]);
   } else if (num % multiples[0] === 0 && num % multiples[1] !== 0){
     console.log(words[0]);
   } else {
     console.log(num);
   }
 }
}