import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;