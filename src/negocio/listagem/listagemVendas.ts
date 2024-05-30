import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Venda from "../../modelo/venda";
import Listagem from "./listagem";

export default class ListagemVendas extends Listagem{
    private vendas: Array<Venda>
    constructor(vendas: Array<Venda>){
        super()
        this.vendas = vendas
    }
    public listar(): void {
        console.log(`\nLista de todas as vendas:`);
        this.vendas.forEach(venda => {
            console.log(`ID: ${this.vendas.indexOf(venda)+1}`);
            console.log(`Cliente: ${venda.getCliente}`);
            console.log(`Pet: ${venda.getPet}`);
            console.log(`Produto/Serviço: ${venda.getConsumido}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    public listarRegistroProdutos(cliente: Cliente):void{
        if (this.vendas.length == 0){
            console.log(`\nAinda não há vendas registradas!`);
        } else{
            console.log(`\nRegistro de produtos:\n`);
            this.vendas.forEach(venda => {
                if (venda.getCliente == cliente && venda.getConsumido instanceof Produto){
                    console.log(`Cliente: ${venda.getCliente.getNome}`);
                    console.log(`Pet: ${venda.getPet.getNome}`);
                    console.log(`Produto: ${venda.getConsumido.getNome}`);
                    console.log(`--------------------------------------`);
                }
            });
        }
        console.log(`\n`);
    }
    public listarRegistroServiços(cliente: Cliente):void{
        if (this.vendas.length == 0){
            console.log(`\nAinda não há vendas registradas!`);
        } else{
            console.log(`\nRegistro de serviços:\n`);
            this.vendas.forEach(venda => {
                if (venda.getCliente == cliente && venda.getConsumido instanceof Servico){
                    console.log(`Cliente: ${venda.getCliente.getNome}`);
                    console.log(`Pet: ${venda.getPet.getNome}`);
                    console.log(`Serviço: ${venda.getConsumido.getNome}`);
                    console.log(`--------------------------------------\n`);
                }
            });
        }
    }
}