const abbreviate = (words) => {
  return `${words[0]}.${words[words.search(" ") +1]}.`;
}

console.log(abbreviate("Sam Harris"))