# 🚀 API de Gerenciamento de Usuários

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

Uma API RESTful robusta para gerenciamento de usuários, desenvolvida com as melhores práticas de desenvolvimento.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Executando o Projeto](#-executando-o-projeto)
- [Documentação da API](#-documentação-da-api)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 📖 Sobre o Projeto

Esta API foi desenvolvida para fornecer um sistema completo de gerenciamento de usuários, permitindo operações CRUD (Create, Read, Update, Delete) de forma segura e eficiente. O projeto utiliza Prisma como ORM para garantir uma interação robusta com o banco de dados PostgreSQL.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **Prisma** - ORM moderno para banco de dados
- **PostgreSQL** - Sistema de gerenciamento de banco de dados relacional
- **CORS** - Middleware para permitir requisições cross-origin

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DO_PROJETO]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
- Crie um arquivo `.env` na raiz do projeto
- Adicione as seguintes variáveis:
```
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/nome_do_banco"
```

4. Execute as migrações do Prisma:
```bash
npx prisma migrate dev
```

## 🏃‍♂️ Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:
```bash
node server.js
```

O servidor estará disponível em `http://localhost:3000`

## 📚 Documentação da API

### Endpoints

#### Usuários

##### Criar Usuário
```http
POST /usuarios
```
**Body:**
```json
{
  "email": "usuario@exemplo.com",
  "name": "Nome do Usuário",
  "age": 25
}
```

##### Listar Usuários
```http
GET /usuarios
```

##### Buscar Usuário Específico
```http
GET /usuarios/:id
```

##### Atualizar Usuário
```http
PUT /usuarios/:id
```
**Body:**
```json
{
  "email": "novo_email@exemplo.com",
  "name": "Novo Nome",
  "age": 26
}
```

##### Deletar Usuário
```http
DELETE /usuarios/:id
```

## 📁 Estrutura do Projeto

```
.
├── prisma/           # Configurações e migrações do Prisma
│   ├── migrations/   # Arquivos de migração do banco de dados
│   └── schema.prisma # Schema do banco de dados
├── node_modules/     # Dependências do projeto
├── server.js         # Arquivo principal da aplicação
├── package.json      # Configurações do projeto
├── .env              # Variáveis de ambiente
└── README.md         # Documentação
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Matheus Felipe
