const tribonacci = (num) => {
  let result = [0, 0, 1];
  for (let i = 3; i <= num; i++) {
    result.push(result[result.length -1] + result[result.length -2] + result[result.length -3]);
  };
  return result
};

console.log(tribonacci(10));