import { useState, useRef } from 'react';
import Button from '../Button';
import './Form.css';

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const collegeInputRef = useRef('');  //AVOID REFS - Just example - use State instead
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        console.log();
        if(username.trim().length === 0 || age.trim().length === 0 || collegeInputRef.current.value === '')
            return props.onSubmitError(0);
        if(age <= 0)
            return props.onSubmitError(1);

        const newUser = {username: username, age: age, college: collegeInputRef.current.value};
        setUsername('');
        setAge('');

        //AVOID REFS - Just example
        collegeInputRef.current.value = '';
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
            <div className={`form-control`}>
            <label>College name</label>
            <input type="text" ref={collegeInputRef}/>
        </div>
            <Button type="submit">Add User</Button>
        </form>
    )
}

export default Form;