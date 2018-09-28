import React, { Component } from 'react'

import SignupForm from './SignupForm'

class SignupPage extends Component {

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-5 pt-5">
          <SignupForm />
        </div>
      </div>
    )
  }
}

export default SignupPage