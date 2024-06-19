import { Cliente } from "@prisma/client";
import { useEffect, useState } from "react";
import { deletePet, getClientes, getPets, sendData } from ".";

interface PetFull {
    id: number,
    nome: string,
    tipo: string,
    raca: string,
    genero: string,
    donoId: number,
    dono: Cliente
}

export default function ListaPets({ tema }: { tema: string }) {
    const [pets, setPets] = useState<Array<PetFull>>([])
    const [clientes, setClientes] = useState<Array<Cliente>>([])

    const [donoId, setDonoId] = useState('');
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [raca, setRaca] = useState('');
    const [tipo, setTipo] = useState('');

    const gerarOpcoes = (donoId: number) => {
        let lista = clientes.map(cliente =>
            donoId === cliente.id ? <option selected value={cliente.id.toString()}>{cliente.nome}</option> :
                <option value={cliente.id.toString()}>{cliente.nome}</option>
        )
        return lista
    }

    const validate = () => {
        let isValid = true
        if (!nome || !genero || !raca || !tipo || !donoId) {
            isValid = false
        }
        return isValid
    }

    const resetForm = () => {
        setDonoId('');
        setNome('');
        setGenero('');
        setRaca('');
        setTipo('');
    }

    const fetchClientes = async () => {
        const listaClientes = await getClientes()
        setClientes(listaClientes)
    }

    const fetchPets = async () => {
        const listaPets = await getPets()
        setPets(listaPets)
    }

    const handleUpdate = async (id: number) => {
        if (validate()) {
            try {
                await sendData(id, parseInt(donoId), nome, genero, raca, tipo)
                resetForm()
            } catch (error) {
                console.log(error);
                return error
            }
        } else {
            alert('Preencha todos os campos');
        }
    }

    const handleDelete = (id: number) => {
        try {
            deletePet(id)
            fetchClientes()
        } catch (error) {
            alert('Erro ao deletar (pet está atrelado a um cliente)')
        }
    }

    useEffect(() => {
        fetchPets()
        fetchClientes()
    }, [])

    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {pets.map((pet, index) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {pet.nome}
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="h-100 align-content-around  container-fluid">
                                        <form className="h-100 d-flex flex-column">
                                            <div className="input-group mb-3">
                                                <select className="form-select" aria-label="petDono" onChange={(event) => setDonoId(event.target.value)}>
                                                    {gerarOpcoes(pet.donoId)}
                                                </select>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={pet.nome} aria-label="Nome" aria-describedby="basic-addon1" onChange={(event) => setNome(event.target.value)}/>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={pet.tipo} aria-label="Tipo" value={tipo} onChange={(event) => setTipo(event.target.value)} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={pet.raca} aria-label="Raca" value={raca} onChange={(event) => setRaca(event.target.value)} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <select className="form-select" placeholder={pet.dono.nome} aria-label="petDono" onChange={(event) => setGenero(event.target.value)}>
                                                    {pet.genero === "Macho" ?
                                                        <option selected value={"Macho"}>Macho</option> :
                                                        <option value={"Macho"}>Macho</option>
                                                    }
                                                    {pet.genero === "Femea" ?
                                                        <option selected value={"Femea"}>Fêmea</option> :
                                                        <option value={"Femea"}>Fêmea</option>
                                                    }
                                                </select>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }} onClick={() => handleUpdate(pet.id)}>Editar</button>
                                                <button className="btn btn-danger m-1" type="button" onClick={() => handleDelete(pet.id)}>Excluir</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}