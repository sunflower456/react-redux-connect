import React, {Component} from 'react';

export default class DispayNumber extends Component {

  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.props.number} readOnly></input>
      </div>
    )
  }
}

