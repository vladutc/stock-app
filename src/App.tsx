import React from 'react';
import Filter from './components/Filter/Filter';
import Chart from './components/Chart/Chart';
import './App.css';
import FilterManager from './utils/FilterManager';

const Title = () => <h1>Simple stock app</h1>

function App() {
  return (
    <div className="App">
      <FilterManager>
        <Title></Title>
        <Filter></Filter>
        <Chart></Chart>
      </FilterManager>
    </div>
  );
}

export default App;
