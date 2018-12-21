import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import "./style.css";

const Navigation = () => (
  <div className="navBarBackground">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    {/* <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li> */}
    <li >
      <Link id="homeButton" to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link id="accountButton" to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li >
      <Link id="adminButton" to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <Link id='faveButton' to={ROUTES.FAVORITES}>Favorites</Link>
      </li>
      <li id="navSignOutButton"><SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    {/* <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li> */}
    <li>
      <Link id="navSignInButton" to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;