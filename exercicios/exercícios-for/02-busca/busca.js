// Um ladrão está vasculhando os bolsos de um guarda adormecido em busca da chave da masmorra. Ele vai tirar item por item até achar o que precisa.

const itensGuarda = ["Chave-comum", "Espada", "Comida", "Faca", "Chave-dourada"];

for (let itensVistos = 0; itensVistos < itensGuarda.length; itensVistos++) {

    if (itensGuarda[itensVistos] === "Chave-dourada") {

        console.log("Você encontrou a chave! fuja logo!");

        break

    }

    else {

        console.log("Você encontrou um/uma " + itensGuarda[itensVistos] + " continue procurando")

    }
}