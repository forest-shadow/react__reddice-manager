import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import App from './components/App'
import Greetings from './components/Greetings'
import SignupPage from './components/signup/SignupPage'

ReactDOM.render(
  <Router history={history}>
    <App>
      <Route exact path='/' component={Greetings} />
      <Route path='/signup' component={SignupPage} />
    </App>
  </Router>,
  document.getElementById('app')
)