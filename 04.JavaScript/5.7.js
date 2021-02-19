const shortest = (string) => string.split(" ").sort((a, b) => a.length - b.length)[0];

console.log(shortest("david yosef sasson da dav dave"));