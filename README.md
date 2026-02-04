#  API Bancária (NestJS + Prisma + Docker)

API RESTful para simulação de transações bancárias robustas, implementando o padrão de **Partidas Dobradas (Double-Entry Bookkeeping)** para garantir integridade financeira absoluta.

##  Arquitetura e Decisões Técnicas

Este projeto não utiliza manipulação simples de saldo. Para garantir a rastreabilidade e evitar erros de consistência (dinheiro sumindo ou aparecendo), foi adotada a arquitetura de **Ledger (Livro Razão)**.

### O Modelo de Partidas Dobradas
Cada transação financeira gera automaticamente dois registros no banco de dados:
1.  **Débito:** Saída do valor de uma conta de origem.
2.  **Crédito:** Entrada do valor em uma conta de destino.

A soma de todos os débitos e créditos deve ser sempre zero, permitindo auditoria completa do sistema.

### Tecnologias Utilizadas
* **NestJS:** Framework Node.js para arquitetura escalável e modular.
* **Prisma ORM:** Modelagem de dados e interações seguras com o banco.
* **PostgreSQL:** Banco de dados relacional robusto.
* **Docker & Docker Compose:** Containerização do ambiente de desenvolvimento.
* **TypeScript:** Tipagem estática para maior segurança no código.

##  Como Rodar o Projeto

### Pré-requisitos
* Node.js (v18+)
* Docker & Docker Desktop
* Git

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/stchanalytics/estudos-nestjs.git
    cd api-bancaria
    ```

2.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto com as seguintes chaves (baseado no `docker-compose.yml`):
    ```env
    DATABASE_URL="postgresql://admin:admin123@localhost:5433/api_bancaria?schema=public"
    ```

3.  **Suba o Banco de Dados (Docker):**
    ```bash
    docker compose up -d
    ```

4.  **Instale as Dependências:**
    ```bash
    npm install
    ```

5.  **Execute as Migrações (Criar Tabelas):**
    ```bash
    npx prisma migrate dev --name init_db
    ```

6.  **Rode a Aplicação:**
    ```bash
    npm run start:dev
    ```
    A API estará rodando em: `http://localhost:3000`

##  Estrutura do Banco de Dados (Schema)

* **Users:** Dados cadastrais e autenticação.
* **Accounts:** Contas bancárias vinculadas aos usuários.
* **Transactions:** Recibos das operações (ex: "Pix enviado").
* **Ledgers:** Registros contábeis imutáveis (Débitos e Créditos).

##  Licença

Este projeto está sob a licença MIT.