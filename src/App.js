import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Places from './components/Places';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Places />
      <Chat />
    </div>
  );
}

export default App;