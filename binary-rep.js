const number = 30;




function binaryValue(num) {
  function binaryLength(n) {
    let i = 0;
    while (2 ** i < n) {
      i++;
    }
    return i;
  }

  let bPosition = binaryLength(num) - 1;
  let binaryString = '';

  function getValue(target) {
    while (bPosition >= 0) {
      let newTarget = target;
      if (2 ** bPosition <= target) {
        binaryString += '1';
        newTarget = target - (2 ** bPosition);
      } else {
        binaryString += '0';
      }
      bPosition --;
      getValue(newTarget)
    }
  }
  getValue(num);
  return binaryString;
}

console.log(binaryValue(number))