// DOM = Document Object Model;

/* 
   - Uma interface de programação para HTML;
   - Por meio dele temos métodos para acessar a árvore de elementos;
   - o DOM fornece uma cópia do HTML;
   - Podemos manipular eventos pelo DOM para afetar o HTML.
*/

// Quando acessamos, podemos manipulá-los da forma que quisermos;
// Esse acesso é semelhante as regras do CSS e é feito através de tags, ids, classes, etc.

// Acessando por tag

var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis[3]);

// Acessando por id

var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

// Acessando por class

var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista)