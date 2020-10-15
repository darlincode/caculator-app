import React, { Component } from 'react';
import './input.css';


class input extends Component{
  render() {
  return (
        <div classname= "input">  
        {this.props.children}

       </div>
    
     
  );
}
}
export default input;