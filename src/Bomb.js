// your Bomb code here!
import React from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component {

    constructor(props) {
        super();
        this.state = {
            // someKey: props.someValue,
            secondsLeft: props.initialCount
        }
    }
    

    bombMessage = () => {
        if (this.state.secondsLeft > 0) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        } else if (this.state.secondsLeft === 0) {
            return `Boom!`
        } else {
            return "You have died. RIP."
        }
    }

    render () {
        return this.bombMessage();
    }

}