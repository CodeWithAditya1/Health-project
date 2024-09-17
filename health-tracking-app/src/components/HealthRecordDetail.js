import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const HealthRecordDetail = () => {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/health-records/${id}`)
      .then(response => setRecord(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`/health-records/${id}`)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  const handleEdit = () => {
    // Implement edit functionality here
  };

  if (!record) return <div>Loading...</div>;

  return (
    <div>
      <h1>Health Record Detail</h1>
      <div>Date: {record.date}</div>
      <div>Temperature: {record.bodyTemperature} °C</div>
      <div>Blood Pressure: {record.bloodPressure}</div>
      <div>Heart Rate: {record.heartRate} BPM</div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default HealthRecordDetail;
