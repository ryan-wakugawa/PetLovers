import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Ediçao from "./edicao";

export default class EdiçaoCliente extends Ediçao {
    public editar(cliente: Cliente): void {
        let dataCpfErrada = true
        let dataRgErrada = true
        let telefoneErrado = true
        console.log(`\nEditando o cliente ${cliente.getNome}`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valorCPF = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        while (dataCpfErrada) {
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            if (partesData.length == 3) {
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                let cpf = new CPF(valorCPF, dataEmissao);
                let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                while (dataRgErrada) {
                    let data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                    let partesData = data.split('/')
                    if (partesData.length == 3) {
                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()
                        let dataEmissao = new Date(ano, mes, dia)
                        let rg = new RG(valorRG, dataEmissao)
                        while (telefoneErrado) {
                            let numeroTelefone = this.entrada.receberTexto(`Por favor informe o número do Telefone no formato "DD Numero": `);
                            let partesTelefone = numeroTelefone.split(' ')
                            if (partesTelefone.length == 2) {
                                let ddd = partesTelefone[0]
                                let numero = partesTelefone[1]
                                let telefone = new Telefone(ddd, numero)
                                cliente.setNome = nome
                                cliente.setNomeSocial = nomeSocial
                                cliente.setCpf = cpf
                                cliente.setRgs = [rg]
                                cliente.setTelefones = [telefone]
                                console.log(`\Edição concluída :)\n`);
                                telefoneErrado = false
                                dataRgErrada = false
                                dataCpfErrada = false
                            } else {
                                console.log("Insira um formato válido!\n");
                            }
                        }
                    } else {
                        console.log("Insira um formato válido!\n");
                    }
                }
            } else {
                console.log("Insira um formato válido!\n");
            }
        }
    }
}