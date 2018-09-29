import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import timezones from '../../data/timezones'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
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
    this.setState({ errors: {}, isLoading: true })
    e.preventDefault()
    this.props.userSignupRequest(this.state)
      .then(response => {})
      .catch((errResponse) => this.setState({ errors: errResponse.response.data, isLoading: false }))
  }

  render() {
    const { errors } = this.state
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
            className={classnames("form-control", { 'is-invalid': errors.username })}
          />
          {errors.username && <span className="invalid-feedback">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className={classnames("form-control", { 'is-invalid': errors.email })}
          />
          {errors.username && <span className="invalid-feedback">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className={classnames("form-control", { 'is-invalid': errors.password })}
          />
          {errors.password && <span className="invalid-feedback">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className={classnames("form-control", { 'is-invalid': errors.passwordConfirmation })}
          />
          {errors.passwordConfirmation && <span className="invalid-feedback">{errors.passwordConfirmation}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            className={classnames("form-control", { 'is-invalid': errors.timezone })}
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
          >
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
          {errors.timezone && <span className="invalid-feedback">{errors.timezone}</span>}
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary mt-2"
            disabled={this.state.isLoading}
          >
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