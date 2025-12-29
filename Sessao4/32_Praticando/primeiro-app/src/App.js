import { useState } from 'react';

function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React"
    
  ]);

  const [user, setUser] = useState({}); // {} -> Objeto vazio

  function handleRegister(e){
    e.preventDefault(); //Evita o comportamento padrão do formulário de recarregar a página
    setTarefas([...tarefas, input]); //Utilizo o Spread Operator para copiar as tarefas já existentes
                                     //  Adiciona a nova tarefa ao array de tarefas
    setInput(''); //Limpa o campo de input após o registro
  }

  return(
    <div>
      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa :</label><br/>
        <input 
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value) } //e é o evento
        /><br/><br/>

        <button type="submit">Registrar</button>
      </form>
      <br/><br/>

      <ul>
        {
          tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))
        }
      </ul>
    </div>
  );
}

//É necessário exportar o componente para que ele possa ser importado em outros arquivos
export default App;

