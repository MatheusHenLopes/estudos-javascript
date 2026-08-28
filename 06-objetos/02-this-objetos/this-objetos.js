// Fora dos escopós locais o this sempre se refere ao objeto global window;

// Em objetos o this vai se referir a instância e pode acessar suas propriedades.

var teste = 5

console.log(this.teste);
console.log(teste);

let pessoa = {
    nome:"Matheus",
    idade: 18,
    falar: function(){
        console.log("Olá");
    },
    soma: function(a, b) {
        return a + b;
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome)
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function () {
        return 'Sr. '  + this.nome;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("Olá " + sdc)


