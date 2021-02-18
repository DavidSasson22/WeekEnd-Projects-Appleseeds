const NextPerfectSquare = (num) => {
  return Math.sqrt(num,2)%1 === 0 ? result = Math.pow(Math.sqrt(num,2)+1, 2): result = -1;
}

console.log(NextPerfectSquare(36));