import React, {Component} from 'react'
import PropTypes from 'prop-types'

import EventForm from './EventForm'

class NewEventPage extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8 pt-5">
          <EventForm />
        </div>
      </div>
    )
  }
}

NewEventPage.propTypes = {
  // myProp: PropTypes.object
}

export default NewEventPage