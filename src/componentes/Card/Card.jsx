import './Card.css'
import Titulo from '../Titulo/Titulo.jsx';

function Card(props) {

    return (
        <div className='card-component'>
            <Titulo title={props.title} />
            <img src={props.src} />
            <p>{props.description}</p>
            <button>Ver mais!</button>
        </div>
    )
}

export default Card;