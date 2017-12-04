import React, { Component } from 'react';
import './App.css';
import Index from './routes/index';
import Login from './routes/login';
import Lobby from './routes/lobby';
import OnWork from './routes/onWork';
import Mode from './routes/mode';
import Bieda from './routes/bieda';

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
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/lobby' component={Lobby}/>
                  <Route exact path='/onWork' component={OnWork}/>
                  <Route exact path='/tryb' component={Mode}/>
                  <Route exact path='/bieda' component={Bieda}/>

              </div>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
