function anagrams(string) {
  let grams = [];
  if (string.length === 1) {
    grams.push(string);
    return grams;
  }

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];
    const remaining = string.substring(0, i) + string.substring(i + 1);
    const otherGrams = anagrams(remaining);

    for (let k = 0; k < otherGrams.length; k++) {
      grams.push(firstChar + otherGrams[k]);
    }
  }
  
  return grams;
}

console.log(anagrams('east'));