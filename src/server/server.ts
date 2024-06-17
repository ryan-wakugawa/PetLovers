import fastify from "fastify";

const app = fastify()
const port = 8000

app.get('/', () => {
    return { teste: 'teste' }
})

app.listen({ port: port }, (error) => {
    if (error) {
        console.error(error)
        process.exit(1)
    }

    console.log(`Servidor rodando na porta: ${port}`)
})
