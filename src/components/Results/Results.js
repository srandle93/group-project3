import React from "react";
import "./style.css";
import FavBtn from "./FavBtn";
// import "Event.json" from "../";

function Results() {
    return(
        <div className="eventList">
            <div className="eventResult">
                <a href="#!" className="eventLink">Event 1</a>
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