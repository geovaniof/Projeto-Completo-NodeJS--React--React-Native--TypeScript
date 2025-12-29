const express = require('express');

const server = express();

//localhost:3000/curso
server.get('/curso', (req, res)=> {
    //return res.send('Hello World');
    return res.json({ curso: 'Node JS' });
    //console.log('Curso de NodeJS');
})

server.listen(3000);