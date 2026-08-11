let a = [2, 7, 10, 13, 18, 21];
let pares = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        pares++;
    }
}

console.log("Pares:", pares);
