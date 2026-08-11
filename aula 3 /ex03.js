let a = [12, 5, 27, 8, 19];
let maior = a[0];

for (let i = 1; i < a.length; i++) {
    if (a[i] > maior) {
        maior = a[i];
    }
}

console.log("Maior:", maior);
