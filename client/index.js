import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const history = createBrowserHistory()

import App from './components/App'
import Greetings from './components/Greetings'
import SignupPage from './components/signup/SignupPage'

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route exact path='/' component={Greetings} />
        <Route path='/signup' component={SignupPage} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
)