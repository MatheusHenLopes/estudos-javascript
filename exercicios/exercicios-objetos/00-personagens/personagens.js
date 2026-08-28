const arqueiro = {
    nome: "Arqueiro",
    vida: "20 de HP",
    ataque: "Chuva de flechas",
    apresentacaoArqueiro: function () {
        return "Você selecionou o " + this.nome + ", ele possui " + this.vida +" e seu principal ataque é a " + this.ataque
    }
};

const guerreiro = {
    nome: "Guerreiro",
    vida: "30 de HP",
    ataque: "Corte duplo",
    apresentacaoGuerreiro: function () {
        return "Você selecionou o " + this.nome + ", ele possui " + this.vida +" e seu principal ataque é a " + this.ataque
    }
};

const mago = {
    nome: "Mago",
    vida: "15 de HP",
    ataque: "Bola de fogo",
    apresentacaoMago: function () {
        return "Você selecionou o " + this.nome + ", ele possui " + this.vida +" e seu principal ataque é a " + this.ataque
    }
};

const escolhaPersonagem = prompt("Escolha um personagem para iniciar a campanha:\n1 - Arqueiro\n2 - Guerreiro\n3 - Mago");

switch (escolhaPersonagem) {

    case "1":

    console.log(arqueiro.apresentacaoArqueiro());
    break;

    case "2":

    console.log(guerreiro.apresentacaoGuerreiro());
    break;

    case "3":

    console.log(mago.apresentacaoMago());
    break;

}