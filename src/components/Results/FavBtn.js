import React from "react";


const FavBtn = (props) => {
      return(
        <span className="favBtn" {...props} role="button" tableIndex="0">
          <i class="medium material-icons">save</i>
        </span>
    );
}
export default FavBtn;