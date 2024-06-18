import { Cliente, CompraProduto, CompraServico, Cpf, Pet, Produto, Rg, Servico, Telefone } from "@prisma/client";
import fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";

const app = fastify()
app.register(cors, { origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] })
const port = 8000

// Cliente
app.post('/cliente/cadastrar', async (req: any, res) => {
    const { nome, nomeSocial } = req.body as Cliente
    const cpf = req.body.cpf as Cpf
    const rg = req.body.rg as Rg
    const telefone = req.body.telefone as Telefone

    console.log(req.body);

    const user = await prisma.cliente.create({
        data: {
            nome,
            nomeSocial,
            cpf: {
                create: {
                    valor: cpf.valor,
                    dataEmissao: new Date(cpf.dataEmissao),
                }
            },
            rgs: {
                create: {
                    valor: rg.valor,
                    dataEmissao: new Date(rg.dataEmissao),
                }
            },
            telefones: {
                create: {
                    ddd: telefone.ddd,
                    numero: telefone.numero
                }
            }
        }
    })

    console.log(user);
    return res.status(200).send("Usuário cadastrado")
})

app.get('/cliente/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    return await prisma.cliente.findFirstOrThrow({
        where: { id: parseInt(id) },
        include: {
            pets: true
        }
    })
})

app.get('/cliente/clientes', async (req, res) => {
    return await prisma.cliente.findMany({
        include: {
            pets: true,
            telefones: true,
            rgs: true,
            cpf: true
        }
    }) as Cliente[]
})

app.put('/cliente/editar', async (req, res) => {
    const { id, nome, nomeSocial } = req.body as Partial<Cliente>

    await prisma.cliente.update({
        where: { id },
        data: {
            nome,
            nomeSocial
        }
    })

    return res.status(200).send("Edição bem sucedida")
})

app.delete('/cliente/deletar', async (req, res) => {
    const { id } = req.body as Partial<Cliente>

    await prisma.cliente.delete({
        where: { id }
    })

    return res.status(200).send("Remoção bem sucedida")
})

// Pet
app.post('/pet/cadastrar', async (req, res) => {
    const { donoId, nome, tipo, genero, raca } = req.body as Pet

    const pet = await prisma.pet.create({
        data: {
            donoId,
            nome,
            genero,
            raca,
            tipo
        }
    })

    console.log(pet);
    return res.status(200).send("Pet cadastrado")
})

app.get('/pet/pets', async (req, res) => {
    const pets = await prisma.pet.findMany({
        include: { dono: true }
    })

    return pets
})

app.get('/pet/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    return await prisma.pet.findFirstOrThrow({
        where: { id: parseInt(id) }
    })
})

app.put('/pet/editar', async (req, res) => {
    const { id, nome, genero, raca, tipo, donoId } = req.body as Partial<Pet>

    await prisma.pet.findUniqueOrThrow({
        where: { id }
    })
    await prisma.pet.update({
        where: { id },
        data: {
            nome,
            genero,
            raca,
            tipo,
            donoId
        }
    })

    return res.status(200).send("Edição bem sucedida")
})

app.delete('/pet/deletar', async (req, res) => {
    const { id } = req.body as Partial<Pet>

    await prisma.cliente.delete({
        where: { id }
    })

    return res.status(200).send("Remoção bem sucedida")
})

// Serviços

app.post('/servico/cadastrar', async (req, res) => {
    const { nome, valor } = req.body as Servico

    await prisma.servico.create({
        data: {
            nome,
            valor
        }
    })
})

app.get('/servico/servicos', async (req, res) => {
    return await prisma.servico.findMany()
})

app.get('/servico/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    return await prisma.servico.findFirstOrThrow({
        where: { id: parseInt(id) }
    })
})

app.put('/servico/editar', async (req, res) => {
    const { id, nome, valor } = req.body as Partial<Servico>

    await prisma.servico.update({
        where: { id },
        data: {
            nome,
            valor
        }
    })
})

app.delete('/servico/deletar', async (req, res) => {
    const { id } = req.body as Partial<Servico>

    await prisma.servico.delete({
        where: { id }
    })
})

