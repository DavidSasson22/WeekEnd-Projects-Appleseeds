console.time('Execution Time');

const toWeirdCase = (string) => {
  let result = '';
  let words = string.split(" ");
  for (word of words) {
    for (let i = 0; i < word.length; i++) {
      result += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
    };
    result += " ";
  };
  return result
}
console.log(toWeirdCase("David Yosef Sasson"));
console.timeEnd('Execution Time');

