export async function sendData(id: number, nome: string, valor: number) {
    const data = {
        id,
        nome,
        valor
    }

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return await fetch('http://localhost:8000/servico/editar', options).then(res => {
        if (res.status === 200) {
            alert('Editado com sucesso')
        }
    }).catch(error => {
        console.log('Erro ao editar')
        return error
    })
}

export async function deleteServico(id: number) {
    const url = `http://localhost:8000/servico/deletar`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    }

    await fetch(url, options).then(res => {
        if (res.status === 200) {
            alert('Serviço deletado')
        }
    }).catch(e => {
        console.log(e)
        alert('Erro ao deletar')
        return e
    })
}