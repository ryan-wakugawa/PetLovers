import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Venda from "../modelo/venda";
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
import ListagemVendas from "../negocio/listagem/listagemVendas";
import RankingProdutos from "../ranking/rankingProdutos";
import RankingServicos from "../ranking/rankingServicos";

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
let vendasEmpresa = empresa.getVendas

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

clientesEmpresa[0].getPets.push(new Pet('Golden', 'Golden Retriever', 'Macho', 'Cachorro'))
clientesEmpresa[0].getPets.push(new Pet('Buddy', 'Labrador', 'Macho', 'Cachorro'));
clientesEmpresa[1].getPets.push(new Pet('Luna', 'Siamês', 'Fêmea', 'Gato'));
clientesEmpresa[2].getPets.push(new Pet('Max', 'Bulldog Francês', 'Macho', 'Cachorro'));
clientesEmpresa[3].getPets.push(new Pet('Tweety', 'Canário', 'Fêmea', 'Pássaro'));
clientesEmpresa[4].getPets.push(new Pet('Bella', 'Golden Retriever', 'Fêmea', 'Cachorro'));
clientesEmpresa[5].getPets.push(new Pet('Chloe', 'Persa', 'Fêmea', 'Gato'));
clientesEmpresa[6].getPets.push(new Pet('Thumper', 'Mini Lop', 'Macho', 'Coelho'));
clientesEmpresa[7].getPets.push(new Pet('Rocky', 'Chihuahua', 'Macho', 'Cachorro'));
clientesEmpresa[8].getPets.push(new Pet('Coco', 'Poodle', 'Fêmea', 'Cachorro'));
clientesEmpresa[9].getPets.push(new Pet('Simba', 'Maine Coon', 'Macho', 'Gato'));
clientesEmpresa[10].getPets.push(new Pet('Charlie', 'Beagle', 'Macho', 'Cachorro'));
clientesEmpresa[10].getPets.push(new Pet('Nala', 'Bengal', 'Fêmea', 'Gato'));

produtosEmpresa.push(
    new Produto('Sabonete', 20),
    new Produto('Escova', 15),
    new Produto('Shampoo', 24),
    new Produto('Condicionador', 18)
);
servicosEmpresa.push(
    new Servico('Banho e Tosa', 90),
    new Servico('Consulta Veterinária', 120),
    new Servico('Vacinação', 150),
    new Servico('Hotel para Pets', 200)
);
vendasEmpresa.push(
    new Venda(clientesEmpresa[0], clientesEmpresa[0].getPets[0], produtosEmpresa[0]),
    new Venda(clientesEmpresa[0], clientesEmpresa[0].getPets[1], produtosEmpresa[1]),
    new Venda(clientesEmpresa[6], clientesEmpresa[6].getPets[0], produtosEmpresa[2]),
    new Venda(clientesEmpresa[10], clientesEmpresa[10].getPets[0], produtosEmpresa[3]),
)
vendasEmpresa.push(
    new Venda(clientesEmpresa[4], clientesEmpresa[4].getPets[0], servicosEmpresa[3]),
    new Venda(clientesEmpresa[2], clientesEmpresa[2].getPets[0], servicosEmpresa[0]),
    new Venda(clientesEmpresa[4], clientesEmpresa[4].getPets[0], servicosEmpresa[3]),
    new Venda(clientesEmpresa[2], clientesEmpresa[2].getPets[0], servicosEmpresa[3]),
    new Venda(clientesEmpresa[4], clientesEmpresa[4].getPets[0], servicosEmpresa[2]),
    new Venda(clientesEmpresa[2], clientesEmpresa[2].getPets[0], servicosEmpresa[2]),
    new Venda(clientesEmpresa[4], clientesEmpresa[4].getPets[0], servicosEmpresa[3]),
    new Venda(clientesEmpresa[2], clientesEmpresa[2].getPets[0], servicosEmpresa[1]),
    new Venda(clientesEmpresa[4], clientesEmpresa[4].getPets[0], servicosEmpresa[1]),
    new Venda(clientesEmpresa[2], clientesEmpresa[2].getPets[0], servicosEmpresa[2]),
    new Venda(clientesEmpresa[4], clientesEmpresa[4].getPets[0], servicosEmpresa[0]),
    new Venda(clientesEmpresa[3], clientesEmpresa[3].getPets[0], servicosEmpresa[0]),
)

