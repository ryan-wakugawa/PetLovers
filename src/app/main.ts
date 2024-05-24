import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
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

let showOptions = (options: Array<string>): number => {
    console.log('\nOpções');
    for (let option in options) {
        console.log(`${parseInt(option) + 1} - ${options[option]}`);
    }
    console.log('0 - Sair');
    const entrada = new Entrada()
    return entrada.receberNumero(`Por favor, escolha uma opção: `)
}

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true
let clientesEmpresa = empresa.getClientes
let produtosEmpresa = empresa.getProdutos
let servicosEmpresa = empresa.getServicos

clientesEmpresa.push(
    new Cliente('Ryan', 'Ryan', new CPF('50147194814', new Date())),
    new Cliente('Ana', 'Ana', new CPF('12345678901', new Date())),
    new Cliente('Bruno', 'Bruno', new CPF('23456789012', new Date())),
    new Cliente('Carlos', 'Carlos', new CPF('34567890123', new Date())),
    new Cliente('Diana', 'Diana', new CPF('45678901234', new Date())),
    new Cliente('Eduardo', 'Eduardo', new CPF('56789012345', new Date())),
    new Cliente('Fernanda', 'Fernanda', new CPF('67890123456', new Date())),
    new Cliente('Gabriel', 'Gabriel', new CPF('78901234567', new Date())),
    new Cliente('Helena', 'Helena', new CPF('89012345678', new Date())),
    new Cliente('Igor', 'Igor', new CPF('90123456789', new Date())),
    new Cliente('Juliana', 'Juliana', new CPF('01234567890', new Date()))
);
clientesEmpresa[0].getPets.push(new Pet('Golden', 'golden', 'macho', 'tipo 1'))
produtosEmpresa.push(
    new Produto('Sabonete'),
    new Produto('Escova'),
    new Produto('Shampoo'),
    new Produto('Condicionador')
);
servicosEmpresa.push(
    new Servico('Banho e Tosa'),
    new Servico('Consulta Veterinária'),
    new Servico('Vacinação'),
    new Servico('Hotel para Pets')
);

