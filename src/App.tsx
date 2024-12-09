import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { LearningModules } from './pages/LearningModules';
import { Community } from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning-modules" element={<LearningModules />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-gray-300 py-8 text-center">
          <p>&copy; {new Date().getFullYear()} Sonivale. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;