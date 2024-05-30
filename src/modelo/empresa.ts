import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Venda from "./venda"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private vendas: Array<Venda>

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.vendas = []
    }

    public get getClientes() {
        return this.clientes;
    }

    public set setClientes(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public get getProdutos() {
        return this.produtos;
    }

    public set setProdutos(produtos: Array<Produto>) {
        this.produtos = produtos;
    }

    public get getServicos() {
        return this.servicos;
    }

    public set setServicos(servicos: Array<Servico>) {
        this.servicos = servicos;
    }

    public get getVendas(){
        return this.vendas
    }

    public set setVendas(vendas:Array<Venda>){
        this.vendas = vendas
    }
}