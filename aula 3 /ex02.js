let a = [];
let q = Number(prompt("Quantos números?"));
let s = 0;

for (let i = 0; i < q; i++) {
    let n = Number(prompt("Digite um número:"));
    a.push(n);
    s += n;
}

console.log("Soma:", s);
console.log("Média:", s / q);
