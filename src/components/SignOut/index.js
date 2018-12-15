import React from 'react';

import { withFirebase } from '../Firebase';
import "./style.css";

const SignOutButton = ({ firebase }) => (
  <button id="signOutButton" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);