import {useParams} from 'react-router-dom';

function produto(){
    const {id} = useParams();

    return(
        <div>
            <h2>Página detalhe do produto</h2>
            Meu produto é {id}
        </div>
    )
}

export default produto;