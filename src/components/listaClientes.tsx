import { useEffect, useState } from "react"
import { Cliente, CompraProduto, CompraServico, Cpf, Pet, Produto, Rg, Servico, Telefone } from "@prisma/client";

export default function ListaCliente({ tema } : {tema:string}) {
    const [clientes, setClientes] = useState<Cliente[]>([])

    const fetchClientes = async () =>{
        try {
            const response = await fetch('http://localhost:8000/cliente/clientes')
            const data = await response.json()
            console.log(data);
            setClientes(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchClientes()
    }, [])

    return (
        <div className="container-fluid">
            <p>{clientes.map((cliente) => <div>{cliente.nome}</div>)}</p>
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Cliente #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <label className="input-group mb-1">CPF:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                    <button className="btn btn-danger m-1" type="button">Excluir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                Cliente #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <label className="input-group mb-1">CPF:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                    <button className="btn btn-danger m-1" type="button">Excluir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Cliente #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <label className="input-group mb-1">CPF:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                    <button className="btn btn-danger m-1" type="button">Excluir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                Cliente #4
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <label className="input-group mb-1">CPF:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                    <button className="btn btn-danger m-1" type="button">Excluir</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                Cliente #5
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <label className="input-group mb-1">CPF:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" />
                                </div>
                                <hr />
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                    <button className="btn btn-danger m-1" type="button">Excluir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
