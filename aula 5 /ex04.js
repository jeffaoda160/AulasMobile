let p = [
    {nome: "Arroz", preco: 25},
    {nome: "Feijão", preco: 10},
    {nome: "Carne", preco: 80},
    {nome: "Leite", preco: 6}
];

for (let x of p) {
    console.log(`${x.nome} - R$ ${x.preco}`);
}
