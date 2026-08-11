let al = [
    {nome: "Ana", nota: 8},
    {nome: "João", nota: 6},
    {nome: "Pedro", nota: 7},
    {nome: "Maria", nota: 9},
    {nome: "Lucas", nota: 5}
];

let res = al.map(a => ({
    ...a,
    situacao: a.nota >= 7 ? "Aprovado" : "Reprovado"
}));

let ap = res.filter(a => a.nota >= 7);

let med = res.reduce((s, a) => s + a.nota, 0) / res.length;

console.log(res);
console.log("Aprovados:", ap.length);
console.log("Média:", med);
