/*
- São comumente utilizados para verificação de estruturas e condiçao;
- Temos os seguintes opreadores: ==, !=, <, >, <=, >=;
- A partr de uma expressão de compração podemos obter true ou false;
- Uma variável declarada como 1 ou 0 representa true ou false pro java script
*/

var idade = prompt("Digite aqui sua idade.");
var possuiCarro = 0;

if (idade >= 18) {
    console. log("O usuário pode fazer a carteira");
}

if (idade <= 17) {
    console.log(" O usuário é menor de idade e não pode fazer a carteira")
}

// = serve para atribuição, == para comparação e != para diferenciação

var nome = prompt("Qual seu nome?");
 
if(nome == "Matheus") {
    console.log ("O seu nome é Matheus");
}

if(nome != "Matheus") {
    console.log("O nome não é Matheus");
}
