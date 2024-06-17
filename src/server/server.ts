import { Cliente, CompraProduto, CompraServico, Cpf, Pet, Produto, Rg, Servico, Telefone } from "@prisma/client";
import fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify()
const port = 8000

// Cliente
app.post('/cliente/cadastrar', async (req, res) => {
    const { nome, nomeSocial } = req.body as Cliente

    const user = await prisma.cliente.create({
        data: {
            nome,
            nomeSocial
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
            pets: true
        }
    })
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
    const { nome, tipo, genero, raca } = req.body as Pet

    const pet = await prisma.pet.create({
        data: {
            nome,
            genero,
            raca,
            tipo,
            donoId: 1
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

app.post('/servicos/cadastrar', async (req, res) => {
    const { nome } = req.body as Servico

    await prisma.servico.create({
        data: {
            nome
        }
    })
})

app.get('/servicos/servicos', async (req, res) => {
    return await prisma.servico.findMany()
})

app.get('/servicos/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    return await prisma.servico.findFirstOrThrow({
        where: { id: parseInt(id) }
    })
})

app.put('/servicos/editar', async (req, res) => {
    const { id, nome } = req.body as Partial<Servico>

    await prisma.servico.update({
        where: { id },
        data: {
            nome
        }
    })
})

app.delete('/servicos/deletar', async (req, res) => {
    const { id } = req.body as Partial<Servico>

    await prisma.servico.delete({
        where: { id }
    })
})

// Produtos
app.post('/produtos/cadastrar', async (req, res) => {
    const { nome } = req.body as Servico

    await prisma.produto.create({
        data: {
            nome
        }
    })

    return res.status(200).send("Cadastrado com sucesso")
})

app.get('/produtos/produtos', async (req, res) => {
    return await prisma.produto.findMany()
})

app.get('/produtos/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    return await prisma.produto.findFirstOrThrow({
        where: { id: parseInt(id) }
    })
})

app.put('/produtos/editar', async (req, res) => {
    const { id, nome } = req.body as Partial<Produto>

    await prisma.produto.update({
        where: { id },
        data: {
            nome
        }
    })
})

app.delete('/produtos/deletar', async (req, res) => {
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
