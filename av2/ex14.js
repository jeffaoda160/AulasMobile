function rev(arr) {
    let novo = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        novo.push(arr[i]);
    }

    return novo;
}
console.log(rev([1, 2, 3, 4, 5]));
