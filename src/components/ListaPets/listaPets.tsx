import { useContext, useState } from "react"

export default function ListaPets({ tema } : {tema:string}) {
    const [pets, setPets] = useState([])


    const gerarOpcoes = (opcoes: Array<string>) => {
        let lista = opcoes.map(valor =>
            <option value="1">{valor}</option>
        )
        return lista
    }
    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Pet #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 align-content-around  container-fluid">
                                    <h3>Pet</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Cliente 2</option>
                                                {gerarOpcoes(['Cliente 1', 'Cliente 3'])}
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Macho</option>
                                                {gerarOpcoes(['Fêmea'])}
                                            </select>
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
                                Pet #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 align-content-around  container-fluid">
                                    <h3>Pet</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Cliente 1</option>
                                                {gerarOpcoes(['Cliente 2', 'Cliente 3'])}
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Fêmea</option>
                                                {gerarOpcoes(['Macho'])}
                                            </select>
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
                                Pet #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 align-content-around  container-fluid">
                                    <h3>Pet</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Dono</option>
                                                {gerarOpcoes(['Cliente 1', 'Cliente 2', 'Cliente 3'])}
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Gênero</option>
                                                {gerarOpcoes(['Macho', 'Fêmea'])}
                                            </select>
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
                                Pet #4
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 align-content-around  container-fluid">
                                    <h3>Pet</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Dono</option>
                                                {gerarOpcoes(['Cliente 1', 'Cliente 2', 'Cliente 3'])}
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Gênero</option>
                                                {gerarOpcoes(['Macho', 'Fêmea'])}
                                            </select>
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
                                Pet #5
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="h-100 align-content-around  container-fluid">
                                    <h3>Pet</h3>
                                    <form className="h-100 d-flex flex-column">
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Dono</option>
                                                {gerarOpcoes(['Cliente 1', 'Cliente 2', 'Cliente 3'])}
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                                                <option selected>Gênero</option>
                                                {gerarOpcoes(['Macho', 'Fêmea'])}
                                            </select>
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