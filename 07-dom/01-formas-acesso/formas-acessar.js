/* 
- Com a evolução da linguagem foram cirados dois seletores
- querySelector e querySelectorAll
- A partir deles podemos acessar elementos baseados nas regras de CSS
*/

var itensClasse = document.getElementsByClassName("item");

console.log(itensClasse);

//querySelectorAll

var itensQuery = document.querySelectorAll("#lista2 li");

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll("#lista .item");

console.log(itensQuery2);

// querySelector - pega o primeiro elemento que encontra

var lista = document.querySelector("#lista");

console.log(lista);

var primeiraLista = document.querySelector("ul");

console.log(primeiraLista);

var spanTeste = document.querySelector("#paragrafo span");

console.log(spanTeste);