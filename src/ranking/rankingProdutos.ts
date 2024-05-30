import Produto from "../modelo/produto";
import Venda from "../modelo/venda";
import Ranking from "./ranking";

export default class RankingProdutos extends Ranking {
    private vendas: Array<Venda>
    private vendasProdutos: Array<Venda>
    constructor(vendas: Array<Venda>) {
        super()
        this.vendas = vendas
        this.vendasProdutos = vendas.filter(venda => venda.getConsumido instanceof Produto)
    }
    public topQuantidade(): void {
        console.log(`\nRanking de consumo de Produtos por quantidade: `);
        if (this.vendasProdutos.length > 0) {
            const ranking = this.vendasProdutos.reduce((acc, venda) => {
                const clienteNome = venda.getCliente.nome;
                acc.set(clienteNome, (acc.get(clienteNome) || 0) + 1);
                return acc;
            }, new Map() as Map<string, number>);

            let rankingFinal = [...ranking.entries()];
            rankingFinal.sort((a, b) => b[1] - a[1]);
            console.log(`\n`);
            rankingFinal.slice(0, 10).forEach((cliente, index) => {
                console.log(`${index + 1}º - ${cliente[0]}:\t${cliente[1]}`);
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`Não há registros`);
        }
    }
    public topValor() {
        console.log(`\nRanking de consumo de Produtos por quantidade: `);
        if (this.vendasProdutos.length > 0) {
            const ranking = this.vendasProdutos.reduce((acc, venda) => {
                const clienteNome = venda.getCliente.nome;
                acc.set(clienteNome, (acc.get(clienteNome) || 0) + venda.getConsumido.getValor);
                return acc;
            }, new Map() as Map<string, number>);

            let rankingFinal = [...ranking.entries()];
            rankingFinal.sort((a, b) => b[1] - a[1]);
            console.log(`\n`);
            rankingFinal.slice(0, 5).forEach((cliente, index) => {
                console.log(`${index + 1}º - ${cliente[0]}:\t${cliente[1]}`);
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`Não há registros`);
        }
    }
    public maisConsumidos() {
        console.log(`\nRanking de Serviços mais consumidos: `);
        if (this.vendasProdutos.length > 0) {
            let ranking = this.vendasProdutos.reduce((acc, venda) => {
                acc.set(venda.getConsumido.getNome, (acc.get(venda.getConsumido.getNome) || 0) + 1)
                return acc
            }, new Map() as Map<string, number>)
            let rankingFinal = [...ranking.entries()]
            rankingFinal.sort((a, b) => b[1] - a[1])
            console.log(`\n`);
            rankingFinal.forEach((produto, index) => {
                console.log(`${index + 1}º - ${produto[0]}:\t${produto[1]}`);
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`Não há registros`);
        }
    }
    public maisConsumidosRaca() {
        console.log(`\nConsumo por raça de pets:`);
        if (this.vendasProdutos.length > 0) {
            const consumoPorRaca = this.vendasProdutos.reduce((acc, venda) => {
                const pet = venda.getPet;
                const consumido = venda.getConsumido;
                const tipoPet = pet.getRaca;

                if (!acc.has(tipoPet)) {
                    acc.set(tipoPet, new Map());
                }

                const rankingProduto = acc.get(tipoPet);
                const itemNome = consumido.nome;

                rankingProduto.set(itemNome, (rankingProduto.get(itemNome) || 0) + 1);
                return acc;
            }, new Map());

            consumoPorRaca.forEach((rankingProduto, tipoPet) => {
                console.log(`\n${tipoPet}:`);
                const rankingProdutoOrdenado = [...rankingProduto.entries()].sort((a, b) => b[1] - a[1])
                rankingProdutoOrdenado.forEach(([itemNome, quantidade]) => {
                    console.log(`\t${itemNome}: ${quantidade}`);
                });
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`Não há registros`);
        }
    }
    maisConsumidosTipo() {
        console.log(`\nConsumo por tipo de pets:`);
        if (this.vendasProdutos.length > 0) {
            const consumoPorRaca = this.vendasProdutos.reduce((acc, venda) => {
                const pet = venda.getPet;
                const consumido = venda.getConsumido;
                const tipoPet = pet.getTipo;

                if (!acc.has(tipoPet)) {
                    acc.set(tipoPet, new Map());
                }

                const rankingProduto = acc.get(tipoPet);
                const itemNome = consumido.nome;

                rankingProduto.set(itemNome, (rankingProduto.get(itemNome) || 0) + 1);
                return acc;
            }, new Map());

            consumoPorRaca.forEach((rankingProduto, tipoPet) => {
                console.log(`\n${tipoPet}:`);
                const rankingProdutoOrdenado = [...rankingProduto.entries()].sort((a, b) => b[1] - a[1])
                rankingProdutoOrdenado.forEach(([itemNome, quantidade]) => {
                    console.log(`\t${itemNome}: ${quantidade}`);
                });
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`Não há registros`);
        }
    }
}