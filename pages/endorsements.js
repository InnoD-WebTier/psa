import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class Endorsement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

  }
}

export default class Endorsements extends React.Component {
  render () {
    return (
      <div className="endorsements content">
        <div className="search-container">
          <input
            placeholder="Search"
            className="search"
          />
        </div>
      </div>
    )
  }
}
