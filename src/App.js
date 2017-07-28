import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const contentNode = document.getElementById('root');

class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const borderedStyle = {border: "1px solid silver", padding: 4};

    return (
      <table style={{borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={borderedStyle}>Id</th>
            <th style={borderedStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <IssueRow issue_id={1}
            issue_title="Error in console when clicking Add" />
          <IssueRow issue_id={2}
            issue_title="Missing bottom border on panel" />
        </tbody>
      </table>
    );
  }
}

class IssueRow extends React.Component {
  render() {
    const borderedStyle = {border: "1px solid silver", padding: 4};

    return (
      <tr>
        <td style={borderedStyle}>{this.props.issue_id}</td>
        <td style={borderedStyle}>{this.props.issue_title}</td>
      </tr>
    );
  }
}
IssueRow.propTypes = {
  issue_id: React.PropTypes.number.isRequired
};
IssueRow.defaultProps = {
  issue_title: '-- no title --'
};

class IssueAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for an Issue Add entry form.</div>
    );
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
        <hr />
      </div>
    );
  }
}

export default IssueList;
