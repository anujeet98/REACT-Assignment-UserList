import { useState } from 'react';
import './App.css';
import Card from './Components/UI/Card';
import Form from './Components/UI/Form/Form';
import User from './Components/UI/User/User';
import Modal from './Components/UI/Modal/Modal';

function App() {
  const [userlist, setUserlist] = useState([]);
  const [modalText, setModalText] = useState('');
  
  const addUserHandler = (newUser)=>{
    const userData = {...newUser, id:Math.round((Math.random()*10000)).toString()};
    setUserlist((olduserlist)=>{
      return [...olduserlist, userData];
    })
  }
  const submitErrorHandler = (errorCode) =>{
      if(errorCode === 0){
        setModalText(()=>{
          return 'Please enter a valid name, age and college name (non-empty values).';
        })
      }
      else if(errorCode === 1){
        setModalText(()=>{
          return 'Please enter a valid age (>0).';
        })
      }
  }
  const closeModalHandler = () => {
    setModalText(()=>'');
  }
  return (
    <div className="App">
        <Card>
            <Form onAddUser={addUserHandler} onSubmitError={submitErrorHandler}></Form>
        </Card>
        {
          userlist.length===0 ? '' : 
            <Card flexStyling={true}>
              { 
                userlist.map(user => (
                    <User userdata={user} key={user.id}></User>
                ))
              }
            </Card>
        }
        <Modal onCloseModal={closeModalHandler}>{modalText}</Modal>
    </div>
  );
}

export default App;
