function primo(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

let n = Number(prompt("Número:"));

for (let i = 2; i <= n; i++) {
    if (primo(i)) {
        console.log(i);
    }
}
