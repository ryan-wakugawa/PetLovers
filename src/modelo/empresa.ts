import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }

    public getClientes() {
        return this.clientes;
    }

    public setClientes(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public getProdutos() {
        return this.produtos;
    }

    public setProdutos(produtos: Array<Produto>) {
        this.produtos = produtos;
    }

    public getServicos() {
        return this.servicos;
    }

    public setServicos(servicos: Array<Servico>) {
        this.servicos = servicos;
    }
}