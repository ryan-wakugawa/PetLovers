/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import BarraCategorias from "./barraCategorias";
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-switch'

type Props = {
    tema: string
};


type State = {
    tela: string,
    clienteView: boolean,
    servicoProdutoView: boolean
};

export default class Ranking extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tela: 'Clientes',
            clienteView: true,
            servicoProdutoView: true
        };
        this.selecionarView = this.selecionarView.bind(this);
        this.toggleClienteView = this.toggleClienteView.bind(this);
        this.toggleServicoProdutoView = this.toggleServicoProdutoView.bind(this);
    }

    selecionarView(novaTela: string, evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evento.preventDefault();
        this.setState({
            tela: novaTela
        });
    }

    toggleClienteView(checked: boolean) {
        this.setState({ clienteView: checked });
    }

    toggleServicoProdutoView(checked: boolean) {
        this.setState({ servicoProdutoView: checked });
    }

    render() {
        const { tema } = this.props;
        const { tela, clienteView, servicoProdutoView } = this.state;

        return (
            <>
                <div className="container-fluid">
                    <BarraCategorias tema={tema}
                        categorias={[
                            'Clientes',
                            'Mais consumidos',
                            'Tipo de pet',
                            'Raça de Pet'
                        ]}
                        seletorView={this.selecionarView}
                    />
                    {tela === 'Clientes' && (
                        <div className="mt-4">
                            <div className="d-flex align-items-center">
                                <label htmlFor="clienteSwitch" className="me-2">Valor</label>
                                <Switch
                                    id="clienteSwitch"
                                    onChange={this.toggleClienteView}
                                    checked={clienteView}
                                    offColor="#888"
                                    onColor="#0d6efd"
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                />
                                <label htmlFor="clienteSwitch" className="ms-2">Quantidade</label>
                            </div>
                            {clienteView ? (
                                <div>
                                    <h2>10 Clientes que mais consumiram (quantidade)</h2>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Cliente</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Cliente A</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente B</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente C</td>
                                                <td>X</td>
                                            </tr>
                                            {/* Adicione mais linhas conforme necessário */}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div>
                                    <h2>5 Clientes que mais consumiram (valor)</h2>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Cliente</th>
                                                <th>Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Cliente A</td>
                                                <td>R$Y</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente B</td>
                                                <td>R$Y</td>
                                            </tr>
                                            <tr>
                                                <td>Cliente C</td>
                                                <td>R$Y</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                    {tela === 'Mais consumidos' && (
                        <div className="mt-4">
                            <div className="d-flex align-items-center">
                                <label htmlFor="servicoProdutoSwitch" className="me-2">Produtos</label>
                                <Switch
                                    id="servicoProdutoSwitch"
                                    onChange={this.toggleServicoProdutoView}
                                    checked={servicoProdutoView}
                                    offColor="#888"
                                    onColor="#0d6efd"
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                />
                                <label htmlFor="servicoProdutoSwitch" className="ms-2">Serviços</label>
                            </div>
                            {servicoProdutoView ? (
                                <div>
                                    <h2>Serviços mais consumidos</h2>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Serviço</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Serviço A</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Serviço B</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Serviço C</td>
                                                <td>X</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div>
                                    <h2>Produtos mais consumidos</h2>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Produto</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Produto A</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Produto B</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Produto C</td>
                                                <td>X</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                    {tela === 'Tipo de pet' && (
                        <div className="mt-4">
                            <div className="d-flex align-items-center">
                                <label htmlFor="tipoPetSwitch" className="me-2">Produtos</label>
                                <Switch
                                    id="tipoPetSwitch"
                                    onChange={this.toggleServicoProdutoView}
                                    checked={servicoProdutoView}
                                    offColor="#888"
                                    onColor="#0d6efd"
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                />
                                <label htmlFor="tipoPetSwitch" className="ms-2">Serviços</label>
                            </div>
                            {servicoProdutoView ? (
                                <div>
                                    <h2>Serviços por Tipo de Pet</h2>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Tipo de Pet</th>
                                                <th>Serviço</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tipo 1</td>
                                                <td>Serviço A</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Tipo 2</td>
                                                <td>Serviço B</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Tipo 3</td>
                                                <td>Serviço C</td>
                                                <td>X</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div>
                                    <h2>Produtos por Tipo de Pet</h2>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Tipo de Pet</th>
                                                <th>Produto</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tipo 1</td>
                                                <td>Produto A</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Tipo 2</td>
                                                <td>Produto B</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Tipo 3</td>
                                                <td>Produto C</td>
                                                <td>X</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                    {tela === 'Raça de Pet' && (
                        <div className="mt-4">
                            <div className="d-flex align-items-center">
                                <label htmlFor="racaPetSwitch" className="me-2">Produtos</label>
                                <Switch
                                    id="tipoPetSwitch"
                                    onChange={this.toggleServicoProdutoView}
                                    checked={servicoProdutoView}
                                    offColor="#888"
                                    onColor="#0d6efd"
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                />
                                <label htmlFor="tipoPetSwitch" className="ms-2">Serviços</label>
                            </div>
                            {servicoProdutoView ? (
                                <div>
                                    <h2>Serviços por Raça de Pet</h2>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Raça de Pet</th>
                                                <th>Serviço</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Raça 1</td>
                                                <td>Serviço A</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Raça 2</td>
                                                <td>Serviço B</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Raça 3</td>
                                                <td>Serviço C</td>
                                                <td>X</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div>
                                    <h2>Produtos por Raça de Pet</h2>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Raça de Pet</th>
                                                <th>Produto</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Raça 1</td>
                                                <td>Produto A</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Raça 2</td>
                                                <td>Produto B</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>Raça 3</td>
                                                <td>Produto C</td>
                                                <td>X</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </>
        );
    }
}
