import { useState } from 'react';
import Nome from './components/Nome';

function App(){
  const [aluno, setAluno] = useState("Geovani")
  function handleClangeName(nome){
    setAluno(nome);
  }
  return(
    <div>
      <h1>Component App</h1><br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleClangeName("Geovani De Oliveira Fanine")}>
        Mudar Nome
      </button>
    </div>
  );
}

//É necessário exportar o componente para que ele possa ser importado em outros arquivos
export default App;

