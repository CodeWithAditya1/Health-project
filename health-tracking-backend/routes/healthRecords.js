const express = require('express');
const router = express.Router();
const HealthRecord = require('../models/HealthRecord');

// Create a new health record
router.post('/', async (req, res) => {
  const { date, bodyTemperature, bloodPressure, heartRate } = req.body;
  try {
    const newRecord = new HealthRecord({
      date,
      bodyTemperature,
      bloodPressure,
      heartRate
    });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all health records
router.get('/', async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific health record by ID
router.get('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    if (!record) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a health record
router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await HealthRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecord) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json(updatedRecord);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a health record
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecord = await HealthRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) return res.status(404).json({ message: 'Record not found' });
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
