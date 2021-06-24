import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberDefault';

class App extends Component {
  state = {number : 0}
  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot number={this.state.number}
                       onClick={function(number){
                        this.setState({number:this.state.number+1})
                       }.bind(this)}
        ></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}>
        </DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
