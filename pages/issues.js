import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class Issue extends React.Component {
  render() {
    
  }
}


export default class Issues extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  render () {

    const searchTerm = this.state.searchTerm.toLowerCase();

    const handleSearch = (e) => {
      this.setState({ searchTerm: e.target.value });
    }

    return (
      <div className="endorsements content">
        <div className="search-container">
          <input
            placeholder="Search"
            className="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="endorse-list">
        </div>
      </div>
    )
  }
}
