import './Card.css';

const Card = (props)=>{
    return (
        <div className={`card ${props.flexStyling?'flex-spacing':''}`}>
            {props.children}
        </div>
    );
}

export default Card;
