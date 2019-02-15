import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import { INITIAL_STATE } from '../constants/InitialState';

const enhancer = compose(
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  ),
  DevTools.instrument()
);

export default function configureStore(initialState = INITIAL_STATE) {

  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
