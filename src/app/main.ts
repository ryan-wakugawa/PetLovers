import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

empresa.getClientes().push(new Cliente('Ryan', 'Ryan', new CPF('50147194814', new Date())))

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
        case 1:
            console.log(`1 - Cadastrar clientes`);
            console.log(`2 - Listar os clientes`);
            console.log(`3 - Cadastrar pets`);
            console.log(`4 - Listar os pets`);
            console.log(`0 - Voltar`);
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao) {
                case 1:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes())
                    cadastroCliente.cadastrar()
                    break;
                case 2:
                    let listagemClientes = new ListagemClientes(empresa.getClientes())
                    listagemClientes.listar()
                    break;
                
                case 3:
                    id = entrada.receberNumero(`Insira o ID do cliente cujo pet será cadastrado: `) - 1
                    if (empresa.getClientes()[id] == undefined){
                        console.log(`Não existe um usuário com esse ID`);
                    } else{
                        let cadastroPet = new CadastroPet(empresa.getClientes()[id].getPets)
                        cadastroPet.cadastrar()
                    }
                    break;
                case 4:
                    id = entrada.receberNumero(`\nInsira o ID do cliente para listar seus pets: `)
                    if (empresa.getClientes()[id] == undefined){
                        console.log(`Não existe um usuário com esse ID`);
                    } else{
                        let listagemPets = new ListagemPets(empresa.getClientes()[id].getPets)
                        listagemPets.listar()
                    }
                    break;
                case 0:
                    execucao = false
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break
        case 2:
            break
        case 3:
            break;
        case 4:
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :`)
    }
}