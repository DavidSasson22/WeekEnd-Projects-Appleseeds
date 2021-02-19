const longest = (string) => string.split(" ").sort((a, b) => b.length - a.length)[0];

console.log(longest("david yosef sasson da dav dave"));