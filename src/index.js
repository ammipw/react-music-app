import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';
import displayedSongs from './reducers/numSongsReducer';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

const store = createStore(displayedSongs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
