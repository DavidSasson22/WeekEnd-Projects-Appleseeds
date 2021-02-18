const grothPop = (pop, target) => {
  let counter =0
  while (pop < target) {
    pop = Math.floor(pop * 1.02 +50);
    counter += 1;
  };
  return counter
}

console.log(grothPop(1000, 1200));