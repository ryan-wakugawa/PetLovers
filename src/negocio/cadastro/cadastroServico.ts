import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto(`Insira o nome do serviço: `)
        let valor = this.entrada.receberNumero(`Insira o valor do produto: `)
        let servico = new Servico(nome, valor)
        this.servicos.push(servico)
        console.log('Cadastro concluído!');
    }
}