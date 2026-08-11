function desc(p) {
    return `${p.nome} custa R$ ${p.preco} e tem ${p.estoque} em estoque`;
}

let p1 = {nome: "Arroz", preco: 25, estoque: 40};
let p2 = {nome: "Feijão", preco: 10, estoque: 30};

console.log(desc(p1));
console.log(desc(p2));
