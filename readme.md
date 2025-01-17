<div align="center">
    <a href="https://github.com/BlackKing72/api-owlpost">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/e9b25d79-14b9-495d-82e8-a099e95263e5">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/8488d32e-b04f-4179-8253-0524a2249bab">
          <img alt="Logo" src="https://github.com/user-attachments/assets/8488d32e-b04f-4179-8253-0524a2249bab" width="100" height="100">
        </picture>
      </a>
      <h3 align="center">Owlpost API</h3>
      <p align="center">
        Uma API desenvolvida para os projetos Owlpost e Owlcalc. 
      </p>
</div>
<br/>

Foi criada usando [Node.js][node-url] e [Express][express-url]. A API gerencia as postagens, usuários do site e as perguntas do minigame.

Este projeto foi criado como parte de um trabalho escolar, [Projeto Integrador (P.I)](#sobre-o-projeto-integrador), com o objetivo de demonstrar habilidades adquiridas no decorrer das unidade curriculares.

<br/>

## Funcionalidades

- Gerenciar postagens 
  - Criar, editar, excluir e listar postagens.

- Gerenciar usuários
  - Criar, editar, excluir e listar usuários.

- Gerenciar perguntas do Minigame 
  - Criar, editar, excluir e listar perguntas

<br/>

## Tecnologias utilizadas

[![NodeJS][node-shield]][node-url]  

[![ExpressJS][express-shield]][express-url]  

[![Nodemin][nodemon-shield]][nodemon-url]  

[![MySQL][mysql-shield]][mysql-url]  

<br/>

## Melhorias futuras

- Melhorar o tratamento de erros na API, com respostas padronizadas e detalhadas.

- Otimizar consultas ao banco de dados, reduzindo múltiplas chamadas desnecessárias.

- Criar documentação detalhada das rotas.

<br/>

## Autores

[![Jonatas Tavares][jonatas-shield]][jonatas-url]  

[![Matheus Cruz][matheus-shield]][matheus-url]  

[![Michaell Senna][michaell-shield]][michaell-url]  

<br/>

## Como executar o projeto

1. Clone o repositório:
    ```sh
    git clone https://github.com/BlackKing72/api-owlpost/
    ```

2. Acesse a pasta do projeto:
    ```sh
    cd owlpost-api
    ```

3. Instale as dependências:
    ```sh
    npm install
    ``` 
    
4. Você vai precisar de um banco de dados MySQL. Configure o banco usando os scripts da pasta `src/database/`
    - `owlpost.sql`: configuração básica do banco de dados.
    - `owlpostUsers.sql`: adiciona alguns usuários para teste.
    - `owlpostPostagens.sql`: adiciona algumas postagens para teste.
    - `owlpostQuestoesCalculo.sql`: adiciona as questões para o minigame ([Owlcalc](https://github.com/BlackKing72/owlcalc/))

5. Configure o arquivo .env com as variáveis necessárias.  
    ```env
    # Configuração padrão da API
    DB_HOST=localhost
    DB_PORT=3306
    DB_NAME=owlpost
    DB_USER=root
    DB_PASS=
    ```

6. Inicie o servidor:
  ```sh
  npm start
  ```

7. A API estará disponível em http://localhost:3000/. Teste uma das rotas.
  ```
  http://localhost:3000/usuarios/
  ```

<br/>

## Sobre o Projeto Integrador

O P.I tem como objetivo resolver problemas reais utilizando habilidades adquiridas durante as unidades curriculares, incluindo hardware, redes de computadores e desenvolvimento de software.

O nosso projeto foi baseado em um desafio enfrentado pelas turmas de enfermagem, conteúdos teóricos que tornavam o aprendizado difícil e pouco interativo.

Nossa solução foi divida em duas partes:

### Owlpost

  Como as turmas de enfermagem já tinham o costume de compartilharem conteúdos entre si, pensamos em algo que poderia facilitar isso. Uma plataforma colaborativa onde os estudantes podem compartilhar conteúdos relacionados as suas matérias e outros tópicos de interesse da turma.

### Owlcalc

  Uma das maiores demandas das turmas de enfermagem. Um minigame educativo para ajudar os estudantes de enfermagem a resolverem os calculos de medicamento e gotejamento de soro de forma prática e interativa.


[node-shield]:    https://img.shields.io/badge/Node.JS-404040?style=for-the-badge&logo=nodedotjs
[node-url]:       https://nodejs.org/en/

[nodemon-shield]: https://img.shields.io/badge/Nodemon-404040?style=for-the-badge&logo=nodemon
[nodemon-url]:    https://nodemon.io/

[express-shield]: https://img.shields.io/badge/Express-404040?style=for-the-badge&logo=express
[express-url]:    https://expressjs.com/

[mysql-shield]:   https://img.shields.io/badge/MySQL-404040?style=for-the-badge&logo=mysql
[mysql-url]:      https://www.mysql.com/

[jonatas-shield]: https://img.shields.io/badge/Jonatas_Tavares-404040?style=for-the-badge&logo=github
[jonatas-url]: https://github.com/JonatasTavares2000

[matheus-shield]: https://img.shields.io/badge/Matheus_Cruz-404040?style=for-the-badge&logo=github
[matheus-url]:    https://github.com/BlackKing72

[michaell-shield]: https://img.shields.io/badge/Michaell_Senna-404040?style=for-the-badge&logo=github
[michaell-url]:    https://github.com/thug-okami
