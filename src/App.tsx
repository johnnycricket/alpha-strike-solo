import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from 'react-router-dom';
import './App.css';
import Dashboard from './routes/dashboard';
import Deployment from './routes/Deployment';
import Firing from './routes/Firing';
import Movement from './routes/Movement';
import Targeting from './routes/Targeting';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Dashboard/>
          </Route>
          <Route path="/movement">
            <Movement/>
          </Route>
          <Route path="/targeting">
            <Targeting/>
          </Route>
          <Route path="/firing">
            <Firing/>
          </Route>
          <Route path="/deployment">
            <Deployment/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
