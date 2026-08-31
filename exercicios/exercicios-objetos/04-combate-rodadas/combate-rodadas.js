const joui = {
    vida: 50,
    dano: 12,
    ataque: "Corte da morte",
    corteKatana: function() {
        return "Joui realiza seu " + this.ataque + " contra Kian causando " + this.dano + " pontos de dano";
    }
};

const kian = {
    vida: 60,
    dano: 12,
    ataque: "Lâmina do medo",
    estocadaLamina: function() {
        return "Kian realiza uma investida contra Joui e acerta um golpe com sua " + this.ataque + " causando " + this.dano + " pontos de dano";
    }
};

function combateRodadas (jouiVida, jouiDano, kianVida, kianDano, contadorRodadas, descrisaoJoui, descrisaoKian) {

    while (jouiVida > 0 && kianVida > 0) {

        contadorRodadas++

        kianVida -= jouiDano;

        console.log(descrisaoJoui);
        console.log("Kian está com " + kianVida + " de vida");

        if (kianVida <= 0) {
            console.log("Joui matou Kian e parou a calamidade!")
            break;
        }

        jouiVida -= kianDano;

        console.log(descrisaoKian);
        console.log("Joui está com " + jouiVida + " de vida");

        if (jouiVida <= 0) {
            console.log("Kian matou joui e finalizou a calamidade, está tudo acabado...")
        }
    }
}

combateRodadas(joui.vida, joui.dano, kian.vida, kian.dano, 0, joui.corteKatana(), kian.estocadaLamina());

