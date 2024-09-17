import React from 'react';
import { Link } from 'react-router-dom';
import './HealthRecordItem.css';

const HealthRecordItem = ({ record, onDelete }) => {
  return (
    <div className="record-item">
      <div className="record-info">
        <h2>{record.date.split('T')[0]}</h2>
        <p><strong>Temperature:</strong> {record.bodyTemperature} °C</p>
        <p><strong>Blood Pressure:</strong> {record.bloodPressure}</p>
        <p><strong>Heart Rate:</strong> {record.heartRate} BPM</p>
      </div>
      <div className="record-actions">
        <Link to={`/record/${record._id}`} className="view-details">View Details</Link>
        <button onClick={() => onDelete(record._id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default HealthRecordItem;