while (execucao) {
    let entrada = new Entrada()
    let id: number
    let idPet: number
    let cliente: Cliente
    let opcao = showOptions(['Registros', 'Cliente', 'Pet', 'Produtos', 'Serviços', 'Ranking'])

    switch (opcao) {
        case 1: //Registro
            id = entrada.receberNumero(`Insira o ID do cliente: `) - 1
            cliente = clientesEmpresa[id]
            let clientExists = cliente != undefined
            if (clientExists) {
                loop: {
                    while (true) {
                        opcao = showOptions(['Registrar consumo de produto', 'Registrar consumo de serviço', 'Registro de produtos', 'Registro de serviços'])
                        switch (opcao) {
                            case 1: //Produto
                                id = entrada.receberNumero(`Insira o ID do produto consumido: `) - 1
                                if (produtosEmpresa[id] == undefined) {
                                    console.log(`\nNão existe um Produto com esse ID\n`);
                                } else {
                                    cliente.getProdutosConsumidos.push(produtosEmpresa[id])
                                }
                                break
                            case 2: //Serviço
                                id = entrada.receberNumero(`Insira o ID do serviço consumido: `) - 1
                                if (servicosEmpresa[id] == undefined) {
                                    console.log(`\nNão existe um Serviço com esse ID\n`);
                                } else {
                                    cliente.getServicosConsumidos.push(servicosEmpresa[id])
                                }
                                break;
                            case 3:
                                new ListagemProdutos(cliente.getProdutosConsumidos).listarRegistro()
                                break;
                            case 4:
                                new ListagemServico(cliente.getServicosConsumidos).listarRegistro()
                                break
                            case 0:
                                break loop
                            default:
                                console.log(`Operação não entendida :(\n`)
                                break

                        }
                    }
                }
            } else {
                console.log(`\nNão existe um usuário com esse ID\n`);
            }
            break
        case 2: //Cliente
            loop: {
                while (true) {
                    opcao = showOptions(['Cadastrar clientes', 'Listar clentes', 'Editar clientes', 'Deletar clientes'])
                    switch (opcao) {
                        case 1:
                            let cadastroCliente = new CadastroCliente(clientesEmpresa)
                            cadastroCliente.cadastrar()
                            break;
                        case 2:
                            let listagemClientes = new ListagemClientes(clientesEmpresa)
                            listagemClientes.listar()
                            break;
                        case 3:
                            id = entrada.receberNumero(`Insira o ID do cliente: `) - 1
                            if (clientesEmpresa[id] == undefined) {
                                console.log(`Não existe um usuário com esse ID`);
                            } else {
                                let edicaoCliente = new EdiçaoCliente()
                                edicaoCliente.editar(clientesEmpresa[id])
                            }
                            break;
                        case 4:
                            id = entrada.receberNumero(`Insira o ID do cliente: `) - 1
                            if (clientesEmpresa[id] == undefined) {
                                console.log(`Não existe um usuário com esse ID`);
                            } else {
                                let confirm = entrada.receberTexto(`Você tem certeza? (S/N)`)
                                if (confirm == 'S' || 's') {
                                    delete clientesEmpresa[id]
                                    console.log(`Usuário deletado`)
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
        case 3: //Pet
            loop: {
                id = entrada.receberNumero(`Insira o ID do dono dos pets: `) - 1
                console.log(`\nCliente: ${empresa.getClientes[id].nome}`);
                while (true) {
                    if (clientesEmpresa[id] == undefined) {
                        console.log(`Não existe um usuário com esse ID`);
                        break loop
                    }
                    opcao = showOptions(['Cadastrar pets', 'Listar pets', 'Editar pet', 'Deletar pet'])
                    switch (opcao) {
                        case 1:
                            let cadastroPet = new CadastroPet(clientesEmpresa[id].getPets)
                            cadastroPet.cadastrar()

                            break;
                        case 2:
                            let listagemPets = new ListagemPets(clientesEmpresa[id].getPets)
                            listagemPets.listar()

                            break;
                        case 3:
                            idPet = entrada.receberNumero(`Insira o nº do pet: `) - 1
                            if (clientesEmpresa[id].getPets[idPet] == undefined) {
                                console.log(`Não existe um pet com esse nº`);
                            } else {
                                let edicaoPet = new EdiçaoPet()
                                edicaoPet.editar(clientesEmpresa[id].getPets[idPet])
                            }

                            break;
                        case 4:
                            idPet = entrada.receberNumero(`Insira o ID do pet: `) - 1
                            if (clientesEmpresa[id].getPets[idPet] == undefined) {
                                console.log(`Não existe um pet com esse nº`);
                            } else {
                                let confirm = entrada.receberTexto(`Você tem certeza? (S/N)`)
                                if (confirm == 'S' || 's') {
                                    delete clientesEmpresa[id].getPets[idPet]
                                    console.log(`Pet deletado`)
                                }
                            }

                            break;
                        case 0:
                            break loop
                        default:
                            console.log(`Operação não entendida :(`)
                            break
                    }
                }
            }
            break
        case 4: //Produtos
            loop: {
                while (true) {
                    opcao = showOptions(['Cadastrar produto', 'Listar produto', 'Editar produto', 'Deletar produto'])
                    switch (opcao) {
                        case 1:
                            const cadastroProduto = new CadastroProduto(produtosEmpresa)
                            cadastroProduto.cadastrar()
                            break
                        case 2:
                            const listagemProduto = new ListagemProdutos(produtosEmpresa)
                            listagemProduto.listar()
                            break
                        case 3:
                            id = entrada.receberNumero(`Insira o ID do produto: `) - 1
                            if (clientesEmpresa[id] == undefined) {
                                console.log(`Não existe um produto com esse ID`);
                            } else {
                                let edicaoProduto = new EdicaoProduto()
                                edicaoProduto.editar(produtosEmpresa[id])
                            }
                            break;
                        case 4:
                            id = entrada.receberNumero(`Insira o ID do produto: `) - 1
                            if (produtosEmpresa[id] == undefined) {
                                console.log(`Não existe um produto com esse ID`);
                            } else {
                                let confirm = entrada.receberTexto(`Você tem certeza? (S/N)`)
                                if (confirm == 'S' || 's') {
                                    delete produtosEmpresa[id]
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
        case 5: //Serviços
            loop: {
                while (true) {
                    opcao = showOptions(['Cadastrar serviço', 'Listar serviço', 'Editar serviço', 'Deletar serviço'])
                    switch (opcao) {
                        case 1:
                            const cadastroServico = new CadastroServico(servicosEmpresa)
                            cadastroServico.cadastrar()
                            break
                        case 2:
                            const listagemServico = new ListagemServico(servicosEmpresa)
                            listagemServico.listar()
                            break
                        case 3:
                            id = entrada.receberNumero(`Insira o ID do serviço: `) - 1
                            if (clientesEmpresa[id] == undefined) {
                                console.log(`Não existe um serviço com esse ID`);
                            } else {
                                let edicaoServico = new EdicaoServico()
                                edicaoServico.editar(servicosEmpresa[id])
                            }
                            break;
                        case 4:
                            id = entrada.receberNumero(`Insira o ID do serviço: `) - 1
                            if (servicosEmpresa[id] == undefined) {
                                console.log(`Não existe um serviço com esse ID`);
                            } else {
                                let confirm = entrada.receberTexto(`Você tem certeza? (S/N)`)
                                if (confirm == 'S' || 's') {
                                    delete servicosEmpresa[id]
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
        case 6:
            loop: {
                while (true) {
                    opcao = showOptions(['Consumo (quantidade)', 'Consumo (valor)', 'Produtos', 'Serviços', 'Por Tipo e Raça'])
                    switch (opcao) {
                        case 1:
                            new ListagemClientes(clientesEmpresa).listarConsumo()
                            break;
                        case 2:
                            break;
                        case 3:
                            break;
                        case 4:
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
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}