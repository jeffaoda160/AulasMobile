let p = [
    {nome: "Arroz", preco: 25},
    {nome: "Feijão", preco: 10},
    {nome: "Carne", preco: 80},
    {nome: "Celular", preco: 900}
];

let filt = p.filter(x => x.preco > 50);
let nom = filt.map(x => x.nome);

console.log(filt);
console.log(nom);
