/* - O operador lógico OR retorna true caso uma das operações retorne veradeiro;
- O OR retorna false apenas se as duas expressões são falsas;
*/

var idade = 15;
var nome = "Matheus";

if(nome == "Matheus" || idade >= 18) {
    console.log("Pode entrar no bar do coveiro as 2 da manhã");
} else {
    console.log("Não pode entrar no bar do coveiro as 2 da manhã, só as 1")
}

if ((nome == "Matheus" || 15 > 20) && 10 == 10) {
    console.log("testando")
} else {
    console.log("não entrou");
}