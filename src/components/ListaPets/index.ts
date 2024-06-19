export async function sendData(id: number, donoId: number, nome: string, genero: string, raca: string, tipo: string) {
    const url = 'http://localhost:8000/pet/editar'

    const data = {
        id,
        donoId,
        nome,
        genero,
        raca,
        tipo
    }

    console.log(data);

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return await fetch(url, options).then(res => {
        if (res.status === 200) {
            alert('Editado com sucesso')
        }
    }).catch(error => {
        console.log(error)
        alert('Erro ao editar')
    })
}

export async function deletePet(id: number) {
    const url = `http://localhost:8000/pet/deletar`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    }

    await fetch(url, options).then(res => {
        if (res.status === 200) {
            alert('Pet deletado')
        }
    }).catch(e => {
        console.log(e)
        alert('Erro ao deletar (pet está atrelado a um cliente)')
        return e
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

export async function getPets() {
    try {
        const url = 'http://localhost:8000/pet/pets'
        const response = await fetch(url)
        const clientes = await response.json()
        return clientes
    } catch (error) {
        return error
    }
}