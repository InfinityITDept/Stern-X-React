import React from 'react';
import './App.css';
import Landing from "./layout/Landing";
import Nav from "./layout/components/Nav";
import Footer from "./layout/components/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
