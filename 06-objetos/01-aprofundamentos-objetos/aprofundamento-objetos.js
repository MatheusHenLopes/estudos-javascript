/* Conseguimos acessar propriedades e invocar métodos em diferentes tipos de dados atribuindo a características de um objeto a eles.

Dessa forma, podemos criar nosso objetos com propriedades e métodos para auxiliar nossa manipulação*/

// A característica principal do objeto é que o bloco fecha e abre com chaves, parte onde as propriedades são atribuidas.

let pessoa = {

    nome:"Matheus",
    idade: 18,

    falar: function(){
        console.log("Olá");
    },
    soma: function(a, b) {
        return a + b;
    }

}

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 65);

console.log(soma);

