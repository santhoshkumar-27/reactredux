import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';


function pressLike(): string {
  return 'this is function'
}

function passFuncti(fn: () => string) {
  console.log('passFuncti', fn())
}

passFuncti(pressLike)
  
function App() {
  return (
    <Counter />
  );
}

export default App;
