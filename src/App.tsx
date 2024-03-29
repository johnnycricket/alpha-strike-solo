import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import Attack from './routes/Attack';
import Firing from './routes/Firing';
import Movement from './routes/Movement';
import Targeting from './routes/Targeting';
import Dashboard from './routes/Dash';
import { About } from './routes/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/attack" element={<Attack/>}/>
        <Route path="/movement" element={<Movement/>}/>
        <Route path="/targeting" element={<Targeting/>}/>
        <Route path="/firing" element={<Firing/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
