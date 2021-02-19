const test1 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


const greaterThan10 = (num) => {
  return num > 10 ? true : false
}

/*-----------------FILTER-----------------*/

const filter0 = (array, condition) => {
  let result = [];
  for (element of array) {
    condition(element) && result.push(element);
  }
  return result
}




/*-----------ForEach-------------*/

const forEach0 = (array, someFunction) => {
  for (let i = 0; i < array.length; i++) {
    someFunction(array[i], i, array);
  }
}



/*----------------Map----------------*/

const map0 = (array, someFunction) => {
  let copy = [];
  for (let i = 0; i < array.length; i++) {
    copy.push(someFunction(i), i, array);
  }
} 
