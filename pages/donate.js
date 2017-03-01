import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {

  render () {
    return (
      <div className="landing">
        <p className="title">Coming soon!</p>
      </div>
    )
  }
}
