# Windel BI API ™

---

## 💪 Projeto

Projeto criado para que se possa enviar dados do banco de dados local que está hospedado em Firebird, para um banco de dados em um servidor externo, para utilização de relatórios de clientes.

---

## 🔧 Tabelas locais

### ⚙️ BI_CONFIG

Tabela responsável por conter as configurações do servidor, versão do banco de dados, versão do sincronizador e etc...

| Campo | Tipo    | Tamanho | Null? |
| ----- | ------- | ------- | ----- |
| KEY   | Varchar | 100     | Não   |
| VALUE | Varchar | 200     | Não   |

### ⚙️ BI_REPLIC_CONFIG

Tabela responsável por conter as configurações de quais dados serão enviados para o servidor externo.

| Campo                | Tipo      | Tamanho | Null? |
| -------------------- | --------- | ------- | ----- |
| UUID                 | Varchar   | 32      | Não   |
| QUERY                | Varchar   | 2000    | Não   |
| DATE_SINCE_LAST_PULL | Timestamp |         | Não   |
| TABLES               | Varchar   | 2000    | Não   |

### ⚙️ BI_DATA

Tabela responsável por conter os dados que serão enviados para o servidor externo.

| Campo     | Tipo      | Tamanho | Null? |
| --------- | --------- | ------- | ----- |
| UUID      | Varchar   | 32      | Não   |
| ID_CONFIG | Varchar   | 32      | Não   |
| DATE      | Timestamp |         | Não   |
| SITUATION | INT       |         | Não   |
| DATA      | Varchar   | 2000    | Não   |

### 📃 Enumerador da situação dos dados

- **Inserção**
- **Alteração**
- **Exclusão**

---

## 🔧 Tabelas externas

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
