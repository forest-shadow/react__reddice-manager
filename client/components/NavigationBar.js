import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from '../actions/authActions'

class NavigationBar extends Component {
  logout(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const userLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={this.logout.bind(this)}>Logout</a>
        </li>
      </ul>
    )

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <Link className="navbar-brand" to="/">Red Dice</Link>

        { isAuthenticated ? userLinks : guestLinks }
      </nav>
    )
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(NavigationBar)