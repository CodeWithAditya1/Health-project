import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Dashboard.css'
const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/health-records')
      .then(response => setRecords(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/health-records/${id}`)
      .then(() => setRecords(records.filter(record => record._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Health Metrics Dashboard</h1>
      <SearchBar setSearch={setSearch} />
      <Link to="/add">Add New Record</Link>
      <ul>
        {records.filter(record => 
          record.date.includes(search) || 
          record.bodyTemperature.toString().includes(search) ||
          record.bloodPressure.includes(search) ||
          record.heartRate.toString().includes(search)
        ).map(record => (
          <li key={record._id}>
            <div>Date: {record.date}</div>
            <div>Temperature: {record.bodyTemperature} °C</div>
            <div>Blood Pressure: {record.bloodPressure}</div>
            <div>Heart Rate: {record.heartRate} BPM</div>
            <Link to={`/record/${record._id}`}>View Details</Link>
            <button onClick={() => handleDelete(record._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
