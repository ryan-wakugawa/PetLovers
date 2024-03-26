export default class RG {
    private valor: string
    private dataEmissao: Date

    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    
    public getValor(): string {
        return this.valor;
    }
    public setValor(valor: string) {
        this.valor = valor;
    }
    public getDataEmissao(): Date {
        return this.dataEmissao;
    }
    public setDataEmissao(dataEmissao: Date) {
        this.dataEmissao = dataEmissao;
    }
}