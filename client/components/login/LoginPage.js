import React, {Component} from 'react'

import LoginForm from './LoginForm'

class LoginPage extends Component {

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8 pt-5">
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage