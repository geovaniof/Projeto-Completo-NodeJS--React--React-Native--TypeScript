import {Link} from 'react-router-dom';

function Contato() {
    return(
        <div>
            <h1>Pagina de Contato</h1>
            <span>Contato da Empresa (dd) xxxxx-xxxx</span>
            <br/><br/>
            <Link to="/">Pagina Home</Link>
            <br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    );
}

export default Contato;