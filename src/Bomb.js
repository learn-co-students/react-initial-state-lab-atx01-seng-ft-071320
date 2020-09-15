// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }

    }

    detonate = () => {
        if (this.state.secondsLeft > 0) {
            return  <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
        } else {
            return <h1>Boom!</h1>
        }
    }



    render() {
        return (<div>{this.detonate()}</div>)
    }

//Alternate solution

// class Bomb extends React.Component {

//     constructor(props) {
//       super() 
  
//       this.state = {
//         secondsLeft: props.initialCount
//       }
//     }
  
//     render() {
//       const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
  
//       return (
//         <div>{message}</div>
//       )
//     }
//   }
  
//   export default Bomb;


}