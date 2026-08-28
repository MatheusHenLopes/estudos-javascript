const resumoVaga = {
    empresa: "Microsoft",
    bolsa: "R$1500,00",
    tecnico: "aceita técnico",
    cidade: "Porto Alegre",
    modelo: "remota",

    resultadoResumo: function () {
        return "A vaga disponível é da empresa " + this.empresa + ", a bolsa auxílio oferecida é de " + this.bolsa + " e " + this.tecnico + ". A empresa fica localizada em " + this.cidade + " com possibilidade para contratação na modalidade " + this.modelo
    }
}

console.log(resumoVaga.resultadoResumo());