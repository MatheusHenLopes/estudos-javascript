/* 

- As principais maneiras de atribuir valor a uma variável são +=, -=, *= e /=;
- É uma forma resumida da operação -> x = x + y;
- Em loops também é comum utilizar os operadores ++ ou --;

*/

var resposta = ['O resultado de 0x10 é:', 'O resultado de 1x10 é:', 'O resultado de 2x10 é:', 'O resultado de 3x10 é:', 'O resultado de 4x10 é:', 'O resultado de 5x10 é:', 'O resultado de 6x10 é:', 'O resultado de 7x10 é:', 'O resultado de 8x10 é:', 'O resultado de 9x10 é:', 'O resultado de 10x10 é:'];

var tabuada = 0;
var i = 0;


while (tabuada <= 100) {
    var respostaFinal = resposta[i];
    console.log(respostaFinal + tabuada);

    tabuada += 10;
    i++;
}

var x = 1;
var y = 2;

// soma

console.log(x = x + y);
console.log(x += y);

// subtração

console.log(x -= y);

// multiplicação

console.log(x *= y);

// divisão

console.log(x /= y);

// loops

console.log(x++);
console.log(x--);

while(x <= 100) {

    console.log(x);

    x *= 2;
}




