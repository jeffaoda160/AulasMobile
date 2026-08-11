function rng(ini, fim) {
    let arr = [];

    for (let i = ini; i <= fim; i++) {
        arr.push(i);
    }

    return arr;
}

function sm(arr) {
    let tot = 0;

    for (let n of arr) {
        tot += n;
    }

    return tot;
}
console.log(sm(rng(1, 10)));
