import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class Officer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="officer">
        <div className="potrait-container">
          <img className="portrait" src={prefixLink("/assets/logo.png")} /> <br/>
        </div>
        <span className="name">{this.props.name}</span>
        <span className="position">{this.props.position}</span>
      </div>
    );
  }
}



export default class About extends React.Component {
  render () {
    return (
      <div>
        <div className="about content">
          <p className="title">Here&#39;s a quick introduction.</p>
          <p className="desc">The Progressive Student Association (PSA) was originally founded as UC Berkeley for Bernie (UCB4B) during the 2016 Presidential Race. After the primary election, we reorganized ourselves as PSA in order to continue the political revolution at UC Berkeley. For info on how to get involved, comments, concerns, and questions, please do not hesitate to message our Facebook page or to email us at <span className="highlight">ucberkeleypsa@gmail.com</span>.</p>
        </div>
        <div className="officers-container">
          <p className="title">And now ... the team!</p>
          <div className="officer-list">
            <Officer
              name={"Natasha Welingkar"}
              position={"President"}
            />
            <Officer
              name={"Natasha Welingkar"}
              position={"President"}
            />
            <Officer
              name={"Natasha Welingkar"}
              position={"President"}
            />
            <Officer
              name={"Natasha Welingkar"}
              position={"President"}
            />
            <Officer
              name={"Natasha Welingkar"}
              position={"President"}
            />
            <Officer
              name={"Natasha Welingkar"}
              position={"President"}
            />
            <Officer
              name={"Natasha Welingkar"}
              position={"President"}
            />
            <Officer
              name={"Natasha Welingkar"}
              position={"President"}
            />
          </div>
        </div>
      </div>
    )
  }
}
