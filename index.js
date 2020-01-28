const express = require('express');
const server = express();

server.use(express.json());

const projects = [];


// Middleware Global - contagem de quantas requisições são feitas
function logRequest(req, res, next) {
  console.count("Número de requisições");
  return next();
}
server.use(logRequest);

// Middleware Local - verifica se o projeto existe pela ID
function chekIdExist(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  if(!project) {
    return res.status(400).json({ error: "Project not found "});
  }
  return next();
} 


// Rota para listar todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Rota para listar um projeto
server.get('/projects/:id', chekIdExist, (req, res) => {
  const {id} = req.params;
  const project = projects.find(p => p.id == id);
  return res.json(project);
}); 

// Rota para criar um novo projeto
server.post('/projects', (req, res) => {
  const { id, title } = req.body; 
  const project = {
      id,
      title,
      tasks: []
  }; 
  projects.push(project);
  return res.json(project);
});

// Rota para editar o título do projeto
server.put('/projects/:id', chekIdExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(p => p.id == id); 
  project.title = title;
  return res.json(project); 
});

// Deletar um projeto
server.delete('/projects/:id', chekIdExist, (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.find(p => p.id == id); 
  projects.splice(projectIndex, 1);
  return res.send();
});

// Rota para criar uma nova tarefa 
server.post('/projects/:id/tasks', chekIdExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

  
server.listen(3333); 
 
