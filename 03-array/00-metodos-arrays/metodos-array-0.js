 // Os métodos de array podem adicionar e remover elementos, resgatar apenas uma parte do array, ou seja, manipular e alterar o array.

 // length - refere ao comprimento do array

 var arr = [1, 2, 3, 4, 5];

 console.log(arr.length);

 // push - adiciona um item ao fim do array

 arr.push("push aqui")

 console.log(arr)

 // pop - remove o ultimo elemento do array elemento do array

 arr.pop();

 console.log(arr);

 // unshift - adiciona um elemento no inicio do array

 arr.unshift("unshift aqui");

 console.log(arr);

 // shift - remove um elemento o inicio do array

 arr.shift();

 console.log(arr);

 // acessar o último elemento de um array

 console.log(arr[arr.length -1]);

 // isArray - identifica o tipo de dado antes de começar a tratar ele

 console.log(Array.isArray(5));

 console.log(Array.isArray(arr));