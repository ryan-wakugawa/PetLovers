/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Switch from 'react-switch';
import BarraCategorias from "./barraCategorias";

export default function Ranking({ tema }: { tema: string }) {
    const [tela, setTela] = useState('Clientes')
    const [clienteView, setClienteView] = useState(true)
    const [servicoProdutoView, setServicoProdutoView] = useState(true)
    const [maisConsumiram, setMaisConsumiram] = useState({})
    const [produtosMaisConsumidos, setProdutosMaisConsumidos] = useState({})
    const [servicosMaisConsumidos, setServicosMaisConsumidos] = useState({})
    const [tiposMaisConsumiram, setTiposMaisConsumiram] = useState({})
    const [racaMaisConsumiram, setRacaMaisConsumiram] = useState({})

    const selecionarView = (novaTela: string, evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evento.preventDefault();
        setTela(novaTela)
    }

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
                    seletorView={selecionarView}
                />
                {tela === 'Clientes' && (
                    <div className="mt-4">
                        {clienteView ? (
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h2>10 Clientes que mais consumiram (quantidade)</h2>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="clienteSwitch" className="me-2">Valor</label>
                                        <Switch
                                            id="clienteSwitch"
                                            onChange={setClienteView}
                                            checked={clienteView}
                                            offColor="#888"
                                            onColor="#0d6efd"
                                            checkedIcon={false}
                                            uncheckedIcon={false}
                                        />
                                        <label htmlFor="clienteSwitch" className="ms-2">Quantidade</label>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Quantidade</th>
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
                                <div className="d-flex justify-content-between">
                                    <h2>5 Clientes que mais consumiram (valor)</h2>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="clienteSwitch" className="me-2">Valor</label>
                                        <Switch
                                            id="clienteSwitch"
                                            onChange={setClienteView}
                                            checked={clienteView}
                                            offColor="#888"
                                            onColor="#0d6efd"
                                            checkedIcon={false}
                                            uncheckedIcon={false}
                                        />
                                        <label htmlFor="clienteSwitch" className="ms-2">Quantidade</label>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Valor</th>
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
                        {servicoProdutoView ? (
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h2>Serviços mais consumidos</h2>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="servicoProdutoSwitch" className="me-2">Produtos</label>
                                        <Switch
                                            id="servicoProdutoSwitch"
                                            onChange={setServicoProdutoView}
                                            checked={servicoProdutoView}
                                            offColor="#888"
                                            onColor="#0d6efd"
                                            checkedIcon={false}
                                            uncheckedIcon={false}
                                        />
                                        <label htmlFor="servicoProdutoSwitch" className="ms-2">Serviços</label>
                                    </div>
                                </div>

                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Serviço</th>
                                            <th scope="col">Quantidade</th>
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
                                <div className="d-flex justify-content-between">
                                    <h2>Produtos mais consumidos</h2>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="servicoProdutoSwitch" className="me-2">Produtos</label>
                                        <Switch
                                            id="servicoProdutoSwitch"
                                            onChange={setServicoProdutoView}
                                            checked={servicoProdutoView}
                                            offColor="#888"
                                            onColor="#0d6efd"
                                            checkedIcon={false}
                                            uncheckedIcon={false}
                                        />
                                        <label htmlFor="servicoProdutoSwitch" className="ms-2">Serviços</label>
                                    </div>
                                </div>

                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Produto</th>
                                            <th scope="col">Quantidade</th>
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
                        {servicoProdutoView ? (
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h2>Serviços por Tipo de Pet</h2>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="tipoPetSwitch" className="me-2">Produtos</label>
                                        <Switch
                                            id="tipoPetSwitch"
                                            onChange={setServicoProdutoView}
                                            checked={servicoProdutoView}
                                            offColor="#888"
                                            onColor="#0d6efd"
                                            checkedIcon={false}
                                            uncheckedIcon={false}
                                        />
                                        <label htmlFor="tipoPetSwitch" className="ms-2">Serviços</label>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Tipo de Pet</th>
                                            <th scope="col">Serviço</th>
                                            <th scope="col">Quantidade</th>
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
                                <div className="d-flex justify-content-between">
                                    <h2>Produtos por Tipo de Pet</h2>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="tipoPetSwitch" className="me-2">Produtos</label>
                                        <Switch
                                            id="tipoPetSwitch"
                                            onChange={setServicoProdutoView}
                                            checked={servicoProdutoView}
                                            offColor="#888"
                                            onColor="#0d6efd"
                                            checkedIcon={false}
                                            uncheckedIcon={false}
                                        />
                                        <label htmlFor="tipoPetSwitch" className="ms-2">Serviços</label>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Tipo de Pet</th>
                                            <th scope="col">Produto</th>
                                            <th scope="col">Quantidade</th>
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
                        {servicoProdutoView ? (
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h2>Serviços por Raça de Pet</h2>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="racaPetSwitch" className="me-2">Produtos</label>
                                        <Switch
                                            id="tipoPetSwitch"
                                            onChange={setServicoProdutoView}
                                            checked={servicoProdutoView}
                                            offColor="#888"
                                            onColor="#0d6efd"
                                            checkedIcon={false}
                                            uncheckedIcon={false}
                                        />
                                        <label htmlFor="tipoPetSwitch" className="ms-2">Serviços</label>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Raça de Pet</th>
                                            <th scope="col">Serviço</th>
                                            <th scope="col">Quantidade</th>
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
                                <div className="d-flex justify-content-between">
                                    <h2>Produtos por Raça de Pet</h2>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="racaPetSwitch" className="me-2">Produtos</label>
                                        <Switch
                                            id="tipoPetSwitch"
                                            onChange={setServicoProdutoView}
                                            checked={servicoProdutoView}
                                            offColor="#888"
                                            onColor="#0d6efd"
                                            checkedIcon={false}
                                            uncheckedIcon={false}
                                        />
                                        <label htmlFor="tipoPetSwitch" className="ms-2">Serviços</label>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Raça de Pet</th>
                                            <th scope="col">Produto</th>
                                            <th scope="col">Quantidade</th>
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