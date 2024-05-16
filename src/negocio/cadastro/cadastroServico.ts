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
        let servico = new Servico(nome)
        this.servicos.push(servico)
        console.log('Cadastro concluído!');
    }
}