function nthTriangularNumber(n) {
  if (n === 1) {
    return 1;
  }
  return nthTriangularNumber(n - 1) + n;
}

console.log(nthTriangularNumber(4))
console.log(nthTriangularNumber(5))
console.log(nthTriangularNumber(6))
console.log(nthTriangularNumber(7))
console.log(nthTriangularNumber(8))
console.log(nthTriangularNumber(9))