import React , { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchBar, ToolBar, UserTable, UserDetail } from '../components';
import * as actions from '../actions';

const { changeActive, addFilter, searchName, searchBirthYear, searchCity } = actions;

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }


onKeyUp(value, props) {
switch(props){
  case props.onKeyUpCity:
return this.store.dispatch(searchCity(value));
  case props.onKeyUpName:
return this.store.dispatch(searchName(value));
  case props.onKeyUpBirthYear:
return this.store.dispatch(searchBirthYear(value))
}
}

onKeyUpCity(value) {

return this.store.dispatch(searchCity(value));
}

onKeyUpName(value) {

return this.store.dispatch(searchName(value));
}

onKeyUpBirthYear(value) {

return this.store.dispatch(searchBirthYear(value));
}



  activeUserChanged(id) {
    this.store.dispatch(changeActive(id));
  }

  onSorted(type) {
    this.store.dispatch(addFilter({type}));
  }

  render () {
    const state = this.store.getState();

    return (
      <div className="app container-fluid">
        <SearchBar onKeyUp={this.onKeyUp.bind(this)}
                    onKeyUpCity={this.onKeyUpCity.bind(this)}
                    onKeyUpBirthYear={this.onKeyUpBirthYear.bind(this)}
                    onKeyUpName={this.onKeyUpName.bind(this)}
                    />

        <ToolBar onSorted={this.onSorted.bind(this)} />

        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <UserDetail isFetching={state.isFetching} activeUser={state.activeUser} />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserTable
              isFetching={state.isFetching}
              userData={state.filteredData}
              activeUserChanged={this.activeUserChanged.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}



function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(SearchApp);
