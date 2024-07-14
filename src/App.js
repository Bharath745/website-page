import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Departments from './components/DepartmentPAge';
import Events from './components/Event';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/college"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        
      </main>
      <Footer />
    </Router>
  );
};

export default App;
