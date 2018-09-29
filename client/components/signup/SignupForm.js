import React, { Component } from 'react'
import PropTypes from 'prop-types'

import timezones from '../../data/timezones'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.userSignupRequest(this.state)
  }

  render() {
    const options = Object.entries(timezones).map(entry => <option key={entry[0]} value={entry[1]}>{entry[1]}</option>)

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
          >
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary mt-2">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm