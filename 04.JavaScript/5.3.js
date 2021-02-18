const toCamelCase = (string) => {
  result = string.split(/[-_]/).join('');
  console.log(result);
  return result
}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");