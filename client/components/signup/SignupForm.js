import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TextFieldGroup from '../common/TextFieldGroup'

import validateInput from '../../../server/shared/validations/signup'
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

  isValid() {
    const { errors, isValid } = validateInput(this.state)

    if (!isValid) {
      this.setState({ errors })
    }

    return isValid
  }

  onSubmit(e) {
    e.preventDefault()

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })

      this.props.userSignupRequest(this.state)
        .then(response => {})
        .catch((errResponse) => this.setState({
          errors: errResponse.response.data,
          isLoading: false
        }))
    }
  }

  render() {
    const { errors } = this.state
    const options = Object.entries(timezones).map(entry => <option key={entry[0]} value={entry[1]}>{entry[1]}</option>)

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          field="passwordConfirmation"
          type="password"
        />

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            className={classnames("form-control", { 'is-invalid': errors.timezone })}
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