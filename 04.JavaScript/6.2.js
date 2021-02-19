const duplicates = (str) => {
  let result = 0;
  let counter = {};
  for (char of str.toLowerCase()) {
    char in counter ? counter[char] += 1 : counter[char] = 1;
  };
  for (let key in counter) {
    if (counter[key] > 1) {
      result += 1;
    };
  };
  return result
};

console.log(duplicates("abcde"));
console.log(duplicates("aabbcde"));
console.log(duplicates("aabBcde"));
console.log(duplicates("indivisibility"));
console.log(duplicates("ndivisibilities"));