import PropTypes, { string } from 'prop-types'
function Greeting(props){


    const welcomeMsg= <h2 className="welcome">Welcome! {props.username}</h2>
    const promptMsg=<h2 className="log-in">Please log in to continue !</h2>

    return(props.isLoggedIn)? welcomeMsg : promptMsg
    
}
Greeting.PropTypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
Greeting.defaultProps={
    isLoggedIn:false,
    username:"guest",

}
export default Greeting