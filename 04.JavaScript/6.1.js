const rqaEzty = "RqaEzty";

const mumbling = (string) => {
  return string.split("").map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join("-")
};

console.log(mumbling(rqaEzty));