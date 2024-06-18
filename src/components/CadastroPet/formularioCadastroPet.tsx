/* eslint-disable react-hooks/exhaustive-deps */
import { Cliente } from "@prisma/client";
import { FormEvent, useEffect, useState } from "react";
import { getClientes, sendData } from ".";

export default function FormularioCadastroPet({ tema }: { tema: string }) {
    const [donoId, setDonoId] = useState('');
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [raca, setRaca] = useState('');
    const [tipo, setTipo] = useState('');
    const [clientes, setClientes] = useState<Array<Cliente>>([])

    const resetForm = () => {
        setDonoId('');
        setNome('');
        setGenero('');
        setRaca('');
        setTipo('');
    }

    const validate = () => {
        let isValid = true
        if (!donoId || !nome || !genero || !raca || !tipo) {
            isValid = false
        }
        return isValid
    }

    const gerarOpcoes = () => {
        let lista = clientes.map(cliente =>
            <option value={cliente.id.toString()}>{cliente.nome}</option>
        )
        return lista
    }

    const pegarClientes = async () => {
        const listaClientes = await getClientes()
        setClientes(listaClientes)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
            try {
                await sendData(parseInt(donoId), nome, genero, raca, tipo)
                resetForm()
            } catch (error) {
                console.log(error);
                return error
            }
        } else {
            alert('Preencha todos os campos');
        }
    }

    useEffect(() => {
        pegarClientes()
    }, [])

    return (
        <div className="h-100 align-content-around  container-fluid">
            <h3>Pet</h3>
            <form className="h-100 d-flex flex-column" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <select className="form-select" placeholder="Selecione o dono" aria-label="petDono" onChange={(event) => setDonoId(event.target.value)}>;
                        <option selected>Dono</option>
                        {gerarOpcoes()}
                    </select>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" value={tipo} onChange={(event) => setTipo(event.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Raça" aria-label="Raca" value={raca} onChange={(event) => setRaca(event.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <select className="form-select" placeholder="Selecione o dono" aria-label="petDono" onChange={(event) => setGenero(event.target.value)}>
                        <option disabled selected>Gênero</option>
                        <option value={"Macho"}>Macho</option>
                        <option value={"Femea"}>Fêmea</option>
                    </select>
                </div>
                <div className="d-flex justify-content-center input-group mt-auto mb-5">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}