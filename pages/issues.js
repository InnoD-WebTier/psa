import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class Issue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="issue">
        <p className="name">{this.props.name}</p>
        <p className="description">{this.props.description}</p>
      </div>
    );
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
    const issues = [
      {
        name: "Berkeley Minimum Wage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        type: "current",
      },
      {
        name: "Berkeley Housing Projects",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        type: "current",
      },
      {
        name: "Homelessness in Berkeley",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        type: "current",
      },
      {
        name: "2016 Election",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        type: "past",
      },
      {
        name: "2014 Midterm Elections",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        type: "past",
      },
    ];

    const currentIssues = issues.filter(issue => issue.type === "current");
    const pastIssues = issues.filter(issue => issue.type === "past");

    const currentList = currentIssues.map((issue, i) => (
      <Issue
        key={i}
        name={issue.name}
        description={issue.description}
      />
    ));

    const pastList = pastIssues.map((issue, i) => (
      <Issue
        key={i}
        name={issue.name}
        description={issue.description}
      />
    ));

    return (
      <div className="issues content">
        <div className="current-issues">
          <p className="header">Current Issues</p>
          {currentList}
        </div>
        <div className="past-issues">
          <p className="header">Past Issues</p>
          {pastList}
        </div>
      </div>
    )
  }
}
