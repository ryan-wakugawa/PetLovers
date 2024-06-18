export async function sendData(donoId: number, nome: string, genero: string, raca: string, tipo: string) {
    const url = 'http://localhost:8000/pet/cadastrar'

    const data = {
        donoId,
        nome,
        genero,
        raca,
        tipo
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
        console.log('Erro ao cadastrar')
    })
}

export async function getClientes() {
    try {
        const url = 'http://localhost:8000/cliente/clientes'
        const response = await fetch(url)
        const clientes = await response.json()
        return clientes
    } catch (error) {
        return error
    }
}