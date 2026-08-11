function desc({nome, autor, paginas = 0}) {
    console.log(`"${nome}", de ${autor}, tem ${paginas} paginas.`);
}

const liv = [
    {nome: "Dom Casmurro", autor: "Machado de Assis", paginas: 256},
    {nome: "O Cortiço", autor: "Aluísio Azevedo", paginas: 200},
    {nome: "Iracema", autor: "José de Alencar"}
];

liv.forEach(x => desc(x));
