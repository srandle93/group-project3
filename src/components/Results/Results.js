import React from "react";
import "./style.css";
import FavBtn from "./FavBtn";
// import "Event.json" from "../";

const Results = () => { 
    return (
          <ul>
        <li><a href="link" className="collection-item">
          artist
        </a>
        <FavBtn/></li><br />
        <li><a href="link" className="collection-item">
          artist
        </a><FavBtn/>
        </li><br />
        <li><a href="link" className="collection-item">
          artist
        </a><FavBtn/>
        </li><br />
        </ul>
      
    );
   
    // loadToFavePage = () => {

    // };
    // render() {
    //   retrun (
    //     <Results/ >
    //   );
    // }
};
        {/* // <div className="collection">
        //     <a href="link" className="collection-item">Event 1</a><button className="favorite">Favorite</button>
        //     <a href="link" className="collection-item">Event 2</a><button>Favorite</button>
        //     <a href="link" className="collection-item">Event 3</a><button>Favorite</button>
        //     <a href="link" className="collection-item">Event 4</a><button>Favorite</button>
        //     <a href="link" className="collection-item">Event 5</a><button>Favorite</button>
        //     <a href="link" className="collection-item">Event 6</a><button>Favorite</button>
        //     <a href="link" className="collection-item">Event 7</a><button>Favorite</button>
        // </div> */}
 

export default Results;