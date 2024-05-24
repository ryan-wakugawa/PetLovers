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
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    public listarConsumo():void{
        console.log(`\nRanking de consumo: `);
        let ranking:any[] = this.clientes.map((cliente) =>{
            let quantidadeProdutos:number = cliente.getProdutosConsumidos.length
            let quantidadeServicos:number = cliente.getServicosConsumidos.length
            let quantidadeTotal:number = quantidadeProdutos+quantidadeServicos
            return [cliente.getNome, quantidadeTotal]
        })
        ranking.slice(0,10).forEach((cliente)=>{
            console.log(`${ranking.indexOf(cliente)+1}º - ${cliente[0]}:\t${cliente[1]}`);
            console.log(`--------------------------------------`);
        })
    }
}