let a = [];

while (true) {
    let n = prompt("Digite um nome:");

    if (n.toLowerCase() === "fim") {
        break;
    }

    a.push(n);
}

console.log("Nomes cadastrados:", a.length);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
