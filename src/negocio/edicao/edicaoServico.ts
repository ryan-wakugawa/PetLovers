import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Ediçao from "./edicao";

export default class EdicaoServico extends Ediçao {
    public editar(servico: Servico): void {
        console.log(`\nEditando o Servico ${servico.getNome}`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Servico: `)
        servico.setNome = nome
        console.log(`\nEdição concluída :)\n`);
    }
}