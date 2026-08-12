let ligarLeds = prompt("Digite 'Ligar' para acionar todos os LEDs");

let ledLigado = 0

if (ligarLeds === "Ligar") {

    for (; ledLigado <= 10; ledLigado++) {

        console.log("O LED " + ledLigado + " foi acionado");

}

    console.log("Todos os LEDs foram acionados!");

}

else {

    console.log("Os LEDs estão desligados");

}