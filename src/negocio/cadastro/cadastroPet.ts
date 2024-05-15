import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet extends Cadastro{
    private pets: Array<Pet>;
    private entrada: Entrada;
    constructor(pets: Array<Pet>){
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log('Início do cadastro do pet:\n');
        let nome = this.entrada.receberTexto('Informe o nome do pet: ')
        let raca = this.entrada.receberTexto('Informe a raça do pet: ')
        let genero = this.entrada.receberTexto('Informe o gênero do pet: ')
        let tipo = this.entrada.receberTexto('Informe o tipo do pet: ')
        let pet = new Pet(nome,raca,genero,tipo)
        this.pets.push(pet)
        console.log('Cadastro concluído!');
    }
}