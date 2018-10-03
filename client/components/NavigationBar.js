import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class NavigationBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <Link className="navbar-brand" to="/">Red Dice</Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    )
  }

}

export default NavigationBar