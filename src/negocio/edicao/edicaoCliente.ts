import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Ediçao from "./edicao";

export default class EdiçaoCliente extends Ediçao {
    public editar(cliente: Cliente): void {
        let dataErrada = true
        console.log(`\nEditando o cliente ${cliente.getNome}`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        while (dataErrada) {
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            if (partesData.length == 3) {
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                cliente.setNome = nome
                cliente.setNomeSocial = nomeSocial
                cliente.setCpf = new CPF(valor, dataEmissao)
                console.log(`\nEdição concluída :)\n`);
                dataErrada = false
            } else {
                console.log("Insira um formato válido!\n");
            }
        }
    }
}