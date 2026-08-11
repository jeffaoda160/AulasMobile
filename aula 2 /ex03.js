function med(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function sit(m) {
    if (m >= 7) return "Aprovado";
    if (m >= 5) return "Recuperação";
    return "Reprovado";
}

let n1 = Number(prompt("Nota 1:"));
let n2 = Number(prompt("Nota 2:"));
let n3 = Number(prompt("Nota 3:"));

let m = med(n1, n2, n3);

console.log("Média:", m);
console.log("Situação:", sit(m));
