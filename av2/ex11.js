function podeVot(ida) {
    return ida >= 16;
}

let ida = Number(prompt("Digite sua idade"));

if (podeVot(ida)) {
    alert("Pode votar");
} else {
    alert("Não pode votar");
}
