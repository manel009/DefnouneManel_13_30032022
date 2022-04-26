import React from 'react';
import {Link} from 'react-router-dom';

function HeaderNav() {
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
      <div>
        <Link to="/signIn" className="main-nav-item"> 
          <i className="fa fa-user-circle"></i>
           Sign In
        </Link>  
      </div>
    </nav>
    );
    
    
}

export default HeaderNav