// Produtos
app.post('/produto/cadastrar', async (req, res) => {
    const { nome, valor } = req.body as Servico

    await prisma.produto.create({
        data: {
            nome,
            valor
        }
    })

    return res.status(200).send("Cadastrado com sucesso")
})

app.get('/produto/produtos', async (req, res) => {
    return await prisma.produto.findMany()
})

app.get('/produto/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    return await prisma.produto.findFirstOrThrow({
        where: { id: parseInt(id) }
    })
})

app.put('/produto/editar', async (req, res) => {
    const { id, nome, valor } = req.body as Partial<Produto>

    await prisma.produto.update({
        where: { id },
        data: {
            nome,
            valor
        }
    })
})

app.delete('/produto/deletar', async (req, res) => {
    const { id } = req.body as Partial<Produto>

    await prisma.produto.delete({
        where: { id }
    })
})

// Compras Produto

app.post('/compras/produto/cadastrar', async (req, res) => {
    const { clienteId, petId, produtoId } = req.body as CompraProduto

    await prisma.compraProduto.create({
        data: {
            clienteId,
            petId,
            produtoId
        }
    })

    return res.status(200).send("Cadastrado com sucesso")
})

app.get('/compras/produto/compras', async (req, res) => {
    return await prisma.compraProduto.findMany({
        include: {
            cliente: true,
            pet: true,
            produto: true
        }
    })
})

app.get('/compras/produto/:id', async (req, res) => {
    const { id } = req.params as { id: string }

    return await prisma.compraProduto.findFirstOrThrow({
        where: { id: parseInt(id) },
        include: {
            cliente: true,
            pet: true,
            produto: true
        }
    })
})

// Compra Servico
app.post('/compras/servico/cadastrar', async (req, res) => {
    const { clienteId, petId, servicoId } = req.body as CompraServico

    await prisma.compraServico.create({
        data: {
            clienteId,
            petId,
            servicoId
        }
    })

    return res.status(200).send("Cadastrado com sucesso")
})

app.get('/compras/servico/compras', async (req, res) => {
    return await prisma.compraServico.findMany({
        include: {
            cliente: true,
            pet: true,
            servico: true
        }
    })
})

app.get('/compras/servico/:id', async (req, res) => {
    const { id } = req.params as { id: string }

    return await prisma.compraServico.findFirstOrThrow({
        where: { id: parseInt(id) },
        include: {
            cliente: true,
            pet: true,
            servico: true
        }
    })
})

// Cpf
app.post('/cpf/cadastrar', async (req, res) => {
    const { valor, dataEmissao, clienteId } = req.body as Cpf

    await prisma.cpf.create({
        data: {
            valor,
            dataEmissao,
            clienteId
        }
    })

    return res.status(200).send("Cadastrado com sucesso")
})

app.get('/cpf/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    prisma.cpf.findFirstOrThrow({
        where: { id: parseInt(id) },
        include: {
            cliente: true
        }
    })
})

//RG
app.post('/rg/cadastrar', async (req, res) => {
    const { valor, dataEmissao, clienteId } = req.body as Rg
    prisma.rg.create({
        data: {
            valor, dataEmissao, clienteId
        }
    })
})

app.get('/rg/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    return prisma.rg.findFirstOrThrow({
        where: { id: parseInt(id) },
        include: {
            cliente: true
        }
    })
})

// Telefone
app.post('/telefones/cadastrar', async (req, res) => {
    const { ddd, numero, clienteId } = req.body as Telefone

    await prisma.telefone.create({
        data: {
            ddd,
            numero,
            clienteId
        }
    })

    return res.status(200).send("Cadastrado com sucesso")
})

app.get('/telefones/:id', async (req, res) => {
    const { id } = req.params as { id: string }

    return await prisma.telefone.findFirstOrThrow({
        where: { id: parseInt(id) },
        include: {
            cliente: true
        }
    })
})


// Inicia backend
app.listen({ port: port }, (error) => {
    if (error) {
        console.error(error)
        process.exit(1)
    }

    console.log(`Servidor rodando na porta: ${port}`)
})
