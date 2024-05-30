import Servico from "../../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServico extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.servicos.forEach(servico => {
            console.log(`ID: ${this.servicos.indexOf(servico)+1}`);
            console.log(`Nome: ${servico.getNome}`);
            console.log(`Valor: R$${servico.getValor}`);
            console.log(`--------------------------------------`);
        });
    }
}