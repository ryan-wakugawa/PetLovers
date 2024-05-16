import Produto from "../../modelo/produto"
import Listagem from "./listagem"

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`ID: ${this.produtos.indexOf(produto)+1}`);
            console.log(`Nome: ${produto.getNome}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}