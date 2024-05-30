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
            console.log(`Valor: R$${produto.getValor}`);
            console.log(`--------------------------------------`);
        });
    }
    public listarRegistro():void{
        if (this.produtos.length == 0){
            console.log(`\nNão há registros desse usuário`);            
        } else{
            console.log(`\nRegistro de produtos\n`);
            this.produtos.forEach(produto => {
                console.log(`Nome: ${produto.getNome}`);
                console.log(`--------------------------------------`);
            });
        }
    }
}