import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class Greetings extends Component {
  render() {
    return (
      <div className="jumbotron mt-4">
        <h1>Hello from React!!</h1>
      </div>
    )
  }
}

export default hot(module)(Greetings)