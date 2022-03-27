import React from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Dashboard from './routes/Dashboard';
import Deployment from './routes/Deployment';
import Firing from './routes/Firing';
import Movement from './routes/Movement';
import Targeting from './routes/Targeting';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/movement" element={<Movement/>}/>
          <Route path="/targeting" element={<Targeting/>}/>
          <Route path="/firing" element={<Firing/>}/>
          <Route path="/deployment" element={<Deployment/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
