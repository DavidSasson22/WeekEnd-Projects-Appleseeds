const test1 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


const greaterThan10 = (num) => {
  return num > 10 ? true : false
}

const filter0 = (array, condition) => {
  result = [];
  for (element of array) {
    condition(element) && result.push(element);
  }
  return result
}

console.log(7 > 6);
console.log(filter0(test1, greaterThan10));