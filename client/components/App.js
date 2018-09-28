import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import NavigationBar from './NavigationBar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    )
  }
}

export default App