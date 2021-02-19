let a1 = "xyaabbbccccdefww";
let a2 = "xxxxyyyyabklmopq";

const organizeStrings = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
  

console.log(organizeStrings(a1, a2));