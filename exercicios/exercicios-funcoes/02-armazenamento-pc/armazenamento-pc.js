const armazenamentoTotalUsuario = Number(prompt("Digite aqui o armazenamento total do seu PC"));
const armazenamentoDisponivelUsuario = Number(prompt("Digite aqui o armazenamento disponível do seu PC"));
const espacoOcupadoProgramaUsuario = Number(prompt("Digite aqui o espaço total que o programa desejada ira ocupar"));

let verificarArmazenamento = function calculoArmazenamento (armazenamentoTotal, armazenamentoDisponivel, espacoOcupadoPrograma) {

    if ((armazenamentoDisponivel - espacoOcupadoPrograma) >= (armazenamentoTotal * 0.10)) {
        return "Se você instalar o programa ainda restaram " + (armazenamentoDisponivel - espacoOcupadoPrograma) + " GB de armazenamento disponível:" + "Você pode baixar o programa sem problemas no seu PC";

    }

    else if ((armazenamentoDisponivel - espacoOcupadoPrograma) < (armazenamentoTotal * 0.10) && (armazenamentoDisponivel - espacoOcupadoPrograma) > 0){
        return "Se você instalar o programa ainda restaram " + (armazenamentoDisponivel - espacoOcupadoPrograma) + " GB de armazenamento disponível:" + "Você pode baixar o programa, mas seu PC pode começar a travar";

    }

    else {
        return "Você não possui armazenamento o suficiente para instalar o programa";

    }
}

console.log(verificarArmazenamento(armazenamentoTotalUsuario, armazenamentoDisponivelUsuario, espacoOcupadoProgramaUsuario));
