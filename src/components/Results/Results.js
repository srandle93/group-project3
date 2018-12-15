import React from "react";
import "./style.css";
import FavBtn from "./FavBtn";
// import "Event.json" from "../";

const Results = (props) => {
    results.map((artist) => {
      <div>
        <li><a href="link" className="collection-item">
          {artist}
        </a></li>,
        <FavBtn/>
      </div>
    });
    Favorite = (props) => {
      const isFave = props.isFave;
      if(isFave) {
        <li><a href="link" className="collection-item">
            {artist}<i class="medium material-icons">favorite</i>
        </a></li>
      };
    };
    // loadToFavePage = () => {

    // };
    render() {
        <Results isFave={false} />
    };
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