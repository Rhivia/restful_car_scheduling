import React from 'react';
import { Grid } from '@material-ui/core';
import CarCard from './features/car_card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {CarCard()}
      </header>
    </div>
  );
}

export default App;
