import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import CadastroCliente from "../negocio/cadastro/cadastroCliente";
import CadastroPet from "../negocio/cadastro/cadastroPet";
import CadastroProduto from "../negocio/cadastro/cadastroProduto";
import CadastroServico from "../negocio/cadastro/cadastroServico";
import EdiçaoCliente from "../negocio/edicao/edicaoCliente";
import EdiçaoPet from "../negocio/edicao/edicaoPet";
import EdicaoProduto from "../negocio/edicao/edicaoProduto";
import EdicaoServico from "../negocio/edicao/edicaoServico";
import ListagemClientes from "../negocio/listagem/listagemClientes";
import ListagemPets from "../negocio/listagem/listagemPets";
import ListagemProdutos from "../negocio/listagem/listagemProduto";
import ListagemServico from "../negocio/listagem/listagemServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

empresa.getClientes.push(new Cliente('Ryan', 'Ryan', new CPF('50147194814', new Date())))
empresa.getClientes[0].getPets.push(new Pet('teste', 'golden', 'macho', 'tipo 1'))

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Produtos`);
    console.log(`3 - Serviços`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let id: number
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1: //Cliente
            loop: {
                while (true) {
                    console.log(`1 - Cadastrar clientes`);
                    console.log(`2 - Listar clientes`);
                    console.log(`3 - Editar cliente`);
                    console.log(`4 - Deletar cliente`);
                    console.log(`5 - Cadastrar pets`);
                    console.log(`6 - Listar pets`);
                    console.log(`7 - Editar pet`);
                    console.log(`8 - Deletar pet`);
                    console.log(`0 - Voltar`);
                    opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao) {
                        case 1:
                            let cadastroCliente = new CadastroCliente(empresa.getClientes)
                            cadastroCliente.cadastrar()
                            break;
                        case 2:
                            let listagemClientes = new ListagemClientes(empresa.getClientes)
                            listagemClientes.listar()
                            break;
                        case 3:
                            id = entrada.receberNumero(`Insira o ID do cliente: `) - 1
                            if (empresa.getClientes[id] == undefined) {
                                console.log(`Não existe um usuário com esse ID`);
                            } else {
                                let edicaoCliente = new EdiçaoCliente()
                                edicaoCliente.editar(empresa.getClientes[id])
                            }
                            break;
                        case 4:
                            id = entrada.receberNumero(`Insira o ID do cliente: `) - 1
                            if (empresa.getClientes[id] == undefined) {
                                console.log(`Não existe um usuário com esse ID`);
                            } else {
                                let confirm = entrada.receberTexto(`Você tem certeza? (S/N)`)
                                if (confirm == 'S' || 's') {
                                    delete empresa.getClientes[id]
                                    console.log(`Usuário deletado`)
                                }
                            }
                            break;
                        case 5:
                            id = entrada.receberNumero(`Insira o ID do cliente cujo pet será cadastrado: `) - 1
                            if (empresa.getClientes[id] == undefined) {
                                console.log(`Não existe um usuário com esse ID`);
                            } else {
                                let cadastroPet = new CadastroPet(empresa.getClientes[id].getPets)
                                cadastroPet.cadastrar()
                            }
                            break;
                        case 6:
                            id = entrada.receberNumero(`\nInsira o ID do cliente para listar seus pets: `) - 1
                            if (empresa.getClientes[id] == undefined) {
                                console.log(`Não existe um usuário com esse ID`);
                            } else {
                                let listagemPets = new ListagemPets(empresa.getClientes[id].getPets)
                                listagemPets.listar()
                            }
                            break;
                        case 7:
                            id = entrada.receberNumero(`Insira o ID do dono do pet: `) - 1
                            if (empresa.getClientes[id] == undefined) {
                                console.log(`Não existe um usuário com esse ID`);
                            } else {
                                let idPet = entrada.receberNumero(`Insira o nº do pet: `) - 1
                                if (empresa.getClientes[id].getPets[idPet] == undefined) {
                                    console.log(`Não existe um pet com esse nº`);
                                } else {
                                    let edicaoPet = new EdiçaoPet()
                                    edicaoPet.editar(empresa.getClientes[id].getPets[idPet])
                                }
                            }
                            break;
                        case 8:
                            id = entrada.receberNumero(`Insira o ID do pet: `) - 1
                            if (empresa.getClientes[id] == undefined) {
                                console.log(`Não existe um usuário com esse ID`);
                            } else {
                                let idPet = entrada.receberNumero(`Insira o nº do pet: `) - 1
                                if (empresa.getClientes[id].getPets[idPet] == undefined) {
                                    console.log(`Não existe um pet com esse nº`);
                                } else {
                                    let confirm = entrada.receberTexto(`Você tem certeza? (S/N)`)
                                    if (confirm == 'S' || 's') {
                                        delete empresa.getClientes[id].getPets[idPet]
                                        console.log(`Pet deletado`)
                                    }
                                }
                            }
                            break;
                        case 0:
                            break loop;
                        default:
                            console.log(`Operação não entendida :(`)
                            break
                    }
                }
            }
            break
        case 2: //Produtos
            loop: {
                while (true) {
                    console.log(`1 - Cadastrar produtos`);
                    console.log(`2 - Listar produtos`);
                    console.log(`3 - Editar produtos`);
                    console.log(`4 - Deletar produtos`);
                    console.log(`0 - Sair`);
                    let produtos = empresa.getProdutos

                    opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao) {
                        case 1:
                            const cadastroProduto = new CadastroProduto(produtos)
                            cadastroProduto.cadastrar()
                            break
                        case 2:
                            const listagemProduto = new ListagemProdutos(produtos)
                            listagemProduto.listar()
                            break
                        case 3:
                            id = entrada.receberNumero(`Insira o ID do produto: `) - 1
                            if (empresa.getClientes[id] == undefined) {
                                console.log(`Não existe um produto com esse ID`);
                            } else {
                                let edicaoProduto = new EdicaoProduto()
                                edicaoProduto.editar(empresa.getProdutos[id])
                            }
                            break;
                        case 4:
                            id = entrada.receberNumero(`Insira o ID do produto: `) - 1
                            if (empresa.getProdutos[id] == undefined) {
                                console.log(`Não existe um produto com esse ID`);
                            } else {
                                let confirm = entrada.receberTexto(`Você tem certeza? (S/N)`)
                                if (confirm == 'S' || 's') {
                                    delete empresa.getProdutos[id]
                                    console.log(`Produto deletado`)
                                }
                            }
                            break;
                        case 0:
                            break loop
                        default:
                            console.log(`Operação não entendida :(`);
                            break
                    }
                }
            }
            break
        case 3: //Serviços
            loop: {
                while (true) {
                    console.log(`1 - Cadastrar serviços`);
                    console.log(`2 - Listar serviços`);
                    console.log(`3 - Editar serviços`);
                    console.log(`4 - Deletar serviços`);
                    console.log(`0 - Sair`);
                    let servicos = empresa.getServicos

                    opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao) {
                        case 1:
                            const cadastroServico = new CadastroServico(servicos)
                            cadastroServico.cadastrar()
                            break
                        case 2:
                            const listagemServico = new ListagemServico(servicos)
                            listagemServico.listar()
                            break
                        case 3:
                            id = entrada.receberNumero(`Insira o ID do serviço: `) - 1
                            if (empresa.getClientes[id] == undefined) {
                                console.log(`Não existe um serviço com esse ID`);
                            } else {
                                let edicaoServico = new EdicaoServico()
                                edicaoServico.editar(empresa.getServicos[id])
                            }
                            break;
                        case 4:
                            id = entrada.receberNumero(`Insira o ID do serviço: `) - 1
                            if (empresa.getServicos[id] == undefined) {
                                console.log(`Não existe um serviço com esse ID`);
                            } else {
                                let confirm = entrada.receberTexto(`Você tem certeza? (S/N)`)
                                if (confirm == 'S' || 's') {
                                    delete empresa.getServicos[id]
                                    console.log(`Serviço deletado`)
                                }
                            }
                            break;
                        case 0:
                            break loop
                        default:
                            console.log(`Operação não entendida :(`);
                            break
                    }
                }
            }
            break;
        case 4:
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}