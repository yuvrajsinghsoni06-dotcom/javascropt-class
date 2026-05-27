import PropTypes from "prop-types"
import PropsTypes from props-types
function UserGreeting(props){
    const cond_t = <h2 className="welcome_mess">Welcome {props.username}</h2>
    const cond_f = <h2 className="reject_mess"> Pls Login to Continue ...</h2>


    return(props.isLoggedIn ? cond_t : cond_f)

}

UserGreeting.PropTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest"
}

export default UserGreeting;