import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private pets: Array<Pet>

    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.pets = []
    }

    public get getNome(): string {
        return this.nome;
    }

    public set setNome(nome: string) {
        this.nome = nome;
    }

    public get getNomeSocial(): string {
        return this.nomeSocial;
    }

    public set setNomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial;
    }

    public get getCpf(): CPF {
        return this.cpf;
    }

    public set setCpf(cpf: CPF) {
        this.cpf = cpf;
    }

    public get getRgs(): Array<RG> {
        return this.rgs;
    }

    public set setRgs(rgs: Array<RG>) {
        this.rgs = rgs;
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro;
    }

    public set setDataCadastro(dataCadastro: Date) {
        this.dataCadastro = dataCadastro;
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones;
    }

    public set setTelefones(telefones: Array<Telefone>) {
        this.telefones = telefones;
    }

    public get getPets(): Array<Pet> {
        return this.pets;
    }

    public set setPets(pets: Array<Pet>) {
        this.pets = pets;
    }
}