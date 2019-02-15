import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import SearchApp from './SearchApp';
import rootReducer from '../reducers';
import { fetchUsers } from '../actions';

import DevTools from './DevTools';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    store.dispatch(fetchUsers(this.props.store));
  }

  render() {
    const store = this.props.store;
    const devTools = __DEV__? (<DevTools />): ''

    return (
      <Provider store={store}>
        <div>
          <SearchApp store={store} />
          {devTools}
        </div>
      </Provider>
    );
  }
}
