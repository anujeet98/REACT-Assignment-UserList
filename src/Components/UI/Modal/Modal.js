
import './Modal.css';

const Modal = (props) => {
    const invisible = 'display';
    
    const closeHandler = (event) => {
        if(event.target.className.includes('modal') || event.target.className==='close')
            props.onCloseModal();
    }
    return (
        <div className={`modal ${props.children===''?invisible:''}`} onClick={closeHandler}>
            <div className="content">
                <div className='header'>Invalid Input</div>
                <span className="close" onClick={closeHandler}>&times;</span>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default Modal;