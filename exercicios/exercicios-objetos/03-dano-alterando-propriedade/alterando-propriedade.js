const arqueiro = {
    nome: "Arqueiro",
    vida: 20,
    sofrerBoss: function () {
        return this.vida -= 5;
    }
};

console.log(arqueiro.vida);

arqueiro.ataqueBoss();

console.log(arqueiro.vida);

arqueiro.ataqueBoss();

console.log(arqueiro.vida);