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

    const imgSource = '/assets/' + this.props.name.toLowerCase() + '.jpeg';

    return (
      <div className="endorse-card">
        <img src={prefixLink(imgSource)} />
        <div className="metadata">
          <span className="name">{this.props.name}</span> <br />
          <span className="position">{this.props.position}</span>
        </div>
      </div>
    );
  }
}

export default class Endorsements extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  render () {

    const searchTerm = this.state.searchTerm.toLowerCase();

    const people = [
      {
        name: "Andre",
        position: "President",
      },
      {
        name: "Helen",
        position: "Other Thing",
      },
      {
        name: "Ian",
        position: "Other Thing",
      },
      {
        name: "Raj",
        position: "Other Thing",
      },
      {
        name: "Ian",
        position: "Other Thing",
      },
    ];

    const filtered = people.filter((person) => {
      const valid = person.name.toLowerCase().includes(searchTerm);
      return valid;
    });

    const endorseList = filtered.map((person, i) => (
      <Endorsement
        key={i}
        name={person.name}
        position={person.position}
      />
    ));

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
          {endorseList}
        </div>
      </div>
    )
  }
}
