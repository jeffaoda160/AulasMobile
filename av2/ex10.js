function cntLet(txt, let) {
    let qtd = 0;

    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === let) qtd++;
    }

    return qtd;
}
