function som(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) return "Não pode dividir por zero";
    return a / b;
}

let a = Number(prompt("Número 1:"));
let b = Number(prompt("Número 2:"));

console.log("Soma:", som(a, b));
console.log("Subtração:", sub(a, b));
console.log("Multiplicação:", mult(a, b));
console.log("Divisão:", div(a, b));
