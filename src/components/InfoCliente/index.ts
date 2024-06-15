
export async function sendData(id: string, nome: any, nomeSocial: any, email: any, estado: any, cidade: any, bairro: any, rua: any, numero: any, codigoPostal: any, informacoesAdicionais: any, telefoneNumero: any, telefoneDDD: any) {
    const url = 'http://localhost:32831/cliente/atualizar'

    const dataCliente = {
        'id': parseInt(id),
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
        method: 'PUT',
        body: JSON.stringify(dataCliente),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    }

    return await fetch(url, options).then(res => {
        if (res.status === 200) {
            console.log("Sucesso");
            return res
        }
    }
    ).catch(e => {
        return e
    })
}

export async function deletarCliente(index: string) {
    const options = {
        method: 'DELETE',
        body: JSON.stringify({ 'id': parseInt(index) }),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    }

    return await fetch(`http://localhost:32831/cliente/excluir`, options).then(res => {
        if (res.status === 200) {
            console.log(`Cliente ${index} deletado com sucesso!`);
            return res
        }
    }
    ).catch(e => {
        return e
    })
}