// setTimeout e setInterval:

// Podemos utilizar essas funções criar ações no software que executam depois de um tempo ou de tempos em tempos. Logo, ele não executa na ordem padrão do código, mas sim depois de um tempo ou gatilho especifico. Um dos argumentos destas funções é uma callback function.

// O tempo é definido em milissegundos

// setTimeout dispara uma ação após determinado tempo.

console.log("Antes do setTimeout");

setTimeout(function() {

    console.log("Testando o setTimeout")

}, 3000);

console.log("Depois do setTimeout");

// setInterval define um intervalo para chamar a ação durante um intervalo especifico

setInterval(function()
{

    console.log("Testando o setInterval")

}, 1000);