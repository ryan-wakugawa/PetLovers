import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Ediçao from "./edicao";

export default class EdicaoProduto extends Ediçao {
    public editar(produto: Produto): void {
        if (produto.getNome != undefined) {
            console.log(`\nEditando o produto ${produto.getNome}`);
            let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
            let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
            produto.setNome = nome
            produto.setValor = valor
            console.log(`\nEdição concluída :)\n`);
        } else {
            console.log(`Produto não existe`);
        }
    }
}