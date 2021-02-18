const mask = (string) => {
  string = string.split("");
  string.splice(0, string.length-3, "#".repeat(string.length - 3));
  return string.join("");
}

console.log(mask("davidddd"));
