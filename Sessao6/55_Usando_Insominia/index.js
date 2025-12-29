const express = require('express');

const server = express();

// Query Params = ?nome=NodeJS

// Route Params = /curso/2

// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// Query Params » //http://localhost:3000/curso?nome=JavaScript

//Route Params » http://localhost:3000/curso/2

const cursos = ['NodeJS', 'JavaScript', 'React Native'];


server.get('/curso/:index', (req, res)=> {
    const {index} = req.params;
    return res.json(cursos[index]);
    //console.log('Curso de NodeJS');
})

server.listen(3000);