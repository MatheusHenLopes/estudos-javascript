const memoriaTotalUsuario = Number(prompt("Digite o valor que representa o total de memória RAM disponível no servidor"));
const memoriaUtilizadaUsuario = Number(prompt("Digite o valor que representa a memória RAM que está sendo consumida neste momento"));

const percentualCalculadoMemoria = (memoriaTotal, memoriaUtilizada) => {
    return (memoriaUtilizada * 100) / memoriaTotal;
}

const resultadoPercentual = percentualCalculadoMemoria (memoriaTotalUsuario, memoriaUtilizadaUsuario);
console.log("O percentual de memória que está sendo utilizado pelo servidor é de " + resultadoPercentual.toFixed(0) + "%");
