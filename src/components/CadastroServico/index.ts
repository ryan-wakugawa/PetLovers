export async function sendData(nome: string, valor: number) {
    const data = {
        nome,
        valor
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return await fetch('http://localhost:8000/servico/cadastrar', options).then(res => {
        if (res.status === 200) {
            alert('Cadastrado com sucesso')
        }
    }).catch(error => {
        console.log('Erro ao cadastrar')
        return error
    })
}