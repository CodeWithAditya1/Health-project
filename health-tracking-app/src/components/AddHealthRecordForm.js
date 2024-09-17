import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddHealthRecordForm = () => {
  const [date, setDate] = useState('');
  const [bodyTemperature, setBodyTemperature] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/health-records', {
      date,
      bodyTemperature,
      bloodPressure,
      heartRate
    })
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Health Record</h1>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Body Temperature (°C):
        <input type="number" value={bodyTemperature} onChange={(e) => setBodyTemperature(e.target.value)} required />
      </label>
      <label>
        Blood Pressure:
        <input type="text" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} required />
      </label>
      <label>
        Heart Rate (BPM):
        <input type="number" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddHealthRecordForm;
