import React from 'react';
import {Link} from 'react-router-dom';
import{connect} from "react-redux";

const mapStateToProps = state => {
    return {
        userData : state.userData,
        isConnected : state.isConnected,
    }
};

// to update store
const mapDispatchToProps = dispatch => {
  return {
      signOut : () => dispatch({type : "USER_SIGN_OUT", payload : { } })
  }
};

function HeaderNav(props) {

    const handleSignOut = () => {
      props.signOut()
    }

    return (
      <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      
        {props.isConnected ? 
          <div>
            <Link to="/myaccount" className="main-nav-item"> 
              <i className="fa fa-user-circle"></i>
              { props.userData.firstName }
            </Link>  
            <a onClick={handleSignOut} className="main-nav-item"> 
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a> 
          </div>
          :
          <div>
            <Link to="/signIn" className="main-nav-item"> 
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>  
          </div>
        }
    </nav>
    );
    
    
}

export default (connect(mapStateToProps, mapDispatchToProps))(HeaderNav)