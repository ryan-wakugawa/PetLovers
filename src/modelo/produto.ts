export default class Produto {
    public nome!: string
    constructor(nome: string){
        this.nome = nome
    }

    public get getNome(){
        return this.nome
    }
    public set setNome(nome: string){
        this.nome = nome
    }
}