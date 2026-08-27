/* 
- Executa um bloco de código se a instrução for verdadeira
 - Se for falsa, segue o código normalmente
 - Lembrando que true e false são do tipo Boolean
*/

let idade = prompt("Digite aqui sua idade");

if (idade >= 18) {
    console.log("Você é maior de idade");
    alert("Você é maior de idade");
}

else {
    console.log("Você é menor de idade");
    alert("Você é menor de idade");
}

