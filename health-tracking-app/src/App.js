import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddHealthRecordForm from './components/AddHealthRecordForm';
import HealthRecordDetail from './components/HealthRecordDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddHealthRecordForm />} />
        <Route path="/record/:id" element={<HealthRecordDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
