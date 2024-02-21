import './User.css';

const User = (props) => {
    return (
        <div className="useritem">
            {props.userdata.username} ({props.userdata.age} years old)
        </div>
    )
}

export default User