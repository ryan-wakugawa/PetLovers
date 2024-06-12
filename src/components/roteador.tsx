import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaServico from "./listaServicos";
import ListaProduto from "./listaProdutos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroPet from "./formularioCadastroPet";
import Compras from "./compras";
import Ranking from "./ranking";
import ListaPets from "./listaPets";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Cadastros'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        const cores = {
            navbar: '#3991A7',
            sub: '#e3f2fd'
        }

        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema={cores.navbar} botoes={['Cadastros', 'Clientes', 'Pets','Produtos', 'Serviços', 'Compras', 'Ranking']} />
        if (this.state.tela === 'Clientes') {
            return (<>{barraNavegacao}<ListaCliente tema={cores.sub} /></>)
        } else if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                        <div className="h-100 mt-auto container-xl d-flex flex-wrap justify-content-around align-self-center">
                            <div className="shadow-sm p-3 mb-5 border rounded">
                                <FormularioCadastroCliente tema={cores.sub} />
                            </div>
                            <div className="shadow-sm p-3 mb-5 border rounded">
                                <FormularioCadastroPet tema={cores.sub} />

                            </div>
                            <div className="shadow-sm p-3 mb-5 border rounded">
                                <FormularioCadastroProduto tema={cores.sub} />
                            </div>
                            <div className="shadow-sm p-3 mb-5 border rounded">
                                <FormularioCadastroServico tema={cores.sub} />
                            </div>
                        </div>

                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (<>{barraNavegacao}<ListaProduto tema={cores.sub} /></>)
        } else if (this.state.tela === 'Serviços') {
            return (<>{barraNavegacao}<ListaServico tema={cores.sub} /></>)
        } else if (this.state.tela === 'Compras') {
            return (<>{barraNavegacao}<Compras tema={cores.sub} /></>)
        } else if (this.state.tela === 'Ranking') {
            return (<>{barraNavegacao}<Ranking tema={cores.sub}/></>)
        } else if (this.state.tela === 'Pets') {
            return (<>{barraNavegacao}<ListaPets tema={cores.sub} /></>)
        } else {
            return (<>{barraNavegacao}<FormularioCadastroCliente tema={cores.sub} /></>)
        }
    }
}