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

    public get getNome(): string {
        return this.nome;
    }
    public set setNome(nome: string) {
        this.nome = nome;
    }
    public get getTipo(): string {
        return this.tipo;
    }
    public set setTipo(tipo: string) {
        this.tipo = tipo;
    }
    public get getRaca(): string {
        return this.raca;
    }
    public set setRaca(raca: string) {
        this.raca = raca;
    }
    public get getGenero(): string {
        return this.genero;
    }
    public set setGenero(genero: string) {
        this.genero = genero;
    }
}