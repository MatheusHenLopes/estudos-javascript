let somaChamados = 0
const limiteDeChamado = 30
const tempoDeResposta = [8, 42, 17, 65, 29, 51, 12, 38]

const compararTempoChamados = (limiteEstabelecido, respostaChamados) => limiteEstabelecido > respostaChamados;

function contadorChamadosAtrasados (contadorChamados) {

    for (; contadorChamados < tempoDeResposta.length; contadorChamados++) {

       if (compararTempoChamados (limiteDeChamado, tempoDeResposta[contadorChamados]) === false) {
            somaChamados++;
       }
    }
    return somaChamados;
}

contadorChamadosAtrasados(0);

const percentualAtrasados = (resultadoContador, numeroChamados) => ((resultadoContador * 100) / numeroChamados);

console.log("De um total de " + tempoDeResposta.length + " chamados, " + somaChamados + " atrasaram, o que corresponde a " + percentualAtrasados(somaChamados, tempoDeResposta.length) + "%");