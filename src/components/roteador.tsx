/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import Compras from "./compras";
import FormularioCadastroCliente from "./CadastroCliente/formularioCadastroCliente";
import FormularioCadastroPet from "./CadastroPet/formularioCadastroPet";
import FormularioCadastroProduto from "./CadastroProduto/formularioCadastroProduto";
import FormularioCadastroServico from "./CadastroServico/formularioCadastroServico";
import ListaCliente from "./ListaClientes/listaClientes";
import ListaPets from "./ListaPets/listaPets";
import ListaProduto from "./listaProdutos";
import ListaServico from "./listaServicos";
import Ranking from "./ranking";


export function Roteador() {
    const [tela, setTela] = useState('Cadastros')

    const selecionarView = (novaTela: string, evento: Event) => {
        evento.preventDefault()
        setTela(novaTela)
    }
    
    const cores = {
        navbar: '#3991A7',
        sub: '#e3f2fd'
    }

    const barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema={cores.navbar} botoes={['Cadastros', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Compras', 'Ranking']} />
    
    const construirView = () => {
        if (tela === 'Clientes') {
            return (<>{barraNavegacao}<ListaCliente tema={cores.sub} /></>)
        } else if (tela === 'Cadastros') {
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
        } else if (tela === 'Produtos') {
            return (<>{barraNavegacao}<ListaProduto tema={cores.sub} /></>)
        } else if (tela === 'Serviços') {
            return (<>{barraNavegacao}<ListaServico tema={cores.sub} /></>)
        } else if (tela === 'Compras') {
            return (<>{barraNavegacao}<Compras tema={cores.sub} /></>)
        } else if (tela === 'Ranking') {
            return (<>{barraNavegacao}<Ranking tema={cores.sub} /></>)
        } else if (tela === 'Pets') {
            return (<>{barraNavegacao}<ListaPets tema={cores.sub} /></>)
        } else {
            return (<>{barraNavegacao}<FormularioCadastroCliente tema={cores.sub} /></>)
        }
    }

    return (
        construirView()
    )
}
