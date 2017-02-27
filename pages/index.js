import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {

  render () {
    return (
      <div className="landing-container">
        <p className="title">Progressive Student Association</p>
        <div className="signup-container">
          <input
            placeholder="Leave us your email and we'll get in touch!"
          />
          <div className="submit-btn">
            <span>Submit</span>
          </div>
        </div>
      </div>
    )
  }
}
