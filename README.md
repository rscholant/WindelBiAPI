<div style="text-align:center"><img src="./.github/logo.png" min-width="400px" max-width="400px" width="400px" align="center" alt="logo"></div>

---

## 💪 Projeto

Projeto criado para que se possa enviar dados do banco de dados local que está hospedado em Firebird, para um banco de dados em um servidor externo, para utilização de relatórios de clientes.

---

## 🔧 Configuração do banco de dados

### 🔧 USERS

Ficará responsável por guardar as informações dos clientes do sistema, se estão ativos ou não.

| Campo | Tipo    | Tamanho | Null? |
| ----- | ------- | ------- | ----- |
| ID    | Integer |         | Não   |
| NAME  | Varchar | 50      | Não   |
| CNPJ  | Varchar | 20      | Não   |
| WSID  | Varchar | 50      | Não   |

### 🔧 SINC_CONFIG

Ficará responsável por guardar as configurações as quais os clientes irão utilizar para enviar os dados.

| Campo   | Tipo    | Tamanho  | Null? |
| ------- | ------- | -------- | ----- |
| ID      | Integer |          | Não   |
| USER_ID | Integer | FK USERS | Não   |
| TITLE   | Varchar | 200      | Não   |
| SQL     | Varchar | 2000     | Não   |
| TABLES  | Varchar | 2000     | Não   |

### 🔧 SINC_DATUM

Esta tabela irá ser utilizada para guardar os dados que serão exportados do banco de dados local do cliente, como configurado na entidade de configurações.

| Campo          | Tipo    | Tamanho        | Null? |
| -------------- | ------- | -------------- | ----- |
| ID             | Integer |                | Não   |
| USER_ID        | Integer | FK USERS       | Não   |
| SINC_CONFIG_ID | Integer | FK SINC_CONFIG | Não   |
| DATA           | JSON    |                | Sim   |

---

## ⚙️ Funcionamento

Este projeto funcionará como um intermediário, para que a engine possa se comunicar com o frontend da aplicação, a qual gerará os gráficos diretamente para os usuários.

### ⚙️ Autenticação

Cada cliente cadastrado no sistema, poderá utiliza-lo através de uma autenticação simples via JWT, passando a rota _/auth/login_, passando no corpo da requisição o cnpj do mesmo.

### ⚙️ Configurações de sincronização

A utilização das configurações de sincronização é simples, é um CRUD básico, e as rotas para o acesso são a partir de _/sinc-config_ e também há mais três rotas as quais são especificas para o uso da engine, como demonstrado abaixo

- **[POST]** _/sinc-config/req-all_ : Irá informar à engine através de websockets que o usuário quer atualizar os dados de todas as configurações.
- **[POST]** _sinc-config/req/:id_ : Irá informar à engine através de websockets que o usuário deseja atualizar os dados da configuração passada através do parâmetro.
- **[GET]** _sinc-config/is-newer/:id_ : Irá retornar à engine se há alguma nova configuração a ser atualizada no cliente, à partir da configuração que foi informada por parâmetro.

### ⚙️ Dados de sincronização

A utilização dos dados de sincronização é simples, é um CRUD básico, e as rotas para o acesso são a partir de _/sinc-data_.

---

## 💻 Instalação

```bash
# Clone este repositório
git clone https://github.com/rscholant/WindelBiAPI
# Entre na pasta criada
cd WindelBiAPI
# Instale as dependências
yarn
# Configure os dados de conexão com o banco de dados em ormconfig.json
sudo nano ormconfig.json
# Execute as migrações no banco de dados
yarn migration:run
# Execute o projeto
yarn start:dev
```

---

Feito com ❤️ e ☕ por **Rafael Scholant** 👋
