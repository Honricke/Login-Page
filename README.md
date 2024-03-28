# Sistema de Login utilizando React.js, Flask e PostgreSQL

Este repositório contém o código fonte de um sistema de login desenvolvido utilizando React.js no frontend, Flask no backend e PostgreSQL como banco de dados. O sistema permite que os usuários se cadastrem, façam login e acessem uma área restrita.

## Tecnologias Utilizadas

- **React.js**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Flask**: Um framework de desenvolvimento web em Python.
- **PostgreSQL**: Um sistema de gerenciamento de banco de dados relacional.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js e npm (gerenciador de pacotes do Node.js)
- Python
- PostgreSQL

## Configuração

1. **Clonar o repositório:**
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/Honricke/Login-System)


2. **Instalar as dependências do frontend:**
cd frontend
npm install


3. **Instalar as dependências do backend:**
cd backend
pip install -r requirements.txt


4. **Configurar o banco de dados:**

- Crie um banco de dados PostgreSQL.
- Atualize as configurações do banco de dados no arquivo `config.py` no diretório `backend`.

5. **Executar a aplicação:**

- No diretório `frontend`, execute:

  ```
  npm start
  ```

- No diretório `backend`, execute:

  ```
  flask --app app run --debug
  ```

6. **Acesse a aplicação:**

Abra um navegador e acesse `http://localhost:3000`.

## Contribuindo

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, por favor, abra uma *issue* ou envie um *pull request*.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais detalhes.

## Contato

Para mais informações ou dúvidas, entre em contato via e-mail: henriquebandeira307@gmail.com.
