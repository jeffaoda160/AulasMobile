const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let r1 = [];

for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
        r1.push(n[i] * 10);
    }
}

let r2 = n.filter(x => x % 2 === 0).map(x => x * 10);

console.log(r1);
console.log(r2);
console.log(r1.toString() === r2.toString());
