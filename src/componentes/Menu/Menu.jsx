import {Link} from 'react-router-dom';
import './Style.css';

function Menu() {
    
    return (
        <>
            <ul className='menu'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
            </ul>
        </>
    )
}

export default Menu;