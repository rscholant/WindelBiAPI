<img src="./.github/logo.png" min-width="400px" max-width="400px" width="400px" align="center" alt="logo">

---

## 💪 Projeto

Projeto criado para que se possa enviar dados do banco de dados local que está hospedado em Firebird, para um banco de dados em um servidor externo, para utilização de relatórios de clientes.

---

## 🔧 Configuração do banco de dados

### ⚙️ USERS

Ficará responsável por guardar as informações dos clientes do sistema, se estão ativos ou não.

| Campo | Tipo    | Tamanho | Null? |
| ----- | ------- | ------- | ----- |
| ID    | Integer |         | Não   |

### ⚙️ CONFIG

Ficará responsável por guardar as configurações as quais os clientes irão utilizar para enviar os dados.

| Campo     | Tipo    | Tamanho | Null? |
| --------- | ------- | ------- | ----- |
| UUID      | Varchar | 32      | Não   |
| QUERY     | Varchar | 2000    | Não   |
| TABLES    | Varchar | 2000    | Não   |
| REFERENCE | Varchar | 200     | Não   |

### ⚙️ DATA

A tabela onde os dados serão alocados no servidor externo.

| Campo     | Tipo      | Tamanho | Null? |
| --------- | --------- | ------- | ----- |
| UUID      | Varchar   | 32      | Não   |
| CLIENT    | VARCHAR   | 32      | Não   |
| DATE      | Timestamp |         | Não   |
| ID_CONFIG | Varchar   | 32      | Não   |

---

Feito com ❤️ e ☕ por **Rafael Scholant** 👋
