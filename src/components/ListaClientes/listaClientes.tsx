import { FormEvent, useEffect, useState } from "react"
import { Cliente, CompraProduto, CompraServico, Cpf, Pet, Produto, Rg, Servico, Telefone } from "@prisma/client";
import { deleteCliente, sendData } from ".";

interface ClienteFull {
    id: number,
    nome: string,
    nomeSocial: string,
    pets: Pet[],
    telefones: Telefone[],
    rgs: Rg[],
    cpf: Cpf,
}

export default function ListaCliente({ tema }: { tema: string }) {
    const [clientes, setClientes] = useState<ClienteFull[]>([])

    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState('');
    const [rg, setRg] = useState('');
    const [dataEmissaoRg, setDataEmissaoRg] = useState('');
    const [telefone, setTelefone] = useState('');

    const resetForm = () => {
        setNome('');
        setNomeSocial('');
        setCpf('');
        setDataEmissaoCpf('');
        setRg('');
        setDataEmissaoRg('');
        setTelefone('');
    }

    const fetchClientes = async () => {
        try {
            const response = await fetch('http://localhost:8000/cliente/clientes')
            const data = await response.json()
            setClientes(data)
        } catch (error) {
            console.log(error);
        }
    }

    const validate = () => {
        let isValid = true
        if (!nome || !nomeSocial || !cpf || !dataEmissaoCpf || !rg || !dataEmissaoRg || !telefone) {
            isValid = false;
        }
        return isValid
    }

    const handleUpdate = async (id: number) => {
        if (validate()) {
            try {
                await sendData(id, nome, nomeSocial, dataEmissaoCpf, cpf, dataEmissaoRg, rg, telefone)
                resetForm()
                alert('Editado com sucesso')
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Preencha todos os campos');
        }
    }

    const handleDelete = (id: number) => {
        deleteCliente(id)
        fetchClientes()
    }

    useEffect(() => {
        fetchClientes()
    }, [])

    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {clientes.map((cliente, index) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {cliente.nome}
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder={cliente.nome ? cliente.nome : "Nome"} aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={(e) => setNome(e.target.value)} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder={cliente.nomeSocial ? cliente.nomeSocial : "Nome social"} aria-label="Nome social" aria-describedby="basic-addon1" value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />
                                    </div>
                                    <hr />
                                    <label className="input-group mb-1">CPF:</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder={cliente.cpf ? cliente.cpf.valor : "CPF"} aria-label="CPF" aria-describedby="basic-addon1" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <label className="input-group mb-1">Data de emissão:</label>
                                        <input type="date" className="form-control" placeholder={cliente.cpf ? cliente.cpf.dataEmissao.toString() : "Data"} aria-label="Data de emissão CPF" aria-describedby="basic-addon1" value={dataEmissaoCpf} onChange={(e) => setDataEmissaoCpf(e.target.value)} />
                                    </div>
                                    <hr />
                                    <label className="input-group mb-1">RG:</label>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={cliente.rgs.length > 0 ? cliente.rgs[0].valor : "RG"}
                                            aria-label="RG"
                                            aria-describedby="basic-addon1"
                                            value={rg}
                                            onChange={(event) => setRg(event.target.value)}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <label className="input-group mb-1">Data de emissão:</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            aria-label={cliente.rgs.length > 0 ? cliente.rgs[0].dataEmissao.toString() : "RG"}
                                            aria-describedby="basic-addon1"
                                            value={dataEmissaoRg}
                                            onChange={(event) => setDataEmissaoRg(event.target.value)}
                                        />
                                    </div>
                                    <hr />
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder={cliente.telefones.length > 0 ? cliente.telefones[0].ddd + cliente.telefones[0].numero : "Telefone"} aria-label="Telefone" aria-describedby="basic-addon1" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }} onClick={() => handleUpdate(cliente.id)}>Editar</button>
                                        <button className="btn btn-danger m-1" type="button" onClick={() => handleDelete(cliente.id)}>Excluir</button>
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
