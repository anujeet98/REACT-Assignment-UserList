import './User.css';

const User = (props) => {
    return (
        <div className="useritem">
            {props.userdata.username} ({props.userdata.age} years old) {props.userdata.college}
        </div>
    )
}

export default User