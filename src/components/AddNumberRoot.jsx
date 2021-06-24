import React, {Component} from 'react';
import AddNumber from "../containers/AddNumber";

export default  class AddNumberRoot extends Component {
  render(){
    return(
      <div>
        <h1>Add Number Root</h1>
        <AddNumber onClick={function(number){
                    this.props.onClick(number);
                   }.bind(this)}
                   number={this.props.number}>

        </AddNumber>
      </div>
    )
  }
}