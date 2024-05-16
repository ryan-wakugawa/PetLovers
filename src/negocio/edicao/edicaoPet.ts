import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Ediçao from "./edicao";

export default class EdiçaoPet extends Ediçao {
    public editar(pet: Pet): void {
        console.log(`\nEditando o pet ${pet.getNome}`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        pet.setNome = nome
        pet.setRaca = raca
        pet.setGenero = genero
        pet.setTipo = tipo
        console.log(`\nEdição concluída :)\n`);
    }
}