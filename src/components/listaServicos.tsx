import { useState } from "react"

export default function ListaServico({ tema } : {tema:string}) {
    const [servicos, setServicos] = useState([])

    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Serviço #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 container-fluid">
                                    <h3>Serviço</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                                            <input type="number" step={0.01} className="form-control" placeholder="0.00" aria-label="preco" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                            <button className="btn btn-danger m-1" type="button">Excluir</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                Serviço #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 container-fluid">
                                    <h3>Serviço</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                                            <input type="number" step={0.01} className="form-control" placeholder="0.00" aria-label="preco" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                            <button className="btn btn-danger m-1" type="button">Excluir</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Serviço #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 container-fluid">
                                    <h3>Serviço</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                                            <input type="number" step={0.01} className="form-control" placeholder="0.00" aria-label="preco" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                            <button className="btn btn-danger m-1" type="button">Excluir</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                Serviço #4
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 container-fluid">
                                    <h3>Serviço</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                                            <input type="number" step={0.01} className="form-control" placeholder="0.00" aria-label="preco" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                            <button className="btn btn-danger m-1" type="button">Excluir</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                Serviço #5
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 container-fluid">
                                    <h3>Serviço</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                                            <input type="number" step={0.01} className="form-control" placeholder="0.00" aria-label="preco" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }}>Editar</button>
                                            <button className="btn btn-danger m-1" type="button">Excluir</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}