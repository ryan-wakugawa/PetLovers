export default class Produto {
    public nome!: string

    public get getNome(){
        return this.nome
    }
    public set setNome(nome: string){
        this.nome = nome
    }
}