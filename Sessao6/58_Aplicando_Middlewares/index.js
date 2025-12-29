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

//Middleware Global
server.use((req, res, next) => {
    console.log(`URL CHAMADA: ${req.url}`);
    return next();
});

function checkCurso(req, res, next){
    if (!req.body.name){
        
    }
    return next();
}

function checkIndexCurso(req, res, next){
    const curso = cursos[req.params.index];
    if (!curso){
        return res.status(400).json({ error: 'Curso não encontrado!'});
    }

    req.curso = curso;

    return next();
}

server.get('/cursos', (req, res) =>{
    return res.json(cursos);

});


server.get('/cursos/:index', checkIndexCurso, (req, res)=> {
    //const {index} = req.params;
    //return res.json(cursos[index]);
    return res.json(req.curso);
    //console.log('Curso de NodeJS');
})

//Criando um novo curso
server.post('/cursos', checkCurso, (req, res) => {
    const {name} = req.body;
    cursos.push(name);
    return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    cursos[index] = name;
    return res.json(cursos);
});

//Excluindo um cursp
server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);
    return res.json({ message: "Curso deletado com sucesso!" });
});

server.listen(3000);