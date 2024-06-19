import { Cliente, Pet, Produto, Servico } from "@prisma/client"
import { FormEvent, useEffect, useState } from "react"
import { cadastrarCompraProduto, cadastrarCompraServico } from "."

export default function Compras({ tema }: { tema: string }) {
    const [clientes, setClientes] = useState<Array<Cliente>>([])
    const [pets, setPets] = useState<Array<Pet>>([])
    const [servicos, setServicos] = useState<Array<Servico>>([])
    const [produtos, setProdutos] = useState<Array<Produto>>([])
    
    const [cliente, setCliente] = useState('')
    const [pet, setPet] = useState('')
    const [servico, setServico] = useState('')
    const [produto, setProduto] = useState('')

    const fetchAll = async () => {
        try {
            const listaClientes = await (await fetch('http://localhost:8000/cliente/clientes')).json()
            const listaPets = await (await fetch('http://localhost:8000/pet/pets')).json()
            const listaProdutos = await (await fetch('http://localhost:8000/produto/produtos')).json()
            const listaServicos = await (await fetch('http://localhost:8000/servico/servicos')).json()
            setClientes(listaClientes)
            setPets(listaPets)
            setProdutos(listaProdutos)
            setServicos(listaServicos)
        } catch (error) {
            console.log(error);
        }
    }

    const gerarClientes = () => {
        let lista = clientes.map(cliente =>
            <option value={cliente.id.toString()}>{cliente.nome}</option>
        )
        return lista
    }
    const gerarPets = () => {
        let lista = pets.map(pet =>
            <option value={pet.id.toString()}>{pet.nome}</option>
        )
        return lista
    }
    const gerarProdutos = () => {
        let lista = produtos.map(produto =>
            <option value={produto.id.toString()}>{produto.nome}</option>
        )
        return lista
    }
    const gerarServicos = () => {
        let lista = servicos.map(servico =>
            <option value={servico.id.toString()}>{servico.nome}</option>
        )
        return lista
    }

    const validateProduto = () =>{
        let isValid = true
        if (!cliente || !pet || !produto) {
            isValid = false
        }
        return isValid
    }

    const validateServico = () =>{
        let isValid = true
        if (!cliente || !pet || !servico) {
            isValid = false
        }
        return isValid
    }

    const handleProduto = async () => {
        if (validateProduto()) {
          try {
            await cadastrarCompraProduto(parseInt(cliente), parseInt(pet), parseInt(produto))
          } catch (error) {
            console.log(error);
          }
        } else {
          alert('Preencha todos os campos');
        }
    }
    
    const handleServico = async () => {
        if (validateServico()) {
          try {
            await cadastrarCompraServico(parseInt(cliente), parseInt(pet), parseInt(servico))
          } catch (error) {
            console.log(error);
          }
        } else {
          alert('Preencha todos os campos');
        }
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <div className="container-md">
            <h3>Cadastrar compra</h3>
            <form>
                <div className="input-group mb-3">
                    <select className="form-select" placeholder="Cliente" aria-label="petDono" onChange={(e) => setCliente(e.target.value)}>
                        <option value={""} selected>Cliente</option>
                        {gerarClientes()}
                    </select>
                </div>
                <div className="input-group mb-3">
                    <select className="form-select" placeholder="Pet" aria-label="pet" onChange={(e) => setPet(e.target.value)}>
                        <option value={""} selected>Pet</option>
                        {gerarPets()}
                    </select>
                </div>
                <hr></hr>
                <div className="d-flex g-2">
                    <div className="input-group m-2">
                        <select className="form-select" placeholder="Produto" aria-label="produto" onChange={(e) => setProduto(e.target.value)}>
                            <option value={""} disabled selected>Produto</option>
                            {gerarProdutos()}
                        </select>
                    </div>
                    <div className="input-group m-2">
                        <select className="form-select" placeholder="Produto" aria-label="produto" onChange={(e) => setServico(e.target.value)}>
                            <option value={""} disabled selected>Serviço</option>
                            {gerarServicos()}
                        </select>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary mt-2 mx-auto" type="button" style={{ background: tema }} onClick={() => handleProduto()}>Cadastrar Produto</button>
                    <button className="btn btn-outline-secondary mt-2 mx-auto" type="button" style={{ background: tema }} onClick={() => handleServico()}>Cadastrar Serviço</button>
                </div>
            </form>
        </div>
    )
}