import React, { Component } from 'react';

const Fave = (props) => {
    return(
    <div className="favBtn" {...props} tableIndex="0">
        <i class="medium material-icons">favorite</i>
    </div> 
    )
  };
const NotFave = (props) => {
    return(
    <button className="favBtn" {...props}  tableIndex="0">
        <i class="medium material-icons">save</i>
    </button>
    )
};

class FavBtn extends Component {
  constructor(props) {
      super(props);
      this.state = {
        clicked: false
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
    
    handleEvent(e) {
        console.log("click");
            e.preventDefault();
           this.setState({
            clicked:true
           });
           
    }    
    render() {
       const clicked = this.state.clicked; 
    return (
        <div>
        {clicked ? <Fave onClick={this.handleEvent}/> : <NotFave onClick={this.handleEvent}/>}
        </div>
        );
    }   
}
export default FavBtn;