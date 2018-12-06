import React from "react";
import database from "./firebase";
database = firebase.database();

function Login() {
    return (
      <div className="container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"></input>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"></input>
              <label for="password">Password</label>
            </div>
          </div>
          <a class="waves-effect waves-light btn-small">Login</a> 
        </form>
      </div>
      </div>
      
    )
}
export default Login;