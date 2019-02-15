import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  onKeyUp(e) {
    this.props.onKeyUp(e.target.value);
  }
  onKeyUpName(e) {
    this.props.onKeyUpName(e.target.value);
  }
  onKeyUpCity(e) {
    this.props.onKeyUpCity(e.target.value);
  }
  onKeyUpBirthYear(e) {
    this.props.onKeyUpBirthYear(e.target.value);
  }



  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="searchbar form-group"
                id="name">
            <input
               type="text"
               onKeyUp={this.onKeyUpName.bind(this)}
               className="form-control"
               placeholder="Search people by name"
             />
          </div>
        </div>
          <div className="col-sm-3">
            <div className="searchbar form-group"
                  id="name">
              <input
                type="text"
                onKeyUp={this.onKeyUpBirthYear.bind(this)}
                className="form-control"
                placeholder="Search people by birthyear"
                />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="searchbar form-group"
                  id="name">
              <input
                type="text"
                onKeyUp={this.onKeyUpCity.bind(this)}
                className="form-control"
                placeholder="Search people by city"
                />
            </div>
          </div>
      </div>
    );
  }
}
