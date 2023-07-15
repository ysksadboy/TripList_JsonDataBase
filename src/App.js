import { useState } from 'react';
import TripList from './components/TripsList';
import './App.css';

function App() {

  const [showTrips, setShowTrips] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>hide trips</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
