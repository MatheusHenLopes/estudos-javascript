/* 

ESTRUTURAS DE REPETIÇÃO

-     Essas estruturas serve para repetir um número indeterminado de vezes uma mesma operação;
- Ex: repetir uma determinada lógica em cada elemento de um Array;
- As estruturas mais comuns são While e For;
- Cuidado com loops infinitos.

- O While é a estrutura de repetilção mais simples
- A ideia é que ela repita algo até atingir tal condição
-  While significa Enquanto

*/

var x = 0;

while(x <= 5) {
    console.log("Testando repetição" + x);
    // incrementador
    x++;
}

var arr = ['teste', 'testando'];
var y = 0;

while (y <= 1) {
    console.log(arr[y]);
    y++;
}

var palavra = 'ANAFLOREUTEAMOMINHAPRINCESA';
var i = 0;

while (i <= 26) {
    console.log(palavra[i]);
    i += 1;
}

