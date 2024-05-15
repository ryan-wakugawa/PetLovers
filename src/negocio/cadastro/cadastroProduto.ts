import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada = new Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto(`Insira o nome do produto: `)
        let produto = new Produto(nome)
        this.produtos.push(produto)
        console.log('Cadastro concluído!');
    }
}