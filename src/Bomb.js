import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props){
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        let bombMessage = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return(
            <div>{bombMessage}</div>
        )
    }
}

export default Bomb