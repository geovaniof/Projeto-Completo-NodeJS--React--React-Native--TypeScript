const express = require('express');

const server = express();

// Query Params = ?nome=NodeJS

// Route Params = /curso/2

// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// Query Params » //http://localhost:3000/curso?nome=JavaScript

//Route Params » http://localhost:3000/curso/2

server.get('/curso/:id', (req, res)=> {
    const id = req.params.id;
    return res.json({ Curso: `Curso ${id}`})
    //console.log('Curso de NodeJS');
})

server.listen(3000);