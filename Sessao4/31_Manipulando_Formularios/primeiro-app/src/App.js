import { useState } from 'react';

function App(){
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  const [user, setUser] = useState({}); // {} -> Objeto vazio

  function handleRegister(e){
    e.preventDefault(); //Evita o comportamento padrão do formulário de recarregar a página
    alert("Usuário Registrado com Sucesso!")
    setUser({
      nome: nome,
      email: email,
      idade: idade
    })
  }

  return(
    <div>
      <form onSubmit={handleRegister}>
        <label>Nome :</label><br/>
        <input 
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value) } //e é o evento
        /><br/>

        <label>E-Mail</label><br/>
        <input 
          placeholder="Digite seu E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>

        <label>Idade</label> <br/>
        <input 
          placeholder="Digite a sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br/><br/>

        <button type="submit">Registrar</button>
      </form>
      <br/><br/>

      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade} anos</span><br/>
        <span>E-Mail: {user.email}</span><br/>
      </div>
    </div>
  );
}

//É necessário exportar o componente para que ele possa ser importado em outros arquivos
export default App;

