import React from "react";
import "./style.css";
import FavBtn from "./FavBtn";
// import "Event.json" from "../";

function Results() {
    return(
        <div className="eventList">
            <div className="eventResult">
                <div className="eventInfo">
                    <FavBtn/>
                    <a href="https://www.cabooze.com/event/1780739-christmas-cabooze-last-minneapolis/" className="eventLink">Christmas At  The Cabooze! with: Last Import, If Eye May, Johnny Yuma, and The Aftergreens</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 4:00pm</h6>
                    <h6>Cover: $5 </h6>
                    <h6>Listen: <a href="https://lastimport.bandcamp.com/">https://lastimport.bandcamp.com/</a></h6>   
                </div>
            </div>
              
             
            <div className="eventResult">
                <div className="eventInfo">
                    <FavBtn/>
                    <a href="https://www.dakotacooks.com/event/bodeans/" className="eventLink">BoDeans at Dakota Jazz Club</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 7:00pm</h6>
                    <h6>Cover: $65/$55/$45 </h6>
                    <h6>Listen: <a href="http://bodeans.com/videos/">http://bodeans.com/videos/</a></h6>
                </div>
            </div>
            <div className="eventResult">
                <div className="eventInfo">
                    <FavBtn/>
                    <a href="http://honeympls.com/event/the-recipe-dance-party-14/" className="eventLink">The Recipe – Dance Party at Honey</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 10:00pm</h6>
                    <h6>Cover: Unknown </h6>
                    <h6>Listen: <a href="https://soundcloud.com/jimmy2times-1">https://soundcloud.com/jimmy2times-1</a></h6>
                </div>
            </div>
            <div className="eventResult">
                <div className="eventInfo">
                    <FavBtn/>
                    <a href="https://www.icehousempls.com/events/2018/12/22/roma-di-luna" className="eventLink">Roma Di Luna w/ special guest DJ Chastity Brown at IceHouse</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 11:00pm</h6>
                    <h6>Cover: $20 </h6>
                    <h6>Listen: <a href="https://www.facebook.com/romadilunamusic/">https://www.facebook.com/romadilunamusic/</a></h6>
                </div>
            </div>
            <div className="eventResult">
                <div className="eventInfo">
                    <FavBtn/>
                    <a href="https://www.kittycatklub.net/music/2018/12/22/another-heaven" className="eventLink">Another Heaven w/ Alpha Consumer and Nallo at KittyCat Klub</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 9:00pm</h6>
                    <h6>Cover: $5</h6>
                    <h6>Listen: <a href="https://anotherheaven.bandcamp.com/">https://anotherheaven.bandcamp.com/</a></h6>
                </div>
            </div>
            <div className="eventResult">
                <div className="eventInfo">
                    <FavBtn/>
                    <a href="http://www.nomadpub.com/calendar/spurs-vs-everton-soccer/" className="eventLink">SPURS VS EVERTON SOCCER at Nomad World Pub</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 10:00am</h6>
                    <h6>Cover: Free </h6>
                    <h6>Listen: <a href=""></a></h6>
                </div>
            </div>
            <div className="eventResult">
                <div className="eventInfo">
                <FavBtn/>
                    <a href="http://palmersbar.net/event/hip-hop-holiday-party-rock" className="eventLink">Hip-Hop Holiday Party Rock at Palmer's Bar</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 10:00pm</h6>
                    <h6>Cover: $5 </h6>
                    <h6>Listen: <a href="https://www.facebook.com/captiveagents/">https://www.facebook.com/captiveagents/</a></h6>
                </div>
            </div>
            <div className="eventResult">
                <div className="eventInfo">
                    <FavBtn/>
                    <a href="http://www.citypages.com/calendar/hidden-beach/503244951" className="eventLink">HIDDEN BEACH at Hexagon Bar</a>
                    <h6>Date: Sat, Dec 22, 2018</h6>
                    <h6>Time: 9:45pm</h6>
                    <h6>Cover: Free </h6>
                    <h6>Listen: <a href="https://www.facebook.com/HiddenBeachBand/">https://www.facebook.com/HiddenBeachBand/</a></h6>
                </div>
            </div>
        </div>
    )
}

export default Results;