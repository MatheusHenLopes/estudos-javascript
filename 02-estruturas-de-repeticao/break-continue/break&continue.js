/* 

- Com break podemos encerrar uma instrução;
- Com continue podemos pular uma instrução;
- Utilizados na maioria das vezes em loops;

*/

for(var x = 10; x >= 0; x--) {

    console.log(x);

    if( x === 5) {
        break;
    }
}

console.log("Deu o brick");


var i = 10;

while(i < 100) {

    i += 10;

    if(i === 20 || i === 40) {
        console.log("CONTINUE");
        continue;
    }

    console.log('Teste maroto' + i);
}

