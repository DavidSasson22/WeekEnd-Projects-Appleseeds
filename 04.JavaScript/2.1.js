const numbers1 = [19, 5, 42, 2, 77];
const numbers2 = [1, 2, 5, 8];


const SumLowest = (array) => {
  let result = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > 0 && array[j] < array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      };
    };
    result += array.pop();
  };
  console.log(result);
  return result
};

SumLowest(numbers1);
SumLowest(numbers2);