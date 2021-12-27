import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Rarity from './pages/Rarity'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/rarity' element={<Rarity />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
