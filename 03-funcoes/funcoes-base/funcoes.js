/*

- Funções são blocos de códigos retilizáveis;
- Ou seja, evitamos a repetição da lógica de um programa em diversa partes do código;
- A função precisa ser invocada para ser executada.

*/

function primeiraFuncao () {

console.log('Salve tropa')

}

primeiraFuncao();

function dizerNome(nome) {

    console.log('O nome é ' + nome)

}

dizerNome("Matheus");
dizerNome("Chris");
dizerNome("Vito");

// return é como um botão de ejeção, ele define aquele que deve ser salvo separando do que é apenas executado. Fácil de pensar aplicando If junto de uma função, onde o return é mais do que essencial

function soma (a, b) {
    var soma = a + b;
    return soma
}

var somaUm = soma(2, 5);

console.log(somaUm);

var somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(4,5));

