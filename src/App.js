import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './routes/index.js';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Router>
              <div>
                  <Route exact path='/' component={Index}/>
              </div>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
