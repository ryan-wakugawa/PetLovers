import Pet from "../../modelo/pet"
import Listagem from "./listagem"

export default class ListagemPets extends Listagem{
    private pets: Array<Pet>
    constructor(pets: Array<Pet>){
        super()
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach(pet => {
            console.log(`ID: ${this.pets.indexOf(pet)+1}`);
            console.log(`Nome: ` + pet.getNome);
            console.log(`Raça: ` + pet.getRaca);
            console.log(`Genero: ` + pet.getGenero);
            console.log(`Tipo: ` + pet.getTipo);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}