
# Atividade Prática - ATV V

Atividade da Lista V da disciplina de Programação Orientada a Objetos do Professor Dr. Eng. Gerson Penha da FATEC São José dos Campos

## Ferramentas e Tecnologias

* VSCode
* Node.js
* React
* Fastify
* Prisma
* SQLite

## Linguagens

* TypeScript

# Contextualização:

Uma aplicação distribuída consiste em um ou mais clientes locais ou remotos que se comunicam com um ou
mais servidores em várias máquinas conectadas por meio de uma rede. Com esse tipo de aplicação, as
operações e processamentos podem ser realizados de qualquer local geográfico. Esta forma de organizar
aplicações é denominada de arquitetura distribuída.

As aplicações distribuídas podem ser relativamente simples, exigindo um único computador cliente e um
único servidor, ou mais complexas, permitindo muitos computadores clientes e vários servidores. Por
exemplo, os navegadores da web são aplicativos distribuídos. Outro exemplo são os sites de venda on-line,
utilizados pela maioria das corporações do mercado de varejo. Estas corporações podem distribuir operações
como: previsão de vendas, fazer encomendas, fabricação de produtos, envio de produtos, controle de
faturamento e atualização do banco de dados corporativo. Tudo pode ficar distribuído em uma grande região
ou até mesmo em fronteiras internacionais.

As redes de telecomunicações e dados de última geração estão tornando as operações distribuídas desse tipo
cada vez mais comuns. As aplicações desenvolvidas para implementar esse tipo de estratégia permitem que
as empresas reduzam custos e aprimorem suas ofertas de serviços para clientes em todo o mundo.
Outra preocupação das empresas é com a experiência dos seus usuários, não basta apenas ter alta
disponibilidade de serviços, os usuários precisam se sentir confortáveis ao usar seus produtos digitais. Por
isso, junto da arquitetura distribuída, cabe o destaque ao conceito de aplicação de página única (single-page
application - SPA). Também pode ser denominado como aplicativo de página única.
Uma SPA é uma aplicação web, que consiste em uma única página com o objetivo de fornecer uma
experiência do usuário similar à de um aplicativo desktop.

Em uma SPA, todo o código necessário - HTML, JavaScript e CSS - é obtido com um único carregamento de
página, demais recursos apropriados são carregados dinamicamente e adicionados à página conforme
necessário, geralmente em resposta a ações do usuário.

A página não é recarregada em qualquer momento do processo, tampouco ocorre a transferência de controle
para outra página, embora a URL no navegador possa ser usada para fornecer a percepção e navegabilidade
de páginas separadas ao aplicativo. A interação com SPA muitas vezes envolve comunicação dinâmica com o
servidor (back-end) de modo assíncrono e escondido do usuário, "nos bastidores".

## Requisitos implementados

- Criação de um back-end
- Criação de um banco de dados
- Conexão entre o front-end e o back-end

## Como rodar o projeto

### Clone o repositório:

    git clone https://github.com/ryan-wakugawa/PetLovers.git

### Navegue para o diretório correto:

    cd PetLovers

### Mude para a branch "lista-5":

    git checkout lista-5

### Instale as dependências:

    npm install

### Crie o banco de dados:

    npx prisma migrate dev --name init

### Execute o back-end:

    npm run server

  ou

    npx tsx src/server/server.ts

### Execute o front-end:

    npm start

## Créditos

Atividade elaborada pelo [Professor Dr. Eng. Gerson Penha](https://github.com/gerson-pn)
