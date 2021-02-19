const isogram = (str) => [...new Set(str.toLowerCase().split(""))].join("") === str.toLowerCase() ? true : false;  



console.log(isogram("Dermatoglyphics"))
console.log(isogram("aba"))
console.log(isogram("moOse"))
