const sistemaParado = prompt("O sistema está completamente parado?\n" + 
                            "1 - Sim, preciso de atendimento urgente.\n" + 
                            "2 - Não, possuo outro problema.");


function classificarChamados(sistemaParado) {

    if (sistemaParado === "1") {
        return "Erro crítico, chamado emergente de alta prioridade para o suporte!";
    
    }
    
       const tipoProblema = prompt("Qual o tipo do seu problema?\n" + 
                                "1 - Rede\n" + 
                                "2 - Periféricos\n" +
                                "3 - Usuário\n" +
                                "4 - Hardware\n" +
                                "5 - Software");

    switch (tipoProblema) {

        case "1":
            return "Problema urgente, verificaremos o mais rápido possível!";
        
        case "2":
            return "Problema intermediário, espere alguns instantes";
        
        case "3":
            return "Problema leve, daremos prioridade para outros casos";
        
        case "4":
            return "Problema moderado, verificaremos a demanda logo";

        case "5":
           return "Problema moderado, em alguns resolveremos em alguns instantes";
    }

}

const resultadoChamado = classificarChamados(sistemaParado);
console.log(resultadoChamado);
alert(resultadoChamado);
