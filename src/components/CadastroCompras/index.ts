export async function cadastrarCompraProduto(clienteId: number, petId: number, produtoId: number) {
    const url = 'http://localhost:8000/compras/produto/cadastrar'

    const data = {
        clienteId,
        petId,
        produtoId
    }

    console.log(data);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return await fetch(url, options).then(res => {
        if (res.status === 200) {
            alert('Cadastrado com sucesso')
        }
    }).catch(error => {
        console.log(error)
        alert('Erro ao cadastrar')
    })
}

export async function cadastrarCompraServico(clienteId: number, petId: number, servicoId: number) {
    const url = 'http://localhost:8000/compras/servico/cadastrar'

    const data = {
        clienteId,
        petId,
        servicoId
    }

    console.log(data);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return await fetch(url, options).then(res => {
        if (res.status === 200) {
            alert('Cadastrado com sucesso')
        }
    }).catch(error => {
        console.log(error)
        alert('Erro ao cadastrar')
    })
}