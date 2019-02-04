import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './App';
import ducks from './ducks';
import styles from './styles';
import injectSheet from 'react-jss';

const reducer = combineReducers({ ...ducks.reducer });

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const mapStateToProps = state => ({
  initDone: ducks.selectors.getInitDone(state),
  verdict: ducks.selectors.getVerdict(state),
  refresh: ducks.selectors.getRefresh(state)
});

const mapDispatchToProps = {
  getData: ducks.actions.getData,
  setQuestion: ducks.actions.setQuestion,
  setInitDone: ducks.actions.setInitDone,
  resetAll: ducks.actions.resetAll
};

const Enhanced = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectSheet(styles)
)(App);

ReactDOM.render(
  <Provider store={store}>
    <Enhanced />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
