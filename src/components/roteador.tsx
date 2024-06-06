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

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços', 'Compras', 'Ranking']} />
        if (this.state.tela === 'Clientes') {
            return (<>{barraNavegacao}<ListaCliente tema="#e3f2fd" /></>)
        } else if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-xl d-flex flex-wrap">
                        <FormularioCadastroCliente tema="#e3f2fd" />
                        <FormularioCadastroPet tema="#e3f2fd"/>
                        <FormularioCadastroProduto tema="#e3f2fd" />
                        <FormularioCadastroServico tema="#e3f2fd" />
                    </div>
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (<>{barraNavegacao}<ListaProduto tema="#e3f2fd" /></>)
        } else if (this.state.tela === 'Serviços') {
            return (<>{barraNavegacao}<ListaServico tema="#e3f2fd" /></>)
        } else if (this.state.tela === 'Compras') {
            return (<>{barraNavegacao}<Compras tema="#e3f2fd" /></>)
        } else {
            return (<>{barraNavegacao}<FormularioCadastroCliente tema="#e3f2fd" /></>)
        }
    }
}