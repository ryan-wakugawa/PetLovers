import Servico from "../modelo/servico";
import Venda from "../modelo/venda";
import Ranking from "./ranking";

export default class RankingServicos extends Ranking {
    private vendas: Array<Venda>
    private vendasServicos: Array<Venda>
    constructor(vendas: Array<Venda>) {
        super()
        this.vendas = vendas
        this.vendasServicos = vendas.filter(venda => venda.getConsumido instanceof Servico);
    }
    public topQuantidade(): void {
        console.log(`\nRanking de consumo de Serviços por quantidade: `);
        if (this.vendasServicos.length > 0) {
            const ranking = this.vendasServicos.reduce((acc, venda) => {
                const clienteNome = venda.getCliente.nome;
                acc.set(clienteNome, (acc.get(clienteNome) || 0) + 1);
                return acc;
            }, new Map() as Map<string, number>);

            let rankingFinal = [...ranking.entries()];
            rankingFinal.sort((a, b) => b[1] - a[1]);
            rankingFinal.slice(0, 10).forEach((cliente, index) => {
                console.log(`${index + 1}º - ${cliente[0]}:\t${cliente[1]}`);
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`Não há registros`);
        }
    }
    public topValor() {
        console.log(`\nRanking de consumo de Serviços por valor: `);
        if (this.vendasServicos.length > 0) {
            const ranking = this.vendasServicos.reduce((acc, venda) => {
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
        if (this.vendasServicos.length > 0) {
            let ranking = this.vendasServicos.reduce((acc, venda) => {
                acc.set(venda.getConsumido.getNome, (acc.get(venda.getConsumido.getNome) || 0) + 1)
                return acc
            }, new Map() as Map<string, number>)
            let rankingFinal = [...ranking.entries()]

            rankingFinal.sort((a, b) => b[1] - a[1])
            console.log(`\n`);
            rankingFinal.forEach((servico, index) => {
                console.log(`${index + 1}º - ${servico[0]}:\t${servico[1]}`);
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`Não há registros`);
        }
    }
    public maisConsumidosRaca() {
        console.log(`\nConsumo por raça de pets:`);
        if (this.vendasServicos.length > 0) {
            const consumoPorRaca = this.vendasServicos.reduce((acc, venda) => {
                const pet = venda.getPet;
                const consumido = venda.getConsumido;
                const tipoPet = pet.getRaca;

                if (!acc.has(tipoPet)) {
                    acc.set(tipoPet, new Map());
                }

                const rankingServicos = acc.get(tipoPet);
                const itemNome = consumido.nome;

                rankingServicos.set(itemNome, (rankingServicos.get(itemNome) || 0) + 1);
                return acc;
            }, new Map());

            consumoPorRaca.forEach((rankingServicos, tipoPet) => {
                console.log(`\n${tipoPet}:`);
                const rankingServicosOrdenado = [...rankingServicos.entries()].sort((a, b) => b[1] - a[1])
                rankingServicosOrdenado.forEach(([itemNome, quantidade]) => {
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
        if (this.vendasServicos.length > 0) {
            const consumoPorRaca = this.vendasServicos.reduce((acc, venda) => {
                const pet = venda.getPet;
                const consumido = venda.getConsumido;
                const tipoPet = pet.getTipo;

                if (!acc.has(tipoPet)) {
                    acc.set(tipoPet, new Map());
                }

                const rankingServicos = acc.get(tipoPet);
                const itemNome = consumido.nome;

                rankingServicos.set(itemNome, (rankingServicos.get(itemNome) || 0) + 1);
                return acc;
            }, new Map());

            consumoPorRaca.forEach((rankingServicos, tipoPet) => {
                console.log(`\n${tipoPet}:`);
                const rankingServicosOrdenado = [...rankingServicos.entries()].sort((a, b) => b[1] - a[1])
                rankingServicosOrdenado.forEach(([itemNome, quantidade]) => {
                    console.log(`\t${itemNome}: ${quantidade}`);
                });
                console.log(`--------------------------------------`);
            });
        } else {
            console.log(`Não há registros`);
        }
    }
}