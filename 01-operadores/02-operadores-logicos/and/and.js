/* Nas linguagens de programação existem os operadores lógicos;
- Estes operadores realziam comprações para que seja retornado um true ou false;
- Utilizamos o operador lógico AND (&&) para verificar se duas condições são verdadeiras ao mesmo tempo;
- Se ambas as condições forem verdadeiras, o resultado será true;
- Caso contrário, o resultado será false;
*/

var idade = 18;
var nome = "Matheus";

if (nome == "Matheus" && idade ==17) {
    console.log("O Matheus pode beber pinga no bar do coveiro");
} else {
    console.log("Este não é o Matheus");
}

if (1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if ((1 == 1 && 3 > 2) && true) {
    console.log("Passou");
} else if (nome === "Matheus" && idade >= 14) {
    console.log("Aqui passa!");
}

