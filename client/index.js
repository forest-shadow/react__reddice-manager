import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

import history from './providers/historyProvider'

import App from './components/App'
import Greetings from './components/Greetings'
import SignupPage from './components/signup/SignupPage'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
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