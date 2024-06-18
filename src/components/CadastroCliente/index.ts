export default function sendData(nome:string, nomeSocial:string, dataEmissaoCpf:Date, valorCpf:string, dataEmissaoRg:Date, valorRg:string) {
    const url = 'http://localhost:8000/cliente/cadastrar'

    const data = {
        nome,
        nomeSocial,
        cpf: {
            dataEmissao: dataEmissaoCpf,
            valor: valorCpf
        },
        rg: {
            dataEmissao: dataEmissaoRg,
            valor: valorRg
        }
    }
}