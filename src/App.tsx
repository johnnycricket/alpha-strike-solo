import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Attack from './routes/Attack';
import Firing from './routes/Firing';
import Movement from './routes/Movement';
import Targeting from './routes/Targeting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/attack" element={<Attack/>}/>
        <Route path="/movement" element={<Movement/>}/>
        <Route path="/targeting" element={<Targeting/>}/>
        <Route path="/firing" element={<Firing/>}/>
      </Routes>
    </div>
  );
}

export default App;
