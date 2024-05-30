export default class Servico {
    public nome: string
    public valor:number
    constructor(nome: string, valor:number){
        this.nome = nome
        this.valor = valor
    }

    public get getNome(){
        return this.nome
    }
    public set setNome(nome : string) {
        this.nome = nome;
    }
    public get getValor(): number {
        return this.valor;
    }
    public set setValor(valor: number) {
        this.valor = valor;
    }
}