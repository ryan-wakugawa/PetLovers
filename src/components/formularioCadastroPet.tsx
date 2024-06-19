import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroPet extends Component<props> {
    gerarOpcoes(opcoes: Array<string>) {
        let lista = opcoes.map(valor =>
            <option value="1">{valor}</option>
        )
        return lista
    }

    render() {
        let tema = this.props.tema
        return (
            <div className="h-100 align-content-around  container-fluid">
                <h3>Pet</h3>
                <form className="h-100 d-flex flex-column">
                    <div className="input-group mb-3">
                        <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                            <option selected>Dono</option>
                            {this.gerarOpcoes(['Cliente 1', 'Cliente 2', 'Cliente 3'])}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-select" placeholder="Selecione o dono" aria-label="petDono">
                            <option selected>Gênero</option>
                            {this.gerarOpcoes(['Macho', 'Fêmea'])}
                        </select>
                    </div>
                    <div className="d-flex justify-content-center input-group mt-auto mb-5">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}