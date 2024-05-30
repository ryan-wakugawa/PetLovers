import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Ediçao from "./edicao";

export default class EdicaoServico extends Ediçao {
    public editar(servico: Servico): void {
        if (servico.getNome != undefined) {
            console.log(`\nEditando o Servico ${servico.getNome}`);
            let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
            let valor = this.entrada.receberNumero(`Por favor informe o valor do serviço: `)
            servico.setNome = nome
            servico.setValor = valor
            console.log(`\nEdição concluída :)\n`);
        } else {
            console.log(`Produto não existe`);
        }
    }
}