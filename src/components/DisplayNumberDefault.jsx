import React, {Component} from "react";
import DispayNumber from "../containers/DisplayNumber";

export default class DisplayNumberRoot extends Component {
    render(){
      return(
        <div>
          <h1>Display Number Root</h1>
          <DispayNumber number={this.props.number}></DispayNumber>
        </div>
      )
    }
}