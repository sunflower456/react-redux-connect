import React, {Component} from "react";


export default class AddNumber extends Component {
    state = {size : 0}
    render() {
      return (
        <div>
          <input type="button" value="+" onClick={function(){
              this.props.onClick(this.state.size); 
          }.bind(this)}></input>
          <input type="text" value={this.state.size} onChange={function(e){
              this.setState({size:Number(e.target.value)})
              
          }.bind(this)}></input>
        </div>
      )
    }
  }