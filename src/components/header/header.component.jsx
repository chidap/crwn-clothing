import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) =>(
    <div className = "header">
        <Link className = "logo-container" to = "/">
            <Logo className = "logo"  />
        </Link>
        <div className = "options">
            <Link className = "option" to = "/shop">
                Shop
            </Link>
            <Link className = "option" to = "/shop">
                Contact
            </Link>
            {
                currentUser ?
                <div className = "option" onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className = "option" to = "/signin">
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)

/**
 * 
 * function that is passed to connect to get the userReducer (user) 
 * from state(rootReducer) and form userreducer gets currentUser 
 */
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

/**
 *  connect is higher order component that takes aother components as aruguments and returns a souped up component 
 * connect takes two functions as arguments, 
 * here mapStateToProps is passed as first argument, the second argument is optional -->
 * */ 
export default connect(mapStateToProps)(Header);