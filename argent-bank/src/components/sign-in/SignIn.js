import React from "react";
import{connect} from "react-redux";
import UserService from "../../services/UserService";

const mapStateToProps = state => {
    return {
        user : state.user,
        isConnected : state.isConnected,
    }
};

function SignIn(props){

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginRequest={
            email: event.target.username.value,
            password: event.target.password.value,
          };
        UserService.loginUser(loginRequest).then( (data) =>{
             console.log(data.status)
             console.log(data.body.token)
        })
       
      }
    return (
        props.isConnected ? "true"
            :
            <main className="main bg-dark">
            <section className="sign-in-content">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Password</label
                  ><input type="password" id="password" />
                </div>
                <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button">Sign In</button> 
               
              </form>
            </section>
          </main>
    );
}

export default (connect(mapStateToProps))(SignIn);