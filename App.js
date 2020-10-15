import React, { Component } from 'react';
import './App.css';
import Button from './components/Button.css';
import input from './components/input.css';
import  './components/ClearButton.css';


class App extends Component{
constructor (props) {
  super(props);
  

   this.setState ={
     operator: "",
     previousNumber : "",
     currentNumber : "",
     input : "",
    
   }
};

  addToInput = val =>{
    this.setState({input : this.setState.input + val });
    
}
render() {
  return (
    <div className="App">
    <div classname = "calc-wrapper">
      <div div classname = "row">
        <input></input>
        </div>
        <div>
        <button handleClick={this.addToInput}><ul class="list-inline">
          <i class="fa fa-hourglass-o" aria-hidden="true"></i>
          <li class="list-inline-item">#1</li>
          <li class="list-inline-item">#2</li>
          <li class="list-inline-item">#3</li>
        </ul></button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>/</button>
        </div>
        <div classname = "row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>*</button>
        </div>
        <div classname = "row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        </div>
        <div classname = "row">
        <button>+</button>
        <button>.</button>
        <button>=</button>
        <button>-</button>
        </div>
        
         <div classname = "row"></div>
          
    </div>
     </div>
  );
}
}
export default App;
