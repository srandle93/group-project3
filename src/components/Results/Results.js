import React from "react";
import "./style.css";
import FavBtn from "./FavBtn";
// import "Event.json" from "../";

function Results() {
    return(
        <div className="eventList">
            <div className="eventResult">
                <a href="https://www.cabooze.com/event/1780739-christmas-cabooze-last-minneapolis/" className="eventLink">Christmas At  The Cabooze! with: Last Import, If Eye May, Johnny Yuma, and The Aftergreens</a>
                <h6>Date:</h6>
                <h6>Time:</h6>
                <h6>Cover:</h6>
                <h6>Listen:</h6>
                <FavBtn/>
            </div> 
            <div className="eventResult">
                <a href="#!" className="eventLink">Event 2</a>
                <FavBtn/>
            </div>
            <div className="eventResult">
                <a href="#!" className="eventLink">Event 3</a>
                <FavBtn/>
            </div>
            <div className="eventResult">
                <a href="#!" className="eventLink">Event 4</a>
                <FavBtn/>
            </div>
            <div className="eventResult">
                <a href="#!" className="eventLink">Event 5</a>
                <FavBtn/>
            </div>
            <div className="eventResult">
                <a href="#!" className="eventLink">Event 6</a>
                <FavBtn/>
            </div>
            <div className="eventResult">
                <a href="#!" className="eventLink">Event 7</a>
                <FavBtn/>
            </div>
        </div>
    )
}

export default Results;