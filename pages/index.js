import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      submitted: false,
    }
  }

  render () {
    const email = this.state.email;

    const handleEmail = (e) => {
      this.setState({ email: e.target.value });
    }

    const handleSubmit = () => {
      this.setState({ submitted: true });
    }

    const genSignUp = () => {
      if (this.state.submitted) {
        return (
          <div className="signup-container">
            <div
              className="thanks"
            >
              <span>Thanks!</span>
            </div>
          </div>
        )
      }
      return (
        <div className="signup-container">
          <input
            onChange={handleEmail}
            placeholder="Leave us your email and we'll get in touch!"
            value={email}
          />
          <div
            className="submit-btn"
            onClick={handleSubmit}
          >
            <span>Submit</span>
          </div>
        </div>
      );
    }

    return (
      <div className="landing">
        <p className="title">Progressive Student Association</p>
        {genSignUp()}
      </div>
    )
  }
}
