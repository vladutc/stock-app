import React from 'react';
import Filter from './components/Filter/Filter';
import './App.css';

const Title = () => <h1>Simple stock app</h1>

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Filter></Filter>
    </div>
  );
}

export default App;
