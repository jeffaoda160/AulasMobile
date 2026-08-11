const al = [
    {nome: "Ana", nota: 8.5},
    {nome: "Bruno", nota: 6.0},
    {nome: "Carla", nota: 9.2},
    {nome: "Diego", nota: 4.0},
    {nome: "Eduarda", nota: 7.0}
];

al.filter(x => x.nota >= 7)
  .map(x => console.log(x.nome));

console.log("Reprovados:", al.filter(x => x.nota < 7).length);

al.map(x => {
    let sit = x.nota >= 7 ? "APROVADA" : "REPROVADO";
    console.log(`${x.nome} ${sit}`);
});
