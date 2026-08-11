function par(n) {
    return n % 2 === 0;
}

let n = Number(prompt("Número:"));

if (par(n)) {
    console.log("Par");
} else {
    console.log("Ímpar");
}
