import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import NavigationBar from './NavigationBar'
import FlashMessagesList from './flash/FlashMessagesList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    )
  }
}

export default hot(module)(App)