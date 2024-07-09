import './Style.css';
import Menu from '../Menu/Menu.jsx';
import Titulo from '../Titulo/Titulo.jsx';

function Header(props) {

    return (
        <>
            <section>
                <Menu />
                <Titulo content={props.content} />
            </section>
        </>
    )
}

export default Header;