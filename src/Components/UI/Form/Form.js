import { useState } from 'react';
import Button from '../Button';
import './Form.css';

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0)
            return props.onSubmitError(0);
        if(age <= 0)
            return props.onSubmitError(1);

        const newUser = {username: username, age: age};
        setUsername('');
        setAge('');
        props.onAddUser(newUser);
    };
    const userNameChangeHandler = (event)=>{
        setUsername(()=>{
            return event.target.value;
        });
    };
    const ageChangeHandler = (event)=>{
        setAge(()=>{
            return event.target.value;
        })
    };


    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control`}>
                <label>Username</label>
                <input type="text" onChange={userNameChangeHandler} value={username}/>
            </div>
                <div className={`form-control`}>
                <label>Age (Years)</label>
                <input type="number" onChange={ageChangeHandler} value={age}/>
            </div>
            <Button type="submit">Add User</Button>
        </form>
    )
}

export default Form;