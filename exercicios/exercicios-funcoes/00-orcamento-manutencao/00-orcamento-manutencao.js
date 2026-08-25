const precoOrcamento = Number(prompt("Digite o valor do orçamento final"));

const clienteEstudante = prompt("Você é um estudante de TI?\n" + "1 - Sim\n" + "2 - Não");

function calculoFinal (descontoAplicado) {

    if (clienteEstudante === "1") {
        return "O valor total a ser pago é igual a: " + (precoOrcamento - (precoOrcamento * descontoAplicado));
    }

    else {
        return "O valor a ser pago é igual: " + precoOrcamento + ", você não recebeu nenhum desconto";
    }}

let resultadoFinal = calculoFinal(0.15);
console.log(resultadoFinal);
alert(resultadoFinal);