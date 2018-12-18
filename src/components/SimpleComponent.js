
import React, { Component } from 'react';

class SimpleComponent extends Component {

  state={
    mood: "happy"
  }

  handleClick=()=>{
    let states = ''
  if(this.state.mood === "happy"){
      states="sad"
  }else if(this.state.mood === "sad"){
    states="happy"
  }
  this.setState({
    mood: states
  })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }

}

export default SimpleComponent;
