export async function sendData(id: number, nome: string, nomeSocial: string, dataEmissaoCpf: string, valorCpf: string, dataEmissaoRg: string, valorRg: string, telefone: string) {
    const url = `http://localhost:8000/cliente/editar`

    const data = {
        id,
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
        method: 'PUT',
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

export async function deleteCliente(id: number) {
    const url = `http://localhost:8000/cliente/deletar`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    }

    await fetch(url, options).then(res => {
        if (res.status === 200) {
            alert('Cliente deletado')
        }
    }
    ).catch(e => {
        console.log(e)
        return e
    })
}