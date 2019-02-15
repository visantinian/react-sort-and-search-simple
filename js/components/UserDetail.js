import React, { Component } from 'react';

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const UserDetail = this.props.activeUser;

    const detailMarkup = !UserDetail? (
      <h3>Nothing found :(</h3>
    ) : (
      <div>
        <div>
          <h3>{UserDetail.get('name')}</h3>
          <table className="user-info table table-responsive">
            <tbody>
              <tr>
                <td>Birthday:</td>
                <td>{UserDetail.get('birthYear')}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{UserDetail.get('city')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

    const loading = <span></span>;

    return this.props.isFetching? loading: detailMarkup;
  }
}
