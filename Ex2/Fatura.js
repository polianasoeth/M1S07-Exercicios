export default class Fatura {

    constructor(id, descricao, quantia, preco) {
        this.id = id
        this.descricao = descricao
        this.quantia = quantia
        this.preco = preco
    }

    get obterValorTotal() {
        return this.quantia * this.preco
    }
}