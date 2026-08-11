function calc(a, b, op) {
    return op(a, b);
}

console.log(calc(10, 5, (a, b) => a + b));
console.log(calc(10, 5, (a, b) => a - b));
console.log(calc(10, 5, (a, b) => a * b));
