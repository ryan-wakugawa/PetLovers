-- CreateTable
CREATE TABLE "CompraProduto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clienteId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "CompraProduto_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CompraProduto_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CompraProduto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CompraServico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clienteId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    "servicoId" INTEGER NOT NULL,
    CONSTRAINT "CompraServico_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CompraServico_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CompraServico_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "nomeSocial" TEXT NOT NULL,
    "dataCadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "donoId" INTEGER NOT NULL,
    CONSTRAINT "Pet_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cpf" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" TEXT NOT NULL,
    "dataEmissao" DATETIME NOT NULL,
    "clienteId" INTEGER NOT NULL,
    CONSTRAINT "Cpf_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Telefone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ddd" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "clienteId" INTEGER,
    CONSTRAINT "Telefone_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rg" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" TEXT NOT NULL,
    "dataEmissao" DATETIME NOT NULL,
    "clienteId" INTEGER,
    CONSTRAINT "Rg_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cpf_clienteId_key" ON "Cpf"("clienteId");
