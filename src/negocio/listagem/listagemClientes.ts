import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`ID: ${this.clientes.indexOf(cliente)+1}`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg =>{
                console.log(`RG: ${rg.getValor}`)
            })
            cliente.getTelefones.forEach(telefone =>{
                console.log(`Telefone: ${telefone.getDdd} ${telefone.getNumero}`)
            })
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}