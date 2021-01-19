function multiply(a, b) {
  if (typeof a && typeof b === 'number') {
    return a * b
  } else throw new Error('Input numbers')
}

function multiplyBy10(b) {
  return multiply(10, b)
}
