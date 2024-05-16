import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Ediçao from "./edicao";

export default class EdicaoProduto extends Ediçao {
    public editar(produto: Produto): void {
        console.log(`\nEditando o produto ${produto.getNome}`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        produto.setNome = nome
        console.log(`\nEdição concluída :)\n`);
    }
}