const armazenamentoRestante = {
    total: 512,
    utilizado: 387,

    calcularRestante: function () {
        return this.total - this.utilizado
    }
};

console.log(armazenamentoRestante.calcularRestante());