import {useState} from 'react';

//Desestruturando props -> {aluno}
function Nome( {aluno, idade} ){
  return(
    <span>Bem vindo: {aluno} - Idade : {idade} anos</span>
  )
}

export default Nome;