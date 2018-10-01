import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { userSignupRequest } from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashMessages'

import SignupForm from './SignupForm'
import PropTypes from "prop-types";

class SignupPage extends Component {

  render() {
    const { userSignupRequest, addFlashMessage } = this.props

    return (
      <div className="row justify-content-center">
        <div className="col-8 pt-5">
          <SignupForm
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
          />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}

export default connect(null, { userSignupRequest, addFlashMessage })(hot(module)(SignupPage))