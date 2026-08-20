// Uma caravana vai cruzar o deserto e tem 500 moedas de ouro para gastar no mercado local. Eles precisam comprar mantimentos essenciais, mas o dinheiro pode acabar antes do fim da lista.

let moedasDisponiveis = 500;

let ordemCompra = 0

const valoresCaravana = [85, 67, 100, 200, 30, 50];

let iniciarCompra = prompt("Você encontrou uma caravana, deseja comprar os itens que precisa? O primeiro item custa " + valoresCaravana[0] + " e você possui 500 moedas");

if (iniciarCompra === "Sim") {

    for (; ordemCompra < valoresCaravana.length; ordemCompra++){

        if (moedasDisponiveis >= valoresCaravana[ordemCompra]) {

            moedasDisponiveis -= valoresCaravana[ordemCompra];

            console.log("Compra realizada com sucesso, seu saldo atual está em " + moedasDisponiveis);

            let continuarCompra = prompt("Você precisa de mais " + (5 - ordemCompra) + " itens e o próximo item custa " + valoresCaravana[ordemCompra + 1] + " deseja continuar comprando?");

            if (continuarCompra !== "Sim") {

                alert("A caravana foi embora...");

                console.log("Compra parada, até a próxima!");

                break

            }}

            else {

                alert("Suas moedas acabaram, não há como comprar mais nada!");

                console.log("Suas " + moedasDisponiveis + " não são suficientes para continuar comprando");

                break

            }
}}

else {

    alert("A caravana foi embora");
    
    console.log("A caravana foi embora, seu saldo continua em " + moedasDisponiveis);

}
