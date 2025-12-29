import Nome from './components/Nome';

function App(){
  return(
    <div>
      <h1>Component App</h1>
      <Nome aluno="Geovani" idade={40}/>
      <br/>
      <Nome aluno="Mirella" idade={35}/>
    </div>
  );
}

//É necessário exportar o componente para que ele possa ser importado em outros arquivos
export default App;

