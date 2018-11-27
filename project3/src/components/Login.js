import React from "react";

function Login() {
    return (
      <div className="container">

    <button data-target="modal1" className="btn modal-trigger">Modal</button>

  <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>

        {/* <button data-target="modal1" class="btn modal-trigger">Modal</button>
        <div id="modal1" className="modal">
          <div className="modal-content">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate"></input>
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate"></input>
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="username" type="text" className="validate"></input>
              <label for="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"></input>
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"></input>
              <label for="email">Email</label>
            </div>
          </div>
        </form>
      </div>
      </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div> */}
        </div>

        (document).ready(() => {
            $('.modal').modal();
        });
      
    )
}
export default Login;