export async function sendData(nome: string, nomeSocial: string, dataEmissaoCpf: string, valorCpf: string, dataEmissaoRg: string, valorRg: string, telefone: string) {
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
        },
        telefone: {
            ddd: telefone.substring(0, 2),
            numero: telefone.substring(2)
        }
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    await fetch(url, options).then(res => {
        if (res.status === 200) {
            console.log(data)
        }
    }
    ).catch(e => {
        console.log(e)
        return e
    })
}