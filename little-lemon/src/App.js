import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservations" element={<BookingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
