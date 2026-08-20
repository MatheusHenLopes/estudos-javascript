// Modularizar o código - inibe a necessidade de repetir o mesmo código multiplas vezes através de reutilização da lógica, gerando uma mlehor manutenção do programa

// function NOME(ARG1, ARG2, ARG3...) { EXC.}


//Parametros/argumentos são opcionais "()"

function digaOi() {
    console.log("Oi, tudo bem?");
}

// EXECUTAR/CHAMAR/INVOCAR

digaOi();

// Argumentos
// Parametros podem ser de qualquer tipo porque JS tem tipagem fraca

function soma(a, b) {

    const soma = a + b;

    console.log("Soma: "+ soma);

}

soma(2, 4);

soma(8, 20);

//Return - retorno de dados em uma função
// return x

function multiplicacao (a, b) {

    const mult = a * b;

    return mult;

}

const resultado = multiplicacao(2, 2);

console.log(resultado);

const somaDois = resultado + 10;

console.log(somaDois);

// A função não precisa de parametro nem de retorno

// função anônima

const saudacao = function(nome) {
    console.log("Olá " + nome);
}

saudacao("TcheTche")

// Função anoônima 2: Callback
// função executada como argumento

function operacao(a, b, callback) {

    console.log("Realizando operação...");

    return callback(a, b);

}

let resultadoOperacao = operacao(10, 8, soma);

console.log(resultadoOperacao);

let resultadoDois = operacao(5, 5, function (x, y) {
return x - y;});

console.log(resultadoDois);

// Arrow Function
// funções com sintaxe menor

// (arg1, arg2) => {}

const dividir = (a, b) => {
    return a / b;
};

console.log(dividir(10, 5));

const multiplicacaoArrow = (a, b) => a * b;

// quando ela só tem uma linha, não precisa de: {} e return

console.log(multiplicacaoArrow(10, 10));

const mensagem = () => console.log("Testando");

mensagem();

// função que detecta o tipo do dado

function detectarTipo(valor) {

    if(typeof valor === "string") {
        return "String"
    } else if (typeof valor === "boolean") {
        return "Boolean"
    } else if (typeof valor === "number") {
        return "Number"
    } else {
        return "Tipo descinhecido"
    }
}

console.log(detectarTipo("teste"));
console.log(detectarTipo(true));
console.log(detectarTipo(67));

//



