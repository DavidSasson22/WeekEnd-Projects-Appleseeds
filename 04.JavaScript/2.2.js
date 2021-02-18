const test1 = [0, 0, 0, 1];
const test2 = [0, 1, 0, 1];
const test3 = [1, 0, 1, 1];
const test4 = [1, 0, 1, 0];

const BinaryInt = (array) => {
  let result;
  array[array.length -1] === 0 ? result = 0 : result = 1;
  array = array.reverse();
  for(let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      result += (Math.pow(i, 2));
    };
  };
  console.log(result);
}

BinaryInt(test1);
BinaryInt(test2);
BinaryInt(test3);
BinaryInt(test4);
