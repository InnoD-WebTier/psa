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
      error: false,
    }
  }

  render () {
    const email = this.state.email;

    const handleEmail = (e) => {
      this.setState({ email: e.target.value });
      this.setState({ error: false });
    }

    const handleSubmit = () => {
      const email = this.state.email;
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(this.state.email);
      const match = email.match(re);
      console.log(match);
      if (match) {
        this.setState({ submitted: true });
        this.setState({ error: false });
      } else {
        this.setState({ error: true });
      }
    }

    const genErrorMsg = () => {
      if (this.state.error) {
        return (
          <div className="error-msg">
            <span>Please enter a valid email address</span>
          </div>
        )
      }
      return (
        <div className="error-msg hidden">
          <span>Please enter a valid email address</span>
        </div>
      );
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
            type="email"
            placeholder="Leave us your email and we'll get in touch!"
            value={email}
          />
          <div
            className="submit-btn"
            onClick={handleSubmit}
          >
            <span>Submit</span>
          </div>
          {genErrorMsg()}
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
