// Seu personagem começa uma exploração com 100 pontos de vida (HP). Ele precisa atravessar 5 salas perigosas em uma masmorra, e cada sala causa uma quantidade diferente de dano. A cada rodada sala, subtraia o dano da vida do personagem e imprima. Se, em qualquer momento, a vida do personagem chegar a 0 ou menos, o loop deve ser interrompido imediatamente com "Game Over!". Se ele conseguir passar por todas as salas e o HP final ainda for maior que zero "Exploração concluída com sucesso!".

let vidaHeroi = 100;
let numSalas = 0;
const danoSalas = [7, 14, 17, 22, 43];

for (; numSalas < danoSalas.length; numSalas++) {

    vidaHeroi -= danoSalas[numSalas];

        console.log("Sala número " + (numSalas + 1) + ": sofreu " + danoSalas[numSalas] + " de dano");

    if (vidaHeroi > 0) {

        console.log("Você sobreviveu com " + vidaHeroi + " de HP");

    }

    else {

        console.log("Sua vida chegou a 0")
        console.log("GAME OVER!")

        break;
    }
}

if (vidaHeroi > 0) {

        console.log("Você venceu!");

    }