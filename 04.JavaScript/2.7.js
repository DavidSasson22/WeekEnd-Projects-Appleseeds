const basicOp = (op, num1, num2) => {
  switch (op) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2
    case "*":
      return num1 * num2
    case "/":
      return num1 / num2
    default:
      return `Op ${op} does not exist`
  };
};
