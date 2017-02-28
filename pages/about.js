import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class About extends React.Component {
  render () {
    return (
      <div className="about content">
        <p className="title">Hi</p>
        <p className="desc">The Progressive Student Association (PSA) was originally founded as UC Berkeley for Bernie (UCB4B). After the primary election, we reorganized ourselves as PSA in order to continue the political revolution at UC Berkeley. For info on how to get involved, comments, concerns, and questions, please do not hesitate to message this page, or email us at <span className="highlight">ucberkeleypsa@gmail.com</span>.</p>
      </div>
    )
  }
}
