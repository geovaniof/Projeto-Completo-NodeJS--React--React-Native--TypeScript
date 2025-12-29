import { Link } from 'react-router-dom'

function erro(){
    return(
        <div>
            <h2>Erro 404 - Página Não Encontrada</h2><br/>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <span>Páginas disponíveis :</span><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link><br/>
        </div>
    );
}

export default erro;