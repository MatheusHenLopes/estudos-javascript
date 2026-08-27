/*
- Caso a instrução de if seja negativa, podemos adicionar else;
- Que será outra condicional a ser executada;
- Podemos então criar uma bifurcação no código;
- Já o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de código;
*/

var nome = prompt("Qual o seu nome?");

if (nome == "Jeferson") {
    console.log("O nome dele é Jeferson");
} else if (nome == "Matheus") {
    console.log("O nome dele é Matheus");
} else if (nome == "Christofer") {
    console.log("O nome dele é Christofer");
}else {
    console.log("Ele possui outro nome")
}

var idade = prompt("Digite sua idade");

if (idade > 20) {
    console.log("Ele pode entrar na festa");
} else if (idade >= 18) {
    console.log("Ele só pode entrar com autorização");
}

var batata = prompt("Você gosta de purê de batata? sim ou não");

if (batata == "sim") {
    console.log("Você tem bom gosto");
} else {
    console.log ("Se mate imediatamente");
}
