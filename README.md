<h1 align="center">
  <strong>Bootcamp GoStack - Desafio 01</strong>
  <br />
  <br />
  <img alt="Desafio01" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
<h1/>

<h3 align="center">
  Resolução do Desafio 01 
</h3>

## O Desafio

Consiste em desenvolver uma aplicação que permita criar, atuallizar, listar e deletar projetos.

A aplicação também deve permitir criar tarefas dentro de um projeto e usar Middlewares para a contagem de requisições
e para checar se um projeto existe, verificando seu id.

## Rotas utilizadas

- `Get /projects`: Para listar todos os projetos.
- `Put /projects/:id`: Para atualizar o título do projeto passando o `id` pela URL e o novo título pelo body.
- `Delete /projects/:id`: Para deletar um projeto com o `id` passando pela URL.
- `Post /projects/:id/tasks`: Para criar uma task de um determinado projeto, passando o `id` do projeto pela URL e sua nova task usando o `title` no body da requisição.
- `Get /projects/:id`: Adicionei uma outra requisição Get para retornar um projeto específico buscando por seu id.
