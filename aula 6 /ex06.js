const car = [
    {nome: "Caderno", preco: 18.90, quantidade: 3},
    {nome: "Caneta", preco: 2.50, quantidade: 10},
    {nome: "Mochila", preco: 149.90, quantidade: 1},
    {nome: "Borracha", preco: 1.20, quantidade: 4}
];

const sub = car.map(x => x.preco * x.quantidade);

let tot = 0;

sub.forEach(x => tot += x);

console.log(`Total: R$ ${tot.toFixed(2)}`);

car.filter(x => x.preco * x.quantidade > 100)
   .forEach(x => console.log(x.nome));
