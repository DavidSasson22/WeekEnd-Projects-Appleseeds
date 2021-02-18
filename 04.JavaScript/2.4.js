const findUniq = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1] && array[i] !== array[i - 1]) {
      return array[i];
    };
  };
  return "Uniq not found"
}


console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));