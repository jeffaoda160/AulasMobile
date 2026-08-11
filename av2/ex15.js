let prod = [
    {id: 1, nome: "Teclado", preco: 80},
    {id: 2, nome: "Mouse", preco: 120},
    {id: 3, nome: "Monitor", preco: 600},
    {id: 4, nome: "Headset", preco: 150},
    {id: 5, nome: "Webcam", preco: 90}
];

let p3 = prod.find(p => p.id === 3);
console.log(p3);

let acima = prod.filter(p => p.preco > 100);
console.log(acima);

let nomes = prod.map(p => p.nome);
console.log(nomes);

prod.forEach(p => {
    console.log(`${p.nome} - R$ ${p.preco}`);
});
