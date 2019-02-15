import React, { Component } from 'react';

export default class UserRow extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    this.props.activeUserChanged(this.props.user.get('id'));
  }

  render() {
    const userData = this.props.user;

    return (
      <tr onClick={this.handleClick.bind(this)}>
        <td>{userData.get('birthYear')}</td>
        <td>{userData.get('name')}</td>
        <td>{userData.get('city')}</td>
      </tr>
    );
  }
}
