import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landingpage.jsx';
import AppDashboard from './pages/AppDashboard';
import ChatbotWidget from './components/ChatbotWidget'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<AppDashboard />} />
      </Routes>
      <ChatbotWidget />
    </Router>
  );
}

export default App;
