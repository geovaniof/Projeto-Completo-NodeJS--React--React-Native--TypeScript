const express = require('express');

const server = express();

server.use(express.json());

// Query Params = ?nome=NodeJS

// Route Params = /curso/2

// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// Query Params » //http://localhost:3000/curso?nome=JavaScript

//Route Params » http://localhost:3000/curso/2

//CRUD - Create, Read, Update, Delete

const cursos = ['NodeJS', 'JavaScript', 'React Native'];


server.get('/cursos', (req, res) =>{
    return res.json(cursos);

});


server.get('/cursos/:index', (req, res)=> {
    const {index} = req.params;
    return res.json(cursos[index]);
    //console.log('Curso de NodeJS');
})

//Criando um novo curso
server.post('/cursos', (req, res) => {
    const {name} = req.body;
    cursos.push(name);
    return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    cursos[index] = name;
    return res.json(cursos);
});

//Excluindo um cursp
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);
    return res.json({ message: "Curso deletado com sucesso!" });
});

server.listen(3000);