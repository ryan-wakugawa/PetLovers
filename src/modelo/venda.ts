import Cliente from "./cliente";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";

export default class Venda {
    private cliente: Cliente
    private pet: Pet
    private consumido: Produto | Servico

    constructor(cliente: Cliente, pet: Pet, consumido: Produto | Servico) {
        this.cliente = cliente
        this.pet = pet
        this.consumido = consumido
    }

    public get getCliente(): Cliente {
        return this.cliente;
    }

    public set setCliente(cliente: Cliente) {
        this.cliente = cliente;
    }

    public get getPet(): Pet {
        return this.pet;
    }

    public set setPet(pet: Pet) {
        this.pet = pet;
    }

    public get getConsumido(): Produto | Servico {
        return this.consumido;
    }

    public set setConsumido(consumido: Produto | Servico) {
        this.consumido = consumido;
    }
}