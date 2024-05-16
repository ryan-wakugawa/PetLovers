import Entrada from "../../io/entrada";

export default abstract class Cadastro {
    protected entrada: Entrada
    constructor(){
        this.entrada = new Entrada()
    }
    public abstract cadastrar(): void
}