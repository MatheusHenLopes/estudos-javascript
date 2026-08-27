/*

- Sintaxe mais complexa;
- Apesar de parecer difícil, como a instrução fica toda em uma linha, gera maior controle;

*/

for(var i = 0; i < 10; i++) {

    console.log('Repetindo For:' + i);

}

var arr = [1, 2, 3, 4];

for (var j = 0; j < arr. length; j++) {
    console.log(arr[j]);
}

console.log(arr.length);

for (var x = 10; x <= 100; x *= 10) {
    console.log(x);
}