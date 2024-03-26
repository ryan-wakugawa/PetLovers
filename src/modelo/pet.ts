export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string) {
        this.nome = nome;
    }
    public getTipo(): string {
        return this.tipo;
    }
    public setTipo(tipo: string) {
        this.tipo = tipo;
    }
    public getRaca(): string {
        return this.raca;
    }
    public setRaca(raca: string) {
        this.raca = raca;
    }
    public getGenero(): string {
        return this.genero;
    }
    public setGenero(genero: string) {
        this.genero = genero;
    }
}