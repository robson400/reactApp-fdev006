import './MainContent.css'
import  Card from '../Card/Card.jsx';

function MainContent() {

    return (
        <>  
            <div className='cards'>
                <div className='card'>
                    <Card content='Card 01'/>
                </div>
                <div className='card'>
                    <Card content='Card 02'/>
                </div>
                <div className='card'>
                    <Card content='Card 03'/>
                </div>
                <div className='card'>
                    <Card content='Card 04'/>
                </div>
                <div className='card'>
                    <Card content='Card 05'/>
                </div>
                <div className='card'>
                    <Card content='Card 06'/>
                </div>
                <div className='card'>
                    <Card content='Card 07'/>
                </div>
                <div className='card'>
                    <Card content='Card 08'/>
                </div>
            </div>
        </>
    )
}

export default MainContent;