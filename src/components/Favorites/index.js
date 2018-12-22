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

        <div className="eventList">
    
        <div className="eventResult">
                <div className="eventInfo">
                    <a href="https://www.dakotacooks.com/event/bodeans/" className="eventLink">BoDeans at Dakota Jazz Club</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 7:00pm</h6>
                    <h6>Cover: $65/$55/$45 </h6>
                    <h6>Listen: <a href="http://bodeans.com/videos/">http://bodeans.com/videos/</a></h6>
                </div>
            </div>
        
            <div className="eventResult">
                <div className="eventInfo">
                    <a href="https://www.kittycatklub.net/music/2018/12/22/another-heaven" className="eventLink">Another Heaven w/ Alpha Consumer and Nallo at KittyCat Klub</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 9:00pm</h6>
                    <h6>Cover: $5</h6>
                    <h6>Listen: <a href="https://anotherheaven.bandcamp.com/">https://anotherheaven.bandcamp.com/</a></h6>
                </div>
            </div>

        </div>
        </div>
        
        

);

export default FavoritesPage; 