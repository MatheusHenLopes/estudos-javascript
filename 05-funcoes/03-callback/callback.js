// Uma callback function permite executar uma função depois de uma determinada ação;
// Conceito vinculado a parte assíncrona do JS.

// Função aplicada como argumento dentro de uma outra função para que seja executada durante o código.

// Nesse caso, as funções soma e multiplicacao utilizaram a função exibir como argumento, executando a mesma como gatilho.


function exibir (num) {
    console.log("A operação resultou em: " + num);
}

function soma (a, b, callback) {
    var operacao = a + b;
    callback(operacao)
}

function multiplicacao(a, b, cb) {
    var operacao = a * b;
    cb(operacao)
}

soma (9, 4, exibir);

multiplicacao (8, 6, exibir);