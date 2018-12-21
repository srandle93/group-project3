import React from 'react';
import Navigation from '../Navigation';
import Jumbotron from '../Home/Jumbotron';
import SignOutButton from '../SignOut';
import { withAuthorization } from '../Session';
import './style.css';




const FavoritesPage = () => (
    <div>
          <img className="signInBackground"  src="../assets/images/black-and-white-club-crowd-788824.jpg" alt="blackAndWhitePhoto"></img>
        
        <Navigation />
        
        <Jumbotron />
    

        </div>
        
        

);

export default FavoritesPage; 