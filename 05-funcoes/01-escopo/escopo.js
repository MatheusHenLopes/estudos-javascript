/* 

No JS podemos ter vários escopos:
- O global, que é iniciado em toda a aplicação;
- E os locais, que podem existir em varias instruções como as funções.

*/

// Escopo global

var x = 1;

var y = 3;

console.log(x, y);

function teste(){

// Escopo local

    var z = 0;

    console.log(z);

    console.log(x);


}

teste();

// Erro porque "z" está dentro do escopo local

//console.log(z);

function testando () {

    var z = 5;

    console.log(z);

}

testando();

// essas estruturas não apresentam escopo em seu bloco, misturando if, for, while no escopo global.

if(true) {

    var p = 1;

}

console.log(p);

