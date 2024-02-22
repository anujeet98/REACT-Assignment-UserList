import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Overlay = props => {
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
)};


const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Overlay onCloseModal={props.onCloseModal}>{props.children}</Overlay>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default Modal;