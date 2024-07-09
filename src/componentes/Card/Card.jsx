import './Card.css'
import Titulo from '../Titulo/Titulo.jsx';

function Card(props) {

    return (
        <>  
            <div className='card-component'>
                <Titulo content={props.content} />
                <img src='https://upload.wikimedia.org/wikipedia/pt/8/8d/Batman_por_Jim_Lee.jpg' />
                <p>Descrição do Card.</p>
                <button>Clique!</button>
            </div>
        </>
    )
}

export default Card;