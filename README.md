# Photo-Tour-API


# Back-end

Bem-vindo à Photo-Tour-API! Este projeto contém o back-end da aplicação, desenvolvido com Node.js, Express, e MongoDB.
Esta API permite que os usuários façam upload de fotos, compartilhem a localização, e adicionem descrições aos seus registros turísticos.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas da API](#rotas-da-api)
- [Middleware](#middleware)
- [Modelos](#modelos)


## Instalação

1. Clone o repositório:
    ```bash
    git clone git@github.com:lygianegreiros/Photo-Tour-API.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd Photo-Tour-API/backend
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do diretório `backend` e configure as seguintes variáveis de ambiente:
    ```dotenv
    MONGODB_URI=mongodb://localhost:27017/nome-do-banco
    JWT_SECRET=sua_chave_secreta_jwt
    ```

## Uso

1. Inicie o servidor:
    ```bash
    node index.js
    ```

2. A API estará rodando em `http://localhost:3000`.

## Estrutura do Projeto

```plaintext
backend/
├── config/
│   └── db.js
├── controllers/
│   └── registroController.js
│   └── authController.js
├── middlewares/
│   └── authMiddleware.js
│   └── errorHandler.js
├── models/
│   └── Registro.js
│   └── Usuario.js
├── routes/
│   └── registroRoutes.js
│   └── authRoutes.js
├── validation/
│   └── registroValidation.js
├── uploads/
├── .env
├── index.js
├── package.json
```

## Rotas da API

### Autenticação

- `POST /auth/register` - Registra um novo usuário
- `POST /auth/login` - Autentica um usuário e retorna um token JWT

### Registros

- `GET /api/registros` - Retorna todos os registros (necessário autenticação)
- `POST /api/upload` - Faz upload de uma nova foto com descrição e localização (necessário autenticação)

## Middleware

- `authMiddleware.js` - Verifica o token de autenticação JWT
- `errorHandler.js` - Lida com erros de forma centralizada

## Modelos

### Registro

```javascript
const mongoose = require('mongoose');

const RegistroSchema = new mongoose.Schema({
  foto: String,
  localizacao: String,
  descricao: String,
  data: Date
});

module.exports = mongoose.model('Registro', RegistroSchema);
```

### Usuario

```javascript
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
```

Feito com 💚 por [Lygia Negreiros](https://github.com/lygianegreiros)
```

