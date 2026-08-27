// Podemos também resgatar um conjunto de elementos com os métodos e identificar o índice de um elemento específico.

// splice adiciona elemento no meio do array e pode exluir, substituindo um elemento por outro.

var arr = [1, 2, 3, 4, 5];

arr.splice(2, 0, 6767);

console.log(arr);

//O primeiro termo se refere ao indice a ser acessado, o segundo termo ao indice a ser removido e o terceiro termo ao indice a ser adicionado.

arr.splice(4, 1)

console.log(arr);

// indexOf - busca o valor e retorna o índice. nesse caso ele procura o valor 5 e encontra no indice 4.

console.log(arr.indexOf (5));

// join - transforma todo o array em uma string

var arr2 = ["Quero", "muito", "comer", "pizza."];

console.log(arr2);

console.log(arr2.join(" "))

// reverse - inverte os termos de um array

console.log(arr2.reverse());
