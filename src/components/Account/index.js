import React from 'react';
import "./style.css";
import Navigation from '../Navigation';


import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import Jumbotron from '../Home/Jumbotron';

const AccountPage = () => (
  <div >
    <img className="signInBackground"  src="../assets/images/black-and-white-club-crowd-788824.jpg" alt="blackAndWhitePhoto"></img>

  <Navigation />
  <Jumbotron />
  <AuthUserContext.Consumer>
    {authUser => (
      <div id="accountForm">
        <h1 id="accountHeader">Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);