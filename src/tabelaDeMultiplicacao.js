function criaTabela(tamanho) {
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.

    let tabela = [];
    //    let tamanho = 0;
    for (let contador = 0; contador <= tamanho; contador++) {
        tabela[contador] = [];

        for (let segCont = 0; segCont <= tamanho; segCont++) {
            tabela[contador][segCont] = contador * segCont
        }

        //        tabela.push = contador;

    }
    console.table(tabela)
    return tabela;
}

criaTabela(7)