while (execucao) {
    let entrada = new Entrada()
    let id: number
    let idPet: number
    let cliente: Cliente
    let pet: Pet

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
                                    idPet = entrada.receberNumero(`Insira o ID do pet que consumiu: `) - 1
                                    pet = cliente.getPets[idPet]
                                    if (pet != undefined) {
                                        vendasEmpresa.push(new Venda(cliente, pet, produtosEmpresa[id]))
                                    } else {
                                        console.log(`\nNão existe um Pet com esse ID\n`);
                                    }
                                }
                                break
                            case 2: //Serviço
                                id = entrada.receberNumero(`Insira o ID do serviço consumido: `) - 1
                                if (servicosEmpresa[id] == undefined) {
                                    console.log(`\nNão existe um Serviço com esse ID\n`);
                                } else {
                                    idPet = entrada.receberNumero(`Insira o ID do pet que consumiu: `) - 1
                                    pet = cliente.getPets[idPet]
                                    if (pet != undefined) {
                                        vendasEmpresa.push(new Venda(cliente, pet, servicosEmpresa[id]))
                                    } else {
                                        console.log(`\nNão existe um Pet com esse ID\n`);
                                    }
                                }
                                break;
                            case 3: //Registro Produtos
                                new ListagemVendas(vendasEmpresa).listarRegistroProdutos(cliente)
                                break;
                            case 4: //Registro Serviços
                                new ListagemVendas(vendasEmpresa).listarRegistroServiços(cliente)
                                break
                            case 0: //Sair
                                break loop
                            default:
                                console.log(`Operação não entendida :(\n`)
                                break

                        }
                    }
                }
            } else if (!clientExists) {
                console.log(`\nNão existe um usuário com esse ID\n`);
            } else {
                console.log(`\nNão existe um pet com esse ID atrelado ao usuário\n`);
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
                while (true) {
                    if (clientesEmpresa[id] == undefined) {
                        console.log(`Não existe um usuário com esse ID`);
                        break loop
                    }
                    console.log(`\nCliente: ${clientesEmpresa[id].nome}`);
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
                            if (produtosEmpresa[id] == undefined) {
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
                            if (servicosEmpresa[id] == undefined) {
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
        case 6: //Ranking
            loop: {
                while (true) {
                    opcao = showOptions(['Produtos', 'Serviços'])
                    switch (opcao) {
                        case 1:
                            opcao = showOptions(['Consumo por cliente (quantidade)', 'Consumo por cliente(valor)', 'Mais consumidos', 'Consumo pet (raça)', 'Consumo pet(tipo)'])
                            switch (opcao) {
                                case 1:
                                    new RankingProdutos(vendasEmpresa).topQuantidade()
                                    break
                                case 2:
                                    new RankingProdutos(vendasEmpresa).topValor()
                                    break
                                case 3:
                                    new RankingProdutos(vendasEmpresa).maisConsumidos()
                                    break
                                case 4:
                                    new RankingProdutos(vendasEmpresa).maisConsumidosRaca()
                                case 5:
                                    new RankingProdutos(vendasEmpresa).maisConsumidosTipo()
                                    break
                                case 0:
                            }
                            break;
                        case 2: //Consumo de serviços(quantidade)
                            opcao = showOptions(['Consumo por cliente (quantidade)', 'Consumo por cliente(valor)', 'Mais consumidos', 'Consumo pet(raça)', 'Consumo pet(tipo)'])
                            switch (opcao) {
                                case 1:
                                    new RankingServicos(vendasEmpresa).topQuantidade()
                                    break
                                case 2:
                                    new RankingServicos(vendasEmpresa).topValor()
                                    break                                
                                case 3:
                                    new RankingServicos(vendasEmpresa).maisConsumidos()
                                    break
                                case 4:
                                    new RankingServicos(vendasEmpresa).maisConsumidosRaca()
                                    break
                                case 5:
                                    new RankingServicos(vendasEmpresa).maisConsumidosTipo()
                                    break
                                case 0:
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
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}