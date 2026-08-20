// Métodos de string servem para manipular textos nos códigos

// length - le a string e retorna o comprimento, nesse caso a quantidade de caracteres,

var nome = "Matheus";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// indexOf - da o indice do caracter requerido

console.log(nome[2]);

var frase = "Três pratos de trigo para três tigres tristes";

console.log(frase.indexOf("trigo"));

// slice - extrai uma parte da string se baseando na posição

var trigo = frase.slice(15, 20);

console.log(trigo);

// replace

var novaFrase = frase.replace("trigo", "tigre");

console.log(novaFrase);