function stringSplitter(string, separator) {
  const output = [];
  if (!string.includes(separator)) {
    output.push(string);
    return output;
  } else {
    output.push(string.substring(0, string.indexOf(separator)));
    return output.concat(stringSplitter(string.substring(string.indexOf(separator) + 1), separator));
  }
}

console.log(stringSplitter('02/20/2020', '/'))
console.log(stringSplitter('This is a test string', ' '))