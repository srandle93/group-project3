import React from 'react';
import "./style.css";

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <div className="signInBackground">
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