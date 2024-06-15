export async function sendData(nome: any, nomeSocial: any, email: any, estado: any, cidade: any, bairro: any, rua: any, numero: any, codigoPostal: any, informacoesAdicionais: any, telefoneNumero: any, telefoneDDD: any) {
    const url = 'http://localhost:32831/cliente/cadastrar'

    const dataCliente = {
        'nome': nome,
        'nomeSocial': nomeSocial,
        'email': email,
        'endereco': {
            'estado': estado,
            'cidade': cidade,
            'bairro': bairro,
            'rua': rua,
            'numero': numero,
            'codigoPostal': codigoPostal,
            'informacoesAdicionais': informacoesAdicionais
        },
        'telefones': [
            {
                'numero': telefoneNumero,
                'ddd': telefoneDDD
            }
        ]
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(dataCliente),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    }

    await fetch(url, options).then(res => {
        if (res.status === 200) {
            console.log(dataCliente)
            console.log("Sucesso");
            return res.json()
        }
    }
    ).catch(e => {
        console.log(e)
        return e
    })
}