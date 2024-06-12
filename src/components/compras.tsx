import { Component } from "react";

type props = {
    tema: string
}

export default class Compras extends Component<props> {
    gerarOpcoes(opcoes: Array<string>) {
        let lista = opcoes.map(valor =>
            <option value="1">{valor}</option>
        )
        return lista
    }

    render() {
        let tema = this.props.tema

        return (
            <div className="container-md">
                <h3>Cadastrar compra</h3>
                <form>
                    <div className="input-group mb-3">
                        <select className="form-select" placeholder="Cliente" aria-label="petDono">
                            <option selected>Cliente</option>
                            {this.gerarOpcoes(['Cliente 1', 'Cliente 2', 'Cliente 3'])}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-select" placeholder="Pet" aria-label="petDono">
                            <option selected>Pet</option>
                            {this.gerarOpcoes(['Pet 1', 'Pet 2', 'Pet 3'])}
                        </select>
                    </div>
                    <hr></hr>
                    <div className="d-flex g-2">
                        <div className="input-group m-2">
                            <select className="form-select" placeholder="Pet" aria-label="petDono">
                                <option selected>Produto</option>
                                {this.gerarOpcoes(['Produto 1', 'Produto 2', 'Produto 3'])}
                            </select>
                        </div>
                        <div className="input-group m-2">
                            <select className="form-select" placeholder="Pet" aria-label="petDono">
                                <option selected>Serviço</option>
                                {this.gerarOpcoes(['Serviço 1', 'Serviço 2', 'Serviço 3'])}
                            </select>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary mt-2 mx-auto" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}