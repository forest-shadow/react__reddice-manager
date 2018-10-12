import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import jwtDecode from 'jwt-decode'

import history from './providers/historyProvider'
import setAuthorizationToken from './utils/setAuthorizationToken'

import App from './components/App'
import Greetings from './components/Greetings'
import SignupPage from './components/signup/SignupPage'
import LoginPage from './components/login/LoginPage'
import NewEventPage from './components/events/NewEventPage'
import { setCurrentUser } from './actions/authActions'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route exact path='/' component={Greetings} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/login' component={LoginPage} />
        <Route path="/new-event" component={NewEventPage} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
)