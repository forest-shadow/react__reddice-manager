import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Greetings from './Greetings'

class App extends Component {
  render() {
    return (<Greetings />)
  }
}

export default hot(module)(App)