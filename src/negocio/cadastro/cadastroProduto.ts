import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto(`Insira o nome do produto: `)
        let valor = this.entrada.receberNumero(`Insira o valor do produto: `)
        let produto = new Produto(nome, valor)
        this.produtos.push(produto)
        console.log('Cadastro concluído!');
    }
}