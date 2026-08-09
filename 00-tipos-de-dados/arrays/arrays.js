/* 
- Os arrays são classificados como objetos, no entanto servem como listas
- Podemos ter itens de qualquer tipo de dados
- Porém não por chave e valor, e sim por índice
- Começa a contar a partir do 0
*/

// length é o comprimento do array, basicamente, quantos termos ele compreende

var arr = [5, "Matheus", true, {teste: 1, teste: 2}];
console.log(arr);

var arr2 = [2, 3, 4, 5];
console.log(arr2);

console.log(arr[1]);
console.log(arr2[0]);

arr[4] = 10;

arr[0] = "Teste";

console.log(arr);



